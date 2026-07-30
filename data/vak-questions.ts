'use client';

export type VakType = 'visual' | 'auditory' | 'kinesthetic';

export interface VakOption {
  text: string; // Bilingual (JA + VN)
  type: VakType;
}

export interface VakQuestion {
  id: string;
  question: string; // Bilingual (JA + VN)
  options: VakOption[];
}

export interface VakResult {
  primaryVak: VakType;
  scores: {
    visual: number;
    auditory: number;
    kinesthetic: number;
  };
  isHybrid: boolean;
  hybridLabel?: string;
}

export const QUICK_VAK_QUESTIONS: VakQuestion[] = [
  {
    id: 'q_quick_1',
    question: 'Q1. 新しい単語を覚えるとき、どの方法が一番覚えやすいですか？\n(Khi học từ vựng mới, phương pháp nào bạn thấy dễ nhớ nhất?)',
    options: [
      { text: '単語カードの文字や絵を目で見る (Nhìn bằng mắt các chữ hoặc hình ảnh trên thẻ từ)', type: 'visual' },
      { text: '声に出して発音したり、CDの音声を聞く (Phát âm thành tiếng hoặc nghe âm thanh đĩa CD)', type: 'auditory' },
      { text: '手で何度もノートに書いたり、ジェスチャーを交える (Viết đi viết lại nhiều lần hoặc kết hợp cử chỉ điệu bộ)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_quick_2',
    question: 'Q2. 道を説明するとき、どのように説明しますか？\n(Khi chỉ đường cho người khác, bạn thường giải thích thế nào?)',
    options: [
      { text: '地図を描いたり、目印になる建物の特徴を伝える (Vẽ bản đồ hoặc miêu tả đặc điểm tòa nhà làm mốc)', type: 'visual' },
      { text: '「信号を右に曲がって…」と言葉で詳しく教える (Giải thích chi tiết bằng lời nói: "rẽ phải ở đèn xanh đèn đỏ...")', type: 'auditory' },
      { text: '一緒について行って案内したり、体を使って方向を指し示す (Đi cùng để dẫn đường hoặc dùng cơ thể chỉ hướng)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_quick_3',
    question: 'Q3. 講義や授業中、どのようにノートを取りますか？\n(Trong giờ học hoặc bài giảng, bạn ghi chép như thế nào?)',
    options: [
      { text: '色ペンを使い分け、図や矢印をたくさん描く (Dùng nhiều màu bút, vẽ nhiều hình vẽ và mũi tên)', type: 'visual' },
      { text: '先生の言葉をそのまま書き取ったり、話を聞くことに集中する (Ghi chép nguyên văn lời giáo viên hoặc tập trung nghe giảng)', type: 'kinesthetic' }, // adjusted to fit standard VAK distribution
      { text: 'キーワードだけ書いて、あとは実際に手を動かして練習する (Chỉ viết từ khóa, sau đó thực hành bằng tay)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_quick_4',
    question: 'Q4. 買い物をするとき、決定的な決め手は何ですか？\n(Khi mua sắm, yếu tố quyết định lựa chọn của bạn là gì?)',
    options: [
      { text: '見た目のデザインや色、第一印象 (Thiết kế bên ngoài, màu sắc hoặc ấn tượng đầu tiên)', type: 'visual' },
      { text: '口コミの評判や店員の説明、商品の音 (Đánh giá truyền miệng, lời giải thích của nhân viên hoặc âm thanh sản phẩm)', type: 'auditory' },
      { text: '実際に触った時の手触りや使い心地 (Cảm giác cầm nắm, chất liệu hoặc sự tiện dụng khi trải nghiệm thực tế)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_quick_5',
    question: 'Q5. 暇な時間、どのような活動が好きですか？\n(Khi rảnh rỗi, bạn thích hoạt động nào nhất?)',
    options: [
      { text: '読書をしたり、映画やアニメを見る (Đọc sách, xem phim hoặc anime)', type: 'visual' },
      { text: '音楽を聞いたり、ラジオやポッドキャストを聞く (Nghe nhạc, nghe radio hoặc podcast)', type: 'auditory' },
      { text: 'スポーツをしたり、散歩や料理など体を動かす (Chơi thể thao, đi dạo hoặc nấu ăn)', type: 'kinesthetic' }
    ]
  }
];

export const DETAILED_VAK_QUESTIONS: VakQuestion[] = [
  {
    id: 'q_det_1',
    question: 'Q1. 日本語の会話を聞くとき、頭の中では何が起きていますか？\n(Khi nghe hội thoại tiếng Nhật, điều gì xảy ra trong đầu bạn?)',
    options: [
      { text: '場面の情景や登場人物の顔、文字が浮かぶ (Hiện lên cảnh tượng, khuôn mặt nhân vật hoặc mặt chữ)', type: 'visual' },
      { text: '相手の声のトーンや言葉の響きがそのまま響く (Âm điệu giọng nói của đối phương vang vọng lại)', type: 'auditory' },
      { text: '自分がその場で話しているような感覚や感情が動く (Cảm giác như chính mình đang nói hoặc có cảm xúc chuyển động)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_2',
    question: 'Q2. スマートフォンの新しい操作方法を覚えるとき、どうしますか？\n(Khi học cách sử dụng các thao tác mới trên điện thoại, bạn làm thế nào?)',
    options: [
      { text: '取扱説明書の図やオンラインの説明動画を見る (Xem hình vẽ trong sách hướng dẫn hoặc video giải thích trực tuyến)', type: 'visual' },
      { text: '詳しい人に操作手順を口頭で教えてもらう (Nhờ người hiểu rõ giải thích quy trình bằng lời nói)', type: 'auditory' },
      { text: 'とにかく自分で色々なボタンを触って操作してみる (Tự mình bấm thử các nút khác nhau để trải nghiệm)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_3',
    question: 'Q3. 漢字の「書き順」を最も覚えやすいのはどの方法ですか？\n(Phương pháp nào giúp bạn dễ nhớ thứ tự viết chữ Hán Kanji nhất?)',
    options: [
      { text: '書き順がアニメーションや色分けされた図を見る (Xem ảnh động hoặc sơ đồ tô màu thứ tự các nét)', type: 'visual' },
      { text: '「横、縦、はらい…」と書き順を口で唱えながら覚える (Vừa đọc to "ngang, dọc, phẩy..." vừa ghi nhớ)', type: 'auditory' },
      { text: '指先で何度も空書き（空中書き）をして体で覚える (Dùng ngón tay viết đi viết lại trong không trung để quen tay)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_4',
    question: 'Q4. プレゼンテーションを見るとき、最も注目する部分はどこですか？\n(Khi xem một bài thuyết trình, bạn chú ý nhất đến phần nào?)',
    options: [
      { text: 'スライドのデザイン、グラフ、視覚的な資料 (Thiết kế slide, biểu đồ, tài liệu trực quan)', type: 'visual' },
      { text: '発表者の声の明瞭さ、話し方のリズムやトーン (Sự rõ ràng trong giọng nói, nhịp điệu và tông giọng người nói)', type: 'auditory' },
      { text: '発表者の身振り手振りや熱意、デモンストレーション (Cử chỉ điệu bộ, lòng nhiệt huyết hoặc phần thực hành minh họa)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_5',
    question: 'Q5. 語学学校のクラスで、一番居心地が良い席はどこですか？\n(Trong lớp học ngoại ngữ, vị trí ngồi nào bạn thấy thoải mái nhất?)',
    options: [
      { text: 'ホワイトボードや先生の表情がよく見える席 (Nơi nhìn rõ bảng viết và nét mặt của giáo viên)', type: 'visual' },
      { text: '先生や他の生徒の声が一番クリアに聞こえる席 (Nơi nghe rõ nhất giọng nói của thầy cô và các bạn)', type: 'auditory' },
      { text: '実技やペアワークなどで動き回りやすい端の席 (Ghế ngoài cùng dễ dàng di chuyển khi thực hành nhóm)', type: 'kinesthetic' }
    ]
  }
];
