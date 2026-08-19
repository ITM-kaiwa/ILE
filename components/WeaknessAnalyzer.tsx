'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect, useRef } from 'react';
import { VakType } from '@/data/vak-questions';
import { WeaknessRecord } from '@/lib/types';
import { Language, getTranslation } from '@/lib/i18n';
import { AlertTriangle, Lightbulb, CheckCircle2 , ChevronDown, ChevronUp, Sparkles, Loader2 } from 'lucide-react';

interface WeaknessAnalyzerProps {
  vakType: VakType;
  weaknessRecords: WeaknessRecord[];
  lang?: Language;
}

const getVakRecVi = (text: string) => {
  if (text.includes('色分けして視覚的に覚えましょう')) return 'Hãy ghi nhớ một cách trực quan bằng cách tô màu mẫu câu đúng.';
  if (text.includes('声に出してリズムで覚えましょう')) return 'Hãy ghi nhớ bằng nhịp điệu bằng cách đọc to toàn bộ câu đúng.';
  if (text.includes('ジェスチャーを交えながら')) return 'Hãy thử phát âm thực tế kết hợp với chỉ tay và cử chỉ.';
  return text;
};

export const WeaknessAnalyzer: React.FC<WeaknessAnalyzerProps> = ({ vakType, weaknessRecords, lang = 'ja' }) => {
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [autoAnalyzed, setAutoAnalyzed] = useState(false);
  const [autoAnalysisToast, setAutoAnalysisToast] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const AUTO_TRIGGER_THRESHOLD = 3; // auto-analyze after this many mistakes

  // Auto-trigger analysis when weakness records reach threshold
  useEffect(() => {
    if (
      weaknessRecords.length >= AUTO_TRIGGER_THRESHOLD &&
      !autoAnalyzed &&
      !isAnalyzing &&
      !aiAnalysis
    ) {
      setAutoAnalyzed(true);
      setAutoAnalysisToast(true);
      setTimeout(() => setAutoAnalysisToast(false), 5000);
      // Run in background without blocking UI
      handleAnalyze();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaknessRecords.length]);

  const handleAnalyze = async () => {
    if (weaknessRecords.length === 0) return;
    setIsAnalyzing(true);
    setAiAnalysis(null);
    setAiError(null);
    setRevealedAnswers({});
    try {
      const res = await fetch('/api/gemini/analyze-weakness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weaknessRecords: weaknessRecords.slice(0, 20), vakType, lang }) // Analyze top 20
      });
      const data = await res.json();
      if (data.success && data.analysis) {
        setAiAnalysis(data.analysis);
      } else {
        setAiError(data.error || 'Unknown error occurred.');
      }
    } catch (e: any) {
      console.error(e);
      setAiError(e.message || 'Network error occurred.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const { addLog } = useLog();

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
  const isVi = lang === 'vi';

  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      {/* Auto-analysis toast notification */}
      {autoAnalysisToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-xl text-sm font-semibold animate-slide-in-right">
          <Sparkles className="w-4 h-4 animate-spin" />
          {isVi ? 'AI đang tự động phân tích điểm yếu của bạn...' : 'AIが自動で弱点を分析しています...'}
        </div>
      )}
      <div className="flex items-center justify-between pb-4 border-b border-amber-100">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-bold text-slate-800">
            {t.weaknessTitle}
          </h2>
        </div>
        <div className="flex items-center space-x-3">
          
          <button
            onClick={() => { setIsExpanded(!isExpanded); setHasBeenExpanded(true); addLog(`Toggle WeaknessAnalyzer expanded: ${!isExpanded}`, 'INFO'); }}
            className={`px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 ${!isExpanded && !hasBeenExpanded ? 'animate-attention-blink' : 'shadow-sm'}`}
          >
            <span>{isExpanded ? (isVi ? 'Đóng' : '閉') : (isVi ? 'Mở' : '開')}</span>
          </button>
        </div>
      </div>
      {isExpanded && (
      <>

      <p className="text-xs text-slate-600 leading-relaxed">
        {t.weaknessDesc}
      </p>


      {weaknessRecords.length > 0 && (
        <div className="flex justify-center mb-4">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            {isAnalyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            <span>{isVi ? 'Phân tích điểm yếu bằng AI' : 'AIで弱点を分析する'}</span>
          </button>
        </div>
      )}


      {aiError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          ⚠️ {aiError}
        </div>
      )}
      {aiAnalysis && (
        <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-orange-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-600" />
            {isVi ? 'Kết quả phân tích AI' : 'AI分析結果'}
          </h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">{isVi ? 'Tóm tắt mẫu lỗi' : 'パターンの要約'}</h4>
              <p className="text-sm text-slate-700 bg-white p-3 rounded-xl border border-orange-100">{aiAnalysis.patternSummary}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">{isVi ? 'Lĩnh vực yếu' : '苦手なカテゴリ'}</h4>
                <ul className="space-y-2">
                  {aiAnalysis.weakCategories.map((c: any, i: number) => (
                    <li key={i} className="text-sm bg-white p-2 rounded-lg border border-orange-100 flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <div>
                        <span className="font-semibold text-slate-700">{c.name} ({c.count}件)</span>
                        <p className="text-xs text-slate-500 mt-0.5">{c.reason}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">{isVi ? 'Ưu tiên ôn tập' : '最優先トピック'}</h4>
                <ul className="space-y-2">
                  {aiAnalysis.priorityTopics.map((t: string, i: number) => (
                    <li key={i} className="text-sm bg-white p-2.5 rounded-lg border border-orange-100 flex items-center gap-2">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px] font-bold">{i+1}</span>
                      <span className="text-slate-700">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-bold text-slate-800 mb-2">{aiAnalysis.vakStudyPlan.title}</h4>
              <div className="bg-white p-4 rounded-xl border border-orange-100 space-y-3">
                {aiAnalysis.vakStudyPlan.steps.map((s: any, i: number) => (
                  <div key={i} className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 rounded bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">Step {s.step}</span>
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{s.action}</p>
                      <p className="text-xs text-slate-400">{s.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-sm font-medium text-orange-700 text-center italic mt-2">
              "{aiAnalysis.encouragement}"
            </p>
          </div>
        </div>
      )}
      {weaknessRecords.length === 0 ? (
        <div className="p-8 rounded-2xl bg-[#FFFDF9] border border-amber-200 text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
          <h4 className="text-sm font-bold text-slate-800">
            {isVi ? 'Chưa có ghi nhận điểm yếu nào' : '現在、記録された弱点分野はありません'}
          </h4>
          <p className="text-xs text-slate-500">
            {isVi ? 'Hãy làm các bài tập bên trái để AI tự động phân tích điểm yếu của bạn' : '左側の問題演習を解くと、Gemini AIが自動的に弱点を検出して提案を生成します。'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {weaknessRecords.map((record, index) => (
            <div key={index} className="p-4 rounded-xl bg-[#FFFDF9] border border-amber-200 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-900 border border-rose-300">
                  🏷️ {record.categoryName}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {t.wrong}: 「{record.incorrectAnswer}」 ➔ {t.correct}: 「{record.correctAnswer}」
                </span>
              </div>

              <p className="text-xs font-semibold text-slate-800 leading-snug">
                {record.topic}
              </p>

              <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-950 space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-orange-900">
                  <Lightbulb className="w-4 h-4 text-orange-600" />
                  <span>💡 {vakType.toUpperCase()} {t.recommendTitle}:</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {isVi ? getVakRecVi(record.vakRecommendation[vakType]) : record.vakRecommendation[vakType]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      </>
      )}
    </div>
  );
};
