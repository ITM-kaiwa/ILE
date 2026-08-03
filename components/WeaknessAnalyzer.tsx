'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { WeaknessRecord } from '@/lib/types';
import { Language, getTranslation } from '@/lib/i18n';
import { AlertTriangle, Lightbulb, CheckCircle2 , ChevronDown, ChevronUp } from 'lucide-react';

interface WeaknessAnalyzerProps {
  vakType: VakType;
  weaknessRecords: WeaknessRecord[];
  lang?: Language;
}

export const WeaknessAnalyzer: React.FC<WeaknessAnalyzerProps> = ({ vakType, weaknessRecords, lang = 'ja' }) => {
  const { addLog } = useLog();

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const isVi = lang === 'vi';

  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-amber-100">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-bold text-slate-800">
            {t.weaknessTitle}
          </h2>
        </div>
        <div className="flex items-center space-x-3">
          
          <button
            onClick={() => { setIsExpanded(!isExpanded); addLog(`Toggle WeaknessAnalyzer expanded: ${!isExpanded}`, 'INFO'); }}
            className="px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 shadow-sm"
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
                  {record.vakRecommendation[vakType]}
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
