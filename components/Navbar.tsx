'use client';

import React from 'react';
import { VakType } from '@/data/vak-questions';
import { Sparkles, Brain } from 'lucide-react';

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
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-emerald-500 to-amber-500 text-white shadow-sm">
          {hybridLabel}
        </span>
      );
    }
    switch (currentVak) {
      case 'visual':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600 text-white shadow-sm">👁️ 視覚優位 (Visual)</span>;
      case 'auditory':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-600 text-white shadow-sm">👂 聴覚優位 (Auditory)</span>;
      case 'kinesthetic':
        return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-600 text-white shadow-sm font-sans">✋ 身体感覚優位 (Kinesthetic)</span>;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-200/60 bg-[#FFFDF9]/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-800 leading-none tracking-tight">
              ILE <span className="text-orange-600 font-normal">VAK Coach</span>
            </h1>
            <p className="text-xs text-slate-500">ITM Language Empowerment</p>
          </div>
        </div>

        {/* Status Badge & Diagnostic triggers */}
        <div className="flex items-center space-x-3">
          {getVakBadge()}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => onOpenDiagnostic('quick')}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-amber-100/70 hover:bg-amber-200/70 rounded-lg border border-amber-200 transition"
            >
              ⚡ 簡易診断 (5問)
            </button>
            <button
              onClick={() => onOpenDiagnostic('detailed')}
              className="px-3 py-1.5 text-xs font-medium text-orange-700 bg-orange-100/80 hover:bg-orange-200/80 rounded-lg border border-orange-300 transition flex items-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>詳細診断 (20問)</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
