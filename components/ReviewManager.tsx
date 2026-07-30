'use client';

import React from 'react';
import { RefreshCw, Bell, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const ReviewManager: React.FC = () => {
  const reviewQueue = [
    { topic: 'JLPT N5 語彙: あいさつ・自己紹介', last: '1日まえ', next: '本日 (Day 1復習)', stage: 1, status: 'due' },
    { topic: 'JLPT N5 文法: 〜は〜です', last: '3日前', next: '本日 (Day 3復習)', stage: 2, status: 'due' },
    { topic: 'JLPT N4 助詞: に・で・へ', last: '1週間前', next: '3日後 (Day 7復習)', stage: 3, status: 'scheduled' },
  ];

  return (
    <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">エビングハウス忘却曲線 自動復習通知 (SRS)</h2>
        </div>
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950 text-emerald-300 border border-emerald-800">
          F-04 自動通知
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {/* Banner Alert */}
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 flex items-start space-x-3">
          <Bell className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-amber-200">本日復習すべきタスクが 2 件あります！</h4>
            <p className="text-xs text-amber-300/80 mt-0.5">
              記憶定着率が最も下がるタイミング（1日後・3日後・7日後・21日後）でVercel Cronバッチ通知が届きます。
            </p>
          </div>
        </div>

        {/* Review Queue Items */}
        <div className="space-y-3">
          {reviewQueue.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border transition flex items-center justify-between ${
                item.status === 'due'
                  ? 'bg-slate-900 border-indigo-800/60'
                  : 'bg-slate-950 border-slate-800 opacity-75'
              }`}
            >
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-white">{item.topic}</span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase ${
                      item.status === 'due' ? 'bg-rose-500 text-white' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {item.status === 'due' ? '要復習' : '待機中'}
                  </span>
                </div>
                <span className="text-xs text-slate-400 mt-1 block">
                  最終学習: {item.last} | 次回予定: {item.next}
                </span>
              </div>

              {item.status === 'due' ? (
                <button className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition shadow">
                  復習を開始
                </button>
              ) : (
                <span className="text-xs text-slate-500 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>準備完了</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
