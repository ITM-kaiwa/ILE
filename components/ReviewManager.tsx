'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Language, getTranslation } from '@/lib/i18n';
import { RefreshCw, Bell, Clock, ChevronDown, ChevronUp, BookOpen, Layers, Type } from 'lucide-react';
import { SrsRecord } from '@/lib/srs';

interface ReviewManagerProps {
  lang?: Language;
}

export const ReviewManager: React.FC<ReviewManagerProps> = ({ lang = 'ja' }) => {
  const { addLog } = useLog();

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const isVi = lang === 'vi';
  
  const [reviews, setReviews] = useState<SrsRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [vocabMap, setVocabMap] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isExpanded) {
      setIsLoading(true); addLog('Fetching SRS review data...', 'INFO'); addLog('Fetching SRS review data...', 'INFO');
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          supabase.from('learning_history')
            .select('*')
            .eq('user_id', session.user.id)
            .then(async ({ data }) => {
              if (data) {
                const fetchedReviews = data as SrsRecord[];
                setReviews(fetchedReviews);
                
                const map: Record<string, string> = {};
                
                const vocabIds = fetchedReviews.filter(r => r.content_type === 'vocab').map(r => r.content_id);
                if (vocabIds.length > 0) {
                  const { data: vocabData } = await supabase.from('vocab_cards').select('id, word').in('id', vocabIds);
                  if (vocabData) vocabData.forEach(v => map[v.id] = v.word);
                }

                const kanaIds = fetchedReviews.filter(r => r.content_type === 'kana').map(r => r.content_id);
                if (kanaIds.length > 0) {
                  const { data: kanaData } = await supabase.from('kana_cards').select('id, character').in('id', kanaIds);
                  if (kanaData) kanaData.forEach(v => map[v.id] = v.character);
                }

                const kanjiIds = fetchedReviews.filter(r => r.content_type === 'kanji').map(r => r.content_id);
                if (kanjiIds.length > 0) {
                  const { data: kanjiData } = await supabase.from('kanji_cards').select('id, kanji').in('id', kanjiIds);
                  if (kanjiData) kanjiData.forEach(v => map[v.id] = v.kanji);
                }

                const grammarIds = fetchedReviews.filter(r => r.content_type === 'grammar').map(r => r.content_id);
                if (grammarIds.length > 0) {
                  const { data: grammarData } = await supabase.from('grammar_cards').select('id, title').in('id', grammarIds);
                  if (grammarData) grammarData.forEach(v => map[v.id] = v.title);
                }

                setVocabMap(map);
              }
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
  
  const [clickCount, setClickCount] = useState(0);

  const getVisibleCount = () => {
    if (dueReviews.length < 4) return dueReviews.length;
    if (clickCount === 0) return 3;
    if (clickCount === 1) return 13;
    return dueReviews.length;
  };
  
  const visibleCount = getVisibleCount();
  const visibleReviews = dueReviews.slice(0, visibleCount);
  
  const handleShowMore = () => {
    setClickCount(prev => prev + 1);
  };

  
  const upcomingReviews = reviews.filter(r => new Date(r.next_review) > now).length;

  return (
    <div className="glass-card p-6 border border-amber-200/80 bg-[#FFFDF9] rounded-2xl shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-amber-200/60">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-slate-800">{t.srsTitle}</h2>
        </div>
        <div className="flex items-center space-x-3">
          
          <button
            onClick={() => { setIsExpanded(!isExpanded); addLog(`Toggle ReviewManager expanded: ${!isExpanded}`, 'INFO'); }}
            className="px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 shadow-sm"
          >
            <span>{isExpanded ? (isVi ? 'Đóng' : '閉') : (isVi ? 'Mở' : '開')}</span>
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {/* Alert Card */}
        <div className="p-4 rounded-xl bg-amber-100/80 border border-amber-300 flex items-start space-x-3 shadow-sm">
          <Bell className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-950">{t.srsAlert.replace('{count}', dueReviews.length.toString())}</h4>
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
              <>
              <div className="space-y-3">
                {visibleReviews.map(review => {
                  let Icon = BookOpen;
                  let colorClass = 'bg-emerald-50 border-emerald-200 hover:border-emerald-400';
                  let iconBgClass = 'bg-emerald-200 text-emerald-700';
                  let titlePrefix = isVi ? "Ôn tập Kanji" : "漢字復習";
                  let sectionId = 'kanji-section';

                  if (review.content_type === 'kana') {
                    Icon = Type;
                    colorClass = 'bg-amber-50 border-amber-200 hover:border-amber-400';
                    iconBgClass = 'bg-amber-200 text-amber-700';
                    titlePrefix = isVi ? "Ôn tập Kana" : "かな復習";
                    sectionId = 'kana-section';
                  } else if (review.content_type === 'vocab') {
                    Icon = Layers;
                    colorClass = 'bg-indigo-50 border-indigo-200 hover:border-indigo-400';
                    iconBgClass = 'bg-indigo-200 text-indigo-700';
                    titlePrefix = isVi ? "Ôn tập Từ vựng" : "語彙復習";
                    sectionId = 'vocab-section';
                  } else if (review.content_type === 'grammar') {
                    Icon = BookOpen;
                    colorClass = 'bg-rose-50 border-rose-200 hover:border-rose-400';
                    iconBgClass = 'bg-rose-200 text-rose-700';
                    titlePrefix = isVi ? "Ôn tập Ngữ pháp" : "文法復習";
                    sectionId = 'grammar-section';
                  }

                  const jumpToCard = () => {
                    addLog(`Jumping to card ${review.content_id} (${review.content_type}) for review.`, 'INFO');
                    addLog(`Jumping to card ${review.content_id} (${review.content_type}) for review.`, 'INFO');
                    window.dispatchEvent(new CustomEvent('openCard', { 
                      detail: { type: review.content_type, id: review.content_id } 
                    }));
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                  };

                  // format ID to be actual content
                  let readableId = review.content_id.replace('card_', '').replace('_', ' ').toUpperCase();
                  if (vocabMap[review.content_id]) {
                    readableId = vocabMap[review.content_id];
                  } else {
                    readableId = readableId.substring(0, 8) + '...';
                  }

                  return (
                    <div 
                      key={review.content_id} 
                      onClick={jumpToCard}
                      className={`flex items-center justify-between p-4 rounded-xl border transition cursor-pointer shadow-sm ${colorClass}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBgClass}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">{titlePrefix}: {readableId}</h4>
                          <p className="text-xs font-medium text-slate-600 flex items-center mt-1">
                            <Clock className="w-3.5 h-3.5 mr-1" />
                            <span>{isVi ? "Nhấp để ôn ngay" : "クリックして復習へジャンプ"}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
                {dueReviews.length >= 4 && visibleCount < dueReviews.length && (
                  <div className="flex justify-center mt-3 mb-2">
                    <button
                      onClick={handleShowMore}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-bold rounded-xl transition shadow-sm border border-stone-200"
                    >
                      {clickCount === 0 ? (isVi ? 'Xem thêm' : 'もっと見る') : (isVi ? 'Xem tất cả' : 'さらに見る')}
                    </button>
                  </div>
                )}
              </>
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
