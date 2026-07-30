import { VakType } from '@/data/vak-questions';

export const VAK_SYSTEM_PROMPTS: Record<VakType, string> = {
  visual: "Markdownの表や図解、箇条書きを多用し、重要語句を太字や色分け表記で目立たせて視覚的に整理して解説してください。またイメージが湧くイラスト表現プロンプトも提示してください。",
  auditory: "対話調（話しかけるスタイル）で出力し、発音のコツや音の連結（リエゾン）・アクセント・ルビを解説し、声に出す音読やシャドーイングの指示を含めてください。",
  kinesthetic: "具体的な身振り手振りの指示や、室内を歩くなどのフィジカルタスク指示、感情・空気感と連動させたロールプレイ問題を含めて体験的に解説してください。",
};

export interface GeneratedVakLesson {
  topic: string;
  vakType: VakType;
  contentMarkdown: string;
  keyVocabulary: { word: string; reading: string; meaning: string }[];
  visualDiagram?: string;
  auditoryDialogue?: { speaker: string; text: string; audioNote: string }[];
  kinestheticAction?: string;
  practiceQuestions: { question: string; options: string[]; answerIndex: number; hint: string }[];
}

export function getMockVakLesson(topic: string, vakType: VakType): GeneratedVakLesson {
  if (vakType === 'visual') {
    return {
      topic,
      vakType: 'visual',
      contentMarkdown: `### 視覚学習モデル: ${topic}

| 項目 | 日本語 | ベトナム語意味 | 視覚イメージ |
|---|---|---|---|
| 1 | **${topic}の基礎** | Cơ bản | 🟦 青いノートの図形 |
| 2 | **ポイント文法** | Cấu trúc ngữ pháp | ➔ 矢印フローチャート |

#### 📊 タイムライン解説
1. **ステップ1**: 文頭の助詞に注目（**は**・**が**の違い）
2. **ステップ2**: 述語の形を確認（**〜です** / **〜ます**）
3. **ステップ3**: 色分けされた文法カードで丸暗記！`,
      keyVocabulary: [
        { word: '学習', reading: 'がくしゅう', meaning: 'Học tập' },
        { word: '視覚', reading: 'しかく', meaning: 'Thị giác' },
      ],
      visualDiagram: '[文頭 (主語)] --(助詞: は)--> [述語 (結論)]',
      practiceQuestions: [
        {
          question: '「視覚優位」の学習者に適した方法はどれですか？',
          options: ['表や図解で確認する', '何度も耳で聞く', '部屋を歩き回る'],
          answerIndex: 0,
          hint: '文字や色の強調がポイントです。',
        },
      ],
    };
  } else if (vakType === 'auditory') {
    return {
      topic,
      vakType: 'auditory',
      contentMarkdown: `### 聴覚学習モデル: ${topic}

「こんにちは！声に出して一緒に練習しましょう。リズムとアクセントが命です！」

#### 🗣️ 対話型シャドーイング練習
- **Aさん**: ${topic}について教えてください！
- **Bさん**: はい！まず耳で音を聞いて、そのままリピートしてみましょう。

> 💡 **発音のコツ**: リエゾン（音の連結）に注意。「${topic}」は平坦なアクセントでリズム良く発音します。`,
      keyVocabulary: [
        { word: '発音', reading: 'はつおん', meaning: 'Phát âm' },
        { word: '聴覚', reading: 'ちょうかく', meaning: 'Thính giác' },
      ],
      auditoryDialogue: [
        { speaker: '先生', text: `みなさん、${topic}の音読を始めます！`, audioNote: '明るいトーンで発音' },
        { speaker: '生徒', text: 'はい！大きな声で繰り返します！', audioNote: 'シャドーイング' },
      ],
      practiceQuestions: [
        {
          question: '「聴覚優位」の学習者が一番覚えられる方法は？',
          options: ['図を見る', '声に出して耳で聞く', '手で何度も書く'],
          answerIndex: 1,
          hint: '音の響きを意識しましょう。',
        },
      ],
    };
  } else {
    return {
      topic,
      vakType: 'kinesthetic',
      contentMarkdown: `### 身体感覚学習モデル: ${topic}

✋ **立ち上がってジェスチャー付きで練習しましょう！**

1. **アクション1**: 右手を大きく挙げて「${topic}！」と叫ぶ
2. **アクション2**: 実際に部屋の中を1往復歩きながら文を音読する
3. **ロールプレイ**: 自分が主人公になった気分で感情を込めて表現してみよう！`,
      keyVocabulary: [
        { word: '体験', reading: 'たいけん', meaning: 'Trải nghiệm' },
        { word: '身体感覚', reading: 'しんたいかんかく', meaning: 'Xúc giác / Vận動' },
      ],
      kinestheticAction: '👉 右手で「○」、左手で「×」を作りながら体全体で文法を表現してください！',
      practiceQuestions: [
        {
          question: '「身体感覚優位」の学習に最適なアプローチは？',
          options: ['黙読する', '講義を静かに聞く', '身振り手振りとロールプレイ'],
          answerIndex: 2,
          hint: '体全体の動きと感情がカギです。',
        },
      ],
    };
  }
}
