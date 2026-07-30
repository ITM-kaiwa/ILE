'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { Calendar, Clock, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

interface CalendarSchedulerProps {
  vakType: VakType;
}

export const CalendarScheduler: React.FC<CalendarSchedulerProps> = ({ vakType }) => {
  const [goal, setGoal] = useState('1ヶ月後のJLPT N5合格');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExported, setIsExported] = useState(false);

  const mockSchedule = [
    { day: 'Day 1 (明日)', title: 'JLPT N5 語彙 1-20 (VAK単語カード)', time: '08:00 - 08:30' },
    { day: 'Day 2', title: 'JLPT N5 文法：〜です / 〜ます (シャドーイング)', time: '08:00 - 08:30' },
    { day: 'Day 3 (エビングハウス復習)', title: 'Day 1 語彙の復習 + 弱点ドリル', time: '08:00 - 08:30' },
    { day: 'Day 7 (エビングハウス復習)', title: '第1週 総合模擬テスト (20問)', time: '09:00 - 09:45' },
  ];

  const handleGenerateSchedule = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  const handleExportGoogleCalendar = () => {
    // Generate Google Calendar Event URL for demonstration
    const title = encodeURIComponent(`[ILE VAK Study] ${goal}`);
    const details = encodeURIComponent(`VAK認知タイプ (${vakType}) に基づく毎日の自動学習タスク`);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}`;
    window.open(googleCalendarUrl, '_blank');
    setIsExported(true);
  };

  return (
    <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">Googleカレンダー AI自動学習計画連携</h2>
        </div>
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-950 text-indigo-300 border border-indigo-800">
          F-03 自動連携
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">
            あなたの目標を設定してください
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
              placeholder="例: 1ヶ月後のJLPT N5合格"
            />
            <button
              onClick={handleGenerateSchedule}
              disabled={isGenerating}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition flex items-center space-x-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? '生成中...' : '計画を作成'}</span>
            </button>
          </div>
        </div>

        {/* Schedule Preview */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            📅 生成されたAIパーソナライズ・スケジュール
          </h4>

          <div className="space-y-2">
            {mockSchedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-indigo-950 transition"
              >
                <div>
                  <span className="text-xs text-indigo-400 font-semibold mr-2">{item.day}:</span>
                  <span className="text-sm text-slate-200">{item.title}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <button
          onClick={handleExportGoogleCalendar}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm transition shadow-lg flex items-center justify-center space-x-2"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Googleカレンダーに一括書き込み・連携</span>
        </button>

        {isExported && (
          <p className="text-center text-xs text-emerald-400 flex items-center justify-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Googleカレンダー登録画面を開きました</span>
          </p>
        )}
      </div>
    </div>
  );
};
