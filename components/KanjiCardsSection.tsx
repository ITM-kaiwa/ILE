'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { JlptLevel } from '@/lib/types';
import { Language, getTranslation } from '@/lib/i18n';
import { KANJI_CARDS, getKanjiByLevel, KanjiCard } from '@/data/kanji-cards';
import { ExternalLink, Volume2, Eye, Hand, Layers, RotateCw, ArrowLeft, ArrowRight , ChevronDown, ChevronUp } from 'lucide-react';

interface KanjiCardsSectionProps {
  vakType: VakType;
  lang?: Language;
}

export const KanjiCardsSection: React.FC<KanjiCardsSectionProps> = ({ vakType, lang = 'ja' }) => {
  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);

  const [level, setLevel] = useState<JlptLevel>('N5');
  const cards = getKanjiByLevel(level);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const currentCard: KanjiCard = cards[currentIndex] || cards[0];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex + 1 < cards.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(cards.length - 1);
    }
  };

  const handlePlayTTS = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('お使いのブラウザは音声読み上げに対応していません。');
    }
  };

  const isVi = lang === 'vi';

  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-amber-100 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-orange-600" />
            <h2 className="text-xl font-bold text-slate-800">
              {isVi ? 'Thẻ học chữ Hán Kanji JLPT N5 / N4' : 'JLPT N5 / N4 漢字フラッシュカード'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {isVi
              ? 'Học Onyomi, Kunyomi và ý nghĩa tiếng Việt bằng nhận thức VAK'
              : '音読み・訓読み・ベトナム語の意味をカード化し、VAK認知特性で覚えられます'}
          </p>
        </div>

        {/* Langoal Official Reference Link Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setLevel('N5');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              level === 'N5'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            {isVi ? 'Thẻ N5' : 'N5 漢字カード'}
          </button>
          <button
            onClick={() => {
              setLevel('N4');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              level === 'N4'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            {isVi ? 'Thẻ N4' : 'N4 漢字カード'}
          </button>

          <a
            href={level === 'N5' ? 'https://langoal.com/teaching-materials/kanji/n5-overview.html' : 'https://langoal.com/teaching-materials/kanji/n4-overview.html'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 border border-orange-300 text-xs font-bold transition flex items-center space-x-1.5 shrink-0 shadow-sm"
          >
            <span>{isVi ? `Danh sách Kanji ${level}` : `Langoal ${level} 漢字一覧`}</span>
            <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
          </a>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center space-x-1 border border-slate-300/50"
          >
            <span>{isExpanded ? t.collapseModule : t.viewModule}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

        </div>
      </div>
      {isExpanded && (
      <>
      {/* Main Flashcard Container */}
      {cards.length > 0 && currentCard ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{isVi ? `Thẻ Kanji ${currentIndex + 1} / ${cards.length} (${currentCard.level})` : `漢字カード ${currentIndex + 1} / ${cards.length} (${currentCard.level})`}</span>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono font-bold border border-amber-300">
                {isVi ? `Nét: ${currentCard.strokeCount}` : `画数: ${currentCard.strokeCount}画`}
              </span>
            </div>
          </div>

          {/* Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative min-h-[280px] p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FFF9F2] to-[#FAF3E0] border-2 border-amber-200/80 hover:border-orange-400 shadow-md cursor-pointer transition flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                {isFlipped
                  ? (isVi ? '🇻🇳 Ý nghĩa Tiếng Việt (Mặt sau)' : '🇻🇳 ベトナム語の意味 & 例文 (Mặt sau)')
                  : (isVi ? '🇯🇵 Tiếng Nhật & Cách đọc (Mặt trước)' : '🇯🇵 漢字・読み方 (Mặt trước)')}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayTTS(currentCard.kanji);
                }}
                className="p-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 transition flex items-center space-x-1"
              >
                <Volume2 className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-bold">{isVi ? 'Phát âm' : 'TTS発音'}</span>
              </button>
            </div>

            {/* Front & Back Content */}
            <div className="text-center py-6">
              {!isFlipped ? (
                <div>
                  <h3
                    className="text-6xl font-extrabold text-slate-900 tracking-wide mb-3 font-learning-card"
                    style={{ fontFamily: '"UD Digi Kyokasho NK-R", "UD デジタル 教科書体 NK-R", "Klee One", sans-serif' }}
                  >
                    {currentCard.kanji}
                  </h3>
                  <div className="flex justify-center items-center space-x-4 text-sm font-semibold">
                    <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-900 border border-indigo-200">
                      {isVi ? `Âm Onyomi: ${currentCard.onyomi}` : `音読み: ${currentCard.onyomi}`}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-200">
                      {isVi ? `Âm Kunyomi: ${currentCard.kunyomi}` : `訓読み: ${currentCard.kunyomi}`}
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-3xl font-extrabold text-emerald-800 tracking-wide mb-2">
                    {currentCard.meaningVn}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mb-3">
                    (Tiếng Anh: {currentCard.meaningEn})
                  </p>

                  <div className="inline-block text-left bg-[#FAF7F2] p-3 rounded-xl border border-amber-200 text-xs text-slate-800 space-y-1">
                    <span className="font-bold text-orange-700 block">{isVi ? '💡 Ví dụ:' : '💡 例文:'}</span>
                    {currentCard.examples.map((ex, idx) => (
                      <span key={idx} className="inline-block mr-3 bg-white px-2 py-0.5 rounded border border-amber-200 font-medium">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center space-x-1 font-semibold">
                <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition duration-500 text-orange-600" />
                <span>{isVi ? 'Nhấp để lật thẻ' : 'クリックしてカードをめくる'}</span>
              </span>
              <span className="font-bold text-slate-700">JLPT {currentCard.level} Kanji</span>
            </div>
          </div>

          {/* VAK Help Box */}
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-orange-950">
              {vakType === 'visual' && <Eye className="w-4 h-4 text-indigo-600" />}
              {vakType === 'auditory' && <Volume2 className="w-4 h-4 text-emerald-600" />}
              {vakType === 'kinesthetic' && <Hand className="w-4 h-4 text-orange-600" />}
              <span>
                {isVi
                  ? `Hướng dẫn ghi nhớ Kanji (${vakType.toUpperCase()})`
                  : `${vakType.toUpperCase()}タイプ向け 漢字記憶ガイド`}
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {currentCard.vakHelp[vakType]}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-xl bg-amber-100/80 hover:bg-amber-200 text-slate-800 font-bold text-sm transition flex items-center space-x-1.5 border border-amber-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isVi ? 'Thẻ trước' : '前の漢字'}</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-4 py-2.5 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-950 text-sm font-bold border border-orange-300 transition"
            >
              {isVi ? 'Lật thẻ 🔄' : 'カードをめくる 🔄'}
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition flex items-center space-x-1.5 shadow-sm"
            >
              <span>{isVi ? 'Thẻ tiếp theo' : '次の漢字'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : null}
      </>
      )}
    </div>
  );
};
