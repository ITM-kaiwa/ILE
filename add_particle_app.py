import os
import re

filepath = 'components/ExternalIntegrations.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update imports
if 'Puzzle' not in content:
    content = content.replace("ListOrdered } from 'lucide-react';", "ListOrdered, Puzzle } from 'lucide-react';")

# 2. Replace { isEmpty: true } with the new app
old_empty = "{ isEmpty: true },"

new_app = """{
      name: isVi ? 'Ứng dụng Luyện Trợ từ' : '助詞練習アプリ',
      desc: isVi ? 'Luyện tập cách sử dụng trợ từ tiếng Nhật (は, が, を, に, v.v.)' : '日本語の助詞（は、が、を、に等）の使い方を練習',
      url: 'https://itm-kaiwa.github.io/particle/',
      icon: Puzzle,
      badge: isVi ? 'Trợ từ' : '助詞',
      color: 'from-violet-500 to-purple-600',
    },"""

if old_empty in content:
    content = content.replace(old_empty, new_app)
else:
    print("Could not find { isEmpty: true },")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
