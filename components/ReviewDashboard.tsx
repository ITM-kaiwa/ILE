'use client';

import React, { useState, useEffect } from 'react';
import { VakType } from '@/data/vak-questions';
import { JlptLevel, QuestionCategory } from '@/lib/types';
import { ALL_JLPT_QUESTIONS } from '@/data/jlpt-questions';
import { RefreshCw, CheckCircle, XCircle } from 'lucide-react';

interface ReviewDashboardProps {
  vakType: VakType;
  lang?: 'ja' | 'vi';
}

const getVakRecVi = (text: string) => {
  if (text.includes('色分けして視覚的に覚えましょう')) return 'Hãy ghi nhớ một cách trực quan bằng cách tô màu mẫu câu đúng.';
  if (text.includes('声に出してリズムで覚えましょう')) return 'Hãy ghi nhớ bằng nhịp điệu bằng cách đọc to toàn bộ câu đúng.';
  if (text.includes('ジェスチャーを交えながら')) return 'Hãy thử phát âm thực tế kết hợp với chỉ tay và cử chỉ.';
  return text;
};

export const ReviewDashboard: React.FC<ReviewDashboardProps> = ({ vakType, lang = 'ja' }) => {
  // In a real app we might pass lang as prop, but we can assume UI is Vi if localStorage has it or just default to isVi = true for now. Wait, I should pass lang prop. Let's just use localStorage or fallback to false.
  const [selectedLevel, setSelectedLevel] = useState<JlptLevel | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'ALL'>('ALL');

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiExplanationVi, setAiExplanationVi] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const isVi = lang === 'vi';

  const [shuffledFiltered, setShuffledFiltered] = useState<typeof ALL_JLPT_QUESTIONS>([]);

  useEffect(() => {
    let base = ALL_JLPT_QUESTIONS;
    if (selectedLevel !== 'ALL') {
      base = base.filter((q) => q.level === selectedLevel);
    }
    if (selectedCategory !== 'ALL') {
      base = base.filter((q) => q.category === selectedCategory);
    }
    const shuffled = [...base].sort(() => Math.random() - 0.5);
    setShuffledFiltered(shuffled);
  }, [selectedLevel, selectedCategory]);

  const currentQ = shuffledFiltered[currentIdx] || shuffledFiltered[0];

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIndex(idx);
  };

  const handleSubmit = async () => {
    if (selectedIndex === null) return;
    setIsSubmitted(true);

    if (currentQ.explanation) {
      setIsAiLoading(true);
      try {
        const res = await fetch('/api/gemini/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: currentQ.explanation, targetLang: 'vi' })
        });
        const data = await res.json();
        if (data.success) {
          setAiExplanationVi(data.translation);
        } else {
          setAiExplanationVi('(Không tải được bản dịch)');
        }
      } catch (e) {
        setAiExplanationVi('(Không tải được bản dịch)');
      } finally {
        setIsAiLoading(false);
      }
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < shuffledFiltered.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedIndex(null);
      setIsSubmitted(false);
    } else {
      setCurrentIdx(0);
      setSelectedIndex(null);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-amber-100 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <RefreshCw className="w-5 h-5 text-amber-600" />
            <h2 className="text-xl font-bold text-slate-800">復習専用ダッシュボード (タグ・ジャンル別抽出)</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            N5・N4の全200問から希望のジャンルタグ（助詞・動詞活用・文型・語彙）を絞り込んで復習できます
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedLevel}
            onChange={(e) => {
              setSelectedLevel(e.target.value as JlptLevel | 'ALL');
              setCurrentIdx(0);
              setSelectedIndex(null);
              setIsSubmitted(false);
            }}
            className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-amber-300 text-xs font-bold text-slate-800 focus:outline-none focus:border-amber-500"
          >
            <option value="ALL">全レベル (N5 + N4)</option>
            <option value="N5">JLPT N5 (100問)</option>
            <option value="N4">JLPT N4 (100問)</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value as QuestionCategory | 'ALL');
              setCurrentIdx(0);
              setSelectedIndex(null);
              setIsSubmitted(false);
            }}
            className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-amber-300 text-xs font-bold text-amber-900 focus:outline-none focus:border-amber-500"
          >
            <option value="ALL">全ジャンルタグ</option>
            <option value="grammar_particle">🏷️ 助詞 (grammar_particle)</option>
            <option value="grammar_conjugation">🏷️ 動詞活用 (grammar_conjugation)</option>
            <option value="grammar_sentence">🏷️ 文型表現 (grammar_sentence)</option>
            <option value="vocabulary_daily">🏷️ 日常語彙 (vocabulary_daily)</option>
            <option value="vocabulary_time">🏷️ 時間表現 (vocabulary_time)</option>
            <option value="kanji_reading">🏷️ 漢字読み方 (kanji_reading)</option>
          </select>
        </div>
      </div>

      {shuffledFiltered.length > 0 && currentQ ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold text-amber-700">
              抽出結果: {currentIdx + 1} / {shuffledFiltered.length} 問 (レベル: {currentQ.level})
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
              🏷️ {currentQ.categoryName}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFDF9] border border-amber-200 shadow-sm">
            <h3 className="text-base font-medium text-slate-800 leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQ.options.map((opt, idx) => {
              let style = 'bg-[#FAF7F2] border-amber-200/80 text-slate-700 hover:border-amber-300 hover:bg-amber-50/50';
              if (selectedIndex === idx) {
                style = 'bg-amber-100 border-amber-500 text-amber-950 font-bold';
              }
              if (isSubmitted) {
                if (idx === currentQ.correctIndex) {
                  style = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                } else if (selectedIndex === idx && idx !== currentQ.correctIndex) {
                  style = 'bg-rose-100 border-rose-400 text-rose-900';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`p-3.5 rounded-xl border text-left text-sm transition flex items-center justify-between ${style}`}
                >
                  <span>{idx + 1}. {opt}</span>
                  {isSubmitted && idx === currentQ.correctIndex && (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  )}
                  {isSubmitted && selectedIndex === idx && idx !== currentQ.correctIndex && (
                    <XCircle className="w-4 h-4 text-rose-600" />
                  )}
                </button>
              );
            })}
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedIndex === null}
              className={`w-full py-2.5 rounded-xl text-white font-medium text-sm transition shadow-sm ${
                selectedIndex !== null ? 'bg-amber-600 hover:bg-amber-500' : 'bg-slate-300 cursor-not-allowed'
              }`}
            >
              回答を確認する
            </button>
          ) : (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <h4 className="text-xs font-bold text-emerald-800">{isVi ? `💡 Giải thích & Lời khuyên VAK (${vakType.toUpperCase()}):` : `💡 解説 & VAK (${vakType.toUpperCase()}) アドバイス:`}</h4>
                <p className="text-xs text-emerald-950">{currentQ.explanation}</p>
                <div className="mt-3 p-3 bg-white/60 rounded-lg border border-emerald-100">
                  <h5 className="text-[11px] font-bold text-emerald-800 mb-1 flex items-center">
                    <RefreshCw className={`w-3 h-3 mr-1 ${isAiLoading ? 'animate-spin' : ''}`} />
                    AI Giải thích chi tiết (AI翻訳)
                  </h5>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    {isAiLoading ? 'Đang tạo bản dịch...' : (aiExplanationVi || '(Không tải được bản dịch)')}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[#FFFDF9] border border-emerald-200 text-xs text-emerald-900 mt-2">
                  <strong>💡 {vakType.toUpperCase()} {isVi ? 'Đề xuất ôn tập' : 'アドバイス'}:</strong> {isVi ? getVakRecVi(currentQ.vakRecommendation[vakType]) : currentQ.vakRecommendation[vakType]}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition"
              >
                次の抽出問題へ
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-500">
          該当するジャンルタグの問題が見つかりませんでした。条件を変更してください。
        </div>
      )}
    </div>
  );
};
