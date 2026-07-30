'use client';

import React from 'react';
import { ExternalLink, MessageCircle, HelpCircle, School, Smartphone } from 'lucide-react';

export const ExternalIntegrations: React.FC = () => {
  const apps = [
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

  return (
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
        {apps.map((app, index) => {
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
  );
};
