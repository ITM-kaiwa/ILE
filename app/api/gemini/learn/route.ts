import { NextResponse } from 'next/server';
import { VAK_SYSTEM_PROMPTS, getMockVakLesson } from '@/lib/gemini';
import { VakType } from '@/data/vak-questions';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const { topic, vakType } = await req.json();
    const activeVak: VakType = vakType || 'visual';
    const systemPrompt = VAK_SYSTEM_PROMPTS[activeVak];

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback to mock data
      return NextResponse.json({
        success: true,
        systemPrompt,
        lesson: getMockVakLesson(topic || 'JLPT N5 文法', activeVak),
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `${systemPrompt}
以下のトピックについて、TypeScriptのインターフェース GeneratedVakLesson に厳密に従ったJSONフォーマットでのみ出力してください。
Markdownのバッククォート \`\`\`json \`\`\` は使用せず、純粋なJSON文字列だけを返してください。

トピック: ${topic || 'JLPT N5 文法'}

期待するJSONスキーマ:
{
  "topic": "文字列",
  "vakType": "${activeVak}",
  "contentMarkdown": "文字列 (Markdown形式で詳しい学習内容)",
  "keyVocabulary": [
    { "word": "文字列", "reading": "文字列", "meaning": "文字列" }
  ],
  "visualDiagram": "文字列 (visualタイプの場合)",
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
  } catch (error) {
    console.error('Gemini API Error:', error);
    // Return mock data fallback on error
    const { topic, vakType } = await req.json().catch(()=>({}));
    return NextResponse.json({ 
      success: true, 
      lesson: getMockVakLesson(topic || 'JLPT N5 文法', vakType || 'visual') 
    });
  }
}
