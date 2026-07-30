import { VakType } from '@/data/vak-questions';
import { JlptLevel } from '@/lib/types';

export interface KanjiCard {
  id: string;
  level: JlptLevel;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaningVn: string;
  meaningEn: string;
  strokeCount: number;
  examples: string[];
  langoalUrl: string;
  nihongokyoshiUrl: string;
  vakHelp: {
    visual: string;
    auditory: string;
    kinesthetic: string;
  };
}

export const KANJI_CARDS: KanjiCard[] = [
  {
    "id": "kanji_1",
    "level": "N5",
    "kanji": "日",
    "onyomi": "ニチ, ジツ",
    "kunyomi": "ひ, -び, -か",
    "meaningVn": "Mặt trời, Ngày",
    "meaningEn": "sun, day",
    "strokeCount": 4,
    "examples": [
      "日曜日 (にちようび)",
      "日本 (にほん)",
      "毎日 (まいにち)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「日」の象形イメージ・筆順カード（画数: 4画）。音読み[ニチ, ジツ]/訓読み[ひ, -び, -か]。",
      "auditory": "🗣️ 音声朗読: 音読み「ニチ, ジツ」、訓読み「ひ, -び, -か」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「日」を4画で書きながら「Mặt trời, Ngày」と叫ぶ。"
    }
  },
  {
    "id": "kanji_2",
    "level": "N5",
    "kanji": "月",
    "onyomi": "ゲツ, ガツ",
    "kunyomi": "つき",
    "meaningVn": "Mặt trăng, Tháng",
    "meaningEn": "moon, month",
    "strokeCount": 4,
    "examples": [
      "月曜日 (げつようび)",
      "一月 (いちがつ)",
      "今月 (こんげつ)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「月」の象形イメージ・筆順カード（画数: 4画）。音読み[ゲツ, ガツ]/訓読み[つき]。",
      "auditory": "🗣️ 音声朗読: 音読み「ゲツ, ガツ」、訓読み「つき」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「月」を4画で書きながら「Mặt trăng, Tháng」と叫ぶ。"
    }
  },
  {
    "id": "kanji_3",
    "level": "N5",
    "kanji": "火",
    "onyomi": "カ",
    "kunyomi": "ひ, -び, ほ-",
    "meaningVn": "Lửa",
    "meaningEn": "fire",
    "strokeCount": 4,
    "examples": [
      "火曜日 (かようび)",
      "火 (ひ)",
      "花火 (はなび)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「火」の象形イメージ・筆順カード（画数: 4画）。音読み[カ]/訓読み[ひ, -び, ほ-]。",
      "auditory": "🗣️ 音声朗読: 音読み「カ」、訓読み「ひ, -び, ほ-」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「火」を4画で書きながら「Lửa」と叫ぶ。"
    }
  },
  {
    "id": "kanji_4",
    "level": "N5",
    "kanji": "水",
    "onyomi": "スイ",
    "kunyomi": "みず",
    "meaningVn": "Nước",
    "meaningEn": "water",
    "strokeCount": 4,
    "examples": [
      "水曜日 (すいようび)",
      "水 (みず)",
      "水えい (すいえい)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「水」の象形イメージ・筆順カード（画数: 4画）。音読み[スイ]/訓読み[みず]。",
      "auditory": "🗣️ 音声朗読: 音読み「スイ」、訓読み「みず」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「水」を4画で書きながら「Nước」と叫ぶ。"
    }
  },
  {
    "id": "kanji_5",
    "level": "N5",
    "kanji": "木",
    "onyomi": "ボク, モク",
    "kunyomi": "き, こ-",
    "meaningVn": "Cây, Gỗ",
    "meaningEn": "tree, wood",
    "strokeCount": 4,
    "examples": [
      "木曜日 (もくようび)",
      "木 (き)",
      "大木 (たいぼく)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「木」の象形イメージ・筆順カード（画数: 4画）。音読み[ボク, モク]/訓読み[き, こ-]。",
      "auditory": "🗣️ 音声朗読: 音読み「ボク, モク」、訓読み「き, こ-」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「木」を4画で書きながら「Cây, Gỗ」と叫ぶ。"
    }
  },
  {
    "id": "kanji_6",
    "level": "N5",
    "kanji": "金",
    "onyomi": "キン, コン",
    "kunyomi": "かね, かな-",
    "meaningVn": "Vàng, Tiền",
    "meaningEn": "gold, money",
    "strokeCount": 8,
    "examples": [
      "金曜日 (きんようび)",
      "お金 (おかね)",
      "料金 (りょうきん)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「金」の象形イメージ・筆順カード（画数: 8画）。音読み[キン, コン]/訓読み[かね, かな-]。",
      "auditory": "🗣️ 音声朗読: 音読み「キン, コン」、訓読み「かね, かな-」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「金」を8画で書きながら「Vàng, Tiền」と叫ぶ。"
    }
  },
  {
    "id": "kanji_7",
    "level": "N5",
    "kanji": "土",
    "onyomi": "ド, ト",
    "kunyomi": "つち",
    "meaningVn": "Đất",
    "meaningEn": "earth, soil",
    "strokeCount": 3,
    "examples": [
      "土曜日 (どようび)",
      "土 (つち)",
      "土地 (とち)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「土」の象形イメージ・筆順カード（画数: 3画）。音読み[ド, ト]/訓読み[つち]。",
      "auditory": "🗣️ 音声朗読: 音読み「ド, ト」、訓読み「つち」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「土」を3画で書きながら「Đất」と叫ぶ。"
    }
  },
  {
    "id": "kanji_8",
    "level": "N5",
    "kanji": "山",
    "onyomi": "サン, サン",
    "kunyomi": "やま",
    "meaningVn": "Núi",
    "meaningEn": "mountain",
    "strokeCount": 3,
    "examples": [
      "富士山 (ふじさん)",
      "山 (やま)",
      "火山 (かざん)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「山」の象形イメージ・筆順カード（画数: 3画）。音読み[サン, サン]/訓読み[やま]。",
      "auditory": "🗣️ 音声朗読: 音読み「サン, サン」、訓読み「やま」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「山」を3画で書きながら「Núi」と叫ぶ。"
    }
  },
  {
    "id": "kanji_9",
    "level": "N5",
    "kanji": "川",
    "onyomi": "セン",
    "kunyomi": "かわ",
    "meaningVn": "Sông",
    "meaningEn": "river",
    "strokeCount": 3,
    "examples": [
      "川 (かわ)",
      "小川 (おがわ)",
      "ナイル川 (ないるがわ)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「川」の象形イメージ・筆順カード（画数: 3画）。音読み[セン]/訓読み[かわ]。",
      "auditory": "🗣️ 音声朗読: 音読み「セン」、訓読み「かわ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「川」を3画で書きながら「Sông」と叫ぶ。"
    }
  },
  {
    "id": "kanji_10",
    "level": "N5",
    "kanji": "田",
    "onyomi": "デン",
    "kunyomi": "た",
    "meaningVn": "Ruộng",
    "meaningEn": "rice field",
    "strokeCount": 5,
    "examples": [
      "田中 (たなか)",
      "山田 (やまだ)",
      "水田 (すいでん)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「田」の象形イメージ・筆順カード（画数: 5画）。音読み[デン]/訓読み[た]。",
      "auditory": "🗣️ 音声朗読: 音読み「デン」、訓読み「た」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「田」を5画で書きながら「Ruộng」と叫ぶ。"
    }
  },
  {
    "id": "kanji_11",
    "level": "N5",
    "kanji": "一",
    "onyomi": "イチ, イツ",
    "kunyomi": "ひと-, ひと.つ",
    "meaningVn": "Một",
    "meaningEn": "one",
    "strokeCount": 1,
    "examples": [
      "一人 (ひとり)",
      "一日 (ついたち)",
      "一つ (ひとつ)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「一」の象形イメージ・筆順カード（画数: 1画）。音読み[イチ, イツ]/訓読み[ひと-, ひと.つ]。",
      "auditory": "🗣️ 音声朗読: 音読み「イチ, イツ」、訓読み「ひと-, ひと.つ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「一」を1画で書きながら「Một」と叫ぶ。"
    }
  },
  {
    "id": "kanji_12",
    "level": "N5",
    "kanji": "二",
    "onyomi": "ニ",
    "kunyomi": "ふた, ふた.つ",
    "meaningVn": "Hai",
    "meaningEn": "two",
    "strokeCount": 2,
    "examples": [
      "二人 (ふたり)",
      "二日 (ふつか)",
      "二つ (ふたつ)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「二」の象形イメージ・筆順カード（画数: 2画）。音読み[ニ]/訓読み[ふた, ふた.つ]。",
      "auditory": "🗣️ 音声朗読: 音読み「ニ」、訓読み「ふた, ふた.つ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「二」を2画で書きながら「Hai」と叫ぶ。"
    }
  },
  {
    "id": "kanji_13",
    "level": "N5",
    "kanji": "三",
    "onyomi": "サン",
    "kunyomi": "み, み.つ",
    "meaningVn": "Ba",
    "meaningEn": "three",
    "strokeCount": 3,
    "examples": [
      "三日 (みっか)",
      "三人 (さんにん)",
      "三つ (みっつ)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「三」の象形イメージ・筆順カード（画数: 3画）。音読み[サン]/訓読み[み, み.つ]。",
      "auditory": "🗣️ 音声朗読: 音読み「サン」、訓読み「み, み.つ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「三」を3画で書きながら「Ba」と叫ぶ。"
    }
  },
  {
    "id": "kanji_14",
    "level": "N5",
    "kanji": "人",
    "onyomi": "ジン, ニン",
    "kunyomi": "ひと",
    "meaningVn": "Người",
    "meaningEn": "person",
    "strokeCount": 2,
    "examples": [
      "日本人 (にほんじん)",
      "一人 (ひとり)",
      "人 (ひと)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「人」の象形イメージ・筆順カード（画数: 2画）。音読み[ジン, ニン]/訓読み[ひと]。",
      "auditory": "🗣️ 音声朗読: 音読み「ジン, ニン」、訓読み「ひと」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「人」を2画で書きながら「Người」と叫ぶ。"
    }
  },
  {
    "id": "kanji_15",
    "level": "N5",
    "kanji": "子",
    "onyomi": "シ, ス",
    "kunyomi": "こ",
    "meaningVn": "Con",
    "meaningEn": "child",
    "strokeCount": 3,
    "examples": [
      "子ども (こども)",
      "女子 (じょし)",
      "男子 (だんし)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「子」の象形イメージ・筆順カード（画数: 3画）。音読み[シ, ス]/訓読み[こ]。",
      "auditory": "🗣️ 音声朗読: 音読み「シ, ス」、訓読み「こ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「子」を3画で書きながら「Con」と叫ぶ。"
    }
  },
  {
    "id": "kanji_16",
    "level": "N5",
    "kanji": "女",
    "onyomi": "ジョ, ニョ",
    "kunyomi": "おんな, め",
    "meaningVn": "Nữ, Phụ nữ",
    "meaningEn": "female, woman",
    "strokeCount": 3,
    "examples": [
      "女性 (じょせい)",
      "女の子 (おんなのこ)",
      "女の人 (おんなのひと)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「女」の象形イメージ・筆順カード（画数: 3画）。音読み[ジョ, ニョ]/訓読み[おんな, め]。",
      "auditory": "🗣️ 音声朗読: 音読み「ジョ, ニョ」、訓読み「おんな, め」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「女」を3画で書きながら「Nữ, Phụ nữ」と叫ぶ。"
    }
  },
  {
    "id": "kanji_17",
    "level": "N5",
    "kanji": "男",
    "onyomi": "ダン, ナン",
    "kunyomi": "おとこ",
    "meaningVn": "Nam, Đàn ông",
    "meaningEn": "male, man",
    "strokeCount": 7,
    "examples": [
      "男性 (だんせい)",
      "男の子 (おとこのこ)",
      "男の人 (おとこのひと)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「男」の象形イメージ・筆順カード（画数: 7画）。音読み[ダン, ナン]/訓読み[おとこ]。",
      "auditory": "🗣️ 音声朗読: 音読み「ダン, ナン」、訓読み「おとこ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「男」を7画で書きながら「Nam, Đàn ông」と叫ぶ。"
    }
  },
  {
    "id": "kanji_18",
    "level": "N5",
    "kanji": "学",
    "onyomi": "ガク",
    "kunyomi": "まな.ぶ",
    "meaningVn": "Học",
    "meaningEn": "study, learn",
    "strokeCount": 8,
    "examples": [
      "学校 (がっこう)",
      "学生 (がくせい)",
      "大学 (だいがく)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「学」の象形イメージ・筆順カード（画数: 8画）。音読み[ガク]/訓読み[まな.ぶ]。",
      "auditory": "🗣️ 音声朗読: 音読み「ガク」、訓読み「まな.ぶ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「学」を8画で書きながら「Học」と叫ぶ。"
    }
  },
  {
    "id": "kanji_19",
    "level": "N5",
    "kanji": "校",
    "onyomi": "コウ",
    "kunyomi": "-",
    "meaningVn": "Trường",
    "meaningEn": "school",
    "strokeCount": 10,
    "examples": [
      "学校 (がっこう)",
      "小学校 (しょうがっこう)",
      "校長 (こうちょう)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「校」の象形イメージ・筆順カード（画数: 10画）。音読み[コウ]/訓読み[-]。",
      "auditory": "🗣️ 音声朗読: 音読み「コウ」、訓読み「-」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「校」を10画で書きながら「Trường」と叫ぶ。"
    }
  },
  {
    "id": "kanji_20",
    "level": "N5",
    "kanji": "先",
    "onyomi": "セン",
    "kunyomi": "さき, まず",
    "meaningVn": "Trước, Tiên",
    "meaningEn": "ahead, previous",
    "strokeCount": 6,
    "examples": [
      "先生 (せんせい)",
      "先週 (せんしゅう)",
      "お先に (おさきに)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n5-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「先」の象形イメージ・筆順カード（画数: 6画）。音読み[セン]/訓読み[さき, まず]。",
      "auditory": "🗣️ 音声朗読: 音読み「セン」、訓読み「さき, まず」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「先」を6画で書きながら「Trước, Tiên」と叫ぶ。"
    }
  },
  {
    "id": "kanji_21",
    "level": "N4",
    "kanji": "会",
    "onyomi": "カイ, エ",
    "kunyomi": "あ.う",
    "meaningVn": "Gặp, Hội",
    "meaningEn": "meet, society",
    "strokeCount": 6,
    "examples": [
      "会社 (かいしゃ)",
      "会話 (かいわ)",
      "会う (あう)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「会」の象形イメージ・筆順カード（画数: 6画）。音読み[カイ, エ]/訓読み[あ.う]。",
      "auditory": "🗣️ 音声朗読: 音読み「カイ, エ」、訓読み「あ.う」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「会」を6画で書きながら「Gặp, Hội」と叫ぶ。"
    }
  },
  {
    "id": "kanji_22",
    "level": "N4",
    "kanji": "同",
    "onyomi": "ドウ",
    "kunyomi": "おな.じ",
    "meaningVn": "Giống nhau, Đồng",
    "meaningEn": "same",
    "strokeCount": 6,
    "examples": [
      "同じ (おなじ)",
      "同時 (どうじ)",
      "同僚 (どうりょう)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「同」の象形イメージ・筆順カード（画数: 6画）。音読み[ドウ]/訓読み[おな.じ]。",
      "auditory": "🗣️ 音声朗読: 音読み「ドウ」、訓読み「おな.じ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「同」を6画で書きながら「Giống nhau, Đồng」と叫ぶ。"
    }
  },
  {
    "id": "kanji_23",
    "level": "N4",
    "kanji": "事",
    "onyomi": "ジ, ズ",
    "kunyomi": "こと",
    "meaningVn": "Việc, Sự",
    "meaningEn": "thing, matter",
    "strokeCount": 8,
    "examples": [
      "仕事 (しごと)",
      "食事 (しょくじ)",
      "事故 (じこ)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「事」の象形イメージ・筆順カード（画数: 8画）。音読み[ジ, ズ]/訓読み[こと]。",
      "auditory": "🗣️ 音声朗読: 音読み「ジ, ズ」、訓読み「こと」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「事」を8画で書きながら「Việc, Sự」と叫ぶ。"
    }
  },
  {
    "id": "kanji_24",
    "level": "N4",
    "kanji": "自",
    "onyomi": "ジ, シ",
    "kunyomi": "みずか.ら",
    "meaningVn": "Tự, Bản thân",
    "meaningEn": "oneself",
    "strokeCount": 6,
    "examples": [
      "自分 (じぶん)",
      "自転車 (じてんしゃ)",
      "自由 (じゆう)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「自」の象形イメージ・筆順カード（画数: 6画）。音読み[ジ, シ]/訓読み[みずか.ら]。",
      "auditory": "🗣️ 音声朗読: 音読み「ジ, シ」、訓読み「みずか.ら」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「自」を6画で書きながら「Tự, Bản thân」と叫ぶ。"
    }
  },
  {
    "id": "kanji_25",
    "level": "N4",
    "kanji": "社",
    "onyomi": "シャ",
    "kunyomi": "やしろ",
    "meaningVn": "Xã, Công ty",
    "meaningEn": "company, shrine",
    "strokeCount": 7,
    "examples": [
      "会社 (かいしゃ)",
      "社長 (しゃちょう)",
      "社会 (しゃかい)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「社」の象形イメージ・筆順カード（画数: 7画）。音読み[シャ]/訓読み[やしろ]。",
      "auditory": "🗣️ 音声朗読: 音読み「シャ」、訓読み「やしろ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「社」を7画で書きながら「Xã, Công ty」と叫ぶ。"
    }
  },
  {
    "id": "kanji_26",
    "level": "N4",
    "kanji": "発",
    "onyomi": "ハツ, ホツ",
    "kunyomi": "-",
    "meaningVn": "Phát, Khởi hành",
    "meaningEn": "departure, emit",
    "strokeCount": 9,
    "examples": [
      "出発 (しゅっぱつ)",
      "発音 (はつおん)",
      "発生 (はっせい)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「発」の象形イメージ・筆順カード（画数: 9画）。音読み[ハツ, ホツ]/訓読み[-]。",
      "auditory": "🗣️ 音声朗読: 音読み「ハツ, ホツ」、訓読み「-」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「発」を9画で書きながら「Phát, Khởi hành」と叫ぶ。"
    }
  },
  {
    "id": "kanji_27",
    "level": "N4",
    "kanji": "者",
    "onyomi": "シャ",
    "kunyomi": "もの",
    "meaningVn": "Người",
    "meaningEn": "person",
    "strokeCount": 8,
    "examples": [
      "医者 (いしゃ)",
      "学者 (がくしゃ)",
      "若者 (わかもの)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「者」の象形イメージ・筆順カード（画数: 8画）。音読み[シャ]/訓読み[もの]。",
      "auditory": "🗣️ 音声朗読: 音読み「シャ」、訓読み「もの」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「者」を8画で書きながら「Người」と叫ぶ。"
    }
  },
  {
    "id": "kanji_28",
    "level": "N4",
    "kanji": "業",
    "onyomi": "ギョウ, ゴウ",
    "kunyomi": "わざ",
    "meaningVn": "Nghiệp, Công việc",
    "meaningEn": "business, industry",
    "strokeCount": 13,
    "examples": [
      "授業 (じゅぎょう)",
      "工業 (こうぎょう)",
      "残業 (ざんぎょう)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「業」の象形イメージ・筆順カード（画数: 13画）。音読み[ギョウ, ゴウ]/訓読み[わざ]。",
      "auditory": "🗣️ 音声朗読: 音読み「ギョウ, ゴウ」、訓読み「わざ」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「業」を13画で書きながら「Nghiệp, Công việc」と叫ぶ。"
    }
  },
  {
    "id": "kanji_29",
    "level": "N4",
    "kanji": "方",
    "onyomi": "ホウ",
    "kunyomi": "かた, -がた",
    "meaningVn": "Phương, Hướng",
    "meaningEn": "direction, person",
    "strokeCount": 4,
    "examples": [
      "方法 (ほうほう)",
      "読み方 (よみかた)",
      "夕方 (ゆうがた)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「方」の象形イメージ・筆順カード（画数: 4画）。音読み[ホウ]/訓読み[かた, -がた]。",
      "auditory": "🗣️ 音声朗読: 音読み「ホウ」、訓読み「かた, -がた」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「方」を4画で書きながら「Phương, Hướng」と叫ぶ。"
    }
  },
  {
    "id": "kanji_30",
    "level": "N4",
    "kanji": "新",
    "onyomi": "シン",
    "kunyomi": "あたら.しい, あら.た",
    "meaningVn": "Mới, Tân",
    "meaningEn": "new",
    "strokeCount": 13,
    "examples": [
      "新聞 (しんぶん)",
      "新幹線 (しんかんせん)",
      "新しい (あたらしい)"
    ],
    "langoalUrl": "https://langoal.com/teaching-materials/kanji/n4-overview.html",
    "nihongokyoshiUrl": "https://nihongokyoshi-net.com/2017/10/25/jlpt-n5-kanji/",
    "vakHelp": {
      "visual": "🖼️ 漢字「新」の象形イメージ・筆順カード（画数: 13画）。音読み[シン]/訓読み[あたら.しい, あら.た]。",
      "auditory": "🗣️ 音声朗読: 音読み「シン」、訓読み「あたら.しい, あら.た」をリズムに合わせて発唱。",
      "kinesthetic": "✋ 空書タスク: 指先で空中に「新」を13画で書きながら「Mới, Tân」と叫ぶ。"
    }
  }
];

export function getKanjiByLevel(level: JlptLevel): KanjiCard[] {
  return KANJI_CARDS.filter((k) => k.level === level);
}
