import os

files = ['components/KanaCardsSection.tsx', 'components/KanjiCardsSection.tsx', 'components/MinnaFlashcardsSection.tsx']
for path in files:
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = content.replace("自動再生", "{isVi ? 'Tự động phát' : '自動再生'}")
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Updated auto play in Kana, Kanji, Minna")
