import re

path = 'components/JlptPractice.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r"<p className=\"text-slate-700 leading-relaxed font-medium\">\s*\{\(currentQ\.vakRecommendation as Record<string, string>\)\[vakType\]\}\s*</p>",
    "<AiVisualAdvice adviceText={(currentQ.vakRecommendation as Record<string, string>)[vakType]} vakType={vakType} lang={lang} />",
    content,
    flags=re.DOTALL
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated JlptPractice.tsx using regex")
