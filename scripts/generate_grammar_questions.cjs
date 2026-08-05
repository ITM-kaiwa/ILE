const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const envPath = path.resolve('.env.local');
const envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf-8') : '';
const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...val] = line.split('=');
  if (key && val.length > 0) {
    env[key.trim()] = val.join('=').trim().replace(/(^"|"$)/g, '');
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

async function main() {
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set. Please set it in .env.local or as an environment variable.");
    process.exit(1);
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash', generationConfig: { responseMimeType: 'application/json' } });

  const { data: cards, error } = await supabase.from('grammar_cards').select('*');
  if (error) throw error;
  
  console.log(`Found ${cards.length} grammar cards. Generating questions...`);

  for (const card of cards) {
    console.log(`Processing card ${card.id}: ${card.title}`);
    
    // Check if questions already exist
    const { data: existing } = await supabase.from('jlpt_questions').select('id').like('id', `${card.id}_q%`);
    if (existing && existing.length >= 5) {
      console.log(`- Already has ${existing.length} questions. Skipping.`);
      continue;
    }

    const prompt = `
Generate 5 JLPT-style fill-in-the-blank practice questions for the following Japanese grammar point.
Grammar: ${card.title}
Meaning: ${card.meaning}

The output MUST be a JSON array of 5 objects matching this exact schema:
[
  {
    "question": "The Japanese sentence with a blank (e.g. わたし (　) がくせいです。)",
    "options": ["option1", "option2", "option3", "option4"],
    "correctIndex": integer (0 to 3),
    "explanation": "Explanation in Japanese and Vietnamese. Format: 【JP】... 【VN】..."
  }
]
No other text, just the JSON array.
`;

    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
      const questions = JSON.parse(text);
      
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
      console.log(`- Inserted 5 questions.`);
    } catch (err) {
      console.error(`- Failed to generate questions for ${card.id}:`, err);
    }
  }
}

main();
