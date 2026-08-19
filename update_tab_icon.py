import os

path = 'app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

icon_a = """const IconA = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <text x="12" y="17" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fill="currentColor" stroke="none" fontWeight="bold">あ</text>
  </svg>
);
"""

if "const IconA" not in content:
    # Add after imports
    content = content.replace("export default function Home() {", icon_a + "\nexport default function Home() {")

# Replace Sparkles with IconA for the Kana tab
old_tab = """              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Chữ Kana' : 'かな'}</span>
              </button>"""

new_tab = """              >
                <IconA className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Chữ Kana' : 'かな'}</span>
              </button>"""

content = content.replace(old_tab, new_tab)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Kana tab icon to 'あ'")
