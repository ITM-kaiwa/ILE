import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic'; // Prevent Next.js from static generation

// Lazy initialize to prevent build-time errors when env vars are missing
const getSupabaseAdmin = () => {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co';
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy_key';
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const password = searchParams.get('password');
    
    // Hardcoded password for demonstration
    if (password !== 'admin123') {
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

    // Aggregate data
    const aggregatedUsers = users.map(user => {
      const userHistory = history.filter(h => h.user_id === user.id);
      return {
        ...user,
        historyCount: userHistory.length,
        weaknesses: [] // Weaknesses are currently not stored in a database table in this project
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
