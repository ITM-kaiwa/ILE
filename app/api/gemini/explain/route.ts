import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  let requestData: any = {};
  try {
    requestData = await req.json();
    const { question, incorrectAnswer, correctAnswer, explanation } = requestData;

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        success: true,
        explanationVi: `Bạn đã chọn sai. Đáp án đúng là "${correctAnswer}". Lời giải: ${explanation}`
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `あなたはベトナム人の日本語学習者をサポートする優秀なAI教師です。
以下のJLPT問題において、生徒は間違った選択肢を選びました。
なぜその選択肢が間違いなのか、そしてなぜ正解の選択肢が正しいのかを、親切なベトナム語で端的に説明してください。

【問題】: ${question}
【生徒が選んだ間違った答え】: ${incorrectAnswer}
【正しい答え】: ${correctAnswer}
【本来の解説】: ${explanation}

出力はベトナム語のみで、2〜3文で簡潔にまとめてください。`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanationVi = response.text();

    return NextResponse.json({
      success: true,
      explanationVi,
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ 
      success: true, 
      explanationVi: `Bạn đã chọn sai. Đáp án đúng là "${requestData.correctAnswer || ''}". Lời giải: ${requestData.explanation || ''}` 
    });
  }
}
