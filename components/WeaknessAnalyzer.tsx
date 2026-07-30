'use client';

import React from 'react';
import { VakType } from '@/data/vak-questions';
import { AlertTriangle, Brain, Target, ArrowRight } from 'lucide-react';

interface WeaknessAnalyzerProps {
  vakType: VakType;
}

export const WeaknessAnalyzer: React.FC<WeaknessAnalyzerProps> = ({ vakType }) => {
  const weaknesses = [
    { topic: '助詞「に」と「で」の使い分け', errorType: '文法ミス', count: 4 },
    { topic: '漢字「日」「月」の読み分け（音訓）', errorType: '漢字ミス', count: 3 },
    { topic: '時間表現の語彙 (昨日/一昨日)', errorType: '語彙ミス', count: 2 },
  ];

  return (
    <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-indigo-400" />
          <h2 className="text-xl font-bold text-white">弱点分析 & AI問題再生成</h2>
        </div>
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-rose-950 text-rose-300 border border-rose-800">
          F-05 弱点克服
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-xs text-slate-400">
          誤答履歴からGemini APIが苦手傾向を分析し、{vakType === 'visual' ? '視覚図解' : vakType === 'auditory' ? '聴覚音声' : '身体感覚アクション'}形式で再トレーニング問題を提案します。
        </p>

        <div className="space-y-3">
          {weaknesses.map((w, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-white">{w.topic}</span>
                  <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-rose-400 font-mono">
                    {w.errorType} ({w.count}回誤答)
                  </span>
                </div>
                <p className="text-xs text-indigo-300 mt-1">
                  💡 AI提案 ({vakType}特性): {vakType === 'visual' ? '助詞の対比フローチャートを参照' : vakType === 'auditory' ? '「〜で行く / 〜にいく」の音読フレーズ練習' : '実際に動作を付けて助詞を表現'}
                </p>
              </div>

              <button className="px-3 py-1.5 text-xs font-medium text-indigo-300 bg-indigo-950 hover:bg-indigo-900 rounded-lg border border-indigo-800 transition flex items-center space-x-1 shrink-0">
                <span>克服ドリル</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
