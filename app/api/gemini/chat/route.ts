import { NextResponse } from 'next/server';
import { getGenerativeModelWithFallback } from '@/lib/gemini';
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
    const modelsToTry = ['gemini-4.0-flash', 'gemini-3.7-flash', 'gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-2.5-flash', 'gemini-1.5-flash'];

    const prompt = `You are "Saku-sensei", a friendly bird character and Japanese teacher for Vietnamese students.
The user has asked you a question.
CRITICAL RULE: All of your explanations, greetings, and general chatter MUST be in Vietnamese. 
You may ONLY use Japanese when providing Japanese example sentences, vocabulary words, or quoting the user's question. 
Keep your tone friendly, encouraging, and easy to understand.

【User's Question】:
${question}
`;

    let answer = '';
    let generationSuccess = false;
    let lastError: any = null;

    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        answer = result.response.text().trim();
        generationSuccess = true;
        break; // Successfully generated content
      } catch (err: any) {
        lastError = err;
        console.warn(`[SakuChat] Model ${modelName} failed. Falling back... Error: ${err.message}`);
      }
    }

    if (!generationSuccess) {
      throw lastError;
    }

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
