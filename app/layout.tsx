import type { Metadata } from 'next';
import './globals.css';
import { LogProvider } from '@/providers/LogProvider';
import { SakuSenseiChat } from '@/components/SakuSenseiChat';

export const metadata: Metadata = {
  title: 'VAK-Adaptive Language Learning Coach | ITM ILE',
  description: 'ベトナム人日本語学習者のための認知特性(VAKモデル)×エビングハウス忘却曲線統合AI学習プラットフォーム',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAF7F2] text-slate-800 min-h-screen selection:bg-orange-500 selection:text-white flex flex-col">
      <LogProvider>
        <SakuSenseiChat />
        <div className="flex-grow">
          {children}
        </div>
        <footer className="w-full text-center py-6 text-xs text-slate-400 font-medium mt-auto">
          2026 (C) ITM Group All Rights Reserved.
        </footer>
      </LogProvider>
      </body>
    </html>
  );
}
