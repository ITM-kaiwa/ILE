import os

filepath = 'components/ExternalIntegrations.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_array = '''  const itmApps = [
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
    },
    {
      name: isVi ? 'Ứng dụng Web Luyện hội thoại LingoBot' : 'LingoBot 会話練習Webアプリ',
      desc: isVi ? 'Luyện nói tiếng Nhật qua hội thoại AI thời gian thực' : 'リアルタイムAI対話で日本語スピーキングを練習',
      url: 'https://lingo-bot2.vercel.app/',
      icon: MessageCircle,
      badge: isVi ? 'Luyện hội thoại' : '会話練習',
      color: 'from-orange-500 to-amber-600',
    },
    {
      name: isVi ? 'Ứng dụng Luyện tập QA CheckKaiwa' : 'CheckKaiwa QA練習アプリ',
      desc: isVi ? 'Ứng dụng Web ôn tập câu hỏi Q&A giao tiếp hàng ngày & JLPT' : 'JLPT・日常会話のQ&A復習問題Webアプリ',
      url: 'https://itm-kaiwa.github.io/CheckKaiwa_/',
      icon: HelpCircle,
      badge: isVi ? 'Luyện QA' : 'QA練習',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      name: isVi ? 'Ứng dụng Web ITM E-School' : 'ITM E-School Webアプリ',
      desc: isVi ? 'Nền tảng E-Learning chính thức của ITM' : 'ITM公式E-Learningプラットフォーム',
      url: 'https://eschool.itm.vn/',
      icon: School,
      badge: 'ITM E-School',
      color: 'from-emerald-600 to-teal-600',
    },
    {
      name: isVi ? 'Ứng dụng Android ITM E-School' : 'ITM E-School Androidアプリ',
      desc: isVi ? 'Ứng dụng di động chính thức trên Google Play Store' : 'Google Play Store公式モバイルアプリ',
      url: 'https://play.google.com/store/apps/details?id=com.itm.eschoolpro&pcampaignid=web_share',
      icon: Smartphone,
      badge: 'Android App',
      color: 'from-amber-600 to-orange-600',
    },
  ];'''

new_array = '''  const itmApps: any[] = [
    {
      name: isVi ? 'Ứng dụng Web Luyện hội thoại LingoBot' : 'LingoBot 会話練習Webアプリ',
      desc: isVi ? 'Luyện nói tiếng Nhật qua hội thoại AI thời gian thực' : 'リアルタイムAI対話で日本語スピーキングを練習',
      url: 'https://lingo-bot2.vercel.app/',
      icon: MessageCircle,
      badge: isVi ? 'Luyện hội thoại' : '会話練習',
      color: 'from-orange-500 to-amber-600',
    },
    {
      name: isVi ? 'Ứng dụng Luyện tập QA CheckKaiwa' : 'CheckKaiwa QA練習アプリ',
      desc: isVi ? 'Ứng dụng Web ôn tập câu hỏi Q&A giao tiếp hàng ngày & JLPT' : 'JLPT・日常会話のQ&A復習問題Webアプリ',
      url: 'https://itm-kaiwa.github.io/CheckKaiwa_/',
      icon: HelpCircle,
      badge: isVi ? 'Luyện QA' : 'QA練習',
      color: 'from-indigo-600 to-purple-600',
    },
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
    },
    { isEmpty: true },
    {
      name: isVi ? 'Ứng dụng Web ITM E-School' : 'ITM E-School Webアプリ',
      desc: isVi ? 'Nền tảng E-Learning chính thức của ITM' : 'ITM公式E-Learningプラットフォーム',
      url: 'https://eschool.itm.vn/',
      icon: School,
      badge: 'ITM E-School',
      color: 'from-emerald-600 to-teal-600',
    },
    {
      name: isVi ? 'Ứng dụng Android ITM E-School' : 'ITM E-School Androidアプリ',
      desc: isVi ? 'Ứng dụng di động chính thức trên Google Play Store' : 'Google Play Store公式モバイルアプリ',
      url: 'https://play.google.com/store/apps/details?id=com.itm.eschoolpro&pcampaignid=web_share',
      icon: Smartphone,
      badge: 'Android App',
      color: 'from-amber-600 to-orange-600',
    },
  ];'''

if old_array in content:
    content = content.replace(old_array, new_array)
else:
    print('Could not find old_array')

old_map = '''          {itmApps.map((app, index) => {
            const Icon = app.icon;
            return (
              <a'''

new_map = '''          {itmApps.map((app, index) => {
            if (app.isEmpty) {
              return <div key={index} className="hidden md:block"></div>;
            }
            const Icon = app.icon;
            return (
              <a'''

if old_map in content:
    content = content.replace(old_map, new_map)
else:
    print('Could not find old_map')

with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)

print('Done')
