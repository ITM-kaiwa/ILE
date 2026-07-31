import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { MINNA_VOCAB } from '@/data/minna-vocab';
import { KANJI_CARDS } from '@/data/kanjiCards';
import { KANA_CARDS } from '@/data/kanaCards';

export async function GET() {
  try {
    // 1. Seed Kana Cards
    if (KANA_CARDS && KANA_CARDS.length > 0) {
      const kanaData = KANA_CARDS.map(k => ({
        type: k.type,
        character: k.character,
        romaji: k.romaji
      }));
      
      const { error } = await supabase.from('kana_cards').insert(kanaData);
      if (error) throw new Error(`Kana Error: ${error.message}`);
    }

    // 2. Seed Kanji Cards
    if (KANJI_CARDS && KANJI_CARDS.length > 0) {
      const kanjiData = KANJI_CARDS.map(k => ({
        jlpt_level: k.jlptLevel,
        kanji: k.kanji,
        onyomi: k.onyomi,
        kunyomi: k.kunyomi,
        meaning_vi: k.meaning_vi,
        examples: k.examples
      }));

      // Split into chunks of 100 to avoid request size limits
      for (let i = 0; i < kanjiData.length; i += 100) {
        const chunk = kanjiData.slice(i, i + 100);
        const { error } = await supabase.from('kanji_cards').insert(chunk);
        if (error) throw new Error(`Kanji Error: ${error.message}`);
      }
    }

    // 3. Seed Vocab Cards (Minna)
    if (MINNA_VOCAB && MINNA_VOCAB.length > 0) {
      const vocabData = MINNA_VOCAB.map(v => ({
        jlpt_level: 'N5', // Minna is roughly N5/N4, setting default
        lesson: v.lesson,
        word: v.word,
        reading: v.reading,
        meaning_vi: v.meaning_vi,
        category: v.category
      }));

      for (let i = 0; i < vocabData.length; i += 100) {
        const chunk = vocabData.slice(i, i + 100);
        const { error } = await supabase.from('vocab_cards').insert(chunk);
        if (error) throw new Error(`Vocab Error: ${error.message}`);
      }
    }

    return NextResponse.json({ message: 'Seeding completed successfully!' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
