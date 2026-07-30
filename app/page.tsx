'use client';

import React, { useState } from 'react';
import { VakType, VakResult } from '@/data/vak-questions';
import { WeaknessRecord } from '@/lib/types';
import { Navbar } from '@/components/Navbar';
import { VakDiagnosticModal } from '@/components/VakDiagnosticModal';
import { VakContentRenderer } from '@/components/VakContentRenderer';
import { GrammarCardsSection } from '@/components/GrammarCardsSection';
import { MinnaFlashcardsSection } from '@/components/MinnaFlashcardsSection';
import { KanjiCardsSection } from '@/components/KanjiCardsSection';
import { KanaCardsSection } from '@/components/KanaCardsSection';
import { ReviewDashboard } from '@/components/ReviewDashboard';
import { CalendarScheduler } from '@/components/CalendarScheduler';
import { ReviewManager } from '@/components/ReviewManager';
import { WeaknessAnalyzer } from '@/components/WeaknessAnalyzer';
import { JlptPractice } from '@/components/JlptPractice';
import { ExternalIntegrations } from '@/components/ExternalIntegrations';
import { Sparkles, ArrowRight, BookOpen, RefreshCw, Layers } from 'lucide-react';

export default function Home() {
  const [currentVak, setCurrentVak] = useState<VakType>('visual');
  const [vakResult, setVakResult] = useState<VakResult | null>(null);
  const [weaknessRecords, setWeaknessRecords] = useState<WeaknessRecord[]>([]);

  const [activeTab, setActiveTab] = useState<'learn' | 'kana' | 'vocab' | 'grammar' | 'kanji' | 'review'>('learn');

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

  const handleRecordWeakness = (newRecord: WeaknessRecord) => {
    setWeaknessRecords((prev) => [newRecord, ...prev]);
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

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FFF9F2] via-[#FFF3E4] to-[#F7EFE5] p-8 border border-amber-200/80 shadow-md">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-300">
                VAK-Adaptive Language Learning Coach
              </span>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-orange-600 text-white shadow-sm">
                v1.3β
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              あなたの認知特性 (VAK) に完全パーソナライズされた<br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent">
                統合AI日本語学習プラットフォーム
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              ベトナム人日本語学習者の自己学習を支援。視覚・聴覚・身体感覚の認知タイプ判定と、エビングハウスの忘却曲線アルゴリズムで、最適な復習タイミングを全自動プロデュースします。
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setDiagnosticModal({ isOpen: true, mode: 'quick' })}
                className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition shadow-md flex items-center space-x-2"
              >
                <span>⚡ 1分でわかる VAK 簡易診断 (5問)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDiagnosticModal({ isOpen: true, mode: 'detailed' })}
                className="px-5 py-2.5 rounded-xl bg-[#FFFDF9] hover:bg-amber-50 text-amber-900 text-sm font-medium border border-amber-300 transition flex items-center space-x-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>高精度 詳細診断 (20問)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 shadow-sm gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('learn')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'learn'
                  ? 'bg-orange-600 text-white shadow'
                  : 'bg-amber-50/80 text-slate-600 hover:bg-amber-100 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI学習 & 問題演習</span>
            </button>
            <button
              onClick={() => setActiveTab('kana')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'kana'
                  ? 'bg-amber-600 text-white shadow'
                  : 'bg-amber-50/80 text-slate-600 hover:bg-amber-100 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ひらがな・カタカナ</span>
            </button>
            <button
              onClick={() => setActiveTab('vocab')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'vocab'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-amber-50/80 text-slate-600 hover:bg-amber-100 hover:text-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>「みんなの日本語」単語</span>
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'grammar'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-amber-50/80 text-slate-600 hover:bg-amber-100 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>VNJPClub 文法</span>
            </button>
            <button
              onClick={() => setActiveTab('kanji')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'kanji'
                  ? 'bg-rose-600 text-white shadow'
                  : 'bg-amber-50/80 text-slate-600 hover:bg-amber-100 hover:text-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>漢字 (Langoal)</span>
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'review'
                  ? 'bg-teal-600 text-white shadow'
                  : 'bg-amber-50/80 text-slate-600 hover:bg-amber-100 hover:text-slate-800'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>復習ダッシュボード</span>
            </button>
          </div>

          {/* VAK Selector */}
          <div className="grid grid-cols-3 gap-2">
            {(['visual', 'auditory', 'kinesthetic'] as VakType[]).map((type) => (
              <button
                key={type}
                onClick={() => setCurrentVak(type)}
                className={`py-1.5 px-3 rounded-xl text-xs font-bold transition ${
                  currentVak === type
                    ? type === 'visual'
                      ? 'bg-indigo-600 text-white shadow'
                      : type === 'auditory'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'bg-orange-600 text-white shadow'
                    : 'bg-amber-50 text-slate-500 hover:text-slate-800 border border-amber-200/50'
                }`}
              >
                {type === 'visual' ? '👁️ 視覚' : type === 'auditory' ? '👂 聴覚' : '✋ 身体感覚'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'learn' && (
          <>
            <VakContentRenderer vakType={currentVak} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <JlptPractice onRecordWeakness={handleRecordWeakness} />
              <WeaknessAnalyzer vakType={currentVak} weaknessRecords={weaknessRecords} />
            </div>
          </>
        )}

        {activeTab === 'kana' && (
          <KanaCardsSection vakType={currentVak} />
        )}

        {activeTab === 'vocab' && (
          <MinnaFlashcardsSection vakType={currentVak} />
        )}

        {activeTab === 'grammar' && (
          <GrammarCardsSection vakType={currentVak} />
        )}

        {activeTab === 'kanji' && (
          <KanjiCardsSection vakType={currentVak} />
        )}

        {activeTab === 'review' && (
          <ReviewDashboard vakType={currentVak} />
        )}

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
