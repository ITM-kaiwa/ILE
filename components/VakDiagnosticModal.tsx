'use client';

import React, { useState, useEffect } from 'react';
import {
  QUICK_VAK_QUESTIONS,
  DETAILED_VAK_QUESTIONS,
  VakQuestion,
  VakType,
  calculateVakResult,
  getRandomizedQuestions,
  VakResult,
} from '@/data/vak-questions';
import { X, ArrowRight, Brain, Award } from 'lucide-react';

interface VakDiagnosticModalProps {
  isOpen: boolean;
  mode: 'quick' | 'detailed';
  onClose: () => void;
  onComplete: (result: VakResult) => void;
  isLoggedIn?: boolean;
}

export const VakDiagnosticModal: React.FC<VakDiagnosticModalProps> = ({
  isOpen,
  mode,
  onClose,
  onComplete,
  isLoggedIn = false,
}) => {
  const [questions, setQuestions] = useState<VakQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, VakType>>({});
  const [result, setResult] = useState<VakResult | null>(null);

  useEffect(() => {
    if (isOpen) {
      const source = mode === 'quick' ? QUICK_VAK_QUESTIONS : DETAILED_VAK_QUESTIONS;
      setQuestions(getRandomizedQuestions(source));
      setCurrentIndex(0);
      setAnswers({});
      setResult(null);
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];
  const total = questions.length;

  const handleSelectOption = (type: VakType) => {
    const updated = { ...answers, [currentQ.id]: type };
    setAnswers(updated);

    if (currentIndex + 1 < total) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const formattedAnswers = Object.entries(updated).map(([questionId, selectedType]) => ({
        questionId,
        selectedType,
      }));
      const res = calculateVakResult(formattedAnswers);
      setResult(res);
    }
  };

  const handleFinish = () => {
    if (result) {
      onComplete(result);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#FFFDF9] border border-amber-200 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-100 bg-amber-50/50">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-orange-600" />
            <h3 className="font-bold text-lg text-slate-800">
              VAK 認知特性診断 ({mode === 'quick' ? '簡易 5問' : '詳細 20問'})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-amber-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!result ? (
            <div>
              {/* Progress bar */}
              <div className="w-full bg-amber-100 h-2 rounded-full mb-6 overflow-hidden">
                <div
                  className="bg-orange-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="mb-6">
                <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
                  質問 {currentIndex + 1} / {total}
                </span>
                <h4 className="text-lg font-medium text-slate-800 mt-1 leading-relaxed">
                  {currentQ?.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ?.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.type)}
                    className="w-full text-left p-4 rounded-2xl bg-[#FAF7F2] hover:bg-orange-50 border border-amber-200/80 hover:border-orange-300 transition group flex items-center justify-between shadow-sm"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-orange-900">
                      {opt.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                <Award className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-bold text-slate-800 mb-2">診断完了！</h4>
              <p className="text-slate-500 text-sm mb-6">
                あなたの優位な学習認知タイプが判明しました
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 mb-6">
                {result.isHybrid ? (
                  <div>
                    <span className="text-xs text-amber-700 font-bold uppercase">
                      マルチハイブリッド型
                    </span>
                    <h5 className="text-xl font-extrabold text-slate-800 mt-1">
                      {result.hybridLabel}
                    </h5>
                  </div>
                ) : (
                  <div>
                    <span className="text-xs text-orange-600 font-bold uppercase">
                      単一優位型
                    </span>
                    <h5 className="text-xl font-extrabold text-slate-800 mt-1 uppercase">
                      {result.primaryVak === 'visual'
                        ? '👁️ 視覚優位 (Visual)'
                        : result.primaryVak === 'auditory'
                        ? '👂 聴覚優位 (Auditory)'
                        : '✋ 身体感覚優位 (Kinesthetic)'}
                    </h5>
                  </div>
                )}

                {/* Scores */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200">
                    <span className="text-xs text-indigo-700 block font-semibold">視覚 (V)</span>
                    <span className="text-lg font-bold text-indigo-900">
                      {Math.round((result.scores.visual / total) * 100)}%
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-xs text-emerald-700 block font-semibold">聴覚 (A)</span>
                    <span className="text-lg font-bold text-emerald-900">
                      {Math.round((result.scores.auditory / total) * 100)}%
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-xs text-orange-700 block font-semibold">身体感覚 (K)</span>
                    <span className="text-lg font-bold text-orange-900">
                      {Math.round((result.scores.kinesthetic / total) * 100)}%
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium transition shadow-md"
              >
                {isLoggedIn ? 'このタイプでAI学習を開始する' : '診断結果を保存して今すぐ登録する'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
