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
import { Sparkles, ArrowRight, BookOpen, RefreshCw, Layers, X, MessageCircle } from 'lucide-react';
import { APP_VERSION } from '@/lib/config';

const smoothScrollTo = (targetId: string, duration: number) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;
  
  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  
  requestAnimationFrame(animation);
};

export default function Home() {
  const [lang, setLang] = useState<Language>('vi');
  const t = getTranslation(lang);

  const [currentVak, setCurrentVak] = useState<VakType>('visual');
  const [vakResult, setVakResult] = useState<VakResult | null>(null);
  const [weaknessRecords, setWeaknessRecords] = useState<WeaknessRecord[]>([]);

  const [activeTab, setActiveTab] = useState<'vak' | 'jlpt' | 'kana' | 'vocab' | 'grammar' | 'kanji' | 'review' | 'conversation' | 'link' | null>('vak');
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

  const handleVakCycle = () => {
    const sequence: VakType[] = ['visual', 'auditory', 'kinesthetic'];
    const currentIndex = sequence.indexOf(currentVak);
    const nextIndex = (currentIndex + 1) % sequence.length;
    const nextVak = sequence[nextIndex];
    
    setCurrentVak(nextVak);
    if (user) {
      supabase.from('users').update({ vak_type: nextVak }).eq('id', user.id);
    } else {
      localStorage.setItem('pending_vak_type', nextVak);
    }
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
        onVakCycle={handleVakCycle}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 space-y-6">
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
                {APP_VERSION}
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
          <div className="flex flex-wrap border-b border-slate-300 w-full bg-slate-50 mb-6">
            <button
              onClick={() => setActiveTab('vak')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'vak'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI</span>
            </button>
            <button
              onClick={() => setActiveTab('kana')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'kana'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Chữ Kana' : 'かな'}</span>
            </button>
            <button
              onClick={() => setActiveTab('vocab')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'vocab'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Từ vựng' : '単語'}</span>
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'grammar'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Ngữ pháp' : '文法'}</span>
            </button>
            <button
              onClick={() => setActiveTab('kanji')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'kanji'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Kanji' : '漢字'}</span>
            </button>
            <button
              onClick={() => setActiveTab('jlpt')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'jlpt'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>JLPT</span>
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'review'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Ôn tập' : '復習'}</span>
            </button>
            <button
              onClick={() => setActiveTab('conversation')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'conversation'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Hội thoại' : '会話'}</span>
            </button>
            <button
              onClick={() => setActiveTab('link')}
              className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                activeTab === 'link'
                  ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                  : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
              }`}
            >
              <Link className="w-4 h-4" />
              <span>LINK</span>
            </button>
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
              <JlptPractice onRecordWeakness={handleRecordWeakness} lang={lang} vakType={currentVak} />
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
            {activeTab === 'conversation' && (
              <div id="external-integrations-section">
                <ExternalIntegrations lang={lang} />
              </div>
            )}
          </div>
        )}

        {/* Section 3: Google Calendar & SRS Review Manager */}
        {user && (
        <div id="ebbinghaus" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalendarScheduler vakType={currentVak} lang={lang} />
          <ReviewManager lang={lang} />
        </div>
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

