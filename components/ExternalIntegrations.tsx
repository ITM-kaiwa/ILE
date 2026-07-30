'use client';

import React from 'react';
import { ExternalLink, MessageCircle, HelpCircle, School, Smartphone, Globe, BookOpen, TV } from 'lucide-react';

export const ExternalIntegrations: React.FC = () => {
  const itmApps = [
    {
      name: 'LingoBot 会話練習Webアプリ',
      desc: 'リアルタイムAI対話で日本語スピーキングを練習',
      url: 'https://lingobot2.onrender.com/',
      icon: MessageCircle,
      badge: '会話練習',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'CheckKaiwa QA練習アプリ',
      desc: 'JLPT・日常会話のQ&A復習問題Webアプリ',
      url: 'https://itm-kaiwa.github.io/CheckKaiwa_/',
      icon: HelpCircle,
      badge: 'QA練習',
      color: 'from-purple-600 to-indigo-600',
    },
    {
      name: 'ITM E-School Webアプリ',
      desc: 'ITM公式E-Learningプラットフォーム',
      url: 'https://eschool.itm.vn/',
      icon: School,
      badge: 'ITM E-School',
      color: 'from-emerald-600 to-teal-600',
    },
    {
      name: 'ITM E-School Androidアプリ',
      desc: 'Google Play Store公式モバイルアプリ',
      url: 'https://play.google.com/store/apps/details?id=com.itm.eschoolpro&pcampaignid=web_share',
      icon: Smartphone,
      badge: 'Android App',
      color: 'from-amber-600 to-orange-600',
    },
  ];

  const externalResources = [
    {
      name: 'VNJPClub 日本語学習ポータル',
      desc: 'ベトナム人学習者向け総合日本語学習サイト (JLS)',
      url: 'https://jls.vnjpclub.com/index.php',
      icon: Globe,
      badge: 'VNJPClub',
      color: 'from-rose-600 to-red-600',
    },
    {
      name: 'つながるひろがる にほんごでのくらし',
      desc: '文部科学省 (MEXT) 公式 生活日本語学習サイト',
      url: 'https://tsunagarujp.mext.go.jp/',
      icon: BookOpen,
      badge: '文部科学省 (MEXT)',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'NHK WORLD-JAPAN Learn Japanese',
      desc: 'NHK公式 多言語対応日本語学習講座コンテンツ',
      url: 'https://www3.nhk.or.jp/nhkworld/en/learnjapanese/',
      icon: TV,
      badge: 'NHK WORLD',
      color: 'from-amber-500 to-yellow-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* ITM Ecosystem Apps Section */}
      <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <span>ITM 統合連携エコシステム</span>
          </h2>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800">
            ワンクリック連携
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
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition group flex items-start justify-between"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${app.color} text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-semibold text-white group-hover:text-indigo-400 transition">
                        {app.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{app.desc}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition shrink-0 ml-2" />
              </a>
            );
          })}
        </div>
      </div>

      {/* External Learning Resources Section */}
      <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>おすすめ外部日本語学習リソース</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              ベトナム人学習者・公的機関が推薦する質の高い学習プラットフォーム
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            公式リソース
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
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${res.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {res.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-indigo-400 transition leading-snug">
                    {res.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{res.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 group-hover:text-indigo-300 transition">
                  <span>サイトを開く</span>
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
