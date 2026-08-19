import re

path = 'components/VakContentRenderer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'// Auto-generate default lesson on first mount.*?// eslint-disable-next-line react-hooks/exhaustive-deps\s*\}, \[vakType\]\);', '', content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully removed auto-generation hooks")
