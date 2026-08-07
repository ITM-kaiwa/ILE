'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';
import { Sparkles, Brain, Globe, BookOpen, Bell } from 'lucide-react';
import { APP_VERSION } from '@/lib/config';
import { OnboardingGuideModal } from '@/components/OnboardingGuideModal';

interface NavbarProps {
  currentVak: VakType;
  isHybrid?: boolean;
  hybridLabel?: string;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDiagnostic: (mode: 'quick' | 'detailed') => void;
  onOpenLog?: () => void;
  onVakCycle?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentVak,
  isHybrid,
  hybridLabel,
  lang,
  onLanguageChange,
  onOpenDiagnostic,
  onOpenLog,
  onVakCycle,
}) => {
  const t = getTranslation(lang);
  const [user, setUser] = useState<User | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [pendingReviews, setPendingReviews] = useState(0);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch pending reviews count when user logs in
  useEffect(() => {
    if (!user) {
      setPendingReviews(0);
      return;
    }

    const fetchPendingCount = async () => {
      const now = new Date().toISOString();
      const { count, error } = await supabase
        .from('learning_history')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .lte('next_review', now);
        
      if (!error && count !== null) {
        setPendingReviews(count);
      }
    };
    
    fetchPendingCount();
    
    // Set up a listener for custom event if review manager updates it
    const handleUpdate = () => fetchPendingCount();
    window.addEventListener('srs-updated', handleUpdate);
    return () => window.removeEventListener('srs-updated', handleUpdate);
  }, [user]);

  const handleScrollToReview = () => {
    // Ebbinghaus review section is often at id 'review' or 'ebbinghaus'
    const target = document.getElementById('review') || document.getElementById('ebbinghaus');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easeInOutCubic = percentage < 0.5 
          ? 4 * percentage * percentage * percentage 
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  };

  const getVakBadge = () => {
    if (isHybrid && hybridLabel) {
      return (
        <button onClick={onVakCycle} className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-emerald-500 to-amber-500 text-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
          {hybridLabel}
        </button>
      );
    }
    switch (currentVak) {
      case 'visual':
        return <button onClick={onVakCycle} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-indigo-600 text-white shadow-sm truncate max-w-[90px] sm:max-w-none hover:bg-indigo-700 hover:scale-105 transition cursor-pointer">{t.visualLabel}</button>;
      case 'auditory':
        return <button onClick={onVakCycle} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-emerald-600 text-white shadow-sm truncate max-w-[90px] sm:max-w-none hover:bg-emerald-700 hover:scale-105 transition cursor-pointer">{t.auditoryLabel}</button>;
      case 'kinesthetic':
        return <button onClick={onVakCycle} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-orange-600 text-white shadow-sm font-sans truncate max-w-[90px] sm:max-w-none hover:bg-orange-700 hover:scale-105 transition cursor-pointer">{t.kinestheticLabel}</button>;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-amber-200/60 bg-[#FFFDF9]/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 min-h-16 flex flex-wrap items-center justify-start gap-2 sm:gap-3">
          {/* Logo & Version with Interactive Brain Icon for Telemetry Log */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenLog}
              title="クリックしてシステム通信ログを表示 (Mở nhật ký hệ thống)"
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-md hover:scale-105 transition duration-200 cursor-pointer group shrink-0"
            >
              <Brain className="w-6 h-6 group-hover:rotate-12 transition duration-300" />
            </button>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h1 className="font-bold text-base sm:text-lg text-slate-800 leading-none tracking-tight">
                  {t.appName}
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-orange-100 text-orange-800 border border-orange-300">
                  {APP_VERSION}
                </span>
                {user && (
                  <button
                    onClick={handleScrollToReview}
                    className={`relative p-1.5 rounded-full transition-colors flex items-center justify-center ${
                      pendingReviews > 0 
                        ? 'text-amber-500 hover:bg-amber-50' 
                        : 'text-slate-300 hover:bg-slate-50 opacity-70'
                    }`}
                    title={pendingReviews > 0 ? `復習が必要な項目があります (${pendingReviews})` : '復習項目はありません'}
                  >
                    <Bell className={`w-5 h-5 ${pendingReviews > 0 ? 'animate-wiggle text-amber-500' : 'text-slate-400'}`} fill={pendingReviews > 0 ? 'currentColor' : 'none'} />
                    {pendingReviews > 0 && (
                      <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
                    )}
                  </button>
                )}
                {/* 🔰 Beginner Guide Button - blinking, next to bell */}
                <button
                  onClick={() => setIsGuideOpen(true)}
                  title="初心者ガイド / Hướng dẫn cho người mới"
                  className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition-all duration-200 hover:scale-105 border border-indigo-500 animate-pulse"
                >
                  <span>🔰 Guide</span>
                </button>
              </div>
              <p className="hidden sm:block text-xs text-slate-500 mt-0.5">{t.subTitle}</p>
            </div>
          </div>

          {/* Right side controls flow after Logo area */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Flag Language Switcher Dropdown */}
            <div className="relative flex items-center space-x-1.5 bg-[#FAF7F2] p-1.5 rounded-xl border border-amber-300 shadow-inner">
              <Globe className="w-4 h-4 text-orange-600 ml-1" />
              <select
                value={lang}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer pr-1"
              >
                <option value="ja">JP</option>
                <option value="vi">VN</option>
              </select>
            </div>

            {getVakBadge()}

            {/* Auth Button */}
            {user ? (
              <button
                onClick={() => supabase.auth.signOut()}
                className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition"
              >
                Sign out
              </button>
            ) : (
              <Link
                href="/login"
                className="px-3 py-1.5 text-xs font-bold text-orange-700 bg-orange-100 hover:bg-orange-200 rounded-lg border border-orange-300 transition"
              >
                Sign in
              </Link>
            )}

            {/* Gap for Diagnostics */}
            <div className="flex items-center gap-2 ml-0 sm:ml-2">
              <button
                onClick={() => onOpenDiagnostic('quick')}
                className="px-3 py-1.5 text-[10px] sm:text-xs font-medium text-slate-700 bg-amber-100/70 hover:bg-amber-200/70 rounded-lg border border-amber-200 transition"
              >
                {t.quickDiagnostic}
              </button>
              <button
                onClick={() => onOpenDiagnostic('detailed')}
                className="px-3 py-1.5 text-[10px] sm:text-xs font-medium text-orange-700 bg-orange-100/80 hover:bg-orange-200/80 rounded-lg border border-orange-300 transition flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>{t.detailedDiagnostic}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Onboarding Guide Modal */}
      <OnboardingGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </>
  );
};
