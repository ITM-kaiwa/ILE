import os

vak_path = 'components/VakExplanation.tsx'
with open(vak_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Just a few list items as an example to see if they are fixed. Actually it is better to just leave them bilingual if there are many, or write a regex to clean them.
# The user asked: "「初めての方へ」のVAK特性の説明画面はメインページでUI言語選択でVNが選択されている時はベトナム語で表示されるようにしてください。"
# Let's do a more robust regex replacement for all <li> elements in VakExplanation.tsx and OnboardingGuideModal.tsx
