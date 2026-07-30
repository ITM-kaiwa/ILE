import type { Metadata } from 'next';
import './globals.css';

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
      <body class="bg-slate-950 text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
