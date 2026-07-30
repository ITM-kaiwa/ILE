'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import {
  MINNA_VOCABULARY_CARDS,
  MinnaVocabCard,
  PartOfSpeech,
  SemanticCategory,
  getVocabByLesson,
  getVocabByPartOfSpeech,
  getVocabBySemanticCategory,
} from '@/data/minna-vocabulary';
import { BookOpen, ExternalLink, Volume2, Eye, Hand, Filter, Layers, Tag, Grid, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';

interface MinnaFlashcardsSectionProps {
  vakType: VakType;
}

export const MinnaFlashcardsSection: React.FC<MinnaFlashcardsSectionProps> = ({ vakType }) => {
  const [filterMode, setFilterMode] = useState<'lesson' | 'category' | 'pos'>('lesson');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<SemanticCategory>('people');
  const [selectedPos, setSelectedPos] = useState<PartOfSpeech>('noun');

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Compute filtered list
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

  return (
    <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">「みんなのにほんご」第1課〜第50課 フラッシュカード</h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            学習課別・意味別・品詞別に単語カードを切り替えてVAK学習特性で暗記できます
          </p>
        </div>

        {/* External Link to VNJPClub Minna no Nihongo */}
        <a
          href={currentCard ? currentCard.vnjpclubUrl : 'https://www.vnjpclub.com/minna-no-nihongo/'}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-indigo-500/50 text-indigo-300 text-xs font-semibold transition flex items-center space-x-1.5 shrink-0"
        >
          <span>VNJPClub 単語リスト公式</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Filter Mode Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-400 hidden sm:inline">分類軸:</span>
          <button
            onClick={() => { setFilterMode('lesson'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
              filterMode === 'lesson' ? 'bg-indigo-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>学習課別 (第1課〜第50課)</span>
          </button>
          <button
            onClick={() => { setFilterMode('category'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
              filterMode === 'category' ? 'bg-purple-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>意味の似通った単語別</span>
          </button>
          <button
            onClick={() => { setFilterMode('pos'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
              filterMode === 'pos' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>品詞別</span>
          </button>
        </div>

        {/* Secondary Sub-Filter Controls */}
        <div className="flex items-center space-x-2">
          {filterMode === 'lesson' && (
            <select
              value={selectedLesson}
              onChange={(e) => { setSelectedLesson(Number(e.target.value)); setCurrentIndex(0); setIsFlipped(false); }}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-semibold text-indigo-300"
            >
              {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>第 {num} 課 ({num <= 25 ? 'N5レベル' : 'N4レベル'})</option>
              ))}
            </select>
          )}

          {filterMode === 'category' && (
            <select
              value={selectedCategory}
              onChange={(e) => { setSelectedCategory(e.target.value as SemanticCategory); setCurrentIndex(0); setIsFlipped(false); }}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-semibold text-purple-300"
            >
              <option value="people">人・職業 (Con người/Nghề nghiệp)</option>
              <option value="greeting">挨拶・コミュニケーション (Chào hỏi)</option>
              <option value="school">学校・勉強 (Trường học)</option>
              <option value="food">食べ物・飲み物 (Thức ăn)</option>
              <option value="time">時間・日付 (Thời gian)</option>
              <option value="place">場所・位置 (Địa điểm)</option>
              <option value="action">動作・活動 (Hành動)</option>
              <option value="object">物品・道具 (Đồ vật)</option>
            </select>
          )}

          {filterMode === 'pos' && (
            <select
              value={selectedPos}
              onChange={(e) => { setSelectedPos(e.target.value as PartOfSpeech); setCurrentIndex(0); setIsFlipped(false); }}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-semibold text-emerald-300"
            >
              <option value="noun">名詞 (Danh từ)</option>
              <option value="verb">動詞 (Động từ)</option>
              <option value="adjective-i">い形容詞 (Tính từ i)</option>
              <option value="adjective-na">な形容詞 (Tính từ na)</option>
              <option value="expression">あいさつ・定型句</option>
            </select>
          )}
        </div>
      </div>

      {/* Interactive Flashcard Card */}
      {list.length > 0 && currentCard ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>カード {currentIndex + 1} / {list.length}</span>
            <span className="px-2.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono">
              第{currentCard.lesson}課 | {currentCard.partOfSpeechName}
            </span>
          </div>

          {/* Flip Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative min-h-[260px] p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/80 border border-slate-700 hover:border-indigo-500/50 shadow-2xl cursor-pointer transition flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                {isFlipped ? '🇻🇳 ベトナム語の意味 (Trống)' : '🇯🇵 日本語単語 (Mặt trước)'}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayTTS(currentCard.reading);
                }}
                className="p-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white transition flex items-center space-x-1"
                title="発音を聞く"
              >
                <Volume2 className="w-4 h-4" />
                <span className="text-xs">TTS発音</span>
              </button>
            </div>

            {/* Center Main Content */}
            <div className="text-center py-6">
              {!isFlipped ? (
                <div>
                  <h3 className="text-4xl font-extrabold text-white tracking-wide mb-2">
                    {currentCard.word}
                  </h3>
                  <p className="text-lg text-indigo-300 font-medium">({currentCard.reading})</p>
                  <p className="text-xs text-slate-400 font-mono mt-1">[{currentCard.romaji}]</p>
                </div>
              ) : (
                <div>
                  <h3 className="text-3xl font-extrabold text-emerald-400 tracking-wide mb-2">
                    {currentCard.meaningVn}
                  </h3>
                  <p className="text-sm text-slate-300">English: {currentCard.meaningEn}</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition duration-500" />
                <span>クリックしてカードをめくる</span>
              </span>
              <span className="font-semibold text-slate-300">{currentCard.semanticCategoryName}</span>
            </div>
          </div>

          {/* VAK Personalized Guidance Box for Active Card */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-white">
              {vakType === 'visual' && <Eye className="w-4 h-4 text-blue-400" />}
              {vakType === 'auditory' && <Volume2 className="w-4 h-4 text-emerald-400" />}
              {vakType === 'kinesthetic' && <Hand className="w-4 h-4 text-amber-400" />}
              <span>{vakType.toUpperCase()}タイプ向け 暗記サポートガイド</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentCard.vakHelp[vakType]}
            </p>
          </div>

          {/* Prev / Next Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition flex items-center space-x-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>前の単語</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-4 py-2.5 rounded-xl bg-indigo-950 border border-indigo-700 hover:bg-indigo-900 text-indigo-200 text-sm font-semibold transition"
            >
              カードをめくる 🔄
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition flex items-center space-x-1.5 shadow"
            >
              <span>次の単語</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-slate-400">単語カードが見つかりません。</div>
      )}
    </div>
  );
};
