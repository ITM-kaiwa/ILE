import os

path = 'components/KanjiCardsSection.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

if "import { AiVisualAdvice }" not in content:
    content = content.replace("import { StrokeAnimation } from '@/components/StrokeAnimation';", "import { StrokeAnimation } from '@/components/StrokeAnimation';\nimport { AiVisualAdvice } from './AiVisualAdvice';")

old_advice = """              <p className="text-xs text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                              {currentCard.vakHelp[vakType]}
                </p>"""

new_advice = """              <AiVisualAdvice 
                adviceText={currentCard.vakHelp[vakType]} 
                vakType={vakType} 
                lang={lang} 
                isKanji={true} 
                kanjiChar={currentCard.kanji} 
              />"""

content = content.replace(old_advice, new_advice)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated KanjiCardsSection.tsx")
