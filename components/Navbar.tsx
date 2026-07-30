'use client';

import React from 'react';
import { VakType } from '@/data/vak-questions';
import { Sparkles, Brain, BookOpen, ExternalLink, Calendar, RefreshCw } from 'lucide-react';

interface NavbarProps {
  currentVak: VakType;
  isHybrid?: boolean;
  hybridLabel?: string;
  onOpenDiagnostic: (mode: 'quick' | 'detailed') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentVak,
  isHybrid,
  hybridLabel,
  onOpenDiagnostic,
}) => {
  const getVakBadge = () => {
    if (isHybrid && hybridLabel) {
      return (
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 text-white shadow-md">
          {hybridLabel}
        </span>
      );
    }
    switch (currentVak) {
      case 'visual':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white shadow-sm">👁️ 視覚優位 (Visual)</span>;
      case 'auditory':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-600 text-white shadow-sm">👂 聴覚優位 (Auditory)</span>;
      case 'kinesthetic':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-600 text-white shadow-sm font-sans">✋ 身体感覚優位 (Kinesthetic)</span>;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white leading-none tracking-tight">
              ILE <span className="text-indigo-400 font-normal">VAK Coach</span>
            </h1>
            <p className="text-xs text-slate-400">ITM Language Empowerment</p>
          </div>
        </div>

        {/* Status Badge & Diagnostic triggers */}
        <div className="flex items-center space-x-3">
          {getVakBadge()}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => onOpenDiagnostic('quick')}
              className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
            >
              ⚡ 簡易診断 (5問)
            </button>
            <button
              onClick={() => onOpenDiagnostic('detailed')}
              className="px-3 py-1.5 text-xs font-medium text-indigo-300 bg-indigo-950/80 hover:bg-indigo-900/80 rounded-lg border border-indigo-700/50 transition flex items-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>詳細診断 (20問)</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
