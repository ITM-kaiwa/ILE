'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';
import { KanaCard, KanaType, HIRAGANA_CARDS, KATAKANA_CARDS } from '@/data/kana-cards';
import { Volume2, Eye, Hand, RotateCw, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface KanaCardsSectionProps {
  vakType: VakType;
  lang?: Language;
}

export const KanaCardsSection: React.FC<KanaCardsSectionProps> = ({ vakType, lang = 'ja' }) => {
  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);

  const [kanaType, setKanaType] = useState<KanaType>('hiragana');
  const cards = kanaType === 'hiragana' ? HIRAGANA_CARDS : KATAKANA_CARDS;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const currentCard: KanaCard = cards[currentIndex] || cards[0];
  const isVi = lang === 'vi';

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

  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-amber-100 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <h2 className="text-xl font-bold text-slate-800">
              {isVi ? 'Thẻ học 50 âm Hiragana & Katakana căn bản' : 'ひらがな・カタカナ基礎フラッシュカード'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {isVi
              ? 'Học chuẩn phông chữ Kyokasho và quy tắc ghi nhớ VAK cho 50 âm bảng chữ cái'
              : 'UD Digi Kyokasho体フォントで正しい書き順とVAK認知記憶ガイドで50音をマスター'}
          </p>
        </div>

        {/* Kana Selector Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setKanaType('hiragana');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
              kanaType === 'hiragana'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            あ あいうえお (Hiragana)
          </button>
          <button
            onClick={() => {
              setKanaType('katakana');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
              kanaType === 'katakana'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            ア アイウエオ (Katakana)
          </button>
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
      {/* Main Card UI */}
      {cards.length > 0 && currentCard ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>{isVi ? `Thẻ Kana ${currentIndex + 1} / ${cards.length} (${currentCard.group})` : `仮名カード ${currentIndex + 1} / ${cards.length} (${currentCard.group})`}</span>
            <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
              {kanaType === 'hiragana' ? 'Hiragana (ひらがな)' : 'Katakana (カタカナ)'}
            </span>
          </div>

          {/* Flip Container with UD Digi Kyokasho / Klee One Font */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative min-h-[280px] p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FFF9F2] to-[#FAF3E0] border-2 border-amber-200/80 hover:border-orange-400 shadow-md cursor-pointer transition flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                {isFlipped
                  ? (isVi ? '🇻🇳 Mẹo ghi nhớ bằng hình ảnh (Mặt sau)' : '🇻🇳 ベトナム語の覚え方 (Ghi nhớ)')
                  : (isVi ? '🇯🇵 Chữ Kana (Mặt trước)' : '🇯🇵 かな文字 (Mặt trước)')}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayTTS(currentCard.kana);
                }}
                className="p-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 transition flex items-center space-x-1"
              >
                <Volume2 className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-bold">{isVi ? 'Phát âm' : 'TTS発音'}</span>
              </button>
            </div>

            {/* Main Kana character rendering */}
            <div className="text-center py-6">
              {!isFlipped ? (
                <div>
                  <h3
                    className="text-7xl font-extrabold text-slate-900 tracking-wide mb-3 font-learning-card"
                    style={{ fontFamily: '"UD Digi Kyokasho NK-R", "UD デジタル 教科書体 NK-R", "Klee One", sans-serif' }}
                  >
                    {currentCard.kana}
                  </h3>
                  <p className="text-xl font-bold text-indigo-700">[{currentCard.romaji}]</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-500 block">🇻🇳 Mẹo ghi nhớ bằng hình ảnh:</span>
                  <h3 className="text-2xl font-bold text-emerald-800 leading-snug">
                    {currentCard.mnemonicVn}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">Romaji: /{currentCard.romaji}/</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center space-x-1 font-semibold">
                <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition duration-500 text-orange-600" />
                <span>{isVi ? 'Nhấp để lật thẻ' : 'クリックしてカードをめくる'}</span>
              </span>
              <span className="font-bold text-slate-700">{currentCard.group}</span>
            </div>
          </div>

          {/* VAK Guidance Box */}
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-orange-950">
              {vakType === 'visual' && <Eye className="w-4 h-4 text-indigo-600" />}
              {vakType === 'auditory' && <Volume2 className="w-4 h-4 text-emerald-600" />}
              {vakType === 'kinesthetic' && <Hand className="w-4 h-4 text-orange-600" />}
              <span>
                {isVi
                  ? `Hướng dẫn ghi nhớ Kana (${vakType.toUpperCase()})`
                  : `${vakType.toUpperCase()}タイプ向け 仮名記憶ガイド`}
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
              <span>{isVi ? 'Thẻ trước' : '前のかな'}</span>
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
              <span>{isVi ? 'Thẻ tiếp theo' : '次のかな'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
