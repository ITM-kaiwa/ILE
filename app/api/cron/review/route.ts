import { NextResponse } from 'next/server';

export async function GET() {
  // Simulated Vercel Cron endpoint triggering daily Ebbinghaus SRS notifications
  return NextResponse.json({
    cron: '0 8 * * *',
    status: 'triggered',
    message: 'Daily Ebbinghaus review notifications sent successfully.',
    timestamp: new Date().toISOString(),
  });
}
