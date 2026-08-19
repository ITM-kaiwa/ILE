import os

path = 'app/api/gemini/schedule/route.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_model = """    const model = genAI.getGenerativeModel({ 
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

    const resultText = response.response.text();"""

new_model = """    const FALLBACK_MODELS = [
      'gemini-2.5-pro',
      'gemini-1.5-pro-latest',
      'gemini-1.5-pro',
      'gemini-2.0-flash',
      'gemini-1.5-flash'
    ];

    let resultText = null;
    let lastError = null;

    for (const modelName of FALLBACK_MODELS) {
      try {
        const model = genAI.getGenerativeModel({ 
          model: modelName,
          systemInstruction: systemPrompt,
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: responseSchema,
          }
        });
        const response = await model.generateContent({ contents: contents });
        resultText = response.response.text();
        break; // Success
      } catch (err: any) {
        console.warn(`[schedule] Model ${modelName} failed: ${err.message}`);
        lastError = err;
      }
    }

    if (!resultText) {
      throw new Error(`All Gemini models failed for schedule generation. Last error: ${lastError?.message}`);
    }"""

content = content.replace(old_model, new_model)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated schedule API with model fallback chain")
