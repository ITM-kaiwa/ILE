export type VakType = 'visual' | 'auditory' | 'kinesthetic';

export interface VakOption {
  text: string;
  type: VakType;
}

export interface VakQuestion {
  id: string;
  question: string;
  options: VakOption[];
}

export const QUICK_VAK_QUESTIONS: VakQuestion[] = [
  {
    id: 'q_quick_1',
    question: '新しい日本語の単語を覚えるとき、一番効果的な方法はどれですか？',
    options: [
      { text: '単語カードや図解で単語の形やイメージを何度も見る', type: 'visual' },
      { text: '声に出して繰り返し発音し、耳で音を記憶する', type: 'auditory' },
      { text: '実際に手で何度も書いて、体でリズムを覚える', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_quick_2',
    question: '文法の説明を受けるとき、一番理解しやすい形式はどれですか？',
    options: [
      { text: '表や図で整理されたテキスト解説を読む', type: 'visual' },
      { text: '先生やAI対話による口頭の解説を聞く', type: 'auditory' },
      { text: '例文の状況を実際に演じてみたり手振りを交えたりする', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_quick_3',
    question: 'テスト前に復習するとき、どうやって勉強しますか？',
    options: [
      { text: 'ハイライトしたノートや色分けした教科書を眺める', type: 'visual' },
      { text: '録音した音声を聞くか、友達と口頭で問題を出しためしあう', type: 'auditory' },
      { text: '問題を解きながら部屋を歩いたり、身振りで再現したりする', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_quick_4',
    question: '道の案内を受けるとき、どうされると理解しやすいですか？',
    options: [
      { text: '地図や絵を描いて見せてもらう', type: 'visual' },
      { text: '「右に行って、次に左」と言葉で詳しく説明してもらう', type: 'auditory' },
      { text: '「一緒に行ってみましょう」と歩きながら案内される', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_quick_5',
    question: 'リラックスしているとき、頭に浮かびやすいものはどれですか？',
    options: [
      { text: '景色や本・写真などの鮮明な画像・色', type: 'visual' },
      { text: '音楽や会話のフレーズ、声のトーン', type: 'auditory' },
      { text: '温かさや運動の感覚、心地よい身体の感覚', type: 'kinesthetic' },
    ],
  },
];

export const DETAILED_VAK_QUESTIONS: VakQuestion[] = [
  ...QUICK_VAK_QUESTIONS,
  {
    id: 'q_det_6',
    question: '漢字を覚えるとき、どの部分に注目しますか？',
    options: [
      { text: '部首や画数の全体の形のバランス', type: 'visual' },
      { text: '漢字の音読み・訓読みの声に出した響き', type: 'auditory' },
      { text: '書き順に従って手を動かす筆順のリズム', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_7',
    question: '何かを集中して考えているとき、どのような行動をとりますか？',
    options: [
      { text: '一点を見つめたり、頭の中に図や文字を描いたりする', type: 'visual' },
      { text: '独り言を言ったり、口の中でつぶやいたりする', type: 'auditory' },
      { text: 'ペンを回したり、貧乏ゆすりをしたり体を動かしたりする', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_8',
    question: '会話練習をするとき、最も自然に感じる練習方法は？',
    options: [
      { text: 'スクリプト（文字テキスト）を見ながら対話する', type: 'visual' },
      { text: '相手の発音やアクセントを真似してシャドーイングする', type: 'auditory' },
      { text: '身振り手振りや表情をつけて実際に演じるロールプレイング', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_9',
    question: '間違えた問題を復習するとき、一番頭に入るのは？',
    options: [
      { text: '赤ペンで正解の理由と解説をきれいにまとめたノートを見る', type: 'visual' },
      { text: '間違えた理由をAIや先生に声で説明してもらう', type: 'auditory' },
      { text: '正しい文を何度も声に出しながらジェスチャーを付けて動作確認する', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_10',
    question: '新しい家電製品を買ったとき、どうやって使い方を覚えますか？',
    options: [
      { text: '説明書のマニュアルや図解をしっかり読む', type: 'visual' },
      { text: '誰かに使い方を声で教えてもらう', type: 'auditory' },
      { text: 'まず実際にボタンを押して触りながら覚える', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_11',
    question: '日本語のリスニング問題を聞くとき、頭の中でどう処理していますか？',
    options: [
      { text: '話されている場面の映像やイラストを頭に浮かべる', type: 'visual' },
      { text: '聞こえた音声をそのまま頭の中でリピート再生する', type: 'auditory' },
      { text: '話し手の気持ちや状況の緊張感・体感を想像する', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_12',
    question: '長時間の勉強で集中力が切れたとき、どうリフレッシュしますか？',
    options: [
      { text: '綺麗な写真やビデオを見る', type: 'visual' },
      { text: '好きな音楽やポッドキャストを聞く', type: 'auditory' },
      { text: 'ストレッチをしたり外を歩いたり体を動かす', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_13',
    question: '文章を書くとき、何に注意しますか？',
    options: [
      { text: '改行や段落の見た目の綺麗さ、読みやすさ', type: 'visual' },
      { text: '声に出して読んだ時の文章のリズムや語感', type: 'auditory' },
      { text: '感情や事実が相手に響くかどうか', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_14',
    question: '先生の講義を受けるとき、印象に残るのは？',
    options: [
      { text: 'スライドや黒板に書かれた図やテキスト', type: 'visual' },
      { text: '先生の話し方のトーンや面白いエピソード', type: 'auditory' },
      { text: '体験型のグループワークや実践演習', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_15',
    question: '人と話しているとき、相手のどこをよく見ますか/感じますか？',
    options: [
      { text: '相手の目や表情、服装や立ち姿', type: 'visual' },
      { text: '相手の声のトーンや話し方のスピード', type: 'auditory' },
      { text: '相手から伝わる雰囲気や握手などの触感・距離感', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_16',
    question: '忘れた単語を思い出そうとするとき、どうしますか？',
    options: [
      { text: '教科書のページのどこに書いてあったか目の残像をたどる', type: 'visual' },
      { text: 'その単語が含まれるフレーズの音の響きを思い出す', type: 'auditory' },
      { text: 'その単語を使ったときの状況や自分の動作を再現してみる', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_17',
    question: '自分の強みだと感じる能力はどれですか？',
    options: [
      { text: '顔や地図、デザインをすぐ覚える視覚記憶', type: 'visual' },
      { text: '人の名前や歌の歌詞、会話の内容を覚える聴覚記憶', type: 'auditory' },
      { text: 'スポーツやダンス、手先を使う作業などの身体記憶', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_18',
    question: 'プレゼンテーションを作成するとき、一番力を入れるのは？',
    options: [
      { text: 'スライドの配色やグラフィック、見栄え', type: 'visual' },
      { text: '発表時のセリフのスムーズさや言葉選び', type: 'auditory' },
      { text: '聴衆を惹きつける立ち振る舞いやデモンストレーション', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_19',
    question: 'イライラしているとき、どう感じることが多いですか？',
    options: [
      { text: '部屋の散らかりや視界に入る雑多なものが気になる', type: 'visual' },
      { text: '周囲の雑音や人の話し声が耳障りに感じる', type: 'auditory' },
      { text: '体が重く感じたり、じっとしていられなくなったりする', type: 'kinesthetic' },
    ],
  },
  {
    id: 'q_det_20',
    question: 'オンライン授業や学習アプリで最も嬉しい機能は？',
    options: [
      { text: 'カラフルで綺麗な図解とインタラクティブなアニメーション', type: 'visual' },
      { text: '高音質な音声読み上げ（TTS）や対話型オーディオ練習', type: 'auditory' },
      { text: '実際に操作したり体を使って解答したりするゲーム感覚の課題', type: 'kinesthetic' },
    ],
  },
];

export function getRandomizedQuestions(questions: VakQuestion[]): VakQuestion[] {
  return questions.map((q) => {
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    return {
      ...q,
      options: shuffledOptions,
    };
  });
}

export interface VakResult {
  primaryVak: VakType;
  isHybrid: boolean;
  hybridLabel?: string;
  scores: {
    visual: number;
    auditory: number;
    kinesthetic: number;
  };
  percentages: {
    visual: number;
    auditory: number;
    kinesthetic: number;
  };
}

export function calculateVakResult(answers: Record<string, VakType>): VakResult {
  const scores = { visual: 0, auditory: 0, kinesthetic: 0 };
  let total = 0;

  Object.values(answers).forEach((type) => {
    if (type && scores[type] !== undefined) {
      scores[type]++;
      total++;
    }
  });

  if (total === 0) {
    return {
      primaryVak: 'visual',
      isHybrid: false,
      scores: { visual: 0, auditory: 0, kinesthetic: 0 },
      percentages: { visual: 33, auditory: 33, kinesthetic: 34 },
    };
  }

  const percentages = {
    visual: Math.round((scores.visual / total) * 100),
    auditory: Math.round((scores.auditory / total) * 100),
    kinesthetic: Math.round((scores.kinesthetic / total) * 100),
  };

  const maxScore = Math.max(scores.visual, scores.auditory, scores.kinesthetic);
  const topTypes = (['visual', 'auditory', 'kinesthetic'] as VakType[]).filter(
    (t) => scores[t] === maxScore
  );

  const isHybrid = topTypes.length > 1;
  const primaryVak = topTypes[0];

  let hybridLabel = undefined;
  if (isHybrid) {
    const labelMap: Record<string, string> = {
      'visual': '視覚',
      'auditory': '聴覚',
      'kinesthetic': '身体感覚',
    };
    hybridLabel = `${topTypes.map((t) => labelMap[t]).join('・')} 混合タイプ`;
  }

  return {
    primaryVak,
    isHybrid,
    hybridLabel,
    scores,
    percentages,
  };
}
