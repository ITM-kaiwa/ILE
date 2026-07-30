'use client';

import React, { useState } from 'react';
import { JlptQuestion } from '@/lib/types';
import { BookOpen, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

export const JlptPractice: React.FC = () => {
  const sampleQuestions: JlptQuestion[] = [
    {
      id: 'q1',
      level: 'N5',
      question: 'わたしは まいにち がっこう (　) いきます。',
      options: ['へ', 'が', 'を', 'は'],
      correctIndex: 0,
      explanation: '移動の方向を表す助詞は「へ」です。',
      errorType: 'grammar',
    },
    {
      id: 'q2',
      level: 'N5',
      question: 'きのう としょかんで ほんを (　)。',
      options: ['よみます', 'よみました', 'よんで', 'よまない'],
      correctIndex: 1,
      explanation: '「きのう（過去）」なので過去形の「よみました」が正解です。',
      errorType: 'grammar',
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const q = sampleQuestions[currentIdx];

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIndex(idx);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelectedIndex(null);
    setIsSubmitted(false);
    setCurrentIdx((prev) => (prev + 1) % sampleQuestions.length);
  };

  return (
    <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">JLPT N5 / N4 模擬問題演習</h2>
        </div>
        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800">
          {q.level} レベル
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs text-indigo-400 font-mono">問題 {currentIdx + 1}</span>
          <h3 className="text-base font-medium text-white mt-1 leading-relaxed">
            {q.question}
          </h3>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {q.options.map((opt, idx) => {
            let style = 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500';
            if (selectedIndex === idx) {
              style = 'bg-indigo-950 border-indigo-500 text-white';
            }
            if (isSubmitted) {
              if (idx === q.correctIndex) {
                style = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
              } else if (selectedIndex === idx && idx !== q.correctIndex) {
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
                {isSubmitted && idx === q.correctIndex && (
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                )}
                {isSubmitted && selectedIndex === idx && idx !== q.correctIndex && (
                  <XCircle className="w-4 h-4 text-rose-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedIndex === null}
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-sm transition"
          >
            回答を送信
          </button>
        ) : (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-xs font-bold text-slate-300 mb-1">解説:</h4>
              <p className="text-xs text-slate-300">{q.explanation}</p>
            </div>
            <button
              onClick={handleNext}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition"
            >
              次の問題へ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
