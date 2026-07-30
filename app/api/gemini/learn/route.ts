import { NextResponse } from 'next/server';
import { VAK_SYSTEM_PROMPTS, getMockVakLesson } from '@/lib/gemini';
import { VakType } from '@/data/vak-questions';

export async function POST(req: Request) {
  try {
    const { topic, vakType } = await req.json();
    const activeVak: VakType = vakType || 'visual';

    const systemPrompt = VAK_SYSTEM_PROMPTS[activeVak];
    const lesson = getMockVakLesson(topic || 'JLPT N5 文法', activeVak);

    return NextResponse.json({
      success: true,
      systemPrompt,
      lesson,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate lesson' }, { status: 500 });
  }
}
