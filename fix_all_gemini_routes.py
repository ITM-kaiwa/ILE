import os

FALLBACK_MODELS = [
    "gemini-2.0-flash",
    "gemini-1.5-flash-latest",
    "gemini-1.5-flash",
    "gemini-1.5-pro-latest",
    "gemini-1.5-pro",
]

# ============================================================
# 1. Fix /api/gemini/learn/route.ts
# ============================================================
learn_content = r"""import { NextResponse } from 'next/server';
import { VAK_SYSTEM_PROMPTS, getMockVakLesson } from '@/lib/gemini';
import { VakType } from '@/data/vak-questions';
import { GoogleGenerativeAI } from '@google/generative-ai';

const FALLBACK_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-1.5-pro-latest',
  'gemini-1.5-pro',
];

export async function POST(req: Request) {
  let topic = 'JLPT N5 文法';
  let activeVak: VakType = 'visual';
  let lang = 'vi';

  try {
    const body = await req.json();
    if (body.topic) topic = body.topic;
    if (body.vakType) activeVak = body.vakType;
    if (body.lang) lang = body.lang;

    const isVi = lang === 'vi';
    const systemPrompt = VAK_SYSTEM_PROMPTS[activeVak];

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      const mock = getMockVakLesson(topic, activeVak);
      return NextResponse.json({ success: true, systemPrompt, lesson: mock, source: 'mock_no_key' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const prompt = `${systemPrompt}

【重要】: 必ずトピックの文法や単語自体の意味、使い方、実践的な例文（日本語とベトナム語訳）を豊富に含めて、具体的に解説してください。単なる「学習の手順」や「空のステップ」ではなく、学習者がそのまま読んで理解できる実際の学習コンテンツ（ルールや例文）を提示してください。
${isVi ? '【出力言語指定】: ユーザーのUI言語がベトナム語に設定されています。解説文(contentMarkdown)、構造図(visualDiagram)、音声ダイアログ(auditoryDialogue)、身体アクション(kinestheticAction)など、JSON内のすべての説明文はベトナム語で出力してください（日本語の例文自体は除く）。' : ''}
以下のトピックについて、GeneratedVakLesson に厳密に従ったJSONフォーマットでのみ出力してください。
Markdownのコードブロックは使わず、純粋なJSON文字列のみを返してください。

トピック: ${topic}

JSONスキーマ:
{
  "topic": "文字列",
  "vakType": "${activeVak}",
  "contentMarkdown": "文字列 (Markdown形式で詳しい学習内容)",
  "keyVocabulary": [
    { "word": "文字列", "reading": "文字列", "meaning": "文字列" }
  ],
  "visualDiagram": "文字列 (Mermaid構文のグラフ。コードブロックなし。改行は\\n)",
  "auditoryDialogue": [
    { "speaker": "文字列", "text": "文字列", "audioNote": "文字列" }
  ],
  "kinestheticAction": "文字列 (kinestheticタイプの場合)",
  "practiceQuestions": [
    { "question": "文字列", "options": ["選択肢1", "選択肢2", "選択肢3"], "answerIndex": 0, "hint": "文字列" }
  ]
}`;

    let lastError: any = null;
    let lesson = null;
    let usedModel = '';

    for (const modelName of FALLBACK_MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
        lesson = JSON.parse(cleanJson);
        usedModel = modelName;
        break;
      } catch (err: any) {
        console.warn(`[learn] Model ${modelName} failed: ${err.message}`);
        lastError = err;
      }
    }

    if (!lesson) {
      const mock = getMockVakLesson(topic, activeVak);
      return NextResponse.json({ success: true, lesson: mock, source: 'mock_fallback' });
    }

    return NextResponse.json({ success: true, systemPrompt, lesson, source: `ai:${usedModel}` });

  } catch (error: any) {
    console.error('[learn] Unexpected error:', error);
    const mock = getMockVakLesson(topic, activeVak);
    return NextResponse.json({ success: true, lesson: mock, source: 'mock_error' });
  }
}
"""

with open('app/api/gemini/learn/route.ts', 'w', encoding='utf-8') as f:
    f.write(learn_content)
print("Fixed: /api/gemini/learn/route.ts")

# ============================================================
# 2. Fix /api/gemini/translate/route.ts
# ============================================================
translate_content = r"""import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const FALLBACK_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-1.5-pro',
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text, targetLang } = body;

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: true, translation: '(Không có API Key để dịch)' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    let langName = 'Vietnamese';
    if (targetLang === 'en') langName = 'English';
    else if (targetLang === 'ja') langName = 'Japanese';

    const prompt = `Translate the following Japanese text into ${langName}. Output ONLY the translation, no markdown, no quotes, no explanations:\n\n${text}`;

    let translation = '';
    for (const modelName of FALLBACK_MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        translation = result.response.text().trim();
        break;
      } catch (err: any) {
        console.warn(`[translate] Model ${modelName} failed: ${err.message}`);
      }
    }

    if (!translation) {
      return NextResponse.json({ success: false, translation: '(Lỗi kết nối AI)' });
    }

    return NextResponse.json({ success: true, translation });
  } catch (error: any) {
    console.error('[translate] Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
"""

with open('app/api/gemini/translate/route.ts', 'w', encoding='utf-8') as f:
    f.write(translate_content)
print("Fixed: /api/gemini/translate/route.ts")

# ============================================================
# 3. Fix /api/gemini/explain/route.ts
# ============================================================
explain_content = r"""import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const FALLBACK_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-1.5-pro',
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { explanation } = body;

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: true, explanationVi: '(Chưa cấu hình GEMINI_API_KEY)' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const prompt = `以下の日本語の文法解説をベトナム語に翻訳してください。出力はベトナム語の翻訳文のみとし、挨拶や他のテキストは含めないでください。\n\n【解説】: ${explanation}`;

    let explanationVi = '';
    for (const modelName of FALLBACK_MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        explanationVi = result.response.text().trim();
        break;
      } catch (err: any) {
        console.warn(`[explain] Model ${modelName} failed: ${err.message}`);
      }
    }

    return NextResponse.json({
      success: true,
      explanationVi: explanationVi || '(Lỗi kết nối AI để tạo bản dịch)',
    });
  } catch (error: any) {
    console.error('[explain] Error:', error);
    return NextResponse.json({ success: true, explanationVi: '(Lỗi kết nối AI)' });
  }
}
"""

with open('app/api/gemini/explain/route.ts', 'w', encoding='utf-8') as f:
    f.write(explain_content)
print("Fixed: /api/gemini/explain/route.ts")

# ============================================================
# 4. Fix /api/gemini/analyze-weakness/route.ts
# ============================================================
analyze_content = r"""import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const FALLBACK_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-1.5-pro',
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

    const isVi = lang === 'vi';
    const outputLang = isVi ? 'ベトナム語（vi）' : '日本語（ja）';

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
以下は学習者の誤答履歴（弱点記録）です。この記録を深く分析して、学習者の弱点パターンを特定し、${vakLabel}タイプに最適化された具体的な学習アドバイスを生成してください。

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
  "encouragement": "励ましのメッセージ"
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
"""

with open('app/api/gemini/analyze-weakness/route.ts', 'w', encoding='utf-8') as f:
    f.write(analyze_content)
print("Fixed: /api/gemini/analyze-weakness/route.ts")

# ============================================================
# 5. Fix /api/gemini/schedule/route.ts - fix hardcoded date
# ============================================================
with open('app/api/gemini/schedule/route.ts', 'r', encoding='utf-8') as f:
    sched = f.read()

sched = sched.replace("Current Date: 2026-08-04.", "Current Date: ${new Date().toISOString().split('T')[0]}.")
sched = sched.replace("Start the schedule from tomorrow (2026-08-05).", "Start the schedule from tomorrow (i.e., the day after today).")

with open('app/api/gemini/schedule/route.ts', 'w', encoding='utf-8') as f:
    f.write(sched)
print("Fixed: /api/gemini/schedule/route.ts (dynamic date)")

print("\nAll routes fixed successfully!")
