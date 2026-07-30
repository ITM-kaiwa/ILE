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
      "visual": "🖼️ フラッシュカード: 「わたし (わたし)」➔ Tôi。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「わたし」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「わたし」の意味 (Tôi) を動作や表情で表現。"
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
      "visual": "🖼️ フラッシュカード: 「あなた (あなた)」➔ Bạn/Anh/Chị。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あなた」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「あなた」の意味 (Bạn/Anh/Chị) を動作や表情で表現。"
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
      "visual": "🖼️ フラッシュカード: 「あのひと (あのひと)」➔ Người kia。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あのひと」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「あのひと」の意味 (Người kia) を動作や表情で表現。"
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
      "visual": "🖼️ フラッシュカード: 「みなさん (みなさん)」➔ Các bạn/Mọi người。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「みなさん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「みなさん」の意味 (Các bạn/Mọi người) を動作や表情で表現。"
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
      "visual": "🖼️ フラッシュカード: 「せんせい (せんせい)」➔ Thầy/Cô giáo。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「せんせい」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「せんせい」の意味 (Thầy/Cô giáo) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_6",
    "lesson": 1,
    "word": "がくせい",
    "reading": "がくせい",
    "romaji": "gakusei",
    "meaningVn": "Học sinh/Sinh viên",
    "meaningEn": "student",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「がくせい (がくせい)」➔ Học sinh/Sinh viên。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「がくせい」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「がくせい」の意味 (Học sinh/Sinh viên) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_7",
    "lesson": 1,
    "word": "かいしゃいん",
    "reading": "かいしゃいん",
    "romaji": "kaishain",
    "meaningVn": "Nhân viên công ty",
    "meaningEn": "company employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃいん (かいしゃいん)」➔ Nhân viên công ty。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃいん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃいん」の意味 (Nhân viên công ty) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_8",
    "lesson": 1,
    "word": "ぎんこういん",
    "reading": "ぎんこういん",
    "romaji": "ginkoin",
    "meaningVn": "Nhân viên ngân hàng",
    "meaningEn": "bank employee",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ぎんこういん (ぎんこういん)」➔ Nhân viên ngân hàng。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ぎんこういん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ぎんこういん」の意味 (Nhân viên ngân hàng) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_9",
    "lesson": 1,
    "word": "いしゃ",
    "reading": "いしゃ",
    "romaji": "isha",
    "meaningVn": "Bác sĩ",
    "meaningEn": "doctor",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いしゃ (いしゃ)」➔ Bác sĩ。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いしゃ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「いしゃ」の意味 (Bác sĩ) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_10",
    "lesson": 1,
    "word": "けんきゅうしゃ",
    "reading": "けんきゅうしゃ",
    "romaji": "kenkyusha",
    "meaningVn": "Nhà nghiên cứu",
    "meaningEn": "researcher",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「けんきゅうしゃ (けんきゅうしゃ)」➔ Nhà nghiên cứu。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「けんきゅうしゃ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「けんきゅうしゃ」の意味 (Nhà nghiên cứu) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_11",
    "lesson": 1,
    "word": "だいがく",
    "reading": "だいがく",
    "romaji": "daigaku",
    "meaningVn": "Trường đại học",
    "meaningEn": "university",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "school",
    "semanticCategoryName": "学校・勉強 (Trường học)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「だいがく (だいがく)」➔ Trường đại học。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「だいがく」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「だいがく」の意味 (Trường đại học) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_12",
    "lesson": 1,
    "word": "びょういん",
    "reading": "びょういん",
    "romaji": "byouin",
    "meaningVn": "Bệnh viện",
    "meaningEn": "hospital",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「びょういん (びょういん)」➔ Bệnh viện。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「びょういん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「びょういん」の意味 (Bệnh viện) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_13",
    "lesson": 1,
    "word": "はい",
    "reading": "はい",
    "romaji": "hai",
    "meaningVn": "Vâng/Phải",
    "meaningEn": "yes",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はい (はい)」➔ Vâng/Phải。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はい」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「はい」の意味 (Vâng/Phải) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_14",
    "lesson": 1,
    "word": "いいえ",
    "reading": "いいえ",
    "romaji": "iie",
    "meaningVn": "Không/Không phải",
    "meaningEn": "no",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いいえ (いいえ)」➔ Không/Không phải。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いいえ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「いいえ」の意味 (Không/Không phải) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_15",
    "lesson": 1,
    "word": "はじめまして",
    "reading": "はじめまして",
    "romaji": "hajimemashite",
    "meaningVn": "Rất hân hạnh được gặp bạn",
    "meaningEn": "Nice to meet you",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-1-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はじめまして (はじめまして)」➔ Rất hân hạnh được gặp bạn。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はじめまして」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「はじめまして」の意味 (Rất hân hạnh được gặp bạn) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_16",
    "lesson": 2,
    "word": "これ",
    "reading": "これ",
    "romaji": "kore",
    "meaningVn": "Cái này",
    "meaningEn": "this",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「これ (これ)」➔ Cái này。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「これ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「これ」の意味 (Cái này) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_17",
    "lesson": 2,
    "word": "それ",
    "reading": "それ",
    "romaji": "sore",
    "meaningVn": "Cái đó",
    "meaningEn": "that",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「それ (それ)」➔ Cái đó。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「それ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「それ」の意味 (Cái đó) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_18",
    "lesson": 2,
    "word": "あれ",
    "reading": "あれ",
    "romaji": "are",
    "meaningVn": "Cái kia",
    "meaningEn": "that over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あれ (あれ)」➔ Cái kia。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あれ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「あれ」の意味 (Cái kia) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_19",
    "lesson": 2,
    "word": "ほん",
    "reading": "ほん",
    "romaji": "hon",
    "meaningVn": "Sách",
    "meaningEn": "book",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ほん (ほん)」➔ Sách。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ほん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ほん」の意味 (Sách) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_20",
    "lesson": 2,
    "word": "じしょ",
    "reading": "じしょ",
    "romaji": "jisho",
    "meaningVn": "Từ điển",
    "meaningEn": "dictionary",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じしょ (じしょ)」➔ Từ điển。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じしょ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「じしょ」の意味 (Từ điển) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_21",
    "lesson": 2,
    "word": "ざっし",
    "reading": "ざっし",
    "romaji": "zasshi",
    "meaningVn": "Tạp chí",
    "meaningEn": "magazine",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ざっし (ざっし)」➔ Tạp chí。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ざっし」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ざっし」の意味 (Tạp chí) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_22",
    "lesson": 2,
    "word": "しんぶん",
    "reading": "しんぶん",
    "romaji": "shinbun",
    "meaningVn": "Báo",
    "meaningEn": "newspaper",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しんぶん (しんぶん)」➔ Báo。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しんぶん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「しんぶん」の意味 (Báo) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_23",
    "lesson": 2,
    "word": "ノート",
    "reading": "ノート",
    "romaji": "noto",
    "meaningVn": "Vở",
    "meaningEn": "notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ノート (ノート)」➔ Vở。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ノート」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ノート」の意味 (Vở) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_24",
    "lesson": 2,
    "word": "てちょう",
    "reading": "てちょう",
    "romaji": "techou",
    "meaningVn": "Sổ tay",
    "meaningEn": "pocket notebook",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「てちょう (てちょう)」➔ Sổ tay。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「てちょう」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「てちょう」の意味 (Sổ tay) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_25",
    "lesson": 2,
    "word": "めいし",
    "reading": "めいし",
    "romaji": "meishi",
    "meaningVn": "Danh thiếp",
    "meaningEn": "name card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「めいし (めいし)」➔ Danh thiếp。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「めいし」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「めいし」の意味 (Danh thiếp) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_26",
    "lesson": 2,
    "word": "カード",
    "reading": "カード",
    "romaji": "kado",
    "meaningVn": "Thẻ",
    "meaningEn": "card",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「カード (カード)」➔ Thẻ。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「カード」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「カード」の意味 (Thẻ) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_27",
    "lesson": 2,
    "word": "えんぴつ",
    "reading": "えんぴつ",
    "romaji": "enpitsu",
    "meaningVn": "Bút chibi",
    "meaningEn": "pencil",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「えんぴつ (えんぴつ)」➔ Bút chibi。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「えんぴつ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「えんぴつ」の意味 (Bút chibi) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_28",
    "lesson": 2,
    "word": "ボールペン",
    "reading": "ボールペン",
    "romaji": "borupen",
    "meaningVn": "Bút bi",
    "meaningEn": "ballpoint pen",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ボールペン (ボールペン)」➔ Bút bi。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ボールペン」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ボールペン」の意味 (Bút bi) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_29",
    "lesson": 2,
    "word": "かぎ",
    "reading": "かぎ",
    "romaji": "kagi",
    "meaningVn": "Chìa khóa",
    "meaningEn": "key",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かぎ (かぎ)」➔ Chìa khóa。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かぎ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「かぎ」の意味 (Chìa khóa) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_30",
    "lesson": 2,
    "word": "とけい",
    "reading": "とけい",
    "romaji": "tokei",
    "meaningVn": "Đồng hồ",
    "meaningEn": "clock/watch",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「とけい (とけい)」➔ Đồng hồ。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「とけい」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「とけい」の意味 (Đồng hồ) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_31",
    "lesson": 2,
    "word": "かさ",
    "reading": "かさ",
    "romaji": "kasa",
    "meaningVn": "Cái ô/dù",
    "meaningEn": "umbrella",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かさ (かさ)」➔ Cái ô/dù。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かさ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「かさ」の意味 (Cái ô/dù) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_32",
    "lesson": 2,
    "word": "かばん",
    "reading": "かばん",
    "romaji": "kaban",
    "meaningVn": "Cặp/Túi xách",
    "meaningEn": "bag",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-2-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かばん (かばん)」➔ Cặp/Túi xách。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かばん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「かばん」の意味 (Cặp/Túi xách) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_33",
    "lesson": 3,
    "word": "ここ",
    "reading": "ここ",
    "romaji": "koko",
    "meaningVn": "Ở đây",
    "meaningEn": "here",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ここ (ここ)」➔ Ở đây。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ここ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ここ」の意味 (Ở đây) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_34",
    "lesson": 3,
    "word": "そこ",
    "reading": "そこ",
    "romaji": "soko",
    "meaningVn": "Ở đó",
    "meaningEn": "there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「そこ (そこ)」➔ Ở đó。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「そこ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「そこ」の意味 (Ở đó) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_35",
    "lesson": 3,
    "word": "あそこ",
    "reading": "あそこ",
    "romaji": "asoko",
    "meaningVn": "Ở kia",
    "meaningEn": "over there",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あそこ (あそこ)」➔ Ở kia。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あそこ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「あそこ」の意味 (Ở kia) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_36",
    "lesson": 3,
    "word": "どこ",
    "reading": "どこ",
    "romaji": "doko",
    "meaningVn": "Ở đâu",
    "meaningEn": "where",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「どこ (どこ)」➔ Ở đâu。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「どこ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「どこ」の意味 (Ở đâu) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_37",
    "lesson": 3,
    "word": "きょうしつ",
    "reading": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaningVn": "Lớp học",
    "meaningEn": "classroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「きょうしつ (きょうしつ)」➔ Lớp học。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「きょうしつ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「きょうしつ」の意味 (Lớp học) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_38",
    "lesson": 3,
    "word": "しょくどう",
    "reading": "しょくどう",
    "romaji": "shokudou",
    "meaningVn": "Nhà ăn",
    "meaningEn": "cafeteria",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しょくどう (しょくどう)」➔ Nhà ăn。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しょくどう」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「しょくどう」の意味 (Nhà ăn) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_39",
    "lesson": 3,
    "word": "じむしょ",
    "reading": "じむしょ",
    "romaji": "jimusho",
    "meaningVn": "Văn phòng",
    "meaningEn": "office",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じむしょ (じむしょ)」➔ Văn phòng。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じむしょ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「じむしょ」の意味 (Văn phòng) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_40",
    "lesson": 3,
    "word": "かいぎしつ",
    "reading": "かいぎしつ",
    "romaji": "kaigishitsu",
    "meaningVn": "Phòng họp",
    "meaningEn": "meeting room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいぎしつ (かいぎしつ)」➔ Phòng họp。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいぎしつ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいぎしつ」の意味 (Phòng họp) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_41",
    "lesson": 3,
    "word": "うけつけ",
    "reading": "うけつけ",
    "romaji": "uketsuke",
    "meaningVn": "Bàn lễ tân",
    "meaningEn": "reception desk",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うけつけ (うけつけ)」➔ Bàn lễ tân。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うけつけ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「うけつけ」の意味 (Bàn lễ tân) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_42",
    "lesson": 3,
    "word": "へや",
    "reading": "へや",
    "romaji": "heya",
    "meaningVn": "Căn phòng",
    "meaningEn": "room",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「へや (へや)」➔ Căn phòng。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「へや」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「へや」の意味 (Căn phòng) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_43",
    "lesson": 3,
    "word": "トイレ",
    "reading": "トイレ",
    "romaji": "toire",
    "meaningVn": "Nhà vệ sinh",
    "meaningEn": "restroom",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「トイレ (トイレ)」➔ Nhà vệ sinh。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「トイレ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「トイレ」の意味 (Nhà vệ sinh) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_44",
    "lesson": 3,
    "word": "かいだん",
    "reading": "かいだん",
    "romaji": "kaidan",
    "meaningVn": "Cầu thang",
    "meaningEn": "stairs",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいだん (かいだん)」➔ Cầu thang。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいだん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいだん」の意味 (Cầu thang) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_45",
    "lesson": 3,
    "word": "エレベーター",
    "reading": "エレベーター",
    "romaji": "erebeta",
    "meaningVn": "Thang máy",
    "meaningEn": "elevator",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「エレベーター (エレベーター)」➔ Thang máy。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「エレベーター」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「エレベーター」の意味 (Thang máy) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_46",
    "lesson": 3,
    "word": "うち",
    "reading": "うち",
    "romaji": "uchi",
    "meaningVn": "Nhà",
    "meaningEn": "home/house",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「うち (うち)」➔ Nhà。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「うち」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「うち」の意味 (Nhà) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_47",
    "lesson": 3,
    "word": "かいしゃ",
    "reading": "かいしゃ",
    "romaji": "kaisha",
    "meaningVn": "Công ty",
    "meaningEn": "company",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-3-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かいしゃ (かいしゃ)」➔ Công ty。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かいしゃ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「かいしゃ」の意味 (Công ty) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_48",
    "lesson": 4,
    "word": "おきます",
    "reading": "おきます",
    "romaji": "okimasu",
    "meaningVn": "Thức dậy",
    "meaningEn": "get up",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おきます (おきます)」➔ Thức dậy。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おきます」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「おきます」の意味 (Thức dậy) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_49",
    "lesson": 4,
    "word": "ねます",
    "reading": "ねます",
    "romaji": "nemasu",
    "meaningVn": "Đi ngủ",
    "meaningEn": "sleep",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ねます (ねます)」➔ Đi ngủ。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ねます」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ねます」の意味 (Đi ngủ) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_50",
    "lesson": 4,
    "word": "はたらきます",
    "reading": "はたらきます",
    "romaji": "hatarakimasu",
    "meaningVn": "Làm việc",
    "meaningEn": "work",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はたらきます (はたらきます)」➔ Làm việc。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はたらきます」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「はたらきます」の意味 (Làm việc) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_51",
    "lesson": 4,
    "word": "やすみます",
    "reading": "やすみます",
    "romaji": "yasumimasu",
    "meaningVn": "Nghỉ ngơi",
    "meaningEn": "rest",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「やすみます (やすみます)」➔ Nghỉ ngơi。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「やすみます」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「やすみます」の意味 (Nghỉ ngơi) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_52",
    "lesson": 4,
    "word": "べんきょうします",
    "reading": "べんきょうします",
    "romaji": "benkyoushimasu",
    "meaningVn": "Học tập",
    "meaningEn": "study",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「べんきょうします (べんきょうします)」➔ Học tập。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「べんきょうします」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「べんきょうします」の意味 (Học tập) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_53",
    "lesson": 4,
    "word": "おわります",
    "reading": "おわります",
    "romaji": "owarimasu",
    "meaningVn": "Kết thúc",
    "meaningEn": "finish",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「おわります (おわります)」➔ Kết thúc。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「おわります」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「おわります」の意味 (Kết thúc) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_54",
    "lesson": 4,
    "word": "いま",
    "reading": "いま",
    "romaji": "ima",
    "meaningVn": "Bây giờ",
    "meaningEn": "now",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いま (いま)」➔ Bây giờ。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いま」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「いま」の意味 (Bây giờ) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_55",
    "lesson": 4,
    "word": "なんじ",
    "reading": "なんじ",
    "romaji": "nanji",
    "meaningVn": "Mấy giờ",
    "meaningEn": "what time",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「なんじ (なんじ)」➔ Mấy giờ。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「なんじ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「なんじ」の意味 (Mấy giờ) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_56",
    "lesson": 4,
    "word": "なんぷん",
    "reading": "なんぷん",
    "romaji": "nanpun",
    "meaningVn": "Mấy phút",
    "meaningEn": "what minute",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「なんぷん (なんぷん)」➔ Mấy phút。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「なんぷん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「なんぷん」の意味 (Mấy phút) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_57",
    "lesson": 4,
    "word": "はん",
    "reading": "はん",
    "romaji": "han",
    "meaningVn": "Nửa/Rưỡi",
    "meaningEn": "half",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「はん (はん)」➔ Nửa/Rưỡi。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「はん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「はん」の意味 (Nửa/Rưỡi) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_58",
    "lesson": 4,
    "word": "ごぜん",
    "reading": "ごぜん",
    "romaji": "gozen",
    "meaningVn": "Buổi sáng (AM)",
    "meaningEn": "morning (AM)",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ごぜん (ごぜん)」➔ Buổi sáng (AM)。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ごぜん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ごぜん」の意味 (Buổi sáng (AM)) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_59",
    "lesson": 4,
    "word": "ごご",
    "reading": "ごご",
    "romaji": "gogo",
    "meaningVn": "Buổi chiều (PM)",
    "meaningEn": "afternoon (PM)",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ごご (ごご)」➔ Buổi chiều (PM)。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ごご」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ごご」の意味 (Buổi chiều (PM)) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_60",
    "lesson": 4,
    "word": "あさ",
    "reading": "あさ",
    "romaji": "asa",
    "meaningVn": "Buổi sáng",
    "meaningEn": "morning",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あさ (あさ)」➔ Buổi sáng。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あさ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「あさ」の意味 (Buổi sáng) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_61",
    "lesson": 4,
    "word": "ひる",
    "reading": "ひる",
    "romaji": "hiru",
    "meaningVn": "Buổi trưa",
    "meaningEn": "noon",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ひる (ひる)」➔ Buổi trưa。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ひる」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ひる」の意味 (Buổi trưa) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_62",
    "lesson": 4,
    "word": "ばん",
    "reading": "ばん",
    "romaji": "ban",
    "meaningVn": "Buổi tối",
    "meaningEn": "evening",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-4-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ばん (ばん)」➔ Buổi tối。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ばん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ばん」の意味 (Buổi tối) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_63",
    "lesson": 5,
    "word": "いきます",
    "reading": "いきます",
    "romaji": "ikimasu",
    "meaningVn": "Đi",
    "meaningEn": "go",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「いきます (いきます)」➔ Đi。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「いきます」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「いきます」の意味 (Đi) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_64",
    "lesson": 5,
    "word": "きます",
    "reading": "きます",
    "romaji": "kimasu",
    "meaningVn": "Đến",
    "meaningEn": "come",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「きます (きます)」➔ Đến。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「きます」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「きます」の意味 (Đến) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_65",
    "lesson": 5,
    "word": "かえります",
    "reading": "かえります",
    "romaji": "kaerimasu",
    "meaningVn": "Về",
    "meaningEn": "return",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「かえります (かえります)」➔ Về。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「かえります」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「かえります」の意味 (Về) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_66",
    "lesson": 5,
    "word": "がっこう",
    "reading": "がっこう",
    "romaji": "gakkou",
    "meaningVn": "Trường học",
    "meaningEn": "school",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「がっこう (がっこう)」➔ Trường học。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「がっこう」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「がっこう」の意味 (Trường học) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_67",
    "lesson": 5,
    "word": "スーパー",
    "reading": "スーパー",
    "romaji": "supa",
    "meaningVn": "Siêu thị",
    "meaningEn": "supermarket",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「スーパー (スーパー)」➔ Siêu thị。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「スーパー」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「スーパー」の意味 (Siêu thị) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_68",
    "lesson": 5,
    "word": "えき",
    "reading": "えき",
    "romaji": "eki",
    "meaningVn": "Nhà ga",
    "meaningEn": "station",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「えき (えき)」➔ Nhà ga。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「えき」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「えき」の意味 (Nhà ga) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_69",
    "lesson": 5,
    "word": "ひこうき",
    "reading": "ひこうき",
    "romaji": "hikouki",
    "meaningVn": "Máy bay",
    "meaningEn": "airplane",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ひこうき (ひこうき)」➔ Máy bay。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ひこうき」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ひこうき」の意味 (Máy bay) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_70",
    "lesson": 5,
    "word": "ふね",
    "reading": "ふね",
    "romaji": "fune",
    "meaningVn": "Tàu thủy",
    "meaningEn": "ship",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ふね (ふね)」➔ Tàu thủy。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ふね」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ふね」の意味 (Tàu thủy) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_71",
    "lesson": 5,
    "word": "でんしゃ",
    "reading": "でんしゃ",
    "romaji": "densha",
    "meaningVn": "Xe điện",
    "meaningEn": "train",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「でんしゃ (でんしゃ)」➔ Xe điện。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「でんしゃ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「でんしゃ」の意味 (Xe điện) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_72",
    "lesson": 5,
    "word": "ちかてつ",
    "reading": "ちかてつ",
    "romaji": "chikatetsu",
    "meaningVn": "Tàu điện ngầm",
    "meaningEn": "subway",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「ちかてつ (ちかてつ)」➔ Tàu điện ngầm。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「ちかてつ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「ちかてつ」の意味 (Tàu điện ngầm) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_73",
    "lesson": 5,
    "word": "しんかんせん",
    "reading": "しんかんせん",
    "romaji": "shinkansen",
    "meaningVn": "Tàu siêu tốc",
    "meaningEn": "bullet train",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「しんかんせん (しんかんせん)」➔ Tàu siêu tốc。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「しんかんせん」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「しんかんせん」の意味 (Tàu siêu tốc) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_74",
    "lesson": 5,
    "word": "バス",
    "reading": "バス",
    "romaji": "basu",
    "meaningVn": "Xe buýt",
    "meaningEn": "bus",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「バス (バス)」➔ Xe buýt。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「バス」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「バス」の意味 (Xe buýt) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_75",
    "lesson": 5,
    "word": "タクシー",
    "reading": "タクシー",
    "romaji": "takushi",
    "meaningVn": "Xe taxi",
    "meaningEn": "taxi",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「タクシー (タクシー)」➔ Xe taxi。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「タクシー」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「タクシー」の意味 (Xe taxi) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_76",
    "lesson": 5,
    "word": "じてんしゃ",
    "reading": "じてんしゃ",
    "romaji": "jitensha",
    "meaningVn": "Xe đạp",
    "meaningEn": "bicycle",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「じてんしゃ (じてんしゃ)」➔ Xe đạp。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「じてんしゃ」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「じてんしゃ」の意味 (Xe đạp) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_77",
    "lesson": 5,
    "word": "あるいて",
    "reading": "あるいて",
    "romaji": "aruite",
    "meaningVn": "Đi bộ",
    "meaningEn": "on foot",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-5-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「あるいて (あるいて)」➔ Đi bộ。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「あるいて」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「あるいて」の意味 (Đi bộ) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_78",
    "lesson": 6,
    "word": "単語_6_1",
    "reading": "たんご_6_1",
    "romaji": "tango_6_1",
    "meaningVn": "Từ vựng bài 6-1",
    "meaningEn": "Vocabulary 6-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_1 (たんご_6_1)」➔ Từ vựng bài 6-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_1」の意味 (Từ vựng bài 6-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_79",
    "lesson": 6,
    "word": "単語_6_2",
    "reading": "たんご_6_2",
    "romaji": "tango_6_2",
    "meaningVn": "Từ vựng bài 6-2",
    "meaningEn": "Vocabulary 6-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_2 (たんご_6_2)」➔ Từ vựng bài 6-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_2」の意味 (Từ vựng bài 6-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_80",
    "lesson": 6,
    "word": "単語_6_3",
    "reading": "たんご_6_3",
    "romaji": "tango_6_3",
    "meaningVn": "Từ vựng bài 6-3",
    "meaningEn": "Vocabulary 6-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_3 (たんご_6_3)」➔ Từ vựng bài 6-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_3」の意味 (Từ vựng bài 6-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_81",
    "lesson": 6,
    "word": "単語_6_4",
    "reading": "たんご_6_4",
    "romaji": "tango_6_4",
    "meaningVn": "Từ vựng bài 6-4",
    "meaningEn": "Vocabulary 6-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_4 (たんご_6_4)」➔ Từ vựng bài 6-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_4」の意味 (Từ vựng bài 6-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_82",
    "lesson": 6,
    "word": "単語_6_5",
    "reading": "たんご_6_5",
    "romaji": "tango_6_5",
    "meaningVn": "Từ vựng bài 6-5",
    "meaningEn": "Vocabulary 6-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_5 (たんご_6_5)」➔ Từ vựng bài 6-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_5」の意味 (Từ vựng bài 6-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_83",
    "lesson": 6,
    "word": "単語_6_6",
    "reading": "たんご_6_6",
    "romaji": "tango_6_6",
    "meaningVn": "Từ vựng bài 6-6",
    "meaningEn": "Vocabulary 6-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_6 (たんご_6_6)」➔ Từ vựng bài 6-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_6」の意味 (Từ vựng bài 6-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_84",
    "lesson": 6,
    "word": "単語_6_7",
    "reading": "たんご_6_7",
    "romaji": "tango_6_7",
    "meaningVn": "Từ vựng bài 6-7",
    "meaningEn": "Vocabulary 6-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_7 (たんご_6_7)」➔ Từ vựng bài 6-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_7」の意味 (Từ vựng bài 6-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_85",
    "lesson": 6,
    "word": "単語_6_8",
    "reading": "たんご_6_8",
    "romaji": "tango_6_8",
    "meaningVn": "Từ vựng bài 6-8",
    "meaningEn": "Vocabulary 6-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_8 (たんご_6_8)」➔ Từ vựng bài 6-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_8」の意味 (Từ vựng bài 6-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_86",
    "lesson": 6,
    "word": "単語_6_9",
    "reading": "たんご_6_9",
    "romaji": "tango_6_9",
    "meaningVn": "Từ vựng bài 6-9",
    "meaningEn": "Vocabulary 6-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_9 (たんご_6_9)」➔ Từ vựng bài 6-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_9」の意味 (Từ vựng bài 6-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_87",
    "lesson": 6,
    "word": "単語_6_10",
    "reading": "たんご_6_10",
    "romaji": "tango_6_10",
    "meaningVn": "Từ vựng bài 6-10",
    "meaningEn": "Vocabulary 6-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-6-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_6_10 (たんご_6_10)」➔ Từ vựng bài 6-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_6_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_6_10」の意味 (Từ vựng bài 6-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_88",
    "lesson": 7,
    "word": "単語_7_1",
    "reading": "たんご_7_1",
    "romaji": "tango_7_1",
    "meaningVn": "Từ vựng bài 7-1",
    "meaningEn": "Vocabulary 7-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_1 (たんご_7_1)」➔ Từ vựng bài 7-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_1」の意味 (Từ vựng bài 7-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_89",
    "lesson": 7,
    "word": "単語_7_2",
    "reading": "たんご_7_2",
    "romaji": "tango_7_2",
    "meaningVn": "Từ vựng bài 7-2",
    "meaningEn": "Vocabulary 7-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_2 (たんご_7_2)」➔ Từ vựng bài 7-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_2」の意味 (Từ vựng bài 7-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_90",
    "lesson": 7,
    "word": "単語_7_3",
    "reading": "たんご_7_3",
    "romaji": "tango_7_3",
    "meaningVn": "Từ vựng bài 7-3",
    "meaningEn": "Vocabulary 7-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_3 (たんご_7_3)」➔ Từ vựng bài 7-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_3」の意味 (Từ vựng bài 7-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_91",
    "lesson": 7,
    "word": "単語_7_4",
    "reading": "たんご_7_4",
    "romaji": "tango_7_4",
    "meaningVn": "Từ vựng bài 7-4",
    "meaningEn": "Vocabulary 7-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_4 (たんご_7_4)」➔ Từ vựng bài 7-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_4」の意味 (Từ vựng bài 7-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_92",
    "lesson": 7,
    "word": "単語_7_5",
    "reading": "たんご_7_5",
    "romaji": "tango_7_5",
    "meaningVn": "Từ vựng bài 7-5",
    "meaningEn": "Vocabulary 7-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_5 (たんご_7_5)」➔ Từ vựng bài 7-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_5」の意味 (Từ vựng bài 7-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_93",
    "lesson": 7,
    "word": "単語_7_6",
    "reading": "たんご_7_6",
    "romaji": "tango_7_6",
    "meaningVn": "Từ vựng bài 7-6",
    "meaningEn": "Vocabulary 7-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_6 (たんご_7_6)」➔ Từ vựng bài 7-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_6」の意味 (Từ vựng bài 7-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_94",
    "lesson": 7,
    "word": "単語_7_7",
    "reading": "たんご_7_7",
    "romaji": "tango_7_7",
    "meaningVn": "Từ vựng bài 7-7",
    "meaningEn": "Vocabulary 7-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_7 (たんご_7_7)」➔ Từ vựng bài 7-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_7」の意味 (Từ vựng bài 7-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_95",
    "lesson": 7,
    "word": "単語_7_8",
    "reading": "たんご_7_8",
    "romaji": "tango_7_8",
    "meaningVn": "Từ vựng bài 7-8",
    "meaningEn": "Vocabulary 7-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_8 (たんご_7_8)」➔ Từ vựng bài 7-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_8」の意味 (Từ vựng bài 7-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_96",
    "lesson": 7,
    "word": "単語_7_9",
    "reading": "たんご_7_9",
    "romaji": "tango_7_9",
    "meaningVn": "Từ vựng bài 7-9",
    "meaningEn": "Vocabulary 7-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_9 (たんご_7_9)」➔ Từ vựng bài 7-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_9」の意味 (Từ vựng bài 7-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_97",
    "lesson": 7,
    "word": "単語_7_10",
    "reading": "たんご_7_10",
    "romaji": "tango_7_10",
    "meaningVn": "Từ vựng bài 7-10",
    "meaningEn": "Vocabulary 7-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-7-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_7_10 (たんご_7_10)」➔ Từ vựng bài 7-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_7_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_7_10」の意味 (Từ vựng bài 7-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_98",
    "lesson": 8,
    "word": "単語_8_1",
    "reading": "たんご_8_1",
    "romaji": "tango_8_1",
    "meaningVn": "Từ vựng bài 8-1",
    "meaningEn": "Vocabulary 8-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_1 (たんご_8_1)」➔ Từ vựng bài 8-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_1」の意味 (Từ vựng bài 8-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_99",
    "lesson": 8,
    "word": "単語_8_2",
    "reading": "たんご_8_2",
    "romaji": "tango_8_2",
    "meaningVn": "Từ vựng bài 8-2",
    "meaningEn": "Vocabulary 8-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_2 (たんご_8_2)」➔ Từ vựng bài 8-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_2」の意味 (Từ vựng bài 8-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_100",
    "lesson": 8,
    "word": "単語_8_3",
    "reading": "たんご_8_3",
    "romaji": "tango_8_3",
    "meaningVn": "Từ vựng bài 8-3",
    "meaningEn": "Vocabulary 8-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_3 (たんご_8_3)」➔ Từ vựng bài 8-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_3」の意味 (Từ vựng bài 8-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_101",
    "lesson": 8,
    "word": "単語_8_4",
    "reading": "たんご_8_4",
    "romaji": "tango_8_4",
    "meaningVn": "Từ vựng bài 8-4",
    "meaningEn": "Vocabulary 8-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_4 (たんご_8_4)」➔ Từ vựng bài 8-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_4」の意味 (Từ vựng bài 8-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_102",
    "lesson": 8,
    "word": "単語_8_5",
    "reading": "たんご_8_5",
    "romaji": "tango_8_5",
    "meaningVn": "Từ vựng bài 8-5",
    "meaningEn": "Vocabulary 8-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_5 (たんご_8_5)」➔ Từ vựng bài 8-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_5」の意味 (Từ vựng bài 8-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_103",
    "lesson": 8,
    "word": "単語_8_6",
    "reading": "たんご_8_6",
    "romaji": "tango_8_6",
    "meaningVn": "Từ vựng bài 8-6",
    "meaningEn": "Vocabulary 8-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_6 (たんご_8_6)」➔ Từ vựng bài 8-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_6」の意味 (Từ vựng bài 8-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_104",
    "lesson": 8,
    "word": "単語_8_7",
    "reading": "たんご_8_7",
    "romaji": "tango_8_7",
    "meaningVn": "Từ vựng bài 8-7",
    "meaningEn": "Vocabulary 8-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_7 (たんご_8_7)」➔ Từ vựng bài 8-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_7」の意味 (Từ vựng bài 8-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_105",
    "lesson": 8,
    "word": "単語_8_8",
    "reading": "たんご_8_8",
    "romaji": "tango_8_8",
    "meaningVn": "Từ vựng bài 8-8",
    "meaningEn": "Vocabulary 8-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_8 (たんご_8_8)」➔ Từ vựng bài 8-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_8」の意味 (Từ vựng bài 8-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_106",
    "lesson": 8,
    "word": "単語_8_9",
    "reading": "たんご_8_9",
    "romaji": "tango_8_9",
    "meaningVn": "Từ vựng bài 8-9",
    "meaningEn": "Vocabulary 8-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_9 (たんご_8_9)」➔ Từ vựng bài 8-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_9」の意味 (Từ vựng bài 8-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_107",
    "lesson": 8,
    "word": "単語_8_10",
    "reading": "たんご_8_10",
    "romaji": "tango_8_10",
    "meaningVn": "Từ vựng bài 8-10",
    "meaningEn": "Vocabulary 8-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-8-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_8_10 (たんご_8_10)」➔ Từ vựng bài 8-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_8_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_8_10」の意味 (Từ vựng bài 8-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_108",
    "lesson": 9,
    "word": "単語_9_1",
    "reading": "たんご_9_1",
    "romaji": "tango_9_1",
    "meaningVn": "Từ vựng bài 9-1",
    "meaningEn": "Vocabulary 9-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_1 (たんご_9_1)」➔ Từ vựng bài 9-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_1」の意味 (Từ vựng bài 9-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_109",
    "lesson": 9,
    "word": "単語_9_2",
    "reading": "たんご_9_2",
    "romaji": "tango_9_2",
    "meaningVn": "Từ vựng bài 9-2",
    "meaningEn": "Vocabulary 9-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_2 (たんご_9_2)」➔ Từ vựng bài 9-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_2」の意味 (Từ vựng bài 9-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_110",
    "lesson": 9,
    "word": "単語_9_3",
    "reading": "たんご_9_3",
    "romaji": "tango_9_3",
    "meaningVn": "Từ vựng bài 9-3",
    "meaningEn": "Vocabulary 9-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_3 (たんご_9_3)」➔ Từ vựng bài 9-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_3」の意味 (Từ vựng bài 9-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_111",
    "lesson": 9,
    "word": "単語_9_4",
    "reading": "たんご_9_4",
    "romaji": "tango_9_4",
    "meaningVn": "Từ vựng bài 9-4",
    "meaningEn": "Vocabulary 9-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_4 (たんご_9_4)」➔ Từ vựng bài 9-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_4」の意味 (Từ vựng bài 9-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_112",
    "lesson": 9,
    "word": "単語_9_5",
    "reading": "たんご_9_5",
    "romaji": "tango_9_5",
    "meaningVn": "Từ vựng bài 9-5",
    "meaningEn": "Vocabulary 9-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_5 (たんご_9_5)」➔ Từ vựng bài 9-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_5」の意味 (Từ vựng bài 9-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_113",
    "lesson": 9,
    "word": "単語_9_6",
    "reading": "たんご_9_6",
    "romaji": "tango_9_6",
    "meaningVn": "Từ vựng bài 9-6",
    "meaningEn": "Vocabulary 9-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_6 (たんご_9_6)」➔ Từ vựng bài 9-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_6」の意味 (Từ vựng bài 9-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_114",
    "lesson": 9,
    "word": "単語_9_7",
    "reading": "たんご_9_7",
    "romaji": "tango_9_7",
    "meaningVn": "Từ vựng bài 9-7",
    "meaningEn": "Vocabulary 9-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_7 (たんご_9_7)」➔ Từ vựng bài 9-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_7」の意味 (Từ vựng bài 9-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_115",
    "lesson": 9,
    "word": "単語_9_8",
    "reading": "たんご_9_8",
    "romaji": "tango_9_8",
    "meaningVn": "Từ vựng bài 9-8",
    "meaningEn": "Vocabulary 9-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_8 (たんご_9_8)」➔ Từ vựng bài 9-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_8」の意味 (Từ vựng bài 9-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_116",
    "lesson": 9,
    "word": "単語_9_9",
    "reading": "たんご_9_9",
    "romaji": "tango_9_9",
    "meaningVn": "Từ vựng bài 9-9",
    "meaningEn": "Vocabulary 9-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_9 (たんご_9_9)」➔ Từ vựng bài 9-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_9」の意味 (Từ vựng bài 9-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_117",
    "lesson": 9,
    "word": "単語_9_10",
    "reading": "たんご_9_10",
    "romaji": "tango_9_10",
    "meaningVn": "Từ vựng bài 9-10",
    "meaningEn": "Vocabulary 9-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-9-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_9_10 (たんご_9_10)」➔ Từ vựng bài 9-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_9_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_9_10」の意味 (Từ vựng bài 9-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_118",
    "lesson": 10,
    "word": "単語_10_1",
    "reading": "たんご_10_1",
    "romaji": "tango_10_1",
    "meaningVn": "Từ vựng bài 10-1",
    "meaningEn": "Vocabulary 10-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_1 (たんご_10_1)」➔ Từ vựng bài 10-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_1」の意味 (Từ vựng bài 10-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_119",
    "lesson": 10,
    "word": "単語_10_2",
    "reading": "たんご_10_2",
    "romaji": "tango_10_2",
    "meaningVn": "Từ vựng bài 10-2",
    "meaningEn": "Vocabulary 10-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_2 (たんご_10_2)」➔ Từ vựng bài 10-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_2」の意味 (Từ vựng bài 10-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_120",
    "lesson": 10,
    "word": "単語_10_3",
    "reading": "たんご_10_3",
    "romaji": "tango_10_3",
    "meaningVn": "Từ vựng bài 10-3",
    "meaningEn": "Vocabulary 10-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_3 (たんご_10_3)」➔ Từ vựng bài 10-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_3」の意味 (Từ vựng bài 10-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_121",
    "lesson": 10,
    "word": "単語_10_4",
    "reading": "たんご_10_4",
    "romaji": "tango_10_4",
    "meaningVn": "Từ vựng bài 10-4",
    "meaningEn": "Vocabulary 10-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_4 (たんご_10_4)」➔ Từ vựng bài 10-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_4」の意味 (Từ vựng bài 10-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_122",
    "lesson": 10,
    "word": "単語_10_5",
    "reading": "たんご_10_5",
    "romaji": "tango_10_5",
    "meaningVn": "Từ vựng bài 10-5",
    "meaningEn": "Vocabulary 10-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_5 (たんご_10_5)」➔ Từ vựng bài 10-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_5」の意味 (Từ vựng bài 10-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_123",
    "lesson": 10,
    "word": "単語_10_6",
    "reading": "たんご_10_6",
    "romaji": "tango_10_6",
    "meaningVn": "Từ vựng bài 10-6",
    "meaningEn": "Vocabulary 10-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_6 (たんご_10_6)」➔ Từ vựng bài 10-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_6」の意味 (Từ vựng bài 10-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_124",
    "lesson": 10,
    "word": "単語_10_7",
    "reading": "たんご_10_7",
    "romaji": "tango_10_7",
    "meaningVn": "Từ vựng bài 10-7",
    "meaningEn": "Vocabulary 10-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_7 (たんご_10_7)」➔ Từ vựng bài 10-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_7」の意味 (Từ vựng bài 10-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_125",
    "lesson": 10,
    "word": "単語_10_8",
    "reading": "たんご_10_8",
    "romaji": "tango_10_8",
    "meaningVn": "Từ vựng bài 10-8",
    "meaningEn": "Vocabulary 10-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_8 (たんご_10_8)」➔ Từ vựng bài 10-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_8」の意味 (Từ vựng bài 10-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_126",
    "lesson": 10,
    "word": "単語_10_9",
    "reading": "たんご_10_9",
    "romaji": "tango_10_9",
    "meaningVn": "Từ vựng bài 10-9",
    "meaningEn": "Vocabulary 10-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_9 (たんご_10_9)」➔ Từ vựng bài 10-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_9」の意味 (Từ vựng bài 10-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_127",
    "lesson": 10,
    "word": "単語_10_10",
    "reading": "たんご_10_10",
    "romaji": "tango_10_10",
    "meaningVn": "Từ vựng bài 10-10",
    "meaningEn": "Vocabulary 10-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-10-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_10_10 (たんご_10_10)」➔ Từ vựng bài 10-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_10_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_10_10」の意味 (Từ vựng bài 10-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_128",
    "lesson": 11,
    "word": "単語_11_1",
    "reading": "たんご_11_1",
    "romaji": "tango_11_1",
    "meaningVn": "Từ vựng bài 11-1",
    "meaningEn": "Vocabulary 11-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_1 (たんご_11_1)」➔ Từ vựng bài 11-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_1」の意味 (Từ vựng bài 11-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_129",
    "lesson": 11,
    "word": "単語_11_2",
    "reading": "たんご_11_2",
    "romaji": "tango_11_2",
    "meaningVn": "Từ vựng bài 11-2",
    "meaningEn": "Vocabulary 11-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_2 (たんご_11_2)」➔ Từ vựng bài 11-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_2」の意味 (Từ vựng bài 11-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_130",
    "lesson": 11,
    "word": "単語_11_3",
    "reading": "たんご_11_3",
    "romaji": "tango_11_3",
    "meaningVn": "Từ vựng bài 11-3",
    "meaningEn": "Vocabulary 11-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_3 (たんご_11_3)」➔ Từ vựng bài 11-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_3」の意味 (Từ vựng bài 11-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_131",
    "lesson": 11,
    "word": "単語_11_4",
    "reading": "たんご_11_4",
    "romaji": "tango_11_4",
    "meaningVn": "Từ vựng bài 11-4",
    "meaningEn": "Vocabulary 11-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_4 (たんご_11_4)」➔ Từ vựng bài 11-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_4」の意味 (Từ vựng bài 11-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_132",
    "lesson": 11,
    "word": "単語_11_5",
    "reading": "たんご_11_5",
    "romaji": "tango_11_5",
    "meaningVn": "Từ vựng bài 11-5",
    "meaningEn": "Vocabulary 11-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_5 (たんご_11_5)」➔ Từ vựng bài 11-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_5」の意味 (Từ vựng bài 11-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_133",
    "lesson": 11,
    "word": "単語_11_6",
    "reading": "たんご_11_6",
    "romaji": "tango_11_6",
    "meaningVn": "Từ vựng bài 11-6",
    "meaningEn": "Vocabulary 11-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_6 (たんご_11_6)」➔ Từ vựng bài 11-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_6」の意味 (Từ vựng bài 11-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_134",
    "lesson": 11,
    "word": "単語_11_7",
    "reading": "たんご_11_7",
    "romaji": "tango_11_7",
    "meaningVn": "Từ vựng bài 11-7",
    "meaningEn": "Vocabulary 11-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_7 (たんご_11_7)」➔ Từ vựng bài 11-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_7」の意味 (Từ vựng bài 11-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_135",
    "lesson": 11,
    "word": "単語_11_8",
    "reading": "たんご_11_8",
    "romaji": "tango_11_8",
    "meaningVn": "Từ vựng bài 11-8",
    "meaningEn": "Vocabulary 11-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_8 (たんご_11_8)」➔ Từ vựng bài 11-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_8」の意味 (Từ vựng bài 11-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_136",
    "lesson": 11,
    "word": "単語_11_9",
    "reading": "たんご_11_9",
    "romaji": "tango_11_9",
    "meaningVn": "Từ vựng bài 11-9",
    "meaningEn": "Vocabulary 11-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_9 (たんご_11_9)」➔ Từ vựng bài 11-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_9」の意味 (Từ vựng bài 11-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_137",
    "lesson": 11,
    "word": "単語_11_10",
    "reading": "たんご_11_10",
    "romaji": "tango_11_10",
    "meaningVn": "Từ vựng bài 11-10",
    "meaningEn": "Vocabulary 11-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-11-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_11_10 (たんご_11_10)」➔ Từ vựng bài 11-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_11_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_11_10」の意味 (Từ vựng bài 11-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_138",
    "lesson": 12,
    "word": "単語_12_1",
    "reading": "たんご_12_1",
    "romaji": "tango_12_1",
    "meaningVn": "Từ vựng bài 12-1",
    "meaningEn": "Vocabulary 12-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_1 (たんご_12_1)」➔ Từ vựng bài 12-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_1」の意味 (Từ vựng bài 12-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_139",
    "lesson": 12,
    "word": "単語_12_2",
    "reading": "たんご_12_2",
    "romaji": "tango_12_2",
    "meaningVn": "Từ vựng bài 12-2",
    "meaningEn": "Vocabulary 12-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_2 (たんご_12_2)」➔ Từ vựng bài 12-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_2」の意味 (Từ vựng bài 12-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_140",
    "lesson": 12,
    "word": "単語_12_3",
    "reading": "たんご_12_3",
    "romaji": "tango_12_3",
    "meaningVn": "Từ vựng bài 12-3",
    "meaningEn": "Vocabulary 12-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_3 (たんご_12_3)」➔ Từ vựng bài 12-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_3」の意味 (Từ vựng bài 12-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_141",
    "lesson": 12,
    "word": "単語_12_4",
    "reading": "たんご_12_4",
    "romaji": "tango_12_4",
    "meaningVn": "Từ vựng bài 12-4",
    "meaningEn": "Vocabulary 12-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_4 (たんご_12_4)」➔ Từ vựng bài 12-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_4」の意味 (Từ vựng bài 12-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_142",
    "lesson": 12,
    "word": "単語_12_5",
    "reading": "たんご_12_5",
    "romaji": "tango_12_5",
    "meaningVn": "Từ vựng bài 12-5",
    "meaningEn": "Vocabulary 12-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_5 (たんご_12_5)」➔ Từ vựng bài 12-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_5」の意味 (Từ vựng bài 12-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_143",
    "lesson": 12,
    "word": "単語_12_6",
    "reading": "たんご_12_6",
    "romaji": "tango_12_6",
    "meaningVn": "Từ vựng bài 12-6",
    "meaningEn": "Vocabulary 12-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_6 (たんご_12_6)」➔ Từ vựng bài 12-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_6」の意味 (Từ vựng bài 12-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_144",
    "lesson": 12,
    "word": "単語_12_7",
    "reading": "たんご_12_7",
    "romaji": "tango_12_7",
    "meaningVn": "Từ vựng bài 12-7",
    "meaningEn": "Vocabulary 12-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_7 (たんご_12_7)」➔ Từ vựng bài 12-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_7」の意味 (Từ vựng bài 12-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_145",
    "lesson": 12,
    "word": "単語_12_8",
    "reading": "たんご_12_8",
    "romaji": "tango_12_8",
    "meaningVn": "Từ vựng bài 12-8",
    "meaningEn": "Vocabulary 12-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_8 (たんご_12_8)」➔ Từ vựng bài 12-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_8」の意味 (Từ vựng bài 12-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_146",
    "lesson": 12,
    "word": "単語_12_9",
    "reading": "たんご_12_9",
    "romaji": "tango_12_9",
    "meaningVn": "Từ vựng bài 12-9",
    "meaningEn": "Vocabulary 12-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_9 (たんご_12_9)」➔ Từ vựng bài 12-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_9」の意味 (Từ vựng bài 12-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_147",
    "lesson": 12,
    "word": "単語_12_10",
    "reading": "たんご_12_10",
    "romaji": "tango_12_10",
    "meaningVn": "Từ vựng bài 12-10",
    "meaningEn": "Vocabulary 12-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-12-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_12_10 (たんご_12_10)」➔ Từ vựng bài 12-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_12_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_12_10」の意味 (Từ vựng bài 12-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_148",
    "lesson": 13,
    "word": "単語_13_1",
    "reading": "たんご_13_1",
    "romaji": "tango_13_1",
    "meaningVn": "Từ vựng bài 13-1",
    "meaningEn": "Vocabulary 13-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_1 (たんご_13_1)」➔ Từ vựng bài 13-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_1」の意味 (Từ vựng bài 13-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_149",
    "lesson": 13,
    "word": "単語_13_2",
    "reading": "たんご_13_2",
    "romaji": "tango_13_2",
    "meaningVn": "Từ vựng bài 13-2",
    "meaningEn": "Vocabulary 13-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_2 (たんご_13_2)」➔ Từ vựng bài 13-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_2」の意味 (Từ vựng bài 13-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_150",
    "lesson": 13,
    "word": "単語_13_3",
    "reading": "たんご_13_3",
    "romaji": "tango_13_3",
    "meaningVn": "Từ vựng bài 13-3",
    "meaningEn": "Vocabulary 13-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_3 (たんご_13_3)」➔ Từ vựng bài 13-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_3」の意味 (Từ vựng bài 13-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_151",
    "lesson": 13,
    "word": "単語_13_4",
    "reading": "たんご_13_4",
    "romaji": "tango_13_4",
    "meaningVn": "Từ vựng bài 13-4",
    "meaningEn": "Vocabulary 13-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_4 (たんご_13_4)」➔ Từ vựng bài 13-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_4」の意味 (Từ vựng bài 13-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_152",
    "lesson": 13,
    "word": "単語_13_5",
    "reading": "たんご_13_5",
    "romaji": "tango_13_5",
    "meaningVn": "Từ vựng bài 13-5",
    "meaningEn": "Vocabulary 13-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_5 (たんご_13_5)」➔ Từ vựng bài 13-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_5」の意味 (Từ vựng bài 13-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_153",
    "lesson": 13,
    "word": "単語_13_6",
    "reading": "たんご_13_6",
    "romaji": "tango_13_6",
    "meaningVn": "Từ vựng bài 13-6",
    "meaningEn": "Vocabulary 13-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_6 (たんご_13_6)」➔ Từ vựng bài 13-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_6」の意味 (Từ vựng bài 13-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_154",
    "lesson": 13,
    "word": "単語_13_7",
    "reading": "たんご_13_7",
    "romaji": "tango_13_7",
    "meaningVn": "Từ vựng bài 13-7",
    "meaningEn": "Vocabulary 13-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_7 (たんご_13_7)」➔ Từ vựng bài 13-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_7」の意味 (Từ vựng bài 13-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_155",
    "lesson": 13,
    "word": "単語_13_8",
    "reading": "たんご_13_8",
    "romaji": "tango_13_8",
    "meaningVn": "Từ vựng bài 13-8",
    "meaningEn": "Vocabulary 13-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_8 (たんご_13_8)」➔ Từ vựng bài 13-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_8」の意味 (Từ vựng bài 13-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_156",
    "lesson": 13,
    "word": "単語_13_9",
    "reading": "たんご_13_9",
    "romaji": "tango_13_9",
    "meaningVn": "Từ vựng bài 13-9",
    "meaningEn": "Vocabulary 13-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_9 (たんご_13_9)」➔ Từ vựng bài 13-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_9」の意味 (Từ vựng bài 13-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_157",
    "lesson": 13,
    "word": "単語_13_10",
    "reading": "たんご_13_10",
    "romaji": "tango_13_10",
    "meaningVn": "Từ vựng bài 13-10",
    "meaningEn": "Vocabulary 13-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-13-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_13_10 (たんご_13_10)」➔ Từ vựng bài 13-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_13_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_13_10」の意味 (Từ vựng bài 13-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_158",
    "lesson": 14,
    "word": "単語_14_1",
    "reading": "たんご_14_1",
    "romaji": "tango_14_1",
    "meaningVn": "Từ vựng bài 14-1",
    "meaningEn": "Vocabulary 14-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_1 (たんご_14_1)」➔ Từ vựng bài 14-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_1」の意味 (Từ vựng bài 14-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_159",
    "lesson": 14,
    "word": "単語_14_2",
    "reading": "たんご_14_2",
    "romaji": "tango_14_2",
    "meaningVn": "Từ vựng bài 14-2",
    "meaningEn": "Vocabulary 14-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_2 (たんご_14_2)」➔ Từ vựng bài 14-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_2」の意味 (Từ vựng bài 14-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_160",
    "lesson": 14,
    "word": "単語_14_3",
    "reading": "たんご_14_3",
    "romaji": "tango_14_3",
    "meaningVn": "Từ vựng bài 14-3",
    "meaningEn": "Vocabulary 14-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_3 (たんご_14_3)」➔ Từ vựng bài 14-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_3」の意味 (Từ vựng bài 14-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_161",
    "lesson": 14,
    "word": "単語_14_4",
    "reading": "たんご_14_4",
    "romaji": "tango_14_4",
    "meaningVn": "Từ vựng bài 14-4",
    "meaningEn": "Vocabulary 14-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_4 (たんご_14_4)」➔ Từ vựng bài 14-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_4」の意味 (Từ vựng bài 14-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_162",
    "lesson": 14,
    "word": "単語_14_5",
    "reading": "たんご_14_5",
    "romaji": "tango_14_5",
    "meaningVn": "Từ vựng bài 14-5",
    "meaningEn": "Vocabulary 14-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_5 (たんご_14_5)」➔ Từ vựng bài 14-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_5」の意味 (Từ vựng bài 14-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_163",
    "lesson": 14,
    "word": "単語_14_6",
    "reading": "たんご_14_6",
    "romaji": "tango_14_6",
    "meaningVn": "Từ vựng bài 14-6",
    "meaningEn": "Vocabulary 14-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_6 (たんご_14_6)」➔ Từ vựng bài 14-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_6」の意味 (Từ vựng bài 14-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_164",
    "lesson": 14,
    "word": "単語_14_7",
    "reading": "たんご_14_7",
    "romaji": "tango_14_7",
    "meaningVn": "Từ vựng bài 14-7",
    "meaningEn": "Vocabulary 14-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_7 (たんご_14_7)」➔ Từ vựng bài 14-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_7」の意味 (Từ vựng bài 14-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_165",
    "lesson": 14,
    "word": "単語_14_8",
    "reading": "たんご_14_8",
    "romaji": "tango_14_8",
    "meaningVn": "Từ vựng bài 14-8",
    "meaningEn": "Vocabulary 14-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_8 (たんご_14_8)」➔ Từ vựng bài 14-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_8」の意味 (Từ vựng bài 14-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_166",
    "lesson": 14,
    "word": "単語_14_9",
    "reading": "たんご_14_9",
    "romaji": "tango_14_9",
    "meaningVn": "Từ vựng bài 14-9",
    "meaningEn": "Vocabulary 14-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_9 (たんご_14_9)」➔ Từ vựng bài 14-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_9」の意味 (Từ vựng bài 14-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_167",
    "lesson": 14,
    "word": "単語_14_10",
    "reading": "たんご_14_10",
    "romaji": "tango_14_10",
    "meaningVn": "Từ vựng bài 14-10",
    "meaningEn": "Vocabulary 14-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-14-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_14_10 (たんご_14_10)」➔ Từ vựng bài 14-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_14_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_14_10」の意味 (Từ vựng bài 14-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_168",
    "lesson": 15,
    "word": "単語_15_1",
    "reading": "たんご_15_1",
    "romaji": "tango_15_1",
    "meaningVn": "Từ vựng bài 15-1",
    "meaningEn": "Vocabulary 15-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_1 (たんご_15_1)」➔ Từ vựng bài 15-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_1」の意味 (Từ vựng bài 15-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_169",
    "lesson": 15,
    "word": "単語_15_2",
    "reading": "たんご_15_2",
    "romaji": "tango_15_2",
    "meaningVn": "Từ vựng bài 15-2",
    "meaningEn": "Vocabulary 15-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_2 (たんご_15_2)」➔ Từ vựng bài 15-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_2」の意味 (Từ vựng bài 15-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_170",
    "lesson": 15,
    "word": "単語_15_3",
    "reading": "たんご_15_3",
    "romaji": "tango_15_3",
    "meaningVn": "Từ vựng bài 15-3",
    "meaningEn": "Vocabulary 15-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_3 (たんご_15_3)」➔ Từ vựng bài 15-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_3」の意味 (Từ vựng bài 15-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_171",
    "lesson": 15,
    "word": "単語_15_4",
    "reading": "たんご_15_4",
    "romaji": "tango_15_4",
    "meaningVn": "Từ vựng bài 15-4",
    "meaningEn": "Vocabulary 15-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_4 (たんご_15_4)」➔ Từ vựng bài 15-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_4」の意味 (Từ vựng bài 15-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_172",
    "lesson": 15,
    "word": "単語_15_5",
    "reading": "たんご_15_5",
    "romaji": "tango_15_5",
    "meaningVn": "Từ vựng bài 15-5",
    "meaningEn": "Vocabulary 15-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_5 (たんご_15_5)」➔ Từ vựng bài 15-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_5」の意味 (Từ vựng bài 15-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_173",
    "lesson": 15,
    "word": "単語_15_6",
    "reading": "たんご_15_6",
    "romaji": "tango_15_6",
    "meaningVn": "Từ vựng bài 15-6",
    "meaningEn": "Vocabulary 15-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_6 (たんご_15_6)」➔ Từ vựng bài 15-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_6」の意味 (Từ vựng bài 15-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_174",
    "lesson": 15,
    "word": "単語_15_7",
    "reading": "たんご_15_7",
    "romaji": "tango_15_7",
    "meaningVn": "Từ vựng bài 15-7",
    "meaningEn": "Vocabulary 15-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_7 (たんご_15_7)」➔ Từ vựng bài 15-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_7」の意味 (Từ vựng bài 15-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_175",
    "lesson": 15,
    "word": "単語_15_8",
    "reading": "たんご_15_8",
    "romaji": "tango_15_8",
    "meaningVn": "Từ vựng bài 15-8",
    "meaningEn": "Vocabulary 15-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_8 (たんご_15_8)」➔ Từ vựng bài 15-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_8」の意味 (Từ vựng bài 15-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_176",
    "lesson": 15,
    "word": "単語_15_9",
    "reading": "たんご_15_9",
    "romaji": "tango_15_9",
    "meaningVn": "Từ vựng bài 15-9",
    "meaningEn": "Vocabulary 15-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_9 (たんご_15_9)」➔ Từ vựng bài 15-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_9」の意味 (Từ vựng bài 15-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_177",
    "lesson": 15,
    "word": "単語_15_10",
    "reading": "たんご_15_10",
    "romaji": "tango_15_10",
    "meaningVn": "Từ vựng bài 15-10",
    "meaningEn": "Vocabulary 15-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-15-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_15_10 (たんご_15_10)」➔ Từ vựng bài 15-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_15_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_15_10」の意味 (Từ vựng bài 15-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_178",
    "lesson": 16,
    "word": "単語_16_1",
    "reading": "たんご_16_1",
    "romaji": "tango_16_1",
    "meaningVn": "Từ vựng bài 16-1",
    "meaningEn": "Vocabulary 16-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_1 (たんご_16_1)」➔ Từ vựng bài 16-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_1」の意味 (Từ vựng bài 16-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_179",
    "lesson": 16,
    "word": "単語_16_2",
    "reading": "たんご_16_2",
    "romaji": "tango_16_2",
    "meaningVn": "Từ vựng bài 16-2",
    "meaningEn": "Vocabulary 16-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_2 (たんご_16_2)」➔ Từ vựng bài 16-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_2」の意味 (Từ vựng bài 16-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_180",
    "lesson": 16,
    "word": "単語_16_3",
    "reading": "たんご_16_3",
    "romaji": "tango_16_3",
    "meaningVn": "Từ vựng bài 16-3",
    "meaningEn": "Vocabulary 16-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_3 (たんご_16_3)」➔ Từ vựng bài 16-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_3」の意味 (Từ vựng bài 16-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_181",
    "lesson": 16,
    "word": "単語_16_4",
    "reading": "たんご_16_4",
    "romaji": "tango_16_4",
    "meaningVn": "Từ vựng bài 16-4",
    "meaningEn": "Vocabulary 16-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_4 (たんご_16_4)」➔ Từ vựng bài 16-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_4」の意味 (Từ vựng bài 16-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_182",
    "lesson": 16,
    "word": "単語_16_5",
    "reading": "たんご_16_5",
    "romaji": "tango_16_5",
    "meaningVn": "Từ vựng bài 16-5",
    "meaningEn": "Vocabulary 16-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_5 (たんご_16_5)」➔ Từ vựng bài 16-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_5」の意味 (Từ vựng bài 16-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_183",
    "lesson": 16,
    "word": "単語_16_6",
    "reading": "たんご_16_6",
    "romaji": "tango_16_6",
    "meaningVn": "Từ vựng bài 16-6",
    "meaningEn": "Vocabulary 16-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_6 (たんご_16_6)」➔ Từ vựng bài 16-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_6」の意味 (Từ vựng bài 16-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_184",
    "lesson": 16,
    "word": "単語_16_7",
    "reading": "たんご_16_7",
    "romaji": "tango_16_7",
    "meaningVn": "Từ vựng bài 16-7",
    "meaningEn": "Vocabulary 16-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_7 (たんご_16_7)」➔ Từ vựng bài 16-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_7」の意味 (Từ vựng bài 16-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_185",
    "lesson": 16,
    "word": "単語_16_8",
    "reading": "たんご_16_8",
    "romaji": "tango_16_8",
    "meaningVn": "Từ vựng bài 16-8",
    "meaningEn": "Vocabulary 16-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_8 (たんご_16_8)」➔ Từ vựng bài 16-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_8」の意味 (Từ vựng bài 16-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_186",
    "lesson": 16,
    "word": "単語_16_9",
    "reading": "たんご_16_9",
    "romaji": "tango_16_9",
    "meaningVn": "Từ vựng bài 16-9",
    "meaningEn": "Vocabulary 16-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_9 (たんご_16_9)」➔ Từ vựng bài 16-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_9」の意味 (Từ vựng bài 16-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_187",
    "lesson": 16,
    "word": "単語_16_10",
    "reading": "たんご_16_10",
    "romaji": "tango_16_10",
    "meaningVn": "Từ vựng bài 16-10",
    "meaningEn": "Vocabulary 16-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-16-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_16_10 (たんご_16_10)」➔ Từ vựng bài 16-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_16_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_16_10」の意味 (Từ vựng bài 16-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_188",
    "lesson": 17,
    "word": "単語_17_1",
    "reading": "たんご_17_1",
    "romaji": "tango_17_1",
    "meaningVn": "Từ vựng bài 17-1",
    "meaningEn": "Vocabulary 17-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_1 (たんご_17_1)」➔ Từ vựng bài 17-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_1」の意味 (Từ vựng bài 17-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_189",
    "lesson": 17,
    "word": "単語_17_2",
    "reading": "たんご_17_2",
    "romaji": "tango_17_2",
    "meaningVn": "Từ vựng bài 17-2",
    "meaningEn": "Vocabulary 17-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_2 (たんご_17_2)」➔ Từ vựng bài 17-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_2」の意味 (Từ vựng bài 17-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_190",
    "lesson": 17,
    "word": "単語_17_3",
    "reading": "たんご_17_3",
    "romaji": "tango_17_3",
    "meaningVn": "Từ vựng bài 17-3",
    "meaningEn": "Vocabulary 17-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_3 (たんご_17_3)」➔ Từ vựng bài 17-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_3」の意味 (Từ vựng bài 17-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_191",
    "lesson": 17,
    "word": "単語_17_4",
    "reading": "たんご_17_4",
    "romaji": "tango_17_4",
    "meaningVn": "Từ vựng bài 17-4",
    "meaningEn": "Vocabulary 17-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_4 (たんご_17_4)」➔ Từ vựng bài 17-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_4」の意味 (Từ vựng bài 17-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_192",
    "lesson": 17,
    "word": "単語_17_5",
    "reading": "たんご_17_5",
    "romaji": "tango_17_5",
    "meaningVn": "Từ vựng bài 17-5",
    "meaningEn": "Vocabulary 17-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_5 (たんご_17_5)」➔ Từ vựng bài 17-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_5」の意味 (Từ vựng bài 17-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_193",
    "lesson": 17,
    "word": "単語_17_6",
    "reading": "たんご_17_6",
    "romaji": "tango_17_6",
    "meaningVn": "Từ vựng bài 17-6",
    "meaningEn": "Vocabulary 17-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_6 (たんご_17_6)」➔ Từ vựng bài 17-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_6」の意味 (Từ vựng bài 17-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_194",
    "lesson": 17,
    "word": "単語_17_7",
    "reading": "たんご_17_7",
    "romaji": "tango_17_7",
    "meaningVn": "Từ vựng bài 17-7",
    "meaningEn": "Vocabulary 17-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_7 (たんご_17_7)」➔ Từ vựng bài 17-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_7」の意味 (Từ vựng bài 17-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_195",
    "lesson": 17,
    "word": "単語_17_8",
    "reading": "たんご_17_8",
    "romaji": "tango_17_8",
    "meaningVn": "Từ vựng bài 17-8",
    "meaningEn": "Vocabulary 17-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_8 (たんご_17_8)」➔ Từ vựng bài 17-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_8」の意味 (Từ vựng bài 17-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_196",
    "lesson": 17,
    "word": "単語_17_9",
    "reading": "たんご_17_9",
    "romaji": "tango_17_9",
    "meaningVn": "Từ vựng bài 17-9",
    "meaningEn": "Vocabulary 17-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_9 (たんご_17_9)」➔ Từ vựng bài 17-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_9」の意味 (Từ vựng bài 17-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_197",
    "lesson": 17,
    "word": "単語_17_10",
    "reading": "たんご_17_10",
    "romaji": "tango_17_10",
    "meaningVn": "Từ vựng bài 17-10",
    "meaningEn": "Vocabulary 17-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-17-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_17_10 (たんご_17_10)」➔ Từ vựng bài 17-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_17_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_17_10」の意味 (Từ vựng bài 17-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_198",
    "lesson": 18,
    "word": "単語_18_1",
    "reading": "たんご_18_1",
    "romaji": "tango_18_1",
    "meaningVn": "Từ vựng bài 18-1",
    "meaningEn": "Vocabulary 18-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_1 (たんご_18_1)」➔ Từ vựng bài 18-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_1」の意味 (Từ vựng bài 18-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_199",
    "lesson": 18,
    "word": "単語_18_2",
    "reading": "たんご_18_2",
    "romaji": "tango_18_2",
    "meaningVn": "Từ vựng bài 18-2",
    "meaningEn": "Vocabulary 18-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_2 (たんご_18_2)」➔ Từ vựng bài 18-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_2」の意味 (Từ vựng bài 18-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_200",
    "lesson": 18,
    "word": "単語_18_3",
    "reading": "たんご_18_3",
    "romaji": "tango_18_3",
    "meaningVn": "Từ vựng bài 18-3",
    "meaningEn": "Vocabulary 18-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_3 (たんご_18_3)」➔ Từ vựng bài 18-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_3」の意味 (Từ vựng bài 18-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_201",
    "lesson": 18,
    "word": "単語_18_4",
    "reading": "たんご_18_4",
    "romaji": "tango_18_4",
    "meaningVn": "Từ vựng bài 18-4",
    "meaningEn": "Vocabulary 18-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_4 (たんご_18_4)」➔ Từ vựng bài 18-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_4」の意味 (Từ vựng bài 18-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_202",
    "lesson": 18,
    "word": "単語_18_5",
    "reading": "たんご_18_5",
    "romaji": "tango_18_5",
    "meaningVn": "Từ vựng bài 18-5",
    "meaningEn": "Vocabulary 18-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_5 (たんご_18_5)」➔ Từ vựng bài 18-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_5」の意味 (Từ vựng bài 18-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_203",
    "lesson": 18,
    "word": "単語_18_6",
    "reading": "たんご_18_6",
    "romaji": "tango_18_6",
    "meaningVn": "Từ vựng bài 18-6",
    "meaningEn": "Vocabulary 18-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_6 (たんご_18_6)」➔ Từ vựng bài 18-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_6」の意味 (Từ vựng bài 18-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_204",
    "lesson": 18,
    "word": "単語_18_7",
    "reading": "たんご_18_7",
    "romaji": "tango_18_7",
    "meaningVn": "Từ vựng bài 18-7",
    "meaningEn": "Vocabulary 18-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_7 (たんご_18_7)」➔ Từ vựng bài 18-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_7」の意味 (Từ vựng bài 18-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_205",
    "lesson": 18,
    "word": "単語_18_8",
    "reading": "たんご_18_8",
    "romaji": "tango_18_8",
    "meaningVn": "Từ vựng bài 18-8",
    "meaningEn": "Vocabulary 18-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_8 (たんご_18_8)」➔ Từ vựng bài 18-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_8」の意味 (Từ vựng bài 18-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_206",
    "lesson": 18,
    "word": "単語_18_9",
    "reading": "たんご_18_9",
    "romaji": "tango_18_9",
    "meaningVn": "Từ vựng bài 18-9",
    "meaningEn": "Vocabulary 18-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_9 (たんご_18_9)」➔ Từ vựng bài 18-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_9」の意味 (Từ vựng bài 18-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_207",
    "lesson": 18,
    "word": "単語_18_10",
    "reading": "たんご_18_10",
    "romaji": "tango_18_10",
    "meaningVn": "Từ vựng bài 18-10",
    "meaningEn": "Vocabulary 18-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-18-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_18_10 (たんご_18_10)」➔ Từ vựng bài 18-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_18_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_18_10」の意味 (Từ vựng bài 18-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_208",
    "lesson": 19,
    "word": "単語_19_1",
    "reading": "たんご_19_1",
    "romaji": "tango_19_1",
    "meaningVn": "Từ vựng bài 19-1",
    "meaningEn": "Vocabulary 19-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_1 (たんご_19_1)」➔ Từ vựng bài 19-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_1」の意味 (Từ vựng bài 19-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_209",
    "lesson": 19,
    "word": "単語_19_2",
    "reading": "たんご_19_2",
    "romaji": "tango_19_2",
    "meaningVn": "Từ vựng bài 19-2",
    "meaningEn": "Vocabulary 19-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_2 (たんご_19_2)」➔ Từ vựng bài 19-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_2」の意味 (Từ vựng bài 19-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_210",
    "lesson": 19,
    "word": "単語_19_3",
    "reading": "たんご_19_3",
    "romaji": "tango_19_3",
    "meaningVn": "Từ vựng bài 19-3",
    "meaningEn": "Vocabulary 19-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_3 (たんご_19_3)」➔ Từ vựng bài 19-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_3」の意味 (Từ vựng bài 19-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_211",
    "lesson": 19,
    "word": "単語_19_4",
    "reading": "たんご_19_4",
    "romaji": "tango_19_4",
    "meaningVn": "Từ vựng bài 19-4",
    "meaningEn": "Vocabulary 19-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_4 (たんご_19_4)」➔ Từ vựng bài 19-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_4」の意味 (Từ vựng bài 19-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_212",
    "lesson": 19,
    "word": "単語_19_5",
    "reading": "たんご_19_5",
    "romaji": "tango_19_5",
    "meaningVn": "Từ vựng bài 19-5",
    "meaningEn": "Vocabulary 19-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_5 (たんご_19_5)」➔ Từ vựng bài 19-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_5」の意味 (Từ vựng bài 19-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_213",
    "lesson": 19,
    "word": "単語_19_6",
    "reading": "たんご_19_6",
    "romaji": "tango_19_6",
    "meaningVn": "Từ vựng bài 19-6",
    "meaningEn": "Vocabulary 19-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_6 (たんご_19_6)」➔ Từ vựng bài 19-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_6」の意味 (Từ vựng bài 19-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_214",
    "lesson": 19,
    "word": "単語_19_7",
    "reading": "たんご_19_7",
    "romaji": "tango_19_7",
    "meaningVn": "Từ vựng bài 19-7",
    "meaningEn": "Vocabulary 19-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_7 (たんご_19_7)」➔ Từ vựng bài 19-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_7」の意味 (Từ vựng bài 19-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_215",
    "lesson": 19,
    "word": "単語_19_8",
    "reading": "たんご_19_8",
    "romaji": "tango_19_8",
    "meaningVn": "Từ vựng bài 19-8",
    "meaningEn": "Vocabulary 19-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_8 (たんご_19_8)」➔ Từ vựng bài 19-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_8」の意味 (Từ vựng bài 19-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_216",
    "lesson": 19,
    "word": "単語_19_9",
    "reading": "たんご_19_9",
    "romaji": "tango_19_9",
    "meaningVn": "Từ vựng bài 19-9",
    "meaningEn": "Vocabulary 19-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_9 (たんご_19_9)」➔ Từ vựng bài 19-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_9」の意味 (Từ vựng bài 19-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_217",
    "lesson": 19,
    "word": "単語_19_10",
    "reading": "たんご_19_10",
    "romaji": "tango_19_10",
    "meaningVn": "Từ vựng bài 19-10",
    "meaningEn": "Vocabulary 19-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-19-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_19_10 (たんご_19_10)」➔ Từ vựng bài 19-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_19_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_19_10」の意味 (Từ vựng bài 19-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_218",
    "lesson": 20,
    "word": "単語_20_1",
    "reading": "たんご_20_1",
    "romaji": "tango_20_1",
    "meaningVn": "Từ vựng bài 20-1",
    "meaningEn": "Vocabulary 20-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_1 (たんご_20_1)」➔ Từ vựng bài 20-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_1」の意味 (Từ vựng bài 20-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_219",
    "lesson": 20,
    "word": "単語_20_2",
    "reading": "たんご_20_2",
    "romaji": "tango_20_2",
    "meaningVn": "Từ vựng bài 20-2",
    "meaningEn": "Vocabulary 20-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_2 (たんご_20_2)」➔ Từ vựng bài 20-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_2」の意味 (Từ vựng bài 20-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_220",
    "lesson": 20,
    "word": "単語_20_3",
    "reading": "たんご_20_3",
    "romaji": "tango_20_3",
    "meaningVn": "Từ vựng bài 20-3",
    "meaningEn": "Vocabulary 20-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_3 (たんご_20_3)」➔ Từ vựng bài 20-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_3」の意味 (Từ vựng bài 20-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_221",
    "lesson": 20,
    "word": "単語_20_4",
    "reading": "たんご_20_4",
    "romaji": "tango_20_4",
    "meaningVn": "Từ vựng bài 20-4",
    "meaningEn": "Vocabulary 20-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_4 (たんご_20_4)」➔ Từ vựng bài 20-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_4」の意味 (Từ vựng bài 20-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_222",
    "lesson": 20,
    "word": "単語_20_5",
    "reading": "たんご_20_5",
    "romaji": "tango_20_5",
    "meaningVn": "Từ vựng bài 20-5",
    "meaningEn": "Vocabulary 20-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_5 (たんご_20_5)」➔ Từ vựng bài 20-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_5」の意味 (Từ vựng bài 20-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_223",
    "lesson": 20,
    "word": "単語_20_6",
    "reading": "たんご_20_6",
    "romaji": "tango_20_6",
    "meaningVn": "Từ vựng bài 20-6",
    "meaningEn": "Vocabulary 20-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_6 (たんご_20_6)」➔ Từ vựng bài 20-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_6」の意味 (Từ vựng bài 20-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_224",
    "lesson": 20,
    "word": "単語_20_7",
    "reading": "たんご_20_7",
    "romaji": "tango_20_7",
    "meaningVn": "Từ vựng bài 20-7",
    "meaningEn": "Vocabulary 20-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_7 (たんご_20_7)」➔ Từ vựng bài 20-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_7」の意味 (Từ vựng bài 20-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_225",
    "lesson": 20,
    "word": "単語_20_8",
    "reading": "たんご_20_8",
    "romaji": "tango_20_8",
    "meaningVn": "Từ vựng bài 20-8",
    "meaningEn": "Vocabulary 20-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_8 (たんご_20_8)」➔ Từ vựng bài 20-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_8」の意味 (Từ vựng bài 20-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_226",
    "lesson": 20,
    "word": "単語_20_9",
    "reading": "たんご_20_9",
    "romaji": "tango_20_9",
    "meaningVn": "Từ vựng bài 20-9",
    "meaningEn": "Vocabulary 20-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_9 (たんご_20_9)」➔ Từ vựng bài 20-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_9」の意味 (Từ vựng bài 20-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_227",
    "lesson": 20,
    "word": "単語_20_10",
    "reading": "たんご_20_10",
    "romaji": "tango_20_10",
    "meaningVn": "Từ vựng bài 20-10",
    "meaningEn": "Vocabulary 20-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-20-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_20_10 (たんご_20_10)」➔ Từ vựng bài 20-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_20_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_20_10」の意味 (Từ vựng bài 20-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_228",
    "lesson": 21,
    "word": "単語_21_1",
    "reading": "たんご_21_1",
    "romaji": "tango_21_1",
    "meaningVn": "Từ vựng bài 21-1",
    "meaningEn": "Vocabulary 21-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_1 (たんご_21_1)」➔ Từ vựng bài 21-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_1」の意味 (Từ vựng bài 21-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_229",
    "lesson": 21,
    "word": "単語_21_2",
    "reading": "たんご_21_2",
    "romaji": "tango_21_2",
    "meaningVn": "Từ vựng bài 21-2",
    "meaningEn": "Vocabulary 21-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_2 (たんご_21_2)」➔ Từ vựng bài 21-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_2」の意味 (Từ vựng bài 21-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_230",
    "lesson": 21,
    "word": "単語_21_3",
    "reading": "たんご_21_3",
    "romaji": "tango_21_3",
    "meaningVn": "Từ vựng bài 21-3",
    "meaningEn": "Vocabulary 21-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_3 (たんご_21_3)」➔ Từ vựng bài 21-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_3」の意味 (Từ vựng bài 21-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_231",
    "lesson": 21,
    "word": "単語_21_4",
    "reading": "たんご_21_4",
    "romaji": "tango_21_4",
    "meaningVn": "Từ vựng bài 21-4",
    "meaningEn": "Vocabulary 21-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_4 (たんご_21_4)」➔ Từ vựng bài 21-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_4」の意味 (Từ vựng bài 21-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_232",
    "lesson": 21,
    "word": "単語_21_5",
    "reading": "たんご_21_5",
    "romaji": "tango_21_5",
    "meaningVn": "Từ vựng bài 21-5",
    "meaningEn": "Vocabulary 21-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_5 (たんご_21_5)」➔ Từ vựng bài 21-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_5」の意味 (Từ vựng bài 21-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_233",
    "lesson": 21,
    "word": "単語_21_6",
    "reading": "たんご_21_6",
    "romaji": "tango_21_6",
    "meaningVn": "Từ vựng bài 21-6",
    "meaningEn": "Vocabulary 21-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_6 (たんご_21_6)」➔ Từ vựng bài 21-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_6」の意味 (Từ vựng bài 21-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_234",
    "lesson": 21,
    "word": "単語_21_7",
    "reading": "たんご_21_7",
    "romaji": "tango_21_7",
    "meaningVn": "Từ vựng bài 21-7",
    "meaningEn": "Vocabulary 21-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_7 (たんご_21_7)」➔ Từ vựng bài 21-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_7」の意味 (Từ vựng bài 21-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_235",
    "lesson": 21,
    "word": "単語_21_8",
    "reading": "たんご_21_8",
    "romaji": "tango_21_8",
    "meaningVn": "Từ vựng bài 21-8",
    "meaningEn": "Vocabulary 21-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_8 (たんご_21_8)」➔ Từ vựng bài 21-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_8」の意味 (Từ vựng bài 21-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_236",
    "lesson": 21,
    "word": "単語_21_9",
    "reading": "たんご_21_9",
    "romaji": "tango_21_9",
    "meaningVn": "Từ vựng bài 21-9",
    "meaningEn": "Vocabulary 21-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_9 (たんご_21_9)」➔ Từ vựng bài 21-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_9」の意味 (Từ vựng bài 21-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_237",
    "lesson": 21,
    "word": "単語_21_10",
    "reading": "たんご_21_10",
    "romaji": "tango_21_10",
    "meaningVn": "Từ vựng bài 21-10",
    "meaningEn": "Vocabulary 21-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-21-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_21_10 (たんご_21_10)」➔ Từ vựng bài 21-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_21_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_21_10」の意味 (Từ vựng bài 21-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_238",
    "lesson": 22,
    "word": "単語_22_1",
    "reading": "たんご_22_1",
    "romaji": "tango_22_1",
    "meaningVn": "Từ vựng bài 22-1",
    "meaningEn": "Vocabulary 22-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_1 (たんご_22_1)」➔ Từ vựng bài 22-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_1」の意味 (Từ vựng bài 22-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_239",
    "lesson": 22,
    "word": "単語_22_2",
    "reading": "たんご_22_2",
    "romaji": "tango_22_2",
    "meaningVn": "Từ vựng bài 22-2",
    "meaningEn": "Vocabulary 22-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_2 (たんご_22_2)」➔ Từ vựng bài 22-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_2」の意味 (Từ vựng bài 22-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_240",
    "lesson": 22,
    "word": "単語_22_3",
    "reading": "たんご_22_3",
    "romaji": "tango_22_3",
    "meaningVn": "Từ vựng bài 22-3",
    "meaningEn": "Vocabulary 22-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_3 (たんご_22_3)」➔ Từ vựng bài 22-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_3」の意味 (Từ vựng bài 22-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_241",
    "lesson": 22,
    "word": "単語_22_4",
    "reading": "たんご_22_4",
    "romaji": "tango_22_4",
    "meaningVn": "Từ vựng bài 22-4",
    "meaningEn": "Vocabulary 22-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_4 (たんご_22_4)」➔ Từ vựng bài 22-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_4」の意味 (Từ vựng bài 22-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_242",
    "lesson": 22,
    "word": "単語_22_5",
    "reading": "たんご_22_5",
    "romaji": "tango_22_5",
    "meaningVn": "Từ vựng bài 22-5",
    "meaningEn": "Vocabulary 22-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_5 (たんご_22_5)」➔ Từ vựng bài 22-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_5」の意味 (Từ vựng bài 22-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_243",
    "lesson": 22,
    "word": "単語_22_6",
    "reading": "たんご_22_6",
    "romaji": "tango_22_6",
    "meaningVn": "Từ vựng bài 22-6",
    "meaningEn": "Vocabulary 22-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_6 (たんご_22_6)」➔ Từ vựng bài 22-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_6」の意味 (Từ vựng bài 22-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_244",
    "lesson": 22,
    "word": "単語_22_7",
    "reading": "たんご_22_7",
    "romaji": "tango_22_7",
    "meaningVn": "Từ vựng bài 22-7",
    "meaningEn": "Vocabulary 22-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_7 (たんご_22_7)」➔ Từ vựng bài 22-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_7」の意味 (Từ vựng bài 22-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_245",
    "lesson": 22,
    "word": "単語_22_8",
    "reading": "たんご_22_8",
    "romaji": "tango_22_8",
    "meaningVn": "Từ vựng bài 22-8",
    "meaningEn": "Vocabulary 22-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_8 (たんご_22_8)」➔ Từ vựng bài 22-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_8」の意味 (Từ vựng bài 22-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_246",
    "lesson": 22,
    "word": "単語_22_9",
    "reading": "たんご_22_9",
    "romaji": "tango_22_9",
    "meaningVn": "Từ vựng bài 22-9",
    "meaningEn": "Vocabulary 22-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_9 (たんご_22_9)」➔ Từ vựng bài 22-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_9」の意味 (Từ vựng bài 22-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_247",
    "lesson": 22,
    "word": "単語_22_10",
    "reading": "たんご_22_10",
    "romaji": "tango_22_10",
    "meaningVn": "Từ vựng bài 22-10",
    "meaningEn": "Vocabulary 22-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-22-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_22_10 (たんご_22_10)」➔ Từ vựng bài 22-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_22_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_22_10」の意味 (Từ vựng bài 22-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_248",
    "lesson": 23,
    "word": "単語_23_1",
    "reading": "たんご_23_1",
    "romaji": "tango_23_1",
    "meaningVn": "Từ vựng bài 23-1",
    "meaningEn": "Vocabulary 23-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_1 (たんご_23_1)」➔ Từ vựng bài 23-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_1」の意味 (Từ vựng bài 23-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_249",
    "lesson": 23,
    "word": "単語_23_2",
    "reading": "たんご_23_2",
    "romaji": "tango_23_2",
    "meaningVn": "Từ vựng bài 23-2",
    "meaningEn": "Vocabulary 23-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_2 (たんご_23_2)」➔ Từ vựng bài 23-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_2」の意味 (Từ vựng bài 23-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_250",
    "lesson": 23,
    "word": "単語_23_3",
    "reading": "たんご_23_3",
    "romaji": "tango_23_3",
    "meaningVn": "Từ vựng bài 23-3",
    "meaningEn": "Vocabulary 23-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_3 (たんご_23_3)」➔ Từ vựng bài 23-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_3」の意味 (Từ vựng bài 23-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_251",
    "lesson": 23,
    "word": "単語_23_4",
    "reading": "たんご_23_4",
    "romaji": "tango_23_4",
    "meaningVn": "Từ vựng bài 23-4",
    "meaningEn": "Vocabulary 23-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_4 (たんご_23_4)」➔ Từ vựng bài 23-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_4」の意味 (Từ vựng bài 23-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_252",
    "lesson": 23,
    "word": "単語_23_5",
    "reading": "たんご_23_5",
    "romaji": "tango_23_5",
    "meaningVn": "Từ vựng bài 23-5",
    "meaningEn": "Vocabulary 23-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_5 (たんご_23_5)」➔ Từ vựng bài 23-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_5」の意味 (Từ vựng bài 23-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_253",
    "lesson": 23,
    "word": "単語_23_6",
    "reading": "たんご_23_6",
    "romaji": "tango_23_6",
    "meaningVn": "Từ vựng bài 23-6",
    "meaningEn": "Vocabulary 23-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_6 (たんご_23_6)」➔ Từ vựng bài 23-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_6」の意味 (Từ vựng bài 23-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_254",
    "lesson": 23,
    "word": "単語_23_7",
    "reading": "たんご_23_7",
    "romaji": "tango_23_7",
    "meaningVn": "Từ vựng bài 23-7",
    "meaningEn": "Vocabulary 23-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_7 (たんご_23_7)」➔ Từ vựng bài 23-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_7」の意味 (Từ vựng bài 23-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_255",
    "lesson": 23,
    "word": "単語_23_8",
    "reading": "たんご_23_8",
    "romaji": "tango_23_8",
    "meaningVn": "Từ vựng bài 23-8",
    "meaningEn": "Vocabulary 23-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_8 (たんご_23_8)」➔ Từ vựng bài 23-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_8」の意味 (Từ vựng bài 23-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_256",
    "lesson": 23,
    "word": "単語_23_9",
    "reading": "たんご_23_9",
    "romaji": "tango_23_9",
    "meaningVn": "Từ vựng bài 23-9",
    "meaningEn": "Vocabulary 23-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_9 (たんご_23_9)」➔ Từ vựng bài 23-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_9」の意味 (Từ vựng bài 23-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_257",
    "lesson": 23,
    "word": "単語_23_10",
    "reading": "たんご_23_10",
    "romaji": "tango_23_10",
    "meaningVn": "Từ vựng bài 23-10",
    "meaningEn": "Vocabulary 23-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-23-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_23_10 (たんご_23_10)」➔ Từ vựng bài 23-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_23_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_23_10」の意味 (Từ vựng bài 23-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_258",
    "lesson": 24,
    "word": "単語_24_1",
    "reading": "たんご_24_1",
    "romaji": "tango_24_1",
    "meaningVn": "Từ vựng bài 24-1",
    "meaningEn": "Vocabulary 24-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_1 (たんご_24_1)」➔ Từ vựng bài 24-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_1」の意味 (Từ vựng bài 24-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_259",
    "lesson": 24,
    "word": "単語_24_2",
    "reading": "たんご_24_2",
    "romaji": "tango_24_2",
    "meaningVn": "Từ vựng bài 24-2",
    "meaningEn": "Vocabulary 24-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_2 (たんご_24_2)」➔ Từ vựng bài 24-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_2」の意味 (Từ vựng bài 24-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_260",
    "lesson": 24,
    "word": "単語_24_3",
    "reading": "たんご_24_3",
    "romaji": "tango_24_3",
    "meaningVn": "Từ vựng bài 24-3",
    "meaningEn": "Vocabulary 24-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_3 (たんご_24_3)」➔ Từ vựng bài 24-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_3」の意味 (Từ vựng bài 24-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_261",
    "lesson": 24,
    "word": "単語_24_4",
    "reading": "たんご_24_4",
    "romaji": "tango_24_4",
    "meaningVn": "Từ vựng bài 24-4",
    "meaningEn": "Vocabulary 24-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_4 (たんご_24_4)」➔ Từ vựng bài 24-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_4」の意味 (Từ vựng bài 24-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_262",
    "lesson": 24,
    "word": "単語_24_5",
    "reading": "たんご_24_5",
    "romaji": "tango_24_5",
    "meaningVn": "Từ vựng bài 24-5",
    "meaningEn": "Vocabulary 24-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_5 (たんご_24_5)」➔ Từ vựng bài 24-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_5」の意味 (Từ vựng bài 24-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_263",
    "lesson": 24,
    "word": "単語_24_6",
    "reading": "たんご_24_6",
    "romaji": "tango_24_6",
    "meaningVn": "Từ vựng bài 24-6",
    "meaningEn": "Vocabulary 24-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_6 (たんご_24_6)」➔ Từ vựng bài 24-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_6」の意味 (Từ vựng bài 24-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_264",
    "lesson": 24,
    "word": "単語_24_7",
    "reading": "たんご_24_7",
    "romaji": "tango_24_7",
    "meaningVn": "Từ vựng bài 24-7",
    "meaningEn": "Vocabulary 24-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_7 (たんご_24_7)」➔ Từ vựng bài 24-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_7」の意味 (Từ vựng bài 24-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_265",
    "lesson": 24,
    "word": "単語_24_8",
    "reading": "たんご_24_8",
    "romaji": "tango_24_8",
    "meaningVn": "Từ vựng bài 24-8",
    "meaningEn": "Vocabulary 24-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_8 (たんご_24_8)」➔ Từ vựng bài 24-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_8」の意味 (Từ vựng bài 24-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_266",
    "lesson": 24,
    "word": "単語_24_9",
    "reading": "たんご_24_9",
    "romaji": "tango_24_9",
    "meaningVn": "Từ vựng bài 24-9",
    "meaningEn": "Vocabulary 24-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_9 (たんご_24_9)」➔ Từ vựng bài 24-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_9」の意味 (Từ vựng bài 24-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_267",
    "lesson": 24,
    "word": "単語_24_10",
    "reading": "たんご_24_10",
    "romaji": "tango_24_10",
    "meaningVn": "Từ vựng bài 24-10",
    "meaningEn": "Vocabulary 24-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-24-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_24_10 (たんご_24_10)」➔ Từ vựng bài 24-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_24_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_24_10」の意味 (Từ vựng bài 24-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_268",
    "lesson": 25,
    "word": "単語_25_1",
    "reading": "たんご_25_1",
    "romaji": "tango_25_1",
    "meaningVn": "Từ vựng bài 25-1",
    "meaningEn": "Vocabulary 25-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_1 (たんご_25_1)」➔ Từ vựng bài 25-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_1」の意味 (Từ vựng bài 25-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_269",
    "lesson": 25,
    "word": "単語_25_2",
    "reading": "たんご_25_2",
    "romaji": "tango_25_2",
    "meaningVn": "Từ vựng bài 25-2",
    "meaningEn": "Vocabulary 25-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_2 (たんご_25_2)」➔ Từ vựng bài 25-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_2」の意味 (Từ vựng bài 25-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_270",
    "lesson": 25,
    "word": "単語_25_3",
    "reading": "たんご_25_3",
    "romaji": "tango_25_3",
    "meaningVn": "Từ vựng bài 25-3",
    "meaningEn": "Vocabulary 25-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_3 (たんご_25_3)」➔ Từ vựng bài 25-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_3」の意味 (Từ vựng bài 25-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_271",
    "lesson": 25,
    "word": "単語_25_4",
    "reading": "たんご_25_4",
    "romaji": "tango_25_4",
    "meaningVn": "Từ vựng bài 25-4",
    "meaningEn": "Vocabulary 25-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_4 (たんご_25_4)」➔ Từ vựng bài 25-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_4」の意味 (Từ vựng bài 25-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_272",
    "lesson": 25,
    "word": "単語_25_5",
    "reading": "たんご_25_5",
    "romaji": "tango_25_5",
    "meaningVn": "Từ vựng bài 25-5",
    "meaningEn": "Vocabulary 25-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_5 (たんご_25_5)」➔ Từ vựng bài 25-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_5」の意味 (Từ vựng bài 25-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_273",
    "lesson": 25,
    "word": "単語_25_6",
    "reading": "たんご_25_6",
    "romaji": "tango_25_6",
    "meaningVn": "Từ vựng bài 25-6",
    "meaningEn": "Vocabulary 25-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_6 (たんご_25_6)」➔ Từ vựng bài 25-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_6」の意味 (Từ vựng bài 25-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_274",
    "lesson": 25,
    "word": "単語_25_7",
    "reading": "たんご_25_7",
    "romaji": "tango_25_7",
    "meaningVn": "Từ vựng bài 25-7",
    "meaningEn": "Vocabulary 25-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_7 (たんご_25_7)」➔ Từ vựng bài 25-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_7」の意味 (Từ vựng bài 25-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_275",
    "lesson": 25,
    "word": "単語_25_8",
    "reading": "たんご_25_8",
    "romaji": "tango_25_8",
    "meaningVn": "Từ vựng bài 25-8",
    "meaningEn": "Vocabulary 25-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_8 (たんご_25_8)」➔ Từ vựng bài 25-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_8」の意味 (Từ vựng bài 25-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_276",
    "lesson": 25,
    "word": "単語_25_9",
    "reading": "たんご_25_9",
    "romaji": "tango_25_9",
    "meaningVn": "Từ vựng bài 25-9",
    "meaningEn": "Vocabulary 25-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_9 (たんご_25_9)」➔ Từ vựng bài 25-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_9」の意味 (Từ vựng bài 25-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_277",
    "lesson": 25,
    "word": "単語_25_10",
    "reading": "たんご_25_10",
    "romaji": "tango_25_10",
    "meaningVn": "Từ vựng bài 25-10",
    "meaningEn": "Vocabulary 25-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-25-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_25_10 (たんご_25_10)」➔ Từ vựng bài 25-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_25_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_25_10」の意味 (Từ vựng bài 25-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_278",
    "lesson": 26,
    "word": "単語_26_1",
    "reading": "たんご_26_1",
    "romaji": "tango_26_1",
    "meaningVn": "Từ vựng bài 26-1",
    "meaningEn": "Vocabulary 26-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_1 (たんご_26_1)」➔ Từ vựng bài 26-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_1」の意味 (Từ vựng bài 26-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_279",
    "lesson": 26,
    "word": "単語_26_2",
    "reading": "たんご_26_2",
    "romaji": "tango_26_2",
    "meaningVn": "Từ vựng bài 26-2",
    "meaningEn": "Vocabulary 26-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_2 (たんご_26_2)」➔ Từ vựng bài 26-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_2」の意味 (Từ vựng bài 26-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_280",
    "lesson": 26,
    "word": "単語_26_3",
    "reading": "たんご_26_3",
    "romaji": "tango_26_3",
    "meaningVn": "Từ vựng bài 26-3",
    "meaningEn": "Vocabulary 26-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_3 (たんご_26_3)」➔ Từ vựng bài 26-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_3」の意味 (Từ vựng bài 26-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_281",
    "lesson": 26,
    "word": "単語_26_4",
    "reading": "たんご_26_4",
    "romaji": "tango_26_4",
    "meaningVn": "Từ vựng bài 26-4",
    "meaningEn": "Vocabulary 26-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_4 (たんご_26_4)」➔ Từ vựng bài 26-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_4」の意味 (Từ vựng bài 26-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_282",
    "lesson": 26,
    "word": "単語_26_5",
    "reading": "たんご_26_5",
    "romaji": "tango_26_5",
    "meaningVn": "Từ vựng bài 26-5",
    "meaningEn": "Vocabulary 26-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_5 (たんご_26_5)」➔ Từ vựng bài 26-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_5」の意味 (Từ vựng bài 26-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_283",
    "lesson": 26,
    "word": "単語_26_6",
    "reading": "たんご_26_6",
    "romaji": "tango_26_6",
    "meaningVn": "Từ vựng bài 26-6",
    "meaningEn": "Vocabulary 26-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_6 (たんご_26_6)」➔ Từ vựng bài 26-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_6」の意味 (Từ vựng bài 26-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_284",
    "lesson": 26,
    "word": "単語_26_7",
    "reading": "たんご_26_7",
    "romaji": "tango_26_7",
    "meaningVn": "Từ vựng bài 26-7",
    "meaningEn": "Vocabulary 26-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_7 (たんご_26_7)」➔ Từ vựng bài 26-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_7」の意味 (Từ vựng bài 26-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_285",
    "lesson": 26,
    "word": "単語_26_8",
    "reading": "たんご_26_8",
    "romaji": "tango_26_8",
    "meaningVn": "Từ vựng bài 26-8",
    "meaningEn": "Vocabulary 26-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_8 (たんご_26_8)」➔ Từ vựng bài 26-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_8」の意味 (Từ vựng bài 26-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_286",
    "lesson": 26,
    "word": "単語_26_9",
    "reading": "たんご_26_9",
    "romaji": "tango_26_9",
    "meaningVn": "Từ vựng bài 26-9",
    "meaningEn": "Vocabulary 26-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_9 (たんご_26_9)」➔ Từ vựng bài 26-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_9」の意味 (Từ vựng bài 26-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_287",
    "lesson": 26,
    "word": "単語_26_10",
    "reading": "たんご_26_10",
    "romaji": "tango_26_10",
    "meaningVn": "Từ vựng bài 26-10",
    "meaningEn": "Vocabulary 26-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-26-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_26_10 (たんご_26_10)」➔ Từ vựng bài 26-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_26_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_26_10」の意味 (Từ vựng bài 26-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_288",
    "lesson": 27,
    "word": "単語_27_1",
    "reading": "たんご_27_1",
    "romaji": "tango_27_1",
    "meaningVn": "Từ vựng bài 27-1",
    "meaningEn": "Vocabulary 27-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_1 (たんご_27_1)」➔ Từ vựng bài 27-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_1」の意味 (Từ vựng bài 27-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_289",
    "lesson": 27,
    "word": "単語_27_2",
    "reading": "たんご_27_2",
    "romaji": "tango_27_2",
    "meaningVn": "Từ vựng bài 27-2",
    "meaningEn": "Vocabulary 27-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_2 (たんご_27_2)」➔ Từ vựng bài 27-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_2」の意味 (Từ vựng bài 27-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_290",
    "lesson": 27,
    "word": "単語_27_3",
    "reading": "たんご_27_3",
    "romaji": "tango_27_3",
    "meaningVn": "Từ vựng bài 27-3",
    "meaningEn": "Vocabulary 27-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_3 (たんご_27_3)」➔ Từ vựng bài 27-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_3」の意味 (Từ vựng bài 27-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_291",
    "lesson": 27,
    "word": "単語_27_4",
    "reading": "たんご_27_4",
    "romaji": "tango_27_4",
    "meaningVn": "Từ vựng bài 27-4",
    "meaningEn": "Vocabulary 27-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_4 (たんご_27_4)」➔ Từ vựng bài 27-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_4」の意味 (Từ vựng bài 27-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_292",
    "lesson": 27,
    "word": "単語_27_5",
    "reading": "たんご_27_5",
    "romaji": "tango_27_5",
    "meaningVn": "Từ vựng bài 27-5",
    "meaningEn": "Vocabulary 27-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_5 (たんご_27_5)」➔ Từ vựng bài 27-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_5」の意味 (Từ vựng bài 27-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_293",
    "lesson": 27,
    "word": "単語_27_6",
    "reading": "たんご_27_6",
    "romaji": "tango_27_6",
    "meaningVn": "Từ vựng bài 27-6",
    "meaningEn": "Vocabulary 27-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_6 (たんご_27_6)」➔ Từ vựng bài 27-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_6」の意味 (Từ vựng bài 27-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_294",
    "lesson": 27,
    "word": "単語_27_7",
    "reading": "たんご_27_7",
    "romaji": "tango_27_7",
    "meaningVn": "Từ vựng bài 27-7",
    "meaningEn": "Vocabulary 27-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_7 (たんご_27_7)」➔ Từ vựng bài 27-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_7」の意味 (Từ vựng bài 27-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_295",
    "lesson": 27,
    "word": "単語_27_8",
    "reading": "たんご_27_8",
    "romaji": "tango_27_8",
    "meaningVn": "Từ vựng bài 27-8",
    "meaningEn": "Vocabulary 27-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_8 (たんご_27_8)」➔ Từ vựng bài 27-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_8」の意味 (Từ vựng bài 27-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_296",
    "lesson": 27,
    "word": "単語_27_9",
    "reading": "たんご_27_9",
    "romaji": "tango_27_9",
    "meaningVn": "Từ vựng bài 27-9",
    "meaningEn": "Vocabulary 27-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_9 (たんご_27_9)」➔ Từ vựng bài 27-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_9」の意味 (Từ vựng bài 27-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_297",
    "lesson": 27,
    "word": "単語_27_10",
    "reading": "たんご_27_10",
    "romaji": "tango_27_10",
    "meaningVn": "Từ vựng bài 27-10",
    "meaningEn": "Vocabulary 27-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-27-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_27_10 (たんご_27_10)」➔ Từ vựng bài 27-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_27_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_27_10」の意味 (Từ vựng bài 27-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_298",
    "lesson": 28,
    "word": "単語_28_1",
    "reading": "たんご_28_1",
    "romaji": "tango_28_1",
    "meaningVn": "Từ vựng bài 28-1",
    "meaningEn": "Vocabulary 28-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_1 (たんご_28_1)」➔ Từ vựng bài 28-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_1」の意味 (Từ vựng bài 28-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_299",
    "lesson": 28,
    "word": "単語_28_2",
    "reading": "たんご_28_2",
    "romaji": "tango_28_2",
    "meaningVn": "Từ vựng bài 28-2",
    "meaningEn": "Vocabulary 28-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_2 (たんご_28_2)」➔ Từ vựng bài 28-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_2」の意味 (Từ vựng bài 28-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_300",
    "lesson": 28,
    "word": "単語_28_3",
    "reading": "たんご_28_3",
    "romaji": "tango_28_3",
    "meaningVn": "Từ vựng bài 28-3",
    "meaningEn": "Vocabulary 28-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_3 (たんご_28_3)」➔ Từ vựng bài 28-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_3」の意味 (Từ vựng bài 28-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_301",
    "lesson": 28,
    "word": "単語_28_4",
    "reading": "たんご_28_4",
    "romaji": "tango_28_4",
    "meaningVn": "Từ vựng bài 28-4",
    "meaningEn": "Vocabulary 28-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_4 (たんご_28_4)」➔ Từ vựng bài 28-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_4」の意味 (Từ vựng bài 28-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_302",
    "lesson": 28,
    "word": "単語_28_5",
    "reading": "たんご_28_5",
    "romaji": "tango_28_5",
    "meaningVn": "Từ vựng bài 28-5",
    "meaningEn": "Vocabulary 28-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_5 (たんご_28_5)」➔ Từ vựng bài 28-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_5」の意味 (Từ vựng bài 28-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_303",
    "lesson": 28,
    "word": "単語_28_6",
    "reading": "たんご_28_6",
    "romaji": "tango_28_6",
    "meaningVn": "Từ vựng bài 28-6",
    "meaningEn": "Vocabulary 28-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_6 (たんご_28_6)」➔ Từ vựng bài 28-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_6」の意味 (Từ vựng bài 28-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_304",
    "lesson": 28,
    "word": "単語_28_7",
    "reading": "たんご_28_7",
    "romaji": "tango_28_7",
    "meaningVn": "Từ vựng bài 28-7",
    "meaningEn": "Vocabulary 28-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_7 (たんご_28_7)」➔ Từ vựng bài 28-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_7」の意味 (Từ vựng bài 28-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_305",
    "lesson": 28,
    "word": "単語_28_8",
    "reading": "たんご_28_8",
    "romaji": "tango_28_8",
    "meaningVn": "Từ vựng bài 28-8",
    "meaningEn": "Vocabulary 28-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_8 (たんご_28_8)」➔ Từ vựng bài 28-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_8」の意味 (Từ vựng bài 28-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_306",
    "lesson": 28,
    "word": "単語_28_9",
    "reading": "たんご_28_9",
    "romaji": "tango_28_9",
    "meaningVn": "Từ vựng bài 28-9",
    "meaningEn": "Vocabulary 28-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_9 (たんご_28_9)」➔ Từ vựng bài 28-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_9」の意味 (Từ vựng bài 28-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_307",
    "lesson": 28,
    "word": "単語_28_10",
    "reading": "たんご_28_10",
    "romaji": "tango_28_10",
    "meaningVn": "Từ vựng bài 28-10",
    "meaningEn": "Vocabulary 28-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-28-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_28_10 (たんご_28_10)」➔ Từ vựng bài 28-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_28_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_28_10」の意味 (Từ vựng bài 28-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_308",
    "lesson": 29,
    "word": "単語_29_1",
    "reading": "たんご_29_1",
    "romaji": "tango_29_1",
    "meaningVn": "Từ vựng bài 29-1",
    "meaningEn": "Vocabulary 29-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_1 (たんご_29_1)」➔ Từ vựng bài 29-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_1」の意味 (Từ vựng bài 29-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_309",
    "lesson": 29,
    "word": "単語_29_2",
    "reading": "たんご_29_2",
    "romaji": "tango_29_2",
    "meaningVn": "Từ vựng bài 29-2",
    "meaningEn": "Vocabulary 29-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_2 (たんご_29_2)」➔ Từ vựng bài 29-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_2」の意味 (Từ vựng bài 29-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_310",
    "lesson": 29,
    "word": "単語_29_3",
    "reading": "たんご_29_3",
    "romaji": "tango_29_3",
    "meaningVn": "Từ vựng bài 29-3",
    "meaningEn": "Vocabulary 29-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_3 (たんご_29_3)」➔ Từ vựng bài 29-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_3」の意味 (Từ vựng bài 29-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_311",
    "lesson": 29,
    "word": "単語_29_4",
    "reading": "たんご_29_4",
    "romaji": "tango_29_4",
    "meaningVn": "Từ vựng bài 29-4",
    "meaningEn": "Vocabulary 29-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_4 (たんご_29_4)」➔ Từ vựng bài 29-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_4」の意味 (Từ vựng bài 29-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_312",
    "lesson": 29,
    "word": "単語_29_5",
    "reading": "たんご_29_5",
    "romaji": "tango_29_5",
    "meaningVn": "Từ vựng bài 29-5",
    "meaningEn": "Vocabulary 29-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_5 (たんご_29_5)」➔ Từ vựng bài 29-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_5」の意味 (Từ vựng bài 29-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_313",
    "lesson": 29,
    "word": "単語_29_6",
    "reading": "たんご_29_6",
    "romaji": "tango_29_6",
    "meaningVn": "Từ vựng bài 29-6",
    "meaningEn": "Vocabulary 29-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_6 (たんご_29_6)」➔ Từ vựng bài 29-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_6」の意味 (Từ vựng bài 29-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_314",
    "lesson": 29,
    "word": "単語_29_7",
    "reading": "たんご_29_7",
    "romaji": "tango_29_7",
    "meaningVn": "Từ vựng bài 29-7",
    "meaningEn": "Vocabulary 29-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_7 (たんご_29_7)」➔ Từ vựng bài 29-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_7」の意味 (Từ vựng bài 29-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_315",
    "lesson": 29,
    "word": "単語_29_8",
    "reading": "たんご_29_8",
    "romaji": "tango_29_8",
    "meaningVn": "Từ vựng bài 29-8",
    "meaningEn": "Vocabulary 29-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_8 (たんご_29_8)」➔ Từ vựng bài 29-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_8」の意味 (Từ vựng bài 29-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_316",
    "lesson": 29,
    "word": "単語_29_9",
    "reading": "たんご_29_9",
    "romaji": "tango_29_9",
    "meaningVn": "Từ vựng bài 29-9",
    "meaningEn": "Vocabulary 29-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_9 (たんご_29_9)」➔ Từ vựng bài 29-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_9」の意味 (Từ vựng bài 29-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_317",
    "lesson": 29,
    "word": "単語_29_10",
    "reading": "たんご_29_10",
    "romaji": "tango_29_10",
    "meaningVn": "Từ vựng bài 29-10",
    "meaningEn": "Vocabulary 29-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-29-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_29_10 (たんご_29_10)」➔ Từ vựng bài 29-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_29_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_29_10」の意味 (Từ vựng bài 29-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_318",
    "lesson": 30,
    "word": "単語_30_1",
    "reading": "たんご_30_1",
    "romaji": "tango_30_1",
    "meaningVn": "Từ vựng bài 30-1",
    "meaningEn": "Vocabulary 30-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_1 (たんご_30_1)」➔ Từ vựng bài 30-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_1」の意味 (Từ vựng bài 30-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_319",
    "lesson": 30,
    "word": "単語_30_2",
    "reading": "たんご_30_2",
    "romaji": "tango_30_2",
    "meaningVn": "Từ vựng bài 30-2",
    "meaningEn": "Vocabulary 30-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_2 (たんご_30_2)」➔ Từ vựng bài 30-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_2」の意味 (Từ vựng bài 30-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_320",
    "lesson": 30,
    "word": "単語_30_3",
    "reading": "たんご_30_3",
    "romaji": "tango_30_3",
    "meaningVn": "Từ vựng bài 30-3",
    "meaningEn": "Vocabulary 30-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_3 (たんご_30_3)」➔ Từ vựng bài 30-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_3」の意味 (Từ vựng bài 30-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_321",
    "lesson": 30,
    "word": "単語_30_4",
    "reading": "たんご_30_4",
    "romaji": "tango_30_4",
    "meaningVn": "Từ vựng bài 30-4",
    "meaningEn": "Vocabulary 30-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_4 (たんご_30_4)」➔ Từ vựng bài 30-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_4」の意味 (Từ vựng bài 30-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_322",
    "lesson": 30,
    "word": "単語_30_5",
    "reading": "たんご_30_5",
    "romaji": "tango_30_5",
    "meaningVn": "Từ vựng bài 30-5",
    "meaningEn": "Vocabulary 30-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_5 (たんご_30_5)」➔ Từ vựng bài 30-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_5」の意味 (Từ vựng bài 30-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_323",
    "lesson": 30,
    "word": "単語_30_6",
    "reading": "たんご_30_6",
    "romaji": "tango_30_6",
    "meaningVn": "Từ vựng bài 30-6",
    "meaningEn": "Vocabulary 30-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_6 (たんご_30_6)」➔ Từ vựng bài 30-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_6」の意味 (Từ vựng bài 30-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_324",
    "lesson": 30,
    "word": "単語_30_7",
    "reading": "たんご_30_7",
    "romaji": "tango_30_7",
    "meaningVn": "Từ vựng bài 30-7",
    "meaningEn": "Vocabulary 30-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_7 (たんご_30_7)」➔ Từ vựng bài 30-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_7」の意味 (Từ vựng bài 30-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_325",
    "lesson": 30,
    "word": "単語_30_8",
    "reading": "たんご_30_8",
    "romaji": "tango_30_8",
    "meaningVn": "Từ vựng bài 30-8",
    "meaningEn": "Vocabulary 30-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_8 (たんご_30_8)」➔ Từ vựng bài 30-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_8」の意味 (Từ vựng bài 30-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_326",
    "lesson": 30,
    "word": "単語_30_9",
    "reading": "たんご_30_9",
    "romaji": "tango_30_9",
    "meaningVn": "Từ vựng bài 30-9",
    "meaningEn": "Vocabulary 30-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_9 (たんご_30_9)」➔ Từ vựng bài 30-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_9」の意味 (Từ vựng bài 30-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_327",
    "lesson": 30,
    "word": "単語_30_10",
    "reading": "たんご_30_10",
    "romaji": "tango_30_10",
    "meaningVn": "Từ vựng bài 30-10",
    "meaningEn": "Vocabulary 30-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-30-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_30_10 (たんご_30_10)」➔ Từ vựng bài 30-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_30_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_30_10」の意味 (Từ vựng bài 30-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_328",
    "lesson": 31,
    "word": "単語_31_1",
    "reading": "たんご_31_1",
    "romaji": "tango_31_1",
    "meaningVn": "Từ vựng bài 31-1",
    "meaningEn": "Vocabulary 31-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_1 (たんご_31_1)」➔ Từ vựng bài 31-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_1」の意味 (Từ vựng bài 31-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_329",
    "lesson": 31,
    "word": "単語_31_2",
    "reading": "たんご_31_2",
    "romaji": "tango_31_2",
    "meaningVn": "Từ vựng bài 31-2",
    "meaningEn": "Vocabulary 31-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_2 (たんご_31_2)」➔ Từ vựng bài 31-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_2」の意味 (Từ vựng bài 31-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_330",
    "lesson": 31,
    "word": "単語_31_3",
    "reading": "たんご_31_3",
    "romaji": "tango_31_3",
    "meaningVn": "Từ vựng bài 31-3",
    "meaningEn": "Vocabulary 31-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_3 (たんご_31_3)」➔ Từ vựng bài 31-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_3」の意味 (Từ vựng bài 31-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_331",
    "lesson": 31,
    "word": "単語_31_4",
    "reading": "たんご_31_4",
    "romaji": "tango_31_4",
    "meaningVn": "Từ vựng bài 31-4",
    "meaningEn": "Vocabulary 31-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_4 (たんご_31_4)」➔ Từ vựng bài 31-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_4」の意味 (Từ vựng bài 31-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_332",
    "lesson": 31,
    "word": "単語_31_5",
    "reading": "たんご_31_5",
    "romaji": "tango_31_5",
    "meaningVn": "Từ vựng bài 31-5",
    "meaningEn": "Vocabulary 31-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_5 (たんご_31_5)」➔ Từ vựng bài 31-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_5」の意味 (Từ vựng bài 31-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_333",
    "lesson": 31,
    "word": "単語_31_6",
    "reading": "たんご_31_6",
    "romaji": "tango_31_6",
    "meaningVn": "Từ vựng bài 31-6",
    "meaningEn": "Vocabulary 31-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_6 (たんご_31_6)」➔ Từ vựng bài 31-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_6」の意味 (Từ vựng bài 31-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_334",
    "lesson": 31,
    "word": "単語_31_7",
    "reading": "たんご_31_7",
    "romaji": "tango_31_7",
    "meaningVn": "Từ vựng bài 31-7",
    "meaningEn": "Vocabulary 31-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_7 (たんご_31_7)」➔ Từ vựng bài 31-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_7」の意味 (Từ vựng bài 31-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_335",
    "lesson": 31,
    "word": "単語_31_8",
    "reading": "たんご_31_8",
    "romaji": "tango_31_8",
    "meaningVn": "Từ vựng bài 31-8",
    "meaningEn": "Vocabulary 31-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_8 (たんご_31_8)」➔ Từ vựng bài 31-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_8」の意味 (Từ vựng bài 31-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_336",
    "lesson": 31,
    "word": "単語_31_9",
    "reading": "たんご_31_9",
    "romaji": "tango_31_9",
    "meaningVn": "Từ vựng bài 31-9",
    "meaningEn": "Vocabulary 31-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_9 (たんご_31_9)」➔ Từ vựng bài 31-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_9」の意味 (Từ vựng bài 31-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_337",
    "lesson": 31,
    "word": "単語_31_10",
    "reading": "たんご_31_10",
    "romaji": "tango_31_10",
    "meaningVn": "Từ vựng bài 31-10",
    "meaningEn": "Vocabulary 31-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-31-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_31_10 (たんご_31_10)」➔ Từ vựng bài 31-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_31_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_31_10」の意味 (Từ vựng bài 31-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_338",
    "lesson": 32,
    "word": "単語_32_1",
    "reading": "たんご_32_1",
    "romaji": "tango_32_1",
    "meaningVn": "Từ vựng bài 32-1",
    "meaningEn": "Vocabulary 32-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_1 (たんご_32_1)」➔ Từ vựng bài 32-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_1」の意味 (Từ vựng bài 32-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_339",
    "lesson": 32,
    "word": "単語_32_2",
    "reading": "たんご_32_2",
    "romaji": "tango_32_2",
    "meaningVn": "Từ vựng bài 32-2",
    "meaningEn": "Vocabulary 32-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_2 (たんご_32_2)」➔ Từ vựng bài 32-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_2」の意味 (Từ vựng bài 32-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_340",
    "lesson": 32,
    "word": "単語_32_3",
    "reading": "たんご_32_3",
    "romaji": "tango_32_3",
    "meaningVn": "Từ vựng bài 32-3",
    "meaningEn": "Vocabulary 32-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_3 (たんご_32_3)」➔ Từ vựng bài 32-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_3」の意味 (Từ vựng bài 32-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_341",
    "lesson": 32,
    "word": "単語_32_4",
    "reading": "たんご_32_4",
    "romaji": "tango_32_4",
    "meaningVn": "Từ vựng bài 32-4",
    "meaningEn": "Vocabulary 32-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_4 (たんご_32_4)」➔ Từ vựng bài 32-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_4」の意味 (Từ vựng bài 32-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_342",
    "lesson": 32,
    "word": "単語_32_5",
    "reading": "たんご_32_5",
    "romaji": "tango_32_5",
    "meaningVn": "Từ vựng bài 32-5",
    "meaningEn": "Vocabulary 32-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_5 (たんご_32_5)」➔ Từ vựng bài 32-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_5」の意味 (Từ vựng bài 32-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_343",
    "lesson": 32,
    "word": "単語_32_6",
    "reading": "たんご_32_6",
    "romaji": "tango_32_6",
    "meaningVn": "Từ vựng bài 32-6",
    "meaningEn": "Vocabulary 32-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_6 (たんご_32_6)」➔ Từ vựng bài 32-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_6」の意味 (Từ vựng bài 32-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_344",
    "lesson": 32,
    "word": "単語_32_7",
    "reading": "たんご_32_7",
    "romaji": "tango_32_7",
    "meaningVn": "Từ vựng bài 32-7",
    "meaningEn": "Vocabulary 32-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_7 (たんご_32_7)」➔ Từ vựng bài 32-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_7」の意味 (Từ vựng bài 32-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_345",
    "lesson": 32,
    "word": "単語_32_8",
    "reading": "たんご_32_8",
    "romaji": "tango_32_8",
    "meaningVn": "Từ vựng bài 32-8",
    "meaningEn": "Vocabulary 32-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_8 (たんご_32_8)」➔ Từ vựng bài 32-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_8」の意味 (Từ vựng bài 32-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_346",
    "lesson": 32,
    "word": "単語_32_9",
    "reading": "たんご_32_9",
    "romaji": "tango_32_9",
    "meaningVn": "Từ vựng bài 32-9",
    "meaningEn": "Vocabulary 32-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_9 (たんご_32_9)」➔ Từ vựng bài 32-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_9」の意味 (Từ vựng bài 32-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_347",
    "lesson": 32,
    "word": "単語_32_10",
    "reading": "たんご_32_10",
    "romaji": "tango_32_10",
    "meaningVn": "Từ vựng bài 32-10",
    "meaningEn": "Vocabulary 32-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-32-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_32_10 (たんご_32_10)」➔ Từ vựng bài 32-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_32_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_32_10」の意味 (Từ vựng bài 32-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_348",
    "lesson": 33,
    "word": "単語_33_1",
    "reading": "たんご_33_1",
    "romaji": "tango_33_1",
    "meaningVn": "Từ vựng bài 33-1",
    "meaningEn": "Vocabulary 33-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_1 (たんご_33_1)」➔ Từ vựng bài 33-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_1」の意味 (Từ vựng bài 33-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_349",
    "lesson": 33,
    "word": "単語_33_2",
    "reading": "たんご_33_2",
    "romaji": "tango_33_2",
    "meaningVn": "Từ vựng bài 33-2",
    "meaningEn": "Vocabulary 33-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_2 (たんご_33_2)」➔ Từ vựng bài 33-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_2」の意味 (Từ vựng bài 33-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_350",
    "lesson": 33,
    "word": "単語_33_3",
    "reading": "たんご_33_3",
    "romaji": "tango_33_3",
    "meaningVn": "Từ vựng bài 33-3",
    "meaningEn": "Vocabulary 33-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_3 (たんご_33_3)」➔ Từ vựng bài 33-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_3」の意味 (Từ vựng bài 33-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_351",
    "lesson": 33,
    "word": "単語_33_4",
    "reading": "たんご_33_4",
    "romaji": "tango_33_4",
    "meaningVn": "Từ vựng bài 33-4",
    "meaningEn": "Vocabulary 33-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_4 (たんご_33_4)」➔ Từ vựng bài 33-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_4」の意味 (Từ vựng bài 33-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_352",
    "lesson": 33,
    "word": "単語_33_5",
    "reading": "たんご_33_5",
    "romaji": "tango_33_5",
    "meaningVn": "Từ vựng bài 33-5",
    "meaningEn": "Vocabulary 33-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_5 (たんご_33_5)」➔ Từ vựng bài 33-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_5」の意味 (Từ vựng bài 33-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_353",
    "lesson": 33,
    "word": "単語_33_6",
    "reading": "たんご_33_6",
    "romaji": "tango_33_6",
    "meaningVn": "Từ vựng bài 33-6",
    "meaningEn": "Vocabulary 33-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_6 (たんご_33_6)」➔ Từ vựng bài 33-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_6」の意味 (Từ vựng bài 33-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_354",
    "lesson": 33,
    "word": "単語_33_7",
    "reading": "たんご_33_7",
    "romaji": "tango_33_7",
    "meaningVn": "Từ vựng bài 33-7",
    "meaningEn": "Vocabulary 33-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_7 (たんご_33_7)」➔ Từ vựng bài 33-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_7」の意味 (Từ vựng bài 33-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_355",
    "lesson": 33,
    "word": "単語_33_8",
    "reading": "たんご_33_8",
    "romaji": "tango_33_8",
    "meaningVn": "Từ vựng bài 33-8",
    "meaningEn": "Vocabulary 33-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_8 (たんご_33_8)」➔ Từ vựng bài 33-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_8」の意味 (Từ vựng bài 33-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_356",
    "lesson": 33,
    "word": "単語_33_9",
    "reading": "たんご_33_9",
    "romaji": "tango_33_9",
    "meaningVn": "Từ vựng bài 33-9",
    "meaningEn": "Vocabulary 33-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_9 (たんご_33_9)」➔ Từ vựng bài 33-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_9」の意味 (Từ vựng bài 33-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_357",
    "lesson": 33,
    "word": "単語_33_10",
    "reading": "たんご_33_10",
    "romaji": "tango_33_10",
    "meaningVn": "Từ vựng bài 33-10",
    "meaningEn": "Vocabulary 33-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-33-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_33_10 (たんご_33_10)」➔ Từ vựng bài 33-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_33_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_33_10」の意味 (Từ vựng bài 33-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_358",
    "lesson": 34,
    "word": "単語_34_1",
    "reading": "たんご_34_1",
    "romaji": "tango_34_1",
    "meaningVn": "Từ vựng bài 34-1",
    "meaningEn": "Vocabulary 34-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_1 (たんご_34_1)」➔ Từ vựng bài 34-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_1」の意味 (Từ vựng bài 34-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_359",
    "lesson": 34,
    "word": "単語_34_2",
    "reading": "たんご_34_2",
    "romaji": "tango_34_2",
    "meaningVn": "Từ vựng bài 34-2",
    "meaningEn": "Vocabulary 34-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_2 (たんご_34_2)」➔ Từ vựng bài 34-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_2」の意味 (Từ vựng bài 34-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_360",
    "lesson": 34,
    "word": "単語_34_3",
    "reading": "たんご_34_3",
    "romaji": "tango_34_3",
    "meaningVn": "Từ vựng bài 34-3",
    "meaningEn": "Vocabulary 34-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_3 (たんご_34_3)」➔ Từ vựng bài 34-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_3」の意味 (Từ vựng bài 34-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_361",
    "lesson": 34,
    "word": "単語_34_4",
    "reading": "たんご_34_4",
    "romaji": "tango_34_4",
    "meaningVn": "Từ vựng bài 34-4",
    "meaningEn": "Vocabulary 34-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_4 (たんご_34_4)」➔ Từ vựng bài 34-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_4」の意味 (Từ vựng bài 34-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_362",
    "lesson": 34,
    "word": "単語_34_5",
    "reading": "たんご_34_5",
    "romaji": "tango_34_5",
    "meaningVn": "Từ vựng bài 34-5",
    "meaningEn": "Vocabulary 34-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_5 (たんご_34_5)」➔ Từ vựng bài 34-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_5」の意味 (Từ vựng bài 34-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_363",
    "lesson": 34,
    "word": "単語_34_6",
    "reading": "たんご_34_6",
    "romaji": "tango_34_6",
    "meaningVn": "Từ vựng bài 34-6",
    "meaningEn": "Vocabulary 34-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_6 (たんご_34_6)」➔ Từ vựng bài 34-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_6」の意味 (Từ vựng bài 34-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_364",
    "lesson": 34,
    "word": "単語_34_7",
    "reading": "たんご_34_7",
    "romaji": "tango_34_7",
    "meaningVn": "Từ vựng bài 34-7",
    "meaningEn": "Vocabulary 34-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_7 (たんご_34_7)」➔ Từ vựng bài 34-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_7」の意味 (Từ vựng bài 34-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_365",
    "lesson": 34,
    "word": "単語_34_8",
    "reading": "たんご_34_8",
    "romaji": "tango_34_8",
    "meaningVn": "Từ vựng bài 34-8",
    "meaningEn": "Vocabulary 34-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_8 (たんご_34_8)」➔ Từ vựng bài 34-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_8」の意味 (Từ vựng bài 34-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_366",
    "lesson": 34,
    "word": "単語_34_9",
    "reading": "たんご_34_9",
    "romaji": "tango_34_9",
    "meaningVn": "Từ vựng bài 34-9",
    "meaningEn": "Vocabulary 34-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_9 (たんご_34_9)」➔ Từ vựng bài 34-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_9」の意味 (Từ vựng bài 34-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_367",
    "lesson": 34,
    "word": "単語_34_10",
    "reading": "たんご_34_10",
    "romaji": "tango_34_10",
    "meaningVn": "Từ vựng bài 34-10",
    "meaningEn": "Vocabulary 34-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-34-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_34_10 (たんご_34_10)」➔ Từ vựng bài 34-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_34_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_34_10」の意味 (Từ vựng bài 34-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_368",
    "lesson": 35,
    "word": "単語_35_1",
    "reading": "たんご_35_1",
    "romaji": "tango_35_1",
    "meaningVn": "Từ vựng bài 35-1",
    "meaningEn": "Vocabulary 35-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_1 (たんご_35_1)」➔ Từ vựng bài 35-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_1」の意味 (Từ vựng bài 35-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_369",
    "lesson": 35,
    "word": "単語_35_2",
    "reading": "たんご_35_2",
    "romaji": "tango_35_2",
    "meaningVn": "Từ vựng bài 35-2",
    "meaningEn": "Vocabulary 35-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_2 (たんご_35_2)」➔ Từ vựng bài 35-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_2」の意味 (Từ vựng bài 35-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_370",
    "lesson": 35,
    "word": "単語_35_3",
    "reading": "たんご_35_3",
    "romaji": "tango_35_3",
    "meaningVn": "Từ vựng bài 35-3",
    "meaningEn": "Vocabulary 35-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_3 (たんご_35_3)」➔ Từ vựng bài 35-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_3」の意味 (Từ vựng bài 35-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_371",
    "lesson": 35,
    "word": "単語_35_4",
    "reading": "たんご_35_4",
    "romaji": "tango_35_4",
    "meaningVn": "Từ vựng bài 35-4",
    "meaningEn": "Vocabulary 35-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_4 (たんご_35_4)」➔ Từ vựng bài 35-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_4」の意味 (Từ vựng bài 35-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_372",
    "lesson": 35,
    "word": "単語_35_5",
    "reading": "たんご_35_5",
    "romaji": "tango_35_5",
    "meaningVn": "Từ vựng bài 35-5",
    "meaningEn": "Vocabulary 35-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_5 (たんご_35_5)」➔ Từ vựng bài 35-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_5」の意味 (Từ vựng bài 35-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_373",
    "lesson": 35,
    "word": "単語_35_6",
    "reading": "たんご_35_6",
    "romaji": "tango_35_6",
    "meaningVn": "Từ vựng bài 35-6",
    "meaningEn": "Vocabulary 35-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_6 (たんご_35_6)」➔ Từ vựng bài 35-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_6」の意味 (Từ vựng bài 35-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_374",
    "lesson": 35,
    "word": "単語_35_7",
    "reading": "たんご_35_7",
    "romaji": "tango_35_7",
    "meaningVn": "Từ vựng bài 35-7",
    "meaningEn": "Vocabulary 35-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_7 (たんご_35_7)」➔ Từ vựng bài 35-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_7」の意味 (Từ vựng bài 35-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_375",
    "lesson": 35,
    "word": "単語_35_8",
    "reading": "たんご_35_8",
    "romaji": "tango_35_8",
    "meaningVn": "Từ vựng bài 35-8",
    "meaningEn": "Vocabulary 35-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_8 (たんご_35_8)」➔ Từ vựng bài 35-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_8」の意味 (Từ vựng bài 35-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_376",
    "lesson": 35,
    "word": "単語_35_9",
    "reading": "たんご_35_9",
    "romaji": "tango_35_9",
    "meaningVn": "Từ vựng bài 35-9",
    "meaningEn": "Vocabulary 35-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_9 (たんご_35_9)」➔ Từ vựng bài 35-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_9」の意味 (Từ vựng bài 35-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_377",
    "lesson": 35,
    "word": "単語_35_10",
    "reading": "たんご_35_10",
    "romaji": "tango_35_10",
    "meaningVn": "Từ vựng bài 35-10",
    "meaningEn": "Vocabulary 35-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-35-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_35_10 (たんご_35_10)」➔ Từ vựng bài 35-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_35_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_35_10」の意味 (Từ vựng bài 35-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_378",
    "lesson": 36,
    "word": "単語_36_1",
    "reading": "たんご_36_1",
    "romaji": "tango_36_1",
    "meaningVn": "Từ vựng bài 36-1",
    "meaningEn": "Vocabulary 36-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_1 (たんご_36_1)」➔ Từ vựng bài 36-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_1」の意味 (Từ vựng bài 36-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_379",
    "lesson": 36,
    "word": "単語_36_2",
    "reading": "たんご_36_2",
    "romaji": "tango_36_2",
    "meaningVn": "Từ vựng bài 36-2",
    "meaningEn": "Vocabulary 36-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_2 (たんご_36_2)」➔ Từ vựng bài 36-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_2」の意味 (Từ vựng bài 36-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_380",
    "lesson": 36,
    "word": "単語_36_3",
    "reading": "たんご_36_3",
    "romaji": "tango_36_3",
    "meaningVn": "Từ vựng bài 36-3",
    "meaningEn": "Vocabulary 36-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_3 (たんご_36_3)」➔ Từ vựng bài 36-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_3」の意味 (Từ vựng bài 36-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_381",
    "lesson": 36,
    "word": "単語_36_4",
    "reading": "たんご_36_4",
    "romaji": "tango_36_4",
    "meaningVn": "Từ vựng bài 36-4",
    "meaningEn": "Vocabulary 36-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_4 (たんご_36_4)」➔ Từ vựng bài 36-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_4」の意味 (Từ vựng bài 36-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_382",
    "lesson": 36,
    "word": "単語_36_5",
    "reading": "たんご_36_5",
    "romaji": "tango_36_5",
    "meaningVn": "Từ vựng bài 36-5",
    "meaningEn": "Vocabulary 36-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_5 (たんご_36_5)」➔ Từ vựng bài 36-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_5」の意味 (Từ vựng bài 36-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_383",
    "lesson": 36,
    "word": "単語_36_6",
    "reading": "たんご_36_6",
    "romaji": "tango_36_6",
    "meaningVn": "Từ vựng bài 36-6",
    "meaningEn": "Vocabulary 36-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_6 (たんご_36_6)」➔ Từ vựng bài 36-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_6」の意味 (Từ vựng bài 36-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_384",
    "lesson": 36,
    "word": "単語_36_7",
    "reading": "たんご_36_7",
    "romaji": "tango_36_7",
    "meaningVn": "Từ vựng bài 36-7",
    "meaningEn": "Vocabulary 36-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_7 (たんご_36_7)」➔ Từ vựng bài 36-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_7」の意味 (Từ vựng bài 36-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_385",
    "lesson": 36,
    "word": "単語_36_8",
    "reading": "たんご_36_8",
    "romaji": "tango_36_8",
    "meaningVn": "Từ vựng bài 36-8",
    "meaningEn": "Vocabulary 36-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_8 (たんご_36_8)」➔ Từ vựng bài 36-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_8」の意味 (Từ vựng bài 36-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_386",
    "lesson": 36,
    "word": "単語_36_9",
    "reading": "たんご_36_9",
    "romaji": "tango_36_9",
    "meaningVn": "Từ vựng bài 36-9",
    "meaningEn": "Vocabulary 36-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_9 (たんご_36_9)」➔ Từ vựng bài 36-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_9」の意味 (Từ vựng bài 36-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_387",
    "lesson": 36,
    "word": "単語_36_10",
    "reading": "たんご_36_10",
    "romaji": "tango_36_10",
    "meaningVn": "Từ vựng bài 36-10",
    "meaningEn": "Vocabulary 36-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-36-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_36_10 (たんご_36_10)」➔ Từ vựng bài 36-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_36_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_36_10」の意味 (Từ vựng bài 36-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_388",
    "lesson": 37,
    "word": "単語_37_1",
    "reading": "たんご_37_1",
    "romaji": "tango_37_1",
    "meaningVn": "Từ vựng bài 37-1",
    "meaningEn": "Vocabulary 37-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_1 (たんご_37_1)」➔ Từ vựng bài 37-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_1」の意味 (Từ vựng bài 37-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_389",
    "lesson": 37,
    "word": "単語_37_2",
    "reading": "たんご_37_2",
    "romaji": "tango_37_2",
    "meaningVn": "Từ vựng bài 37-2",
    "meaningEn": "Vocabulary 37-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_2 (たんご_37_2)」➔ Từ vựng bài 37-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_2」の意味 (Từ vựng bài 37-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_390",
    "lesson": 37,
    "word": "単語_37_3",
    "reading": "たんご_37_3",
    "romaji": "tango_37_3",
    "meaningVn": "Từ vựng bài 37-3",
    "meaningEn": "Vocabulary 37-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_3 (たんご_37_3)」➔ Từ vựng bài 37-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_3」の意味 (Từ vựng bài 37-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_391",
    "lesson": 37,
    "word": "単語_37_4",
    "reading": "たんご_37_4",
    "romaji": "tango_37_4",
    "meaningVn": "Từ vựng bài 37-4",
    "meaningEn": "Vocabulary 37-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_4 (たんご_37_4)」➔ Từ vựng bài 37-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_4」の意味 (Từ vựng bài 37-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_392",
    "lesson": 37,
    "word": "単語_37_5",
    "reading": "たんご_37_5",
    "romaji": "tango_37_5",
    "meaningVn": "Từ vựng bài 37-5",
    "meaningEn": "Vocabulary 37-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_5 (たんご_37_5)」➔ Từ vựng bài 37-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_5」の意味 (Từ vựng bài 37-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_393",
    "lesson": 37,
    "word": "単語_37_6",
    "reading": "たんご_37_6",
    "romaji": "tango_37_6",
    "meaningVn": "Từ vựng bài 37-6",
    "meaningEn": "Vocabulary 37-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_6 (たんご_37_6)」➔ Từ vựng bài 37-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_6」の意味 (Từ vựng bài 37-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_394",
    "lesson": 37,
    "word": "単語_37_7",
    "reading": "たんご_37_7",
    "romaji": "tango_37_7",
    "meaningVn": "Từ vựng bài 37-7",
    "meaningEn": "Vocabulary 37-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_7 (たんご_37_7)」➔ Từ vựng bài 37-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_7」の意味 (Từ vựng bài 37-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_395",
    "lesson": 37,
    "word": "単語_37_8",
    "reading": "たんご_37_8",
    "romaji": "tango_37_8",
    "meaningVn": "Từ vựng bài 37-8",
    "meaningEn": "Vocabulary 37-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_8 (たんご_37_8)」➔ Từ vựng bài 37-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_8」の意味 (Từ vựng bài 37-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_396",
    "lesson": 37,
    "word": "単語_37_9",
    "reading": "たんご_37_9",
    "romaji": "tango_37_9",
    "meaningVn": "Từ vựng bài 37-9",
    "meaningEn": "Vocabulary 37-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_9 (たんご_37_9)」➔ Từ vựng bài 37-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_9」の意味 (Từ vựng bài 37-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_397",
    "lesson": 37,
    "word": "単語_37_10",
    "reading": "たんご_37_10",
    "romaji": "tango_37_10",
    "meaningVn": "Từ vựng bài 37-10",
    "meaningEn": "Vocabulary 37-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-37-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_37_10 (たんご_37_10)」➔ Từ vựng bài 37-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_37_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_37_10」の意味 (Từ vựng bài 37-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_398",
    "lesson": 38,
    "word": "単語_38_1",
    "reading": "たんご_38_1",
    "romaji": "tango_38_1",
    "meaningVn": "Từ vựng bài 38-1",
    "meaningEn": "Vocabulary 38-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_1 (たんご_38_1)」➔ Từ vựng bài 38-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_1」の意味 (Từ vựng bài 38-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_399",
    "lesson": 38,
    "word": "単語_38_2",
    "reading": "たんご_38_2",
    "romaji": "tango_38_2",
    "meaningVn": "Từ vựng bài 38-2",
    "meaningEn": "Vocabulary 38-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_2 (たんご_38_2)」➔ Từ vựng bài 38-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_2」の意味 (Từ vựng bài 38-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_400",
    "lesson": 38,
    "word": "単語_38_3",
    "reading": "たんご_38_3",
    "romaji": "tango_38_3",
    "meaningVn": "Từ vựng bài 38-3",
    "meaningEn": "Vocabulary 38-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_3 (たんご_38_3)」➔ Từ vựng bài 38-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_3」の意味 (Từ vựng bài 38-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_401",
    "lesson": 38,
    "word": "単語_38_4",
    "reading": "たんご_38_4",
    "romaji": "tango_38_4",
    "meaningVn": "Từ vựng bài 38-4",
    "meaningEn": "Vocabulary 38-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_4 (たんご_38_4)」➔ Từ vựng bài 38-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_4」の意味 (Từ vựng bài 38-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_402",
    "lesson": 38,
    "word": "単語_38_5",
    "reading": "たんご_38_5",
    "romaji": "tango_38_5",
    "meaningVn": "Từ vựng bài 38-5",
    "meaningEn": "Vocabulary 38-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_5 (たんご_38_5)」➔ Từ vựng bài 38-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_5」の意味 (Từ vựng bài 38-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_403",
    "lesson": 38,
    "word": "単語_38_6",
    "reading": "たんご_38_6",
    "romaji": "tango_38_6",
    "meaningVn": "Từ vựng bài 38-6",
    "meaningEn": "Vocabulary 38-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_6 (たんご_38_6)」➔ Từ vựng bài 38-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_6」の意味 (Từ vựng bài 38-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_404",
    "lesson": 38,
    "word": "単語_38_7",
    "reading": "たんご_38_7",
    "romaji": "tango_38_7",
    "meaningVn": "Từ vựng bài 38-7",
    "meaningEn": "Vocabulary 38-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_7 (たんご_38_7)」➔ Từ vựng bài 38-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_7」の意味 (Từ vựng bài 38-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_405",
    "lesson": 38,
    "word": "単語_38_8",
    "reading": "たんご_38_8",
    "romaji": "tango_38_8",
    "meaningVn": "Từ vựng bài 38-8",
    "meaningEn": "Vocabulary 38-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_8 (たんご_38_8)」➔ Từ vựng bài 38-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_8」の意味 (Từ vựng bài 38-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_406",
    "lesson": 38,
    "word": "単語_38_9",
    "reading": "たんご_38_9",
    "romaji": "tango_38_9",
    "meaningVn": "Từ vựng bài 38-9",
    "meaningEn": "Vocabulary 38-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_9 (たんご_38_9)」➔ Từ vựng bài 38-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_9」の意味 (Từ vựng bài 38-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_407",
    "lesson": 38,
    "word": "単語_38_10",
    "reading": "たんご_38_10",
    "romaji": "tango_38_10",
    "meaningVn": "Từ vựng bài 38-10",
    "meaningEn": "Vocabulary 38-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-38-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_38_10 (たんご_38_10)」➔ Từ vựng bài 38-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_38_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_38_10」の意味 (Từ vựng bài 38-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_408",
    "lesson": 39,
    "word": "単語_39_1",
    "reading": "たんご_39_1",
    "romaji": "tango_39_1",
    "meaningVn": "Từ vựng bài 39-1",
    "meaningEn": "Vocabulary 39-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_1 (たんご_39_1)」➔ Từ vựng bài 39-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_1」の意味 (Từ vựng bài 39-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_409",
    "lesson": 39,
    "word": "単語_39_2",
    "reading": "たんご_39_2",
    "romaji": "tango_39_2",
    "meaningVn": "Từ vựng bài 39-2",
    "meaningEn": "Vocabulary 39-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_2 (たんご_39_2)」➔ Từ vựng bài 39-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_2」の意味 (Từ vựng bài 39-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_410",
    "lesson": 39,
    "word": "単語_39_3",
    "reading": "たんご_39_3",
    "romaji": "tango_39_3",
    "meaningVn": "Từ vựng bài 39-3",
    "meaningEn": "Vocabulary 39-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_3 (たんご_39_3)」➔ Từ vựng bài 39-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_3」の意味 (Từ vựng bài 39-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_411",
    "lesson": 39,
    "word": "単語_39_4",
    "reading": "たんご_39_4",
    "romaji": "tango_39_4",
    "meaningVn": "Từ vựng bài 39-4",
    "meaningEn": "Vocabulary 39-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_4 (たんご_39_4)」➔ Từ vựng bài 39-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_4」の意味 (Từ vựng bài 39-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_412",
    "lesson": 39,
    "word": "単語_39_5",
    "reading": "たんご_39_5",
    "romaji": "tango_39_5",
    "meaningVn": "Từ vựng bài 39-5",
    "meaningEn": "Vocabulary 39-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_5 (たんご_39_5)」➔ Từ vựng bài 39-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_5」の意味 (Từ vựng bài 39-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_413",
    "lesson": 39,
    "word": "単語_39_6",
    "reading": "たんご_39_6",
    "romaji": "tango_39_6",
    "meaningVn": "Từ vựng bài 39-6",
    "meaningEn": "Vocabulary 39-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_6 (たんご_39_6)」➔ Từ vựng bài 39-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_6」の意味 (Từ vựng bài 39-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_414",
    "lesson": 39,
    "word": "単語_39_7",
    "reading": "たんご_39_7",
    "romaji": "tango_39_7",
    "meaningVn": "Từ vựng bài 39-7",
    "meaningEn": "Vocabulary 39-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_7 (たんご_39_7)」➔ Từ vựng bài 39-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_7」の意味 (Từ vựng bài 39-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_415",
    "lesson": 39,
    "word": "単語_39_8",
    "reading": "たんご_39_8",
    "romaji": "tango_39_8",
    "meaningVn": "Từ vựng bài 39-8",
    "meaningEn": "Vocabulary 39-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_8 (たんご_39_8)」➔ Từ vựng bài 39-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_8」の意味 (Từ vựng bài 39-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_416",
    "lesson": 39,
    "word": "単語_39_9",
    "reading": "たんご_39_9",
    "romaji": "tango_39_9",
    "meaningVn": "Từ vựng bài 39-9",
    "meaningEn": "Vocabulary 39-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_9 (たんご_39_9)」➔ Từ vựng bài 39-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_9」の意味 (Từ vựng bài 39-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_417",
    "lesson": 39,
    "word": "単語_39_10",
    "reading": "たんご_39_10",
    "romaji": "tango_39_10",
    "meaningVn": "Từ vựng bài 39-10",
    "meaningEn": "Vocabulary 39-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-39-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_39_10 (たんご_39_10)」➔ Từ vựng bài 39-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_39_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_39_10」の意味 (Từ vựng bài 39-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_418",
    "lesson": 40,
    "word": "単語_40_1",
    "reading": "たんご_40_1",
    "romaji": "tango_40_1",
    "meaningVn": "Từ vựng bài 40-1",
    "meaningEn": "Vocabulary 40-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_1 (たんご_40_1)」➔ Từ vựng bài 40-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_1」の意味 (Từ vựng bài 40-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_419",
    "lesson": 40,
    "word": "単語_40_2",
    "reading": "たんご_40_2",
    "romaji": "tango_40_2",
    "meaningVn": "Từ vựng bài 40-2",
    "meaningEn": "Vocabulary 40-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_2 (たんご_40_2)」➔ Từ vựng bài 40-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_2」の意味 (Từ vựng bài 40-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_420",
    "lesson": 40,
    "word": "単語_40_3",
    "reading": "たんご_40_3",
    "romaji": "tango_40_3",
    "meaningVn": "Từ vựng bài 40-3",
    "meaningEn": "Vocabulary 40-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_3 (たんご_40_3)」➔ Từ vựng bài 40-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_3」の意味 (Từ vựng bài 40-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_421",
    "lesson": 40,
    "word": "単語_40_4",
    "reading": "たんご_40_4",
    "romaji": "tango_40_4",
    "meaningVn": "Từ vựng bài 40-4",
    "meaningEn": "Vocabulary 40-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_4 (たんご_40_4)」➔ Từ vựng bài 40-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_4」の意味 (Từ vựng bài 40-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_422",
    "lesson": 40,
    "word": "単語_40_5",
    "reading": "たんご_40_5",
    "romaji": "tango_40_5",
    "meaningVn": "Từ vựng bài 40-5",
    "meaningEn": "Vocabulary 40-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_5 (たんご_40_5)」➔ Từ vựng bài 40-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_5」の意味 (Từ vựng bài 40-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_423",
    "lesson": 40,
    "word": "単語_40_6",
    "reading": "たんご_40_6",
    "romaji": "tango_40_6",
    "meaningVn": "Từ vựng bài 40-6",
    "meaningEn": "Vocabulary 40-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_6 (たんご_40_6)」➔ Từ vựng bài 40-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_6」の意味 (Từ vựng bài 40-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_424",
    "lesson": 40,
    "word": "単語_40_7",
    "reading": "たんご_40_7",
    "romaji": "tango_40_7",
    "meaningVn": "Từ vựng bài 40-7",
    "meaningEn": "Vocabulary 40-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_7 (たんご_40_7)」➔ Từ vựng bài 40-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_7」の意味 (Từ vựng bài 40-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_425",
    "lesson": 40,
    "word": "単語_40_8",
    "reading": "たんご_40_8",
    "romaji": "tango_40_8",
    "meaningVn": "Từ vựng bài 40-8",
    "meaningEn": "Vocabulary 40-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_8 (たんご_40_8)」➔ Từ vựng bài 40-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_8」の意味 (Từ vựng bài 40-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_426",
    "lesson": 40,
    "word": "単語_40_9",
    "reading": "たんご_40_9",
    "romaji": "tango_40_9",
    "meaningVn": "Từ vựng bài 40-9",
    "meaningEn": "Vocabulary 40-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_9 (たんご_40_9)」➔ Từ vựng bài 40-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_9」の意味 (Từ vựng bài 40-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_427",
    "lesson": 40,
    "word": "単語_40_10",
    "reading": "たんご_40_10",
    "romaji": "tango_40_10",
    "meaningVn": "Từ vựng bài 40-10",
    "meaningEn": "Vocabulary 40-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-40-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_40_10 (たんご_40_10)」➔ Từ vựng bài 40-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_40_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_40_10」の意味 (Từ vựng bài 40-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_428",
    "lesson": 41,
    "word": "単語_41_1",
    "reading": "たんご_41_1",
    "romaji": "tango_41_1",
    "meaningVn": "Từ vựng bài 41-1",
    "meaningEn": "Vocabulary 41-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_1 (たんご_41_1)」➔ Từ vựng bài 41-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_1」の意味 (Từ vựng bài 41-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_429",
    "lesson": 41,
    "word": "単語_41_2",
    "reading": "たんご_41_2",
    "romaji": "tango_41_2",
    "meaningVn": "Từ vựng bài 41-2",
    "meaningEn": "Vocabulary 41-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_2 (たんご_41_2)」➔ Từ vựng bài 41-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_2」の意味 (Từ vựng bài 41-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_430",
    "lesson": 41,
    "word": "単語_41_3",
    "reading": "たんご_41_3",
    "romaji": "tango_41_3",
    "meaningVn": "Từ vựng bài 41-3",
    "meaningEn": "Vocabulary 41-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_3 (たんご_41_3)」➔ Từ vựng bài 41-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_3」の意味 (Từ vựng bài 41-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_431",
    "lesson": 41,
    "word": "単語_41_4",
    "reading": "たんご_41_4",
    "romaji": "tango_41_4",
    "meaningVn": "Từ vựng bài 41-4",
    "meaningEn": "Vocabulary 41-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_4 (たんご_41_4)」➔ Từ vựng bài 41-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_4」の意味 (Từ vựng bài 41-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_432",
    "lesson": 41,
    "word": "単語_41_5",
    "reading": "たんご_41_5",
    "romaji": "tango_41_5",
    "meaningVn": "Từ vựng bài 41-5",
    "meaningEn": "Vocabulary 41-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_5 (たんご_41_5)」➔ Từ vựng bài 41-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_5」の意味 (Từ vựng bài 41-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_433",
    "lesson": 41,
    "word": "単語_41_6",
    "reading": "たんご_41_6",
    "romaji": "tango_41_6",
    "meaningVn": "Từ vựng bài 41-6",
    "meaningEn": "Vocabulary 41-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_6 (たんご_41_6)」➔ Từ vựng bài 41-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_6」の意味 (Từ vựng bài 41-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_434",
    "lesson": 41,
    "word": "単語_41_7",
    "reading": "たんご_41_7",
    "romaji": "tango_41_7",
    "meaningVn": "Từ vựng bài 41-7",
    "meaningEn": "Vocabulary 41-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_7 (たんご_41_7)」➔ Từ vựng bài 41-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_7」の意味 (Từ vựng bài 41-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_435",
    "lesson": 41,
    "word": "単語_41_8",
    "reading": "たんご_41_8",
    "romaji": "tango_41_8",
    "meaningVn": "Từ vựng bài 41-8",
    "meaningEn": "Vocabulary 41-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_8 (たんご_41_8)」➔ Từ vựng bài 41-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_8」の意味 (Từ vựng bài 41-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_436",
    "lesson": 41,
    "word": "単語_41_9",
    "reading": "たんご_41_9",
    "romaji": "tango_41_9",
    "meaningVn": "Từ vựng bài 41-9",
    "meaningEn": "Vocabulary 41-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_9 (たんご_41_9)」➔ Từ vựng bài 41-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_9」の意味 (Từ vựng bài 41-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_437",
    "lesson": 41,
    "word": "単語_41_10",
    "reading": "たんご_41_10",
    "romaji": "tango_41_10",
    "meaningVn": "Từ vựng bài 41-10",
    "meaningEn": "Vocabulary 41-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-41-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_41_10 (たんご_41_10)」➔ Từ vựng bài 41-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_41_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_41_10」の意味 (Từ vựng bài 41-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_438",
    "lesson": 42,
    "word": "単語_42_1",
    "reading": "たんご_42_1",
    "romaji": "tango_42_1",
    "meaningVn": "Từ vựng bài 42-1",
    "meaningEn": "Vocabulary 42-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_1 (たんご_42_1)」➔ Từ vựng bài 42-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_1」の意味 (Từ vựng bài 42-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_439",
    "lesson": 42,
    "word": "単語_42_2",
    "reading": "たんご_42_2",
    "romaji": "tango_42_2",
    "meaningVn": "Từ vựng bài 42-2",
    "meaningEn": "Vocabulary 42-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_2 (たんご_42_2)」➔ Từ vựng bài 42-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_2」の意味 (Từ vựng bài 42-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_440",
    "lesson": 42,
    "word": "単語_42_3",
    "reading": "たんご_42_3",
    "romaji": "tango_42_3",
    "meaningVn": "Từ vựng bài 42-3",
    "meaningEn": "Vocabulary 42-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_3 (たんご_42_3)」➔ Từ vựng bài 42-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_3」の意味 (Từ vựng bài 42-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_441",
    "lesson": 42,
    "word": "単語_42_4",
    "reading": "たんご_42_4",
    "romaji": "tango_42_4",
    "meaningVn": "Từ vựng bài 42-4",
    "meaningEn": "Vocabulary 42-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_4 (たんご_42_4)」➔ Từ vựng bài 42-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_4」の意味 (Từ vựng bài 42-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_442",
    "lesson": 42,
    "word": "単語_42_5",
    "reading": "たんご_42_5",
    "romaji": "tango_42_5",
    "meaningVn": "Từ vựng bài 42-5",
    "meaningEn": "Vocabulary 42-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_5 (たんご_42_5)」➔ Từ vựng bài 42-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_5」の意味 (Từ vựng bài 42-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_443",
    "lesson": 42,
    "word": "単語_42_6",
    "reading": "たんご_42_6",
    "romaji": "tango_42_6",
    "meaningVn": "Từ vựng bài 42-6",
    "meaningEn": "Vocabulary 42-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_6 (たんご_42_6)」➔ Từ vựng bài 42-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_6」の意味 (Từ vựng bài 42-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_444",
    "lesson": 42,
    "word": "単語_42_7",
    "reading": "たんご_42_7",
    "romaji": "tango_42_7",
    "meaningVn": "Từ vựng bài 42-7",
    "meaningEn": "Vocabulary 42-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_7 (たんご_42_7)」➔ Từ vựng bài 42-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_7」の意味 (Từ vựng bài 42-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_445",
    "lesson": 42,
    "word": "単語_42_8",
    "reading": "たんご_42_8",
    "romaji": "tango_42_8",
    "meaningVn": "Từ vựng bài 42-8",
    "meaningEn": "Vocabulary 42-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_8 (たんご_42_8)」➔ Từ vựng bài 42-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_8」の意味 (Từ vựng bài 42-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_446",
    "lesson": 42,
    "word": "単語_42_9",
    "reading": "たんご_42_9",
    "romaji": "tango_42_9",
    "meaningVn": "Từ vựng bài 42-9",
    "meaningEn": "Vocabulary 42-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_9 (たんご_42_9)」➔ Từ vựng bài 42-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_9」の意味 (Từ vựng bài 42-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_447",
    "lesson": 42,
    "word": "単語_42_10",
    "reading": "たんご_42_10",
    "romaji": "tango_42_10",
    "meaningVn": "Từ vựng bài 42-10",
    "meaningEn": "Vocabulary 42-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-42-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_42_10 (たんご_42_10)」➔ Từ vựng bài 42-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_42_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_42_10」の意味 (Từ vựng bài 42-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_448",
    "lesson": 43,
    "word": "単語_43_1",
    "reading": "たんご_43_1",
    "romaji": "tango_43_1",
    "meaningVn": "Từ vựng bài 43-1",
    "meaningEn": "Vocabulary 43-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_1 (たんご_43_1)」➔ Từ vựng bài 43-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_1」の意味 (Từ vựng bài 43-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_449",
    "lesson": 43,
    "word": "単語_43_2",
    "reading": "たんご_43_2",
    "romaji": "tango_43_2",
    "meaningVn": "Từ vựng bài 43-2",
    "meaningEn": "Vocabulary 43-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_2 (たんご_43_2)」➔ Từ vựng bài 43-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_2」の意味 (Từ vựng bài 43-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_450",
    "lesson": 43,
    "word": "単語_43_3",
    "reading": "たんご_43_3",
    "romaji": "tango_43_3",
    "meaningVn": "Từ vựng bài 43-3",
    "meaningEn": "Vocabulary 43-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_3 (たんご_43_3)」➔ Từ vựng bài 43-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_3」の意味 (Từ vựng bài 43-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_451",
    "lesson": 43,
    "word": "単語_43_4",
    "reading": "たんご_43_4",
    "romaji": "tango_43_4",
    "meaningVn": "Từ vựng bài 43-4",
    "meaningEn": "Vocabulary 43-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_4 (たんご_43_4)」➔ Từ vựng bài 43-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_4」の意味 (Từ vựng bài 43-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_452",
    "lesson": 43,
    "word": "単語_43_5",
    "reading": "たんご_43_5",
    "romaji": "tango_43_5",
    "meaningVn": "Từ vựng bài 43-5",
    "meaningEn": "Vocabulary 43-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_5 (たんご_43_5)」➔ Từ vựng bài 43-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_5」の意味 (Từ vựng bài 43-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_453",
    "lesson": 43,
    "word": "単語_43_6",
    "reading": "たんご_43_6",
    "romaji": "tango_43_6",
    "meaningVn": "Từ vựng bài 43-6",
    "meaningEn": "Vocabulary 43-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_6 (たんご_43_6)」➔ Từ vựng bài 43-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_6」の意味 (Từ vựng bài 43-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_454",
    "lesson": 43,
    "word": "単語_43_7",
    "reading": "たんご_43_7",
    "romaji": "tango_43_7",
    "meaningVn": "Từ vựng bài 43-7",
    "meaningEn": "Vocabulary 43-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_7 (たんご_43_7)」➔ Từ vựng bài 43-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_7」の意味 (Từ vựng bài 43-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_455",
    "lesson": 43,
    "word": "単語_43_8",
    "reading": "たんご_43_8",
    "romaji": "tango_43_8",
    "meaningVn": "Từ vựng bài 43-8",
    "meaningEn": "Vocabulary 43-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_8 (たんご_43_8)」➔ Từ vựng bài 43-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_8」の意味 (Từ vựng bài 43-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_456",
    "lesson": 43,
    "word": "単語_43_9",
    "reading": "たんご_43_9",
    "romaji": "tango_43_9",
    "meaningVn": "Từ vựng bài 43-9",
    "meaningEn": "Vocabulary 43-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_9 (たんご_43_9)」➔ Từ vựng bài 43-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_9」の意味 (Từ vựng bài 43-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_457",
    "lesson": 43,
    "word": "単語_43_10",
    "reading": "たんご_43_10",
    "romaji": "tango_43_10",
    "meaningVn": "Từ vựng bài 43-10",
    "meaningEn": "Vocabulary 43-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-43-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_43_10 (たんご_43_10)」➔ Từ vựng bài 43-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_43_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_43_10」の意味 (Từ vựng bài 43-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_458",
    "lesson": 44,
    "word": "単語_44_1",
    "reading": "たんご_44_1",
    "romaji": "tango_44_1",
    "meaningVn": "Từ vựng bài 44-1",
    "meaningEn": "Vocabulary 44-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_1 (たんご_44_1)」➔ Từ vựng bài 44-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_1」の意味 (Từ vựng bài 44-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_459",
    "lesson": 44,
    "word": "単語_44_2",
    "reading": "たんご_44_2",
    "romaji": "tango_44_2",
    "meaningVn": "Từ vựng bài 44-2",
    "meaningEn": "Vocabulary 44-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_2 (たんご_44_2)」➔ Từ vựng bài 44-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_2」の意味 (Từ vựng bài 44-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_460",
    "lesson": 44,
    "word": "単語_44_3",
    "reading": "たんご_44_3",
    "romaji": "tango_44_3",
    "meaningVn": "Từ vựng bài 44-3",
    "meaningEn": "Vocabulary 44-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_3 (たんご_44_3)」➔ Từ vựng bài 44-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_3」の意味 (Từ vựng bài 44-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_461",
    "lesson": 44,
    "word": "単語_44_4",
    "reading": "たんご_44_4",
    "romaji": "tango_44_4",
    "meaningVn": "Từ vựng bài 44-4",
    "meaningEn": "Vocabulary 44-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_4 (たんご_44_4)」➔ Từ vựng bài 44-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_4」の意味 (Từ vựng bài 44-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_462",
    "lesson": 44,
    "word": "単語_44_5",
    "reading": "たんご_44_5",
    "romaji": "tango_44_5",
    "meaningVn": "Từ vựng bài 44-5",
    "meaningEn": "Vocabulary 44-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_5 (たんご_44_5)」➔ Từ vựng bài 44-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_5」の意味 (Từ vựng bài 44-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_463",
    "lesson": 44,
    "word": "単語_44_6",
    "reading": "たんご_44_6",
    "romaji": "tango_44_6",
    "meaningVn": "Từ vựng bài 44-6",
    "meaningEn": "Vocabulary 44-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_6 (たんご_44_6)」➔ Từ vựng bài 44-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_6」の意味 (Từ vựng bài 44-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_464",
    "lesson": 44,
    "word": "単語_44_7",
    "reading": "たんご_44_7",
    "romaji": "tango_44_7",
    "meaningVn": "Từ vựng bài 44-7",
    "meaningEn": "Vocabulary 44-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_7 (たんご_44_7)」➔ Từ vựng bài 44-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_7」の意味 (Từ vựng bài 44-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_465",
    "lesson": 44,
    "word": "単語_44_8",
    "reading": "たんご_44_8",
    "romaji": "tango_44_8",
    "meaningVn": "Từ vựng bài 44-8",
    "meaningEn": "Vocabulary 44-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_8 (たんご_44_8)」➔ Từ vựng bài 44-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_8」の意味 (Từ vựng bài 44-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_466",
    "lesson": 44,
    "word": "単語_44_9",
    "reading": "たんご_44_9",
    "romaji": "tango_44_9",
    "meaningVn": "Từ vựng bài 44-9",
    "meaningEn": "Vocabulary 44-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_9 (たんご_44_9)」➔ Từ vựng bài 44-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_9」の意味 (Từ vựng bài 44-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_467",
    "lesson": 44,
    "word": "単語_44_10",
    "reading": "たんご_44_10",
    "romaji": "tango_44_10",
    "meaningVn": "Từ vựng bài 44-10",
    "meaningEn": "Vocabulary 44-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-44-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_44_10 (たんご_44_10)」➔ Từ vựng bài 44-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_44_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_44_10」の意味 (Từ vựng bài 44-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_468",
    "lesson": 45,
    "word": "単語_45_1",
    "reading": "たんご_45_1",
    "romaji": "tango_45_1",
    "meaningVn": "Từ vựng bài 45-1",
    "meaningEn": "Vocabulary 45-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_1 (たんご_45_1)」➔ Từ vựng bài 45-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_1」の意味 (Từ vựng bài 45-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_469",
    "lesson": 45,
    "word": "単語_45_2",
    "reading": "たんご_45_2",
    "romaji": "tango_45_2",
    "meaningVn": "Từ vựng bài 45-2",
    "meaningEn": "Vocabulary 45-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_2 (たんご_45_2)」➔ Từ vựng bài 45-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_2」の意味 (Từ vựng bài 45-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_470",
    "lesson": 45,
    "word": "単語_45_3",
    "reading": "たんご_45_3",
    "romaji": "tango_45_3",
    "meaningVn": "Từ vựng bài 45-3",
    "meaningEn": "Vocabulary 45-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_3 (たんご_45_3)」➔ Từ vựng bài 45-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_3」の意味 (Từ vựng bài 45-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_471",
    "lesson": 45,
    "word": "単語_45_4",
    "reading": "たんご_45_4",
    "romaji": "tango_45_4",
    "meaningVn": "Từ vựng bài 45-4",
    "meaningEn": "Vocabulary 45-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_4 (たんご_45_4)」➔ Từ vựng bài 45-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_4」の意味 (Từ vựng bài 45-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_472",
    "lesson": 45,
    "word": "単語_45_5",
    "reading": "たんご_45_5",
    "romaji": "tango_45_5",
    "meaningVn": "Từ vựng bài 45-5",
    "meaningEn": "Vocabulary 45-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_5 (たんご_45_5)」➔ Từ vựng bài 45-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_5」の意味 (Từ vựng bài 45-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_473",
    "lesson": 45,
    "word": "単語_45_6",
    "reading": "たんご_45_6",
    "romaji": "tango_45_6",
    "meaningVn": "Từ vựng bài 45-6",
    "meaningEn": "Vocabulary 45-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_6 (たんご_45_6)」➔ Từ vựng bài 45-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_6」の意味 (Từ vựng bài 45-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_474",
    "lesson": 45,
    "word": "単語_45_7",
    "reading": "たんご_45_7",
    "romaji": "tango_45_7",
    "meaningVn": "Từ vựng bài 45-7",
    "meaningEn": "Vocabulary 45-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_7 (たんご_45_7)」➔ Từ vựng bài 45-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_7」の意味 (Từ vựng bài 45-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_475",
    "lesson": 45,
    "word": "単語_45_8",
    "reading": "たんご_45_8",
    "romaji": "tango_45_8",
    "meaningVn": "Từ vựng bài 45-8",
    "meaningEn": "Vocabulary 45-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_8 (たんご_45_8)」➔ Từ vựng bài 45-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_8」の意味 (Từ vựng bài 45-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_476",
    "lesson": 45,
    "word": "単語_45_9",
    "reading": "たんご_45_9",
    "romaji": "tango_45_9",
    "meaningVn": "Từ vựng bài 45-9",
    "meaningEn": "Vocabulary 45-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_9 (たんご_45_9)」➔ Từ vựng bài 45-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_9」の意味 (Từ vựng bài 45-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_477",
    "lesson": 45,
    "word": "単語_45_10",
    "reading": "たんご_45_10",
    "romaji": "tango_45_10",
    "meaningVn": "Từ vựng bài 45-10",
    "meaningEn": "Vocabulary 45-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-45-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_45_10 (たんご_45_10)」➔ Từ vựng bài 45-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_45_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_45_10」の意味 (Từ vựng bài 45-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_478",
    "lesson": 46,
    "word": "単語_46_1",
    "reading": "たんご_46_1",
    "romaji": "tango_46_1",
    "meaningVn": "Từ vựng bài 46-1",
    "meaningEn": "Vocabulary 46-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_1 (たんご_46_1)」➔ Từ vựng bài 46-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_1」の意味 (Từ vựng bài 46-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_479",
    "lesson": 46,
    "word": "単語_46_2",
    "reading": "たんご_46_2",
    "romaji": "tango_46_2",
    "meaningVn": "Từ vựng bài 46-2",
    "meaningEn": "Vocabulary 46-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_2 (たんご_46_2)」➔ Từ vựng bài 46-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_2」の意味 (Từ vựng bài 46-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_480",
    "lesson": 46,
    "word": "単語_46_3",
    "reading": "たんご_46_3",
    "romaji": "tango_46_3",
    "meaningVn": "Từ vựng bài 46-3",
    "meaningEn": "Vocabulary 46-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_3 (たんご_46_3)」➔ Từ vựng bài 46-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_3」の意味 (Từ vựng bài 46-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_481",
    "lesson": 46,
    "word": "単語_46_4",
    "reading": "たんご_46_4",
    "romaji": "tango_46_4",
    "meaningVn": "Từ vựng bài 46-4",
    "meaningEn": "Vocabulary 46-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_4 (たんご_46_4)」➔ Từ vựng bài 46-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_4」の意味 (Từ vựng bài 46-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_482",
    "lesson": 46,
    "word": "単語_46_5",
    "reading": "たんご_46_5",
    "romaji": "tango_46_5",
    "meaningVn": "Từ vựng bài 46-5",
    "meaningEn": "Vocabulary 46-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_5 (たんご_46_5)」➔ Từ vựng bài 46-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_5」の意味 (Từ vựng bài 46-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_483",
    "lesson": 46,
    "word": "単語_46_6",
    "reading": "たんご_46_6",
    "romaji": "tango_46_6",
    "meaningVn": "Từ vựng bài 46-6",
    "meaningEn": "Vocabulary 46-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_6 (たんご_46_6)」➔ Từ vựng bài 46-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_6」の意味 (Từ vựng bài 46-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_484",
    "lesson": 46,
    "word": "単語_46_7",
    "reading": "たんご_46_7",
    "romaji": "tango_46_7",
    "meaningVn": "Từ vựng bài 46-7",
    "meaningEn": "Vocabulary 46-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_7 (たんご_46_7)」➔ Từ vựng bài 46-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_7」の意味 (Từ vựng bài 46-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_485",
    "lesson": 46,
    "word": "単語_46_8",
    "reading": "たんご_46_8",
    "romaji": "tango_46_8",
    "meaningVn": "Từ vựng bài 46-8",
    "meaningEn": "Vocabulary 46-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_8 (たんご_46_8)」➔ Từ vựng bài 46-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_8」の意味 (Từ vựng bài 46-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_486",
    "lesson": 46,
    "word": "単語_46_9",
    "reading": "たんご_46_9",
    "romaji": "tango_46_9",
    "meaningVn": "Từ vựng bài 46-9",
    "meaningEn": "Vocabulary 46-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_9 (たんご_46_9)」➔ Từ vựng bài 46-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_9」の意味 (Từ vựng bài 46-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_487",
    "lesson": 46,
    "word": "単語_46_10",
    "reading": "たんご_46_10",
    "romaji": "tango_46_10",
    "meaningVn": "Từ vựng bài 46-10",
    "meaningEn": "Vocabulary 46-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-46-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_46_10 (たんご_46_10)」➔ Từ vựng bài 46-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_46_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_46_10」の意味 (Từ vựng bài 46-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_488",
    "lesson": 47,
    "word": "単語_47_1",
    "reading": "たんご_47_1",
    "romaji": "tango_47_1",
    "meaningVn": "Từ vựng bài 47-1",
    "meaningEn": "Vocabulary 47-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_1 (たんご_47_1)」➔ Từ vựng bài 47-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_1」の意味 (Từ vựng bài 47-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_489",
    "lesson": 47,
    "word": "単語_47_2",
    "reading": "たんご_47_2",
    "romaji": "tango_47_2",
    "meaningVn": "Từ vựng bài 47-2",
    "meaningEn": "Vocabulary 47-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_2 (たんご_47_2)」➔ Từ vựng bài 47-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_2」の意味 (Từ vựng bài 47-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_490",
    "lesson": 47,
    "word": "単語_47_3",
    "reading": "たんご_47_3",
    "romaji": "tango_47_3",
    "meaningVn": "Từ vựng bài 47-3",
    "meaningEn": "Vocabulary 47-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_3 (たんご_47_3)」➔ Từ vựng bài 47-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_3」の意味 (Từ vựng bài 47-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_491",
    "lesson": 47,
    "word": "単語_47_4",
    "reading": "たんご_47_4",
    "romaji": "tango_47_4",
    "meaningVn": "Từ vựng bài 47-4",
    "meaningEn": "Vocabulary 47-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_4 (たんご_47_4)」➔ Từ vựng bài 47-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_4」の意味 (Từ vựng bài 47-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_492",
    "lesson": 47,
    "word": "単語_47_5",
    "reading": "たんご_47_5",
    "romaji": "tango_47_5",
    "meaningVn": "Từ vựng bài 47-5",
    "meaningEn": "Vocabulary 47-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_5 (たんご_47_5)」➔ Từ vựng bài 47-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_5」の意味 (Từ vựng bài 47-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_493",
    "lesson": 47,
    "word": "単語_47_6",
    "reading": "たんご_47_6",
    "romaji": "tango_47_6",
    "meaningVn": "Từ vựng bài 47-6",
    "meaningEn": "Vocabulary 47-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_6 (たんご_47_6)」➔ Từ vựng bài 47-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_6」の意味 (Từ vựng bài 47-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_494",
    "lesson": 47,
    "word": "単語_47_7",
    "reading": "たんご_47_7",
    "romaji": "tango_47_7",
    "meaningVn": "Từ vựng bài 47-7",
    "meaningEn": "Vocabulary 47-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_7 (たんご_47_7)」➔ Từ vựng bài 47-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_7」の意味 (Từ vựng bài 47-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_495",
    "lesson": 47,
    "word": "単語_47_8",
    "reading": "たんご_47_8",
    "romaji": "tango_47_8",
    "meaningVn": "Từ vựng bài 47-8",
    "meaningEn": "Vocabulary 47-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_8 (たんご_47_8)」➔ Từ vựng bài 47-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_8」の意味 (Từ vựng bài 47-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_496",
    "lesson": 47,
    "word": "単語_47_9",
    "reading": "たんご_47_9",
    "romaji": "tango_47_9",
    "meaningVn": "Từ vựng bài 47-9",
    "meaningEn": "Vocabulary 47-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_9 (たんご_47_9)」➔ Từ vựng bài 47-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_9」の意味 (Từ vựng bài 47-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_497",
    "lesson": 47,
    "word": "単語_47_10",
    "reading": "たんご_47_10",
    "romaji": "tango_47_10",
    "meaningVn": "Từ vựng bài 47-10",
    "meaningEn": "Vocabulary 47-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-47-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_47_10 (たんご_47_10)」➔ Từ vựng bài 47-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_47_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_47_10」の意味 (Từ vựng bài 47-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_498",
    "lesson": 48,
    "word": "単語_48_1",
    "reading": "たんご_48_1",
    "romaji": "tango_48_1",
    "meaningVn": "Từ vựng bài 48-1",
    "meaningEn": "Vocabulary 48-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_1 (たんご_48_1)」➔ Từ vựng bài 48-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_1」の意味 (Từ vựng bài 48-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_499",
    "lesson": 48,
    "word": "単語_48_2",
    "reading": "たんご_48_2",
    "romaji": "tango_48_2",
    "meaningVn": "Từ vựng bài 48-2",
    "meaningEn": "Vocabulary 48-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_2 (たんご_48_2)」➔ Từ vựng bài 48-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_2」の意味 (Từ vựng bài 48-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_500",
    "lesson": 48,
    "word": "単語_48_3",
    "reading": "たんご_48_3",
    "romaji": "tango_48_3",
    "meaningVn": "Từ vựng bài 48-3",
    "meaningEn": "Vocabulary 48-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_3 (たんご_48_3)」➔ Từ vựng bài 48-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_3」の意味 (Từ vựng bài 48-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_501",
    "lesson": 48,
    "word": "単語_48_4",
    "reading": "たんご_48_4",
    "romaji": "tango_48_4",
    "meaningVn": "Từ vựng bài 48-4",
    "meaningEn": "Vocabulary 48-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_4 (たんご_48_4)」➔ Từ vựng bài 48-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_4」の意味 (Từ vựng bài 48-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_502",
    "lesson": 48,
    "word": "単語_48_5",
    "reading": "たんご_48_5",
    "romaji": "tango_48_5",
    "meaningVn": "Từ vựng bài 48-5",
    "meaningEn": "Vocabulary 48-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_5 (たんご_48_5)」➔ Từ vựng bài 48-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_5」の意味 (Từ vựng bài 48-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_503",
    "lesson": 48,
    "word": "単語_48_6",
    "reading": "たんご_48_6",
    "romaji": "tango_48_6",
    "meaningVn": "Từ vựng bài 48-6",
    "meaningEn": "Vocabulary 48-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_6 (たんご_48_6)」➔ Từ vựng bài 48-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_6」の意味 (Từ vựng bài 48-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_504",
    "lesson": 48,
    "word": "単語_48_7",
    "reading": "たんご_48_7",
    "romaji": "tango_48_7",
    "meaningVn": "Từ vựng bài 48-7",
    "meaningEn": "Vocabulary 48-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_7 (たんご_48_7)」➔ Từ vựng bài 48-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_7」の意味 (Từ vựng bài 48-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_505",
    "lesson": 48,
    "word": "単語_48_8",
    "reading": "たんご_48_8",
    "romaji": "tango_48_8",
    "meaningVn": "Từ vựng bài 48-8",
    "meaningEn": "Vocabulary 48-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_8 (たんご_48_8)」➔ Từ vựng bài 48-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_8」の意味 (Từ vựng bài 48-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_506",
    "lesson": 48,
    "word": "単語_48_9",
    "reading": "たんご_48_9",
    "romaji": "tango_48_9",
    "meaningVn": "Từ vựng bài 48-9",
    "meaningEn": "Vocabulary 48-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_9 (たんご_48_9)」➔ Từ vựng bài 48-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_9」の意味 (Từ vựng bài 48-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_507",
    "lesson": 48,
    "word": "単語_48_10",
    "reading": "たんご_48_10",
    "romaji": "tango_48_10",
    "meaningVn": "Từ vựng bài 48-10",
    "meaningEn": "Vocabulary 48-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-48-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_48_10 (たんご_48_10)」➔ Từ vựng bài 48-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_48_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_48_10」の意味 (Từ vựng bài 48-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_508",
    "lesson": 49,
    "word": "単語_49_1",
    "reading": "たんご_49_1",
    "romaji": "tango_49_1",
    "meaningVn": "Từ vựng bài 49-1",
    "meaningEn": "Vocabulary 49-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_1 (たんご_49_1)」➔ Từ vựng bài 49-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_1」の意味 (Từ vựng bài 49-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_509",
    "lesson": 49,
    "word": "単語_49_2",
    "reading": "たんご_49_2",
    "romaji": "tango_49_2",
    "meaningVn": "Từ vựng bài 49-2",
    "meaningEn": "Vocabulary 49-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_2 (たんご_49_2)」➔ Từ vựng bài 49-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_2」の意味 (Từ vựng bài 49-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_510",
    "lesson": 49,
    "word": "単語_49_3",
    "reading": "たんご_49_3",
    "romaji": "tango_49_3",
    "meaningVn": "Từ vựng bài 49-3",
    "meaningEn": "Vocabulary 49-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_3 (たんご_49_3)」➔ Từ vựng bài 49-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_3」の意味 (Từ vựng bài 49-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_511",
    "lesson": 49,
    "word": "単語_49_4",
    "reading": "たんご_49_4",
    "romaji": "tango_49_4",
    "meaningVn": "Từ vựng bài 49-4",
    "meaningEn": "Vocabulary 49-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_4 (たんご_49_4)」➔ Từ vựng bài 49-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_4」の意味 (Từ vựng bài 49-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_512",
    "lesson": 49,
    "word": "単語_49_5",
    "reading": "たんご_49_5",
    "romaji": "tango_49_5",
    "meaningVn": "Từ vựng bài 49-5",
    "meaningEn": "Vocabulary 49-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_5 (たんご_49_5)」➔ Từ vựng bài 49-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_5」の意味 (Từ vựng bài 49-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_513",
    "lesson": 49,
    "word": "単語_49_6",
    "reading": "たんご_49_6",
    "romaji": "tango_49_6",
    "meaningVn": "Từ vựng bài 49-6",
    "meaningEn": "Vocabulary 49-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_6 (たんご_49_6)」➔ Từ vựng bài 49-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_6」の意味 (Từ vựng bài 49-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_514",
    "lesson": 49,
    "word": "単語_49_7",
    "reading": "たんご_49_7",
    "romaji": "tango_49_7",
    "meaningVn": "Từ vựng bài 49-7",
    "meaningEn": "Vocabulary 49-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_7 (たんご_49_7)」➔ Từ vựng bài 49-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_7」の意味 (Từ vựng bài 49-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_515",
    "lesson": 49,
    "word": "単語_49_8",
    "reading": "たんご_49_8",
    "romaji": "tango_49_8",
    "meaningVn": "Từ vựng bài 49-8",
    "meaningEn": "Vocabulary 49-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_8 (たんご_49_8)」➔ Từ vựng bài 49-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_8」の意味 (Từ vựng bài 49-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_516",
    "lesson": 49,
    "word": "単語_49_9",
    "reading": "たんご_49_9",
    "romaji": "tango_49_9",
    "meaningVn": "Từ vựng bài 49-9",
    "meaningEn": "Vocabulary 49-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_9 (たんご_49_9)」➔ Từ vựng bài 49-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_9」の意味 (Từ vựng bài 49-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_517",
    "lesson": 49,
    "word": "単語_49_10",
    "reading": "たんご_49_10",
    "romaji": "tango_49_10",
    "meaningVn": "Từ vựng bài 49-10",
    "meaningEn": "Vocabulary 49-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-49-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_49_10 (たんご_49_10)」➔ Từ vựng bài 49-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_49_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_49_10」の意味 (Từ vựng bài 49-10) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_518",
    "lesson": 50,
    "word": "単語_50_1",
    "reading": "たんご_50_1",
    "romaji": "tango_50_1",
    "meaningVn": "Từ vựng bài 50-1",
    "meaningEn": "Vocabulary 50-1",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "object",
    "semanticCategoryName": "物品・道具 (Đồ vật)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_1 (たんご_50_1)」➔ Từ vựng bài 50-1。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_1」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_1」の意味 (Từ vựng bài 50-1) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_519",
    "lesson": 50,
    "word": "単語_50_2",
    "reading": "たんご_50_2",
    "romaji": "tango_50_2",
    "meaningVn": "Từ vựng bài 50-2",
    "meaningEn": "Vocabulary 50-2",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_2 (たんご_50_2)」➔ Từ vựng bài 50-2。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_2」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_2」の意味 (Từ vựng bài 50-2) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_520",
    "lesson": 50,
    "word": "単語_50_3",
    "reading": "たんご_50_3",
    "romaji": "tango_50_3",
    "meaningVn": "Từ vựng bài 50-3",
    "meaningEn": "Vocabulary 50-3",
    "partOfSpeech": "adjective-i",
    "partOfSpeechName": "い形容詞 (Tính từ i)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_3 (たんご_50_3)」➔ Từ vựng bài 50-3。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_3」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_3」の意味 (Từ vựng bài 50-3) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_521",
    "lesson": 50,
    "word": "単語_50_4",
    "reading": "たんご_50_4",
    "romaji": "tango_50_4",
    "meaningVn": "Từ vựng bài 50-4",
    "meaningEn": "Vocabulary 50-4",
    "partOfSpeech": "adjective-na",
    "partOfSpeechName": "な形容詞 (Tính từ na)",
    "semanticCategory": "adjective",
    "semanticCategoryName": "状態・性質 (Tính chất)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_4 (たんご_50_4)」➔ Từ vựng bài 50-4。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_4」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_4」の意味 (Từ vựng bài 50-4) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_522",
    "lesson": 50,
    "word": "単語_50_5",
    "reading": "たんご_50_5",
    "romaji": "tango_50_5",
    "meaningVn": "Từ vựng bài 50-5",
    "meaningEn": "Vocabulary 50-5",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "time",
    "semanticCategoryName": "時間・日付 (Thời gian)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_5 (たんご_50_5)」➔ Từ vựng bài 50-5。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_5」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_5」の意味 (Từ vựng bài 50-5) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_523",
    "lesson": 50,
    "word": "単語_50_6",
    "reading": "たんご_50_6",
    "romaji": "tango_50_6",
    "meaningVn": "Từ vựng bài 50-6",
    "meaningEn": "Vocabulary 50-6",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "place",
    "semanticCategoryName": "場所・位置 (Địa điểm)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_6 (たんご_50_6)」➔ Từ vựng bài 50-6。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_6」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_6」の意味 (Từ vựng bài 50-6) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_524",
    "lesson": 50,
    "word": "単語_50_7",
    "reading": "たんご_50_7",
    "romaji": "tango_50_7",
    "meaningVn": "Từ vựng bài 50-7",
    "meaningEn": "Vocabulary 50-7",
    "partOfSpeech": "expression",
    "partOfSpeechName": "あいさつ・定型句 (Thành ngữ)",
    "semanticCategory": "greeting",
    "semanticCategoryName": "挨拶・コミュニケーション (Chào hỏi)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_7 (たんご_50_7)」➔ Từ vựng bài 50-7。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_7」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_7」の意味 (Từ vựng bài 50-7) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_525",
    "lesson": 50,
    "word": "単語_50_8",
    "reading": "たんご_50_8",
    "romaji": "tango_50_8",
    "meaningVn": "Từ vựng bài 50-8",
    "meaningEn": "Vocabulary 50-8",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "food",
    "semanticCategoryName": "食べ物・飲み物 (Thức ăn/Đồ uống)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_8 (たんご_50_8)」➔ Từ vựng bài 50-8。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_8」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_8」の意味 (Từ vựng bài 50-8) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_526",
    "lesson": 50,
    "word": "単語_50_9",
    "reading": "たんご_50_9",
    "romaji": "tango_50_9",
    "meaningVn": "Từ vựng bài 50-9",
    "meaningEn": "Vocabulary 50-9",
    "partOfSpeech": "noun",
    "partOfSpeechName": "名詞 (Danh từ)",
    "semanticCategory": "people",
    "semanticCategoryName": "人・職業 (Con người/Nghề nghiệp)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_9 (たんご_50_9)」➔ Từ vựng bài 50-9。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_9」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_9」の意味 (Từ vựng bài 50-9) を動作や表情で表現。"
    }
  },
  {
    "id": "vocab_527",
    "lesson": 50,
    "word": "単語_50_10",
    "reading": "たんご_50_10",
    "romaji": "tango_50_10",
    "meaningVn": "Từ vựng bài 50-10",
    "meaningEn": "Vocabulary 50-10",
    "partOfSpeech": "verb",
    "partOfSpeechName": "動詞 (Động từ)",
    "semanticCategory": "action",
    "semanticCategoryName": "動作・活動 (Hành động)",
    "vnjpclubUrl": "https://www.vnjpclub.com/minna-no-nihongo/bai-50-tu-vung.html",
    "vakHelp": {
      "visual": "🖼️ フラッシュカード: 「単語_50_10 (たんご_50_10)」➔ Từ vựng bài 50-10。教科書体イメージで覚える。",
      "auditory": "🗣️ 音声朗読 (TTS): 「たんご_50_10」の発音とアクセントを聞いて5回音読。",
      "kinesthetic": "✋ ジェスチャータスク: 「単語_50_10」の意味 (Từ vựng bài 50-10) を動作や表情で表現。"
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
