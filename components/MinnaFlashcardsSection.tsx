'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { Language } from '@/lib/i18n';
import {
  MINNA_VOCABULARY_CARDS,
  MinnaVocabCard,
  PartOfSpeech,
  SemanticCategory,
  getVocabByLesson,
  getVocabByPartOfSpeech,
  getVocabBySemanticCategory,
} from '@/data/minna-vocabulary';
import { ExternalLink, Volume2, Eye, Hand, Filter, Layers, Tag, Grid, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';

interface MinnaFlashcardsSectionProps {
  vakType: VakType;
  lang?: Language;
}

export const MinnaFlashcardsSection: React.FC<MinnaFlashcardsSectionProps> = ({ vakType, lang = 'ja' }) => {
  const [filterMode, setFilterMode] = useState<'lesson' | 'category' | 'pos'>('lesson');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<SemanticCategory>('people');
  const [selectedPos, setSelectedPos] = useState<PartOfSpeech>('noun');

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  let list: MinnaVocabCard[] = MINNA_VOCABULARY_CARDS;
  if (filterMode === 'lesson') {
    list = getVocabByLesson(selectedLesson);
  } else if (filterMode === 'category') {
    list = getVocabBySemanticCategory(selectedCategory);
  } else if (filterMode === 'pos') {
    list = getVocabByPartOfSpeech(selectedPos);
  }

  const currentCard = list[currentIndex] || list[0];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex + 1 < list.length) {
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
      setCurrentIndex(list.length - 1);
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

      {/* Filter Mode Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#FFFDF9] border border-amber-200">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">{isVi ? 'Phân loại:' : '分類軸:'}</span>
          <button
            onClick={() => { setFilterMode('lesson'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
              filterMode === 'lesson' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-amber-50 text-slate-600 hover:bg-amber-100'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{isVi ? 'Theo Bài (Bài 1 ~ Bài 50)' : '学習課別 (第1課〜第50課)'}</span>
          </button>
          <button
            onClick={() => { setFilterMode('category'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
              filterMode === 'category' ? 'bg-purple-600 text-white shadow-sm' : 'bg-amber-50 text-slate-600 hover:bg-amber-100'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>{isVi ? 'Theo Chủ đề ý nghĩa' : '意味の似通った単語別'}</span>
          </button>
          <button
            onClick={() => { setFilterMode('pos'); setCurrentIndex(0); setIsFlipped(false); }}
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
              onChange={(e) => { setSelectedLesson(Number(e.target.value)); setCurrentIndex(0); setIsFlipped(false); }}
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
              onChange={(e) => { setSelectedCategory(e.target.value as SemanticCategory); setCurrentIndex(0); setIsFlipped(false); }}
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
              onChange={(e) => { setSelectedPos(e.target.value as PartOfSpeech); setCurrentIndex(0); setIsFlipped(false); }}
              className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-amber-300 text-xs font-semibold text-emerald-900"
            >
              <option value="noun">Danh từ (名詞)</option>
              <option value="verb">Động từ (動詞)</option>
              <option value="adjective-i">Tính từ i (い形容詞)</option>
              <option value="adjective-na">Tính từ na (な形容詞)</option>
              <option value="expression">Chào hỏi / Thành ngữ (あいさつ)</option>
            </select>
          )}
        </div>
      </div>

      {/* Interactive Card */}
      {list.length > 0 && currentCard ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{isVi ? `Thẻ từ ${currentIndex + 1} / ${list.length}` : `カード ${currentIndex + 1} / ${list.length}`}</span>
            <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono font-semibold border border-amber-300">
              {isVi ? `Bài ${currentCard.lesson}` : `第${currentCard.lesson}課`} | {currentCard.partOfSpeechName}
            </span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative min-h-[260px] p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#FAF3E0] border-2 border-amber-200/80 hover:border-orange-400 shadow-lg cursor-pointer transition flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                {isFlipped
                  ? (isVi ? '🇻🇳 Ý nghĩa Tiếng Việt (Mặt sau)' : '🇻🇳 ベトナム語の意味 (Mặt sau)')
                  : (isVi ? '🇯🇵 Từ vựng Tiếng Nhật (Mặt trước)' : '🇯🇵 日本語単語 (Mặt trước)')}
              </span>
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

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center space-x-1 font-medium">
                <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition duration-500 text-orange-600" />
                <span>{isVi ? 'Nhấp để lật thẻ' : 'クリックしてカードをめくる'}</span>
              </span>
              <span className="font-semibold text-slate-700">{currentCard.semanticCategoryName}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-2">
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

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-xl bg-amber-100/80 hover:bg-amber-200 text-slate-800 font-medium text-sm transition flex items-center space-x-1.5 border border-amber-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isVi ? 'Từ trước' : '前の単語'}</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-4 py-2.5 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 text-sm font-bold border border-orange-300 transition"
            >
              {isVi ? 'Lật thẻ 🔄' : 'カードをめくる 🔄'}
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition flex items-center space-x-1.5 shadow-sm"
            >
              <span>{isVi ? 'Từ tiếp theo' : '次の単語'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
