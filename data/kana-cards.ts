import { VakType } from '@/data/vak-questions';

export type KanaType = 'hiragana' | 'katakana';

export interface KanaCard {
  id: string;
  type: KanaType;
  kana: string;
  romaji: string;
  group: string;
  mnemonicVn: string;
  vakHelp: {
    visual: string;
    auditory: string;
    kinesthetic: string;
  };
}

export const HIRAGANA_CARDS: KanaCard[] = [
  {
    "id": "h_a",
    "type": "hiragana",
    "kana": "あ",
    "romaji": "a",
    "group": "あ行",
    "mnemonicVn": "Giống hình một thanh kiếm va vào tảng đá",
    "vakHelp": {
      "visual": "あ (a) の形を観察。あさ（朝）の「あ」",
      "auditory": "「あ！A！」と明るい声で発声",
      "kinesthetic": "空中に大きく「あ」を3画で書く"
    }
  },
  {
    "id": "h_i",
    "type": "hiragana",
    "kana": "い",
    "romaji": "i",
    "group": "あ行",
    "mnemonicVn": "Hai thanh đũa song song nhau",
    "vakHelp": {
      "visual": "い (i) の2本の線を対比。いぬ（犬）の「い」",
      "auditory": "「い！I！」と口を横に広げて発音",
      "kinesthetic": "人差し指と中指で「い」の形を作る"
    }
  },
  {
    "id": "h_u",
    "type": "hiragana",
    "kana": "う",
    "romaji": "u",
    "group": "あ行",
    "mnemonicVn": "Hình người đang cúi gập lưng",
    "vakHelp": {
      "visual": "う (u) の上の点とカーブ。うえ（上）の「う」",
      "auditory": "「う！U！」と口をすぼめて発音",
      "kinesthetic": "背中を丸めて「う」の体勢をとる"
    }
  },
  {
    "id": "h_e",
    "type": "hiragana",
    "kana": "え",
    "romaji": "e",
    "group": "あ行",
    "mnemonicVn": "Con chiền chiện đang bay lên",
    "vakHelp": {
      "visual": "え (e) の流れる形。えき（駅）の「え」",
      "auditory": "「え！E！」と声に出す",
      "kinesthetic": "手を波のように動かして「え」を書く"
    }
  },
  {
    "id": "h_o",
    "type": "hiragana",
    "kana": "お",
    "romaji": "o",
    "group": "あ行",
    "mnemonicVn": "Trái bóng golf nằm trên thảm",
    "vakHelp": {
      "visual": "お (o) の丸い右下の点。お茶の「お」",
      "auditory": "「お！O！」と大きな丸い口で発音",
      "kinesthetic": "空中に丸を描きながら「お」を書く"
    }
  },
  {
    "id": "h_ka",
    "type": "hiragana",
    "kana": "か",
    "romaji": "ka",
    "group": "か行",
    "mnemonicVn": "Lưỡi liềm đang cắt cỏ",
    "vakHelp": {
      "visual": "か (ka) の右側の点。かさ（傘）の「か」",
      "auditory": "「か！KA！」とハッキリ発音",
      "kinesthetic": "腕を振り下ろす動作で「か」を書く"
    }
  },
  {
    "id": "h_ki",
    "type": "hiragana",
    "kana": "き",
    "romaji": "ki",
    "group": "か行",
    "mnemonicVn": "Cái chìa khóa (key)",
    "vakHelp": {
      "visual": "き (ki) の2本の手すり。き（木）の「き」",
      "auditory": "「き！KI！」と高めのトーンで発唱",
      "kinesthetic": "鍵を回す身振りをしながら「き」と言いましょう"
    }
  },
  {
    "id": "h_ku",
    "type": "hiragana",
    "kana": "く",
    "romaji": "ku",
    "group": "か行",
    "mnemonicVn": "Mỏ chim cút đang mở",
    "vakHelp": {
      "visual": "く (ku) の「＜」の角。くつ（靴）の「く」",
      "auditory": "「く！KU！」と声に出す",
      "kinesthetic": "肘を曲げて「＜」の角度を作る"
    }
  },
  {
    "id": "h_ke",
    "type": "hiragana",
    "kana": "け",
    "romaji": "ke",
    "group": "か行",
    "mnemonicVn": "Thùng bia keg",
    "vakHelp": {
      "visual": "け (ke) の左の縦線。けいさつ（警察）の「け」",
      "auditory": "「け！KE！」と発音",
      "kinesthetic": "まっすぐ立ち上がって「け」を空書する"
    }
  },
  {
    "id": "h_ko",
    "type": "hiragana",
    "kana": "こ",
    "romaji": "ko",
    "group": "か行",
    "mnemonicVn": "Hai khúc gỗ nằm ngang",
    "vakHelp": {
      "visual": "こ (ko) の上下2本線。こども（子供）の「こ」",
      "auditory": "「こ！KO！」と声に出す",
      "kinesthetic": "両手を上下に平行に構える"
    }
  }
];
export const KATAKANA_CARDS: KanaCard[] = [
  {
    "id": "k_a",
    "type": "katakana",
    "kana": "ア",
    "romaji": "a",
    "group": "ア行",
    "mnemonicVn": "Góc của mái nhà",
    "vakHelp": {
      "visual": "ア (a) のカタカナの直線的デザイン",
      "auditory": "「ア！A！」とシャープに発唱",
      "kinesthetic": "指で鋭い2画を描く"
    }
  },
  {
    "id": "k_i",
    "type": "katakana",
    "kana": "イ",
    "romaji": "i",
    "group": "ア行",
    "mnemonicVn": "Người đứng phẩy tay",
    "vakHelp": {
      "visual": "イ (i) の人偏（にんべん）の形",
      "auditory": "「イ！I！」と発音",
      "kinesthetic": "斜めにサッと指を走らせる"
    }
  },
  {
    "id": "k_u",
    "type": "katakana",
    "kana": "ウ",
    "romaji": "u",
    "group": "ア行",
    "mnemonicVn": "Mái nhà có ống khói",
    "vakHelp": {
      "visual": "ウ (u) の上の宝冠（うかんむり）",
      "auditory": "「ウ！U！」と口をすぼめて発唱",
      "kinesthetic": "頭の上に両手で屋根を作る"
    }
  },
  {
    "id": "k_e",
    "type": "katakana",
    "kana": "エ",
    "romaji": "e",
    "group": "ア行",
    "mnemonicVn": "Khung giàn giáo xây dựng",
    "vakHelp": {
      "visual": "エ (e) の工（こう）の形",
      "auditory": "「エ！E！」と発声",
      "kinesthetic": "上下の横線と縦線を体で再現"
    }
  },
  {
    "id": "k_o",
    "type": "katakana",
    "kana": "オ",
    "romaji": "o",
    "group": "ア行",
    "mnemonicVn": "Người đàn ông chạy dốc sức",
    "vakHelp": {
      "visual": "オ (o) の「才」に似た形",
      "auditory": "「オ！O！」と大きな声で叫ぶ",
      "kinesthetic": "ランニングのフォームをとる"
    }
  },
  {
    "id": "k_ka",
    "type": "katakana",
    "kana": "カ",
    "romaji": "ka",
    "group": "カ行",
    "mnemonicVn": "Giống ひらがな か nhưng không có dấu phẩy",
    "vakHelp": {
      "visual": "カ (ka) のシンプルな直線",
      "auditory": "「カ！KA！」と強く発音",
      "kinesthetic": "手刀を切る動作でカを書く"
    }
  },
  {
    "id": "k_ki",
    "type": "katakana",
    "kana": "キ",
    "romaji": "ki",
    "group": "カ行",
    "mnemonicVn": "Cái chìa khóa sắc nhọn",
    "vakHelp": {
      "visual": "キ (ki) の2本横線と斜め線",
      "auditory": "「キ！KI！」と発音",
      "kinesthetic": "指で横2本と縦1本を空書"
    }
  },
  {
    "id": "k_ku",
    "type": "katakana",
    "kana": "ク",
    "romaji": "ku",
    "group": "カ行",
    "mnemonicVn": "Chiếc móc treo quần áo",
    "vakHelp": {
      "visual": "ク (ku) の「タ」の前半",
      "auditory": "「ク！KU！」と音読",
      "kinesthetic": "肘を曲げてクの形を作る"
    }
  },
  {
    "id": "k_ke",
    "type": "katakana",
    "kana": "ケ",
    "romaji": "ke",
    "group": "カ行",
    "mnemonicVn": "Cái tre bambu",
    "vakHelp": {
      "visual": "ケ (ke) の竹冠（たけかんむり）",
      "auditory": "「ケ！KE！」と発唱",
      "kinesthetic": "上から下へ素早く筆を振る"
    }
  },
  {
    "id": "k_ko",
    "type": "katakana",
    "kana": "コ",
    "romaji": "ko",
    "group": "カ行",
    "mnemonicVn": "Góc vuông 90度",
    "vakHelp": {
      "visual": "コ (ko) のコの字型",
      "auditory": "「コ！KO！」と口ずさむ",
      "kinesthetic": "手首で90度の角を作る"
    }
  }
];

export const ALL_KANA_CARDS: KanaCard[] = [...HIRAGANA_CARDS, ...KATAKANA_CARDS];

export function getKanaByType(type: KanaType): KanaCard[] {
  return ALL_KANA_CARDS.filter((k) => k.type === type);
}
