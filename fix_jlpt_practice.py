import os

path = 'components/JlptPractice.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

if "import { AiVisualAdvice }" not in content:
    content = content.replace("import ReactMarkdown from 'react-markdown';", "import ReactMarkdown from 'react-markdown';\nimport { AiVisualAdvice } from './AiVisualAdvice';")

old_advice = """                  <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-950 mt-3 space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-orange-900">
                      <Lightbulb className="w-4 h-4 text-orange-600" />
                      <span>💡 {vakType.toUpperCase()} {isVi ? 'Lời khuyên ôn tập:' : '復習アドバイス:'}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {isVi ? getVakRecVi(currentQ.vakRecommendation[vakType]) : currentQ.vakRecommendation[vakType]}
                    </p>
                  </div>"""

new_advice = """                  <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-950 mt-3 space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-orange-900">
                      <Lightbulb className="w-4 h-4 text-orange-600" />
                      <span>💡 {vakType.toUpperCase()} {isVi ? 'Lời khuyên ôn tập:' : '復習アドバイス:'}</span>
                    </div>
                    <AiVisualAdvice 
                      adviceText={currentQ.vakRecommendation[vakType]} 
                      vakType={vakType} 
                      lang={lang} 
                    />
                  </div>"""

content = content.replace(old_advice, new_advice)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated JlptPractice.tsx")
