import { NextResponse } from 'next/server';
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
