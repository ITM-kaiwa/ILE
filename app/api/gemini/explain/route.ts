import { NextResponse } from 'next/server';
import { getGenerativeModelWithFallback } from '@/lib/gemini';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  let requestData: any = {};
  try {
    requestData = await req.json();
    const { explanation } = requestData;

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        success: true,
        explanationVi: '(Chưa cấu hình GEMINI_API_KEY)'
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `以下の日本語の文法解説をベトナム語に翻訳してください。出力はベトナム語の翻訳文のみとし、挨拶や他のテキストは含めないでください。

【解説】: ${explanation}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanationVi = response.text().trim();

    return NextResponse.json({
      success: true,
      explanationVi,
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ 
      success: true, 
      explanationVi: '(Lỗi kết nối AI để tạo bản dịch)' 
    });
  }
}
