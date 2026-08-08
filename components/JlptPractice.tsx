'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect } from 'react';
import { QuestionCategory, WeaknessRecord, JlptLevel, JlptQuestion } from '@/lib/types';
import { Language, getTranslation } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';
import { BookOpen, CheckCircle, XCircle, RefreshCw , ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface JlptPracticeProps {
  onRecordWeakness: (record: WeaknessRecord) => void;
  lang?: Language;
  vakType?: string;
}

export const JlptPractice: React.FC<JlptPracticeProps> = ({ onRecordWeakness, lang = 'ja', vakType = 'visual' as any }) => {
  const { addLog } = useLog();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiExplanationVi, setAiExplanationVi] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
  const isVi = lang === 'vi';

  const [allQuestions, setAllQuestions] = useState<JlptQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase.from('jlpt_questions').select('*');
      if (!error && data) {
        const badIds = new Set(['n4_119', 'n4_147', 'n4_156', 'n4_177', 'n4_183', 'n4_186']);
          const filteredData = (data as JlptQuestion[]).filter(q => !badIds.has(q.id));
          setAllQuestions(filteredData);
      }
      setIsLoading(false);
    };
    fetchQuestions();
  }, []);

  const [selectedLevel, setSelectedLevel] = useState<JlptLevel>('N5');
  const questions = allQuestions.filter(q => q.level === selectedLevel);
  const currentQ = questions[currentIdx] || questions[0];

  const handleSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedIndex(index);
  };

  const handleSubmit = async () => {
    if (selectedIndex === null) return;
    setIsSubmitted(true);

    if (selectedIndex !== currentQ.correctIndex) {
      onRecordWeakness({
        id: 'weak_' + Date.now(),
        userId: 'user_default',
        topic: currentQ.question,
        category: currentQ.category,
        categoryName: currentQ.categoryName,
        incorrectAnswer: currentQ.options[selectedIndex],
        correctAnswer: currentQ.options[currentQ.correctIndex],
        errorType: currentQ.errorType || 'grammar',
        vakRecommendation: currentQ.vakRecommendation,
        createdAt: new Date().toISOString(),
      });
    }

    if (isVi && currentQ.explanation) {
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
    if (currentIdx + 1 < questions.length) {
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-amber-100 gap-3">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-orange-600" />
          <h2 className="text-xl font-bold text-slate-800">
            {t.jlptTitle}
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => { setSelectedLevel('N5'); setCurrentIdx(0); setSelectedIndex(null); setIsSubmitted(false); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedLevel === 'N5' ? 'bg-orange-600 text-white shadow-sm' : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            N5 (100{isVi ? ' câu' : '問'})
          </button>
          <button
            onClick={() => { setSelectedLevel('N4'); setCurrentIdx(0); setSelectedIndex(null); setIsSubmitted(false); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedLevel === 'N4' ? 'bg-amber-200 text-amber-900 shadow-sm' : 'bg-amber-100/80 text-slate-700 hover:bg-amber-200'
            }`}
          >
            N4 (100{isVi ? ' câu' : '問'})
          </button>
          <button
            onClick={() => { setIsExpanded(!isExpanded); setHasBeenExpanded(true); addLog(`Toggle JlptPractice expanded: ${!isExpanded}`, 'INFO'); }}
            className={`px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 `${!isExpanded && !hasBeenExpanded ? 'animate-attention-blink' : 'shadow-sm'}`}
          >
            <span>{isExpanded ? (isVi ? 'Đóng' : '閉') : (isVi ? 'Mở' : '開')}</span>
          </button>
        </div>
      </div>
      {isExpanded && (
      <>
      {isLoading ? (
        <div className="py-12 flex justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div></div>
      ) : questions.length === 0 ? (
        <div className="py-12 text-center text-slate-500">No questions found</div>
      ) : (
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono font-bold text-orange-700">
            {isVi ? `Câu hỏi ${currentIdx + 1} / ${questions.length} (${selectedLevel})` : `問題 ${currentIdx + 1} / ${questions.length} (${selectedLevel})`}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-semibold">
            🏷️ {currentQ.categoryName}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 leading-relaxed font-learning-card">
            {currentQ.question}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentQ.options.map((opt, idx) => {
            let style = 'bg-[#FAF7F2] border-amber-200/80 text-slate-700 hover:border-orange-300 hover:bg-amber-50/50';
            if (selectedIndex === idx) {
              style = 'bg-orange-100 border-orange-400 text-orange-950 font-bold';
            }
            if (isSubmitted) {
              if (idx === currentQ.correctIndex) {
                style = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
              } else if (selectedIndex === idx && idx !== currentQ.correctIndex) {
                style = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-3.5 rounded-xl border text-left text-sm transition flex items-center justify-between font-medium ${style}`}
              >
                <span>{idx + 1}. {opt}</span>
                {isSubmitted && idx === currentQ.correctIndex && (
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {isSubmitted && selectedIndex === idx && idx !== currentQ.correctIndex && (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedIndex === null}
            className={`w-full py-3 rounded-xl font-bold text-sm transition shadow-sm ${
              selectedIndex !== null
                ? 'bg-orange-600 hover:bg-orange-500 text-white cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {t.checkAnswer}
          </button>
        ) : (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <h4 className="text-xs font-bold text-emerald-900">💡 {isVi ? 'Giải thích & Lời khuyên VAK:' : '解説 & VAK アドバイス:'}</h4>
                <div className="text-xs text-emerald-950 markdown-body prose prose-emerald prose-sm max-w-none overflow-x-auto bg-[#FAF7F2] p-3 rounded border border-emerald-200/50">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentQ.explanation || ''}</ReactMarkdown>
                </div>
                {isVi && (
                  <div className="mt-3 p-3 bg-white/60 rounded-lg border border-emerald-100">
                    <h5 className="text-[11px] font-bold text-emerald-800 mb-2 flex items-center">
                      <RefreshCw className={`w-3 h-3 mr-1 ${isAiLoading ? 'animate-spin' : ''}`} />
                      AI Giải thích chi tiết
                    </h5>
                    <div className="text-xs text-emerald-900 leading-relaxed markdown-body prose prose-emerald prose-sm max-w-none overflow-x-auto">
                      {isAiLoading ? 'Đang tạo bản dịch...' : (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiExplanationVi || '(Không tải được bản dịch)'}</ReactMarkdown>
                      )}
                    </div>
                  </div>
                )}
              </div>

            {currentQ.vakRecommendation && vakType && (
              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                <div className="font-bold text-amber-900">
                  <span>&#128161; {vakType.toUpperCase()} {isVi ? 'Lời khuyến ôn tập' : 'アドバイス'}:</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {(currentQ.vakRecommendation as Record<string, string>)[vakType]}
                </p>
              </div>
            )}
            <button
              onClick={handleNext}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition flex items-center justify-center space-x-2"
            >
              <span>{t.nextQuestion}</span>
            </button>
          </div>
        )}
      </div>
      )}
      </>
      )}
    </div>
  );
};
