'use client';

import React, { useState, useEffect } from 'react';
import { JlptQuestion, JlptLevel, WeaknessRecord } from '@/lib/types';
import { getRandomQuestions } from '@/data/jlpt-questions';
import { BookOpen, CheckCircle, XCircle, RefreshCw, Award } from 'lucide-react';

interface JlptPracticeProps {
  onRecordWeakness?: (weakness: WeaknessRecord) => void;
  selectedCategoryFilter?: string | null;
}

export const JlptPractice: React.FC<JlptPracticeProps> = ({
  onRecordWeakness,
}) => {
  const [level, setLevel] = useState<JlptLevel>('N5');
  const [questions, setQuestions] = useState<JlptQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const loadQuestions = (selectedLevel: JlptLevel) => {
    const pool = getRandomQuestions(10, selectedLevel);
    setQuestions(pool);
    setCurrentIdx(0);
    setSelectedIndex(null);
    setIsSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  useEffect(() => {
    loadQuestions(level);
  }, [level]);

  const q = questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIndex(idx);
  };

  const handleSubmit = () => {
    if (selectedIndex === null || !q) return;
    setIsSubmitted(true);

    if (selectedIndex === q.correctIndex) {
      setScore((prev) => prev + 1);
    } else {
      if (onRecordWeakness) {
        onRecordWeakness({
          id: `w_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          userId: 'user_1',
          topic: q.question,
          category: q.category,
          categoryName: q.categoryName,
          incorrectAnswer: q.options[selectedIndex],
          correctAnswer: q.options[q.correctIndex],
          errorType: q.errorType,
          vakRecommendation: q.vakRecommendation,
          createdAt: new Date().toISOString(),
        });
      }
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedIndex(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  if (questions.length === 0 || !q) {
    return (
      <div className="glass-card p-6 border border-amber-200/60 rounded-2xl text-center">
        <p className="text-slate-500">問題を読み込んでいます...</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-amber-100 gap-3">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-orange-600" />
          <h2 className="text-xl font-bold text-slate-800">JLPT N5 / N4 語彙・文法200問問題集</h2>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setLevel('N5')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
              level === 'N5'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'bg-amber-100/70 text-slate-600 hover:bg-amber-200'
            }`}
          >
            N5 (100問)
          </button>
          <button
            onClick={() => setLevel('N4')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
              level === 'N4'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-amber-100/70 text-slate-600 hover:bg-amber-200'
            }`}
          >
            N4 (100問)
          </button>
          <button
            onClick={() => loadQuestions(level)}
            className="p-1.5 rounded-lg bg-amber-100/70 hover:bg-amber-200 text-slate-600 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!isFinished ? (
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-orange-600">
              問題 {currentIdx + 1} / {questions.length} ({q.level})
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-900 border border-amber-300">
              🏷️ {q.categoryName}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFDF9] border border-amber-200 shadow-sm">
            <h3 className="text-base font-medium text-slate-800 leading-relaxed">
              {q.question}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {q.options.map((opt, idx) => {
              let style = 'bg-[#FAF7F2] border-amber-200/80 text-slate-700 hover:border-orange-300 hover:bg-orange-50/50';
              if (selectedIndex === idx) {
                style = 'bg-orange-100 border-orange-500 text-orange-900 font-bold';
              }
              if (isSubmitted) {
                if (idx === q.correctIndex) {
                  style = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                } else if (selectedIndex === idx && idx !== q.correctIndex) {
                  style = 'bg-rose-100 border-rose-400 text-rose-900';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`p-3.5 rounded-xl border text-left text-sm transition flex items-center justify-between ${style}`}
                >
                  <span>{idx + 1}. {opt}</span>
                  {isSubmitted && idx === q.correctIndex && (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  )}
                  {isSubmitted && selectedIndex === idx && idx !== q.correctIndex && (
                    <XCircle className="w-4 h-4 text-rose-600" />
                  )}
                </button>
              );
            })}
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedIndex === null}
              className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-medium text-sm transition shadow-sm"
            >
              回答を確定する
            </button>
          ) : (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-emerald-800">💡 正解と解説</h4>
                  <span className="text-[10px] text-emerald-700 font-medium">分類: {q.categoryName}</span>
                </div>
                <p className="text-xs text-emerald-950 leading-relaxed">{q.explanation}</p>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition"
              >
                {currentIdx + 1 < questions.length ? '次の問題へ進む' : '結果を見る'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">演習セッション完了！</h3>
          <p className="text-slate-600 text-sm">
            正解数: <span className="text-orange-600 font-bold text-lg">{score}</span> / {questions.length} 問
          </p>

          <button
            onClick={() => loadQuestions(level)}
            className="py-2.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition shadow-sm"
          >
            別の10問に挑戦する
          </button>
        </div>
      )}
    </div>
  );
};
