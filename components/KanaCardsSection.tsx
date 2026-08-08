'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { processReview } from '@/lib/srs';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';
import { Sparkles, Eye, Volume2, Hand, XCircle, ChevronDown, ChevronUp, Download, ArrowLeft, ArrowRight, RotateCw, Play, Pause, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';
import { StrokeAnimation } from '@/components/StrokeAnimation';

const ROMAJI_ORDER = [
  'a', 'i', 'u', 'e', 'o',
  'ka', 'ki', 'ku', 'ke', 'ko',
  'ga', 'gi', 'gu', 'ge', 'go',
  'sa', 'shi', 'su', 'se', 'so',
  'za', 'ji', 'zu', 'ze', 'zo',
  'ta', 'chi', 'tsu', 'te', 'to',
  'da', 'di', 'du', 'de', 'do',
  'na', 'ni', 'nu', 'ne', 'no',
  'ha', 'hi', 'fu', 'he', 'ho',
  'ba', 'bi', 'bu', 'be', 'bo',
  'pa', 'pi', 'pu', 'pe', 'po',
  'ma', 'mi', 'mu', 'me', 'mo',
  'ya', 'yu', 'yo',
  'ra', 'ri', 'ru', 're', 'ro',
  'wa', 'wo', 'o', 'n',
  'kya', 'kyu', 'kyo',
  'gya', 'gyu', 'gyo',
  'sha', 'shu', 'sho',
  'ja', 'ju', 'jo',
  'cha', 'chu', 'cho',
  'nya', 'nyu', 'nyo',
  'hya', 'hyu', 'hyo',
  'bya', 'byu', 'byo',
  'pya', 'pyu', 'pyo',
  'mya', 'myu', 'myo',
  'rya', 'ryu', 'ryo'
];

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
  const [shuffleSeed, setShuffleSeed] = useState(0);
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

          mapped.sort((a, b) => {
            let idxA = ROMAJI_ORDER.indexOf(a.romaji);
            let idxB = ROMAJI_ORDER.indexOf(b.romaji);
            if (idxA === -1) idxA = 999;
            if (idxB === -1) idxB = 999;
            
            if (idxA !== idxB) {
              return idxA - idxB;
            }
            return a.kana.localeCompare(b.kana);
          });
            
          setDbData(mapped); addLog(`Successfully loaded ${mapped.length} Kana cards.`, 'SUCCESS'); addLog(`Successfully loaded ${mapped.length} Kana cards.`, 'SUCCESS');
        }
        setIsLoading(false);
      };
      fetchData();
    }
  }, [isExpanded, dbData.length, isLoading]);

  const cards = React.useMemo(() => {
    let result = dbData.filter(c => c.type === kanaType);
    if (shuffleSeed > 0) {
      result = [...result].sort(() => Math.random() - 0.5);
    }
    return result;
  }, [dbData, kanaType, shuffleSeed]);

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
    }, 3000);
    return () => clearTimeout(timer);
  }, [isAutoPlay, isFlipped, dbData.length]);

  const currentCard: KanaCard = cards[currentIndex] || cards[0];
  
  const [pendingCardIdToJump, setPendingCardIdToJump] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenCard = (e: any) => {
      if (e.detail?.type === 'kana') {
        const card = dbData.find((c: any) => c.id.toLowerCase() === e.detail.id.toLowerCase());
        if (card) {
          setIsExpanded(true);
          if(card.type) setKanaType(card.type);
          setPendingCardIdToJump(card.id);
        }
      }
    };
    window.addEventListener('openCard', handleOpenCard);
    return () => window.removeEventListener('openCard', handleOpenCard);
  }, [dbData]);

  useEffect(() => {
    if (pendingCardIdToJump && cards.length > 0) {
      const idx = cards.findIndex(c => c.id === pendingCardIdToJump);
      if (idx !== -1) {
        setCurrentIndex(idx);
        setIsFlipped(false);
        setPendingCardIdToJump(null);
      }
    }
  }, [cards, pendingCardIdToJump]);

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

  const handlePlayAudio = (card: any) => {
    const url = card.audio_url || card.vakHelp?.audio_url;
    if (url) {
      const audio = new Audio(url);
      audio.play().catch(e => console.error("Audio play failed:", e));
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(card.kana);
      utterance.lang = 'ja-JP';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('お使いのブラウザは音声読み上げに対応していません。');
    }
  };

  return (
    <div id="kana-section" className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 gap-3">
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
              setShuffleSeed(0);
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
              setShuffleSeed(0);
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
            className={`px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 ${!isExpanded ? 'shadow-md shadow-stone-400/50 animate-pulse' : 'shadow-sm'}`}
          >
            <span>{isExpanded ? (isVi ? 'Đóng' : '閉') : (isVi ? 'Mở' : '開')}</span>
          </button>

        </div>
      </div>
      <div className="flex items-center space-x-3 pb-4 border-b border-amber-100 mb-2">
        <a
          href="https://drive.google.com/file/d/1TOjxvyL6RxNxN6zYsAhj338FLCD6v0-1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200 rounded-lg text-xs font-bold transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>ひらがなノート</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1O32toVYlvl9Mlf_Q4tbfhLegTR5eShE4/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 rounded-lg text-xs font-bold transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>カタカナノート</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1FqMJMkcz7ixNtZuPpxZBUomfoiENbg1x/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 rounded-lg text-xs font-bold transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>50音表</span>
        </a>
        <button
          onClick={() => {
            setShuffleSeed(Date.now());
            setCurrentIndex(0);
            setIsFlipped(false);
            addLog('Shuffled Kana cards', 'INFO');
          }}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border shadow-sm ${
            shuffleSeed > 0 
              ? 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700' 
              : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
          }`}
        >
          <Shuffle className="w-3.5 h-3.5" />
          <span>{isVi ? 'Trộn thẻ (Shuffle)' : 'シャッフル'}</span>
        </button>
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
                      handlePlayAudio(currentCard);
                    }}
                    className="p-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 transition flex items-center space-x-1"
                  >
                    <Volume2 className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-bold hidden sm:inline">{isVi ? 'Phát âm' : '発音'}</span>
                  </button>
                </div>

                {/* Main Kana character rendering */}
                <div className="text-center py-6">
                  {!isFlipped ? (
                    <div className="flex justify-center items-center gap-6 sm:gap-12">
                      <div className="flex flex-col items-center">
                        <h3
                          className="text-6xl sm:text-7xl font-extrabold text-slate-900 tracking-wide mb-3 font-learning-card"
                          style={{ fontFamily: '"UD Digi Kyokasho NK-R", "UD デジタル 教科書体 NK-R", "Klee One", sans-serif' }}
                        >
                          {currentCard.kana}
                        </h3>
                        <p className="text-xl sm:text-2xl font-bold text-indigo-700 mt-4">[{currentCard.romaji}]</p>
                      </div>
                      {currentCard.kana.length === 1 && (
                        <div className="flex-shrink-0">
                          <StrokeAnimation key={currentCard.id} charCode={currentCard.kana} />
                        </div>
                      )}
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






