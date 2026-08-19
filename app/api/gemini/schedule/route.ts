import { NextResponse } from 'next/server';
import { getGenerativeModelWithFallback } from '@/lib/gemini';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const responseSchema = {
  type: SchemaType.OBJECT,
  properties: {
    reply: {
      type: SchemaType.STRING,
      description: 'The conversational reply from the AI to the user. Should contain advice, suggestions, or confirmation of the schedule.'
    },
    schedule: {
      type: SchemaType.ARRAY,
      description: 'The generated schedule events based on the user requirements. If still discussing, this can be an empty array or a draft schedule.',
      items: {
        type: SchemaType.OBJECT,
        properties: {
          date: { type: SchemaType.STRING, description: 'Date in YYYY-MM-DD format (e.g., 2026-08-04)' },
          startTime: { type: SchemaType.STRING, description: 'Start time in HH:mm format (e.g., 08:00)' },
          endTime: { type: SchemaType.STRING, description: 'End time in HH:mm format (e.g., 08:30)' },
          title: { type: SchemaType.STRING, description: 'Title of the study session' },
          description: { type: SchemaType.STRING, description: 'Detailed description or tasks for this session' }
        },
        required: ['date', 'startTime', 'endTime', 'title']
      }
    }
  },
  required: ['reply', 'schedule']
};

export async function POST(req: Request) {
  try {
    const { goal, vakType, chatHistory = [], options = {}, lang = 'ja', userMessage } = await req.json();

    const systemPrompt = `You are a professional JLPT study schedule planner AI.
The user wants to study for the following goal: "${goal}"
The user's cognitive learning style (VAK) is: ${vakType}. You should suggest study methods that fit this style (e.g., Visual: flashcards/diagrams, Auditory: shadowing/listening, Kinesthetic: writing/roleplay).
Language for your reply: ${lang === 'vi' ? 'Vietnamese' : 'Japanese'}.
Current Date: ${new Date().toISOString().split('T')[0]}.

The user has selected the following schedule options:
- Days: ${options.days === 'weekdays' ? 'Weekdays only (Mon-Fri)' : 'All days (Mon-Sun)'}
- Duration: ${options.duration === 'day' ? '1 day' : options.duration === 'week' ? '1 week (7 days)' : '1 month (30 days)'}
- Preferred Time Slots: ${options.timeSlots && options.timeSlots.length > 0 ? options.timeSlots.join(', ') : 'Any time'}

Instructions:
1. Provide a friendly conversational reply giving advice or feedback on their study plan.
2. Generate the actual schedule events in the "schedule" array fitting the selected options. Start the schedule from tomorrow (i.e., the day after today).
3. If the user provided a new message, respond to it directly. If this is the start of the conversation, proactively propose a draft schedule based on the goal and options.`;

    let contents = chatHistory.map((msg: any) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    if (userMessage) {
      contents.push({ role: 'user', parts: [{ text: userMessage }] });
    } else if (contents.length === 0) {
      contents.push({ role: 'user', parts: [{ text: 'Please propose a study schedule for me.' }] });
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-pro',
      systemInstruction: systemPrompt,
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
      }
    });

    const response = await model.generateContent({
      contents: contents,
    });

    const resultText = response.response.text();
    if (!resultText) {
      throw new Error("No response text");
    }

    const parsed = JSON.parse(resultText);

    return NextResponse.json({ success: true, reply: parsed.reply, schedule: parsed.schedule });
  } catch (error) {
    console.error('Schedule generation failed:', error);
    return NextResponse.json({ error: 'Schedule generation failed' }, { status: 500 });
  }
}
