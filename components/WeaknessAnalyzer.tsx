'use client';

import React from 'react';
import { VakType } from '@/data/vak-questions';
import { WeaknessRecord } from '@/lib/types';
import { AlertTriangle, Brain } from 'lucide-react';

interface WeaknessAnalyzerProps {
  vakType: VakType;
  weaknessRecords: WeaknessRecord[];
}

export const WeaknessAnalyzer: React.FC<WeaknessAnalyzerProps> = ({
  vakType,
  weaknessRecords,
}) => {
  const defaultWeaknesses: WeaknessRecord[] = [
    {
      id: 'w1',
      userId: 'u1',
      topic: 'わたしは まいにち がっこう (へ) いきます。',
      category: 'grammar_particle',
      categoryName: '助詞（移動の方向）',
      incorrectAnswer: 'が',
      correctAnswer: 'へ',
      errorType: 'grammar',
      vakRecommendation: {
        visual: '方向を表す矢印図解（主語 ➔ 助詞「へ」 ➔ 目的地）とカラーカードで確認しましょう。',
        auditory: '「〜へいきます」「〜でおきます」と文全体を音読して耳で覚えましょう。',
        kinesthetic: '目的地を指さしながら実際に体を動かして文を唱えましょう。',
      },
      createdAt: new Date().toISOString(),
    },
  ];

  const records = weaknessRecords.length > 0 ? weaknessRecords : defaultWeaknesses;

  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-amber-100">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          <h2 className="text-xl font-bold text-slate-800">弱点傾向分析 & VAK別復習提案</h2>
        </div>
        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300">
          全自動分析
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-xs text-slate-500 leading-relaxed">
          問題演習の誤答タグからGemini AIが苦手分野を判定し、お使いの<strong>{
            vakType === 'visual' ? '👁️ 視覚' : vakType === 'auditory' ? '👂 聴覚' : '✋ 身体感覚'
          }モデル</strong>に最適化された学習アドバイスを提案します。
        </p>

        <div className="space-y-3">
          {records.map((record) => {
            const advice = record.vakRecommendation[vakType];
            return (
              <div
                key={record.id}
                className="p-4 rounded-xl bg-[#FFFDF9] border border-amber-200 space-y-2 hover:border-orange-300 transition shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-bold text-orange-600">
                    🏷️ {record.categoryName} ({record.errorType.toUpperCase()})
                  </span>
                  <span className="text-[10px] text-slate-500">誤答: 「{record.incorrectAnswer}」 ➔ 正解: 「{record.correctAnswer}」</span>
                </div>

                <p className="text-sm font-medium text-slate-800">{record.topic}</p>

                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-950 flex items-start space-x-2">
                  <Brain className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-orange-900">💡 {vakType.toUpperCase()}タイプ向け復習提案:</span>
                    <p className="mt-0.5 text-slate-700">{advice}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
