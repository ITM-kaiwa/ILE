import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  let requestData: any = {};
  try {
    requestData = await req.json();
    const { question } = requestData;

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        success: true,
        answer: 'ごめんなさい、現在AI先生はお休み中です。(API Keyが設定されていません)'
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });

    const prompt = `あなたは「サク先生」という日本語教師の鳥のキャラクターです。
ユーザーから以下の質問が届きました。
わかりやすく、親しみやすい言葉遣い（〜ですよ、〜ですね等）で回答してください。
必要に応じてベトナム語の訳も併記してあげてください。

【ユーザーからの質問】:
${question}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const answer = response.text().trim();

    return NextResponse.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ 
      success: true, 
      answer: 'システムエラーが発生しました。しばらく経ってからもう一度お試しください。 (Lỗi hệ thống)' 
    });
  }
}
