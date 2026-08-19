import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic'; // Prevent Next.js from static generation

// Lazy initialize to prevent build-time errors when env vars are missing
const getSupabaseAdmin = () => {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!SUPABASE_URL || SUPABASE_URL === 'https://dummy.supabase.co') {
    throw new Error('Vercelの環境変数に NEXT_PUBLIC_SUPABASE_URL が設定されていません。必ず設定して再デプロイしてください。');
  }
  if (!SUPABASE_SERVICE_ROLE_KEY || SUPABASE_SERVICE_ROLE_KEY === 'dummy_key') {
    throw new Error('Vercelの環境変数に SUPABASE_SERVICE_ROLE_KEY が設定されていません。必ず設定して再デプロイしてください。');
  }
  
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const password = searchParams.get('password');
    
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabaseAdmin = getSupabaseAdmin();

    // Fetch all users
    const { data: users, error: usersError } = await supabaseAdmin
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (usersError) throw usersError;

    // Fetch learning history for all users
    const { data: history, error: historyError } = await supabaseAdmin
      .from('learning_history')
      .select('id, user_id, content_type');

    if (historyError) throw historyError;
    
    // Fetch weakness records for all users
    const { data: weaknessRecords, error: weaknessError } = await supabaseAdmin
      .from('weakness_records')
      .select('user_id, category_name');
      
    if (weaknessError) throw weaknessError;

    // Aggregate data
    const aggregatedUsers = users.map(user => {
      const userHistory = history.filter(h => h.user_id === user.id);
      
      // Get unique weakness categories for this user
      const userWeaknesses = weaknessRecords.filter(w => w.user_id === user.id);
      const uniqueWeaknesses = Array.from(new Set(userWeaknesses.map(w => w.category_name)));
      
      return {
        ...user,
        historyCount: userHistory.length,
        weaknesses: uniqueWeaknesses
      };
    });

    return NextResponse.json({ users: aggregatedUsers });
  } catch (error: any) {
    console.error('Admin API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { password, id, name, gender, class_name, email } = await request.json();
    
    if (password !== 'admin123') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
    }

    const supabaseAdmin = getSupabaseAdmin();

    const { data, error } = await supabaseAdmin
      .from('users')
      .update({ name, gender, class_name, email })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ user: data });
  } catch (error: any) {
    console.error('Admin API Update Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
