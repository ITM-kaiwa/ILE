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
  },
  {
    "id": "h_sa",
    "type": "hiragana",
    "kana": "さ",
    "romaji": "sa",
    "group": "さ行",
    "mnemonicVn": "Con cá mặt手 (Salmon)",
    "vakHelp": {
      "visual": "さ (sa) と き の形の違い（横線が1本）",
      "auditory": "「さ！SA！」と爽やかに発音",
      "kinesthetic": "空書で1本横線から左下へ"
    }
  },
  {
    "id": "h_shi",
    "type": "hiragana",
    "kana": "し",
    "romaji": "shi",
    "group": "さ行",
    "mnemonicVn": "Móc câu cá (Fishing hook)",
    "vakHelp": {
      "visual": "し (shi) のしなやかなカーブ。しろ（白）",
      "auditory": "「し！SHI！」と静かに発音",
      "kinesthetic": "釣り竿を引くポーズ"
    }
  },
  {
    "id": "h_su",
    "type": "hiragana",
    "kana": "す",
    "romaji": "su",
    "group": "さ行",
    "mnemonicVn": "Ống ống vòi nước (Straw)",
    "vakHelp": {
      "visual": "す (su) のぐるっと丸い結び目",
      "auditory": "「す！SU！」と息を吹き出すように発音",
      "kinesthetic": "指で丸を結んで下へ伸ばす"
    }
  },
  {
    "id": "h_se",
    "type": "hiragana",
    "kana": "せ",
    "romaji": "se",
    "group": "さ行",
    "mnemonicVn": "Hoàng hôn lặn (Sunset)",
    "vakHelp": {
      "visual": "せ (se) の右側の長い線。せんせい（先生）",
      "auditory": "「せ！SE！」と口を少し開けて発声",
      "kinesthetic": "背筋を伸ばして「せ」を書く"
    }
  },
  {
    "id": "h_so",
    "type": "hiragana",
    "kana": "そ",
    "romaji": "so",
    "group": "さ行",
    "mnemonicVn": "Kim khâu quần áo (Sewing)",
    "vakHelp": {
      "visual": "そ (so) のジグザグの曲がり角",
      "auditory": "「そ！SO！」と声に出す",
      "kinesthetic": "ジグザグに指を動かす"
    }
  },
  {
    "id": "h_ta",
    "type": "hiragana",
    "kana": "た",
    "romaji": "ta",
    "group": "た行",
    "mnemonicVn": "Chữ TA trong tiếng Anh",
    "vakHelp": {
      "visual": "た (ta) の左の立と右のこ。たべる（食べる）",
      "auditory": "「た！TA！」と舌を弾いて発音",
      "kinesthetic": "手で「た」の4画を書く"
    }
  },
  {
    "id": "h_chi",
    "type": "hiragana",
    "kana": "ち",
    "romaji": "chi",
    "group": "た行",
    "mnemonicVn": "Cổ cheerleader đang nhảy",
    "vakHelp": {
      "visual": "ち (chi) と さ の向きの違い。ちいさい（小さい）",
      "auditory": "「ち！CHI！」と元気良く発唱",
      "kinesthetic": "チアリーダーのポンポンを振るポーズ"
    }
  },
  {
    "id": "h_tsu",
    "type": "hiragana",
    "kana": "つ",
    "romaji": "tsu",
    "group": "た行",
    "mnemonicVn": "Sóng biển cuốn (Tsunami)",
    "vakHelp": {
      "visual": "つ (tsu) の大きな丸い波。つくえ（机）",
      "auditory": "「つ！TSU！」と息を強く出して発声",
      "kinesthetic": "手で波を描く動作"
    }
  },
  {
    "id": "h_te",
    "type": "hiragana",
    "kana": "て",
    "romaji": "te",
    "group": "た行",
    "mnemonicVn": "Bàn tay (Hand)",
    "vakHelp": {
      "visual": "て (te) の手のひらの形。て（手）",
      "auditory": "「て！TE！」と手を見ながら発音",
      "kinesthetic": "自分の手を前に差し出す"
    }
  },
  {
    "id": "h_to",
    "type": "hiragana",
    "kana": "と",
    "romaji": "to",
    "group": "た行",
    "mnemonicVn": "Món nợ ngón chân (Toe)",
    "vakHelp": {
      "visual": "と (to) の角と点。とけい（時計）",
      "auditory": "「と！TO！」とハッキリ発声",
      "kinesthetic": "指で足を指さす身振り"
    }
  },
  {
    "id": "h_na",
    "type": "hiragana",
    "kana": "な",
    "romaji": "na",
    "group": "な行",
    "mnemonicVn": "Nữ tu đang quỳ cầu nguyện (Nun)",
    "vakHelp": {
      "visual": "な (na) の右上にある点。夏（なつ）",
      "auditory": "「な！NA！」と柔らかく発声",
      "kinesthetic": "手を合わせて祈るポーズ"
    }
  },
  {
    "id": "h_ni",
    "type": "hiragana",
    "kana": "に",
    "romaji": "ni",
    "group": "な行",
    "mnemonicVn": "Cái kim khâu (Needle)",
    "vakHelp": {
      "visual": "に (ni) の左の線と右の「こ」",
      "auditory": "「に！NI！」とニッコリ笑顔で発音",
      "kinesthetic": "人差し指を2本立てる"
    }
  },
  {
    "id": "h_nu",
    "type": "hiragana",
    "kana": "ぬ",
    "romaji": "nu",
    "group": "な行",
    "mnemonicVn": "Tô mì ramen (Noodle)",
    "vakHelp": {
      "visual": "ぬ (nu) の最後のループ。いぬ（犬）",
      "auditory": "「ぬ！NU！」と低めの音で発声",
      "kinesthetic": "箸で麺をすくう動作"
    }
  },
  {
    "id": "h_ne",
    "type": "hiragana",
    "kana": "ね",
    "romaji": "ne",
    "group": "な行",
    "mnemonicVn": "Con mèo đang ngủ (Cat/Neko)",
    "vakHelp": {
      "visual": "ね (ne) の右端の丸いループ。ねこ（猫）",
      "auditory": "「ね！NE！」と語尾を上げる",
      "kinesthetic": "猫の手のポーズをとる"
    }
  },
  {
    "id": "h_no",
    "type": "hiragana",
    "kana": "の",
    "romaji": "no",
    "group": "な行",
    "mnemonicVn": "Biển báo cấm (No)",
    "vakHelp": {
      "visual": "の (no) の1画の綺麗な丸。のりもの（乗り物）",
      "auditory": "「の！NO！」と滑らかに発音",
      "kinesthetic": "指で丸く円を描く"
    }
  },
  {
    "id": "h_ha",
    "type": "hiragana",
    "kana": "は",
    "romaji": "ha",
    "group": "は行",
    "mnemonicVn": "Cái nhà (House)",
    "vakHelp": {
      "visual": "は (ha) の左線と右のループ。はな（花）",
      "auditory": "「は！HA！」とハハハと笑うように発声",
      "kinesthetic": "両手を広げて花を作る"
    }
  },
  {
    "id": "h_hi",
    "type": "hiragana",
    "kana": "ひ",
    "romaji": "hi",
    "group": "は行",
    "mnemonicVn": "Miệng đang cười (He-he)",
    "vakHelp": {
      "visual": "ひ (hi) の大きなにっこりマーク。ひと（人）",
      "auditory": "「ひ！HI！」と笑顔で発音",
      "kinesthetic": "口元を手で指す"
    }
  },
  {
    "id": "h_fu",
    "type": "hiragana",
    "kana": "ふ",
    "romaji": "fu",
    "group": "は行",
    "mnemonicVn": "Núi Phú Sĩ (Mt. Fuji)",
    "vakHelp": {
      "visual": "ふ (fu) の山の形。ふね（船）",
      "auditory": "「ふ！FU！」とロウソクを消すように発音",
      "kinesthetic": "息をふーっと吹きかける"
    }
  },
  {
    "id": "h_he",
    "type": "hiragana",
    "kana": "へ",
    "romaji": "he",
    "group": "は行",
    "mnemonicVn": "Ngọn núi (Hill)",
    "vakHelp": {
      "visual": "へ (he) のへこみ山。へや（部屋）",
      "auditory": "「へ！HE！」と上に上がるトーンで発唱",
      "kinesthetic": "山型の屋根を指で作る"
    }
  },
  {
    "id": "h_ho",
    "type": "hiragana",
    "kana": "ほ",
    "romaji": "ho",
    "group": "は行",
    "mnemonicVn": "Cây đàn hạc (Harp)",
    "vakHelp": {
      "visual": "ほ (ho) の上の横線（は との違い）。ほん（本）",
      "auditory": "「ほ！HO！」とほのぼの音読",
      "kinesthetic": "本を開くポーズ"
    }
  },
  {
    "id": "h_ma",
    "type": "hiragana",
    "kana": "ま",
    "romaji": "ma",
    "group": "ま行",
    "mnemonicVn": "Cái con khỉ (Monkey)",
    "vakHelp": {
      "visual": "ま (ma) の2本横線とループ。毎日（まいにち）",
      "auditory": "「ま！MA！」と優しく発声",
      "kinesthetic": "空中に「ま」を書く"
    }
  },
  {
    "id": "h_mi",
    "type": "hiragana",
    "kana": "み",
    "romaji": "mi",
    "group": "ま行",
    "mnemonicVn": "Số 21 cách điệu",
    "vakHelp": {
      "visual": "み (mi) の21のような曲線。みず（水）",
      "auditory": "「み！MI！」と高らかに発唱",
      "kinesthetic": "水波の動きを手のひらで作る"
    }
  },
  {
    "id": "h_mu",
    "type": "hiragana",
    "kana": "む",
    "romaji": "mu",
    "group": "ま行",
    "mnemonicVn": "Con bò kêu (Moo)",
    "vakHelp": {
      "visual": "む (mu) の右上の点。虫（むし）",
      "auditory": "「む！MU！」と低い声で発音",
      "kinesthetic": "牛の角のポーズ"
    }
  },
  {
    "id": "h_me",
    "type": "hiragana",
    "kana": "め",
    "romaji": "me",
    "group": "ま行",
    "mnemonicVn": "Con mắt (Eye/Me)",
    "vakHelp": {
      "visual": "め (me) のまるい目玉の形。め（目）",
      "auditory": "「め！ME！」と目を見開いて発音",
      "kinesthetic": "自分の目を指さす"
    }
  },
  {
    "id": "h_mo",
    "type": "hiragana",
    "kana": "も",
    "romaji": "mo",
    "group": "ま行",
    "mnemonicVn": "Móc câu cá bắt nhiều cá (More)",
    "vakHelp": {
      "visual": "も (mo) の2本穿ち。もの（物）",
      "auditory": "「も！MO！」と発声",
      "kinesthetic": "釣り針を引き上げる身振り"
    }
  },
  {
    "id": "h_ya",
    "type": "hiragana",
    "kana": "や",
    "romaji": "ya",
    "group": "や行",
    "mnemonicVn": "Con bò Tây Tạng (Yak)",
    "vakHelp": {
      "visual": "や (ya) の流れる3画。やま（山）",
      "auditory": "「や！YA！」と元気良く発唱",
      "kinesthetic": "山を指さす動き"
    }
  },
  {
    "id": "h_yu",
    "type": "hiragana",
    "kana": "ゆ",
    "romaji": "yu",
    "group": "や行",
    "mnemonicVn": "Cá bơi trong nước (Yu-fune)",
    "vakHelp": {
      "visual": "ゆ (yu) のお湯の丸み。ゆき（雪）",
      "auditory": "「ゆ！YU！」と滑らかに発音",
      "kinesthetic": "温泉に浸かる身振り"
    }
  },
  {
    "id": "h_yo",
    "type": "hiragana",
    "kana": "よ",
    "romaji": "yo",
    "group": "や行",
    "mnemonicVn": "Cái du-du (Yo-yo)",
    "vakHelp": {
      "visual": "よ (yo) の下ループ。よる（夜）",
      "auditory": "「よ！YO！」と呼びかけるように発音",
      "kinesthetic": "ヨーヨーを投げる動作"
    }
  },
  {
    "id": "h_ra",
    "type": "hiragana",
    "kana": "ら",
    "romaji": "ra",
    "group": "ら行",
    "mnemonicVn": "Conラクダ (Lạc đà/Camel)",
    "vakHelp": {
      "visual": "ら (ra) の上の点とコブ。らいしゅう（来週）",
      "auditory": "「ら！RA！」と舌を弾いて発唱",
      "kinesthetic": "ラクダのコブを手で作る"
    }
  },
  {
    "id": "h_ri",
    "type": "hiragana",
    "kana": "り",
    "romaji": "ri",
    "group": "ら行",
    "mnemonicVn": "Dòng sông chảy (River)",
    "vakHelp": {
      "visual": "り (ri) の2本の縦線。りんご（林檎）",
      "auditory": "「り！RI！」と涼やかに発音",
      "kinesthetic": "指2本で流れる線を書く"
    }
  },
  {
    "id": "h_ru",
    "type": "hiragana",
    "kana": "る",
    "romaji": "ru",
    "group": "ら行",
    "mnemonicVn": "Vòng nhẫn (Ring/Loop)",
    "vakHelp": {
      "visual": "る (ru) の最後のくるりん。留学生（りゅうがくせい）",
      "auditory": "「る！RU！」と軽やかに音読",
      "kinesthetic": "小指で輪っかを作る"
    }
  },
  {
    "id": "h_re",
    "type": "hiragana",
    "kana": "れ",
    "romaji": "re",
    "group": "ら行",
    "mnemonicVn": "Người đang tập luyện (Exercise)",
    "vakHelp": {
      "visual": "れ (re) の右はらい。歴史（れきし）",
      "auditory": "「れ！RE！」とハッキリ発声",
      "kinesthetic": "片足を後方に蹴る動作"
    }
  },
  {
    "id": "h_ro",
    "type": "hiragana",
    "kana": "ろ",
    "romaji": "ro",
    "group": "ら行",
    "mnemonicVn": "Con đường (Road/3)",
    "vakHelp": {
      "visual": "ろ (ro) と る の違い（最後が丸まらない）",
      "auditory": "「ろ！RO！」と声に出す",
      "kinesthetic": "まっすぐ指を滑らせる"
    }
  },
  {
    "id": "h_wa",
    "type": "hiragana",
    "kana": "わ",
    "romaji": "wa",
    "group": "わ行",
    "mnemonicVn": "Con thiên nga (Swan/Wat)",
    "vakHelp": {
      "visual": "わ (wa) の背中のまるみ。私（わたし）",
      "auditory": "「わ！WA！」と大きく口を開けて発声",
      "kinesthetic": "羽ばたく動作を作る"
    }
  },
  {
    "id": "h_wo",
    "type": "hiragana",
    "kana": "を",
    "romaji": "wo",
    "group": "わ行",
    "mnemonicVn": "Người vận động viên trượt特性",
    "vakHelp": {
      "visual": "を (wo) の助詞専用デザイン",
      "auditory": "「を！WO(O)！」と短く発音",
      "kinesthetic": "手を交差させて書く"
    }
  },
  {
    "id": "h_n",
    "type": "hiragana",
    "kana": "ん",
    "romaji": "n",
    "group": "わ行",
    "mnemonicVn": "Chữ n tiếng Anh",
    "vakHelp": {
      "visual": "ん (n) のしなやかな1画。本（ほん）",
      "auditory": "「ん！N！」と鼻から音を抜く",
      "kinesthetic": "うーんとうなずく"
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
  },
  {
    "id": "k_sa",
    "type": "katakana",
    "kana": "サ",
    "romaji": "sa",
    "group": "サ行",
    "mnemonicVn": "3 đường thẳng xếp song song",
    "vakHelp": {
      "visual": "サ (sa) の3画の直線構造",
      "auditory": "「サ！SA！」と発音",
      "kinesthetic": "空中にサッと3画を書く"
    }
  },
  {
    "id": "k_shi",
    "type": "katakana",
    "kana": "シ",
    "romaji": "shi",
    "group": "サ行",
    "mnemonicVn": "Khuôn mặt cười nghiêng (Smile)",
    "vakHelp": {
      "visual": "シ (shi) の下から上へ払う2点",
      "auditory": "「シ！SHI！」と静かに発唱",
      "kinesthetic": "下から上へ指を払う"
    }
  },
  {
    "id": "k_su",
    "type": "katakana",
    "kana": "ス",
    "romaji": "su",
    "group": "サ行",
    "mnemonicVn": "Người trượt tuyết (Ski)",
    "vakHelp": {
      "visual": "ス (su) の三角形の角",
      "auditory": "「ス！SU！」と発音",
      "kinesthetic": "スライダーの身振り"
    }
  },
  {
    "id": "k_se",
    "type": "katakana",
    "kana": "セ",
    "romaji": "se",
    "group": "サ行",
    "mnemonicVn": "Giống ひらがな せ",
    "vakHelp": {
      "visual": "セ (se) の直線的な形",
      "auditory": "「セ！SE！」と発音",
      "kinesthetic": "カクカクとセを書く"
    }
  },
  {
    "id": "k_so",
    "type": "katakana",
    "kana": "ソ",
    "romaji": "so",
    "group": "サ行",
    "mnemonicVn": "Kem que (Soft cream)",
    "vakHelp": {
      "visual": "ソ (so) の上から下へ払う2点",
      "auditory": "「ソ！SO！」と発声",
      "kinesthetic": "上から下へ素早く指を落とす"
    }
  },
  {
    "id": "k_ta",
    "type": "katakana",
    "kana": "タ",
    "romaji": "ta",
    "group": "タ行",
    "mnemonicVn": "Tháp Eiffel (Tower)",
    "vakHelp": {
      "visual": "タ (ta) のクロスライン",
      "auditory": "「タ！TA！」と発音",
      "kinesthetic": "腕をクロスさせる"
    }
  },
  {
    "id": "k_chi",
    "type": "katakana",
    "kana": "チ",
    "romaji": "chi",
    "group": "た行",
    "mnemonicVn": "Con gà (Chicken)",
    "vakHelp": {
      "visual": "チ (chi) の「千」に似た形",
      "auditory": "「チ！CHI！」とハッキリ音読",
      "kinesthetic": "指で千を書く"
    }
  },
  {
    "id": "k_tsu",
    "type": "katakana",
    "kana": "ツ",
    "romaji": "tsu",
    "group": "タ行",
    "mnemonicVn": "3 giọt nước mưa rơi",
    "vakHelp": {
      "visual": "ツ (tsu) の上から下への3点",
      "auditory": "「ツ！TSU！」と息を抜く",
      "kinesthetic": "上から下へポツポツ指を落とす"
    }
  },
  {
    "id": "k_te",
    "type": "katakana",
    "kana": "テ",
    "romaji": "te",
    "group": "タ行",
    "mnemonicVn": "Cột ăng-ten (Antenna)",
    "vakHelp": {
      "visual": "テ (te) のTの文字型",
      "auditory": "「テ！TE！」と発声",
      "kinesthetic": "両手でTのポーズ"
    }
  },
  {
    "id": "k_to",
    "type": "katakana",
    "kana": "ト",
    "romaji": "to",
    "group": "タ行",
    "mnemonicVn": "Cái rìu bổ vào gỗ",
    "vakHelp": {
      "visual": "ト (to) の縦線と右斜め線",
      "auditory": "「ト！TO！」と音読",
      "kinesthetic": "トントンと叩く動作"
    }
  },
  {
    "id": "k_na",
    "type": "katakana",
    "kana": "ナ",
    "romaji": "na",
    "group": "ナ行",
    "mnemonicVn": "Con dao (Knife/Na)",
    "vakHelp": {
      "visual": "ナ (na) の十字の形",
      "auditory": "「ナ！NA！」と発音",
      "kinesthetic": "十の字を指で切る"
    }
  },
  {
    "id": "k_ni",
    "type": "katakana",
    "kana": "ニ",
    "romaji": "ni",
    "group": "ナ行",
    "mnemonicVn": "Số 2 (Two/Ni)",
    "vakHelp": {
      "visual": "ニ (ni) の横2本線",
      "auditory": "「ニ！NI！」と笑顔で発声",
      "kinesthetic": "指2本を横に出す"
    }
  },
  {
    "id": "k_nu",
    "type": "katakana",
    "kana": "ヌ",
    "romaji": "nu",
    "group": "ナ行",
    "mnemonicVn": "Cái móc đan (Needle)",
    "vakHelp": {
      "visual": "ヌ (nu) の「又」の形",
      "auditory": "「ヌ！NU！」と発音",
      "kinesthetic": "交差する2画を書く"
    }
  },
  {
    "id": "k_ne",
    "type": "katakana",
    "kana": "ネ",
    "romaji": "ne",
    "group": "ナ行",
    "mnemonicVn": "Cái cà vạt (Necktie)",
    "vakHelp": {
      "visual": "ネ (ne) の「示」のへん",
      "auditory": "「ネ！NE！」と音読",
      "kinesthetic": "ネクタイを結ぶ身振り"
    }
  },
  {
    "id": "k_no",
    "type": "katakana",
    "kana": "ノ",
    "romaji": "no",
    "group": "ナ行",
    "mnemonicVn": "Cái mũi dài (Nose)",
    "vakHelp": {
      "visual": "ノ (no) のシンプルな1斜め線",
      "auditory": "「ノ！NO！」と流すように発声",
      "kinesthetic": "サッと斜めに指をはらう"
    }
  },
  {
    "id": "k_ha",
    "type": "katakana",
    "kana": "ハ",
    "romaji": "ha",
    "group": "ハ行",
    "mnemonicVn": "Cái rìu hai lưỡi",
    "vakHelp": {
      "visual": "ハ (ha) の八（はち）の形",
      "auditory": "「ハ！HA！」とハハハと発唱",
      "kinesthetic": "八の字を空書"
    }
  },
  {
    "id": "k_hi",
    "type": "katakana",
    "kana": "ヒ",
    "romaji": "hi",
    "group": "ハ行",
    "mnemonicVn": "Gót chân (Heel)",
    "vakHelp": {
      "visual": "ヒ (hi) のL字と横線",
      "auditory": "「ヒ！HI！」と発音",
      "kinesthetic": "かかとを指さす"
    }
  },
  {
    "id": "k_fu",
    "type": "katakana",
    "kana": "フ",
    "romaji": "fu",
    "group": "ハ行",
    "mnemonicVn": "Cái cờ (Flag)",
    "vakHelp": {
      "visual": "フ (fu) の「フ」の1画カーブ",
      "auditory": "「フ！FU！」と息を吹き出す",
      "kinesthetic": "風になびく手を振る"
    }
  },
  {
    "id": "k_he",
    "type": "katakana",
    "kana": "ヘ",
    "romaji": "he",
    "group": "ハ行",
    "mnemonicVn": "Giống ひらがな へ",
    "vakHelp": {
      "visual": "ヘ (he) の山型",
      "auditory": "「ヘ！HE！」と音読",
      "kinesthetic": "屋根を作る"
    }
  },
  {
    "id": "k_ho",
    "type": "katakana",
    "kana": "ホ",
    "romaji": "ho",
    "group": "ハ行",
    "mnemonicVn": "Cây thông (Holy tree)",
    "vakHelp": {
      "visual": "ホ (ho) の「木」の異体",
      "auditory": "「ホ！HO！」と発音",
      "kinesthetic": "木の枝を広げる動作"
    }
  },
  {
    "id": "k_ma",
    "type": "katakana",
    "kana": "マ",
    "romaji": "ma",
    "group": "マ行",
    "mnemonicVn": "Ống nhòm (Master)",
    "vakHelp": {
      "visual": "マ (ma) の角",
      "auditory": "「マ！MA！」と発声",
      "kinesthetic": "三角を指で作る"
    }
  },
  {
    "id": "k_mi",
    "type": "katakana",
    "kana": "ミ",
    "romaji": "mi",
    "group": "マ行",
    "mnemonicVn": "3 vạch xiên (Three/Mi)",
    "vakHelp": {
      "visual": "ミ (mi) の斜め3本線",
      "auditory": "「ミ！MI！」と高らかに発唱",
      "kinesthetic": "上から下へ3本指をはらう"
    }
  },
  {
    "id": "k_mu",
    "type": "katakana",
    "kana": "ム",
    "romaji": "mu",
    "group": "マ行",
    "mnemonicVn": "Cái cùi手 (Muscle)",
    "vakHelp": {
      "visual": "ム (mu) の三角形",
      "auditory": "「ム！MU！」と低い音",
      "kinesthetic": "力こぶを作る"
    }
  },
  {
    "id": "k_me",
    "type": "katakana",
    "kana": "メ",
    "romaji": "me",
    "group": "マ行",
    "mnemonicVn": "Dấu X chéo (Media)",
    "vakHelp": {
      "visual": "メ (me) の交差スラッシュ",
      "auditory": "「メ！ME！」と発音",
      "kinesthetic": "バツ印を指で作る"
    }
  },
  {
    "id": "k_mo",
    "type": "katakana",
    "kana": "モ",
    "romaji": "mo",
    "group": "マ行",
    "mnemonicVn": "Món ăn (More)",
    "vakHelp": {
      "visual": "モ (mo) の直線フレーム",
      "auditory": "「モ！MO！」と発声",
      "kinesthetic": "横2本縦1本を書く"
    }
  },
  {
    "id": "k_ya",
    "type": "katakana",
    "kana": "ヤ",
    "romaji": "ya",
    "group": "ヤ行",
    "mnemonicVn": "Giống ひらがな や",
    "vakHelp": {
      "visual": "ヤ (ya) の直線デザイン",
      "auditory": "「ヤ！YA！」と叫ぶ",
      "kinesthetic": "矢を射るポーズ"
    }
  },
  {
    "id": "k_yu",
    "type": "katakana",
    "kana": "ユ",
    "romaji": "yu",
    "group": "ヤ行",
    "mnemonicVn": "Cái xô (Bucket)",
    "vakHelp": {
      "visual": "ユ (yu) の角型",
      "auditory": "「ユ！YU！」と発音",
      "kinesthetic": "コの字を下向きに書く"
    }
  },
  {
    "id": "k_yo",
    "type": "katakana",
    "kana": "ヨ",
    "romaji": "yo",
    "group": "ヤ行",
    "mnemonicVn": "Chữ E ngược (Yoga)",
    "vakHelp": {
      "visual": "ヨ (yo) の3段棚",
      "auditory": "「ヨ！YO！」と発唱",
      "kinesthetic": "Eの反対形を書く"
    }
  },
  {
    "id": "k_ra",
    "type": "katakana",
    "kana": "ラ",
    "romaji": "ra",
    "group": "ラ行",
    "mnemonicVn": "Đài radio (Radio)",
    "vakHelp": {
      "visual": "ラ (ra) のフの上の1本線",
      "auditory": "「ラ！RA！」と軽やかに発音",
      "kinesthetic": "ラジオのダイヤルを回す"
    }
  },
  {
    "id": "k_ri",
    "type": "katakana",
    "kana": "リ",
    "romaji": "ri",
    "group": "ラ行",
    "mnemonicVn": "Giống ひらがな り",
    "vakHelp": {
      "visual": "リ (ri) のまっすぐな2本線",
      "auditory": "「リ！RI！」と発声",
      "kinesthetic": "縦2本線を落とす"
    }
  },
  {
    "id": "k_ru",
    "type": "katakana",
    "kana": "ル",
    "romaji": "ru",
    "group": "ラ行",
    "mnemonicVn": "Đôi chân đang chạy (Run)",
    "vakHelp": {
      "visual": "ル (ru) の左右にはらう2腿",
      "auditory": "「ル！RU！」と音読",
      "kinesthetic": "2本指で走る足の動き"
    }
  },
  {
    "id": "k_re",
    "type": "katakana",
    "kana": "レ",
    "romaji": "re",
    "group": "ラ行",
    "mnemonicVn": "Dấu tích (Checkmark)",
    "vakHelp": {
      "visual": "レ (re) のチェックマーク",
      "auditory": "「レ！RE！」と発音",
      "kinesthetic": "指でレ点を書く"
    }
  },
  {
    "id": "k_ro",
    "type": "katakana",
    "kana": "ロ",
    "romaji": "ro",
    "group": "ラ行",
    "mnemonicVn": "Hình ô vuông (Square/Box)",
    "vakHelp": {
      "visual": "ロ (ro) の完全な四角形",
      "auditory": "「ロ！RO！」と口を大きく開ける",
      "kinesthetic": "四角形を空書"
    }
  },
  {
    "id": "k_wa",
    "type": "katakana",
    "kana": "ワ",
    "romaji": "wa",
    "group": "ワ行",
    "mnemonicVn": "Cái đai (Ring/Wa)",
    "vakHelp": {
      "visual": "ワ (wa) のウから点を取った形",
      "auditory": "「ワ！WA！」と発声",
      "kinesthetic": "丸く囲む動き"
    }
  },
  {
    "id": "k_wo",
    "type": "katakana",
    "kana": "ヲ",
    "romaji": "wo",
    "group": "ワ行",
    "mnemonicVn": "Vận動 viên (Olympics)",
    "vakHelp": {
      "visual": "ヲ (wo) の2段の横線",
      "auditory": "「ヲ！WO！」と短く発音",
      "kinesthetic": "横2本に斜め1本"
    }
  },
  {
    "id": "k_n",
    "type": "katakana",
    "kana": "ン",
    "romaji": "n",
    "group": "ワ行",
    "mnemonicVn": "Cười 1眼 (One eye smile)",
    "vakHelp": {
      "visual": "ン (n) の左下から右上への払い",
      "auditory": "「ン！N！」と鼻音で抜く",
      "kinesthetic": "斜め下から上へ指を上げる"
    }
  }
];

export const ALL_KANA_CARDS: KanaCard[] = [...HIRAGANA_CARDS, ...KATAKANA_CARDS];

export function getKanaByType(type: KanaType): KanaCard[] {
  return ALL_KANA_CARDS.filter((k) => k.type === type);
}
