import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { MINNA_VOCABULARY_CARDS } from '@/data/minna-vocabulary';
import { KANJI_CARDS } from '@/data/kanji-cards';
import { HIRAGANA_CARDS, KATAKANA_CARDS } from '@/data/kana-cards';

export async function GET() {
  try {
    const KANA_CARDS = [...HIRAGANA_CARDS, ...KATAKANA_CARDS];

    // 1. Seed Kana Cards
    if (KANA_CARDS && KANA_CARDS.length > 0) {
      const kanaData = KANA_CARDS.map(k => ({
        type: k.type,
        character: k.kana,
        romaji: k.romaji,
        group_name: k.group || null,
        mnemonic_vi: k.mnemonicVn || null,
        vak_help: k.vakHelp || null
      }));
      
      const { error } = await supabase.from('kana_cards').insert(kanaData);
      if (error) throw new Error(`Kana Error: ${error.message}`);
    }

    // 2. Seed Kanji Cards
    if (KANJI_CARDS && KANJI_CARDS.length > 0) {
      const kanjiData = KANJI_CARDS.map(k => ({
        jlpt_level: k.level || 'N5',
        kanji: k.kanji,
        onyomi: k.onyomi,
        kunyomi: k.kunyomi,
        meaning_vi: k.meaningVn,
        meaning_en: k.meaningEn || null,
        stroke_count: k.strokeCount || null,
        langoal_url: k.langoalUrl || null,
        nihongokyoshi_url: k.nihongokyoshiUrl || null,
        examples: k.examples || null,
        vak_help: k.vakHelp || null
      }));

      // Split into chunks of 100 to avoid request size limits
      for (let i = 0; i < kanjiData.length; i += 100) {
        const chunk = kanjiData.slice(i, i + 100);
        const { error } = await supabase.from('kanji_cards').insert(chunk);
        if (error) throw new Error(`Kanji Error: ${error.message}`);
      }
    }

    // 3. Seed Vocab Cards (Minna)
    if (MINNA_VOCABULARY_CARDS && MINNA_VOCABULARY_CARDS.length > 0) {
      const vocabData = MINNA_VOCABULARY_CARDS.map(v => ({
        jlpt_level: 'N5', // Minna is roughly N5/N4, setting default
        lesson: v.lesson ? v.lesson.toString() : 'unknown',
        word: v.word,
        reading: v.reading,
        romaji: v.romaji || null,
        meaning_vi: v.meaningVn,
        meaning_en: v.meaningEn || null,
        category: v.partOfSpeech || 'unknown',
        category_name: v.partOfSpeechName || null,
        semantic_category: v.semanticCategory || null,
        semantic_category_name: v.semanticCategoryName || null,
        vnjpclub_url: v.vnjpclubUrl || null,
        vak_help: v.vakHelp || null
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
