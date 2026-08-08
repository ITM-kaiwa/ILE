'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { processReview } from '@/lib/srs';
import { VakType } from '@/data/vak-questions';
import { JlptLevel } from '@/lib/types';
import { Language, getTranslation } from '@/lib/i18n';

export interface KanjiCard {
  id: string;
  level: JlptLevel;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaningVn: string;
  meaningEn: string;
  strokeCount: number;
  examples: string[];
  langoalUrl: string;
  nihongokyoshiUrl: string;
  vakHelp: { visual: string; auditory: string; kinesthetic: string; };
}
import { Download, ExternalLink, Volume2, Eye, Hand, Layers, RotateCw, ArrowLeft, ArrowRight , ChevronDown, ChevronUp, ChevronLeft, ChevronRight , Play, Pause, Shuffle } from 'lucide-react';
import { StrokeAnimation } from '@/components/StrokeAnimation';

const LANGOAL_N5_ORDER = ["一","二","三","四","五","六","七","八","九","十","百","千","円","月","火","水","木","金","土","日","年","人","子","男","女","父","母","口","目","耳","手","足","体","力","上","下","左","右","大","小","中","外","学","校","先","生","本","名","友","山","川","田","石","雨","夕","岩","音","林","森","花","竹","犬","貝","牛","魚","鳥","米","肉","茶","好","物","今","何","分","半","方","時","間","町","寺","東","西","南","北","車","電","高","安","多","少","新","古","明","暗","長","元","気","見","立","入","出","休","行","来","言","帰","書","読","話","聞","食","飲","買"];
const LANGOAL_N4_ORDER = ["朝","昼","晩","夜","前","後","正","午","毎","週","去","家","族","兄","弟","姉","妹","夫","妻","主","奥","私","王","様","才","赤","青","白","黒","色","銀","黄","緑","丸","玉","春","夏","秋","冬","空","天","風","台","雲","雪","晴","星","光","地","谷","自","然","草","原","海","湖","池","里","野","虫","羽","馬","鳴","毛","糸","衣","服","洋","料","理","飯","麦","油","酒","味","住","所","都","道","府","県","京","市","区","村","番","号","国","紙","店","客","売","品","薬","待","合","計","辺","交","通","荷","送","宅","止","急","特","鉄","船","部","屋","教","室","会","社","駅","工","場","病","院","公","園","図","館","映","画","勉","強","宿","題","質","問","試","験","答","考","字","文","漢","数","英","語","化","育","研","究","医","科","政","治","経","済","歴","史","運","動","泳","旅","世","界","練","習","写","真","楽","声","歌","集","作","使","思","持","当","知","働","始","終","乗","降","開","閉","発","着","走","歩","近","遠","重","軽","早","速","遅","広","細","太","暑","寒","低","短","弱","若","静","有","心","同","便","利","親","切","不"];

interface KanjiCardsSectionProps {
  vakType: VakType;
  lang?: Language;
}

export const KanjiCardsSection: React.FC<KanjiCardsSectionProps> = ({ vakType, lang = 'ja' }) => {
  const { addLog } = useLog();

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasBeenExpanded, setHasBeenExpanded] = useState(false);

  const [level, setLevel] = useState<JlptLevel>('N5');
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [dbData, setDbData] = useState<KanjiCard[]>([]);
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
        setIsLoading(true); addLog('Fetching Kanji cards from database...', 'INFO'); addLog('Fetching Kanji cards from database...', 'INFO');
        const { data, error } = await supabase.from('kanji_cards').select('*').like('langoal_url', '%langoal.com%');
        if (data && !error) {
          const mapped: KanjiCard[] = data.map(item => ({
            id: item.id,
            level: item.jlpt_level as JlptLevel,
            kanji: item.kanji || '',
            onyomi: item.onyomi || '',
            kunyomi: item.kunyomi || '',
            meaningVn: item.meaning_vi || '',
            meaningEn: item.meaning_en || '',
            strokeCount: item.stroke_count || 0,
            examples: item.examples || [],
            langoalUrl: item.langoal_url || '',
            nihongokyoshiUrl: item.nihongokyoshi_url || '',
            vakHelp: item.vak_help || { visual: '', auditory: '', kinesthetic: '' }
          }));
          // Remove duplicates based on the kanji character
          const uniqueMapped = Array.from(new Map(mapped.map(c => [c.kanji, c])).values());
          setDbData(uniqueMapped);
        }
        setIsLoading(false);
      };
      fetchData();
    }
  }, [isExpanded, dbData.length, isLoading]);

  const cards = React.useMemo(() => {
    const filtered = dbData.filter(c => c.level === level);
    if (shuffleSeed > 0) {
      return [...filtered].sort(() => Math.random() - 0.5);
    }
    const orderArray = level === 'N5' ? LANGOAL_N5_ORDER : LANGOAL_N4_ORDER;
    return filtered.sort((a, b) => {
      const indexA = orderArray.indexOf(a.kanji);
      const indexB = orderArray.indexOf(b.kanji);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.kanji.localeCompare(b.kanji, 'ja');
    });
  }, [dbData, level, shuffleSeed]);
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

  const currentCard: KanjiCard = cards[currentIndex] || cards[0];

  const handleReview = async (isCorrect: boolean) => {
    if (user && currentCard) {
      processReview(user.id, 'kanji', currentCard.id, isCorrect).catch(console.error);
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

  
  const [pendingCardIdToJump, setPendingCardIdToJump] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenCard = (e: any) => {
      if (e.detail?.type === 'kanji') {
        const card = dbData.find((c: any) => c.id === e.detail.id);
        if (card) {
          setIsExpanded(true);
          if(card.level) setLevel(card.level);
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

  return (
    <div id="kanji-section" className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
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
        <div className="flex flex-col items-end gap-2 mt-2 sm:mt-0">
          {/* Row 1: Internal Controls */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              onClick={() => {
                setLevel('N5');
                setCurrentIndex(0);
                setIsFlipped(false);
                setShuffleSeed(0);
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
                setShuffleSeed(0);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                level === 'N4'
                  ? 'bg-purple-500 text-white shadow-sm'
                  : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
              }`}
            >
              {isVi ? 'Thẻ N4' : 'N4 漢字カード'}
            </button>
            <button
              onClick={() => {
                setShuffleSeed(Date.now());
                setCurrentIndex(0);
                setIsFlipped(false);
                addLog('Shuffled Kanji cards', 'INFO');
              }}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border shadow-sm ${
                shuffleSeed > 0 
                  ? 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700' 
                  : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isVi ? 'Trộn (Shuffle)' : 'シャッフル'}</span>
            </button>
            <button
              onClick={() => { setIsExpanded(!isExpanded); setHasBeenExpanded(true); addLog(`Toggle KanjiCardsSection expanded: ${!isExpanded}`, 'INFO'); }}
              className={`px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 ${!isExpanded && !hasBeenExpanded ? 'animate-attention-blink' : 'shadow-sm'}`}
            >
              <span>{isExpanded ? (isVi ? 'Đóng' : '閉') : (isVi ? 'Mở' : '開')}</span>
            </button>
          </div>

          {/* Row 2: External Links */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            <a
              href="/downloads/KANJI_INFO_VN_reviewed.pdf"
              download="KANJI_INFO_VN_reviewed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-700 text-xs font-bold border border-indigo-200 transition flex items-center space-x-1.5 shrink-0 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{isVi ? 'Tải PDF' : 'ダウンロード'}</span>
            </a>
            <a
              href="https://langoal.com/teaching-materials/kanji/n5-overview.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 border border-orange-300 text-xs font-bold transition flex items-center space-x-1.5 shrink-0 shadow-sm"
            >
              <span>{isVi ? 'Danh sách Kanji N5' : 'Langoal N5 漢字一覧'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
            </a>
            <a
              href="https://langoal.com/teaching-materials/kanji/n4-overview.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-300 text-xs font-bold transition flex items-center space-x-1.5 shrink-0 shadow-sm"
            >
              <span>{isVi ? 'Danh sách Kanji N4' : 'Langoal N4 漢字一覧'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-600" />
            </a>
          </div>
        </div>


      </div>
      {isExpanded && (
      <>
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
          <span className="ml-3 text-sm font-bold text-emerald-600">Loading Kanji from DB...</span>
        </div>
      )}
      {/* Main Flashcard Container */}
      {!isLoading && cards.length > 0 && currentCard ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{isVi ? `Thẻ Kanji ${currentIndex + 1} / ${cards.length} (${currentCard.level})` : `漢字カード ${currentIndex + 1} / ${cards.length} (${currentCard.level})`}</span>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono font-bold border border-amber-300">
                {isVi ? `Nét: ${currentCard.strokeCount}` : `画数: ${currentCard.strokeCount}画`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button onClick={handlePrev} className="shrink-0 p-2 sm:p-3 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-900 shadow-sm transition">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex-1 font-learning-card">
              {/* Flip Card */}
              <div
                onClick={() => { setIsFlipped(!isFlipped); addLog('Flipped Kanji card.', 'INFO'); }}
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
                      ? (isVi ? 'Ý nghĩa (Mặt sau)' : 'ベトナム語の意味 (Mặt sau)')
                      : (isVi ? 'Tiếng Nhật (Mặt trước)' : '漢字・読み方 (Mặt trước)')}
                  </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayTTS(currentCard.kanji);
                    }}
                    className="p-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 transition flex items-center space-x-1"
                  >
                    <Volume2 className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-bold hidden sm:inline">{isVi ? 'Phát âm' : 'TTS発音'}</span>
                  </button>
                </div>

                {/* Front & Back Content */}
                <div className="text-center py-6">
                  {!isFlipped ? (
                    <div className="flex justify-center items-center gap-6 sm:gap-12">
                      <div className="flex flex-col items-center">
                        <h3
                          className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-wide mb-3 font-learning-card"
                          style={{ fontFamily: '"UD Digi Kyokasho NK-R", "UD デジタル 教科書体 NK-R", "Klee One", sans-serif' }}
                        >
                          {currentCard.kanji}
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-xs sm:text-sm font-semibold mt-4">
                          <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-900 border border-indigo-200">
                            {isVi ? `Âm Onyomi: ${currentCard.onyomi}` : `音読み: ${currentCard.onyomi}`}
                          </span>
                          <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-200">
                            {isVi ? `Âm Kunyomi: ${currentCard.kunyomi}` : `訓読み: ${currentCard.kunyomi}`}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <StrokeAnimation charCode={currentCard.kanji} />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-800 tracking-wide mb-2">
                        {currentCard.meaningVn}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mb-3">
                        (Tiếng Anh: {currentCard.meaningEn})
                      </p>

                      <div className="inline-block text-left bg-[#FAF7F2] p-3 rounded-xl border border-amber-200 text-xs text-slate-800 space-y-1 mt-2">
                        <span className="font-bold text-orange-700 block">{isVi ? '💡 Ví dụ:' : '💡 例文:'}</span>
                        {currentCard.examples.map((ex, idx) => (
                          <span key={idx} className="inline-block mr-2 mb-1 bg-white px-2 py-0.5 rounded border border-amber-200 font-medium">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center space-x-1 font-semibold">
                      <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition duration-500 text-orange-600" />
                      <span>{isVi ? 'Nhấp để lật' : 'クリックしてめくる'}</span>
                    </span>
                    <span className="font-bold text-slate-700 hidden sm:block">JLPT {currentCard.level} Kanji</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-emerald-200/60">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleReview(false); }}
                      className="flex-1 px-2 py-2 sm:px-4 sm:py-3 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-[10px] sm:text-sm transition flex items-center justify-center shadow-sm"
                    >
                      <span>{isVi ? '❌ Chưa' : '❌ 覚えてない'}</span>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
                      className="flex-none px-3 py-2 sm:px-6 sm:py-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold text-[10px] sm:text-sm border border-emerald-300 transition shadow-sm"
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

            <button onClick={handleNext} className="shrink-0 p-2 sm:p-3 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-900 shadow-sm transition">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* VAK Help Box */}
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-2 mt-4">
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
            <p className="text-xs text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                              {currentCard.vakHelp[vakType]}
              </p>
              {vakType === 'visual' && (currentCard.vakHelp as any).visualImage && (
                <div className="mt-4 flex justify-center">
                  <img 
                    src={(currentCard.vakHelp as any).visualImage} 
                    alt={`${currentCard.kanji} mnemonic`} 
                    className="max-h-40 object-contain rounded-lg shadow-sm mix-blend-multiply"
                  />
                </div>
              )}

          </div>
        </div>
      ) : null}
      </>
      )}
    </div>
  );
};

