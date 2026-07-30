'use client';

import React, { useState } from 'react';
import { VakType, VakResult } from '@/data/vak-questions';
import { WeaknessRecord } from '@/lib/types';
import { Language, getTranslation } from '@/lib/i18n';
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
import { LogFloatingModal } from '@/components/LogFloatingModal';
import { Sparkles, ArrowRight, BookOpen, RefreshCw, Layers } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<Language>('ja');
  const t = getTranslation(lang);

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

  const [isLogModalOpen, setIsLogModalOpen] = useState<boolean>(false);

  const handleCompleteDiagnostic = (result: VakResult) => {
    setCurrentVak(result.primaryVak);
    setVakResult(result);
  };

  const handleRecordWeakness = (newRecord: WeaknessRecord) => {
    setWeaknessRecords((prev) => [newRecord, ...prev]);
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Top Navbar with Flag Language Switcher & Interactive Brain Log Trigger */}
      <Navbar
        currentVak={currentVak}
        isHybrid={vakResult?.isHybrid}
        hybridLabel={vakResult?.hybridLabel}
        lang={lang}
        onLanguageChange={(newLang) => setLang(newLang)}
        onOpenDiagnostic={(mode) => setDiagnosticModal({ isOpen: true, mode })}
        onOpenLog={() => setIsLogModalOpen(true)}
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
                v2.0β
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              {t.heroTitle1}<br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.heroDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setDiagnosticModal({ isOpen: true, mode: 'quick' })}
                className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition shadow-md flex items-center space-x-2"
              >
                <span>{t.quickDiagnostic}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDiagnosticModal({ isOpen: true, mode: 'detailed' })}
                className="px-5 py-2.5 rounded-xl bg-[#FFFDF9] hover:bg-amber-50 text-amber-900 text-sm font-medium border border-amber-300 transition flex items-center space-x-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>{t.detailedDiagnostic}</span>
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
              <span>{t.tabLearn}</span>
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
              <span>{t.tabKana}</span>
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
              <span>{t.tabVocab}</span>
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
              <span>{t.tabGrammar}</span>
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
              <span>{t.tabKanji}</span>
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
              <span>{t.tabReview}</span>
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
                {type === 'visual' ? t.vakVisual : type === 'auditory' ? t.vakAuditory : t.vakKinesthetic}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'learn' && (
          <>
            <VakContentRenderer vakType={currentVak} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <JlptPractice onRecordWeakness={handleRecordWeakness} lang={lang} />
              <WeaknessAnalyzer vakType={currentVak} weaknessRecords={weaknessRecords} lang={lang} />
            </div>
          </>
        )}

        {activeTab === 'kana' && (
          <KanaCardsSection vakType={currentVak} lang={lang} />
        )}

        {activeTab === 'vocab' && (
          <MinnaFlashcardsSection vakType={currentVak} lang={lang} />
        )}

        {activeTab === 'grammar' && (
          <GrammarCardsSection vakType={currentVak} lang={lang} />
        )}

        {activeTab === 'kanji' && (
          <KanjiCardsSection vakType={currentVak} lang={lang} />
        )}

        {activeTab === 'review' && (
          <ReviewDashboard vakType={currentVak} />
        )}

        {/* Section 3: Google Calendar & SRS Review Manager */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalendarScheduler vakType={currentVak} lang={lang} />
          <ReviewManager lang={lang} />
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

      {/* System Telemetry & Communication Log Floating Modal */}
      <LogFloatingModal
        isOpen={isLogModalOpen}
        lang={lang}
        onClose={() => setIsLogModalOpen(false)}
      />
    </div>
  );
}
