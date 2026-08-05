import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const char = searchParams.get('char');
  if (!char) return new NextResponse('Missing char', { status: 400 });
  
  let hex = char;
  if (hex.length === 1) {
    hex = hex.charCodeAt(0).toString(16).toUpperCase();
  } else {
    hex = hex.toUpperCase();
  }
  
  const url = `https://kakikata.maripo.org/svg/chars/u${hex}.svg`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) return new NextResponse('Not found', { status: res.status });
    const text = await res.text();
    if (!text.includes('<svg')) return new NextResponse('Invalid SVG', { status: 400 });
    return new NextResponse(text, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (e) {
    return new NextResponse('Error', { status: 500 });
  }
}
