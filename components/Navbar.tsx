'use client';

import React from 'react';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';
import { Sparkles, Brain, Globe } from 'lucide-react';

interface NavbarProps {
  currentVak: VakType;
  isHybrid?: boolean;
  hybridLabel?: string;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDiagnostic: (mode: 'quick' | 'detailed') => void;
  onOpenLog?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentVak,
  isHybrid,
  hybridLabel,
  lang,
  onLanguageChange,
  onOpenDiagnostic,
  onOpenLog,
}) => {
  const t = getTranslation(lang);

  const getVakBadge = () => {
    if (isHybrid && hybridLabel) {
      return (
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-emerald-500 to-amber-500 text-white shadow-sm">
          {hybridLabel}
        </span>
      );
    }
    switch (currentVak) {
      case 'visual':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600 text-white shadow-sm">{t.visualLabel}</span>;
      case 'auditory':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-600 text-white shadow-sm">{t.auditoryLabel}</span>;
      case 'kinesthetic':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-600 text-white shadow-sm font-sans">{t.kinestheticLabel}</span>;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-200/60 bg-[#FFFDF9]/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Version v1.9β with Interactive Brain Icon for Telemetry Log */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenLog}
            title="クリックしてシステム通信ログを表示 (Mở nhật ký hệ thống)"
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-md hover:scale-105 transition duration-200 cursor-pointer group"
          >
            <Brain className="w-6 h-6 group-hover:rotate-12 transition duration-300" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-bold text-lg text-slate-800 leading-none tracking-tight">
                {t.appName}
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-orange-100 text-orange-800 border border-orange-300">
                v1.9β
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{t.subTitle}</p>
          </div>
        </div>

        {/* Right side controls: Language Selector Dropdown with Flag icons */}
        <div className="flex items-center space-x-3">
          {/* Flag Language Switcher Dropdown */}
          <div className="relative flex items-center space-x-1.5 bg-[#FAF7F2] p-1.5 rounded-xl border border-amber-300 shadow-inner">
            <Globe className="w-4 h-4 text-orange-600 ml-1" />
            <select
              value={lang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer pr-1"
            >
              <option value="ja">🇯🇵 日本語 (JP)</option>
              <option value="vi">🇻🇳 Tiếng Việt (VN)</option>
            </select>
          </div>

          {getVakBadge()}

          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => onOpenDiagnostic('quick')}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-amber-100/70 hover:bg-amber-200/70 rounded-lg border border-amber-200 transition"
            >
              {t.quickDiagnostic}
            </button>
            <button
              onClick={() => onOpenDiagnostic('detailed')}
              className="px-3 py-1.5 text-xs font-medium text-orange-700 bg-orange-100/80 hover:bg-orange-200/80 rounded-lg border border-orange-300 transition flex items-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{t.detailedDiagnostic}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
