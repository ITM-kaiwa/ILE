'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { GrammarCard, JlptLevel } from '@/lib/types';
import { Language } from '@/lib/i18n';
import { getGrammarCardsByLevel } from '@/data/grammar-cards';
import { BookOpen, ExternalLink, Eye, Volume2, Hand , ChevronDown, ChevronUp } from 'lucide-react';

interface GrammarCardsSectionProps {
  vakType: VakType;
  lang?: Language;
}

export const GrammarCardsSection: React.FC<GrammarCardsSectionProps> = ({ vakType, lang = 'ja' }) => {
  const [level, setLevel] = useState<JlptLevel>('N5');
  const cards = getGrammarCardsByLevel(level);
  const [selectedCardId, setSelectedCardId] = useState<string>(cards[0]?.id || 'card_n5_1');

  const activeCard = cards.find((c) => c.id === selectedCardId) || cards[0];
  const isVi = lang === 'vi';

  const handlePlayTTS = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*#|>_]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('お使いのブラウザは音声合成に対応していません。');
    }
  };

  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-amber-100 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-800">
              {isVi ? 'Thẻ Ngữ pháp VNJPClub N5/N4 tích hợp VAK' : 'VNJPClub 連携 N5/N4 文法解説VAKカード'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {isVi
              ? 'Giải thích cấu trúc ngữ pháp VNJPClub qua thẻ học Thị giác - Thính giác - Vận động'
              : 'VNJPClubの文法項目を学習特性(視覚・聴覚・身体感覚)カードで解説します'}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setLevel('N5');
              setSelectedCardId('card_n5_1');
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
              level === 'N5'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            {isVi ? 'Ngữ pháp N5' : 'N5 文法カード'}
          </button>
          <button
            onClick={() => {
              setLevel('N4');
              setSelectedCardId('card_n4_1');
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
              level === 'N4'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            {isVi ? 'Ngữ pháp N4' : 'N4 文法カード'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            📑 {isVi ? `Danh sách mẫu ngữ pháp ${level}` : `${level} 文法項目リスト`}
          </h4>
          {cards.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCardId(c.id)}
              className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between ${
                activeCard.id === c.id
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold'
                  : 'bg-[#FFFDF9] border-amber-200 text-slate-700 hover:bg-amber-50'
              }`}
            >
              <div>
                <span className="text-xs text-emerald-700 block font-mono font-bold">{c.structure}</span>
                <span className="text-xs text-slate-800">{c.title}</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-medium">
                {c.categoryName}
              </span>
            </button>
          ))}
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="p-5 rounded-xl bg-[#FFFDF9] border border-amber-200 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                {activeCard.level}: {activeCard.structure}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
                {activeCard.categoryName}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-800">{activeCard.title}</h3>

            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
              <span className="font-bold text-emerald-900 block mb-1">🇻🇳 Ý nghĩa tiếng Việt:</span>
              <p className="text-emerald-800 font-bold">{activeCard.meaning}</p>
              <p className="text-slate-600 mt-1">{activeCard.vietnameseExplanation}</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#FFFDF9] border border-amber-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-amber-100">
              <div className="flex items-center space-x-2">
                {vakType === 'visual' && <Eye className="w-5 h-5 text-indigo-600" />}
                {vakType === 'auditory' && <Volume2 className="w-5 h-5 text-emerald-600" />}
                {vakType === 'kinesthetic' && <Hand className="w-5 h-5 text-orange-600" />}
                <h4 className="text-sm font-bold text-slate-800 uppercase">
                  {isVi
                    ? `Thẻ giải thích ${vakType === 'visual' ? 'Thị giác' : vakType === 'auditory' ? 'Thính giác' : 'Vận động'}`
                    : `${vakType === 'visual' ? '視覚 (Visual)' : vakType === 'auditory' ? '聴覚 (Auditory)' : '身体感覚 (Kinesthetic)'} 解説カード`}
                </h4>
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-xs text-slate-700 whitespace-pre-line leading-relaxed bg-[#FAF7F2] p-4 rounded-lg border border-amber-200">
              {activeCard.vakContent[vakType]}
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
};
