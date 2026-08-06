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

async function main() {
  console.log('Fetching kana cards from DB...');
  const { data: cards, error } = await supabase.from('kana_cards').select('id, character, romaji, type, group_name, vak_help');
  
  if (error) {
    console.error('Error fetching cards:', error);
    process.exit(1);
  }

  console.log(`Found ${cards.length} cards to translate.`);

  let successCount = 0;
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    
    // Skip if there's no vak_help or it is missing visual/auditory/kinesthetic
    if (!card.vak_help || !card.vak_help.visual) {
      console.log(`[SKIP] ${card.character} (${card.romaji}) - missing VAK help data.`);
      continue;
    }
    
    // The previous Japanese values
    const visual = card.vak_help.visual;
    const auditory = card.vak_help.auditory;
    const kinesthetic = card.vak_help.kinesthetic;
    
    // Check if it's already in Vietnamese (some basic check, e.g. doesn't have too many kanji)
    if (visual.includes('Hình ảnh') || visual.includes('Chữ') || auditory.includes('âm') && visual.match(/[a-zA-Z]/)) {
        // Maybe already translated? Actually let's just translate anyway.
    }

    const prompt = `
You are an expert Japanese to Vietnamese translator focusing on language education.
Translate the following memory aids for the Japanese kana character "${card.character}" (romaji: ${card.romaji}, type: ${card.type}) into natural Vietnamese.
Keep the original Japanese words or characters in brackets if they are important for context (e.g. example words).

Original Japanese texts:
Visual: ${visual}
Auditory: ${auditory}
Kinesthetic: ${kinesthetic}

Return a valid JSON object strictly in this format (no markdown, no backticks, just the JSON string):
{
  "visual": "Vietnamese translation for Visual",
  "auditory": "Vietnamese translation for Auditory",
  "kinesthetic": "Vietnamese translation for Kinesthetic"
}
`;

    try {
      const result = await model.generateContent(prompt);
      let text = result.response.text();
      // Remove markdown blocks if present
      text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      
      const translated = JSON.parse(text);
      
      // Merge with existing vak_help (e.g. keep audio_url)
      const newVakHelp = {
        ...card.vak_help,
        visual: translated.visual,
        auditory: translated.auditory,
        kinesthetic: translated.kinesthetic
      };

      const { error: updateErr } = await supabase.from('kana_cards').update({ vak_help: newVakHelp }).eq('id', card.id);
      
      if (updateErr) {
        console.error(`[ERROR] Failed to update DB for ${card.character}:`, updateErr);
      } else {
        successCount++;
        console.log(`[OK] Translated ${card.character} (${card.romaji}) [${i+1}/${cards.length}]`);
      }
    } catch (e) {
      console.error(`[ERROR] Failed to translate ${card.character}:`, e.message);
    }
    
    // Rate limit delay
    await delay(1000);
  }
  
  console.log(`Translation complete! Successfully updated ${successCount} cards.`);
}

main();
