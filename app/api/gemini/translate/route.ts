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
