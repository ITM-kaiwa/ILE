import { NextResponse } from 'next/server';
import { VAK_SYSTEM_PROMPTS, getMockVakLesson } from '@/lib/gemini';
import { VakType } from '@/data/vak-questions';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  let topic = 'JLPT N5 文法';
  let activeVak: VakType = 'visual';
  let lang = 'vi';

  try {
    const body = await req.json();
    if (body.topic) topic = body.topic;
    if (body.vakType) activeVak = body.vakType;
    if (body.lang) lang = body.lang;

    const isVi = lang === "vi";
    const systemPrompt = VAK_SYSTEM_PROMPTS[activeVak];

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback to mock data
      const mock = getMockVakLesson(topic, activeVak);
      mock.contentMarkdown = `> ⚠️ **SYSTEM NOTICE**: API Key is missing. Showing offline mock data.\n\n` + mock.contentMarkdown;
      return NextResponse.json({
        success: true,
        systemPrompt,
        lesson: mock,
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash', generationConfig: { responseMimeType: 'application/json' } });

    const prompt = `${systemPrompt}

【重要】: 必ずトピックの文法や単語自体の意味、使い方、実践的な例文（日本語とベトナム語訳）を豊富に含めて、具体的に解説してください。単なる「学習の手順」や「空のステップ」ではなく、学習者がそのまま読んで理解できる実際の学習コンテンツ（ルールや例文）を提示してください。
${isVi ? '【出力言語指定】: ユーザーのUI言語がベトナム語に設定されています。解説文(contentMarkdown)、構造図(visualDiagram)、音声ダイアログ(auditoryDialogue)、身体アクション(kinestheticAction)など、JSON内のすべての説明文はベトナム語で出力してください（日本語の例文自体は除く）。' : ''}
以下のトピックについて、TypeScriptのインターフェース GeneratedVakLesson に厳密に従ったJSONフォーマットでのみ出力してください。
Markdownのバッククォート \`\`\`json \`\`\` は使用せず、純粋なJSON文字列だけを返してください。

トピック: ${topic}

期待するJSONスキーマ:
{
  "topic": "文字列",
  "vakType": "${activeVak}",
  "contentMarkdown": "文字列 (Markdown形式で詳しい学習内容)",
  "keyVocabulary": [
    { "word": "文字列", "reading": "文字列", "meaning": "文字列" }
  ],
  "visualDiagram": "文字列 (visualタイプの場合。単なるテキストではなく、Markdownのリストや表・太字・絵文字を駆使して、視覚的にわかりやすい構造・マインドマップ風の解説を出力してください。改行する場合は必ず \\n を使用してエスケープしてください)",
  "auditoryDialogue": [
    { "speaker": "文字列", "text": "文字列", "audioNote": "文字列" }
  ],
  "kinestheticAction": "文字列 (kinestheticタイプの場合)",
  "practiceQuestions": [
    { "question": "文字列", "options": ["選択肢1", "選択肢2", "選択肢3"], "answerIndex": 数値, "hint": "文字列" }
  ]
}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const cleanJsonText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const lesson = JSON.parse(cleanJsonText);

    return NextResponse.json({
      success: true,
      systemPrompt,
      lesson,
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    const mock = getMockVakLesson(topic, activeVak);
    mock.contentMarkdown = `> ⚠️ **SYSTEM NOTICE**: AI Generation failed (${error.message || 'Unknown Error'}). Showing offline mock data.\n\n` + mock.contentMarkdown;
    // Return mock data fallback on error using variables captured outside the try block
    return NextResponse.json({ 
      success: true, 
      lesson: mock
    });
  }
}
