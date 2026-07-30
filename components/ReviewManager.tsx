'use client';

import React from 'react';
import { Language, getTranslation } from '@/lib/i18n';
import { RefreshCw, Bell, Clock , ChevronDown, ChevronUp } from 'lucide-react';

interface ReviewManagerProps {
  lang?: Language;
}

export const ReviewManager: React.FC<ReviewManagerProps> = ({ lang = 'ja' }) => {
  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const isVi = lang === 'vi';

  const reviewQueue = [
    { topic: 'JLPT N5 語彙: あいさつ・自己紹介', last: '1日前', next: '本日 (Day 1復習)', stage: 1, status: 'due' },
    { topic: 'JLPT N5 文法: 〜は〜です', last: '3日前', next: '本日 (Day 3復習)', stage: 2, status: 'due' },
    { topic: 'JLPT N4 助詞: に・で・へ', last: '1週間前', next: '3日後 (Day 7復習)', stage: 3, status: 'scheduled' },
  ];

  return (
    <div className="glass-card p-6 border border-amber-200/80 bg-[#FFFDF9] rounded-2xl shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-amber-200/60">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-slate-800">{t.srsTitle}</h2>
        </div>
        <div className="flex items-center space-x-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
            F-04 SRS
          </span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 text-xs font-bold transition flex items-center space-x-1 border border-emerald-300/50"
          >
            <span>{isExpanded ? t.collapseModule : t.viewModule}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {/* Alert Card */}
        <div className="p-4 rounded-xl bg-amber-100/80 border border-amber-300 flex items-start space-x-3 shadow-sm">
          <Bell className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-950">{t.srsAlert}</h4>
            <p className="text-xs font-medium text-amber-900 mt-0.5">
              {t.srsAlertSub}
            </p>
          </div>
        </div>

        {isExpanded && (
        <>
        {/* Review Items */}
        <div className="space-y-3">
          {reviewQueue.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border transition flex items-center justify-between shadow-sm ${
                item.status === 'due'
                  ? 'bg-[#FAF7F2] border-amber-300'
                  : 'bg-[#FFFDF9] border-amber-200 opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-slate-800">{item.topic}</span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase ${
                      item.status === 'due' ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {item.status === 'due' ? t.statusDue : t.statusReady}
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-600 mt-1 block">
                  {isVi ? `Lần trước: ${item.last} | Tiếp theo: ${item.next}` : `最終学習: ${item.last} | 次回予定: ${item.next}`}
                </span>
              </div>

              {item.status === 'due' ? (
                <button className="px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition shadow-sm">
                  {t.startReview}
                </button>
              ) : (
                <span className="text-xs font-medium text-slate-500 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.statusReady}</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </>
        )}
      </div>
    </div>
  );
};
