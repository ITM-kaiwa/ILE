import os

# Write the new cron route with:
# 1. CRON_SECRET auth
# 2. Writes to notifications table per user
# 3. Sends email via Resend (if API key present)

content = """\
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Vercel Cron endpoint for daily Ebbinghaus SRS review notifications
// Schedule defined in vercel.json: "0 1 * * *" = 08:00 AM Vietnam time (UTC+7)
export async function GET(request: Request) {
  // ── 1. Security: validate Vercel Cron secret ──────────────────────────────
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // ── 2. Initialize Supabase (service role for admin access) ────────────────
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabase config missing' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const now = new Date().toISOString();
  const todayStr = now.split('T')[0]; // e.g. "2026-08-19"

  try {
    // ── 3. Find all SRS records due for review (not mastered) ─────────────
    const { data: dueRecords, error: srsFetchError } = await supabase
      .from('learning_history')
      .select('user_id, content_type, content_id, next_review, status')
      .lte('next_review', now)
      .neq('status', 'mastered');

    if (srsFetchError) {
      return NextResponse.json({ error: srsFetchError.message }, { status: 500 });
    }

    // ── 4. Group by user ──────────────────────────────────────────────────
    const userGroups: Record<string, { count: number; types: Record<string, number> }> = {};
    (dueRecords || []).forEach((record: { user_id: string; content_type: string }) => {
      if (!userGroups[record.user_id]) {
        userGroups[record.user_id] = { count: 0, types: {} };
      }
      userGroups[record.user_id].count++;
      userGroups[record.user_id].types[record.content_type] =
        (userGroups[record.user_id].types[record.content_type] || 0) + 1;
    });

    const userIds = Object.keys(userGroups);
    const totalDue = dueRecords?.length || 0;
    const notificationsInserted: string[] = [];
    const emailsSent: string[] = [];
    const emailErrors: string[] = [];

    // ── 5. For each user: insert notification + send email ────────────────
    for (const userId of userIds) {
      const { count: todayCount } = userGroups[userId];
      const typesSummary = Object.entries(userGroups[userId].types)
        .map(([type, cnt]) => `${type}: ${cnt}`)
        .join(', ');

      const title = `📚 今日の復習リマインダー (${todayCount}件)`;
      const body = `今日の復習対象が ${todayCount} 件あります（${typesSummary}）。ログインして確認しましょう！`;

      // 5a. Prevent duplicate notifications for today
      const { count: existingCount } = await supabase
        .from('notifications')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('type', 'review')
        .gte('created_at', `${todayStr}T00:00:00.000Z`);

      if ((existingCount ?? 0) > 0) {
        continue; // Already notified today
      }

      // 5b. Insert in-app notification
      const { error: insertError } = await supabase
        .from('notifications')
        .insert({
          user_id: userId,
          title,
          body,
          type: 'review',
          is_read: false,
        });

      if (!insertError) {
        notificationsInserted.push(userId);
      }

      // 5c. Send email via Resend (only if API key configured)
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        try {
          // Get user email from Supabase Auth
          const { data: userData, error: userError } = await supabase.auth.admin.getUserById(userId);
          if (!userError && userData?.user?.email) {
            const userEmail = userData.user.email;
            const userName = userData.user.user_metadata?.full_name || 'ユーザー';

            const emailRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${resendKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: 'ILE VAK Learning <noreply@itm-kaiwa.com>',
                to: [userEmail],
                subject: `📚 今日の復習リマインダー – ${todayCount}件のカードが待っています`,
                html: `
                  <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px;">
                    <div style="background: #f97316; border-radius: 12px 12px 0 0; padding: 24px; text-align: center;">
                      <h1 style="color: white; margin: 0; font-size: 22px;">📚 ILE VAK 復習リマインダー</h1>
                    </div>
                    <div style="background: #fffbf5; border: 1px solid #fed7aa; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
                      <p style="font-size: 16px; color: #1e293b;">
                        ${userName} さん、こんにちは！
                      </p>
                      <p style="font-size: 15px; color: #475569;">
                        今日の復習対象が <strong style="color: #ea580c;">${todayCount} 件</strong> あります。
                      </p>
                      <p style="font-size: 13px; color: #94a3b8;">${typesSummary}</p>
                      <div style="text-align: center; margin: 28px 0;">
                        <a href="https://ile-vak.vercel.app"
                          style="background: #f97316; color: white; padding: 12px 32px; border-radius: 8px;
                                 text-decoration: none; font-weight: bold; font-size: 15px;">
                          今すぐ復習する →
                        </a>
                      </div>
                      <p style="font-size: 12px; color: #cbd5e1; text-align: center;">
                        ILE VAK Learning Coach – ITM日本語クラス
                      </p>
                    </div>
                  </div>
                `,
              }),
            });

            if (emailRes.ok) {
              emailsSent.push(userEmail);
            } else {
              const errBody = await emailRes.text();
              emailErrors.push(`${userEmail}: ${errBody}`);
            }
          }
        } catch (emailErr: unknown) {
          emailErrors.push(userId + ': ' + (emailErr instanceof Error ? emailErr.message : 'unknown'));
        }
      }
    }

    return NextResponse.json({
      cron: '0 1 * * *',
      status: 'success',
      timestamp: now,
      summary: {
        totalDueCards: totalDue,
        usersWithDueCards: userIds.length,
        notificationsInserted: notificationsInserted.length,
        emailsSent: emailsSent.length,
        emailErrors,
      },
    });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
"""

os.makedirs('app/api/cron/review', exist_ok=True)
with open('app/api/cron/review/route.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Cron route written!")
