import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const FALLBACK_MODELS = [
  'gemini-flash',            // 通称/汎用フラッシュ (最新モデルに自動ルーティング)
  'gemini-pro',              // 通称/汎用プロ (最新モデルに自動ルーティング)
  'gemini-3.7-flash',        // 最新フラッグシップ
  'gemini-3.6-flash',        // 高速・高効率
  'gemini-3.5-flash',        // 安定版
  'gemini-3.1-pro-preview',  // 高度な推論向け
  'gemini-2.5-pro',          // 旧世代上位
  'gemini-2.0-flash',        // 旧世代安定版
  'gemini-1.5-flash'         // 最終安全ネット
];

export async function POST(req: Request) {
  try {
    const { weaknessRecords, vakType, lang } = await req.json();

    if (!weaknessRecords || weaknessRecords.length === 0) {
      return NextResponse.json({ success: false, error: 'No weakness records provided' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'GEMINI_API_KEY not configured' });
    }

    const outputLang = 'ベトナム語（vi）'; // Forced Vietnamese for all advice

    const recordsSummary = weaknessRecords.map((r: any, i: number) => (
      `[${i + 1}] トピック: ${r.topic} | カテゴリ: ${r.categoryName} | 誤答: 「${r.incorrectAnswer}」→ 正答: 「${r.correctAnswer}」| エラー種別: ${r.errorType}`
    )).join('\n');

    const vakLabels: Record<string, string> = {
      visual: '視覚優位（Visual）',
      auditory: '聴覚優位（Auditory）',
      kinesthetic: '体感優位（Kinesthetic）',
    };
    const vakLabel = vakLabels[vakType] || vakType;

    const prompt = `あなたは日本語学習の専門AIコーチです。
以下は学習者の誤答履歴（弱点記録）です。この記録を深く分析して、学習者の弱点パターンを特定し、${vakLabel}タイプに最適化された具体的な学習アドバイスと、弱点克服のための新しい練習問題（3問）を生成してください。

【学習者のVAKタイプ】: ${vakLabel}
【誤答履歴】:
${recordsSummary}

【出力言語】: ${outputLang}

以下のJSON形式のみで出力してください（コードブロックなし）:
{
  "patternSummary": "弱点のパターンを2〜3文で要約",
  "weakCategories": [
    { "name": "カテゴリ名", "count": 件数, "reason": "なぜ間違いやすいかの説明" }
  ],
  "priorityTopics": ["最優先で復習すべきトピック1", "トピック2", "トピック3"],
  "vakStudyPlan": {
    "title": "学習プランのタイトル",
    "steps": [
      { "step": 1, "action": "アクション", "duration": "目安時間" }
    ]
  },
  "encouragement": "励ましのメッセージ",
  "practiceQuestions": [
    {
      "question": "弱点を克服するための新しい練習問題（日本語）",
      "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
      "answerIndex": 0,
      "explanation": "正解の理由とVAKタイプに合わせた解説"
    }
  ]
}`;

    const genAI = new GoogleGenerativeAI(apiKey);
    let analysis = null;
    let lastError: any = null;

    for (const modelName of FALLBACK_MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const clean = responseText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
        analysis = JSON.parse(clean);
        break;
      } catch (err: any) {
        console.warn(`[analyze-weakness] Model ${modelName} failed: ${err.message}`);
        lastError = err;
      }
    }

    if (!analysis) {
      return NextResponse.json({
        success: false,
        error: 'AIが正しいJSON形式を返しませんでした。もう一度お試しください。',
        details: lastError?.message,
      });
    }

    return NextResponse.json({ success: true, analysis });

  } catch (err: unknown) {
    console.error('[analyze-weakness] Error:', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message });
  }
}
