const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { GoogleGenerativeAI } = require('@google/generative-ai');

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
const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL or Key is missing.");
  process.exit(1);
}

let cleanUrl = supabaseUrl;
if (cleanUrl.includes('/rest/v1')) {
  cleanUrl = cleanUrl.replace('/rest/v1/', '').replace('/rest/v1', '');
}

const supabase = createClient(cleanUrl, supabaseKey);

const delay = ms => new Promise(res => setTimeout(res, ms));

async function generateWithRetry(model, prompt, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (e) {
      if (e.status === 429) {
        console.log(`Rate limit hit. Waiting 60 seconds before retry ${i + 1}/${retries}...`);
        await delay(60000);
      } else {
        throw e;
      }
    }
  }
  throw new Error("Max retries exceeded");
}

async function main() {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash', generationConfig: { responseMimeType: 'application/json' } });

  const { data: cards, error } = await supabase.from('grammar_cards').select('*');
  if (error) throw error;
  
  console.log(`Found ${cards.length} grammar cards. Generating contextual questions...`);

  for (const card of cards) {
    // Check if this card already has ruby tags and 5 questions
    const { data: existing } = await supabase.from('jlpt_questions').select('question').like('id', `${card.id}_q%`);
    if (existing && existing.length >= 5 && existing[0].question.includes('<ruby>')) {
      console.log(`Skipping ${card.id}: already has ruby questions.`);
      continue;
    }

    console.log(`Processing card ${card.id}: ${card.title}`);
    
    // Extract lesson number
    const lessonMatch = card.title.match(/第(\d+)課/);
    let lessonPrompt = "";
    if (lessonMatch) {
      lessonPrompt = `This is for Minna no Nihongo Lesson ${lessonMatch[1]}. CRITICAL RULE: DO NOT use any vocabulary or grammar introduced AFTER Lesson ${lessonMatch[1]}. Keep the sentences simple and appropriate for a student at exactly this lesson level.`;
    } else {
      lessonPrompt = `This is for JLPT ${card.level}. Keep the vocabulary and grammar strictly within ${card.level} level.`;
    }

    const prompt = `
Generate 5 JLPT-style fill-in-the-blank practice questions for the following Japanese grammar point.
Grammar: ${card.title}
Meaning: ${card.meaning}

${lessonPrompt}

CRITICAL RULE 2: You MUST add furigana (ruby tags) to ALL Kanji in the "question" and "options" fields using standard HTML format.
Example: <ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です。

The output MUST be a JSON array of 5 objects matching this exact schema:
[
  {
    "question": "The Japanese sentence with a blank (e.g. <ruby>私<rt>わたし</rt></ruby>は (　) です。)",
    "options": ["option1 with ruby", "option2 with ruby", "option3 with ruby", "option4 with ruby"],
    "correctIndex": integer (0 to 3),
    "explanation": "Explanation in Japanese and Vietnamese. Format: 【JP】... 【VN】..."
  }
]
No other text, just the JSON array.
`;

    try {
      const text = await generateWithRetry(model, prompt);
      const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const questions = JSON.parse(cleanText);
      
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const payload = {
          id: `${card.id}_q${i+1}`,
          level: card.level,
          question: q.question,
          options: q.options,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          errorType: 'grammar',
          category: card.category,
          categoryName: card.title,
          vakRecommendation: card.vakContent
        };
        await supabase.from('jlpt_questions').upsert(payload);
      }
      console.log(`- Updated 5 contextual questions with ruby for ${card.title}.`);
    } catch (err) {
      console.error(`- Failed to generate questions for ${card.id}:`, err.message);
    }
    
    // 4.5 second delay to respect 15 RPM limit (60s / 15 = 4s)
    await delay(4500);
  }
  console.log("Finished generating all questions.");
}

main();
