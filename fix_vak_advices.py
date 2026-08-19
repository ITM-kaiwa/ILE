import os

path = 'components/GrammarCardsSection.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Currently we have this in the text replacement:
# if (isVi) {
#   text = text
#     .replace('| 構造 | 助詞・接続 | 意味 |', '| Cấu trúc | Trợ từ/Kết nối | Ý nghĩa |')
#     .replace('視覚イメージ解説', 'Giải thích hình ảnh trực quan')
#     .replace('聴覚音読スクリプト', 'Script đọc to qua thính giác')
#     .replace('身体感覚タスク', 'Nhiệm vụ cảm giác vận động')
#     .replace('公式図解カード', 'Thẻ hình ảnh minh họa chính thức');
# }

new_replacements = """if (isVi) {
                          text = text
                            .replace('| 構造 | 助詞・接続 | 意味 |', '| Cấu trúc | Trợ từ/Kết nối | Ý nghĩa |')
                            .replace('視覚イメージ解説', 'Giải thích hình ảnh trực quan')
                            .replace('聴覚音読スクリプト', 'Script đọc to qua thính giác')
                            .replace('身体感覚タスク', 'Nhiệm vụ cảm giác vận động')
                            .replace('公式図解カード', 'Thẻ hình ảnh minh họa chính thức')
                            .replace('例文を大きな声で5回音読して、正しいアクセントとリズムを身につけましょう。', 'Hãy đọc to câu mẫu 5 lần để nắm bắt đúng trọng âm và nhịp điệu.')
                            .replace('TTS音声再生', 'Phát âm thanh TTS')
                            .replace('音声を聞いてリピートしてください。', 'Hãy nghe và lặp lại.')
                            .replace('動作を付けながら例文を口に出す。', 'Đọc to câu mẫu kết hợp với động tác cơ thể.')
                            .replace('感情を込めてロールプレイを行い体全体で暗記する。', 'Nhập vai với cảm xúc và ghi nhớ bằng toàn bộ cơ thể.');
                        }"""

content = content.replace("""if (isVi) {
                          text = text
                            .replace('| 構造 | 助詞・接続 | 意味 |', '| Cấu trúc | Trợ từ/Kết nối | Ý nghĩa |')
                            .replace('視覚イメージ解説', 'Giải thích hình ảnh trực quan')
                            .replace('聴覚音読スクリプト', 'Script đọc to qua thính giác')
                            .replace('身体感覚タスク', 'Nhiệm vụ cảm giác vận động')
                            .replace('公式図解カード', 'Thẻ hình ảnh minh họa chính thức');
                        }""", new_replacements)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated GrammarCardsSection.tsx with full VAK translations")
