'use client';

import React, { useState } from 'react';
import { VakType, VakResult } from '@/data/vak-questions';
import { Navbar } from '@/components/Navbar';
import { VakDiagnosticModal } from '@/components/VakDiagnosticModal';
import { VakContentRenderer } from '@/components/VakContentRenderer';
import { CalendarScheduler } from '@/components/CalendarScheduler';
import { ReviewManager } from '@/components/ReviewManager';
import { WeaknessAnalyzer } from '@/components/WeaknessAnalyzer';
import { JlptPractice } from '@/components/JlptPractice';
import { ExternalIntegrations } from '@/components/ExternalIntegrations';
import { Sparkles, Brain, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  const [currentVak, setCurrentVak] = useState<VakType>('visual');
  const [vakResult, setVakResult] = useState<VakResult | null>(null);

  const [diagnosticModal, setDiagnosticModal] = useState<{
    isOpen: boolean;
    mode: 'quick' | 'detailed';
  }>({
    isOpen: false,
    mode: 'quick',
  });

  const handleCompleteDiagnostic = (result: VakResult) => {
    setCurrentVak(result.primaryVak);
    setVakResult(result);
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Top Navbar */}
      <Navbar
        currentVak={currentVak}
        isHybrid={vakResult?.isHybrid}
        hybridLabel={vakResult?.hybridLabel}
        onOpenDiagnostic={(mode) => setDiagnosticModal({ isOpen: true, mode })}
      />

      {/* Hero Header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 p-8 border border-indigo-800/50 shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              VAK-Adaptive Language Learning Coach
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              あなたの認知特性 (VAK) に完全パーソナライズされた<br />
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                統合AI日本語学習プラットフォーム
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ベトナム人日本語学習者の自己学習を支援。視覚・聴覚・身体感覚の認知タイプ判定と、エビングハウスの忘却曲線アルゴリズムで、最適な復習タイミングを全自動プロデュースします。
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setDiagnosticModal({ isOpen: true, mode: 'quick' })}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition shadow-lg flex items-center space-x-2"
              >
                <span>⚡ 1分でわかる VAK 簡易診断 (5問)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDiagnosticModal({ isOpen: true, mode: 'detailed' })}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>高精度 詳細診断 (20問)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic VAK Selector Tabs */}
        <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-900/80 border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 px-3 hidden sm:inline">
            表示切り替えテスト:
          </span>
          <div className="grid grid-cols-3 gap-2 w-full sm:w-auto">
            {(['visual', 'auditory', 'kinesthetic'] as VakType[]).map((type) => (
              <button
                key={type}
                onClick={() => setCurrentVak(type)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition ${
                  currentVak === type
                    ? type === 'visual'
                      ? 'bg-blue-600 text-white shadow'
                      : type === 'auditory'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'bg-amber-600 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {type === 'visual' ? '👁️ 視覚 (Visual)' : type === 'auditory' ? '👂 聴覚 (Auditory)' : '✋ 身体感覚 (Kinesthetic)'}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Dynamic AI Learning Content Generator */}
        <VakContentRenderer vakType={currentVak} />

        {/* Section 2: JLPT Practice & Weakness Analyzer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <JlptPractice />
          <WeaknessAnalyzer vakType={currentVak} />
        </div>

        {/* Section 3: Google Calendar & SRS Review Manager */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalendarScheduler vakType={currentVak} />
          <ReviewManager />
        </div>

        {/* Section 4: ITM External App Integrations */}
        <ExternalIntegrations />
      </main>

      {/* Diagnostic Modal */}
      <VakDiagnosticModal
        isOpen={diagnosticModal.isOpen}
        mode={diagnosticModal.mode}
        onClose={() => setDiagnosticModal({ ...diagnosticModal, isOpen: false })}
        onComplete={handleCompleteDiagnostic}
      />
    </div>
  );
}
