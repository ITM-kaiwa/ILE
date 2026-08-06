import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

const getSupabaseAdmin = () => {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!SUPABASE_URL || SUPABASE_URL === 'https://dummy.supabase.co') {
    throw new Error('Vercelの環境変数に NEXT_PUBLIC_SUPABASE_URL が設定されていません。');
  }
  if (!SUPABASE_SERVICE_ROLE_KEY || SUPABASE_SERVICE_ROLE_KEY === 'dummy_key') {
    throw new Error('Vercelの環境変数に SUPABASE_SERVICE_ROLE_KEY が設定されていません。');
  }
  
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
};

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('class_names')
      .select('name')
      .order('name', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ classes: data.map(d => d.name) });
  } catch (error: any) {
    console.error('Error fetching classes:', error);
    // Fallback if table doesn't exist or other error
    const defaultClasses = Array.from({length: 14}, (_, i) => `26M${(i+2).toString().padStart(2, '0')}`);
    return NextResponse.json({ classes: defaultClasses, error: error.message }, { status: 200 }); // Still return 200 with defaults so UI doesn't break
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, className } = body;
    
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!className || typeof className !== 'string' || className.trim() === '') {
      return NextResponse.json({ error: 'Invalid class name' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('class_names')
      .insert([{ name: className.trim() }])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error adding class:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const password = searchParams.get('password');
    const className = searchParams.get('className');
    
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!className || typeof className !== 'string' || className.trim() === '') {
      return NextResponse.json({ error: 'Invalid class name' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('class_names')
      .delete()
      .eq('name', className.trim());

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error deleting class:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
