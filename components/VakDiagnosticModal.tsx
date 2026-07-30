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
import { CheckCircle2, RefreshCw, X, ArrowRight, Brain, Award } from 'lucide-react';

interface VakDiagnosticModalProps {
  isOpen: boolean;
  mode: 'quick' | 'detailed';
  onClose: () => void;
  onComplete: (result: VakResult) => void;
}

export const VakDiagnosticModal: React.FC<VakDiagnosticModalProps> = ({
  isOpen,
  mode,
  onClose,
  onComplete,
}) => {
  const [questions, setQuestions] = useState<VakQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, VakType>>({});
  const [result, setResult] = useState<VakResult | null>(null);

  useEffect(() => {
    if (isOpen) {
      const source = mode === 'quick' ? QUICK_VAK_QUESTIONS : DETAILED_VAK_QUESTIONS;
      // Specification F-01 Requirement: Randomize option order per question to prevent choice bias
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
      // Completed diagnostic
      const res = calculateVakResult(updated);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-indigo-400" />
            <h3 className="font-semibold text-lg text-white">
              VAK 認知特性診断 ({mode === 'quick' ? '簡易 5問' : '詳細 20問'})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!result ? (
            <div>
              {/* Progress bar */}
              <div className="w-full bg-slate-800 h-2 rounded-full mb-6 overflow-hidden">
                <div
                  className="bg-indigo-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">
                  質問 {currentIndex + 1} / {total}
                </span>
                <h4 className="text-lg font-medium text-white mt-1 leading-relaxed">
                  {currentQ?.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ?.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.type)}
                    className="w-full text-left p-4 rounded-xl bg-slate-800/80 hover:bg-indigo-950/60 border border-slate-700 hover:border-indigo-500/50 transition group flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-200 group-hover:text-white">
                      {opt.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 text-indigo-400 mb-4">
                <Award className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-bold text-white mb-2">診断完了！</h4>
              <p className="text-slate-400 text-sm mb-6">
                あなたの優位な学習認知タイプが判明しました
              </p>

              {/* Dominant Type Card */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 mb-6">
                {result.isHybrid ? (
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase">
                      マルチハイブリッド型
                    </span>
                    <h5 className="text-xl font-bold text-white mt-1">
                      {result.hybridLabel}
                    </h5>
                    <p className="text-xs text-slate-400 mt-2">
                      複数タイプの強みを持ち合わせています。状況に合わせて柔軟な学習方法を適用できます。
                    </p>
                  </div>
                ) : (
                  <div>
                    <span className="text-xs text-indigo-400 font-semibold uppercase">
                      単一優位型
                    </span>
                    <h5 className="text-xl font-bold text-white mt-1 uppercase">
                      {result.primaryVak === 'visual'
                        ? '👁️ 視覚優位 (Visual)'
                        : result.primaryVak === 'auditory'
                        ? '👂 聴覚優位 (Auditory)'
                        : '✋ 身体感覚優位 (Kinesthetic)'}
                    </h5>
                  </div>
                )}

                {/* Score percentages */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/50">
                    <span className="text-xs text-blue-400 block font-medium">視覚 (V)</span>
                    <span className="text-lg font-bold text-white">
                      {result.percentages.visual}%
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50">
                    <span className="text-xs text-emerald-400 block font-medium">聴覚 (A)</span>
                    <span className="text-lg font-bold text-white">
                      {result.percentages.auditory}%
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/50">
                    <span className="text-xs text-amber-400 block font-medium">身体感覚 (K)</span>
                    <span className="text-lg font-bold text-white">
                      {result.percentages.kinesthetic}%
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/25"
              >
                このタイプでAI学習を開始する
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
