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
