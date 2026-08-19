import os

filepath = 'components/Navbar.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Make vakType optional too (since page.tsx doesn't pass it)
content = content.replace(
    "  vakType: VakType;",
    "  vakType?: VakType;"
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed vakType optional!")
