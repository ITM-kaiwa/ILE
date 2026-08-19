import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const FALLBACK_MODELS = [
  'gemini-flash',
  'gemini-pro',
  'gemini-3.7-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-3.1-pro-preview',
  'gemini-2.5-pro',
  'gemini-2.0-flash',
  'gemini-1.5-flash'
];

export async function POST(req: Request) {
  try {
    const { text, type, context } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'GEMINI_API_KEY not configured' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    let prompt = "";
    if (type === "pictogram") {
        prompt = `You are an expert SVG artist and Japanese kanji historian. 
The user is learning the kanji: "${context}". 
Create an SVG pictogram (象形文字/イラスト) that visually represents the origin or meaning of this kanji to help them remember it. 
For example, if the kanji is '一', draw a single horizontal stroke or a single raised finger. If it's '木', draw a simple tree.
Output ONLY the raw SVG code inside an <svg> tag. Do not include markdown formatting or explanation. Ensure the SVG is responsive, uses a viewBox like "0 0 100 100", and is aesthetically pleasing with nice colors (e.g. #2E8B57 for tree).`;
    } else {
        prompt = `You are an expert visual educator. The user needs a visual study aid based on this advice: "${text}".
Generate a clean, modern SVG illustration or diagram that visually represents this study advice. 
If it's about flashcards with pictures, draw a flashcard with a simple cute illustration. 
If it's a grammar table, draw a colorful table or flowchart layout.
Use a viewBox="0 0 300 200" or appropriate size.
Output ONLY the raw SVG code inside an <svg> tag. Do not include markdown formatting or explanation. Use soft, friendly pastel colors.`;
    }

    let svgCode = '';
    for (const modelName of FALLBACK_MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        svgCode = result.response.text().trim();
        if (svgCode.startsWith('```')) {
            svgCode = svgCode.replace(/```svg\n?/g, '').replace(/```\n?/g, '').trim();
        }
        break;
      } catch (err: any) {
        console.warn(`[generate-svg] Model ${modelName} failed: ${err.message}`);
      }
    }

    if (!svgCode || !svgCode.includes('<svg')) {
      return NextResponse.json({ success: false, error: 'Failed to generate SVG' });
    }

    return NextResponse.json({ success: true, svg: svgCode });
  } catch (error: any) {
    console.error('[generate-svg] Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
