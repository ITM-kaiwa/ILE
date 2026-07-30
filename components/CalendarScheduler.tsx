'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';
import { Calendar, Clock, Sparkles, CheckCircle2, ExternalLink , ChevronDown, ChevronUp } from 'lucide-react';

interface CalendarSchedulerProps {
  vakType: VakType;
  lang?: Language;
}

export const CalendarScheduler: React.FC<CalendarSchedulerProps> = ({ vakType, lang = 'ja' }) => {
  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const isVi = lang === 'vi';

  const [goal, setGoal] = useState(isVi ? 'Thi đỗ JLPT N5 sau 1 tháng' : '1ヶ月後のJLPT N5合格');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExported, setIsExported] = useState(false);

  const mockSchedule = [
    { day: 'Day 1 (Ngày mai)', title: 'JLPT N5 語彙 1-20 (VAK単語カード)', time: '08:00 - 08:30' },
    { day: 'Day 2', title: 'JLPT N5 文法：〜です / 〜ます (シャドーイング)', time: '08:00 - 08:30' },
    { day: 'Day 3 (Ôn tập Ebbinghaus)', title: 'Day 1 語彙の復習 + 弱点ドリル', time: '08:00 - 08:30' },
    { day: 'Day 7 (Ôn tập Ebbinghaus)', title: '第1週 総合模擬テスト (20問)', time: '09:00 - 09:45' },
  ];

  const handleGenerateSchedule = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  const handleExportGoogleCalendar = () => {
    const title = encodeURIComponent(`[ILE VAK Study] ${goal}`);
    const details = encodeURIComponent(`VAK認知タイプ (${vakType}) に基づく毎日の自動学習タスク`);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}`;
    window.open(googleCalendarUrl, '_blank');
    setIsExported(true);
  };

  return (
    <div className="glass-card p-6 border border-amber-200/80 bg-[#FFFDF9] rounded-2xl shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-amber-200/60">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-800">{t.calendarTitle}</h2>
        </div>
        <div className="flex items-center space-x-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-900 border border-indigo-300">
            F-03 Auto Sync
          </span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-900 text-xs font-bold transition flex items-center space-x-1 border border-indigo-300/50"
          >
            <span>{isExpanded ? t.collapseModule : t.viewModule}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {t.goalLabel}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-amber-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-orange-500 transition shadow-inner"
              placeholder={t.goalPlaceholder}
            />
            <button
              onClick={handleGenerateSchedule}
              disabled={isGenerating}
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold transition flex items-center space-x-1.5 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? '...' : t.createPlan}</span>
            </button>
          </div>
        </div>

        {isExpanded && (
        <>
        {/* Schedule Preview */}
        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-amber-200 space-y-3">
          <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
            {t.scheduleHeader}
          </h4>

          <div className="space-y-2">
            {mockSchedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-[#FFFDF9] border border-amber-200 hover:border-orange-300 transition shadow-sm"
              >
                <div>
                  <span className="text-xs font-bold text-orange-700 mr-2">{item.day}:</span>
                  <span className="text-sm font-medium text-slate-800">{item.title}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <button
          onClick={handleExportGoogleCalendar}
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition shadow-sm flex items-center justify-center space-x-2"
        >
          <ExternalLink className="w-4 h-4" />
          <span>{t.exportGoogle}</span>
        </button>

        {isExported && (
          <p className="text-center text-xs font-bold text-emerald-700 flex items-center justify-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isVi ? 'Đã mở màn hình đăng ký Google Calendar' : 'Googleカレンダー登録画面を開きました'}</span>
          </p>
        )}
      </>
        )}
      </div>
    </div>
  );
};
