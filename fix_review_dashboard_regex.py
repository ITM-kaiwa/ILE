import re

path = 'components/ReviewDashboard.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the text node after the strong tag
content = re.sub(
    r"<strong>💡 \{vakType\.toUpperCase\(\)\} \{isVi \? 'Đề xuất ôn tập' : 'アドバイス'\}:</strong>.*?</div>",
    "<strong>💡 {vakType.toUpperCase()} {isVi ? 'Đề xuất ôn tập' : 'アドバイス'}:</strong>\n                    <AiVisualAdvice adviceText={currentQ.vakRecommendation[vakType]} vakType={vakType} lang={lang} />\n                  </div>",
    content,
    flags=re.DOTALL
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated ReviewDashboard.tsx using regex")
