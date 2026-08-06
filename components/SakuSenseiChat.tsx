'use client';

import React, { useState } from 'react';
import { X, Mail, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SearchableClassSelect } from '@/components/SearchableClassSelect';

export const SakuSenseiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [studentName, setStudentName] = useState('');
  const [classNum, setClassNum] = useState('');
  
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleSendEmail = () => {
    if (!question || !studentName || !classNum) {
      alert('すべての項目を入力してください / Vui lòng nhập đầy đủ thông tin');
      return;
    }
    
    const subject = encodeURIComponent('【質問】VAK-sys-Question');
    const bodyText = `名前 (Tên): ${studentName}\nクラス番号 (Lớp): ${classNum}\n\n【質問内容 / Câu hỏi】\n${question}`;
    const body = encodeURIComponent(bodyText);
    const mailtoUrl = 'mailto:otec.media.smith@gmail.com?subject=' + subject + '&body=' + body;
    window.location.href = mailtoUrl;
  };

  const handleAskAI = async () => {
    if (!question) {
      alert('質問内容を入力してください / Vui lòng nhập câu hỏi');
      return;
    }

    setIsAiTyping(true);
    setAiResponse('');

    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setAiResponse(data.answer || 'エラーが発生しました。');
    } catch {
      setAiResponse('ネットワークエラーが発生しました。');
    } finally {
      setIsAiTyping(false);
    }
  };

  return (
    <>
      {/* Saku-sensei floating button */}
      <div className="fixed top-24 left-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-11 h-11 rounded-full overflow-hidden shadow-lg border-2 border-white hover:scale-105 transition-transform bg-white"
          title="サク先生に質問する"
        >
          <img 
            src="/saku-sensei.jpg" 
            alt="サク先生" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Chat dialog - positioned near top of screen so buttons are always visible */}
      {isOpen && (
        <>
          {/* Backdrop for click-outside-to-close */}
          <div 
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          {/* Dialog panel - fixed near top-left, below the Saku button */}
          <div
            className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col"
            style={{
              top: '6rem',
              left: '1rem',
              width: '340px',
              maxWidth: 'calc(100vw - 2rem)',
              maxHeight: 'calc(100vh - 7rem)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-blue-500 p-4 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-300 bg-white">
                  <img src="/saku-sensei.jpg" alt="サク先生" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">サク先生</h3>
                  <p className="text-xs text-blue-100">Saku-sensei</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-blue-600 p-1 rounded transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body - scrollable */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#F8FAFC] space-y-4">
              <div className="text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                わからないことがあったら質問してね！<br/>
                <span className="text-xs text-slate-500 block mt-1">Hãy đặt câu hỏi nếu bạn có điều gì chưa hiểu nhé!</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="名前 / Tên"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-1/2 text-sm border border-slate-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="w-1/2">
                    <SearchableClassSelect
                      value={classNum}
                      onChange={setClassNum}
                      placeholder="クラス / Lớp"
                    />
                  </div>
                </div>
                
                <textarea
                  placeholder="質問内容を入力... / Nhập câu hỏi..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={3}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all"
                />

                {(isAiTyping || aiResponse) && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-blue-800">AIの回答 / AI Trả lời</span>
                    </div>
                    {isAiTyping ? (
                      <div className="flex space-x-1 items-center h-4 px-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    ) : (
                      <div className="text-sm text-slate-700 prose prose-sm max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {aiResponse}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Buttons always visible at bottom */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleSendEmail}
                    className="flex items-center justify-center space-x-1.5 bg-red-500 hover:bg-red-600 text-white py-2.5 px-2 rounded-xl font-bold transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-xs">Hỏi giáo viên</span>
                  </button>
                  <button
                    onClick={handleAskAI}
                    disabled={isAiTyping}
                    className="flex items-center justify-center space-x-1.5 bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-2 rounded-xl font-bold transition-colors shadow-sm disabled:opacity-50"
                  >
                    <Bot className="w-4 h-4" />
                    <span className="text-xs">Hỏi AI</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};


