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
  },
  {
    id: 'q_det_6',
    question: 'Q6. 新しい趣味を始めるとき、一番モチベーションが上がるのはどんなときですか？\n(Khi bắt đầu một sở thích mới, điều gì mang lại cho bạn nhiều động lực nhất?)',
    options: [
      { text: '必要な道具のデザインや、完成した作品のイメージを見たとき (Khi nhìn thấy thiết kế dụng cụ hoặc hình ảnh tác phẩm hoàn thiện)', type: 'visual' },
      { text: '楽しさを語る人の話を聞いたり、関連する音楽・音声に触れたとき (Khi nghe người khác kể về sự thú vị hoặc nghe âm thanh liên quan)', type: 'auditory' },
      { text: '実際に自分の手を動かしたり、体験レッスンで体を動かしたとき (Khi thực sự tự tay làm hoặc vận động trong buổi học thử)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_7',
    question: 'Q7. テスト勉強中、最も集中できる環境はどのような環境ですか？\n(Khi ôn thi, môi trường nào giúp bạn tập trung tốt nhất?)',
    options: [
      { text: '整理整頓された静かな部屋で、視覚的に邪魔なものがない環境 (Phòng yên tĩnh, gọn gàng, không có vật cản trở tầm nhìn)', type: 'visual' },
      { text: 'カフェの雑音や、勉強用のBGMがかすかに流れている環境 (Tiếng ồn ở quán cà phê hoặc có nhạc nền học tập nhẹ nhàng)', type: 'auditory' },
      { text: '歩き回りながら暗記したり、好きな姿勢でリラックスできる環境 (Môi trường có thể vừa đi dạo vừa học thuộc hoặc thư giãn với tư thế yêu thích)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_8',
    question: 'Q8. 初対面の人と会った後、最もよく覚えているのはその人のどの特徴ですか？\n(Sau khi gặp một người lần đầu tiên, đặc điểm nào của họ khiến bạn nhớ nhất?)',
    options: [
      { text: 'その人の顔、服装、または表情 (Khuôn mặt, trang phục hoặc nét mặt của họ)', type: 'visual' },
      { text: 'その人の声のトーン、話し方、または話した内容 (Giọng điệu, cách nói chuyện hoặc nội dung họ đã nói)', type: 'auditory' },
      { text: '握手したときの手の感触や、その人と一緒にいたときの自分の感情 (Cảm giác khi bắt tay hoặc cảm xúc của bản thân khi ở cùng họ)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_9',
    question: 'Q9. 旅行の計画を立てるとき、一番ワクワクするのはどの瞬間ですか？\n(Khi lên kế hoạch đi du lịch, khoảnh khắc nào làm bạn hào hứng nhất?)',
    options: [
      { text: 'パンフレットやInstagramで美しい景色の写真を見ているとき (Khi xem ảnh phong cảnh đẹp trên tờ rơi hoặc Instagram)', type: 'visual' },
      { text: '旅行先での会話や、現地の音楽、波の音などを想像しているとき (Khi tưởng tượng ra cuộc trò chuyện, âm nhạc địa phương hoặc tiếng sóng)', type: 'auditory' },
      { text: '現地でのアクティビティや食べ歩き、温泉に入る自分を想像しているとき (Khi tưởng tượng cảnh mình tham gia hoạt động, ăn uống hoặc tắm suối nước nóng)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_10',
    question: 'Q10. レストランでメニューを選ぶとき、どのように選びますか？\n(Khi chọn món ăn tại nhà hàng, bạn thường chọn bằng cách nào?)',
    options: [
      { text: 'メニューの写真を見て、一番美味しそうなものを選ぶ (Xem ảnh trên thực đơn và chọn món trông ngon nhất)', type: 'visual' },
      { text: '店員のおすすめを聞いたり、料理の説明文を頭で読み上げる (Nghe nhân viên giới thiệu hoặc nhẩm đọc phần mô tả món ăn)', type: 'auditory' },
      { text: '今の自分が食べたい「食感」や「ボリューム」の感覚で選ぶ (Chọn theo cảm giác về "độ dai/mềm" hoặc "khẩu phần" mà mình muốn ăn lúc đó)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_11',
    question: 'Q11. 日本語の単語を暗記するとき、よくやってしまうクセは何ですか？\n(Khi học thuộc từ vựng tiếng Nhật, thói quen bạn thường làm là gì?)',
    options: [
      { text: '単語の形や、書かれているノートの位置を思い浮かべる (Nhớ lại hình dáng chữ hoặc vị trí từ đó được viết trong vở)', type: 'visual' },
      { text: '単語の発音を何度もブツブツと口に出してつぶやく (Lẩm nhẩm phát âm của từ đó nhiều lần trong miệng)', type: 'auditory' },
      { text: '空中や机の上で、指を使って何度も漢字を書いてみる (Dùng ngón tay viết chữ Hán nhiều lần trong không trung hoặc trên bàn)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_12',
    question: 'Q12. 悲しい気持ちになったとき、一番効果的なリフレッシュ方法は何ですか？\n(Khi cảm thấy buồn, cách giải tỏa nào hiệu quả nhất với bạn?)',
    options: [
      { text: '泣ける映画を見たり、美しい風景の画像を見て気分を切り替える (Xem phim cảm động hoặc ảnh phong cảnh đẹp để thay đổi tâm trạng)', type: 'visual' },
      { text: '誰かに話を聞いてもらったり、元気が出る音楽を聴く (Nhờ ai đó lắng nghe mình nói hoặc nghe nhạc sôi động)', type: 'auditory' },
      { text: 'ジョギングをしたり、お風呂に入って体を温めたりする (Chạy bộ hoặc tắm nước nóng để làm ấm cơ thể)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_13',
    question: 'Q13. 道に迷ったとき、最初に取る行動は何ですか？\n(Khi bị lạc đường, hành động đầu tiên của bạn là gì?)',
    options: [
      { text: 'スマホで地図アプリを開き、現在地と周囲の建物を見比べる (Mở ứng dụng bản đồ, so sánh vị trí hiện tại với các tòa nhà xung quanh)', type: 'visual' },
      { text: '近くにいる人に「駅はどちらですか」と尋ねる (Hỏi người qua đường: "Nhà ga ở hướng nào vậy ạ?")', type: 'auditory' },
      { text: 'とにかく自分の勘を信じて、歩きながら道を探る (Tin vào trực giác, cứ vừa đi vừa mò đường)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_14',
    question: 'Q14. 子供の頃、一番得意だったことは何ですか？\n(Khi còn nhỏ, bạn giỏi nhất việc gì?)',
    options: [
      { text: 'お絵かき、パズル、またはブロックで形を作ること (Vẽ tranh, xếp hình puzzle hoặc xếp khối)', type: 'visual' },
      { text: '歌を歌ったり、人の真似をして喋ること (Ca hát hoặc bắt chước giọng nói của người khác)', type: 'auditory' },
      { text: '外で走り回ったり、スポーツや体操をすること (Chạy nhảy ngoài trời, chơi thể thao hoặc tập thể dục)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_15',
    question: 'Q15. パソコンで作業をしていてエラーが出たとき、どう解決しますか？\n(Khi gặp lỗi lúc làm việc trên máy tính, bạn giải quyết thế nào?)',
    options: [
      { text: 'エラーメッセージを画面でしっかり読み、図解された解決策を探す (Đọc kỹ thông báo lỗi trên màn hình, tìm hướng dẫn có hình minh họa)', type: 'visual' },
      { text: 'コールセンターに電話するか、詳しい同僚に声をかけて聞く (Gọi điện cho tổng đài hoặc hỏi người đồng nghiệp thạo việc)', type: 'auditory' },
      { text: '解決するまでキーボードを叩き、色々な操作を試行錯誤する (Mày mò bấm bàn phím và thử nhiều thao tác cho đến khi giải quyết được)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_16',
    question: 'Q16. 長い物語や映画を思い出すとき、どのように記憶が蘇りますか？\n(Khi nhớ lại một câu chuyện hoặc bộ phim dài, ký ức của bạn hiện về thế nào?)',
    options: [
      { text: '印象的だったシーンが、映像や写真のように頭に浮かぶ (Những cảnh ấn tượng hiện lên trong đầu như một đoạn phim hoặc bức ảnh)', type: 'visual' },
      { text: '登場人物のセリフや、その時のBGMが耳の奥で再生される (Lời thoại nhân vật hoặc nhạc nền lúc đó phát lại trong tai)', type: 'auditory' },
      { text: '映画を見ていたときのドキドキした感情や、体の緊張感が蘇る (Cảm giác hồi hộp hoặc sự căng thẳng của cơ thể khi xem phim ùa về)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_17',
    question: 'Q17. クラスメイトの誕生日にプレゼントを贈るなら、何を重視しますか？\n(Khi tặng quà sinh nhật cho bạn cùng lớp, bạn chú trọng điều gì?)',
    options: [
      { text: '見た目が可愛くて、パッケージやラッピングが綺麗なもの (Món quà có vẻ ngoài dễ thương, bao bì và giấy gói đẹp mắt)', type: 'visual' },
      { text: 'メッセージカードを添えたり、「おめでとう」と伝える言葉 (Thiệp chúc mừng đính kèm hoặc lời nói "Chúc mừng sinh nhật")', type: 'auditory' },
      { text: '肌触りが良いものや、実際に使って心地よいもの (Món quà có chất liệu mềm mại hoặc mang lại cảm giác dễ chịu khi dùng thực tế)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_18',
    question: 'Q18. 日本語の文法が理解できないとき、どのような説明が一番しっくりきますか？\n(Khi không hiểu ngữ pháp tiếng Nhật, cách giải thích nào hợp với bạn nhất?)',
    options: [
      { text: '色分けされた構造図や表を使った説明 (Cách giải thích sử dụng sơ đồ cấu trúc hoặc bảng được tô màu)', type: 'visual' },
      { text: '「こういう場面でこう言うんだよ」と、声のトーンを交えた説明 (Cách giải thích kèm theo giọng điệu: "Trong tình huống này thì nói thế này...")', type: 'auditory' },
      { text: '実際に自分もその文法を使って、ロールプレイしてみる説明 (Cách giải thích bằng việc tự mình dùng ngữ pháp đó để đóng vai)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_19',
    question: 'Q19. お気に入りのカフェを選ぶ基準は何ですか？\n(Tiêu chí chọn quán cà phê yêu thích của bạn là gì?)',
    options: [
      { text: '内装がおしゃれで、写真映えする美しい空間かどうか (Nội thất phong cách, không gian đẹp lên ảnh)', type: 'visual' },
      { text: '静かすぎずうるさすぎない、リラックスできる音楽や音があるか (Không quá ồn cũng không quá im lặng, có âm nhạc thư giãn)', type: 'auditory' },
      { text: 'ソファの座り心地が良く、居心地の良い温度かどうか (Ghế sofa ngồi êm ái và nhiệt độ trong quán dễ chịu)', type: 'kinesthetic' }
    ]
  },
  {
    id: 'q_det_20',
    question: 'Q20. 新しい家具を組み立てるとき、どうやって進めますか？\n(Khi lắp ráp đồ nội thất mới, bạn sẽ làm thế nào?)',
    options: [
      { text: '説明書の図や完成図をじっくり見てから始める (Nhìn kỹ hình vẽ trong sách hướng dẫn hoặc hình ảnh hoàn thiện rồi mới bắt đầu)', type: 'visual' },
      { text: '手順を声に出して読み上げながら進める (Vừa làm vừa đọc to các bước thực hiện)', type: 'auditory' },
      { text: 'とりあえず部品を手に取り、手を動かしながら考える (Cứ cầm linh kiện lên, vừa lắp ráp vừa suy nghĩ)', type: 'kinesthetic' }
    ]
  }
];


export function calculateVakResult(answers: { questionId: string; selectedType: VakType }[]): VakResult {
  const scores = { visual: 0, auditory: 0, kinesthetic: 0 };
  answers.forEach((ans) => {
    scores[ans.selectedType] += 1;
  });

  const maxVal = Math.max(scores.visual, scores.auditory, scores.kinesthetic);
  const primaryVak: VakType =
    scores.visual === maxVal
      ? 'visual'
      : scores.auditory === maxVal
      ? 'auditory'
      : 'kinesthetic';

  // Check for tie / hybrid (if two or more share the maximum value)
  const equalToMax = Object.keys(scores).filter((key) => scores[key as VakType] === maxVal);
  const isHybrid = equalToMax.length > 1;

  let hybridLabel: string | undefined = undefined;
  if (isHybrid) {
    const labels = equalToMax.map((v) => {
      if (v === 'visual') return '視覚 (V)';
      if (v === 'auditory') return '聴覚 (A)';
      return '身体感覚 (K)';
    });
    hybridLabel = `複合タイプ: ${labels.join(' + ')}`;
  }

  return {
    primaryVak,
    scores,
    isHybrid,
    hybridLabel,
  };
}

export function getRandomizedQuestions(questions: VakQuestion[]): VakQuestion[] {
  return questions.map((q) => {
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    return {
      ...q,
      options: shuffledOptions,
    };
  });
}
