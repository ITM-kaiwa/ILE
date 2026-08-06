import React from 'react';
import { VakType } from '@/data/vak-questions';
import { Eye, Volume2, Hand, Sparkles } from 'lucide-react';

interface VakExplanationProps {
  vakType: VakType;
}

export const VakExplanation: React.FC<VakExplanationProps> = ({ vakType }) => {
  return (
    <div className="space-y-6 text-left mt-6 bg-white p-6 rounded-2xl border border-amber-100 shadow-inner">
      {vakType === 'visual' && (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-indigo-800 flex items-center mb-2 text-lg border-b border-indigo-100 pb-2">
              <Eye className="w-5 h-5 mr-2" />
              【特性と学習法 / Đặc điểm & Phương pháp】
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-800 block mb-1">🇯🇵 目から入る情報（文字、画像、図、色など）の処理が得意なタイプです。</span>
              テキストや映像を写真のように頭の中でイメージとして記憶する傾向があります。
              <br/><br/>
              <span className="font-semibold text-slate-800 block mb-1">🇻🇳 Là kiểu người xử lý tốt thông tin qua thị giác (chữ viết, hình ảnh, biểu đồ, màu sắc).</span>
              Có xu hướng ghi nhớ văn bản hoặc video giống như một bức ảnh chụp trong đầu.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-indigo-800 mb-2">【主な長所 / Ưu điểm chính】</h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside ml-2">
              <li><strong>構造や綴りの把握が速い (Nắm bắt cấu trúc nhanh):</strong> 単語のスペルや文法構造を視覚的なパターンとして捉えて覚えるのが得意です。</li>
              <li><strong>テキスト情報の処理能力が高い (Xử lý chữ viết tốt):</strong> 読解（リーディング）や文字情報の理解において高い集中力を発揮します。</li>
              <li><strong>位置関係や配置で覚えられる (Ghi nhớ theo vị trí):</strong> 「参考書のページのどのあたりに書いてあったか」を映像的に思い出せます。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-indigo-800 mb-2">【適している学習法 / Phương pháp học phù hợp】</h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside ml-2">
              <li><strong>画像・イラスト付きの単語暗記:</strong> 単語の意味を日本語訳ではなく「画像イメージ」と直接結びつけて暗記します。(Học bằng hình ảnh)</li>
              <li><strong>色分けとレイアウトを活用したノート作成:</strong> 品詞ごとや文法要素ごとに色分けしたり、マインドマップ形式で視覚化します。(Sử dụng màu sắc và bố cục)</li>
              <li><strong>字幕付き動画の活用:</strong> 状況の映像と字幕が同時に表示される動画を視聴する方が文脈と表現を定着させやすくなります。(Xem video có phụ đề)</li>
              <li><strong>多読:</strong> 視覚的な文字量を増やすため、難易度を少し下げた本や記事を数多く読むアプローチが効果的です。(Đọc nhiều)</li>
            </ul>
          </div>
        </div>
      )}

      {vakType === 'auditory' && (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-emerald-800 flex items-center mb-2 text-lg border-b border-emerald-100 pb-2">
              <Volume2 className="w-5 h-5 mr-2" />
              【特性と学習法 / Đặc điểm & Phương pháp】
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-800 block mb-1">🇯🇵 耳から入る音（音声、リズム、言葉の響き）の処理が得意なタイプです。</span>
              文字を読むよりも、人が話す声を聞いたり、自身で声に出したりすることで理解が深まります。
              <br/><br/>
              <span className="font-semibold text-slate-800 block mb-1">🇻🇳 Là kiểu người xử lý tốt thông tin qua thính giác (âm thanh, nhịp điệu, âm vang).</span>
              Hiểu sâu hơn thông qua việc nghe người khác nói hoặc tự phát âm ra tiếng thay vì chỉ đọc chữ.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-emerald-800 mb-2">【主な長所 / Ưu điểm chính】</h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside ml-2">
              <li><strong>音の微細なニュアンスを聞き分ける (Phân biệt sắc thái âm thanh):</strong> 発音、アクセント、イントネーションの再現性が高く、正しい発音の習得スピードが速いです。</li>
              <li><strong>口頭での説明の理解力が高い (Hiểu giải thích bằng miệng tốt):</strong> 音声での解説や講師の講義を聞くだけで内容を素早く理解・記憶できます。</li>
              <li><strong>耳からの記憶保持力が高い (Trí nhớ âm thanh tốt):</strong> 音楽のフレーズを覚えるように、言葉のフレーズや文法パターンを音として記憶できます。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-emerald-800 mb-2">【適している学習法 / Phương pháp học phù hợp】</h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside ml-2">
              <li><strong>シャドーイング・音読:</strong> お手本音声を追いかけて発音する練習や、音声を聴きながら声に出す練習が極めて有効です。(Shadowing & Đọc to)</li>
              <li><strong>ポッドキャスト等の活用:</strong> 通勤・通学時などに音声コンテンツを繰り返し聴き込むスタイルが適しています。(Sử dụng Podcast/Audio)</li>
              <li><strong>対話型の会話・ディスカッション:</strong> 人と話し、実際の会話のやり取りを通じて表現を定着させます。(Hội thoại tương tác)</li>
              <li><strong>自分のスピーキングの録音確認:</strong> 自分が発音した音声を録音して聴き返すことで、文法上のミスや発音のズレに自発的に気づきやすくなります。(Ghi âm lại giọng nói)</li>
            </ul>
          </div>
        </div>
      )}

      {vakType === 'kinesthetic' && (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-orange-800 flex items-center mb-2 text-lg border-b border-orange-100 pb-2">
              <Hand className="w-5 h-5 mr-2" />
              【特性と学習法 / Đặc điểm & Phương pháp】
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-800 block mb-1">🇯🇵 「体験や感覚」を通じて物事を理解・記憶するタイプです。</span>
              体を動かす、触る、実際に体験する、感情を伴うことなどが得意で、じっと座ってテキストを読むだけでは集中力が続きにくい傾向があります。
              <br/><br/>
              <span className="font-semibold text-slate-800 block mb-1">🇻🇳 Là kiểu người hiểu và ghi nhớ thông qua "trải nghiệm và cảm giác".</span>
              Dễ dàng tiếp thu qua vận động, chạm, thực hành, cảm xúc, và thường khó duy trì sự tập trung nếu chỉ ngồi yên đọc sách.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-orange-800 mb-2">【主な長所 / Ưu điểm chính】</h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside ml-2">
              <li><strong>実践・体験を通じた記憶の固さ (Trí nhớ bền vững qua thực hành):</strong> 実際に使ったフレーズや、現場で試した単語を強く記憶します。</li>
              <li><strong>構音筋や身振り手振りとの連動が得意 (Khả năng kết hợp cơ thể):</strong> 口の動きやジェスチャーと結びつけて言語を体得できます。</li>
              <li><strong>即興性と応用力 (Khả năng ứng biến linh hoạt):</strong> 実際のシチュエーションに合わせた実践的な使い方を身体で覚えるため、対面コミュニケーションに強いです。</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-orange-800 mb-2">【適している学習法 / Phương pháp học phù hợp】</h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside ml-2">
              <li><strong>身振り手振りを交えたロールプレイ:</strong> 状況の感情や身振り手振りを伴って大げさに演じながら発声します。(Đóng vai kèm cử chỉ)</li>
              <li><strong>動きながらの学習:</strong> 部屋の中を歩き回りながら単語カードをめくる、散歩しながら音声教材を聴いてつぶやくなど。(Học khi vận động)</li>
              <li><strong>手書きによる書き写し:</strong> ノートにペンで「書く」という手先の運動感覚を通じて単語や文法を脳に定着させます。(Viết tay / Chép chính tả)</li>
              <li><strong>タスク完了型の体験型学習:</strong> ゲーム感覚で進められるアプリや、実際に料理のレシピを読みながら作るなどの行動を伴う学習。(Học qua trải nghiệm)</li>
            </ul>
          </div>
        </div>
      )}

      {/* Multi-sensory (Hybrid) Note */}
      <div className="pt-4 border-t border-slate-200 mt-6 bg-slate-50 p-4 rounded-xl border">
        <h4 className="font-bold text-amber-800 flex items-center mb-2">
          <Sparkles className="w-4 h-4 mr-2" />
          【効率を高める多覚的アプローチ / Tiếp cận đa giác quan】
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-semibold text-slate-800 block mb-1">🇯🇵 最も記憶が定着するのは「複数の感覚を組み合わせた」学習です。</span>
          一番得意な優位感覚をメインにしつつ、他の感覚も合わせたアプローチ（例：「文字と画像を見ながら」＋「声に出し」＋「手で書く」）をとるのが理想的です。
          <br/><br/>
          <span className="font-semibold text-slate-800 block mb-1">🇻🇳 Việc kết hợp nhiều giác quan sẽ mang lại tỷ lệ ghi nhớ cao nhất.</span>
          Hãy dùng giác quan ưu thế làm "cửa ngõ chính", đồng thời kết hợp các giác quan khác (VD: "Vừa nhìn hình và chữ" + "Vừa đọc to" + "Vừa viết tay") để đạt kết quả tối ưu.
        </p>
      </div>
    </div>
  );
};
