import { VakType } from '@/data/vak-questions';
import { GoogleGenerativeAI } from '@google/generative-ai';

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
  const t = topic || 'Danh từ + です';
  
  if (vakType === 'visual') {
    return {
      topic: t,
      vakType: 'visual',
      contentMarkdown: `### 📖 Ngữ pháp: Danh từ + です / じゃありません\n\n**[です]** được dùng để khẳng định một sự thật, mang ý nghĩa "Là...". Dùng trong câu lịch sự.\n\n| Thể loại | Tiếng Nhật | Tiếng Việt | Ghi chú hình ảnh |\n|---|---|---|---|\n| Khẳng định | N + **です** | Là N | 🟢 Dấu tích xanh |\n| Phủ định | N + **じゃありません** | Không phải là N | 🔴 Dấu X đỏ |\n| Câu hỏi | N + **ですか** | Là N phải không? | ❓ Dấu hỏi chấm |\n\n#### 🎯 Ví dụ minh họa\n1. わたしは がくせい **です**。 (Tôi là học sinh)\n2. わたしは せんせい **じゃありません**。 (Tôi không phải là giáo viên)\n3. あなたは がくせい **ですか**。 (Bạn có phải là học sinh không?)`,
      keyVocabulary: [
        { word: '学生 (がくせい)', reading: 'gakusei', meaning: 'Học sinh' },
        { word: '先生 (せんせい)', reading: 'sensei', meaning: 'Giáo viên' },
      ],
      visualDiagram: "```mermaid\ngraph LR\n  A(Chủ ngữ: わたし) --> B{Trợ từ: は}\n  B --> C[Danh từ: がくせい]\n  C --> D((Khẳng định: です))\n  C --> E((Phủ định: じゃありません))\n  style A fill:#dbeafe,stroke:#3b82f6\n  style B fill:#fef3c7,stroke:#f59e0b\n  style C fill:#dcfce3,stroke:#22c55e\n  style D fill:#fee2e2,stroke:#ef4444\n  style E fill:#f3e8ff,stroke:#a855f7\n```\n\n> 💡 **Chú ý**: Trong tiếng Nhật, động từ hoặc từ chỉ trạng thái (như です) luôn nằm ở cuối câu!",
      practiceQuestions: [
        {
          question: 'Phủ định của "です" là gì?',
          options: ['ですか', 'じゃありません', 'でした'],
          answerIndex: 1,
          hint: 'Phủ định thường đi kèm với じゃありません.',
        },
      ],
    };
  } else if (vakType === 'auditory') {
    return {
      topic: t,
      vakType: 'auditory',
      contentMarkdown: `### 🎧 Học qua Âm thanh: Danh từ + です\n\n"Xin chào! Hãy cùng lắng nghe và đọc to theo nhịp điệu nhé. Ngữ điệu rất quan trọng!"\n\n#### 🗣️ Luyện tập Shadowing (Nghe và lặp lại)\n- **Học viên**: Ngữ pháp "です" dùng như thế nào ạ?\n- **Giáo viên**: Rất đơn giản! Bạn hãy nghe cách cô phát âm và lặp lại nhé. Chú ý lên giọng ở cuối câu hỏi!\n\n> 💡 **Mẹo phát âm**: Với câu hỏi "ですか" (Desu ka?), chữ "ka" luôn được đọc cao giọng lên ở cuối câu!`,
      keyVocabulary: [
        { word: '私 (わたし)', reading: 'watashi', meaning: 'Tôi' },
        { word: 'はい / いいえ', reading: 'hai / iie', meaning: 'Vâng / Không' },
      ],
      auditoryDialogue: [
        { speaker: 'Giáo viên', text: 'わたしは がくせい です。(Tôi là học sinh)', audioNote: 'Đọc đều giọng, dứt khoát ở chữ desu.' },
        { speaker: 'Học sinh', text: 'わたしは がくせい です。', audioNote: 'Lặp lại tự tin' },
        { speaker: 'Giáo viên', text: 'あなたは がくせい ですか？ ⤴️', audioNote: 'Lên giọng ở cuối câu.' },
      ],
      practiceQuestions: [
        {
          question: 'Khi đọc câu hỏi "ですか", bạn cần chú ý điều gì?',
          options: ['Đọc nhỏ giọng lại', 'Lên giọng ở chữ "か"', 'Kéo dài chữ "す"'],
          answerIndex: 1,
          hint: 'Câu hỏi trong tiếng Nhật thường lên giọng ở cuối.',
        },
      ],
    };
  } else {
    return {
      topic: t,
      vakType: 'kinesthetic',
      contentMarkdown: `### 🏃 Học qua Vận động: Danh từ + です\n\n✋ **Hãy đứng lên và sử dụng ngôn ngữ cơ thể nào!**\n\n1. **Khẳng định (です)**: Hai tay tạo thành hình chữ O (Đúng) trước ngực, gật đầu tự tin.\n2. **Phủ định (じゃありません)**: Hai tay bắt chéo tạo hình chữ X, lắc đầu.\n3. **Câu hỏi (ですか)**: Nghiêng đầu, một tay đỡ cằm như đang suy nghĩ.\n\n> 💡 Hãy thực hành vừa làm động tác vừa đọc to câu tiếng Nhật để cơ bắp của bạn ghi nhớ ngữ pháp này!`,
      keyVocabulary: [
        { word: 'です', reading: 'desu', meaning: 'Là (Khẳng định)' },
        { word: 'じゃありません', reading: 'ja arimasen', meaning: 'Không phải là (Phủ định)' },
      ],
      kinestheticAction: '👉 Hãy đứng trước gương: Trỏ tay vào mình và nói "わたしは (Tên bạn) です", sau đó cười tươi!',
      practiceQuestions: [
        {
          question: 'Hành động nào giúp nhớ thể phủ định "じゃありません" tốt nhất?',
          options: ['Ngồi im suy nghĩ', 'Tạo hình chữ X bằng tay và lắc đầu', 'Viết ra giấy 10 lần'],
          answerIndex: 1,
          hint: 'Sử dụng cơ thể để tạo sự liên kết với ý nghĩa phủ định.',
        },
      ],
    };
  }
}

export async function generateGeminiVakLesson(topic: string, vakType: VakType): Promise<GeneratedVakLesson> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return getMockVakLesson(topic, vakType);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });
    const systemPrompt = VAK_SYSTEM_PROMPTS[vakType];
    const prompt = `${systemPrompt}\n\nトピック: "${topic}" についての日本語学習レッスンを生成してください。`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    const mock = getMockVakLesson(topic, vakType);
    return {
      ...mock,
      contentMarkdown: responseText || mock.contentMarkdown,
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return getMockVakLesson(topic, vakType);
  }
}
