'use client';

import React, { useState } from 'react';
import { QuestionCategory, WeaknessRecord, JlptLevel } from '@/lib/types';
import { Language, getTranslation } from '@/lib/i18n';
import { JLPT_N5_QUESTIONS } from '@/data/jlpt-n5-questions';
import { JLPT_N4_QUESTIONS } from '@/data/jlpt-n4-questions';
import { BookOpen, CheckCircle, XCircle, RefreshCw , ChevronDown, ChevronUp } from 'lucide-react';

interface JlptPracticeProps {
  onRecordWeakness: (record: WeaknessRecord) => void;
  lang?: Language;
}

export const JlptPractice: React.FC<JlptPracticeProps> = ({ onRecordWeakness, lang = 'ja' }) => {
  const [selectedLevel, setSelectedLevel] = useState<JlptLevel>('N5');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const isVi = lang === 'vi';

  const questions = selectedLevel === 'N5' ? JLPT_N5_QUESTIONS : JLPT_N4_QUESTIONS;
  const currentQ = questions[currentIdx] || questions[0];

  const handleSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    setIsSubmitted(true);

    if (selectedIndex !== currentQ.correctIndex) {
      onRecordWeakness({
        id: 'weak_' + Date.now(),
        userId: 'user_default',
        topic: currentQ.question,
        category: currentQ.category,
        categoryName: currentQ.categoryName,
        incorrectAnswer: currentQ.options[selectedIndex],
        correctAnswer: currentQ.options[currentQ.correctIndex],
        errorType: currentQ.errorType || 'grammar',
        vakRecommendation: currentQ.vakRecommendation,
        createdAt: new Date().toISOString(),
      });
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
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
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-amber-100 gap-3">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-orange-600" />
          <h2 className="text-xl font-bold text-slate-800">
            {t.jlptTitle}
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-900 text-xs font-bold transition flex items-center space-x-1 border border-orange-300/50"
          >
            <span>{isExpanded ? t.collapseModule : t.viewModule}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            onClick={() => { setSelectedLevel('N5'); setCurrentIdx(0); setSelectedIndex(null); setIsSubmitted(false); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedLevel === 'N5' ? 'bg-orange-600 text-white shadow-sm' : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            N5 (100{isVi ? ' câu' : '問'})
          </button>
          <button
            onClick={() => { setSelectedLevel('N4'); setCurrentIdx(0); setSelectedIndex(null); setIsSubmitted(false); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedLevel === 'N4' ? 'bg-amber-200 text-amber-900 shadow-sm' : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            N4 (100{isVi ? ' câu' : '問'})
          </button>
        </div>
      </div>
      {isExpanded && (
      <>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono font-bold text-orange-700">
            {isVi ? `Câu hỏi ${currentIdx + 1} / ${questions.length} (${selectedLevel})` : `問題 ${currentIdx + 1} / ${questions.length} (${selectedLevel})`}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-semibold">
            🏷️ {currentQ.categoryName}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 leading-relaxed font-learning-card">
            {currentQ.question}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentQ.options.map((opt, idx) => {
            let style = 'bg-[#FAF7F2] border-amber-200/80 text-slate-700 hover:border-orange-300 hover:bg-amber-50/50';
            if (selectedIndex === idx) {
              style = 'bg-orange-100 border-orange-400 text-orange-950 font-bold';
            }
            if (isSubmitted) {
              if (idx === currentQ.correctIndex) {
                style = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
              } else if (selectedIndex === idx && idx !== currentQ.correctIndex) {
                style = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-3.5 rounded-xl border text-left text-sm transition flex items-center justify-between font-medium ${style}`}
              >
                <span>{idx + 1}. {opt}</span>
                {isSubmitted && idx === currentQ.correctIndex && (
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {isSubmitted && selectedIndex === idx && idx !== currentQ.correctIndex && (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedIndex === null}
            className={`w-full py-3 rounded-xl font-bold text-sm transition shadow-sm ${
              selectedIndex !== null
                ? 'bg-orange-600 hover:bg-orange-500 text-white cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {t.checkAnswer}
          </button>
        ) : (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
              <h4 className="text-xs font-bold text-emerald-900">💡 {isVi ? 'Giải thích & Lời khuyên VAK:' : '解説 & VAK アドバイス:'}</h4>
              <p className="text-xs text-emerald-950">{currentQ.explanation}</p>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition flex items-center justify-center space-x-2"
            >
              <span>{t.nextQuestion}</span>
            </button>
          </div>
        )}
      </div>
      </>
      )}
    </div>
  );
};
