import os

filepath = 'components/ExternalIntegrations.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add icons
if 'lucide-react' in content and 'Hash' not in content:
    content = content.replace('Tv, Home }', 'Tv, Home, Hash, CalendarDays, ListOrdered }')

# Add apps
target_array = 'const itmApps = ['
new_apps = '''
    {
      name: isVi ? 'Ứng dụng Web Luyện số đếm' : '数字練習アプリ',
      desc: isVi ? 'Luyện nghe và đọc số đếm tiếng Nhật' : '日本語の数字の読み書き・リスニングを練習',
      url: 'https://itm-kaiwa.github.io/Random/',
      icon: Hash,
      badge: isVi ? 'Luyện số' : '数字練習',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: isVi ? 'Ứng dụng Luyện Lịch & Đồng hồ' : 'カレンダー＆時計練習アプリ',
      desc: isVi ? 'Luyện cách nói ngày tháng và thời gian' : '日付と時間の読み方を練習',
      url: 'https://itm-kaiwa.github.io/calender/',
      icon: CalendarDays,
      badge: isVi ? 'Thời gian' : 'カレンダー・時計',
      color: 'from-pink-500 to-rose-600',
    },
    {
      name: isVi ? 'Ứng dụng Luyện Trợ từ đếm' : '助数詞練習アプリ',
      desc: isVi ? 'Luyện cách đếm các loại đồ vật khác nhau' : 'モノの種類に応じた助数詞（数え方）を練習',
      url: 'https://counter-ebon-nu.vercel.app/',
      icon: ListOrdered,
      badge: isVi ? 'Trợ từ đếm' : '助数詞',
      color: 'from-fuchsia-500 to-purple-600',
    },'''

if target_array in content and 'https://itm-kaiwa.github.io/Random/' not in content:
    content = content.replace(target_array, target_array + new_apps)

with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)

print('Done')
