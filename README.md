# VAK-Adaptive Language Learning Coach (ILE)

> **ITM Language Empowerment (ILE)**: ベトナム人の日本語学習者の自己学習を支援する統合AI語学学習プラットフォーム

## 概要 (Overview)
本アプリケーションは、ユーザーの認知特性 (**VAKモデル: 視覚 Visual / 聴覚 Auditory / 身体感覚 Kinesthetic**) と記憶科学 (**エビングハウスの忘却曲線 Spaced Repetition**) を融合した、完全パーソナライズ型語学学習Webアプリケーションです。

---

## 主な機能 (Key Features)

1. **VAK認知タイプ診断機能 (F-01)**
   - **クイック診断 (5問)**: オンボーディング用の高速1分診断。
   - **詳細診断 (20問)**: 20問の高精度診断。
   - **選択肢ランダム化**: 先入観を防ぐため、選択肢のV/A/K並び順を自動シャッフル (`data/vak-questions.ts`)。
   - **タイ判別**: 同点の場合は「混合タイプ（Hybrid）」フラグを自動付与。

2. **動的AI学習コンテンツ生成 (F-02)**
   - **視覚優位 (Visual)**: Markdown表、タイムライン図解、色分け強調、イメージ想起カード。
   - **聴覚優位 (Auditory)**: 対話調テキスト、発音/アクセント/ルビ解説、シャドーイング指示、Web Speech TTS音声再生。
   - **身体感覚優位 (Kinesthetic)**: 身振り手振り指示、部屋を歩く等のフィジカルタスク指示、体験型ロールプレイ問題。

3. **Googleカレンダー学習計画自動連携 (F-03)**
   - 学習目標からAIが現実的な学習スケジュールを作成し、Google Calendar API / iCal形式で書き込み一括登録。

4. **エビングハウスの忘却曲線 SRS自動復習 (F-04)**
   - 記憶定着率が下がるタイミング (1日後, 3日後, 7日後, 21日後) に自動で通知と復習タスクを発行 (`/api/cron/review`)。

5. **弱点分析 & 復習問題の自動再生成 (F-05)**
   - 誤答傾向（文法、漢字、語彙）を分析し、VAK特性に合わせた復習ドリルを自動生成。

6. **ITM Partner Web/App エコシステム連携**
   - 既存会話練習Webアプリ (LingoBot): `https://lingobot2.onrender.com/`
   - 既存QA練習アプリ (CheckKaiwa): `https://itm-kaiwa.github.io/CheckKaiwa_/`
   - ITM E-School Web: `https://eschool.itm.vn/`
   - ITM E-School Android App: Google Play Store Link

---

## 技術スタック (Tech Stack)
- **Frontend**: Next.js 14 (App Router) + TypeScript + React 18
- **Styling**: Tailwind CSS + Modern Dark Mode UI + Glassmorphism
- **AI LLM**: Google Gemini API (`gemini-2.0-flash`)
- **DB / Auth**: Supabase (PostgreSQL / Supabase Auth)
- **Audio / TTS**: Web Speech API / Groq TTS
- **Deployment & Cron**: Vercel + Vercel Cron

---

## ローカル開発手順 (Local Development)

```bash
# 1. 依存パッケージのインストール
npm install

# 2. 開発サーバーの起動
npm run dev

# 3. ブラウザでアクセス
http://localhost:3000
```
