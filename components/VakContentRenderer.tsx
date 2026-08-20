'use client';

import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      addLog(`[${new Date().toISOString()}] INFO: Device UserAgent: ${window.navigator.userAgent}`);
      addLog(`[${new Date().toISOString()}] INFO: Screen Resolution: ${window.screen.width}x${window.screen.height}`);
    }
  }, []);
  const [lesson, setLesson] = useState<GeneratedVakLesson>(getMockVakLesson('JLPT N5 文法：〜です / 〜ます', vakType));
  const { playTTS, ttsState } = useTTS();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [contentSource, setContentSource] = useState<'mock' | 'ai' | null>(null);
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
        const isAI = data.source && data.source.startsWith('ai:');
        setContentSource(isAI ? 'ai' : 'mock');
        addLog(`VAK content ready [${data.source || 'unknown'}] for "${selectedTopic}".`, 'SUCCESS');
      } else {
        setLesson(data.lesson || getMockVakLesson(selectedTopic, vakType));
        setContentSource('mock');
        addLog(`AI Generation Failed: ${data.error}. Falling back to mock data.`, 'ERROR');
      }
    } catch (e: any) {
      console.error(e);
      setLesson(getMockVakLesson(selectedTopic, vakType));
      addLog(`Network or fetch error: ${e.message}. Falling back to mock data.`, 'ERROR');
    } finally {
      setIsGenerating(false);
      setIsOpen(true);
    }
  };

  const handlePlayTTS = (text: string) => {
    playTTS(text);
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
            <h2 className="text-xl font-bold text-slate-800">{lang === 'vi' ? 'Tạo nội dung học AI động theo VAK' : 'VAK 動的AI学習コンテンツ生成'}</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'vi' ? 'Gemini API xuất các giải thích tùy chỉnh theo thời gian thực dựa trên đặc điểm nhận thức của bạn' : 'Gemini APIが認知特性に合わせてリアルタイムでカスタマイズ解説を出力します'}
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-medium transition whitespace-nowrap"
            >
              {isOpen ? (lang === 'vi' ? 'Đóng' : '閉') : (lang === 'vi' ? 'Mở' : '開')}
            </button>
          </div>


        </div>
      </div>

      {/* Skeleton Loader while generating */}
      {isGenerating && (
        <div className="mt-6 space-y-3 animate-pulse">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-5/6" />
          <div className="h-24 bg-slate-100 rounded-xl border border-slate-200" />
          <div className="h-4 bg-slate-200 rounded w-2/3" />
          <p className="text-xs text-center text-slate-400 font-medium pt-2">
            {lang === 'vi' ? '✨ AI đang tạo nội dung học tập cá nhân hóa...' : '✨ AIがあなたのVAKタイプに合った教材を生成中...'}
          </p>
        </div>
      )}

      {/* Dynamic VAK Render Box */}
      {isOpen && !isGenerating && (
      <div className="mt-6">
        {vakType === 'visual' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center space-x-3">
              <Eye className="w-5 h-5 text-indigo-600 shrink-0" />
              <span className="text-xs text-indigo-900">
                {lang === 'vi' ? <span><strong>Chế độ Ưu tiên Thị giác (Visual)</strong>: Học theo cấu trúc với bảng Markdown, sơ đồ luồng và hiển thị bằng màu sắc.</span> : <span><strong>視覚優位（Visual）モード</strong>: Markdown表・フロー図解・色分け表示で構造的に学習します。</span>}
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
                    <Mermaid chart={lesson.visualDiagram} />
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
                  {lang === 'vi' ? <span><strong>Chế độ Ưu tiên Thính giác (Auditory)</strong>: Học qua văn bản hội thoại, đọc to, shadowing và tích hợp giọng nói TTS.</span> : <span><strong>聴覚優位（Auditory）モード</strong>: 対話調テキスト・音読・シャドーイング・TTS音声連携。</span>}
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
                <span>{isPlayingAudio ? (lang === 'vi' ? 'Đang phát...' : '再生中...') : (lang === 'vi' ? 'Đọc toàn bộ văn bản (TTS)' : '全文音声朗読 (TTS)')}</span>
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
                {lang === 'vi' ? <span><strong>Chế độ Ưu tiên Vận động (Kinesthetic)</strong>: Hướng dẫn cử chỉ, hành động trải nghiệm và đóng vai.</span> : <span><strong>身体感覚優位（Kinesthetic）モード</strong>: 身振り手振り指示・体感アクション・ロールプレイング。</span>}
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
      )}

      {/* AI source badge */}
      {isOpen && !isGenerating && contentSource && (
        <div className="mt-3 flex justify-end">
          {contentSource === 'ai' ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-700 font-semibold">
              <Sparkles className="w-3 h-3" /> {lang === 'vi' ? 'Nội dung được tạo bởi AI' : 'AI生成コンテンツ'}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] text-slate-500 font-medium">
              {lang === 'vi' ? 'Nội dung mẫu (AI không khả dụng)' : 'サンプルコンテンツ (AI未接続)'}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
