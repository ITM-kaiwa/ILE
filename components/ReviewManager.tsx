'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Language, getTranslation } from '@/lib/i18n';
import { RefreshCw, Bell, Clock, ChevronDown, ChevronUp, BookOpen, Layers, Type } from 'lucide-react';
import { SrsRecord } from '@/lib/srs';

interface ReviewManagerProps {
  lang?: Language;
}

export const ReviewManager: React.FC<ReviewManagerProps> = ({ lang = 'ja' }) => {
  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const isVi = lang === 'vi';
  
  const [reviews, setReviews] = useState<SrsRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setIsLoading(true);
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          supabase.from('learning_history')
            .select('*')
            .eq('user_id', session.user.id)
            .then(({ data }) => {
              if (data) setReviews(data as SrsRecord[]);
              setIsLoading(false);
            });
        } else {
          setIsLoading(false);
        }
      });
    }
  }, [isExpanded]);

  const now = new Date();
  const dueReviews = reviews.filter(r => new Date(r.next_review) <= now);
  const dueVocab = dueReviews.filter(r => r.content_type === 'vocab').length;
  const dueKanji = dueReviews.filter(r => r.content_type === 'kanji').length;
  const dueKana = dueReviews.filter(r => r.content_type === 'kana').length;
  
  const upcomingReviews = reviews.filter(r => new Date(r.next_review) > now).length;

  return (
    <div className="glass-card p-6 border border-amber-200/80 bg-[#FFFDF9] rounded-2xl shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-amber-200/60">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-slate-800">{t.srsTitle}</h2>
        </div>
        <div className="flex items-center space-x-3">
          {dueReviews.length > 0 && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300 animate-pulse">
              {dueReviews.length} Due
            </span>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 shadow-sm"
          >
            <span>{isExpanded ? t.collapseModule : t.viewModule}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {/* Alert Card */}
        <div className="p-4 rounded-xl bg-amber-100/80 border border-amber-300 flex items-start space-x-3 shadow-sm">
          <Bell className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-950">{t.srsAlert}</h4>
            <p className="text-xs font-medium text-amber-900 mt-0.5">
              {t.srsAlertSub}
            </p>
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-4 pt-2 animate-fade-in">
            {isLoading ? (
               <div className="py-4 text-center text-sm text-slate-500 font-medium">
                 Loading review data...
               </div>
            ) : dueReviews.length === 0 ? (
               <div className="py-8 text-center text-sm text-emerald-600 font-bold bg-emerald-50 rounded-xl border border-emerald-200">
                 🎉 {isVi ? "Bạn đã hoàn thành tất cả bài ôn tập hôm nay!" : "本日の復習はすべて完了しました！"}
               </div>
            ) : (
              <div className="space-y-3">
                {dueKana > 0 && (
                  <div className="flex items-center justify-between p-4 rounded-xl bg-amber-50 border border-amber-200 hover:border-amber-400 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-200 flex items-center justify-center text-amber-700">
                        <Type className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{isVi ? "Ôn tập Kana" : "かな復習"}</h4>
                        <p className="text-xs font-medium text-amber-700 flex items-center mt-1">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          <span>{dueKana} {isVi ? "thẻ cần ôn" : "カード"}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {dueVocab > 0 && (
                  <div className="flex items-center justify-between p-4 rounded-xl bg-indigo-50 border border-indigo-200 hover:border-indigo-400 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-200 flex items-center justify-center text-indigo-700">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{isVi ? "Ôn tập Từ vựng" : "語彙復習"}</h4>
                        <p className="text-xs font-medium text-indigo-700 flex items-center mt-1">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          <span>{dueVocab} {isVi ? "thẻ cần ôn" : "カード"}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {dueKanji > 0 && (
                  <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-200 flex items-center justify-center text-emerald-700">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{isVi ? "Ôn tập Kanji" : "漢字復習"}</h4>
                        <p className="text-xs font-medium text-emerald-700 flex items-center mt-1">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          <span>{dueKanji} {isVi ? "thẻ cần ôn" : "カード"}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="pt-4 border-t border-slate-200 flex justify-between items-center px-2">
              <span className="text-xs font-medium text-slate-500">
                {isVi ? "Thẻ sắp tới:" : "次回の復習カード:"} <strong className="text-slate-800">{upcomingReviews}</strong>
              </span>
              <span className="text-xs font-medium text-slate-500">
                {isVi ? "Đã thành thạo:" : "マスター済み:"} <strong className="text-emerald-600">{reviews.filter(r => r.status === 'mastered').length}</strong>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
