import os
import re

path = 'app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the specific Sparkles for Kana
content = re.sub(
    r'<Sparkles className="w-4 h-4" />\s*<span>\{lang === \'vi\' \? \'Chữ Kana\' : \'かな\'\}</span>',
    r'<IconA className="w-4 h-4" />\n                <span>{lang === \'vi\' ? \'Chữ Kana\' : \'かな\'}</span>',
    content
)

# And now about the bell click scrolling. Let's see what is inside onRequestReview.
print("Replaced Sparkles with IconA in Kana tab")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
