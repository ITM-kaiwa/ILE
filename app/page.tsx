'use client';

import React, { useState } from 'react';
import { VakType, VakResult } from '@/data/vak-questions';
import { WeaknessRecord } from '@/lib/types';
import { Navbar } from '@/components/Navbar';
import { VakDiagnosticModal } from '@/components/VakDiagnosticModal';
import { VakContentRenderer } from '@/components/VakContentRenderer';
import { GrammarCardsSection } from '@/components/GrammarCardsSection';
import { ReviewDashboard } from '@/components/ReviewDashboard';
import { CalendarScheduler } from '@/components/CalendarScheduler';
import { ReviewManager } from '@/components/ReviewManager';
import { WeaknessAnalyzer } from '@/components/WeaknessAnalyzer';
import { JlptPractice } from '@/components/JlptPractice';
import { ExternalIntegrations } from '@/components/ExternalIntegrations';
import { Sparkles, ArrowRight, BookOpen, RefreshCw } from 'lucide-react';

export default function Home() {
  const [currentVak, setCurrentVak] = useState<VakType>('visual');
  const [vakResult, setVakResult] = useState<VakResult | null>(null);
  const [weaknessRecords, setWeaknessRecords] = useState<WeaknessRecord[]>([]);

  const [activeTab, setActiveTab] = useState<'learn' | 'review' | 'grammar'>('learn');

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

        {/* Dynamic VAK Selector & Main Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-2xl bg-slate-900/80 border border-slate-800 gap-3">
          {/* Main Navigation Tabs */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('learn')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'learn'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI学習 & 問題演習</span>
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'grammar'
                  ? 'bg-purple-600 text-white shadow'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>VNJPClub N5/N4 文法カード</span>
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'review'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>復習専用ダッシュボード</span>
            </button>
          </div>

          {/* VAK Type Selector */}
          <div className="grid grid-cols-3 gap-2">
            {(['visual', 'auditory', 'kinesthetic'] as VakType[]).map((type) => (
              <button
                key={type}
                onClick={() => setCurrentVak(type)}
                className={`py-1.5 px-3 rounded-xl text-xs font-bold transition ${
                  currentVak === type
                    ? type === 'visual'
                      ? 'bg-blue-600 text-white shadow'
                      : type === 'auditory'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'bg-amber-600 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {type === 'visual' ? '👁️ 視覚' : type === 'auditory' ? '👂 聴覚' : '✋ 身体感覚'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: AI Learning & JLPT Exercises */}
        {activeTab === 'learn' && (
          <>
            <VakContentRenderer vakType={currentVak} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <JlptPractice onRecordWeakness={handleRecordWeakness} />
              <WeaknessAnalyzer vakType={currentVak} weaknessRecords={weaknessRecords} />
            </div>
          </>
        )}

        {/* Tab 2: VNJPClub N5/N4 Grammar Cards Section */}
        {activeTab === 'grammar' && (
          <GrammarCardsSection vakType={currentVak} />
        )}

        {/* Tab 3: Dedicated Review Dashboard (Tag Filter) */}
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
