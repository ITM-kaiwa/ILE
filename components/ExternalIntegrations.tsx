'use client';

import React from 'react';
import { Language } from '@/lib/i18n';
import { ExternalLink, MessageCircle, HelpCircle, School, Smartphone, Globe, BookOpen, Tv } from 'lucide-react';

interface ExternalIntegrationsProps {
  lang?: Language;
}

export const ExternalIntegrations: React.FC<ExternalIntegrationsProps> = ({ lang = 'ja' }) => {
  const isVi = lang === 'vi';

  const itmApps = [
    {
      name: isVi ? 'Ứng dụng Web Luyện hội thoại LingoBot' : 'LingoBot 会話練習Webアプリ',
      desc: isVi ? 'Luyện nói tiếng Nhật qua hội thoại AI thời gian thực' : 'リアルタイムAI対話で日本語スピーキングを練習',
      url: 'https://lingobot2.onrender.com/',
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
  ];

  const externalResources = [
    {
      name: isVi ? 'Cổng học tiếng Nhật VNJPClub (JLS)' : 'VNJPClub 日本語学習ポータル',
      desc: isVi ? 'Trang web học tiếng Nhật toàn diện dành cho người Việt Nam' : 'ベトナム人学習者向け総合日本語学習サイト (JLS)',
      url: 'https://jls.vnjpclub.com/index.php',
      icon: Globe,
      badge: 'VNJPClub',
      color: 'from-rose-500 to-red-600',
    },
    {
      name: isVi ? 'Kết nối & Lan tỏa Cuộc sống bằng Tiếng Nhật' : 'つながるひろがる にほんごでのくらし',
      desc: isVi ? 'Trang web chính thức của Bộ Giáo dục & Đào tạo Nhật Bản (MEXT)' : '文部科学省 (MEXT) 公式 生活日本語学習サイト',
      url: 'https://tsunagarujp.mext.go.jp/',
      icon: BookOpen,
      badge: isVi ? 'Bộ Giáo dục Nhật Bản' : '文部科学省 (MEXT)',
      color: 'from-indigo-600 to-blue-600',
    },
    {
      name: isVi ? 'NHK WORLD-JAPAN Learn Japanese' : 'NHK WORLD-JAPAN Learn Japanese',
      desc: isVi ? 'Bài học tiếng Nhật đa ngôn ngữ chính thức từ đài NHK' : 'NHK公式 多言語対応日本語学習講座コンテンツ',
      url: 'https://www3.nhk.or.jp/nhkworld/en/learnjapanese/',
      icon: Tv,
      badge: 'NHK WORLD',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* ITM Ecosystem Apps Section */}
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
          {itmApps.map((app, index) => {
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
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{app.desc}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition shrink-0 ml-2" />
              </a>
            );
          })}
        </div>
      </div>

      {/* External Learning Resources Section */}
      <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-amber-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
              <span>{isVi ? 'Tài nguyên Học tiếng Nhật khuyên dùng' : 'おすすめ外部日本語学習リソース'}</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {isVi
                ? 'Các nền tảng học tiếng Nhật chất lượng cao được khuyên dùng'
                : 'ベトナム人学習者・公的機関が推薦する質の高い学習プラットフォーム'}
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
            {isVi ? 'Tài nguyên chính thức' : '公式リソース'}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {externalResources.map((res, index) => {
            const Icon = res.icon;
            return (
              <a
                key={index}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#FFFDF9] border border-amber-200/80 hover:border-orange-300 transition group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${res.color} text-white shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-amber-100 text-amber-900 border border-amber-200">
                      {res.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition leading-snug">
                    {res.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{res.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs text-orange-600 font-semibold group-hover:text-orange-500 transition">
                  <span>{isVi ? 'Mở trang' : 'サイトを開く'}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
