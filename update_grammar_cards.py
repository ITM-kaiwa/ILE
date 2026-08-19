import os

path = 'components/GrammarCardsSection.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add rehypeRaw and addRuby
if "import rehypeRaw" not in content:
    content = content.replace("import remarkGfm from 'remark-gfm';", "import remarkGfm from 'remark-gfm';\nimport rehypeRaw from 'rehype-raw';\nimport { addRuby } from '@/lib/rubyHelper';")

# Replace ReactMarkdown render logic
# Find the ReactMarkdown part for vakContent
old_rm = """                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {(activeCard?.vakContent?.[vakType] || '').replace('ハイライト', `**${extractHighlight(activeCard?.structure || '')}**`)}
                    </ReactMarkdown>"""

new_rm = """                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                      {(() => {
                        let text = (activeCard?.vakContent?.[vakType] || '').replace('ハイライト', `**${extractHighlight(activeCard?.structure || '')}**`);
                        if (isVi) {
                          text = text
                            .replace('| 構造 | 助詞・接続 | 意味 |', '| Cấu trúc | Trợ từ/Kết nối | Ý nghĩa |')
                            .replace('視覚イメージ解説', 'Giải thích hình ảnh trực quan')
                            .replace('聴覚音読スクリプト', 'Script đọc to qua thính giác')
                            .replace('身体感覚タスク', 'Nhiệm vụ cảm giác vận động')
                            .replace('公式図解カード', 'Thẻ hình ảnh minh họa chính thức');
                        }
                        text = addRuby(text);
                        return text;
                      })()}
                    </ReactMarkdown>"""

content = content.replace(old_rm, new_rm)

# Replace the automated playback text
content = content.replace("自動再生", "{isVi ? 'Tự động phát' : '自動再生'}")

# Replace Chữ Kana text
# But wait, Kana isn't in GrammarCardsSection.

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated GrammarCardsSection.tsx")
