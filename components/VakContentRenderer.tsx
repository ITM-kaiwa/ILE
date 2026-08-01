'use client';

import React, { useState } from 'react';
import { VakType } from '@/data/vak-questions';
import { GeneratedVakLesson, getMockVakLesson } from '@/lib/gemini';
import { Play, Volume2, Eye, Hand, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Mermaid } from './Mermaid';
import { useLog } from '@/providers/LogProvider';

interface VakContentRendererProps {
  vakType: VakType;
  lang: string;
}

export const VakContentRenderer: React.FC<VakContentRendererProps> = ({ vakType, lang }) => {
  const [topic, setTopic] = useState('JLPT N5 文法：〜です / 〜ます');
  const [customTopicInput, setCustomTopicInput] = useState('');
  const [lesson, setLesson] = useState<GeneratedVakLesson>(getMockVakLesson('JLPT N5 文法：〜です / 〜ます', vakType));
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { addLog } = useLog();

  const handleGenerate = async (selectedTopic: string) => {
    if (!selectedTopic.trim()) return;
    
    setTopic(selectedTopic);
    setIsGenerating(true);
    addLog(`Initiating dynamic VAK content generation for topic: "${selectedTopic}" in ${vakType} mode.`, 'INFO');
    
    try {
      const res = await fetch('/api/gemini/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: selectedTopic, vakType, lang })
      });
      const data = await res.json();
      
      if (data.success) {
        setLesson(data.lesson);
        addLog(`Successfully generated custom VAK content for "${selectedTopic}".`, 'SUCCESS');
      } else {
        setLesson(data.lesson || getMockVakLesson(selectedTopic, vakType));
        addLog(`AI Generation Failed: ${data.error}. Falling back to high-quality mock data.`, 'ERROR');
      }
    } catch (e: any) {
      console.error(e);
      setLesson(getMockVakLesson(selectedTopic, vakType));
      addLog(`Network or fetch error: ${e.message}. Falling back to mock data.`, 'ERROR');
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

        {/* Dynamic Topic Input & Quick Chips */}
        <div className="flex flex-col md:items-end gap-3 w-full lg:w-3/5">
          {/* Custom Input */}
          <div className="flex items-center w-full md:min-w-[500px] lg:min-w-[600px] gap-2">
            <input
              id="topic-input"
              name="topic"
              type="text"
              value={customTopicInput}
              onChange={(e) => setCustomTopicInput(e.target.value)}
              placeholder={lang === 'vi' ? 'Bạn muốn học gì? Viết tự do vào đây.' : 'どんなことを学習したいですか？ここに自由に書いてください。'}
              className="flex-grow px-3 py-1.5 rounded-xl text-sm border border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder:text-slate-400 placeholder:text-xs"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate(customTopicInput)}
            />
            <button
              onClick={() => handleGenerate(customTopicInput)}
              disabled={isGenerating || !customTopicInput.trim()}
              className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition disabled:opacity-50 whitespace-nowrap"
            >
              {lang === 'vi' ? 'Tạo' : '生成'}
            </button>
          </div>

          {/* Quick Topic Chips */}
          <div className="flex flex-wrap gap-2 justify-end">
            {['JLPT N5 文法：〜です', 'JLPT N4 語彙：時間の表現', 'JLPT N5 漢字：日・月・木'].map((t) => (
              <button
                key={t}
                onClick={() => {
                  setCustomTopicInput(t);
                  handleGenerate(t);
                }}
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

            <div className="markdown-body max-w-none text-slate-700 text-sm leading-relaxed bg-[#FFFDF9] p-5 rounded-xl border border-amber-200/80 shadow-sm overflow-x-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {lesson.contentMarkdown}
                </ReactMarkdown>
              </div>

            {lesson.visualDiagram && (
                <div className="p-5 rounded-xl bg-[#FFFDF9] border border-indigo-200 space-y-2 shadow-sm">
                  <h4 className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                    🖼️ {lang === 'vi' ? 'Biểu đồ cấu trúc trực quan' : '視覚イメージ構造図'}
                  </h4>
                  <div className="p-4 rounded-lg bg-white markdown-body max-w-none text-slate-700 text-sm overflow-x-auto border border-indigo-100 shadow-inner">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }: any) {
                          const match = /language-(\w+)/.exec(className || '');
                          if (!inline && match && match[1] === 'mermaid') {
                            return <Mermaid chart={String(children).replace(/\n$/, '')} />;
                          }
                          return <code className={className} {...props}>{children}</code>;
                        }
                      }}
                    >
                      {lesson.visualDiagram}
                    </ReactMarkdown>
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

            <div className="markdown-body max-w-none text-slate-700 text-sm leading-relaxed bg-[#FFFDF9] p-5 rounded-xl border border-amber-200/80 shadow-sm overflow-x-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {lesson.contentMarkdown}
                </ReactMarkdown>
              </div>

              {lesson.auditoryDialogue && lesson.auditoryDialogue.length > 0 && (
                <div className="p-5 rounded-xl bg-[#FFFDF9] border border-emerald-200 space-y-4 shadow-sm mt-6">
                  <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    🎧 {lang === 'vi' ? 'Hội thoại & Phát âm' : '音声ダイアログ'}
                  </h4>
                  <div className="space-y-3">
                    {lesson.auditoryDialogue.map((dialogue, idx) => (
                      <div key={idx} className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 flex flex-col space-y-1">
                        <span className="font-bold text-emerald-800 text-sm">{dialogue.speaker}</span>
                        <span className="text-slate-700 text-sm">{dialogue.text}</span>
                        {dialogue.audioNote && (
                          <span className="text-xs text-emerald-600 mt-1 italic block">
                            💡 {dialogue.audioNote}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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

            <div className="markdown-body max-w-none text-slate-700 text-sm leading-relaxed bg-[#FFFDF9] p-5 rounded-xl border border-amber-200/80 shadow-sm overflow-x-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {lesson.contentMarkdown}
                </ReactMarkdown>
              </div>

              {lesson.kinestheticAction && (
                <div className="p-5 rounded-xl bg-[#FFFDF9] border border-orange-200 space-y-2 shadow-sm mt-6">
                  <h4 className="text-xs font-semibold text-orange-700 uppercase tracking-wider">
                    🏃 {lang === 'vi' ? 'Hành động trải nghiệm' : '身体感覚アクション'}
                  </h4>
                  <div className="p-4 rounded-lg bg-orange-50 markdown-body max-w-none text-slate-700 text-sm border border-orange-100">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {lesson.kinestheticAction}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};
