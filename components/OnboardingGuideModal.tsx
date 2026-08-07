'use client';

import React from 'react';
import { X, BookOpen, Brain, TrendingUp, CheckCircle, HelpCircle, Globe } from 'lucide-react';

interface OnboardingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingGuideModal: React.FC<OnboardingGuideModalProps> = ({ isOpen, onClose }) => {
  const [showVakInfo, setShowVakInfo] = React.useState(false);
  const [showRoadmap, setShowRoadmap] = React.useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
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
              VAKシステムへようこそ！このシステムは、あなたの「学習特性（VAK）
              <button 
                onClick={(e) => { e.stopPropagation(); setShowVakInfo(true); }}
                className="inline-flex items-center justify-center w-5 h-5 ml-1 mr-1 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition align-middle"
                title="VAKについて"
              >
                <HelpCircle className="w-3.5 h-3.5" />
              </button>
              」に合わせて最適な日本語学習を提供するプラットフォームです。
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
                  <button
                    onClick={() => setShowRoadmap(true)}
                    className="ml-2 px-3 py-1.5 bg-gradient-to-b from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white text-sm font-extrabold rounded-lg shadow-[0_4px_0_rgb(4,120,87)] hover:shadow-[0_2px_0_rgb(4,120,87)] hover:translate-y-[2px] transition-all animate-pulse duration-2000"
                  >
                    Lộ trình
                  </button>
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

            {/* Step 5 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-purple-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Globe className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-purple-100 bg-purple-50 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-purple-900 text-sm">STEP 5: 実践・文化 (Thực hành & Văn hóa)</h3>
                </div>
                <p className="text-slate-700 text-xs mt-2">
                  VAKサイトの後ろの方におかれている様々なツールやWebサイトを活用して日本の文化や、会話の練習が出来ます。<br/>
                  <span className="text-slate-500 mt-1 block">Tận dụng các công cụ và trang web được đặt ở phần cuối trang VAK để tìm hiểu văn hóa Nhật Bản và luyện tập hội thoại.</span>
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

      {/* Nested VAK Info Modal */}
      {showVakInfo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in"
          onClick={() => setShowVakInfo(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative border border-orange-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowVakInfo(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2 border-slate-100 flex items-center">
              <Brain className="w-5 h-5 text-orange-500 mr-2" />
              VAK（学習特性）とは？
            </h3>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>人はそれぞれ、情報を処理する際に得意な「感覚（VAK）」を持っています。</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center mr-2 shrink-0">V</span>
                  <div><strong>視覚 (Visual)</strong>: 図や絵、テキストを見ることで理解しやすいタイプ。</div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center mr-2 shrink-0">A</span>
                  <div><strong>聴覚 (Auditory)</strong>: 音声や説明を聞くこと、声に出すことで理解しやすいタイプ。</div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center mr-2 shrink-0">K</span>
                  <div><strong>身体感覚 (Kinesthetic)</strong>: 実際に書いたり、体を動かしたり、体験を通じて理解しやすいタイプ。</div>
                </li>
              </ul>
              <p className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                あなたに合ったアプローチで学習を進めることで、効率的に日本語を習得できます。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Nested Roadmap Modal */}
      {showRoadmap && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in"
          onClick={() => setShowRoadmap(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-emerald-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowRoadmap(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-emerald-900 text-center">
                【日本語学習ロードマップ：ゼロからN4へ】<br />
                <span className="text-lg text-emerald-700 font-medium mt-1 inline-block">【Lộ trình học tiếng Nhật: Từ số 0 đến N4】</span>
              </h2>

              <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-3">
                <p>ベトナムのみなさん、こんにちは！日本語ゼロレベルからJLPT N4合格までのロードマップをご紹介します。このロードマップは、みなさんがスムーズに日本語を習得し、日本での生活や仕事、留学といった夢に近づくためのステップをまとめています。一緒に頑張りましょう！</p>
                <p className="text-slate-500">Xin chào các bạn Việt Nam! Chúng tôi xin giới thiệu lộ trình học tiếng Nhật từ cấp độ 0 đến khi đạt chứng chỉ JLPT N4. Lộ trình này sẽ tóm tắt các bước giúp các bạn học tiếng Nhật một cách suôn sẻ, tiến gần hơn đến ước mơ sống, làm việc hoặc du học tại Nhật Bản. Chúng ta cùng cố gắng nhé!</p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img src="/roadmap.jpg" alt="Roadmap" className="w-full h-auto" />
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <h3 className="font-bold text-amber-900 text-lg mb-2">● STEP 1: 基礎固め<br /><span className="text-sm font-medium">● Bước 1: Nền móng vững chắc</span></h3>
                  <div className="text-sm text-slate-700 space-y-2">
                    <p>日本語学習の最初のドアは、文字と発音です。焦らず、楽しみながら身につけましょう。<br /><span className="text-slate-500">Cánh cửa đầu tiên của lộ trình là học các chữ cái tiếng Nhật (Hiragana, Katakana). Đừng vội vàng, hãy vừa học vừa vui nhé.</span></p>
                    <h4 className="font-bold mt-4">1. 文字と発音 (Chữ cái và phát âm)</h4>
                    <p>ひらがな・カタカナ: 書き順を練習し、声に出して発音しましょう。正しい発音を身につけることが、その後の学習を楽にします。シャドーイング（音声を真似すること）も効果的です。<br /><span className="text-slate-500">Hiragana・Katakana: Hãy luyện tập thứ tự các nét và phát âm thật to. Việc nắm vững phát âm đúng ngay từ đầu sẽ giúp việc học sau này dễ dàng hơn. Shadowing (nhại lại âm thanh) cũng rất hiệu quả.</span></p>
                    <p className="mt-2 text-indigo-700 font-medium">ベトナム人学習者へのアドバイス: ベトナム語は声調言語ですが、日本語は高低アクセント（イントネーション）です。正しい日本語のイントネーションを身につけるため、音声をよく聞いて真似をしましょう。<br /><span className="text-indigo-500 font-normal">Lời khuyên cho người học Việt Nam: Tiếng Việt là ngôn ngữ có thanh điệu, nhưng tiếng Nhật có trọng âm cao thấp. Để học đúng ngữ điệu tiếng Nhật, hãy lắng nghe thật kỹ và nhại lại theo âm thanh.</span></p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                  <h3 className="font-bold text-emerald-900 text-lg mb-2">● STEP 2: 初級I (基礎会話) (「みんなの日本語 初級 I」第1課から)<br /><span className="text-sm font-medium">● Bước 2: Tiếng Nhật sơ cấp I (Chào hỏi & Giới thiệu bản thân: Bắt đầu từ bài 1 của giáo trình "Minna no Nihongo")</span></h3>
                  <div className="text-sm text-slate-700 space-y-2">
                    <p>文字を覚えたら、いよいよ教科書を使って日本語を学びます。ここでは「みんなの日本語」を例にします。<br /><span className="text-slate-500">Sau khi học xong chữ cái, chúng ta sẽ bắt đầu học tiếng Nhật bằng giáo trình. Ở đây, chúng ta sẽ lấy "Minna no Nihongo" làm ví dụ.</span></p>
                    <h4 className="font-bold mt-4">2. 挨拶と自己紹介 (Chào hỏi & Giới thiệu bản thân)</h4>
                    <p>内容: 「おはようございます」「こんにちは」「はじめまして」「私は○○です」など、基本的な挨拶と自己紹介の文法を学びます。<br /><span className="text-slate-500">Nội dung: Học các câu chào hỏi và giới thiệu bản thân cơ bản như "Chào buổi sáng", "Chào buổi chiều", "Rất vui được gặp bạn", "Tôi là ○○".</span></p>
                    <p>目標: 初めて会った人と簡単な挨拶ができるようになります。<br /><span className="text-slate-500">Mục tiêu: Có thể chào hỏi đơn giản với người lần đầu gặp mặt.</span></p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-900 text-lg mb-2">● STEP 3: 初級I (基礎文法・語彙)<br /><span className="text-sm font-medium">● Bước 3: Ngữ pháp & Từ vựng căn bản (Tiếng Nhật sơ cấp I: Ngữ pháp & Từ vựng căn bản)</span></h3>
                  <div className="text-sm text-slate-700 space-y-2">
                    <h4 className="font-bold mt-4">3. 物の名前、数、動詞・形容詞の基礎 (Tên sự vật, số đếm, căn bản về động từ & tính từ)</h4>
                    <p>内容: 身の回りの物の名前や数の数え方、日常生活でよく使う動詞（食べる、行く、来るなど）や形容詞（大きい、きれい、美味しいなど）の使い方を学びます。<br /><span className="text-slate-500">Nội dung: Học tên các sự vật xung quanh, cách đếm số, và cách sử dụng các động từ (ăn, đi, đến,...) và tính từ (lớn, đẹp, ngon,...) thường dùng trong đời sống hàng ngày.</span></p>
                    <p>目標: 「昨日、レストランへ行きました」「このケーキは美味しいです」など、自分の行動や感じたことを伝えられるようになります。<br /><span className="text-slate-500">Mục tiêu: Có thể truyền đạt hành động hoặc cảm nhận của bản thân, ví dụ như "Hôm qua tôi đã đi nhà hàng", "Cái bánh này ngon".</span></p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
                  <h3 className="font-bold text-indigo-900 text-lg mb-2">● STEP 4: 初級II～中級入口（N5・N4レベル集中）<br /><span className="text-sm font-medium">● Bước 4: Sơ cấp II đến sơ trung cấp (Tập trung cấp độ N5・N4)</span></h3>
                  <div className="text-sm text-slate-700 space-y-2">
                    <p>「みんなの日本語 初級 II」に進み、より高度な表現を学びます。<br /><span className="text-slate-500">Tiến tới giáo trình "Minna no Nihongo Sơ cấp II" và học các biểu hiện cao cấp hơn.</span></p>
                    <h4 className="font-bold mt-4">4. 複雑な文法、漢字、JLPT合格 (Ngữ pháp phức tạp, Kanji, Thi đỗ JLPT)</h4>
                    <p>内容: て形・た形（動作の順序、状態、理由）、可能表現（〜ができる）、受身文（〜される）、使役文（〜させる）など、複雑な表現を学びます。常用漢字の学習も本格的に始めます。<br /><span className="text-slate-500">Nội dung: Học các biểu hiện phức tạp hơn như hình thức 'te'・'ta' (trình tự hành động, trạng thái, lý do), biểu hiện khả năng (có thể ~), câu bị động (~ bị/được), câu sai khiến (~ bắt/cho), v.v. Việc học Kanji (chữ Hán) thường dùng cũng được đẩy mạnh.</span></p>
                    <p>目標: 日常生活の様々な場面で、自分の考えや理由を説明できるようになります。<br /><span className="text-slate-500">Mục tiêu: Có thể giải thích suy nghĩ hoặc lý do của bản thân trong nhiều tình huống đời sống hàng ngày.</span></p>
                    <p className="mt-2 text-indigo-700 font-medium">ベトナム人学習者へのアドバイス: 漢字は、ベトナム語の単語の多くが漢字由来であることを利用すると、覚えやすくなります。<br /><span className="text-indigo-500 font-normal">Lời khuyên cho người học Việt Nam: Việc tận dụng điểm tương đồng giữa từ vựng Việt Nam (khoảng 70% là từ Hán-Việt) sẽ giúp học Kanji dễ dàng hơn.</span></p>
                    <h4 className="font-bold mt-4">JLPT:</h4>
                    <p>N5、そしてN4の試験に合格することを目指します。合格は大きな自信となり、基礎力の証明になります。<br /><span className="text-slate-500">JLPT: Đặt mục tiêu thi đỗ cấp độ N5 và sau đó là N4. Việc thi đỗ sẽ mang lại sự tự tin lớn và là minh chứng cho năng lực căn bản của bạn.</span></p>
                  </div>
                </div>

                <div className="bg-orange-50 p-5 rounded-xl border border-orange-200 shadow-sm text-center">
                  <h3 className="font-bold text-orange-800 text-lg mb-2">目標達成！</h3>
                  <p className="text-sm text-slate-700">N4を完了して、日本での生活や仕事、留学といった夢を実現するための強固な土台ができました。これからも焦らず、楽しみながら、日本での新しい生活を目指して進んでいきましょう！<br /><span className="text-slate-500 mt-2 block">Đạt mục tiêu! Hoàn thành N4, bạn đã có nền móng vững chắc để thực hiện ước mơ sống, làm việc hoặc du học tại Nhật Bản. Hãy tiếp tục tiến lên, không nôn nóng, vừa học vừa vui, hướng tới cuộc sống mới tại Nhật Bản!</span></p>
                </div>

              </div>
              <div className="pt-4 text-center">
                <button 
                  onClick={() => setShowRoadmap(false)}
                  className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition"
                >
                  閉じる / Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
