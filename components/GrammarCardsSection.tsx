'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect } from 'react';
import { VakType } from '@/data/vak-questions';
import { GrammarCard, JlptLevel } from '@/lib/types';
import { Language, getTranslation } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';
import { processReview } from '@/lib/srs';
import { BookOpen, Eye, Volume2, Hand, ChevronDown, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface GrammarCardsSectionProps {
  vakType: VakType;
  lang?: Language;
}

interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const GrammarCardsSection: React.FC<GrammarCardsSectionProps> = ({ vakType, lang = 'ja' }) => {
  const { addLog } = useLog();

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const [allCards, setAllCards] = useState<GrammarCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  // Practice questions state
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const fetchCards = async () => {
      const { data, error } = await supabase.from('grammar_cards').select('*');
      if (!error && data) {
        const filtered = (data as GrammarCard[]).filter(c =>
          !c.title.startsWith('N5 文法項目') &&
          !c.id.match(/^card_n4_[1-5]$/)
        );
        filtered.sort((a, b) => {
          const matchA = a.id.match(/(\d+)/);
          const matchB = b.id.match(/(\d+)/);
          const numA = matchA ? parseInt(matchA[1], 10) : 0;
          const numB = matchB ? parseInt(matchB[1], 10) : 0;
          return numA - numB;
        });
        setAllCards(filtered);
      }
      setIsLoading(false);
    };
    fetchCards();
  }, []);

  const [level, setLevel] = useState<JlptLevel>('N5');
  const cards = allCards.filter(c => c.level === level);
  const [selectedCardId, setSelectedCardId] = useState<string>(cards[0]?.id || 'card_n5_1');

  const activeCard = cards.find((c) => c.id === selectedCardId) || cards[0];

  // Fetch practice questions when active card changes
  useEffect(() => {
    if (!activeCard?.id) return;
    setQuestions([]);
    setSelectedAnswers({});
    setShowExplanation({});
    setIsLoadingQuestions(true);

    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from('jlpt_questions')
        .select('*')
        .like('id', `${activeCard.id}_q%`)
        .limit(5);

      if (!error && data && data.length > 0) {
        // Randomly pick 3-5
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        const count = Math.min(shuffled.length, Math.floor(Math.random() * 3) + 3); // 3-5
        setQuestions(shuffled.slice(0, count));
      } else {
        setQuestions([]);
      }
      setIsLoadingQuestions(false);
    };
    fetchQuestions();
  }, [activeCard?.id]);

  useEffect(() => {
    const handleOpenCard = (e: any) => {
      if (e.detail?.type === 'grammar') {
        const card = allCards.find((c: any) => c.id === e.detail.id);
        if (card) {
          setIsExpanded(true);
          if (card.level) setLevel(card.level);
          setSelectedCardId(card.id);
        }
      }
    };
    window.addEventListener('openCard', handleOpenCard);
    return () => window.removeEventListener('openCard', handleOpenCard);
  }, [allCards]);

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

  const extractHighlight = (structure: string) => {
    let parts = structure.split(/N\d?|V(?:辞書形|た形|て形|ない形|ます形)?|\([^)]+\)|です|ます|行きます|来ます|帰ります/);
    let validParts = parts.map(p => {
      let clean = p.trim();
      clean = clean.replace(/^[+／\/〜\s]+|[+／\/〜\s]+$/g, '').trim();
      return clean;
    }).filter(p => p.length > 0);
    if (validParts.length > 0) return validParts.join(' / ');
    return structure;
  };

  const handleAnswerSelect = async (questionId: string, optionIndex: number, correctIndex: number) => {
    if (selectedAnswers[questionId] !== undefined && selectedAnswers[questionId] !== null) return; // already answered
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    const isCorrect = optionIndex === correctIndex;

    // Link to SRS processReview
    if (user) {
      try {
        await processReview(user.id, questionId, isCorrect ? 'correct' : 'incorrect');
      } catch (e) {
        // silently fail
      }
    }
    addLog(`Grammar Q ${questionId}: ${isCorrect ? '正解' : '不正解'}`, isCorrect ? 'INFO' : 'WARN');
  };

  return (
    <div id="grammar-section" className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
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
            onClick={() => { setLevel('N5'); setSelectedCardId('card_n5_1'); setVisibleCount(5); }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${level === 'N5' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'}`}
          >
            {isVi ? 'Ngữ pháp N5' : 'N5 文法カード'}
          </button>
          <button
            onClick={() => { setLevel('N4'); setSelectedCardId('card_n4_1'); setVisibleCount(5); }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${level === 'N4' ? 'bg-purple-600 text-white shadow-sm' : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'}`}
          >
            {isVi ? 'Ngữ pháp N4' : 'N4 文法カード'}
          </button>
          <button
            onClick={() => { setIsExpanded(!isExpanded); addLog(`Toggle GrammarCardsSection expanded: ${!isExpanded}`, 'INFO'); }}
            className="px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 shadow-sm"
          >
            <span>{isExpanded ? (isVi ? 'Đóng' : '閉') : (isVi ? 'Mở' : '開')}</span>
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          {isLoading ? (
            <div className="py-12 flex justify-center"><div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left: Card list */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  📑 {isVi ? `Danh sách mẫu ngữ pháp ${level}` : `${level} 文法項目リスト`}
                </h4>
                <div className="mb-3">
                  <input
                    type="number"
                    placeholder={isVi ? 'Nhập số bài (VD: 26)' : '課数で検索 (例: 26)'}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-amber-200 text-sm focus:outline-none focus:border-emerald-500 transition shadow-inner"
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val) {
                        const matchedCard = allCards.find((c: any) => c.title.includes(`第${val}課`));
                        if (matchedCard) {
                          const matchedLevel = matchedCard.level;
                          if (level !== matchedLevel) setLevel(matchedLevel);
                          setSelectedCardId(matchedCard.id);
                          const levelCards = allCards.filter((c: any) => c.level === matchedLevel);
                          const idx = levelCards.findIndex((c: any) => c.id === matchedCard.id);
                          if (idx !== -1 && idx >= visibleCount) setVisibleCount(idx + 5);
                        }
                      }
                    }}
                  />
                </div>
                {cards.slice(0, visibleCount).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCardId(c.id)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between ${
                      activeCard?.id === c.id
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
                {visibleCount < cards.length && (
                  <button
                    onClick={() => setVisibleCount(v => v + 5)}
                    className="w-full mt-3 py-2 rounded-xl border-2 border-dashed border-emerald-300 text-emerald-700 bg-emerald-50/50 font-bold text-xs hover:bg-emerald-100 transition"
                  >
                    {isVi ? 'Xem thêm 5 mục' : '続きをみる (5件)'}
                  </button>
                )}
              </div>

              {/* Right: Card detail + practice questions */}
              <div className="md:col-span-2 space-y-4">
                {/* Grammar info */}
                <div className="p-5 rounded-xl bg-[#FFFDF9] border border-amber-200 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                      {activeCard?.level}: {activeCard?.structure}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
                      {activeCard?.categoryName}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{activeCard?.title}</h3>
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
                    <span className="font-bold text-emerald-900 block mb-1">🇻🇳 Ý nghĩa tiếng Việt:</span>
                    <p className="text-emerald-800 font-bold">{activeCard?.meaning}</p>
                    <p className="text-slate-600 mt-1">{activeCard?.vietnameseExplanation}</p>
                  </div>
                </div>

                {/* VAK content */}
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
                  <div className="markdown-body prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed bg-[#FAF7F2] p-4 rounded-lg border border-amber-200 overflow-x-auto">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {(activeCard?.vakContent?.[vakType] || '').replace('ハイライト', `**${extractHighlight(activeCard?.structure || '')}**`)}
                    </ReactMarkdown>
                  </div>
                </div>

                {/* ✍️ Practice Questions */}
                <div className="p-5 rounded-xl bg-white border border-blue-200 space-y-4 shadow-sm">
                  <div className="flex items-center space-x-2 pb-3 border-b border-blue-100">
                    <span className="text-base">✍️</span>
                    <h4 className="text-sm font-bold text-blue-800">
                      {isVi ? 'Bài tập luyện tập' : '練習問題'}
                    </h4>
                  </div>

                  {isLoadingQuestions ? (
                    <div className="flex justify-center py-4">
                      <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : questions.length === 0 ? (
                    <p className="text-xs text-slate-400 text-center py-3">
                      {isVi ? 'Chưa có bài tập cho mục này.' : 'この項目の練習問題はまだありません。'}
                    </p>
                  ) : (
                    <div className="space-y-5">
                      {questions.map((q, qIdx) => {
                        const answered = selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== null;
                        const selectedIdx = selectedAnswers[q.id] ?? null;
                        const isCorrect = selectedIdx === q.correctIndex;
                        return (
                          <div key={q.id} className="space-y-2">
                            <p className="text-sm font-semibold text-slate-700">
                              <span className="inline-block w-5 h-5 mr-1 text-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold leading-5">{qIdx + 1}</span>
                              {q.question}
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {q.options.map((opt, oIdx) => {
                                let btnClass = 'px-3 py-2 rounded-lg text-xs font-medium border transition text-left ';
                                if (!answered) {
                                  btnClass += 'bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-300 text-slate-700 cursor-pointer';
                                } else if (oIdx === q.correctIndex) {
                                  btnClass += 'bg-green-100 border-green-400 text-green-800 font-bold';
                                } else if (oIdx === selectedIdx) {
                                  btnClass += 'bg-red-100 border-red-400 text-red-700';
                                } else {
                                  btnClass += 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                                }
                                return (
                                  <button
                                    key={oIdx}
                                    className={btnClass}
                                    onClick={() => handleAnswerSelect(q.id, oIdx, q.correctIndex)}
                                    disabled={answered}
                                  >
                                    {answered && oIdx === q.correctIndex && <CheckCircle className="inline w-3 h-3 mr-1 text-green-600" />}
                                    {answered && oIdx === selectedIdx && oIdx !== q.correctIndex && <XCircle className="inline w-3 h-3 mr-1 text-red-500" />}
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Result indicator */}
                            {answered && (
                              <div className={`text-xs px-3 py-1.5 rounded-lg font-semibold ${isCorrect ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                {isCorrect
                                  ? (isVi ? '✅ Chính xác!' : '✅ 正解！')
                                  : (isVi ? '❌ Sai rồi. Đáp án đúng được tô màu xanh.' : '❌ 不正解。正解は緑色で表示されています。')}
                              </div>
                            )}

                            {/* Show explanation button */}
                            {answered && (
                              <button
                                onClick={() => setShowExplanation(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                                className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 transition"
                              >
                                <HelpCircle className="w-3.5 h-3.5" />
                                <span>{showExplanation[q.id] ? (isVi ? 'Ẩn giải thích' : '解説を隠す') : (isVi ? 'Xem giải thích' : '解説を見る')}</span>
                              </button>
                            )}

                            {answered && showExplanation[q.id] && q.explanation && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-slate-700 leading-relaxed">
                                {q.explanation}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
