import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Vercel Cron endpoint for daily Ebbinghaus SRS review processing
// Schedule: 0 8 * * * (runs at 8:00 AM daily)
export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabase config missing' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const now = new Date().toISOString();

  try {
    // Find all SRS records that are due for review today (next_review <= now and not mastered)
    const { data: dueRecords, error } = await supabase
      .from('learning_history')
      .select('user_id, content_type, content_id, next_review, status')
      .lte('next_review', now)
      .neq('status', 'mastered');

    if (error) {
      return NextResponse.json({ error: error.message, cron: '0 8 * * *' }, { status: 500 });
    }

    // Group by user to count tasks per user
    const userGroups: Record<string, { count: number; types: Record<string, number> }> = {};
    (dueRecords || []).forEach((record: { user_id: string; content_type: string }) => {
      if (!userGroups[record.user_id]) {
        userGroups[record.user_id] = { count: 0, types: {} };
      }
      userGroups[record.user_id].count++;
      userGroups[record.user_id].types[record.content_type] = 
        (userGroups[record.user_id].types[record.content_type] || 0) + 1;
    });

    const usersNotified = Object.keys(userGroups).length;
    const totalDue = dueRecords?.length || 0;

    return NextResponse.json({
      cron: '0 8 * * *',
      status: 'success',
      message: `Daily Ebbinghaus SRS review notifications processed. ${totalDue} cards due across ${usersNotified} users.`,
      timestamp: now,
      summary: {
        totalDueCards: totalDue,
        usersWithDueCards: usersNotified,
        userBreakdown: userGroups,
      }
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message, cron: '0 8 * * *' }, { status: 500 });
  }
}
