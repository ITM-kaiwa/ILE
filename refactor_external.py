import os

filepath = 'components/ExternalIntegrations.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update interface
content = content.replace(
    "mode?: 'all' | 'itm' | 'external';",
    "mode?: 'all' | 'conversation' | 'tool' | 'external';"
)

# 2. Split itmApps into conversationApps and toolApps
old_array = '''  const itmApps: any[] = [
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

new_arrays = '''  const conversationApps: any[] = [
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
    }
  ];

  const toolApps: any[] = [
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
    }
  ];'''

if old_array in content:
    content = content.replace(old_array, new_arrays)
else:
    print("Could not find old array")

# 3. Rename itmApps to conversationApps in the first render block and update the title
old_itm_map = '''      {(mode === 'all' || mode === 'itm') && (
      <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-amber-100">
          <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
            <span>{isVi ? 'Hệ sinh thái liên kết tích hợp ITM' : 'ITM 統合連携エコシステム'}</span>
          </h2>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-300">
            {isVi ? 'Liên kết 1 click' : 'ワンクリック連携'}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {itmApps.map((app, index) => {'''

new_convo_map = '''      {(mode === 'all' || mode === 'conversation') && (
      <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-amber-100">
          <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
            <span>{isVi ? 'Ứng dụng luyện hội thoại' : '会話練習アプリ'}</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {conversationApps.map((app, index) => {'''

if old_itm_map in content:
    content = content.replace(old_itm_map, new_convo_map)
else:
    print("Could not find old_itm_map")

# 4. Insert Tool section right before External Resources Section
old_external_section = '''      {/* External Resources Section */}
      {(mode === 'all' || mode === 'external') && ('''

new_tool_section = '''      {/* Tools Section */}
      {(mode === 'all' || mode === 'tool') && (
      <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-amber-100">
          <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
            <span>{isVi ? 'Công cụ học tập & Tiện ích' : '学習ツール・アプリ'}</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {toolApps.map((app, index) => {
            if (app.isEmpty) {
              return <div key={index} className="hidden md:block"></div>;
            }
            const Icon = app.icon;
            return (
              <a
                key={index}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#FFFDF9] border border-amber-200/80 hover:border-orange-300 transition group flex items-start justify-between shadow-sm"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${app.color} text-white shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition">
                        {app.name}
                      </h3>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-orange-500 transition" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {app.desc}
                    </p>
                  </div>
                </div>
                {app.badge && (
                  <span className="shrink-0 ml-2 px-2 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {app.badge}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
      )}

      {/* External Resources Section */}
      {(mode === 'all' || mode === 'external') && ('''

if old_external_section in content:
    content = content.replace(old_external_section, new_tool_section)
else:
    print("Could not find old_external_section")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
