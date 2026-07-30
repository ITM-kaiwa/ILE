import { VakType } from '@/data/vak-questions';

export type PartOfSpeech = 'noun' | 'verb' | 'adjective-i' | 'adjective-na' | 'adverb' | 'expression' | 'particle';
export type SemanticCategory = 'people' | 'greeting' | 'school' | 'food' | 'time' | 'place' | 'action' | 'nature' | 'object' | 'adjective';

export interface MinnaVocabCard {
  id: string;
  lesson: number; // 1 to 50
  word: string;
  reading: string;
  romaji: string;
  meaningVn: string;
  meaningEn: string;
  partOfSpeech: PartOfSpeech;
  partOfSpeechName: string;
  semanticCategory: SemanticCategory;
  semanticCategoryName: string;
  vnjpclubUrl: string;
  vakHelp: {
    visual: string;
    auditory: string;
    kinesthetic: string;
  };
}

export const MINNA_VOCABULARY_CARDS: MinnaVocabCard[] = [
  {
    "id": "vocab_1",
    "lesson": 1,
    "word": "わたし",
    "reading": "わたし",
    "romaji": "watashi",
    "meaningVn": "Tôi",
    "meaningEn": "I",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「わたし (わたし)」➔ Tôi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「わたし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「わたし」の意味 (Tôi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_2",
    "lesson": 1,
    "word": "あなた",
    "reading": "あなた",
    "romaji": "anata",
    "meaningVn": "Bạn/Anh/Chị",
    "meaningEn": "you",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あなた (あなた)」➔ Bạn/Anh/Chị。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あなた」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あなた」の意味 (Bạn/Anh/Chị) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_3",
    "lesson": 1,
    "word": "あのひと",
    "reading": "あのひと",
    "romaji": "ano hito",
    "meaningVn": "Người kia",
    "meaningEn": "that person",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あのひと (あのひと)」➔ Người kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あのひと」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あのひと」の意味 (Người kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_4",
    "lesson": 1,
    "word": "みなさん",
    "reading": "みなさん",
    "romaji": "minasan",
    "meaningVn": "Các bạn/Mọi người",
    "meaningEn": "everyone",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「みなさん (みなさん)」➔ Các bạn/Mọi người。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「みなさん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「みなさん」の意味 (Các bạn/Mọi người) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_5",
    "lesson": 1,
    "word": "せんせい",
    "reading": "せんせい",
    "romaji": "sensei",
    "meaningVn": "Thầy/Cô giáo",
    "meaningEn": "teacher",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「せんせい (せんせい)」➔ Thầy/Cô giáo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「せんせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「せんせい」の意味 (Thầy/Cô giáo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_6",
    "lesson": 2,
    "word": "あなた",
    "reading": "あなた",
    "romaji": "anata",
    "meaningVn": "Bạn/Anh/Chị",
    "meaningEn": "you",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あなた (あなた)」➔ Bạn/Anh/Chị。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あなた」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あなた」の意味 (Bạn/Anh/Chị) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_7",
    "lesson": 2,
    "word": "あのひと",
    "reading": "あのひと",
    "romaji": "ano hito",
    "meaningVn": "Người kia",
    "meaningEn": "that person",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あのひと (あのひと)」➔ Người kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あのひと」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あのひと」の意味 (Người kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_8",
    "lesson": 2,
    "word": "みなさん",
    "reading": "みなさん",
    "romaji": "minasan",
    "meaningVn": "Các bạn/Mọi người",
    "meaningEn": "everyone",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「みなさん (みなさん)」➔ Các bạn/Mọi người。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「みなさん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「みなさん」の意味 (Các bạn/Mọi người) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_9",
    "lesson": 2,
    "word": "せんせい",
    "reading": "せんせい",
    "romaji": "sensei",
    "meaningVn": "Thầy/Cô giáo",
    "meaningEn": "teacher",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「せんせい (せんせい)」➔ Thầy/Cô giáo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「せんせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「せんせい」の意味 (Thầy/Cô giáo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_10",
    "lesson": 2,
    "word": "がくせい",
    "reading": "がくせい",
    "romaji": "gakusei",
    "meaningVn": "Học sinh/Sinh viên",
    "meaningEn": "student",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「がくせい (がくせい)」➔ Học sinh/Sinh viên。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「がくせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「がくせい」の意味 (Học sinh/Sinh viên) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_11",
    "lesson": 3,
    "word": "あのひと",
    "reading": "あのひと",
    "romaji": "ano hito",
    "meaningVn": "Người kia",
    "meaningEn": "that person",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あのひと (あのひと)」➔ Người kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あのひと」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あのひと」の意味 (Người kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_12",
    "lesson": 3,
    "word": "みなさん",
    "reading": "みなさん",
    "romaji": "minasan",
    "meaningVn": "Các bạn/Mọi người",
    "meaningEn": "everyone",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「みなさん (みなさん)」➔ Các bạn/Mọi người。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「みなさん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「みなさん」の意味 (Các bạn/Mọi người) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_13",
    "lesson": 3,
    "word": "せんせい",
    "reading": "せんせい",
    "romaji": "sensei",
    "meaningVn": "Thầy/Cô giáo",
    "meaningEn": "teacher",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「せんせい (せんせい)」➔ Thầy/Cô giáo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「せんせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「せんせい」の意味 (Thầy/Cô giáo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_14",
    "lesson": 3,
    "word": "がくせい",
    "reading": "がくせい",
    "romaji": "gakusei",
    "meaningVn": "Học sinh/Sinh viên",
    "meaningEn": "student",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「がくせい (がくせい)」➔ Học sinh/Sinh viên。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「がくせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「がくせい」の意味 (Học sinh/Sinh viên) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_15",
    "lesson": 3,
    "word": "かいしゃいん",
    "reading": "かいしゃいん",
    "romaji": "kaishain",
    "meaningVn": "Nhân viên công ty",
    "meaningEn": "company employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃいん (かいしゃいん)」➔ Nhân viên công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃいん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃいん」の意味 (Nhân viên công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_16",
    "lesson": 4,
    "word": "みなさん",
    "reading": "みなさん",
    "romaji": "minasan",
    "meaningVn": "Các bạn/Mọi người",
    "meaningEn": "everyone",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「みなさん (みなさん)」➔ Các bạn/Mọi người。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「みなさん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「みなさん」の意味 (Các bạn/Mọi người) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_17",
    "lesson": 4,
    "word": "せんせい",
    "reading": "せんせい",
    "romaji": "sensei",
    "meaningVn": "Thầy/Cô giáo",
    "meaningEn": "teacher",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「せんせい (せんせい)」➔ Thầy/Cô giáo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「せんせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「せんせい」の意味 (Thầy/Cô giáo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_18",
    "lesson": 4,
    "word": "がくせい",
    "reading": "がくせい",
    "romaji": "gakusei",
    "meaningVn": "Học sinh/Sinh viên",
    "meaningEn": "student",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「がくせい (がくせい)」➔ Học sinh/Sinh viên。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「がくせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「がくせい」の意味 (Học sinh/Sinh viên) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_19",
    "lesson": 4,
    "word": "かいしゃいん",
    "reading": "かいしゃいん",
    "romaji": "kaishain",
    "meaningVn": "Nhân viên công ty",
    "meaningEn": "company employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃいん (かいしゃいん)」➔ Nhân viên công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃいん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃいん」の意味 (Nhân viên công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_20",
    "lesson": 4,
    "word": "ぎんこういん",
    "reading": "ぎんこういん",
    "romaji": "ginkoin",
    "meaningVn": "Nhân viên ngân hàng",
    "meaningEn": "bank employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ぎんこういん (ぎんこういん)」➔ Nhân viên ngân hàng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ぎんこういん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ぎんこういん」の意味 (Nhân viên ngân hàng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_21",
    "lesson": 5,
    "word": "せんせい",
    "reading": "せんせい",
    "romaji": "sensei",
    "meaningVn": "Thầy/Cô giáo",
    "meaningEn": "teacher",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「せんせい (せんせい)」➔ Thầy/Cô giáo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「せんせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「せんせい」の意味 (Thầy/Cô giáo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_22",
    "lesson": 5,
    "word": "がくせい",
    "reading": "がくせい",
    "romaji": "gakusei",
    "meaningVn": "Học sinh/Sinh viên",
    "meaningEn": "student",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「がくせい (がくせい)」➔ Học sinh/Sinh viên。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「がくせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「がくせい」の意味 (Học sinh/Sinh viên) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_23",
    "lesson": 5,
    "word": "かいしゃいん",
    "reading": "かいしゃいん",
    "romaji": "kaishain",
    "meaningVn": "Nhân viên công ty",
    "meaningEn": "company employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃいん (かいしゃいん)」➔ Nhân viên công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃいん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃいん」の意味 (Nhân viên công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_24",
    "lesson": 5,
    "word": "ぎんこういん",
    "reading": "ぎんこういん",
    "romaji": "ginkoin",
    "meaningVn": "Nhân viên ngân hàng",
    "meaningEn": "bank employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ぎんこういん (ぎんこういん)」➔ Nhân viên ngân hàng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ぎんこういん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ぎんこういん」の意味 (Nhân viên ngân hàng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_25",
    "lesson": 5,
    "word": "いしゃ",
    "reading": "いしゃ",
    "romaji": "isha",
    "meaningVn": "Bác sĩ",
    "meaningEn": "doctor",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いしゃ (いしゃ)」➔ Bác sĩ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いしゃ」の意味 (Bác sĩ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_26",
    "lesson": 6,
    "word": "がくせい",
    "reading": "がくせい",
    "romaji": "gakusei",
    "meaningVn": "Học sinh/Sinh viên",
    "meaningEn": "student",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「がくせい (がくせい)」➔ Học sinh/Sinh viên。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「がくせい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「がくせい」の意味 (Học sinh/Sinh viên) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_27",
    "lesson": 6,
    "word": "かいしゃいん",
    "reading": "かいしゃいん",
    "romaji": "kaishain",
    "meaningVn": "Nhân viên công ty",
    "meaningEn": "company employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃいん (かいしゃいん)」➔ Nhân viên công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃいん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃいん」の意味 (Nhân viên công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_28",
    "lesson": 6,
    "word": "ぎんこういん",
    "reading": "ぎんこういん",
    "romaji": "ginkoin",
    "meaningVn": "Nhân viên ngân hàng",
    "meaningEn": "bank employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ぎんこういん (ぎんこういん)」➔ Nhân viên ngân hàng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ぎんこういん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ぎんこういん」の意味 (Nhân viên ngân hàng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_29",
    "lesson": 6,
    "word": "いしゃ",
    "reading": "いしゃ",
    "romaji": "isha",
    "meaningVn": "Bác sĩ",
    "meaningEn": "doctor",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いしゃ (いしゃ)」➔ Bác sĩ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いしゃ」の意味 (Bác sĩ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_30",
    "lesson": 6,
    "word": "だいがく",
    "reading": "だいがく",
    "romaji": "daigaku",
    "meaningVn": "Trường đại học",
    "meaningEn": "university",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "school",
    "semanticCategoryName": "学校・勉強 (Trường học)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「だいがく (だいがく)」➔ Trường đại học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「だいがく」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「だいがく」の意味 (Trường đại học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_31",
    "lesson": 7,
    "word": "かいしゃいん",
    "reading": "かいしゃいん",
    "romaji": "kaishain",
    "meaningVn": "Nhân viên công ty",
    "meaningEn": "company employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃいん (かいしゃいん)」➔ Nhân viên công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃいん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃいん」の意味 (Nhân viên công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_32",
    "lesson": 7,
    "word": "ぎんこういん",
    "reading": "ぎんこういん",
    "romaji": "ginkoin",
    "meaningVn": "Nhân viên ngân hàng",
    "meaningEn": "bank employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ぎんこういん (ぎんこういん)」➔ Nhân viên ngân hàng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ぎんこういん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ぎんこういん」の意味 (Nhân viên ngân hàng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_33",
    "lesson": 7,
    "word": "いしゃ",
    "reading": "いしゃ",
    "romaji": "isha",
    "meaningVn": "Bác sĩ",
    "meaningEn": "doctor",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いしゃ (いしゃ)」➔ Bác sĩ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いしゃ」の意味 (Bác sĩ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_34",
    "lesson": 7,
    "word": "だいがく",
    "reading": "だいがく",
    "romaji": "daigaku",
    "meaningVn": "Trường đại học",
    "meaningEn": "university",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "school",
    "semanticCategoryName": "学校・勉強 (Trường học)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「だいがく (だいがく)」➔ Trường đại học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「だいがく」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「だいがく」の意味 (Trường đại học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_35",
    "lesson": 7,
    "word": "はい",
    "reading": "はい",
    "romaji": "hai",
    "meaningVn": "Vâng/Phải",
    "meaningEn": "yes",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はい (はい)」➔ Vâng/Phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はい」の意味 (Vâng/Phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_36",
    "lesson": 8,
    "word": "ぎんこういん",
    "reading": "ぎんこういん",
    "romaji": "ginkoin",
    "meaningVn": "Nhân viên ngân hàng",
    "meaningEn": "bank employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ぎんこういん (ぎんこういん)」➔ Nhân viên ngân hàng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ぎんこういん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ぎんこういん」の意味 (Nhân viên ngân hàng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_37",
    "lesson": 8,
    "word": "いしゃ",
    "reading": "いしゃ",
    "romaji": "isha",
    "meaningVn": "Bác sĩ",
    "meaningEn": "doctor",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いしゃ (いしゃ)」➔ Bác sĩ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いしゃ」の意味 (Bác sĩ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_38",
    "lesson": 8,
    "word": "だいがく",
    "reading": "だいがく",
    "romaji": "daigaku",
    "meaningVn": "Trường đại học",
    "meaningEn": "university",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "school",
    "semanticCategoryName": "学校・勉強 (Trường học)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「だいがく (だいがく)」➔ Trường đại học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「だいがく」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「だいがく」の意味 (Trường đại học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_39",
    "lesson": 8,
    "word": "はい",
    "reading": "はい",
    "romaji": "hai",
    "meaningVn": "Vâng/Phải",
    "meaningEn": "yes",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はい (はい)」➔ Vâng/Phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はい」の意味 (Vâng/Phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_40",
    "lesson": 8,
    "word": "いいえ",
    "reading": "いいえ",
    "romaji": "iie",
    "meaningVn": "Không/Không phải",
    "meaningEn": "no",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いいえ (いいえ)」➔ Không/Không phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いいえ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いいえ」の意味 (Không/Không phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_41",
    "lesson": 9,
    "word": "いしゃ",
    "reading": "いしゃ",
    "romaji": "isha",
    "meaningVn": "Bác sĩ",
    "meaningEn": "doctor",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いしゃ (いしゃ)」➔ Bác sĩ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いしゃ」の意味 (Bác sĩ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_42",
    "lesson": 9,
    "word": "だいがく",
    "reading": "だいがく",
    "romaji": "daigaku",
    "meaningVn": "Trường đại học",
    "meaningEn": "university",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "school",
    "semanticCategoryName": "学校・勉強 (Trường học)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「だいがく (だいがく)」➔ Trường đại học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「だいがく」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「だいがく」の意味 (Trường đại học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_43",
    "lesson": 9,
    "word": "はい",
    "reading": "はい",
    "romaji": "hai",
    "meaningVn": "Vâng/Phải",
    "meaningEn": "yes",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はい (はい)」➔ Vâng/Phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はい」の意味 (Vâng/Phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_44",
    "lesson": 9,
    "word": "いいえ",
    "reading": "いいえ",
    "romaji": "iie",
    "meaningVn": "Không/Không phải",
    "meaningEn": "no",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いいえ (いいえ)」➔ Không/Không phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いいえ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いいえ」の意味 (Không/Không phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_45",
    "lesson": 9,
    "word": "はじめまして",
    "reading": "はじめまして",
    "romaji": "hajimemashite",
    "meaningVn": "Rất hân hạnh được gặp bạn",
    "meaningEn": "Nice to meet you",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はじめまして (はじめまして)」➔ Rất hân hạnh được gặp bạn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はじめまして」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はじめまして」の意味 (Rất hân hạnh được gặp bạn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_46",
    "lesson": 10,
    "word": "だいがく",
    "reading": "だいがく",
    "romaji": "daigaku",
    "meaningVn": "Trường đại học",
    "meaningEn": "university",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "school",
    "semanticCategoryName": "学校・勉強 (Trường học)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「だいがく (だいがく)」➔ Trường đại học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「だいがく」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「だいがく」の意味 (Trường đại học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_47",
    "lesson": 10,
    "word": "はい",
    "reading": "はい",
    "romaji": "hai",
    "meaningVn": "Vâng/Phải",
    "meaningEn": "yes",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はい (はい)」➔ Vâng/Phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はい」の意味 (Vâng/Phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_48",
    "lesson": 10,
    "word": "いいえ",
    "reading": "いいえ",
    "romaji": "iie",
    "meaningVn": "Không/Không phải",
    "meaningEn": "no",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いいえ (いいえ)」➔ Không/Không phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いいえ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いいえ」の意味 (Không/Không phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_49",
    "lesson": 10,
    "word": "はじめまして",
    "reading": "はじめまして",
    "romaji": "hajimemashite",
    "meaningVn": "Rất hân hạnh được gặp bạn",
    "meaningEn": "Nice to meet you",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はじめまして (はじめまして)」➔ Rất hân hạnh được gặp bạn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はじめまして」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はじめまして」の意味 (Rất hân hạnh được gặp bạn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_50",
    "lesson": 10,
    "word": "これ",
    "reading": "これ",
    "romaji": "kore",
    "meaningVn": "Cái này",
    "meaningEn": "this",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「これ (これ)」➔ Cái này。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「これ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「これ」の意味 (Cái này) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_51",
    "lesson": 11,
    "word": "はい",
    "reading": "はい",
    "romaji": "hai",
    "meaningVn": "Vâng/Phải",
    "meaningEn": "yes",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はい (はい)」➔ Vâng/Phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はい」の意味 (Vâng/Phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_52",
    "lesson": 11,
    "word": "いいえ",
    "reading": "いいえ",
    "romaji": "iie",
    "meaningVn": "Không/Không phải",
    "meaningEn": "no",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いいえ (いいえ)」➔ Không/Không phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いいえ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いいえ」の意味 (Không/Không phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_53",
    "lesson": 11,
    "word": "はじめまして",
    "reading": "はじめまして",
    "romaji": "hajimemashite",
    "meaningVn": "Rất hân hạnh được gặp bạn",
    "meaningEn": "Nice to meet you",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はじめまして (はじめまして)」➔ Rất hân hạnh được gặp bạn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はじめまして」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はじめまして」の意味 (Rất hân hạnh được gặp bạn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_54",
    "lesson": 11,
    "word": "これ",
    "reading": "これ",
    "romaji": "kore",
    "meaningVn": "Cái này",
    "meaningEn": "this",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「これ (これ)」➔ Cái này。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「これ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「これ」の意味 (Cái này) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_55",
    "lesson": 11,
    "word": "それ",
    "reading": "それ",
    "romaji": "sore",
    "meaningVn": "Cái đó",
    "meaningEn": "that",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「それ (それ)」➔ Cái đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「それ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「それ」の意味 (Cái đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_56",
    "lesson": 12,
    "word": "いいえ",
    "reading": "いいえ",
    "romaji": "iie",
    "meaningVn": "Không/Không phải",
    "meaningEn": "no",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いいえ (いいえ)」➔ Không/Không phải。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いいえ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いいえ」の意味 (Không/Không phải) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_57",
    "lesson": 12,
    "word": "はじめまして",
    "reading": "はじめまして",
    "romaji": "hajimemashite",
    "meaningVn": "Rất hân hạnh được gặp bạn",
    "meaningEn": "Nice to meet you",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はじめまして (はじめまして)」➔ Rất hân hạnh được gặp bạn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はじめまして」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はじめまして」の意味 (Rất hân hạnh được gặp bạn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_58",
    "lesson": 12,
    "word": "これ",
    "reading": "これ",
    "romaji": "kore",
    "meaningVn": "Cái này",
    "meaningEn": "this",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「これ (これ)」➔ Cái này。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「これ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「これ」の意味 (Cái này) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_59",
    "lesson": 12,
    "word": "それ",
    "reading": "それ",
    "romaji": "sore",
    "meaningVn": "Cái đó",
    "meaningEn": "that",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「それ (それ)」➔ Cái đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「それ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「それ」の意味 (Cái đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_60",
    "lesson": 12,
    "word": "あれ",
    "reading": "あれ",
    "romaji": "are",
    "meaningVn": "Cái kia",
    "meaningEn": "that over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あれ (あれ)」➔ Cái kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あれ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あれ」の意味 (Cái kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_61",
    "lesson": 13,
    "word": "はじめまして",
    "reading": "はじめまして",
    "romaji": "hajimemashite",
    "meaningVn": "Rất hân hạnh được gặp bạn",
    "meaningEn": "Nice to meet you",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はじめまして (はじめまして)」➔ Rất hân hạnh được gặp bạn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はじめまして」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はじめまして」の意味 (Rất hân hạnh được gặp bạn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_62",
    "lesson": 13,
    "word": "これ",
    "reading": "これ",
    "romaji": "kore",
    "meaningVn": "Cái này",
    "meaningEn": "this",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「これ (これ)」➔ Cái này。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「これ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「これ」の意味 (Cái này) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_63",
    "lesson": 13,
    "word": "それ",
    "reading": "それ",
    "romaji": "sore",
    "meaningVn": "Cái đó",
    "meaningEn": "that",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「それ (それ)」➔ Cái đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「それ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「それ」の意味 (Cái đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_64",
    "lesson": 13,
    "word": "あれ",
    "reading": "あれ",
    "romaji": "are",
    "meaningVn": "Cái kia",
    "meaningEn": "that over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あれ (あれ)」➔ Cái kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あれ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あれ」の意味 (Cái kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_65",
    "lesson": 13,
    "word": "ほん",
    "reading": "ほん",
    "romaji": "hon",
    "meaningVn": "Sách",
    "meaningEn": "book",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ほん (ほん)」➔ Sách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ほん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ほん」の意味 (Sách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_66",
    "lesson": 14,
    "word": "これ",
    "reading": "これ",
    "romaji": "kore",
    "meaningVn": "Cái này",
    "meaningEn": "this",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「これ (これ)」➔ Cái này。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「これ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「これ」の意味 (Cái này) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_67",
    "lesson": 14,
    "word": "それ",
    "reading": "それ",
    "romaji": "sore",
    "meaningVn": "Cái đó",
    "meaningEn": "that",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「それ (それ)」➔ Cái đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「それ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「それ」の意味 (Cái đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_68",
    "lesson": 14,
    "word": "あれ",
    "reading": "あれ",
    "romaji": "are",
    "meaningVn": "Cái kia",
    "meaningEn": "that over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あれ (あれ)」➔ Cái kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あれ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あれ」の意味 (Cái kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_69",
    "lesson": 14,
    "word": "ほん",
    "reading": "ほん",
    "romaji": "hon",
    "meaningVn": "Sách",
    "meaningEn": "book",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ほん (ほん)」➔ Sách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ほん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ほん」の意味 (Sách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_70",
    "lesson": 14,
    "word": "じしょ",
    "reading": "じしょ",
    "romaji": "jisho",
    "meaningVn": "Từ điển",
    "meaningEn": "dictionary",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じしょ (じしょ)」➔ Từ điển。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じしょ」の意味 (Từ điển) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_71",
    "lesson": 15,
    "word": "それ",
    "reading": "それ",
    "romaji": "sore",
    "meaningVn": "Cái đó",
    "meaningEn": "that",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「それ (それ)」➔ Cái đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「それ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「それ」の意味 (Cái đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_72",
    "lesson": 15,
    "word": "あれ",
    "reading": "あれ",
    "romaji": "are",
    "meaningVn": "Cái kia",
    "meaningEn": "that over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あれ (あれ)」➔ Cái kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あれ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あれ」の意味 (Cái kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_73",
    "lesson": 15,
    "word": "ほん",
    "reading": "ほん",
    "romaji": "hon",
    "meaningVn": "Sách",
    "meaningEn": "book",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ほん (ほん)」➔ Sách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ほん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ほん」の意味 (Sách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_74",
    "lesson": 15,
    "word": "じしょ",
    "reading": "じしょ",
    "romaji": "jisho",
    "meaningVn": "Từ điển",
    "meaningEn": "dictionary",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じしょ (じしょ)」➔ Từ điển。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じしょ」の意味 (Từ điển) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_75",
    "lesson": 15,
    "word": "ざっし",
    "reading": "ざっし",
    "romaji": "zasshi",
    "meaningVn": "Tạp chí",
    "meaningEn": "magazine",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ざっし (ざっし)」➔ Tạp chí。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ざっし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ざっし」の意味 (Tạp chí) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_76",
    "lesson": 16,
    "word": "あれ",
    "reading": "あれ",
    "romaji": "are",
    "meaningVn": "Cái kia",
    "meaningEn": "that over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あれ (あれ)」➔ Cái kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あれ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あれ」の意味 (Cái kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_77",
    "lesson": 16,
    "word": "ほん",
    "reading": "ほん",
    "romaji": "hon",
    "meaningVn": "Sách",
    "meaningEn": "book",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ほん (ほん)」➔ Sách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ほん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ほん」の意味 (Sách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_78",
    "lesson": 16,
    "word": "じしょ",
    "reading": "じしょ",
    "romaji": "jisho",
    "meaningVn": "Từ điển",
    "meaningEn": "dictionary",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じしょ (じしょ)」➔ Từ điển。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じしょ」の意味 (Từ điển) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_79",
    "lesson": 16,
    "word": "ざっし",
    "reading": "ざっし",
    "romaji": "zasshi",
    "meaningVn": "Tạp chí",
    "meaningEn": "magazine",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ざっし (ざっし)」➔ Tạp chí。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ざっし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ざっし」の意味 (Tạp chí) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_80",
    "lesson": 16,
    "word": "しんぶん",
    "reading": "しんぶん",
    "romaji": "shinbun",
    "meaningVn": "Báo",
    "meaningEn": "newspaper",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しんぶん (しんぶん)」➔ Báo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しんぶん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しんぶん」の意味 (Báo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_81",
    "lesson": 17,
    "word": "ほん",
    "reading": "ほん",
    "romaji": "hon",
    "meaningVn": "Sách",
    "meaningEn": "book",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ほん (ほん)」➔ Sách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ほん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ほん」の意味 (Sách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_82",
    "lesson": 17,
    "word": "じしょ",
    "reading": "じしょ",
    "romaji": "jisho",
    "meaningVn": "Từ điển",
    "meaningEn": "dictionary",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じしょ (じしょ)」➔ Từ điển。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じしょ」の意味 (Từ điển) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_83",
    "lesson": 17,
    "word": "ざっし",
    "reading": "ざっし",
    "romaji": "zasshi",
    "meaningVn": "Tạp chí",
    "meaningEn": "magazine",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ざっし (ざっし)」➔ Tạp chí。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ざっし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ざっし」の意味 (Tạp chí) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_84",
    "lesson": 17,
    "word": "しんぶん",
    "reading": "しんぶん",
    "romaji": "shinbun",
    "meaningVn": "Báo",
    "meaningEn": "newspaper",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しんぶん (しんぶん)」➔ Báo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しんぶん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しんぶん」の意味 (Báo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_85",
    "lesson": 17,
    "word": "ノート",
    "reading": "ノート",
    "romaji": "noto",
    "meaningVn": "Vở",
    "meaningEn": "notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ノート (ノート)」➔ Vở。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ノート」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ノート」の意味 (Vở) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_86",
    "lesson": 18,
    "word": "じしょ",
    "reading": "じしょ",
    "romaji": "jisho",
    "meaningVn": "Từ điển",
    "meaningEn": "dictionary",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じしょ (じしょ)」➔ Từ điển。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じしょ」の意味 (Từ điển) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_87",
    "lesson": 18,
    "word": "ざっし",
    "reading": "ざっし",
    "romaji": "zasshi",
    "meaningVn": "Tạp chí",
    "meaningEn": "magazine",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ざっし (ざっし)」➔ Tạp chí。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ざっし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ざっし」の意味 (Tạp chí) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_88",
    "lesson": 18,
    "word": "しんぶん",
    "reading": "しんぶん",
    "romaji": "shinbun",
    "meaningVn": "Báo",
    "meaningEn": "newspaper",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しんぶん (しんぶん)」➔ Báo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しんぶん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しんぶん」の意味 (Báo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_89",
    "lesson": 18,
    "word": "ノート",
    "reading": "ノート",
    "romaji": "noto",
    "meaningVn": "Vở",
    "meaningEn": "notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ノート (ノート)」➔ Vở。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ノート」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ノート」の意味 (Vở) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_90",
    "lesson": 18,
    "word": "てちょう",
    "reading": "てちょう",
    "romaji": "techou",
    "meaningVn": "Sổ tay",
    "meaningEn": "pocket notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「てちょう (てちょう)」➔ Sổ tay。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「てちょう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「てちょう」の意味 (Sổ tay) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_91",
    "lesson": 19,
    "word": "ざっし",
    "reading": "ざっし",
    "romaji": "zasshi",
    "meaningVn": "Tạp chí",
    "meaningEn": "magazine",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ざっし (ざっし)」➔ Tạp chí。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ざっし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ざっし」の意味 (Tạp chí) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_92",
    "lesson": 19,
    "word": "しんぶん",
    "reading": "しんぶん",
    "romaji": "shinbun",
    "meaningVn": "Báo",
    "meaningEn": "newspaper",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しんぶん (しんぶん)」➔ Báo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しんぶん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しんぶん」の意味 (Báo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_93",
    "lesson": 19,
    "word": "ノート",
    "reading": "ノート",
    "romaji": "noto",
    "meaningVn": "Vở",
    "meaningEn": "notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ノート (ノート)」➔ Vở。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ノート」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ノート」の意味 (Vở) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_94",
    "lesson": 19,
    "word": "てちょう",
    "reading": "てちょう",
    "romaji": "techou",
    "meaningVn": "Sổ tay",
    "meaningEn": "pocket notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「てちょう (てちょう)」➔ Sổ tay。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「てちょう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「てちょう」の意味 (Sổ tay) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_95",
    "lesson": 19,
    "word": "めいし",
    "reading": "めいし",
    "romaji": "meishi",
    "meaningVn": "Danh thiếp",
    "meaningEn": "name card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「めいし (めいし)」➔ Danh thiếp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「めいし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「めいし」の意味 (Danh thiếp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_96",
    "lesson": 20,
    "word": "しんぶん",
    "reading": "しんぶん",
    "romaji": "shinbun",
    "meaningVn": "Báo",
    "meaningEn": "newspaper",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しんぶん (しんぶん)」➔ Báo。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しんぶん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しんぶん」の意味 (Báo) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_97",
    "lesson": 20,
    "word": "ノート",
    "reading": "ノート",
    "romaji": "noto",
    "meaningVn": "Vở",
    "meaningEn": "notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ノート (ノート)」➔ Vở。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ノート」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ノート」の意味 (Vở) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_98",
    "lesson": 20,
    "word": "てちょう",
    "reading": "てちょう",
    "romaji": "techou",
    "meaningVn": "Sổ tay",
    "meaningEn": "pocket notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「てちょう (てちょう)」➔ Sổ tay。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「てちょう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「てちょう」の意味 (Sổ tay) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_99",
    "lesson": 20,
    "word": "めいし",
    "reading": "めいし",
    "romaji": "meishi",
    "meaningVn": "Danh thiếp",
    "meaningEn": "name card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「めいし (めいし)」➔ Danh thiếp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「めいし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「めいし」の意味 (Danh thiếp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_100",
    "lesson": 20,
    "word": "カード",
    "reading": "カード",
    "romaji": "kado",
    "meaningVn": "Thẻ",
    "meaningEn": "card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「カード (カード)」➔ Thẻ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「カード」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「カード」の意味 (Thẻ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_101",
    "lesson": 21,
    "word": "ノート",
    "reading": "ノート",
    "romaji": "noto",
    "meaningVn": "Vở",
    "meaningEn": "notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ノート (ノート)」➔ Vở。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ノート」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ノート」の意味 (Vở) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_102",
    "lesson": 21,
    "word": "てちょう",
    "reading": "てちょう",
    "romaji": "techou",
    "meaningVn": "Sổ tay",
    "meaningEn": "pocket notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「てちょう (てちょう)」➔ Sổ tay。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「てちょう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「てちょう」の意味 (Sổ tay) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_103",
    "lesson": 21,
    "word": "めいし",
    "reading": "めいし",
    "romaji": "meishi",
    "meaningVn": "Danh thiếp",
    "meaningEn": "name card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「めいし (めいし)」➔ Danh thiếp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「めいし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「めいし」の意味 (Danh thiếp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_104",
    "lesson": 21,
    "word": "カード",
    "reading": "カード",
    "romaji": "kado",
    "meaningVn": "Thẻ",
    "meaningEn": "card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「カード (カード)」➔ Thẻ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「カード」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「カード」の意味 (Thẻ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_105",
    "lesson": 21,
    "word": "えんぴつ",
    "reading": "えんぴつ",
    "romaji": "enpitsu",
    "meaningVn": "Bút chibi",
    "meaningEn": "pencil",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「えんぴつ (えんぴつ)」➔ Bút chibi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「えんぴつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「えんぴつ」の意味 (Bút chibi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_106",
    "lesson": 22,
    "word": "てちょう",
    "reading": "てちょう",
    "romaji": "techou",
    "meaningVn": "Sổ tay",
    "meaningEn": "pocket notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「てちょう (てちょう)」➔ Sổ tay。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「てちょう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「てちょう」の意味 (Sổ tay) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_107",
    "lesson": 22,
    "word": "めいし",
    "reading": "めいし",
    "romaji": "meishi",
    "meaningVn": "Danh thiếp",
    "meaningEn": "name card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「めいし (めいし)」➔ Danh thiếp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「めいし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「めいし」の意味 (Danh thiếp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_108",
    "lesson": 22,
    "word": "カード",
    "reading": "カード",
    "romaji": "kado",
    "meaningVn": "Thẻ",
    "meaningEn": "card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「カード (カード)」➔ Thẻ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「カード」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「カード」の意味 (Thẻ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_109",
    "lesson": 22,
    "word": "えんぴつ",
    "reading": "えんぴつ",
    "romaji": "enpitsu",
    "meaningVn": "Bút chibi",
    "meaningEn": "pencil",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「えんぴつ (えんぴつ)」➔ Bút chibi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「えんぴつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「えんぴつ」の意味 (Bút chibi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_110",
    "lesson": 22,
    "word": "ボールペン",
    "reading": "ボールペン",
    "romaji": "borupen",
    "meaningVn": "Bút bi",
    "meaningEn": "ballpoint pen",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ボールペン (ボールペン)」➔ Bút bi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ボールペン」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ボールペン」の意味 (Bút bi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_111",
    "lesson": 23,
    "word": "めいし",
    "reading": "めいし",
    "romaji": "meishi",
    "meaningVn": "Danh thiếp",
    "meaningEn": "name card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「めいし (めいし)」➔ Danh thiếp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「めいし」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「めいし」の意味 (Danh thiếp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_112",
    "lesson": 23,
    "word": "カード",
    "reading": "カード",
    "romaji": "kado",
    "meaningVn": "Thẻ",
    "meaningEn": "card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「カード (カード)」➔ Thẻ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「カード」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「カード」の意味 (Thẻ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_113",
    "lesson": 23,
    "word": "えんぴつ",
    "reading": "えんぴつ",
    "romaji": "enpitsu",
    "meaningVn": "Bút chibi",
    "meaningEn": "pencil",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「えんぴつ (えんぴつ)」➔ Bút chibi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「えんぴつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「えんぴつ」の意味 (Bút chibi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_114",
    "lesson": 23,
    "word": "ボールペン",
    "reading": "ボールペン",
    "romaji": "borupen",
    "meaningVn": "Bút bi",
    "meaningEn": "ballpoint pen",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ボールペン (ボールペン)」➔ Bút bi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ボールペン」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ボールペン」の意味 (Bút bi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_115",
    "lesson": 23,
    "word": "かぎ",
    "reading": "かぎ",
    "romaji": "kagi",
    "meaningVn": "Chìa khóa",
    "meaningEn": "key",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かぎ (かぎ)」➔ Chìa khóa。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かぎ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かぎ」の意味 (Chìa khóa) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_116",
    "lesson": 24,
    "word": "カード",
    "reading": "カード",
    "romaji": "kado",
    "meaningVn": "Thẻ",
    "meaningEn": "card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「カード (カード)」➔ Thẻ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「カード」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「カード」の意味 (Thẻ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_117",
    "lesson": 24,
    "word": "えんぴつ",
    "reading": "えんぴつ",
    "romaji": "enpitsu",
    "meaningVn": "Bút chibi",
    "meaningEn": "pencil",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「えんぴつ (えんぴつ)」➔ Bút chibi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「えんぴつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「えんぴつ」の意味 (Bút chibi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_118",
    "lesson": 24,
    "word": "ボールペン",
    "reading": "ボールペン",
    "romaji": "borupen",
    "meaningVn": "Bút bi",
    "meaningEn": "ballpoint pen",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ボールペン (ボールペン)」➔ Bút bi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ボールペン」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ボールペン」の意味 (Bút bi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_119",
    "lesson": 24,
    "word": "かぎ",
    "reading": "かぎ",
    "romaji": "kagi",
    "meaningVn": "Chìa khóa",
    "meaningEn": "key",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かぎ (かぎ)」➔ Chìa khóa。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かぎ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かぎ」の意味 (Chìa khóa) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_120",
    "lesson": 24,
    "word": "とけい",
    "reading": "とけい",
    "romaji": "tokei",
    "meaningVn": "Đồng hồ",
    "meaningEn": "clock/watch",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「とけい (とけい)」➔ Đồng hồ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「とけい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「とけい」の意味 (Đồng hồ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_121",
    "lesson": 25,
    "word": "えんぴつ",
    "reading": "えんぴつ",
    "romaji": "enpitsu",
    "meaningVn": "Bút chibi",
    "meaningEn": "pencil",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「えんぴつ (えんぴつ)」➔ Bút chibi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「えんぴつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「えんぴつ」の意味 (Bút chibi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_122",
    "lesson": 25,
    "word": "ボールペン",
    "reading": "ボールペン",
    "romaji": "borupen",
    "meaningVn": "Bút bi",
    "meaningEn": "ballpoint pen",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ボールペン (ボールペン)」➔ Bút bi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ボールペン」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ボールペン」の意味 (Bút bi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_123",
    "lesson": 25,
    "word": "かぎ",
    "reading": "かぎ",
    "romaji": "kagi",
    "meaningVn": "Chìa khóa",
    "meaningEn": "key",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かぎ (かぎ)」➔ Chìa khóa。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かぎ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かぎ」の意味 (Chìa khóa) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_124",
    "lesson": 25,
    "word": "とけい",
    "reading": "とけい",
    "romaji": "tokei",
    "meaningVn": "Đồng hồ",
    "meaningEn": "clock/watch",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「とけい (とけい)」➔ Đồng hồ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「とけい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「とけい」の意味 (Đồng hồ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_125",
    "lesson": 25,
    "word": "かさ",
    "reading": "かさ",
    "romaji": "kasa",
    "meaningVn": "Cái ô/dù",
    "meaningEn": "umbrella",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かさ (かさ)」➔ Cái ô/dù。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かさ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かさ」の意味 (Cái ô/dù) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_126",
    "lesson": 26,
    "word": "ボールペン",
    "reading": "ボールペン",
    "romaji": "borupen",
    "meaningVn": "Bút bi",
    "meaningEn": "ballpoint pen",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ボールペン (ボールペン)」➔ Bút bi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ボールペン」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ボールペン」の意味 (Bút bi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_127",
    "lesson": 26,
    "word": "かぎ",
    "reading": "かぎ",
    "romaji": "kagi",
    "meaningVn": "Chìa khóa",
    "meaningEn": "key",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かぎ (かぎ)」➔ Chìa khóa。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かぎ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かぎ」の意味 (Chìa khóa) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_128",
    "lesson": 26,
    "word": "とけい",
    "reading": "とけい",
    "romaji": "tokei",
    "meaningVn": "Đồng hồ",
    "meaningEn": "clock/watch",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「とけい (とけい)」➔ Đồng hồ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「とけい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「とけい」の意味 (Đồng hồ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_129",
    "lesson": 26,
    "word": "かさ",
    "reading": "かさ",
    "romaji": "kasa",
    "meaningVn": "Cái ô/dù",
    "meaningEn": "umbrella",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かさ (かさ)」➔ Cái ô/dù。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かさ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かさ」の意味 (Cái ô/dù) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_130",
    "lesson": 26,
    "word": "かばん",
    "reading": "かばん",
    "romaji": "kaban",
    "meaningVn": "Cặp/Túi xách",
    "meaningEn": "bag",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かばん (かばん)」➔ Cặp/Túi xách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かばん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かばん」の意味 (Cặp/Túi xách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_131",
    "lesson": 27,
    "word": "かぎ",
    "reading": "かぎ",
    "romaji": "kagi",
    "meaningVn": "Chìa khóa",
    "meaningEn": "key",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かぎ (かぎ)」➔ Chìa khóa。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かぎ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かぎ」の意味 (Chìa khóa) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_132",
    "lesson": 27,
    "word": "とけい",
    "reading": "とけい",
    "romaji": "tokei",
    "meaningVn": "Đồng hồ",
    "meaningEn": "clock/watch",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「とけい (とけい)」➔ Đồng hồ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「とけい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「とけい」の意味 (Đồng hồ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_133",
    "lesson": 27,
    "word": "かさ",
    "reading": "かさ",
    "romaji": "kasa",
    "meaningVn": "Cái ô/dù",
    "meaningEn": "umbrella",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かさ (かさ)」➔ Cái ô/dù。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かさ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かさ」の意味 (Cái ô/dù) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_134",
    "lesson": 27,
    "word": "かばん",
    "reading": "かばん",
    "romaji": "kaban",
    "meaningVn": "Cặp/Túi xách",
    "meaningEn": "bag",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かばん (かばん)」➔ Cặp/Túi xách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かばん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かばん」の意味 (Cặp/Túi xách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_135",
    "lesson": 27,
    "word": "ここ",
    "reading": "ここ",
    "romaji": "koko",
    "meaningVn": "Ở đây",
    "meaningEn": "here",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ここ (ここ)」➔ Ở đây。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ここ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ここ」の意味 (Ở đây) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_136",
    "lesson": 28,
    "word": "とけい",
    "reading": "とけい",
    "romaji": "tokei",
    "meaningVn": "Đồng hồ",
    "meaningEn": "clock/watch",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「とけい (とけい)」➔ Đồng hồ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「とけい」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「とけい」の意味 (Đồng hồ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_137",
    "lesson": 28,
    "word": "かさ",
    "reading": "かさ",
    "romaji": "kasa",
    "meaningVn": "Cái ô/dù",
    "meaningEn": "umbrella",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かさ (かさ)」➔ Cái ô/dù。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かさ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かさ」の意味 (Cái ô/dù) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_138",
    "lesson": 28,
    "word": "かばん",
    "reading": "かばん",
    "romaji": "kaban",
    "meaningVn": "Cặp/Túi xách",
    "meaningEn": "bag",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かばん (かばん)」➔ Cặp/Túi xách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かばん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かばん」の意味 (Cặp/Túi xách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_139",
    "lesson": 28,
    "word": "ここ",
    "reading": "ここ",
    "romaji": "koko",
    "meaningVn": "Ở đây",
    "meaningEn": "here",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ここ (ここ)」➔ Ở đây。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ここ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ここ」の意味 (Ở đây) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_140",
    "lesson": 28,
    "word": "そこ",
    "reading": "そこ",
    "romaji": "soko",
    "meaningVn": "Ở đó",
    "meaningEn": "there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「そこ (そこ)」➔ Ở đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「そこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「そこ」の意味 (Ở đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_141",
    "lesson": 29,
    "word": "かさ",
    "reading": "かさ",
    "romaji": "kasa",
    "meaningVn": "Cái ô/dù",
    "meaningEn": "umbrella",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かさ (かさ)」➔ Cái ô/dù。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かさ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かさ」の意味 (Cái ô/dù) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_142",
    "lesson": 29,
    "word": "かばん",
    "reading": "かばん",
    "romaji": "kaban",
    "meaningVn": "Cặp/Túi xách",
    "meaningEn": "bag",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かばん (かばん)」➔ Cặp/Túi xách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かばん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かばん」の意味 (Cặp/Túi xách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_143",
    "lesson": 29,
    "word": "ここ",
    "reading": "ここ",
    "romaji": "koko",
    "meaningVn": "Ở đây",
    "meaningEn": "here",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ここ (ここ)」➔ Ở đây。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ここ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ここ」の意味 (Ở đây) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_144",
    "lesson": 29,
    "word": "そこ",
    "reading": "そこ",
    "romaji": "soko",
    "meaningVn": "Ở đó",
    "meaningEn": "there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「そこ (そこ)」➔ Ở đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「そこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「そこ」の意味 (Ở đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_145",
    "lesson": 29,
    "word": "あそこ",
    "reading": "あそこ",
    "romaji": "asoko",
    "meaningVn": "Ở kia",
    "meaningEn": "over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あそこ (あそこ)」➔ Ở kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あそこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あそこ」の意味 (Ở kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_146",
    "lesson": 30,
    "word": "かばん",
    "reading": "かばん",
    "romaji": "kaban",
    "meaningVn": "Cặp/Túi xách",
    "meaningEn": "bag",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かばん (かばん)」➔ Cặp/Túi xách。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かばん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かばん」の意味 (Cặp/Túi xách) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_147",
    "lesson": 30,
    "word": "ここ",
    "reading": "ここ",
    "romaji": "koko",
    "meaningVn": "Ở đây",
    "meaningEn": "here",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ここ (ここ)」➔ Ở đây。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ここ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ここ」の意味 (Ở đây) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_148",
    "lesson": 30,
    "word": "そこ",
    "reading": "そこ",
    "romaji": "soko",
    "meaningVn": "Ở đó",
    "meaningEn": "there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「そこ (そこ)」➔ Ở đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「そこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「そこ」の意味 (Ở đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_149",
    "lesson": 30,
    "word": "あそこ",
    "reading": "あそこ",
    "romaji": "asoko",
    "meaningVn": "Ở kia",
    "meaningEn": "over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あそこ (あそこ)」➔ Ở kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あそこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あそこ」の意味 (Ở kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_150",
    "lesson": 30,
    "word": "どこ",
    "reading": "どこ",
    "romaji": "doko",
    "meaningVn": "Ở đâu",
    "meaningEn": "where",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「どこ (どこ)」➔ Ở đâu。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「どこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「どこ」の意味 (Ở đâu) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_151",
    "lesson": 31,
    "word": "ここ",
    "reading": "ここ",
    "romaji": "koko",
    "meaningVn": "Ở đây",
    "meaningEn": "here",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ここ (ここ)」➔ Ở đây。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ここ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ここ」の意味 (Ở đây) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_152",
    "lesson": 31,
    "word": "そこ",
    "reading": "そこ",
    "romaji": "soko",
    "meaningVn": "Ở đó",
    "meaningEn": "there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「そこ (そこ)」➔ Ở đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「そこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「そこ」の意味 (Ở đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_153",
    "lesson": 31,
    "word": "あそこ",
    "reading": "あそこ",
    "romaji": "asoko",
    "meaningVn": "Ở kia",
    "meaningEn": "over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あそこ (あそこ)」➔ Ở kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あそこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あそこ」の意味 (Ở kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_154",
    "lesson": 31,
    "word": "どこ",
    "reading": "どこ",
    "romaji": "doko",
    "meaningVn": "Ở đâu",
    "meaningEn": "where",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「どこ (どこ)」➔ Ở đâu。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「どこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「どこ」の意味 (Ở đâu) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_155",
    "lesson": 31,
    "word": "きょうしつ",
    "reading": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaningVn": "Lớp học",
    "meaningEn": "classroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「きょうしつ (きょうしつ)」➔ Lớp học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「きょうしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「きょうしつ」の意味 (Lớp học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_156",
    "lesson": 32,
    "word": "そこ",
    "reading": "そこ",
    "romaji": "soko",
    "meaningVn": "Ở đó",
    "meaningEn": "there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「そこ (そこ)」➔ Ở đó。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「そこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「そこ」の意味 (Ở đó) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_157",
    "lesson": 32,
    "word": "あそこ",
    "reading": "あそこ",
    "romaji": "asoko",
    "meaningVn": "Ở kia",
    "meaningEn": "over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あそこ (あそこ)」➔ Ở kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あそこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あそこ」の意味 (Ở kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_158",
    "lesson": 32,
    "word": "どこ",
    "reading": "どこ",
    "romaji": "doko",
    "meaningVn": "Ở đâu",
    "meaningEn": "where",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「どこ (どこ)」➔ Ở đâu。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「どこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「どこ」の意味 (Ở đâu) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_159",
    "lesson": 32,
    "word": "きょうしつ",
    "reading": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaningVn": "Lớp học",
    "meaningEn": "classroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「きょうしつ (きょうしつ)」➔ Lớp học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「きょうしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「きょうしつ」の意味 (Lớp học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_160",
    "lesson": 32,
    "word": "しょくどう",
    "reading": "しょくどう",
    "romaji": "shokudou",
    "meaningVn": "Nhà ăn",
    "meaningEn": "cafeteria",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しょくどう (しょくどう)」➔ Nhà ăn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しょくどう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しょくどう」の意味 (Nhà ăn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_161",
    "lesson": 33,
    "word": "あそこ",
    "reading": "あそこ",
    "romaji": "asoko",
    "meaningVn": "Ở kia",
    "meaningEn": "over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あそこ (あそこ)」➔ Ở kia。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あそこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「あそこ」の意味 (Ở kia) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_162",
    "lesson": 33,
    "word": "どこ",
    "reading": "どこ",
    "romaji": "doko",
    "meaningVn": "Ở đâu",
    "meaningEn": "where",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「どこ (どこ)」➔ Ở đâu。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「どこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「どこ」の意味 (Ở đâu) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_163",
    "lesson": 33,
    "word": "きょうしつ",
    "reading": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaningVn": "Lớp học",
    "meaningEn": "classroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「きょうしつ (きょうしつ)」➔ Lớp học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「きょうしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「きょうしつ」の意味 (Lớp học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_164",
    "lesson": 33,
    "word": "しょくどう",
    "reading": "しょくどう",
    "romaji": "shokudou",
    "meaningVn": "Nhà ăn",
    "meaningEn": "cafeteria",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しょくどう (しょくどう)」➔ Nhà ăn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しょくどう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しょくどう」の意味 (Nhà ăn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_165",
    "lesson": 33,
    "word": "じむしょ",
    "reading": "じむしょ",
    "romaji": "jimusho",
    "meaningVn": "Văn phòng",
    "meaningEn": "office",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じむしょ (じむしょ)」➔ Văn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じむしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じむしょ」の意味 (Văn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_166",
    "lesson": 34,
    "word": "どこ",
    "reading": "どこ",
    "romaji": "doko",
    "meaningVn": "Ở đâu",
    "meaningEn": "where",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「どこ (どこ)」➔ Ở đâu。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「どこ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「どこ」の意味 (Ở đâu) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_167",
    "lesson": 34,
    "word": "きょうしつ",
    "reading": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaningVn": "Lớp học",
    "meaningEn": "classroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「きょうしつ (きょうしつ)」➔ Lớp học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「きょうしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「きょうしつ」の意味 (Lớp học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_168",
    "lesson": 34,
    "word": "しょくどう",
    "reading": "しょくどう",
    "romaji": "shokudou",
    "meaningVn": "Nhà ăn",
    "meaningEn": "cafeteria",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しょくどう (しょくどう)」➔ Nhà ăn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しょくどう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しょくどう」の意味 (Nhà ăn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_169",
    "lesson": 34,
    "word": "じむしょ",
    "reading": "じむしょ",
    "romaji": "jimusho",
    "meaningVn": "Văn phòng",
    "meaningEn": "office",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じむしょ (じむしょ)」➔ Văn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じむしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じむしょ」の意味 (Văn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_170",
    "lesson": 34,
    "word": "かいぎしつ",
    "reading": "かいぎしつ",
    "romaji": "kaigishitsu",
    "meaningVn": "Phòng họp",
    "meaningEn": "meeting room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいぎしつ (かいぎしつ)」➔ Phòng họp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいぎしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいぎしつ」の意味 (Phòng họp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_171",
    "lesson": 35,
    "word": "きょうしつ",
    "reading": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaningVn": "Lớp học",
    "meaningEn": "classroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「きょうしつ (きょうしつ)」➔ Lớp học。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「きょうしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「きょうしつ」の意味 (Lớp học) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_172",
    "lesson": 35,
    "word": "しょくどう",
    "reading": "しょくどう",
    "romaji": "shokudou",
    "meaningVn": "Nhà ăn",
    "meaningEn": "cafeteria",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しょくどう (しょくどう)」➔ Nhà ăn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しょくどう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しょくどう」の意味 (Nhà ăn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_173",
    "lesson": 35,
    "word": "じむしょ",
    "reading": "じむしょ",
    "romaji": "jimusho",
    "meaningVn": "Văn phòng",
    "meaningEn": "office",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じむしょ (じむしょ)」➔ Văn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じむしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じむしょ」の意味 (Văn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_174",
    "lesson": 35,
    "word": "かいぎしつ",
    "reading": "かいぎしつ",
    "romaji": "kaigishitsu",
    "meaningVn": "Phòng họp",
    "meaningEn": "meeting room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいぎしつ (かいぎしつ)」➔ Phòng họp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいぎしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいぎしつ」の意味 (Phòng họp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_175",
    "lesson": 35,
    "word": "うけつけ",
    "reading": "うけつけ",
    "romaji": "uketsuke",
    "meaningVn": "Bàn lễ tân",
    "meaningEn": "reception desk",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うけつけ (うけつけ)」➔ Bàn lễ tân。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うけつけ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うけつけ」の意味 (Bàn lễ tân) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_176",
    "lesson": 36,
    "word": "しょくどう",
    "reading": "しょくどう",
    "romaji": "shokudou",
    "meaningVn": "Nhà ăn",
    "meaningEn": "cafeteria",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しょくどう (しょくどう)」➔ Nhà ăn。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しょくどう」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「しょくどう」の意味 (Nhà ăn) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_177",
    "lesson": 36,
    "word": "じむしょ",
    "reading": "じむしょ",
    "romaji": "jimusho",
    "meaningVn": "Văn phòng",
    "meaningEn": "office",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じむしょ (じむしょ)」➔ Văn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じむしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じむしょ」の意味 (Văn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_178",
    "lesson": 36,
    "word": "かいぎしつ",
    "reading": "かいぎしつ",
    "romaji": "kaigishitsu",
    "meaningVn": "Phòng họp",
    "meaningEn": "meeting room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいぎしつ (かいぎしつ)」➔ Phòng họp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいぎしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいぎしつ」の意味 (Phòng họp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_179",
    "lesson": 36,
    "word": "うけつけ",
    "reading": "うけつけ",
    "romaji": "uketsuke",
    "meaningVn": "Bàn lễ tân",
    "meaningEn": "reception desk",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うけつけ (うけつけ)」➔ Bàn lễ tân。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うけつけ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うけつけ」の意味 (Bàn lễ tân) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_180",
    "lesson": 36,
    "word": "へや",
    "reading": "へや",
    "romaji": "heya",
    "meaningVn": "Căn phòng",
    "meaningEn": "room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「へや (へや)」➔ Căn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「へや」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「へや」の意味 (Căn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_181",
    "lesson": 37,
    "word": "じむしょ",
    "reading": "じむしょ",
    "romaji": "jimusho",
    "meaningVn": "Văn phòng",
    "meaningEn": "office",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じむしょ (じむしょ)」➔ Văn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じむしょ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「じむしょ」の意味 (Văn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_182",
    "lesson": 37,
    "word": "かいぎしつ",
    "reading": "かいぎしつ",
    "romaji": "kaigishitsu",
    "meaningVn": "Phòng họp",
    "meaningEn": "meeting room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいぎしつ (かいぎしつ)」➔ Phòng họp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいぎしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいぎしつ」の意味 (Phòng họp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_183",
    "lesson": 37,
    "word": "うけつけ",
    "reading": "うけつけ",
    "romaji": "uketsuke",
    "meaningVn": "Bàn lễ tân",
    "meaningEn": "reception desk",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うけつけ (うけつけ)」➔ Bàn lễ tân。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うけつけ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うけつけ」の意味 (Bàn lễ tân) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_184",
    "lesson": 37,
    "word": "へや",
    "reading": "へや",
    "romaji": "heya",
    "meaningVn": "Căn phòng",
    "meaningEn": "room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「へや (へや)」➔ Căn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「へや」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「へや」の意味 (Căn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_185",
    "lesson": 37,
    "word": "トイレ",
    "reading": "トイレ",
    "romaji": "toire",
    "meaningVn": "Nhà vệ sinh",
    "meaningEn": "restroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「トイレ (トイレ)」➔ Nhà vệ sinh。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「トイレ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「トイレ」の意味 (Nhà vệ sinh) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_186",
    "lesson": 38,
    "word": "かいぎしつ",
    "reading": "かいぎしつ",
    "romaji": "kaigishitsu",
    "meaningVn": "Phòng họp",
    "meaningEn": "meeting room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいぎしつ (かいぎしつ)」➔ Phòng họp。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいぎしつ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいぎしつ」の意味 (Phòng họp) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_187",
    "lesson": 38,
    "word": "うけつけ",
    "reading": "うけつけ",
    "romaji": "uketsuke",
    "meaningVn": "Bàn lễ tân",
    "meaningEn": "reception desk",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うけつけ (うけつけ)」➔ Bàn lễ tân。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うけつけ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うけつけ」の意味 (Bàn lễ tân) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_188",
    "lesson": 38,
    "word": "へや",
    "reading": "へや",
    "romaji": "heya",
    "meaningVn": "Căn phòng",
    "meaningEn": "room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「へや (へや)」➔ Căn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「へや」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「へや」の意味 (Căn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_189",
    "lesson": 38,
    "word": "トイレ",
    "reading": "トイレ",
    "romaji": "toire",
    "meaningVn": "Nhà vệ sinh",
    "meaningEn": "restroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「トイレ (トイレ)」➔ Nhà vệ sinh。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「トイレ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「トイレ」の意味 (Nhà vệ sinh) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_190",
    "lesson": 38,
    "word": "かいだん",
    "reading": "かいだん",
    "romaji": "kaidan",
    "meaningVn": "Cầu thang",
    "meaningEn": "stairs",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいだん (かいだん)」➔ Cầu thang。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいだん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいだん」の意味 (Cầu thang) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_191",
    "lesson": 39,
    "word": "うけつけ",
    "reading": "うけつけ",
    "romaji": "uketsuke",
    "meaningVn": "Bàn lễ tân",
    "meaningEn": "reception desk",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うけつけ (うけつけ)」➔ Bàn lễ tân。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うけつけ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うけつけ」の意味 (Bàn lễ tân) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_192",
    "lesson": 39,
    "word": "へや",
    "reading": "へや",
    "romaji": "heya",
    "meaningVn": "Căn phòng",
    "meaningEn": "room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「へや (へや)」➔ Căn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「へや」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「へや」の意味 (Căn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_193",
    "lesson": 39,
    "word": "トイレ",
    "reading": "トイレ",
    "romaji": "toire",
    "meaningVn": "Nhà vệ sinh",
    "meaningEn": "restroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「トイレ (トイレ)」➔ Nhà vệ sinh。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「トイレ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「トイレ」の意味 (Nhà vệ sinh) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_194",
    "lesson": 39,
    "word": "かいだん",
    "reading": "かいだん",
    "romaji": "kaidan",
    "meaningVn": "Cầu thang",
    "meaningEn": "stairs",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいだん (かいだん)」➔ Cầu thang。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいだん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいだん」の意味 (Cầu thang) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_195",
    "lesson": 39,
    "word": "エレベーター",
    "reading": "エレベーター",
    "romaji": "erebeta",
    "meaningVn": "Thang máy",
    "meaningEn": "elevator",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「エレベーター (エレベーター)」➔ Thang máy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「エレベーター」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「エレベーター」の意味 (Thang máy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_196",
    "lesson": 40,
    "word": "へや",
    "reading": "へや",
    "romaji": "heya",
    "meaningVn": "Căn phòng",
    "meaningEn": "room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「へや (へや)」➔ Căn phòng。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「へや」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「へや」の意味 (Căn phòng) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_197",
    "lesson": 40,
    "word": "トイレ",
    "reading": "トイレ",
    "romaji": "toire",
    "meaningVn": "Nhà vệ sinh",
    "meaningEn": "restroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「トイレ (トイレ)」➔ Nhà vệ sinh。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「トイレ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「トイレ」の意味 (Nhà vệ sinh) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_198",
    "lesson": 40,
    "word": "かいだん",
    "reading": "かいだん",
    "romaji": "kaidan",
    "meaningVn": "Cầu thang",
    "meaningEn": "stairs",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいだん (かいだん)」➔ Cầu thang。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいだん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいだん」の意味 (Cầu thang) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_199",
    "lesson": 40,
    "word": "エレベーター",
    "reading": "エレベーター",
    "romaji": "erebeta",
    "meaningVn": "Thang máy",
    "meaningEn": "elevator",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「エレベーター (エレベーター)」➔ Thang máy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「エレベーター」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「エレベーター」の意味 (Thang máy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_200",
    "lesson": 40,
    "word": "うち",
    "reading": "うち",
    "romaji": "uchi",
    "meaningVn": "Nhà",
    "meaningEn": "home/house",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うち (うち)」➔ Nhà。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うち」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うち」の意味 (Nhà) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_201",
    "lesson": 41,
    "word": "トイレ",
    "reading": "トイレ",
    "romaji": "toire",
    "meaningVn": "Nhà vệ sinh",
    "meaningEn": "restroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「トイレ (トイレ)」➔ Nhà vệ sinh。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「トイレ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「トイレ」の意味 (Nhà vệ sinh) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_202",
    "lesson": 41,
    "word": "かいだん",
    "reading": "かいだん",
    "romaji": "kaidan",
    "meaningVn": "Cầu thang",
    "meaningEn": "stairs",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいだん (かいだん)」➔ Cầu thang。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいだん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいだん」の意味 (Cầu thang) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_203",
    "lesson": 41,
    "word": "エレベーター",
    "reading": "エレベーター",
    "romaji": "erebeta",
    "meaningVn": "Thang máy",
    "meaningEn": "elevator",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「エレベーター (エレベーター)」➔ Thang máy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「エレベーター」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「エレベーター」の意味 (Thang máy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_204",
    "lesson": 41,
    "word": "うち",
    "reading": "うち",
    "romaji": "uchi",
    "meaningVn": "Nhà",
    "meaningEn": "home/house",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うち (うち)」➔ Nhà。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うち」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うち」の意味 (Nhà) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_205",
    "lesson": 41,
    "word": "かいしゃ",
    "reading": "かいしゃ",
    "romaji": "kaisha",
    "meaningVn": "Công ty",
    "meaningEn": "company",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃ (かいしゃ)」➔ Công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃ」の意味 (Công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_206",
    "lesson": 42,
    "word": "かいだん",
    "reading": "かいだん",
    "romaji": "kaidan",
    "meaningVn": "Cầu thang",
    "meaningEn": "stairs",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいだん (かいだん)」➔ Cầu thang。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいだん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいだん」の意味 (Cầu thang) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_207",
    "lesson": 42,
    "word": "エレベーター",
    "reading": "エレベーター",
    "romaji": "erebeta",
    "meaningVn": "Thang máy",
    "meaningEn": "elevator",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「エレベーター (エレベーター)」➔ Thang máy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「エレベーター」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「エレベーター」の意味 (Thang máy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_208",
    "lesson": 42,
    "word": "うち",
    "reading": "うち",
    "romaji": "uchi",
    "meaningVn": "Nhà",
    "meaningEn": "home/house",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うち (うち)」➔ Nhà。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うち」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うち」の意味 (Nhà) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_209",
    "lesson": 42,
    "word": "かいしゃ",
    "reading": "かいしゃ",
    "romaji": "kaisha",
    "meaningVn": "Công ty",
    "meaningEn": "company",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃ (かいしゃ)」➔ Công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃ」の意味 (Công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_210",
    "lesson": 42,
    "word": "おきます",
    "reading": "おきます",
    "romaji": "okimasu",
    "meaningVn": "Thức dậy",
    "meaningEn": "get up",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おきます (おきます)」➔ Thức dậy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おきます」の意味 (Thức dậy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_211",
    "lesson": 43,
    "word": "エレベーター",
    "reading": "エレベーター",
    "romaji": "erebeta",
    "meaningVn": "Thang máy",
    "meaningEn": "elevator",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「エレベーター (エレベーター)」➔ Thang máy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「エレベーター」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「エレベーター」の意味 (Thang máy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_212",
    "lesson": 43,
    "word": "うち",
    "reading": "うち",
    "romaji": "uchi",
    "meaningVn": "Nhà",
    "meaningEn": "home/house",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うち (うち)」➔ Nhà。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うち」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うち」の意味 (Nhà) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_213",
    "lesson": 43,
    "word": "かいしゃ",
    "reading": "かいしゃ",
    "romaji": "kaisha",
    "meaningVn": "Công ty",
    "meaningEn": "company",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃ (かいしゃ)」➔ Công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃ」の意味 (Công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_214",
    "lesson": 43,
    "word": "おきます",
    "reading": "おきます",
    "romaji": "okimasu",
    "meaningVn": "Thức dậy",
    "meaningEn": "get up",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おきます (おきます)」➔ Thức dậy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おきます」の意味 (Thức dậy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_215",
    "lesson": 43,
    "word": "ねます",
    "reading": "ねます",
    "romaji": "nemasu",
    "meaningVn": "Đi ngủ",
    "meaningEn": "sleep",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ねます (ねます)」➔ Đi ngủ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ねます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ねます」の意味 (Đi ngủ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_216",
    "lesson": 44,
    "word": "うち",
    "reading": "うち",
    "romaji": "uchi",
    "meaningVn": "Nhà",
    "meaningEn": "home/house",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うち (うち)」➔ Nhà。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うち」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「うち」の意味 (Nhà) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_217",
    "lesson": 44,
    "word": "かいしゃ",
    "reading": "かいしゃ",
    "romaji": "kaisha",
    "meaningVn": "Công ty",
    "meaningEn": "company",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃ (かいしゃ)」➔ Công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃ」の意味 (Công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_218",
    "lesson": 44,
    "word": "おきます",
    "reading": "おきます",
    "romaji": "okimasu",
    "meaningVn": "Thức dậy",
    "meaningEn": "get up",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おきます (おきます)」➔ Thức dậy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おきます」の意味 (Thức dậy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_219",
    "lesson": 44,
    "word": "ねます",
    "reading": "ねます",
    "romaji": "nemasu",
    "meaningVn": "Đi ngủ",
    "meaningEn": "sleep",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ねます (ねます)」➔ Đi ngủ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ねます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ねます」の意味 (Đi ngủ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_220",
    "lesson": 44,
    "word": "はたらきます",
    "reading": "はたらきます",
    "romaji": "hatarakimasu",
    "meaningVn": "Làm việc",
    "meaningEn": "work",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はたらきます (はたらきます)」➔ Làm việc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はたらきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はたらきます」の意味 (Làm việc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_221",
    "lesson": 45,
    "word": "かいしゃ",
    "reading": "かいしゃ",
    "romaji": "kaisha",
    "meaningVn": "Công ty",
    "meaningEn": "company",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃ (かいしゃ)」➔ Công ty。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃ」の意味 (Công ty) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_222",
    "lesson": 45,
    "word": "おきます",
    "reading": "おきます",
    "romaji": "okimasu",
    "meaningVn": "Thức dậy",
    "meaningEn": "get up",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おきます (おきます)」➔ Thức dậy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おきます」の意味 (Thức dậy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_223",
    "lesson": 45,
    "word": "ねます",
    "reading": "ねます",
    "romaji": "nemasu",
    "meaningVn": "Đi ngủ",
    "meaningEn": "sleep",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ねます (ねます)」➔ Đi ngủ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ねます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ねます」の意味 (Đi ngủ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_224",
    "lesson": 45,
    "word": "はたらきます",
    "reading": "はたらきます",
    "romaji": "hatarakimasu",
    "meaningVn": "Làm việc",
    "meaningEn": "work",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はたらきます (はたらきます)」➔ Làm việc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はたらきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はたらきます」の意味 (Làm việc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_225",
    "lesson": 45,
    "word": "やすみます",
    "reading": "やすみます",
    "romaji": "yasumimasu",
    "meaningVn": "Nghỉ ngơi",
    "meaningEn": "rest",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「やすみます (やすみます)」➔ Nghỉ ngơi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「やすみます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「やすみます」の意味 (Nghỉ ngơi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_226",
    "lesson": 46,
    "word": "おきます",
    "reading": "おきます",
    "romaji": "okimasu",
    "meaningVn": "Thức dậy",
    "meaningEn": "get up",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おきます (おきます)」➔ Thức dậy。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おきます」の意味 (Thức dậy) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_227",
    "lesson": 46,
    "word": "ねます",
    "reading": "ねます",
    "romaji": "nemasu",
    "meaningVn": "Đi ngủ",
    "meaningEn": "sleep",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ねます (ねます)」➔ Đi ngủ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ねます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ねます」の意味 (Đi ngủ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_228",
    "lesson": 46,
    "word": "はたらきます",
    "reading": "はたらきます",
    "romaji": "hatarakimasu",
    "meaningVn": "Làm việc",
    "meaningEn": "work",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はたらきます (はたらきます)」➔ Làm việc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はたらきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はたらきます」の意味 (Làm việc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_229",
    "lesson": 46,
    "word": "やすみます",
    "reading": "やすみます",
    "romaji": "yasumimasu",
    "meaningVn": "Nghỉ ngơi",
    "meaningEn": "rest",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「やすみます (やすみます)」➔ Nghỉ ngơi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「やすみます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「やすみます」の意味 (Nghỉ ngơi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_230",
    "lesson": 46,
    "word": "べんきょうします",
    "reading": "べんきょうします",
    "romaji": "benkyoushimasu",
    "meaningVn": "Học tập",
    "meaningEn": "study",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「べんきょうします (べんきょうします)」➔ Học tập。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「べんきょうします」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「べんきょうします」の意味 (Học tập) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_231",
    "lesson": 47,
    "word": "ねます",
    "reading": "ねます",
    "romaji": "nemasu",
    "meaningVn": "Đi ngủ",
    "meaningEn": "sleep",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ねます (ねます)」➔ Đi ngủ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ねます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「ねます」の意味 (Đi ngủ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_232",
    "lesson": 47,
    "word": "はたらきます",
    "reading": "はたらきます",
    "romaji": "hatarakimasu",
    "meaningVn": "Làm việc",
    "meaningEn": "work",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はたらきます (はたらきます)」➔ Làm việc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はたらきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はたらきます」の意味 (Làm việc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_233",
    "lesson": 47,
    "word": "やすみます",
    "reading": "やすみます",
    "romaji": "yasumimasu",
    "meaningVn": "Nghỉ ngơi",
    "meaningEn": "rest",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「やすみます (やすみます)」➔ Nghỉ ngơi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「やすみます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「やすみます」の意味 (Nghỉ ngơi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_234",
    "lesson": 47,
    "word": "べんきょうします",
    "reading": "べんきょうします",
    "romaji": "benkyoushimasu",
    "meaningVn": "Học tập",
    "meaningEn": "study",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「べんきょうします (べんきょうします)」➔ Học tập。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「べんきょうします」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「べんきょうします」の意味 (Học tập) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_235",
    "lesson": 47,
    "word": "おわります",
    "reading": "おわります",
    "romaji": "owarimasu",
    "meaningVn": "Kết thúc",
    "meaningEn": "finish",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おわります (おわります)」➔ Kết thúc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おわります」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おわります」の意味 (Kết thúc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_236",
    "lesson": 48,
    "word": "はたらきます",
    "reading": "はたらきます",
    "romaji": "hatarakimasu",
    "meaningVn": "Làm việc",
    "meaningEn": "work",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はたらきます (はたらきます)」➔ Làm việc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はたらきます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「はたらきます」の意味 (Làm việc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_237",
    "lesson": 48,
    "word": "やすみます",
    "reading": "やすみます",
    "romaji": "yasumimasu",
    "meaningVn": "Nghỉ ngơi",
    "meaningEn": "rest",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「やすみます (やすみます)」➔ Nghỉ ngơi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「やすみます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「やすみます」の意味 (Nghỉ ngơi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_238",
    "lesson": 48,
    "word": "べんきょうします",
    "reading": "べんきょうします",
    "romaji": "benkyoushimasu",
    "meaningVn": "Học tập",
    "meaningEn": "study",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「べんきょうします (べんきょうします)」➔ Học tập。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「べんきょうします」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「べんきょうします」の意味 (Học tập) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_239",
    "lesson": 48,
    "word": "おわります",
    "reading": "おわります",
    "romaji": "owarimasu",
    "meaningVn": "Kết thúc",
    "meaningEn": "finish",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おわります (おわります)」➔ Kết thúc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おわります」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おわります」の意味 (Kết thúc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_240",
    "lesson": 48,
    "word": "いま",
    "reading": "いま",
    "romaji": "ima",
    "meaningVn": "Bây giờ",
    "meaningEn": "now",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いま (いま)」➔ Bây giờ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いま」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いま」の意味 (Bây giờ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_241",
    "lesson": 49,
    "word": "やすみます",
    "reading": "やすみます",
    "romaji": "yasumimasu",
    "meaningVn": "Nghỉ ngơi",
    "meaningEn": "rest",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「やすみます (やすみます)」➔ Nghỉ ngơi。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「やすみます」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「やすみます」の意味 (Nghỉ ngơi) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_242",
    "lesson": 49,
    "word": "べんきょうします",
    "reading": "べんきょうします",
    "romaji": "benkyoushimasu",
    "meaningVn": "Học tập",
    "meaningEn": "study",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「べんきょうします (べんきょうします)」➔ Học tập。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「べんきょうします」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「べんきょうします」の意味 (Học tập) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_243",
    "lesson": 49,
    "word": "おわります",
    "reading": "おわります",
    "romaji": "owarimasu",
    "meaningVn": "Kết thúc",
    "meaningEn": "finish",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おわります (おわります)」➔ Kết thúc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おわります」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おわります」の意味 (Kết thúc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_244",
    "lesson": 49,
    "word": "いま",
    "reading": "いま",
    "romaji": "ima",
    "meaningVn": "Bây giờ",
    "meaningEn": "now",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いま (いま)」➔ Bây giờ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いま」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いま」の意味 (Bây giờ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_245",
    "lesson": 49,
    "word": "なんじ",
    "reading": "なんじ",
    "romaji": "nanji",
    "meaningVn": "Mấy giờ",
    "meaningEn": "what time",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「なんじ (なんじ)」➔ Mấy giờ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「なんじ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「なんじ」の意味 (Mấy giờ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_246",
    "lesson": 50,
    "word": "べんきょうします",
    "reading": "べんきょうします",
    "romaji": "benkyoushimasu",
    "meaningVn": "Học tập",
    "meaningEn": "study",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「べんきょうします (べんきょうします)」➔ Học tập。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「べんきょうします」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「べんきょうします」の意味 (Học tập) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_247",
    "lesson": 50,
    "word": "おわります",
    "reading": "おわります",
    "romaji": "owarimasu",
    "meaningVn": "Kết thúc",
    "meaningEn": "finish",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おわります (おわります)」➔ Kết thúc。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おわります」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「おわります」の意味 (Kết thúc) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_248",
    "lesson": 50,
    "word": "いま",
    "reading": "いま",
    "romaji": "ima",
    "meaningVn": "Bây giờ",
    "meaningEn": "now",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いま (いま)」➔ Bây giờ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いま」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「いま」の意味 (Bây giờ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_249",
    "lesson": 50,
    "word": "なんじ",
    "reading": "なんじ",
    "romaji": "nanji",
    "meaningVn": "Mấy giờ",
    "meaningEn": "what time",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「なんじ (なんじ)」➔ Mấy giờ。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「なんじ」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「なんじ」の意味 (Mấy giờ) を動きや表情で表現。"
    }
  },
  {
    "id": "vocab_250",
    "lesson": 50,
    "word": "なんぷん",
    "reading": "なんぷん",
    "romaji": "nanpun",
    "meaningVn": "Mấy phút",
    "meaningEn": "what minute",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「なんぷん (なんぷん)」➔ Mấy phút。色分けカードとイラストイメージで暗記。",
      "auditory": "🗣️ 音声朗読 (TTS): 「なんぷん」の発音とアクセントを聞いて5回声に出す。",
      "kinesthetic": "✋ ジェスチャータスク: 「なんぷん」の意味 (Mấy phút) を動きや表情で表現。"
    }
  }
];

export function getVocabByLesson(lesson: number): MinnaVocabCard[] {
  return MINNA_VOCABULARY_CARDS.filter((v) => v.lesson === lesson);
}

export function getVocabByPartOfSpeech(pos: PartOfSpeech): MinnaVocabCard[] {
  return MINNA_VOCABULARY_CARDS.filter((v) => v.partOfSpeech === pos);
}

export function getVocabBySemanticCategory(cat: SemanticCategory): MinnaVocabCard[] {
  return MINNA_VOCABULARY_CARDS.filter((v) => v.semanticCategory === cat);
}
