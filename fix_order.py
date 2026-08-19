import os

path = 'components/ExternalIntegrations.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Swap the MEXT and NHK blocks
mext_block = """    {
      name: isVi ? 'Kết nối & Lan tỏa Cuộc sống bằng Tiếng Nhật' : 'つながるひろがる にほんごでのくらし',
      desc: isVi ? 'Trang web chính thức của Bộ Giáo dục & Đào tạo Nhật Bản (MEXT)' : '文部科学省 (MEXT) 公式 生活日本語学習サイト',
      url: 'https://tsunagarujp.mext.go.jp/',
      icon: Home,
      badge: isVi ? 'Bộ Giáo dục Nhật Bản' : '文部科学省 (MEXT)',
      color: 'from-cyan-500 to-sky-500',
    },"""

nhk_block = """    {
      name: isVi ? 'NHK WORLD-JAPAN Learn Japanese' : 'NHK WORLD-JAPAN Learn Japanese',
      desc: isVi ? 'Bài học tiếng Nhật đa ngôn ngữ chính thức từ đài NHK' : 'NHK公式 多言語対応日本語学習講座コンテンツ',
      url: 'https://www3.nhk.or.jp/nhkworld/en/learnjapanese/',
      icon: Tv,
      badge: 'NHK WORLD',
      color: 'from-amber-500 to-orange-600',
    },"""

# Actually, let's find the exact text in the file to make sure we don't have trailing comma issues.
if mext_block in content and nhk_block in content:
    # Just swap them. Since they are adjacent, we can replace the combined string.
    combined = mext_block + "\n" + nhk_block
    swapped = nhk_block + "\n" + mext_block
    content = content.replace(combined, swapped)
    print("Swapped MEXT and NHK")
else:
    print("Could not find blocks exactly")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
