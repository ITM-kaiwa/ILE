import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { ALL_GRAMMAR_CARDS } from './app/api/seed-jlpt/data/grammar-cards';
import { ALL_JLPT_QUESTIONS } from './app/api/seed-jlpt/data/jlpt-questions';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('Seeding Grammar Cards...');
  if (ALL_GRAMMAR_CARDS.length > 0) {
    const { error } = await supabase.from('grammar_cards').upsert(ALL_GRAMMAR_CARDS, { onConflict: 'id' });
    if (error) console.error('Grammar Error:', error.message);
    else console.log('Successfully seeded', ALL_GRAMMAR_CARDS.length, 'grammar cards');
  }

  console.log('Seeding JLPT Questions...');
  if (ALL_JLPT_QUESTIONS.length > 0) {
    const { error } = await supabase.from('jlpt_questions').upsert(ALL_JLPT_QUESTIONS, { onConflict: 'id' });
    if (error) console.error('JLPT Error:', error.message);
    else console.log('Successfully seeded', ALL_JLPT_QUESTIONS.length, 'jlpt questions');
  }
}

seed();
