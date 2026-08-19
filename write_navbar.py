import os

content = r"""'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';
import { Sparkles, Brain, Globe, BookOpen, Bell, X, CheckCheck } from 'lucide-react';
import { APP_VERSION } from '@/lib/config';
import { OnboardingGuideModal } from '@/components/OnboardingGuideModal';

interface Notification {
  id: string;
  title: string;
  body: string;
  type: string;
  is_read: boolean;
  created_at: string;
}

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  vakType: VakType;
  onVakCycle: () => void;
  onOpenDiagnostic: (mode: 'quick' | 'detailed') => void;
  onOpenLog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  vakType,
  onVakCycle,
  onOpenDiagnostic,
  onOpenLog,
}) => {
  const t = getTranslation(lang);
  const [user, setUser] = useState<User | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [hasClickedGuide, setHasClickedGuide] = useState(false);
  const [pendingReviews, setPendingReviews] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Notification panel state
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifPanel, setShowNotifPanel] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const notifPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Fetch pending SRS reviews count
  useEffect(() => {
    if (!user) { setPendingReviews(0); return; }
    const fetchPendingCount = async () => {
      const now = new Date().toISOString();
      const { count, error } = await supabase
        .from('learning_history')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .lte('next_review', now);
      if (!error && count !== null) setPendingReviews(count);
    };
    fetchPendingCount();
    const handleUpdate = () => fetchPendingCount();
    window.addEventListener('srs-updated', handleUpdate);
    return () => window.removeEventListener('srs-updated', handleUpdate);
  }, [user]);

  // Fetch notifications from DB
  const fetchNotifications = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20);
    if (!error && data) {
      setNotifications(data);
      setUnreadCount(data.filter((n: Notification) => !n.is_read).length);
    }
  };

  useEffect(() => {
    if (user) fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Close panel on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifPanelRef.current && !notifPanelRef.current.contains(e.target as Node)) {
        setShowNotifPanel(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleBellClick = () => {
    setShowNotifPanel((prev) => !prev);
    if (!showNotifPanel) fetchNotifications();
  };

  const markAllAsRead = async () => {
    if (!user) return;
    await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('user_id', user.id)
      .eq('is_read', false);
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
    setUnreadCount(0);
  };

  const markOneAsRead = async (id: string) => {
    await supabase.from('notifications').update({ is_read: true }).eq('id', id);
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, is_read: true } : n));
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  const handleScrollToReview = () => {
    const target = document.getElementById('review') || document.getElementById('ebbinghaus');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easeInOutCubic = percentage < 0.5
          ? 4 * percentage * percentage * percentage
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
        window.scrollTo(0, startPosition + distance * easeInOutCubic);
        if (progress < duration) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  };

  const getVakBadge = () => {
    switch (vakType) {
      case 'visual':
        return <button onClick={onVakCycle} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-blue-600 text-white shadow-sm truncate max-w-[90px] sm:max-w-none hover:bg-blue-700 hover:scale-105 transition cursor-pointer">{t.visualLabel}</button>;
      case 'auditory':
        return <button onClick={onVakCycle} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-emerald-600 text-white shadow-sm truncate max-w-[90px] sm:max-w-none hover:bg-emerald-700 hover:scale-105 transition cursor-pointer">{t.auditoryLabel}</button>;
      case 'kinesthetic':
        return <button onClick={onVakCycle} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-orange-600 text-white shadow-sm font-sans truncate max-w-[90px] sm:max-w-none hover:bg-orange-700 hover:scale-105 transition cursor-pointer">{t.kinestheticLabel}</button>;
    }
  };

  // Combined badge: SRS reviews + unread notifications
  const totalBadge = pendingReviews + unreadCount;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-amber-200/60 bg-[#FFFDF9]/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 min-h-16 flex flex-wrap items-center justify-start gap-2 sm:gap-3">
          {/* Logo & Version */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenLog}
              title="クリックしてシステム通信ログを表示 (Mở nhật ký hệ thống)"
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-md hover:scale-105 transition duration-200 cursor-pointer group shrink-0"
            >
              <Brain className="w-6 h-6 group-hover:rotate-12 transition duration-300" />
            </button>
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h1 className="font-bold text-base sm:text-lg text-slate-800 leading-none tracking-tight">
                  {t.appName}
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-orange-100 text-orange-800 border border-orange-300">
                  {APP_VERSION}
                </span>

                {/* 🔔 Bell Notification Button */}
                {user && (
                  <div className="relative" ref={notifPanelRef}>
                    <button
                      onClick={handleBellClick}
                      className={`outline-none focus:outline-none border-none ring-0 relative p-1.5 rounded-full transition-colors flex items-center justify-center ${
                        totalBadge > 0
                          ? 'text-amber-500 hover:bg-amber-50'
                          : 'text-slate-300 hover:bg-slate-50 opacity-70'
                      }`}
                      title={totalBadge > 0 ? `通知があります (${totalBadge}件)` : '新しい通知はありません'}
                    >
                      <Bell
                        className={`w-5 h-5 ${totalBadge > 0 ? 'animate-wiggle text-amber-500' : 'text-slate-400'}`}
                        fill={totalBadge > 0 ? 'currentColor' : 'none'}
                      />
                      {totalBadge > 0 && (
                        <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-0.5 bg-red-500 rounded-full border-2 border-white shadow-sm text-white text-[9px] font-bold flex items-center justify-center">
                          {totalBadge > 9 ? '9+' : totalBadge}
                        </span>
                      )}
                    </button>

                    {/* Notification Dropdown Panel */}
                    {showNotifPanel && (
                      <div className="absolute left-0 top-10 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                          <span className="font-bold text-sm text-slate-800">
                            🔔 {lang === 'vi' ? 'Thông báo' : '通知'}
                            {unreadCount > 0 && (
                              <span className="ml-2 px-1.5 py-0.5 bg-red-500 text-white rounded-full text-[10px] font-bold">{unreadCount}</span>
                            )}
                          </span>
                          <div className="flex items-center gap-2">
                            {unreadCount > 0 && (
                              <button
                                onClick={markAllAsRead}
                                className="flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 font-medium"
                                title="すべて既読にする"
                              >
                                <CheckCheck className="w-3.5 h-3.5" />
                                {lang === 'vi' ? 'Đọc tất cả' : 'すべて既読'}
                              </button>
                            )}
                            <button
                              onClick={() => setShowNotifPanel(false)}
                              className="text-slate-400 hover:text-slate-600"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* SRS review pending row (live from DB) */}
                        {pendingReviews > 0 && (
                          <button
                            onClick={() => { handleScrollToReview(); setShowNotifPanel(false); }}
                            className="w-full text-left px-4 py-3 hover:bg-amber-50 transition border-b border-amber-50 flex items-start gap-3"
                          >
                            <span className="text-xl mt-0.5">📚</span>
                            <div>
                              <p className="text-sm font-semibold text-slate-800">
                                {lang === 'vi' ? `Ôn tập hôm nay: ${pendingReviews} thẻ` : `今日の復習: ${pendingReviews}件`}
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5">
                                {lang === 'vi' ? 'Nhấn để chuyển đến mục ôn tập' : '「復習」セクションへ移動'}
                              </p>
                            </div>
                          </button>
                        )}

                        {/* Notification list from DB */}
                        <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                          {notifications.length === 0 && pendingReviews === 0 ? (
                            <div className="px-4 py-8 text-center text-slate-400 text-sm">
                              {lang === 'vi' ? 'Không có thông báo mới' : '新しい通知はありません'}
                            </div>
                          ) : (
                            notifications.map((notif) => (
                              <button
                                key={notif.id}
                                onClick={() => markOneAsRead(notif.id)}
                                className={`w-full text-left px-4 py-3 hover:bg-slate-50 transition flex items-start gap-3 ${
                                  !notif.is_read ? 'bg-amber-50/60' : ''
                                }`}
                              >
                                <span className="text-lg mt-0.5">
                                  {notif.type === 'review' ? '📖' : '🔔'}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <p className={`text-sm font-medium truncate ${!notif.is_read ? 'text-slate-900' : 'text-slate-600'}`}>
                                      {notif.title}
                                    </p>
                                    {!notif.is_read && (
                                      <span className="shrink-0 w-2 h-2 rounded-full bg-orange-500"></span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{notif.body}</p>
                                  <p className="text-[10px] text-slate-400 mt-1">
                                    {new Date(notif.created_at).toLocaleString(lang === 'vi' ? 'vi-VN' : 'ja-JP', {
                                      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                    })}
                                  </p>
                                </div>
                              </button>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <p className="hidden sm:block text-xs text-slate-500 mt-0.5">{t.subTitle}</p>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex flex-wrap items-center gap-2">
            {user && (
              <div className="flex items-center space-x-2 mr-1 sm:mr-3">
                <span className="whitespace-nowrap shrink-0 text-sm font-bold text-slate-700 bg-white/60 px-3 py-1.5 rounded-xl border border-stone-200 shadow-sm">
                  {user.user_metadata?.full_name || 'ゲスト'} さん
                </span>
                <span className="whitespace-nowrap shrink-0 text-xs font-bold px-3 py-1.5 bg-amber-100 text-amber-900 rounded-xl border border-amber-300 shadow-sm">
                  {user.user_metadata?.class_name || 'ITM日本語クラス'}
                </span>
              </div>
            )}

            {/* Guide Button */}
            <button
              onClick={() => { setIsGuideOpen(true); setHasClickedGuide(true); }}
              title="初心者ガイド / Hướng dẫn cho người mới"
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold text-white bg-indigo-400 hover:bg-indigo-500 rounded-lg shadow-md transition-all duration-200 hover:scale-105 border border-indigo-300 ${!hasClickedGuide ? 'animate-pulse' : ''}`}
            >
              <span>🔰 Guide</span>
            </button>

            {/* Advanced Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors border ${
                showAdvanced
                  ? 'bg-slate-500 text-white border-slate-600'
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300 border-slate-300'
              }`}
            >
              Advanced
            </button>

            {showAdvanced && (
              <>
                <div className="relative flex items-center space-x-1.5 bg-[#FAF7F2] p-1.5 rounded-xl border border-amber-300 shadow-inner">
                  <Globe className="w-4 h-4 text-orange-600 ml-1" />
                  <select
                    value={lang}
                    onChange={(e) => onLanguageChange(e.target.value as Language)}
                    className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer pr-1"
                  >
                    <option value="ja">JP</option>
                    <option value="vi">VN</option>
                  </select>
                </div>

                {getVakBadge()}

                {user ? (
                  <button
                    onClick={() => supabase.auth.signOut()}
                    className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="px-3 py-1.5 text-xs font-bold text-orange-700 bg-orange-100 hover:bg-orange-200 rounded-lg border border-orange-300 transition"
                  >
                    Sign in
                  </Link>
                )}

                <div className="flex items-center gap-2 ml-0 sm:ml-2">
                  <button
                    onClick={() => onOpenDiagnostic('quick')}
                    className="px-3 py-1.5 text-[10px] sm:text-xs font-medium text-slate-700 bg-amber-100/70 hover:bg-amber-200/70 rounded-lg border border-amber-200 transition"
                  >
                    CĐ 5 câu
                  </button>
                  <button
                    onClick={() => onOpenDiagnostic('detailed')}
                    className="px-3 py-1.5 text-[10px] sm:text-xs font-medium text-orange-700 bg-orange-100/80 hover:bg-orange-200/80 rounded-lg border border-orange-300 transition flex items-center space-x-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                    <span>CĐ 20 câu</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <OnboardingGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </>
  );
};
"""

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Navbar.tsx written!")
