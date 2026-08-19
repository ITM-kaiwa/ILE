import os

os.makedirs('app/api/gemini/analyze-weakness', exist_ok=True)

content = """\
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const { weaknessRecords, vakType, lang } = await req.json();

    if (!weaknessRecords || weaknessRecords.length === 0) {
      return NextResponse.json({ success: false, error: 'No weakness records provided' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'GEMINI_API_KEY not configured' }, { status: 500 });
    }

    const isVi = lang === 'vi';
    const outputLang = isVi ? 'ベトナム語（vi）' : '日本語（ja）';

    // Build a summary of weakness records for the prompt
    const recordsSummary = weaknessRecords.map((r: any, i: number) => (
      `[${i + 1}] トピック: ${r.topic} | カテゴリ: ${r.categoryName} | 誤答: 「${r.incorrectAnswer}」→ 正答: 「${r.correctAnswer}」| エラー種別: ${r.errorType}`
    )).join('\\n');

    const vakLabels: Record<string, string> = {
      visual: '視覚優位（Visual）',
      auditory: '聴覚優位（Auditory）',
      kinesthetic: '体感優位（Kinesthetic）',
    };
    const vakLabel = vakLabels[vakType] || vakType;

    const prompt = `あなたは日本語学習の専門AIコーチです。
以下は学習者の誤答履歴（弱点記録）です。この記録を深く分析して、学習者の弱点パターンを特定し、${vakLabel}タイプに最適化された具体的な学習アドバイスを生成してください。

【学習者のVAKタイプ】: ${vakLabel}
【誤答履歴】:
${recordsSummary}

【出力言語】: ${outputLang}

以下のJSON形式のみで出力してください（マークダウンのコードブロックは使用しないこと）:
{
  "patternSummary": "弱点のパターンを2〜3文で要約（例：助詞の使い分けと動詞の活用形で特に間違いが多い）",
  "weakCategories": [
    { "name": "カテゴリ名", "count": 間違い数, "reason": "なぜ間違いやすいかの説明（1文）" }
  ],
  "priorityTopics": ["最優先で復習すべきトピック1", "トピック2", "トピック3"],
  "vakStudyPlan": {
    "title": "${vakLabel}タイプ向け学習プランのタイトル",
    "steps": [
      { "step": 1, "action": "具体的な学習アクション（VAKタイプに合わせた方法）", "duration": "目安時間" },
      { "step": 2, "action": "...", "duration": "..." },
      { "step": 3, "action": "...", "duration": "..." }
    ]
  },
  "encouragement": "学習者への励ましのメッセージ（1文、優しいトーンで）"
}`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json' },
    });

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const clean = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const analysis = JSON.parse(clean);

    return NextResponse.json({ success: true, analysis });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
"""

with open('app/api/gemini/analyze-weakness/route.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("API route written!")
