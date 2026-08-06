const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const envContent = fs.readFileSync(path.resolve('.env.local'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k) env[k.trim()] = v.join('=').trim().replace(/(^"|"$)/g, '');
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL.replace('/rest/v1', '').replace(/\/$/, '');
const supabase = createClient(supabaseUrl, env.SUPABASE_SERVICE_ROLE_KEY);
const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });

const delay = ms => new Promise(r => setTimeout(r, ms));

// Vietnamese detection regex (very basic check if it contains typical Vietnamese words)
function isVietnamese(text) {
  if (!text) return false;
  return /^[A-Za-z0-9\s,.\-áàãạảăắằẵặẳâấầẫậẩéèẽẹẻêếềễệểíìĩịỉóòõọỏôốồỗộổơớờỡợởúùũụủưứừữựửýỳỹỵỷĐđ]+$/i.test(text.substring(0, 50));
}

async function main() {
  console.log('Fetching kana cards from DB...');
  const { data: cards, error } = await supabase.from('kana_cards').select('id, character, romaji, type, group_name, vak_help');
  if (error) { console.error('Error fetching cards:', error); process.exit(1); }

  const cardsToTranslate = [];
  for (const card of cards) {
    if (card.vak_help && card.vak_help.visual) {
      // If it looks like it's already translated, skip. Actually, some were translated but we don't know which.
      // We will check if the visual text contains Japanese kana/kanji. 
      // If it has hiragana/katakana (excluding the character itself in quotes), it's probably Japanese.
      // But a simpler way: the translated ones start with "Visual:", or are in Vietnamese.
      // Let's just see if it contains Vietnamese specific characters like 'ế', 'ể', 'ư', 'ơ', 'ặ', 'đ' etc.
      // But wait, the original text had 漢字. Let's check for any Kanji/Hiragana (beyond basic ones).
      const hasKanji = /[\u3400-\u4DBF\u4E00-\u9FFF]/.test(card.vak_help.visual);
      if (hasKanji || card.vak_help.visual.includes('「')) {
        cardsToTranslate.push(card);
      } else {
        console.log(`[SKIP] ${card.character} (${card.romaji}) already seems translated.`);
      }
    }
  }

  console.log(`Found ${cardsToTranslate.length} cards to translate.`);
  const batchSize = 10;
  
  for (let i = 0; i < cardsToTranslate.length; i += batchSize) {
    const batch = cardsToTranslate.slice(i, i + batchSize);
    console.log(`Processing batch ${i/batchSize + 1}/${Math.ceil(cardsToTranslate.length/batchSize)}`);
    
    let prompt = `You are an expert Japanese to Vietnamese translator.
Translate the following memory aids for Japanese kana characters into natural Vietnamese.
Return ONLY a valid JSON array of objects in the EXACT same order. Do not include markdown codeblocks (\`\`\`json) or any conversational text.

Data to translate:
[
`;
    batch.forEach((c, idx) => {
      prompt += `  {
    "id": "${c.id}",
    "visual": ${JSON.stringify(c.vak_help.visual)},
    "auditory": ${JSON.stringify(c.vak_help.auditory)},
    "kinesthetic": ${JSON.stringify(c.vak_help.kinesthetic)}
  }${idx < batch.length - 1 ? ',' : ''}\n`;
    });
    prompt += `]\n\nRequired JSON output format:
[
  {
    "id": "same id",
    "visual": "Vietnamese translation",
    "auditory": "Vietnamese translation",
    "kinesthetic": "Vietnamese translation"
  }
]`;

    try {
      const result = await model.generateContent(prompt);
      let text = result.response.text();
      text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
      
      const translatedArray = JSON.parse(text);
      
      for (const tCard of translatedArray) {
        const originalCard = batch.find(b => b.id === tCard.id);
        if (originalCard) {
          const newVakHelp = {
            ...originalCard.vak_help,
            visual: tCard.visual,
            auditory: tCard.auditory,
            kinesthetic: tCard.kinesthetic
          };
          const { error: updateErr } = await supabase.from('kana_cards').update({ vak_help: newVakHelp }).eq('id', originalCard.id);
          if (updateErr) {
            console.error(`  [ERROR] Failed to update ${originalCard.character}:`, updateErr.message);
          } else {
            console.log(`  [OK] Updated ${originalCard.character}`);
          }
        }
      }
    } catch (e) {
      console.error(`  [ERROR] Batch translation failed:`, e.message);
    }
    
    // 5 seconds delay between batches
    await delay(5000);
  }
  
  console.log(`Translation complete!`);
}

main();
