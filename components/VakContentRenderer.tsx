'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { GeneratedVakLesson, getMockVakLesson } from '@/lib/gemini';
import { Play, Volume2, Eye, Hand, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface VakContentRendererProps {
  vakType: VakType;
}

export const VakContentRenderer: React.FC<VakContentRendererProps> = ({ vakType }) => {
  const [topic, setTopic] = useState('JLPT N5 文法：〜です / 〜ます');
  const [lesson, setLesson] = useState<GeneratedVakLesson>(getMockVakLesson('JLPT N5 文法：〜です / 〜ます', vakType));
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (selectedTopic: string) => {
    setTopic(selectedTopic);
    setIsGenerating(true);
    try {
      const res = await fetch('/api/gemini/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: selectedTopic, vakType })
      });
      const data = await res.json();
      if (data.lesson) {
        setLesson(data.lesson);
      } else {
        setLesson(getMockVakLesson(selectedTopic, vakType));
      }
    } catch (e) {
      console.error(e);
      setLesson(getMockVakLesson(selectedTopic, vakType));
    } finally {
      setIsGenerating(false);
    }
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
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm relative">
            {isGenerating && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10 rounded-2xl flex items-center justify-center">
          <div className="flex items-center space-x-2 text-orange-600 font-bold">
            <Sparkles className="w-5 h-5 animate-spin" />
            <span>AIがコンテンツを生成中... / Đang tạo nội dung AI...</span>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-amber-100">
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <h2 className="text-xl font-bold text-slate-800">VAK 動的AI学習コンテンツ生成</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Gemini APIが認知特性に合わせてリアルタイムでカスタマイズ解説を出力します
          </p>
        </div>

        {/* Quick Topic Chips */}
        <div className="flex flex-wrap gap-2">
          {['JLPT N5 文法：〜です', 'JLPT N4 語彙：時間の表現', 'JLPT N5 漢字：日・月・木'].map((t) => (
            <button
              key={t}
              onClick={() => handleGenerate(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                topic === t
                  ? 'bg-orange-600 text-white border-orange-500 shadow-sm'
                  : 'bg-amber-50 text-slate-700 border-amber-200 hover:bg-amber-100'
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
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center space-x-3">
              <Eye className="w-5 h-5 text-indigo-600 shrink-0" />
              <span className="text-xs text-indigo-900">
                <strong>視覚優位（Visual）モード</strong>: Markdown表・フロー図解・色分け表示で構造的に学習します。
              </span>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm whitespace-pre-line leading-relaxed bg-[#FFFDF9] p-5 rounded-xl border border-amber-200/80 shadow-sm">
              {lesson.contentMarkdown}
            </div>

            {lesson.visualDiagram && (
              <div className="p-5 rounded-xl bg-[#FFFDF9] border border-indigo-200 space-y-2 shadow-sm">
                <h4 className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                  🖼️ 視覚イメージ構造図
                </h4>
                <div className="p-4 rounded-lg bg-indigo-950 font-mono text-xs text-indigo-200 overflow-x-auto">
                  {lesson.visualDiagram}
                </div>
              </div>
            )}
          </div>
        )}

        {vakType === 'auditory' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs text-emerald-900">
                  <strong>聴覚優位（Auditory）モード</strong>: 対話調テキスト・音読・シャドーイング・TTS音声連携。
                </span>
              </div>
              <button
                onClick={() => handlePlayTTS(lesson.contentMarkdown)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
                  isPlayingAudio
                    ? 'bg-emerald-500 text-white animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isPlayingAudio ? '再生中...' : '全文音声朗読 (TTS)'}</span>
              </button>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm whitespace-pre-line leading-relaxed bg-[#FFFDF9] p-5 rounded-xl border border-amber-200/80 shadow-sm">
              {lesson.contentMarkdown}
            </div>
          </div>
        )}

        {vakType === 'kinesthetic' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center space-x-3">
              <Hand className="w-5 h-5 text-orange-600 shrink-0" />
              <span className="text-xs text-orange-900">
                <strong>身体感覚優位（Kinesthetic）モード</strong>: 身振り手振り指示・体感アクション・ロールプレイング。
              </span>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm whitespace-pre-line leading-relaxed bg-[#FFFDF9] p-5 rounded-xl border border-amber-200/80 shadow-sm">
              {lesson.contentMarkdown}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
