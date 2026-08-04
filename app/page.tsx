'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
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
import { Sparkles, ArrowRight, BookOpen, RefreshCw, Layers, X } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<Language>('vi');
  const t = getTranslation(lang);

  const [currentVak, setCurrentVak] = useState<VakType>('visual');
  const [vakResult, setVakResult] = useState<VakResult | null>(null);
  const [weaknessRecords, setWeaknessRecords] = useState<WeaknessRecord[]>([]);

  const [activeTab, setActiveTab] = useState<'vak' | 'jlpt' | 'kana' | 'vocab' | 'grammar' | 'kanji' | 'review' | null>('vak');
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUserProfile = async (userId: string) => {
      const pendingVak = localStorage.getItem('pending_vak_type');
      if (pendingVak) {
        await supabase.from('users').update({ vak_type: pendingVak }).eq('id', userId);
        localStorage.removeItem('pending_vak_type');
        setCurrentVak(pendingVak as VakType);
        return;
      }
      
      const { data } = await supabase.from('users').select('vak_type').eq('id', userId).single();
      if (data?.vak_type && data.vak_type !== 'untested') {
        setCurrentVak(data.vak_type as VakType);
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        fetchUserProfile(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        fetchUserProfile(session.user.id);
      } else {
        setUser(null);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const [diagnosticModal, setDiagnosticModal] = useState<{
    isOpen: boolean;
    mode: 'quick' | 'detailed';
  }>({
    isOpen: false,
    mode: 'quick',
  });

  const [isLogModalOpen, setIsLogModalOpen] = useState<boolean>(false);

  const handleCompleteDiagnostic = async (result: VakResult) => {
    setCurrentVak(result.primaryVak);
    setVakResult(result);
    if (user) {
      await supabase.from('users').update({ vak_type: result.primaryVak }).eq('id', user.id);
    } else {
      localStorage.setItem('pending_vak_type', result.primaryVak);
      window.location.href = '/login';
    }
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">
        {user && (
          <div className="flex items-center justify-end px-2 space-x-3 mb-2 animate-fade-in">
            <span className="text-sm font-bold text-slate-700 bg-white/60 px-3 py-1.5 rounded-xl border border-stone-200 shadow-sm">
              {user.user_metadata?.full_name || 'ゲスト'} さん
            </span>
            <span className="text-xs font-bold px-3 py-1.5 bg-amber-100 text-amber-900 rounded-xl border border-amber-300 shadow-sm">
              {user.user_metadata?.class_name || 'ITM日本語クラス'}
            </span>
          </div>
        )}
        {/* Hero Header */}
        {!user && isHeroVisible && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FFF9F2] via-[#FFF3E4] to-[#F7EFE5] p-5 sm:p-8 border border-amber-200/80 shadow-md">
          <button
            onClick={() => setIsHeroVisible(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 hover:text-stone-900 transition backdrop-blur-sm shadow-sm border border-stone-300/50"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative z-10 max-w-3xl space-y-4 pr-8 sm:pr-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-300 inline-block">
                VAK-Adaptive Language Learning Coach
              </span>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-orange-600 text-white shadow-sm">
                v2.8β
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
        )}

        {/* Main Navigation Tabs */}
        {user && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 shadow-sm gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('vak')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'vak'
                  ? 'bg-orange-600 text-white shadow'
                  : 'bg-amber-50/80 text-slate-600 hover:bg-amber-100 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.tabVakAi}</span>
            </button>
            <button
              onClick={() => setActiveTab('jlpt')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'jlpt'
                  ? 'bg-orange-600 text-white shadow'
                  : 'bg-amber-50/80 text-slate-600 hover:bg-amber-100 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.tabJlpt}</span>
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
        )}

        {/* Tab Content */}
        {user && activeTab !== null && (
          <div className="space-y-8 mb-8">
            {activeTab === 'vak' && (
            <VakContentRenderer vakType={currentVak} lang={lang} />
          )}
          {activeTab === 'jlpt' && (
            <div id="jlpt-practice-section" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <JlptPractice onRecordWeakness={handleRecordWeakness} lang={lang} />
              <WeaknessAnalyzer vakType={currentVak} weaknessRecords={weaknessRecords} lang={lang} />
            </div>
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
          <ReviewDashboard vakType={currentVak} lang={lang} />
        )}
          </div>
        )}

        {/* Section 3: Google Calendar & SRS Review Manager */}
        {user && (
        <div id="jlpt-practice-section" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalendarScheduler vakType={currentVak} lang={lang} />
          <ReviewManager lang={lang} />
        </div>
        )}

        {/* Section 4: ITM External App Integrations */}
        {user && (
          <ExternalIntegrations lang={lang} />
        )}
      </main>

      {/* Diagnostic Modal */}
      <VakDiagnosticModal
        isOpen={diagnosticModal.isOpen}
        mode={diagnosticModal.mode}
        onClose={() => setDiagnosticModal({ ...diagnosticModal, isOpen: false })}
        onComplete={handleCompleteDiagnostic}
        isLoggedIn={!!user}
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
