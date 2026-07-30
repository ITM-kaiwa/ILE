'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { GrammarCard, JlptLevel } from '@/lib/types';
import { ALL_GRAMMAR_CARDS, getGrammarCardsByLevel } from '@/data/grammar-cards';
import { BookOpen, ExternalLink, Eye, Volume2, Hand, Sparkles, Filter } from 'lucide-react';

interface GrammarCardsSectionProps {
  vakType: VakType;
}

export const GrammarCardsSection: React.FC<GrammarCardsSectionProps> = ({ vakType }) => {
  const [level, setLevel] = useState<JlptLevel>('N5');
  const cards = getGrammarCardsByLevel(level);
  const [selectedCardId, setSelectedCardId] = useState<string>(cards[0]?.id || 'card_n5_1');

  const activeCard = cards.find((c) => c.id === selectedCardId) || cards[0];

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
    <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">VNJPClub 連携 N5/N4 文法解説VAKカード</h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            VNJPClubの文法項目を学習特性(視覚・聴覚・身体感覚)カードで解説します
          </p>
        </div>

        {/* Level Selector */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setLevel('N5');
              setSelectedCardId('card_n5_1');
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
              level === 'N5'
                ? 'bg-indigo-600 text-white shadow'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            N5 文法カード (VNJPClub)
          </button>
          <button
            onClick={() => {
              setLevel('N4');
              setSelectedCardId('card_n4_1');
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
              level === 'N4'
                ? 'bg-purple-600 text-white shadow'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            N4 文法カード (VNJPClub)
          </button>
        </div>
      </div>

      {/* Grid: Grammar item selector list on left, VAK card on right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left List */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            📑 {level} 文法項目リスト
          </h4>
          {cards.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCardId(c.id)}
              className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between ${
                activeCard.id === c.id
                  ? 'bg-indigo-950 border-indigo-500 text-white font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div>
                <span className="text-xs text-indigo-400 block font-mono">{c.structure}</span>
                <span className="text-xs">{c.title}</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                {c.categoryName}
              </span>
            </button>
          ))}

          {/* Link to VNJPClub Official Page */}
          <a
            href={level === 'N5' ? 'https://www.vnjpclub.com/ngu-phap-n5/' : 'https://www.vnjpclub.com/ngu-phap-n4/'}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition flex items-center justify-between text-xs text-indigo-300 group"
          >
            <span>VNJPClub {level} 文法公式ページで学ぶ</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
          </a>
        </div>

        {/* Right Active Card Display */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-indigo-400 uppercase">
                {activeCard.level}文法: {activeCard.structure}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800">
                {activeCard.categoryName}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white">{activeCard.title}</h3>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
              <span className="font-bold text-indigo-300 block mb-1">🇻🇳 Ý nghĩa tiếng Việt:</span>
              <p className="text-emerald-400 font-medium">{activeCard.meaning}</p>
              <p className="text-slate-400 mt-1">{activeCard.vietnameseExplanation}</p>
            </div>
          </div>

          {/* VAK Content Box */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                {vakType === 'visual' && <Eye className="w-5 h-5 text-blue-400" />}
                {vakType === 'auditory' && <Volume2 className="w-5 h-5 text-emerald-400" />}
                {vakType === 'kinesthetic' && <Hand className="w-5 h-5 text-amber-400" />}
                <h4 className="text-sm font-bold text-white uppercase">
                  {vakType === 'visual' ? '視覚 (Visual)' : vakType === 'auditory' ? '聴覚 (Auditory)' : '身体感覚 (Kinesthetic)'} 解説カード
                </h4>
              </div>

              {vakType === 'auditory' && (
                <button
                  onClick={() => handlePlayTTS(activeCard.vakContent.auditory)}
                  className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition flex items-center space-x-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>音声朗読</span>
                </button>
              )}
            </div>

            {/* Markdown Display */}
            <div className="prose prose-invert max-w-none text-xs text-slate-200 whitespace-pre-line leading-relaxed bg-slate-950 p-4 rounded-lg border border-slate-850">
              {activeCard.vakContent[vakType]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
