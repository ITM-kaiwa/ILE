import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { goal, vakType } = await req.json();

    const schedule = [
      { date: '2026-08-01', title: 'JLPT N5 語彙 1-20 (VAKカード)', vakFocus: vakType },
      { date: '2026-08-02', title: 'JLPT N5 文法 〜です/〜ます (シャドーイング)', vakFocus: vakType },
      { date: '2026-08-03', title: 'エビングハウスDay1復習', vakFocus: vakType },
    ];

    return NextResponse.json({ success: true, goal, schedule });
  } catch (error) {
    return NextResponse.json({ error: 'Schedule generation failed' }, { status: 500 });
  }
}
