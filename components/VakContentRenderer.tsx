'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { GeneratedVakLesson, getMockVakLesson } from '@/lib/gemini';
import { Play, Volume2, Eye, Hand, Sparkles, BookOpen, MessageSquare } from 'lucide-react';

interface VakContentRendererProps {
  vakType: VakType;
}

export const VakContentRenderer: React.FC<VakContentRendererProps> = ({ vakType }) => {
  const [topic, setTopic] = useState('JLPT N5 文法：〜です / 〜ます');
  const [lesson, setLesson] = useState<GeneratedVakLesson>(getMockVakLesson('JLPT N5 文法：〜です / 〜ます', vakType));
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleGenerate = (selectedTopic: string) => {
    setTopic(selectedTopic);
    setLesson(getMockVakLesson(selectedTopic, vakType));
  };

  const handlePlayTTS = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('お使いのブラウザは音声読み上げに対応していません。');
    }
  };

  return (
    <div className="glass-card p-6 border border-slate-800 rounded-2xl shadow-xl">
      {/* Header & Topic Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">VAK 動的AI学習コンテンツ生成</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Gemini APIが認知特性に合わせてリアルタイムでカスタマイズ解説を出力します
          </p>
        </div>

        {/* Quick Topic Chips */}
        <div className="flex flex-wrap gap-2">
          {['JLPT N5 文法：〜です', 'JLPT N4 語彙：時間の表現', 'JLPT N5 漢字：日・月・木'].map((t) => (
            <button
              key={t}
              onClick={() => handleGenerate(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                topic === t
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic VAK Render Box */}
      <div className="mt-6">
        {vakType === 'visual' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-center space-x-3">
              <Eye className="w-5 h-5 text-blue-400 shrink-0" />
              <span className="text-xs text-blue-300">
                <strong>視覚優位（Visual）モード</strong>: Markdown表・フロー図解・色分け表示で構造的に学習します。
              </span>
            </div>

            {/* Content Markdown */}
            <div className="prose prose-invert max-w-none text-slate-200 text-sm whitespace-pre-line leading-relaxed bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              {lesson.contentMarkdown}
            </div>

            {/* Visual Diagram Box */}
            {lesson.visualDiagram && (
              <div className="p-5 rounded-xl bg-slate-900 border border-blue-900/50">
                <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                  🖼️ 視覚イメージ構造図
                </h4>
                <div className="p-4 rounded-lg bg-slate-950 font-mono text-xs text-indigo-300 overflow-x-auto">
                  {lesson.visualDiagram}
                </div>
              </div>
            )}
          </div>
        )}

        {vakType === 'auditory' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-emerald-300">
                  <strong>聴覚優位（Auditory）モード</strong>: 対話調テキスト・音読・シャドーイング・TTS音声連携。
                </span>
              </div>
              <button
                onClick={() => handlePlayTTS(lesson.contentMarkdown)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                  isPlayingAudio
                    ? 'bg-emerald-500 text-white animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isPlayingAudio ? '再生中...' : '全文音声朗読 (TTS)'}</span>
              </button>
            </div>

            <div className="prose prose-invert max-w-none text-slate-200 text-sm whitespace-pre-line leading-relaxed bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              {lesson.contentMarkdown}
            </div>

            {/* Dialogue Shadowing */}
            {lesson.auditoryDialogue && (
              <div className="p-5 rounded-xl bg-slate-900 border border-emerald-900/50 space-y-3">
                <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  🗣️ シャドーイング対話スクリプト
                </h4>
                {lesson.auditoryDialogue.map((d, i) => (
                  <div key={i} className="flex items-start justify-between p-3 rounded-lg bg-slate-950">
                    <div>
                      <span className="text-xs font-bold text-emerald-400 mr-2">{d.speaker}:</span>
                      <span className="text-sm text-slate-200">{d.text}</span>
                      <span className="text-xs text-slate-500 block mt-0.5">({d.audioNote})</span>
                    </div>
                    <button
                      onClick={() => handlePlayTTS(d.text)}
                      className="p-1.5 text-slate-400 hover:text-emerald-400 transition"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {vakType === 'kinesthetic' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 flex items-center space-x-3">
              <Hand className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs text-amber-300">
                <strong>身体感覚優位（Kinesthetic）モード</strong>: 身振り手振り指示・体感アクション・ロールプレイング。
              </span>
            </div>

            <div className="prose prose-invert max-w-none text-slate-200 text-sm whitespace-pre-line leading-relaxed bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              {lesson.contentMarkdown}
            </div>

            {lesson.kinestheticAction && (
              <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-800/50">
                <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  ✋ フィジカル体感タスク
                </h4>
                <p className="text-sm text-amber-200">{lesson.kinestheticAction}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
