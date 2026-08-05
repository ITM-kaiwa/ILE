'use client';

import React from 'react';
import { X, BookOpen, Brain, TrendingUp, CheckCircle } from 'lucide-react';

interface OnboardingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingGuideModal: React.FC<OnboardingGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-100 p-4 flex items-center justify-between z-10 rounded-t-2xl">
          <h2 className="text-xl font-bold text-slate-800 flex items-center">
            <span className="text-2xl mr-2">🔰</span> はじめての方へ / Hướng dẫn cho người mới
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Intro */}
          <div className="text-slate-700 leading-relaxed text-sm">
            <p>
              VAKシステムへようこそ！このシステムは、あなたの「学習特性（VAK）」に合わせて最適な日本語学習を提供するプラットフォームです。
              <br/><span className="text-slate-500 text-xs">Chào mừng đến với hệ thống VAK! Đây là nền tảng cung cấp việc học tiếng Nhật tối ưu dựa trên "đặc điểm học tập (VAK)" của bạn.</span>
            </p>
          </div>

          {/* Flow */}
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Brain className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-indigo-100 bg-indigo-50 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-indigo-900 text-sm">STEP 1: 詳細診断 (Chẩn đoán)</h3>
                </div>
                <p className="text-slate-700 text-xs mt-2">
                  まずは20問の診断テストを受けましょう。あなたが「視覚(V)」「聴覚(A)」「身体感覚(K)」のどのタイプか判定されます。<br/>
                  <span className="text-slate-500 mt-1 block">Trước tiên hãy làm bài kiểm tra 20 câu. Bạn sẽ biết mình thuộc kiểu V, A hay K.</span>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-emerald-100 bg-emerald-50 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-emerald-900 text-sm">STEP 2: VAK学習 (Học theo VAK)</h3>
                </div>
                <p className="text-slate-700 text-xs mt-2">
                  診断結果に基づき、漢字や文法のカードで学習します。「開」ボタンを押すと、あなたにぴったりのAI解説が表示されます。<br/>
                  <span className="text-slate-500 mt-1 block">Học Kanji/Ngữ pháp dựa trên kết quả. Bấm "Mở" để xem giải thích AI phù hợp với bạn.</span>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-orange-100 bg-orange-50 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-orange-900 text-sm">STEP 3: 練習問題 (Luyện tập)</h3>
                </div>
                <p className="text-slate-700 text-xs mt-2">
                  各文法項目の下にはAIが生成した練習問題があります。問題を解いて答え合わせをし、復習に役立てましょう。<br/>
                  <span className="text-slate-500 mt-1 block">Làm bài tập bên dưới mỗi mục ngữ pháp và kiểm tra đáp án để ôn tập.</span>
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-100 bg-blue-50 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-blue-900 text-sm">STEP 4: ダッシュボード (Bảng đk)</h3>
                </div>
                <p className="text-slate-700 text-xs mt-2">
                  「復習ダッシュボード」で自分の弱点や学習履歴を確認できます。日々の進捗を管理しましょう。<br/>
                  <span className="text-slate-500 mt-1 block">Kiểm tra điểm yếu và lịch sử học tập của bạn tại Bảng điều khiển ôn tập.</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex justify-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl shadow-md transition-all"
          >
            学習を始める / Bắt đầu học
          </button>
        </div>
      </div>
    </div>
  );
};
