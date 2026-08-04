'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { processReview } from '@/lib/srs';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';
import { Volume2, Eye, Hand, RotateCw, ArrowLeft, ArrowRight, Sparkles , ChevronDown, ChevronUp , ChevronLeft, ChevronRight , Play, Pause } from 'lucide-react';

export type KanaType = 'hiragana' | 'katakana';
export interface KanaCard {
  id: string;
  type: KanaType;
  kana: string;
  romaji: string;
  group: string;
  mnemonicVn: string;
  vakHelp: { visual: string; auditory: string; kinesthetic: string; };
}

interface KanaCardsSectionProps {
  vakType: VakType;
  lang?: Language;
}

export const KanaCardsSection: React.FC<KanaCardsSectionProps> = ({ vakType, lang = 'ja' }) => {
  const { addLog } = useLog();

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);

  const [kanaType, setKanaType] = useState<KanaType>('hiragana');
  const [dbData, setDbData] = useState<KanaCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  useEffect(() => {
    if (isExpanded && dbData.length === 0 && !isLoading) {
      const fetchData = async () => {
        setIsLoading(true); addLog('Fetching Kana cards from database...', 'INFO'); addLog('Fetching Kana cards from database...', 'INFO');
        const { data, error } = await supabase.from('kana_cards').select('*');
        if (data && !error) {
          const mapped: KanaCard[] = data.map(item => ({
            id: item.id,
            type: item.type as KanaType,
            kana: item.character || '',
            romaji: item.romaji || '',
            group: item.group_name || '',
            mnemonicVn: item.mnemonic_vi || '',
            vakHelp: item.vak_help || { visual: '', auditory: '', kinesthetic: '' }
          }));
          setDbData(mapped); addLog(`Successfully loaded ${mapped.length} Kana cards.`, 'SUCCESS'); addLog(`Successfully loaded ${mapped.length} Kana cards.`, 'SUCCESS');
        }
        setIsLoading(false);
      };
      fetchData();
    }
  }, [isExpanded, dbData.length, isLoading]);

  const cards = dbData.filter(c => c.type === kanaType);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setTimeout(() => {
      if (!isFlipped) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
        setCurrentIndex((prevIdx) => (prevIdx + 1 < dbData.length ? prevIdx + 1 : 0));
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isAutoPlay, isFlipped, dbData.length]);

  const currentCard: KanaCard = cards[currentIndex] || cards[0];
  
  useEffect(() => {
    const handleOpenCard = (e: any) => {
      if (e.detail.type === 'kana') {
        const targetId = e.detail.id;
        const targetCard = dbData.find(c => c.id === targetId);
        if (targetCard) {
          setIsExpanded(true);
          setKanaType(targetCard.type);
          const newCards = dbData.filter(c => c.type === targetCard.type);
          const index = newCards.findIndex(c => c.id === targetId);
          if (index !== -1) {
            setCurrentIndex(index);
          }
        }
      }
    };
    window.addEventListener('openCard', handleOpenCard);
    return () => window.removeEventListener('openCard', handleOpenCard);
  }, [dbData]);

  const isVi = lang === 'vi';

  const handleReview = async (isCorrect: boolean) => {
    if (user && currentCard) {
      processReview(user.id, 'kana', currentCard.id, isCorrect).catch(console.error);
    }
    handleNext();
  };

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
    <div id="kana-section" className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
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
            あいうえお (Hiragana)
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
            アイウエオ (Katakana)
          </button>
          <button
            onClick={() => { setIsExpanded(!isExpanded); addLog(`Toggle KanaCardsSection expanded: ${!isExpanded}`, 'INFO'); }}
            className="px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 shadow-sm"
          >
            <span>{isExpanded ? (isVi ? 'Đóng' : '閉') : (isVi ? 'Mở' : '開')}</span>
          </button>

        </div>
      </div>
      {isExpanded && (
      <>
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
          <span className="ml-3 text-sm font-bold text-orange-600">Loading Kana from DB...</span>
        </div>
      )}
      {/* Main Card UI */}
      {!isLoading && cards.length > 0 && currentCard ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>{isVi ? `Thẻ Kana ${currentIndex + 1} / ${cards.length} (${currentCard.group})` : `仮名カード ${currentIndex + 1} / ${cards.length} (${currentCard.group})`}</span>
            <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
              {kanaType === 'hiragana' ? 'Hiragana (ひらがな)' : 'Katakana (カタカナ)'}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button onClick={handlePrev} className="shrink-0 p-2 sm:p-3 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-900 shadow-sm transition">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex-1">
              {/* Flip Container with UD Digi Kyokasho / Klee One Font */}
              <div
                onClick={() => { setIsFlipped(!isFlipped); addLog('Flipped Kana card.', 'INFO'); }}
                className="relative min-h-[280px] p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FFF9F2] to-[#FAF3E0] border-2 border-amber-200/80 hover:border-orange-400 shadow-md cursor-pointer transition flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsAutoPlay(!isAutoPlay); }}
                      className={`px-2 py-1 text-[10px] sm:text-xs font-bold rounded-lg border flex items-center gap-1 transition ${
                        isAutoPlay ? 'bg-orange-600 text-white border-orange-600' : 'bg-orange-100 text-orange-800 border-orange-300 hover:bg-orange-200'
                      }`}
                    >
                      {isAutoPlay ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
                      自動再生
                    </button>
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                    {isFlipped
                      ? (isVi ? 'Mẹo ghi nhớ (Mặt sau)' : '覚え方 (Ghi nhớ)')
                      : (isVi ? 'Chữ Kana (Mặt trước)' : 'かな文字 (Mặt trước)')}
                  </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayTTS(currentCard.kana);
                    }}
                    className="p-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 transition flex items-center space-x-1"
                  >
                    <Volume2 className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-bold hidden sm:inline">{isVi ? 'Phát âm' : 'TTS発音'}</span>
                  </button>
                </div>

                {/* Main Kana character rendering */}
                <div className="text-center py-6">
                  {!isFlipped ? (
                    <div>
                      <h3
                        className="text-6xl sm:text-7xl font-extrabold text-slate-900 tracking-wide mb-3 font-learning-card"
                        style={{ fontFamily: '"UD Digi Kyokasho NK-R", "UD デジタル 教科書体 NK-R", "Klee One", sans-serif' }}
                      >
                        {currentCard.kana}
                      </h3>
                      <p className="text-xl sm:text-2xl font-bold text-indigo-700 mt-4">[{currentCard.romaji}]</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-500 block">Mẹo ghi nhớ bằng hình ảnh:</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 leading-snug">
                        {currentCard.mnemonicVn}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600">Romaji: /{currentCard.romaji}/</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center space-x-1 font-semibold">
                      <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition duration-500 text-orange-600" />
                      <span>{isVi ? 'Nhấp để lật' : 'クリックしてめくる'}</span>
                    </span>
                    <span className="font-bold text-slate-700 hidden sm:block">{currentCard.group}</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-amber-200/60">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleReview(false); }}
                      className="flex-1 px-2 py-2 sm:px-4 sm:py-3 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-[10px] sm:text-sm transition flex items-center justify-center shadow-sm"
                    >
                      <span>{isVi ? '❌ Chưa' : '❌ 覚えてない'}</span>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
                      className="flex-none px-3 py-2 sm:px-6 sm:py-3 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-950 font-bold text-[10px] sm:text-sm border border-orange-300 transition shadow-sm"
                    >
                      {isVi ? '🔄 Lật thẻ' : '🔄 めくる'}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleReview(true); }}
                      className="flex-1 px-2 py-2 sm:px-4 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] sm:text-sm transition flex items-center justify-center shadow-sm"
                    >
                      <span>{isVi ? '✅ Xong' : '✅ 覚えた'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={handleNext} className="shrink-0 p-2 sm:p-3 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-900 shadow-sm transition">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* VAK Guidance Box */}
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-2 mt-4">
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
        </div>
      ) : null}
      </>
      )}
    </div>
  );
};
