const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const https = require('https');

const envPath = path.resolve('.env.local');
const envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf-8') : '';
const env = {};
envContent.split(/\r?\n/).forEach(line => {
  const [key, ...val] = line.split('=');
  if (key && val.length > 0) {
    env[key.trim()] = val.join('=').trim().replace(/(^"|"$)/g, '');
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL or Key is missing.");
  process.exit(1);
}

let cleanUrl = supabaseUrl;
if (cleanUrl.includes('/rest/v1')) {
  cleanUrl = cleanUrl.replace('/rest/v1/', '').replace('/rest/v1', '');
}

const supabase = createClient(cleanUrl, supabaseKey);

function downloadAudioBuffer(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://a1.marugotoweb.jp/en/hiragana.php',
        'Accept': '*/*'
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: HTTP ${res.statusCode}`));
        return;
      }
      
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', err => reject(err));
  });
}

const delay = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const bucketName = 'kana_audio';
  
  // 1. Fetch all kana cards
  const { data: cards, error: fetchError } = await supabase.from('kana_cards').select('*');
  if (fetchError) throw fetchError;
  
  console.log(`Found ${cards.length} kana cards.`);
  
  const uniqueRomajiSet = new Set(cards.map(c => c.romaji));
  const uniqueRomaji = Array.from(uniqueRomajiSet);
  console.log(`Processing ${uniqueRomaji.length} unique romaji pronunciations.`);
  
  for (const romaji of uniqueRomaji) {
    let audioFileName = romaji.toLowerCase();
    if (audioFileName === 'wo') audioFileName = 'o'; 
    if (audioFileName === 'di') audioFileName = 'di'; 
    if (audioFileName === 'du') audioFileName = 'du'; 
    
    // Some exceptions mapping
    const mapping = {
      'wo': 'o',
      'di': 'di',
      'du': 'du',
    };
    audioFileName = mapping[audioFileName] || audioFileName;

    const audioUrl = `https://a1.marugotoweb.jp/en/assets/sounds/common/${audioFileName}.mp3`;
    const storagePath = `${audioFileName}.mp3`;
    
    console.log(`Downloading ${audioUrl}...`);
    try {
      const buffer = await downloadAudioBuffer(audioUrl);
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(storagePath, buffer, {
          contentType: 'audio/mpeg',
          upsert: true
        });
        
      if (uploadError) {
        console.error(`Error uploading ${storagePath}:`, uploadError);
        continue;
      }
      
      const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(storagePath);
      const publicUrl = publicUrlData.publicUrl;
      
      console.log(`Uploaded ${romaji} to ${publicUrl}. Updating database...`);
      
      const { error: updateError } = await supabase
        .from('kana_cards')
        .update({ audio_url: publicUrl })
        .eq('romaji', romaji);
        
      if (updateError) {
         console.log("Could not update 'audio_url' column. Storing in vakHelp JSONb instead.");
         const relatedCards = cards.filter(c => c.romaji === romaji);
         for(let c of relatedCards) {
             const newVak = { ...c.vakHelp, audio_url: publicUrl };
             await supabase.from('kana_cards').update({ vakHelp: newVak }).eq('id', c.id);
         }
      }
      
    } catch (e) {
      console.error(`Failed to process ${romaji}:`, e.message);
    }
    await delay(300);
  }
  
  console.log("Finished importing all audio files.");
}

main();
