'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { JlptLevel, QuestionCategory, JlptQuestion } from '@/lib/types';
import { ALL_JLPT_QUESTIONS, getQuestionsByCategory, getQuestionsByLevel } from '@/data/jlpt-questions';
import { RefreshCw, Filter, CheckCircle, XCircle, BookOpen, Tag } from 'lucide-react';

interface ReviewDashboardProps {
  vakType: VakType;
}

export const ReviewDashboard: React.FC<ReviewDashboardProps> = ({ vakType }) => {
  const [selectedLevel, setSelectedLevel] = useState<JlptLevel | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'ALL'>('ALL');

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filtered Questions Pool
  let filtered = ALL_JLPT_QUESTIONS;
  if (selectedLevel !== 'ALL') {
    filtered = filtered.filter((q) => q.level === selectedLevel);
  }
  if (selectedCategory !== 'ALL') {
    filtered = filtered.filter((q) => q.category === selectedCategory);
  }

  const currentQ = filtered[currentIdx] || filtered[0];

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIndex(idx);
  };

  const handleNext = () => {
    if (currentIdx + 1 < filtered.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedIndex(null);
      setIsSubmitted(false);
    } else {
      setCurrentIdx(0);
      setSelectedIndex(null);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <RefreshCw className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">復習専用ダッシュボード (タグ・ジャンル別抽出)</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            N5・N4の全200問から希望のジャンルタグ（助詞・動詞活用・文型・語彙）を絞り込んで復習できます
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => {
              setSelectedLevel(e.target.value as JlptLevel | 'ALL');
              setCurrentIdx(0);
              setSelectedIndex(null);
              setIsSubmitted(false);
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">全レベル (N5 + N4)</option>
            <option value="N5">JLPT N5 (100問)</option>
            <option value="N4">JLPT N4 (100問)</option>
          </select>

          {/* Category Tag Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value as QuestionCategory | 'ALL');
              setCurrentIdx(0);
              setSelectedIndex(null);
              setIsSubmitted(false);
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-indigo-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">全ジャンルタグ</option>
            <option value="grammar_particle">🏷️ 助詞 (grammar_particle)</option>
            <option value="grammar_conjugation">🏷️ 動詞活用 (grammar_conjugation)</option>
            <option value="grammar_sentence">🏷️ 文型表現 (grammar_sentence)</option>
            <option value="vocabulary_daily">🏷️ 日常語彙 (vocabulary_daily)</option>
            <option value="vocabulary_time">🏷️ 時間表現 (vocabulary_time)</option>
            <option value="kanji_reading">🏷️ 漢字読み方 (kanji_reading)</option>
          </select>
        </div>
      </div>

      {/* Main Review Question Display */}
      {filtered.length > 0 && currentQ ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-indigo-400">
              抽出結果: {currentIdx + 1} / {filtered.length} 問 (レベル: {currentQ.level})
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 font-semibold">
              🏷️ {currentQ.categoryName}
            </span>
          </div>

          {/* Question Box */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-base font-medium text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQ.options.map((opt, idx) => {
              let style = 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500';
              if (selectedIndex === idx) {
                style = 'bg-indigo-950 border-indigo-500 text-white';
              }
              if (isSubmitted) {
                if (idx === currentQ.correctIndex) {
                  style = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
                } else if (selectedIndex === idx && idx !== currentQ.correctIndex) {
                  style = 'bg-rose-950 border-rose-500 text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`p-3.5 rounded-xl border text-left text-sm transition flex items-center justify-between ${style}`}
                >
                  <span>{idx + 1}. {opt}</span>
                  {isSubmitted && idx === currentQ.correctIndex && (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  )}
                  {isSubmitted && selectedIndex === idx && idx !== currentQ.correctIndex && (
                    <XCircle className="w-4 h-4 text-rose-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action */}
          {!isSubmitted ? (
            <button
              onClick={() => setSelectedIndex(selectedIndex !== null ? selectedIndex : 0)}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow"
            >
              回答を確認する
            </button>
          ) : (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-emerald-400">💡 解説 & VAK ({vakType.toUpperCase()}) アドバイス:</h4>
                <p className="text-xs text-slate-300">{currentQ.explanation}</p>
                <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs text-indigo-200 mt-2">
                  <strong>💡 {vakType.toUpperCase()}アドバイス:</strong> {currentQ.vakRecommendation[vakType]}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition"
              >
                次の抽出問題へ
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-400">
          該当するジャンルタグの問題が見つかりませんでした。条件を変更してください。
        </div>
      )}
    </div>
  );
};
