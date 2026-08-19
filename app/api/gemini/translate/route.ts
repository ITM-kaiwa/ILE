import { NextResponse } from 'next/server';
import { getGenerativeModelWithFallback } from '@/lib/gemini';
import { GoogleGenerativeAI } from '@google/generative-ai';

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
    const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });

    let langName = 'Vietnamese';
    if (targetLang === 'vi') langName = 'Vietnamese';
    else if (targetLang === 'en') langName = 'English';
    else if (targetLang === 'ja') langName = 'Japanese';

    const prompt = `Translate the following Japanese explanation into ${langName}. Provide ONLY the translation without any markdown code blocks, quotes, or conversational text:\n\n${text}`;

    const result = await model.generateContent(prompt);
    const translation = result.response.text().trim();

    return NextResponse.json({ success: true, translation });
  } catch (error: any) {
    console.error('Translation API Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Translation failed' }, { status: 500 });
  }
}
