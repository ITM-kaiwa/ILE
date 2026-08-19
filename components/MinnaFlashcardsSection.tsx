'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { processReview } from '@/lib/srs';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';

export type PartOfSpeech = 'noun' | 'verb' | 'adjective-i' | 'adjective-na' | 'adverb' | 'expression' | 'particle';
export type SemanticCategory = 'people' | 'greeting' | 'school' | 'food' | 'time' | 'place' | 'action' | 'nature' | 'object' | 'adjective';
export interface MinnaVocabCard {
  id: string;
  lesson: number;
  word: string;
  reading: string;
  romaji: string;
  meaningVn: string;
  meaningEn: string;
  partOfSpeech: PartOfSpeech;
  partOfSpeechName: string;
  semanticCategory: SemanticCategory;
  semanticCategoryName: string;
  vnjpclubUrl: string;
  vakHelp: { visual: string; auditory: string; kinesthetic: string; };
}
import { Download, ExternalLink, Volume2, Eye, Hand, Filter, Layers, Tag, Grid, ArrowLeft, ArrowRight, RotateCw , ChevronDown, ChevronUp , ChevronLeft, ChevronRight , Play, Pause, Shuffle } from 'lucide-react';

interface MinnaFlashcardsSectionProps {
  vakType: VakType;
  lang?: Language;
}

export const MinnaFlashcardsSection: React.FC<MinnaFlashcardsSectionProps> = ({ vakType, lang = 'ja' }) => {
  const { addLog } = useLog();

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasBeenExpanded, setHasBeenExpanded] = useState(false);

  const [filterMode, setFilterMode] = useState<'lesson' | 'category' | 'pos'>('lesson');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<SemanticCategory>('people');
  const [selectedPos, setSelectedPos] = useState<PartOfSpeech>('noun');
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const [dbData, setDbData] = useState<MinnaVocabCard[]>([]);
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
        setIsLoading(true); addLog('Fetching Vocabulary cards from database...', 'INFO'); addLog('Fetching Vocabulary cards from database...', 'INFO');
        const { data, error } = await supabase.from('vocab_cards').select('*').not('word', 'like', '単語_%').limit(4000);
        if (data && !error) {
          const mapped: MinnaVocabCard[] = data.map(item => ({
            id: item.id,
            lesson: parseInt(item.lesson) || 1,
            word: item.word || '',
            reading: item.reading || '',
            romaji: item.romaji || '',
            meaningVn: item.meaning_vi || '',
            meaningEn: item.meaning_en || '',
            partOfSpeech: (item.category as PartOfSpeech) || 'noun',
            partOfSpeechName: item.category_name || '',
            semanticCategory: (item.semantic_category as SemanticCategory) || 'object',
            semanticCategoryName: item.semantic_category_name || '',
            vnjpclubUrl: item.vnjpclub_url || '',
            vakHelp: item.vak_help || { visual: '', auditory: '', kinesthetic: '' }
          }));
          setDbData(mapped); addLog(`Successfully loaded ${mapped.length} Vocabulary cards.`, 'SUCCESS');
        }
        setIsLoading(false);
      };
      fetchData();
    }
  }, [isExpanded, dbData.length, isLoading]);

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

  let list: MinnaVocabCard[] = dbData;
  if (filterMode === 'lesson') {
    list = dbData.filter(v => v.lesson === selectedLesson);
  } else if (filterMode === 'category') {
    list = dbData.filter(v => v.semanticCategory === selectedCategory);
  } else if (filterMode === 'pos') {
    list = dbData.filter(v => v.partOfSpeech === selectedPos);
  }

  const shuffledList = React.useMemo(() => {
    if (shuffleSeed > 0) {
      return [...list].sort(() => Math.random() - 0.5);
    }
    return list;
  }, [list, shuffleSeed]);

  const currentCard = shuffledList[currentIndex] || shuffledList[0];

  const handleReview = async (isCorrect: boolean) => {
    if (user && currentCard) {
      processReview(user.id, 'vocab', currentCard.id, isCorrect).catch(console.error);
    }
    handleNext();
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex + 1 < shuffledList.length) {
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
      setCurrentIndex(shuffledList.length - 1);
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

  
  const [pendingJumpId, setPendingJumpId] = useState<string | null>(null);

  const [pendingCardIdToJump, setPendingCardIdToJump] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenCard = (e: any) => {
      if (e.detail?.type === 'vocab') {
        const card = dbData.find((c: any) => c.id === e.detail.id);
        if (card) {
          setIsExpanded(true);
          if(card.lesson) { setFilterMode('lesson'); setSelectedLesson(card.lesson); }
          setPendingCardIdToJump(card.id);
        }
      }
    };
    window.addEventListener('openCard', handleOpenCard);
    return () => window.removeEventListener('openCard', handleOpenCard);
  }, [dbData]);

  useEffect(() => {
    if (pendingCardIdToJump && list.length > 0) {
      const idx = list.findIndex(c => c.id === pendingCardIdToJump);
      if (idx !== -1) {
        setCurrentIndex(idx);
        setIsFlipped(false);
        setPendingCardIdToJump(null);
      }
    }
  }, [list, pendingCardIdToJump]);

  useEffect(() => {
    if (pendingJumpId && dbData.length > 0) {
      const targetCard = dbData.find(c => c.id === pendingJumpId);
      if (targetCard) {
        setFilterMode('lesson');
        setSelectedLesson(targetCard.lesson);
        const newCards = dbData.filter(c => c.lesson === targetCard.lesson);
        const idx = newCards.findIndex(c => c.id === pendingJumpId);
        if (idx !== -1) setCurrentIndex(idx);
      }
      setPendingJumpId(null);
    }
  }, [pendingJumpId, dbData]);

  const isVi = lang === 'vi';

  return (
    <div id="vocab-section" className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-amber-100 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-bold text-slate-800">
              {isVi ? 'Thẻ từ vựng "Minna no Nihongo" Bài 1 ~ Bài 50' : '「みんなの日本語」第1課〜第50課 フラッシュカード'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {isVi
              ? 'Chuyển đổi thẻ từ vựng theo Bài, Ý nghĩa, Từ loại với ghi nhớ nhận thức VAK'
              : '学習課別・意味別・品詞別に単語カードを切り替えてVAK学習特性で暗記できます'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/downloads/Minna-no-Nihongo-Tu_Vung_50_Bai.pdf"
            download="Minna-no-Nihongo-Tu_Vung_50_Bai.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-700 text-xs font-bold border border-indigo-200 transition flex items-center space-x-1.5 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>{isVi ? 'Tải PDF' : 'ダウンロード'}</span>
          </a>
          <a
            href={currentCard ? currentCard.vnjpclubUrl : 'https://www.vnjpclub.com/minna-no-nihongo/'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-amber-100/80 hover:bg-amber-200 text-amber-900 text-xs font-semibold border border-amber-300 transition flex items-center space-x-1.5 shrink-0"
          >
            <span>VNJPClub {isVi ? 'Danh sách từ vựng gốc' : '単語リスト公式'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Filter Mode Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#FFFDF9] border border-amber-200">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">{isVi ? 'Phân loại:' : '分類軸:'}</span>
          <button
            onClick={() => { setFilterMode('lesson'); setCurrentIndex(0); setIsFlipped(false); setShuffleSeed(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
              filterMode === 'lesson' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-amber-50 text-slate-600 hover:bg-amber-100'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{isVi ? 'Theo Bài (Bài 1 ~ Bài 50)' : '学習課別 (第1課〜第50課)'}</span>
          </button>
          <button
            onClick={() => { setFilterMode('category'); setCurrentIndex(0); setIsFlipped(false); setShuffleSeed(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
              filterMode === 'category' ? 'bg-purple-600 text-white shadow-sm' : 'bg-amber-50 text-slate-600 hover:bg-amber-100'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>{isVi ? 'Theo Chủ đề ý nghĩa' : '意味の似通った単語別'}</span>
          </button>
          <button
            onClick={() => { setFilterMode('pos'); setCurrentIndex(0); setIsFlipped(false); setShuffleSeed(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
              filterMode === 'pos' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-amber-50 text-slate-600 hover:bg-amber-100'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>{isVi ? 'Theo Từ loại' : '品詞別'}</span>
          </button>
        </div>

        {/* Sub Filters */}
        <div className="flex items-center space-x-2">
          {filterMode === 'lesson' && (
            <select
              value={selectedLesson}
              onChange={(e) => { setSelectedLesson(Number(e.target.value)); setCurrentIndex(0); setIsFlipped(false); setShuffleSeed(0); }}
              className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-amber-300 text-xs font-semibold text-indigo-900"
            >
              {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {isVi ? `Bài ${num} (${num <= 25 ? 'Trình độ N5' : 'Trình độ N4'})` : `第 ${num} 課 (${num <= 25 ? 'N5レベル' : 'N4レベル'})`}
                </option>
              ))}
            </select>
          )}

          {filterMode === 'category' && (
            <select
              value={selectedCategory}
              onChange={(e) => { setSelectedCategory(e.target.value as SemanticCategory); setCurrentIndex(0); setIsFlipped(false); setShuffleSeed(0); }}
              className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-amber-300 text-xs font-semibold text-purple-900"
            >
              <option value="people">Con người / Nghề nghiệp (人・職業)</option>
              <option value="greeting">Chào hỏi / Giao tiếp (挨拶)</option>
              <option value="school">Trường học / Học tập (学校・勉強)</option>
              <option value="food">Thức ăn / Đồ uống (食べ物)</option>
              <option value="time">Thời gian / Ngày tháng (時間)</option>
              <option value="place">Địa điểm / Vị trí (場所)</option>
              <option value="action">Hành động / Hoạt động (動作)</option>
              <option value="object">Đồ vật / Dụng cụ (物品)</option>
            </select>
          )}

          {filterMode === 'pos' && (
            <select
              value={selectedPos}
              onChange={(e) => { setSelectedPos(e.target.value as PartOfSpeech); setCurrentIndex(0); setIsFlipped(false); setShuffleSeed(0); }}
              className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-amber-300 text-xs font-semibold text-emerald-900"
            >
              <option value="noun">Danh từ (名詞)</option>
              <option value="verb">Động từ (動詞)</option>
              <option value="adjective-i">Tính từ i (い形容詞)</option>
              <option value="adjective-na">Tính từ na (な形容詞)</option>
              <option value="expression">Chào hỏi / Thành ngữ (あいさつ)</option>
            </select>
          )}
          <button
            onClick={() => {
              setShuffleSeed(Date.now());
              setCurrentIndex(0);
              setIsFlipped(false);
              addLog('Shuffled Vocab cards', 'INFO');
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
            onClick={() => { setIsExpanded(!isExpanded); setHasBeenExpanded(true); addLog(`Toggle MinnaFlashcardsSection expanded: ${!isExpanded}`, 'INFO'); }}
            className={`px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 ${!isExpanded && !hasBeenExpanded ? 'animate-attention-blink' : 'shadow-sm'}`}
          >
            <span>{isExpanded ? t.collapseModule : t.viewModule}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

        </div>
      </div>
      {isExpanded && (
      <>
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          <span className="ml-3 text-sm font-bold text-indigo-600">Loading Vocabulary from DB...</span>
        </div>
      )}
      {/* Interactive Card */}
      {!isLoading && shuffledList.length > 0 && currentCard ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{isVi ? `Thẻ từ ${currentIndex + 1} / ${shuffledList.length}` : `カード ${currentIndex + 1} / ${shuffledList.length}`}</span>
            <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono font-semibold border border-amber-300">
              {isVi ? `Bài ${currentCard.lesson}` : `第${currentCard.lesson}課`} | {currentCard.partOfSpeechName}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button onClick={handlePrev} className="shrink-0 p-2 sm:p-3 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 shadow-sm transition">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="flex-1 w-full min-w-0">
              <div
                onClick={() => { setIsFlipped(!isFlipped); addLog('Flipped Vocabulary card.', 'INFO'); }}
                className="relative min-h-[260px] p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#FAF3E0] border-2 border-amber-200/80 hover:border-orange-400 shadow-lg cursor-pointer transition flex flex-col justify-between group"
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
                      {isVi ? 'Tự động phát' : '自動再生'}
                    </button>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                {isFlipped
                  ? (isVi ? 'Ý nghĩa Tiếng Việt (Mặt sau)' : 'ベトナム語の意味 (Mặt sau)')
                  : (isVi ? 'Từ vựng Tiếng Nhật (Mặt trước)' : '日本語単語 (Mặt trước)')}
              </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayTTS(currentCard.reading);
                }}
                className="p-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-800 transition flex items-center space-x-1"
              >
                <Volume2 className="w-4 h-4" />
                <span className="text-xs font-bold">{isVi ? 'Phát âm' : 'TTS発音'}</span>
              </button>
            </div>

            <div className="text-center py-6">
              {!isFlipped ? (
                <div>
                  <h3
                    className="text-4xl font-extrabold text-slate-800 tracking-wide mb-2 font-learning-card"
                    style={{ fontFamily: '"UD Digi Kyokasho NK-R", "UD デジタル 教科書体 NK-R", "Klee One", sans-serif' }}
                  >
                    {currentCard.word}
                  </h3>
                  <p className="text-lg text-indigo-700 font-medium">({currentCard.reading})</p>
                  <p className="text-xs text-slate-400 font-mono mt-1">[{currentCard.romaji}]</p>
                </div>
              ) : (
                <div>
                  <h3 className="text-3xl font-extrabold text-emerald-700 tracking-wide mb-2">
                    {currentCard.meaningVn}
                  </h3>
                  <p className="text-sm text-slate-600">English: {currentCard.meaningEn}</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
              <span className="flex items-center space-x-1 font-medium">
                <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition duration-500 text-orange-600" />
                <span>{isVi ? 'Nhấp để lật thẻ' : 'クリックしてカードをめくる'}</span>
              </span>
              <span className="font-semibold text-slate-700">{currentCard.semanticCategoryName}</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4 border-t border-amber-200/60">
              <button
                onClick={(e) => { e.stopPropagation(); handleReview(false); }}
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-xs sm:text-sm transition flex items-center justify-center shadow-sm"
              >
                <span>{isVi ? '❌ Chưa thuộc' : '❌ 覚えてない'}</span>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }}
                className="flex-none px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-950 font-bold text-xs sm:text-sm border border-orange-300 transition shadow-sm"
              >
                {isVi ? '🔄 Lật thẻ' : '🔄 めくる'}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleReview(true); }}
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center shadow-sm"
              >
                <span>{isVi ? '✅ Đã thuộc' : '✅ 覚えた'}</span>
              </button>
            </div>
            
          </div>
        </div>
        
        <button onClick={handleNext} className="shrink-0 p-2 sm:p-3 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 shadow-sm transition">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-2 mt-4">
        <div className="flex items-center space-x-2 text-xs font-bold text-orange-900">
          {vakType === 'visual' && <Eye className="w-4 h-4 text-indigo-600" />}
          {vakType === 'auditory' && <Volume2 className="w-4 h-4 text-emerald-600" />}
          {vakType === 'kinesthetic' && <Hand className="w-4 h-4 text-orange-600" />}
          <span>
            {isVi
              ? `Hướng dẫn ghi nhớ từ vựng (${vakType.toUpperCase()})`
              : `${vakType.toUpperCase()}タイプ向け 暗記サポートガイド`}
          </span>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
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
