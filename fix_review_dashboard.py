import os

path = 'components/ReviewDashboard.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

if "import { AiVisualAdvice }" not in content:
    content = content.replace("import { Play, Pause } from 'lucide-react';", "import { Play, Pause } from 'lucide-react';\nimport { AiVisualAdvice } from './AiVisualAdvice';")

old_advice = """                  <div className="p-3 rounded-lg bg-[#FFFDF9] border border-emerald-200 text-xs text-emerald-900 mt-2">
                    <strong>💡 {vakType.toUpperCase()} {isVi ? 'Đề xuất ôn tập' : 'アドバイス'}:</strong> {isVi ? getVakRecVi(currentQ.vakRecommendation[vakType]) : currentQ.vakRecommendation[vakType]}
                  </div>"""

new_advice = """                  <div className="p-3 rounded-lg bg-[#FFFDF9] border border-emerald-200 text-xs text-emerald-900 mt-2">
                    <strong>💡 {vakType.toUpperCase()} {isVi ? 'Đề xuất ôn tập' : 'アドバイス'}:</strong>
                    <AiVisualAdvice 
                      adviceText={currentQ.vakRecommendation[vakType]} 
                      vakType={vakType} 
                      lang={lang} 
                    />
                  </div>"""

content = content.replace(old_advice, new_advice)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated ReviewDashboard.tsx")
