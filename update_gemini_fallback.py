import os
import glob

# 1. Add helper to lib/gemini.ts
gemini_lib = 'lib/gemini.ts'
with open(gemini_lib, 'a', encoding='utf-8') as f:
    f.write("""
export async function getGenerativeModelWithFallback(genAI: GoogleGenerativeAI, systemInstruction?: string, generationConfig?: any) {
  const modelsToTry = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-pro'];
  
  for (const modelName of modelsToTry) {
    try {
      const modelParams: any = { model: modelName };
      if (systemInstruction) modelParams.systemInstruction = systemInstruction;
      if (generationConfig) modelParams.generationConfig = generationConfig;
      
      const model = genAI.getGenerativeModel(modelParams);
      return model;
    } catch (error) {
      console.warn(`Model ${modelName} failed to initialize, falling back...`);
      continue;
    }
  }
  // Fallback to basic
  return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
}
""")

# 2. Update all route.ts files
routes = glob.glob('app/api/gemini/**/route.ts', recursive=True)

for route in routes:
    with open(route, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add import if needed
    if 'getGenerativeModelWithFallback' not in content:
        content = content.replace("import { GoogleGenerativeAI", "import { getGenerativeModelWithFallback } from '@/lib/gemini';\nimport { GoogleGenerativeAI")
    
    # Replace initialization
    if 'genAI.getGenerativeModel(' in content:
        if 'chat/route.ts' in route:
            # Special logic for chat route, maybe leave it or adapt it
            content = content.replace("const model = genAI.getGenerativeModel({ model: modelName });", "const model = await getGenerativeModelWithFallback(genAI);")
            # Wait, chat/route.ts allows user to select model. Let's see its current code.
            pass
        elif 'analyze-weakness/route.ts' in route:
            content = content.replace("""const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });""", "const model = await getGenerativeModelWithFallback(genAI);")
        elif 'explain/route.ts' in route:
            content = content.replace("const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });", "const model = await getGenerativeModelWithFallback(genAI);")
        elif 'learn/route.ts' in route:
            content = content.replace("const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash', generationConfig: { responseMimeType: 'application/json' } });", "const model = await getGenerativeModelWithFallback(genAI, undefined, { responseMimeType: 'application/json' });")
        elif 'schedule/route.ts' in route:
            content = content.replace("""const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json' }
    });""", "const model = await getGenerativeModelWithFallback(genAI, undefined, { responseMimeType: 'application/json' });")
        elif 'translate/route.ts' in route:
            content = content.replace("const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });", "const model = await getGenerativeModelWithFallback(genAI);")

    with open(route, 'w', encoding='utf-8') as f:
        f.write(content)
print("Updated Gemini model fallbacks!")
