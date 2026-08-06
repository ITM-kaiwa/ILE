// scripts/update_kana_cards.cjs
// Comprehensive script to:
// 1. Update existing kana card vak_help with better content
// 2. Add new cards for 濁音、半濁音、拗音
// 3. Download missing audio and upload to Supabase Storage
// 4. Link all cards to their audio URLs

const fs = require('fs');
const path = require('path');
const https = require('https');
const { createClient } = require('@supabase/supabase-js');

const envContent = fs.readFileSync(path.resolve('.env.local'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k) env[k.trim()] = v.join('=').trim().replace(/(^"|"$)/g, '');
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL.replace('/rest/v1', '').replace(/\/$/, '');
const supabase = createClient(supabaseUrl, env.SUPABASE_SERVICE_ROLE_KEY);
const BUCKET = 'kana_audio';
const BASE_URL = 'https://a1.marugotoweb.jp/en/assets/sounds/common';

const delay = ms => new Promise(r => setTimeout(r, ms));

// =============================================
// IMPROVED VAK HELP DATA FOR EXISTING 清音 CARDS
// =============================================
const SEION_VAK = {
  // あ行
  'a':  { visual: '「あ」は人が「あ！」と驚いて両手を広げた形。3画。', auditory: '「あおい（青い）」の最初の音。口を大きく開けて「あ」。', kinesthetic: '空中に3画で「あ」をゆっくり書く。右斜め線→横線→曲線の順。' },
  'i':  { visual: '「い」は縦に並んだ2本の線。まるで2人が並んでいる形。', auditory: '「いぬ（犬）」の最初の音。口を横に引いて「い」。', kinesthetic: '縦線を2本、左右に書く。上で少し曲げる。' },
  'u':  { visual: '「う」は口をすぼめた形。上の点が特徴的な2画の文字。', auditory: '「うえ（上）」の最初の音。口をすぼめて「う」。', kinesthetic: '点を打ってから、U字を書くようにカーブを描く。' },
  'e':  { visual: '「え」は川が2本交差したような形。4画で書く。', auditory: '「えき（駅）」の最初の音。口を少し開けて「え」。', kinesthetic: '横線、縦線、横線、最後に右下への斜め線を書く。' },
  'o':  { visual: '「お」は「あ」に似ているが最後に縦棒が入る。3画。', auditory: '「おかあさん（お母さん）」の最初の音。口を丸く開けて「お」。', kinesthetic: '左上から始まり、横線→大きなカーブ→縦線を書く。' },
  // か行
  'ka': { visual: '「か」は漢字「加」を崩した形。右上に短い斜め線がある。', auditory: '「かさ（傘）」の最初の音。口を大きく開けて「か」。', kinesthetic: '左の縦線を書き、右から斜め上下に2本の線を書く。' },
  'ki': { visual: '「き」は漢字「幾」を崩した形。横線3本と縦線の組み合わせ。', auditory: '「きって（切手）」の最初の音。口を横に引いて「き」。', kinesthetic: '上から横線2本→縦線→左下への線を順に書く。' },
  'ku': { visual: '「く」はとても単純。鳥のくちばしのような形の1画の文字。', auditory: '「くるま（車）」の最初の音。口をすぼめて「く」。', kinesthetic: '右から左に向かって、く字を一筆で書く。' },
  'ke': { visual: '「け」は「け」の形。縦線から右に2本の横線が出ている。', auditory: '「けむり（煙）」の最初の音。口を広げて「け」。', kinesthetic: '縦線→上の横線→下の横線の順に3画で書く。' },
  'ko': { visual: '「こ」は漢字「己」に似た2画の文字。横線2本。', auditory: '「こえ（声）」の最初の音。口を丸く開けて「こ」。', kinesthetic: '上の横線→下の横線を順に書く。2画のシンプルな字。' },
  // さ行
  'sa': { visual: '「さ」は漢字「左」を崩した形。横線と大きなカーブ。', auditory: '「さくら（桜）」の最初の音。口を広げて「さ」。', kinesthetic: '横線→縦線（左カーブ）→右下への斜め線を書く。' },
  'shi':{ visual: '「し」は釣り針のような形の1画の文字。下に向かってカーブ。', auditory: '「しんかんせん（新幹線）」の最初の音。「し」。', kinesthetic: '上から下へ、最後に右にはねる1画を書く。' },
  'su': { visual: '「す」は「す」の形。上に丸みがあって、下に小さな輪がある。', auditory: '「すし（寿司）」の最初の音。口をすぼめて「す」。', kinesthetic: '上から書き始め、右回りで輪を作って下に引く。' },
  'se': { visual: '「せ」は「世」を崩した字。縦線と3本の横線から成る。', auditory: '「せんせい（先生）」の最初の音。口を広げて「せ」。', kinesthetic: '縦線を書いてから横線3本を順に引く。' },
  'so': { visual: '「そ」はS字を縦にしたような形。2画で書く。', auditory: '「そら（空）」の最初の音。口を丸く開けて「そ」。', kinesthetic: '右から左へ横線を引き、続けて大きくS字カーブを書く。' },
  // た行
  'ta': { visual: '「た」は漢字「太」を崩した形。十字に斜め線が入る。', auditory: '「たいよう（太陽）」の最初の音。口を大きく開けて「た」。', kinesthetic: '横線→縦線→左斜め→右斜めの順に4画で書く。' },
  'chi':{ visual: '「ち」はチョコレートのような丸みのある形。2画。', auditory: '「ちず（地図）」の最初の音。口を横に引いて「ち」。', kinesthetic: '横線を書き、下に丸くカーブして右に引っ張る。' },
  'tsu':{ visual: '「つ」は大きく右カーブした1画の文字。横向きのC。', auditory: '「つき（月）」の最初の音。口をすぼめて「つ」。', kinesthetic: '右上から書き始め、下に大きく弧を描いて右に引く。' },
  'te': { visual: '「て」は横棒から下にカーブした1画の文字。', auditory: '「てがみ（手紙）」の最初の音。口を広げて「て」。', kinesthetic: '横線から右下へカーブを1画で書く。' },
  'to': { visual: '「と」は縦線と右向きカーブの2画。釣り針が2つ。', auditory: '「とけい（時計）」の最初の音。口を丸く開けて「と」。', kinesthetic: '縦線を書き、右に小さな突起（カーブ）を加える。' },
  // な行
  'na': { visual: '「な」は漢字「奈」を崩した形。複雑に見えるが4画。', auditory: '「なまえ（名前）」の最初の音。口を大きく開けて「な」。', kinesthetic: '横線→縦線→右斜めカーブ→左下カーブの4画で書く。' },
  'ni': { visual: '「に」は2本の横線と縦線の組み合わせ。', auditory: '「にほん（日本）」の最初の音。口を横に引いて「に」。', kinesthetic: '縦線→上の横線→下の横線の3画で書く。' },
  'nu': { visual: '「ぬ」は「め」に似た形。丸い輪の中に線が入る。', auditory: '「ぬの（布）」の最初の音。口をすぼめて「ぬ」。', kinesthetic: '左から書き、内側に輪を作り上に引き出す2画。' },
  'ne': { visual: '「ね」は「ぬ」に似ているが下にはねがある。', auditory: '「ねこ（猫）」の最初の音。口を広げて「ね」。', kinesthetic: '左から書き、内側に輪を作り、下に向かって引く。' },
  'no': { visual: '「の」は大きな輪の形。O字を少し崩したような1画。', auditory: '「のりもの（乗り物）」の最初の音。「の」。', kinesthetic: '右上から左回りに丸く書き、右上で終わる。' },
  // は行
  'ha': { visual: '「は」は漢字「波」を崩した3画の文字。', auditory: '「はな（花）」の最初の音。口を大きく開けて「は」。', kinesthetic: '縦線→上の弧→下の弧の3画で書く。' },
  'hi': { visual: '「ひ」は「h」の形に似た、縦線と右向きカーブの1画。', auditory: '「ひこうき（飛行機）」の最初の音。「ひ」。', kinesthetic: '縦に書いてから右に大きく弧を描く1画。' },
  'fu': { visual: '「ふ」は富士山のような形。上に小さな点が2つある。', auditory: '「ふじさん（富士山）」の最初の音。「ふ」。', kinesthetic: '上の点（2つ）→下の弧を順に書く。4画。' },
  'he': { visual: '「へ」は山の形のような1画の文字。△に近い。', auditory: '「へや（部屋）」の最初の音。口を広げて「へ」。', kinesthetic: '左から右上へ、そして右下へ1画で書く。' },
  'ho': { visual: '「ほ」は「木」に似た形。縦線に横線と2つの弧。', auditory: '「ほし（星）」の最初の音。口を丸く開けて「ほ」。', kinesthetic: '縦線→横線→左弧→右弧の4画で書く。' },
  // ま行
  'ma': { visual: '「ま」は漢字「末」を崩した形。横線2本と縦線と輪。', auditory: '「まど（窓）」の最初の音。口を大きく開けて「ま」。', kinesthetic: '横線→縦線→右から輪を作るように書く。3画。' },
  'mi': { visual: '「み」は3つの小さな曲線が積み重なった形。', auditory: '「みず（水）」の最初の音。口を横に引いて「み」。', kinesthetic: '上から小さなカーブを3つ、順に下に向かって書く。' },
  'mu': { visual: '「む」は「な」の下部に似た形。丸みとはねが特徴。', auditory: '「むし（虫）」の最初の音。口をすぼめて「む」。', kinesthetic: '横線→下に弧→右上にはね上げる3画で書く。' },
  'me': { visual: '「め」は「ぬ」に似ているが小さな輪がある。', auditory: '「めだか（めだか）」の最初の音。口を広げて「め」。', kinesthetic: '左から書き、内側に小さな輪を作り右に引く。' },
  'mo': { visual: '「も」は横線2本に縦のカーブが入った形。', auditory: '「もり（森）」の最初の音。口を丸く開けて「も」。', kinesthetic: '横線→縦線（カーブ）→横線の3画で書く。' },
  // や行
  'ya': { visual: '「や」は漢字「也」を崩した形。左右に張り出した形。', auditory: '「やま（山）」の最初の音。口を大きく開けて「や」。', kinesthetic: '右上斜め線→横線→左斜めカーブの3画で書く。' },
  'yu': { visual: '「ゆ」は漢字「由」に似た形。上の横線と下の輪。', auditory: '「ゆき（雪）」の最初の音。口をすぼめて「ゆ」。', kinesthetic: '上の部分（横線と縦線）→下の輪の順に書く。' },
  'yo': { visual: '「よ」は「よ」の形。横線と大きなカーブ。', auditory: '「よる（夜）」の最初の音。口を丸く開けて「よ」。', kinesthetic: '上の横線から縦にカーブを2画で書く。' },
  // ら行
  'ra': { visual: '「ら」は漢字「良」を崩した形。横線から下へのカーブ。', auditory: '「らいねん（来年）」の最初の音。「ら」。', kinesthetic: '横線から縦に引き、右にカーブして輪を作る。2画。' },
  'ri': { visual: '「り」は縦に並んだ2本の線。右の線が長い。', auditory: '「りんご（りんご）」の最初の音。口を横に引いて「り」。', kinesthetic: '短い縦線→長い縦線（下で右にはね）の2画。' },
  'ru': { visual: '「る」は丸いカーブと小さな輪が特徴。', auditory: '「るすばん（留守番）」の最初の音。「る」。', kinesthetic: '右から大きくカーブして輪を作る1画。' },
  're': { visual: '「れ」は「ね」に似ているが下のはねが短い。', auditory: '「れいぞうこ（冷蔵庫）」の最初の音。「れ」。', kinesthetic: '縦線から右カーブ→輪→左下への線を書く。' },
  'ro': { visual: '「ろ」は「る」から輪をなくした形。大きなカーブ。', auditory: '「ろうそく（ろうそく）」の最初の音。「ろ」。', kinesthetic: '上から右カーブを大きく引き、左下で終える。' },
  // わ行
  'wa': { visual: '「わ」は「ね」に似た形。下のはねがない。', auditory: '「わたし（私）」の最初の音。口を大きく開けて「わ」。', kinesthetic: '縦線から右カーブ→輪→右下への線を書く。' },
  'wo': { visual: '「を」は助詞専用の文字。横線と複雑な下部。', auditory: '「〜を」（〜を食べる）という助詞として使う文字。', kinesthetic: '横線→縦線→左カーブ→下の部分の4画で書く。' },
  'n':  { visual: '「ん」はひらがなで唯一、単独で子音を表す。右上のカーブ。', auditory: '「おんがく（音楽）」などの語中・語末の「ん」。', kinesthetic: '左下から右上へカーブして、小さな輪で終える。' },
};

// =============================================
// KATAKANA IMPROVED VAK HELP
// =============================================
const KATAKANA_VAK = {
  'a':  { visual: '「ア」は「ア」の形。左の斜め線と右の縦線の2画。', auditory: '「アイスクリーム」の最初の音「ア」。', kinesthetic: '左斜め線→縦線の2画で書く。' },
  'i':  { visual: '「イ」は縦線と左斜め線の2画。漢字「人」の右側に似る。', auditory: '「イタリア」の最初の音「イ」。', kinesthetic: '左斜め線から縦線へ連続して書く。' },
  'u':  { visual: '「ウ」は横線1本と下の小さなV字形の2画。', auditory: '「ウイルス」の最初の音「ウ」。', kinesthetic: '横線→V字を2画で書く。' },
  'e':  { visual: '「エ」は工（工場の工）と同じ形。横線2本と縦線。', auditory: '「エレベーター」の最初の音「エ」。', kinesthetic: '上の横線→縦線→下の横線の3画で書く。' },
  'o':  { visual: '「オ」は「ア」に横線を足したような形。3画。', auditory: '「オレンジ」の最初の音「オ」。', kinesthetic: '横線→左斜め線→縦線の3画で書く。' },
  'ka': { visual: '「カ」は力（ちから）の漢字に似た2画。', auditory: '「カメラ」の最初の音「カ」。', kinesthetic: '左斜め線→右下への短い線の2画で書く。' },
  'ki': { visual: '「キ」は横線3本と縦線の4画。「キリン」の形に似る。', auditory: '「キウイ」の最初の音「キ」。', kinesthetic: '横線3本を書いてから、真ん中を通る縦線を引く。' },
  'ku': { visual: '「ク」は「く」の形をシャープにした2画。', auditory: '「クリーム」の最初の音「ク」。', kinesthetic: '斜め上→斜め下の2画で書く。' },
  'ke': { visual: '「ケ」はひらがな「け」に似た3画。', auditory: '「ケーキ」の最初の音「ケ」。', kinesthetic: '縦線→上斜め線→下横線の3画で書く。' },
  'ko': { visual: '「コ」はコの字形。横線2本と縦線1本。', auditory: '「コーヒー」の最初の音「コ」。', kinesthetic: '上横線→右縦線→下横線の3画で書く。' },
  'sa': { visual: '「サ」は横線2本と右下への斜め線の3画。', auditory: '「サッカー」の最初の音「サ」。', kinesthetic: '横線2本→斜め線の3画で書く。' },
  'shi':{ visual: '「シ」は点3つの組み合わせ。縦向きに並ぶ。', auditory: '「シャワー」の最初の音「シ」。', kinesthetic: '点を3つ、斜めに並べて書く。' },
  'su': { visual: '「ス」は「ス」の形。上のカーブと下の点。', auditory: '「スポーツ」の最初の音「ス」。', kinesthetic: '上カーブから引いて、下に点（はね）をつける。' },
  'se': { visual: '「セ」は漢字「世」に形が似た、横線2本と縦線。', auditory: '「セーター」の最初の音「セ」。', kinesthetic: '横線→縦線→右下への線の3画で書く。' },
  'so': { visual: '「ソ」は点2つの組み合わせ。「シ」の横向き。', auditory: '「ソファー」の最初の音「ソ」。', kinesthetic: '点2つを、斜めに並べて書く。' },
  'ta': { visual: '「タ」は横線と大きな斜め線の3画。', auditory: '「タクシー」の最初の音「タ」。', kinesthetic: '横線→斜め左→右下への線の3画で書く。' },
  'chi':{ visual: '「チ」は横線2本と下の弧の3画。', auditory: '「チーズ」の最初の音「チ」。', kinesthetic: '横線2本→下の弧を書く3画。' },
  'tsu':{ visual: '「ツ」は点3つが横に並ぶ形。「シ」の横向き版。', auditory: '「ツアー」の最初の音「ツ」。', kinesthetic: '点を3つ、横に並べて書く。' },
  'te': { visual: '「テ」は横線3本と縦線の4画。', auditory: '「テレビ」の最初の音「テ」。', kinesthetic: '横線3本→縦線（下にはね）の4画で書く。' },
  'to': { visual: '「ト」は縦線と右への短い突起の2画。', auditory: '「トマト」の最初の音「ト」。', kinesthetic: '縦線→右への短い突起を2画で書く。' },
  'na': { visual: '「ナ」は横線と縦線の2画。シンプルな字。', auditory: '「ナイフ」の最初の音「ナ」。', kinesthetic: '横線→縦線（左下に延びる）の2画で書く。' },
  'ni': { visual: '「ニ」は横線2本のみのシンプルな字。', auditory: '「ニュース」の最初の音「ニ」。', kinesthetic: '上の横線→下の横線の2画で書く。' },
  'nu': { visual: '「ヌ」は斜め線2本の2画。×に似た形。', auditory: '「ヌードル」の最初の音「ヌ」。', kinesthetic: '左斜め→右斜めの2画で書く。' },
  'ne': { visual: '「ネ」は「ネ」の形。縦線と横線の組み合わせ。', auditory: '「ネクタイ」の最初の音「ネ」。', kinesthetic: '縦線→横線→左右への線を書く4画。' },
  'no': { visual: '「ノ」は左上から右下への斜め線1画のみ。', auditory: '「ノート」の最初の音「ノ」。', kinesthetic: '左上から右下へ一気に斜め線を引く。' },
  'ha': { visual: '「ハ」は八（数字の8）の漢字と同じ形。2画。', auditory: '「ハンバーガー」の最初の音「ハ」。', kinesthetic: '左斜め線→右斜め線の2画で書く。' },
  'hi': { visual: '「ヒ」は横向きのBの右半分のような形。', auditory: '「ヒーター」の最初の音「ヒ」。', kinesthetic: '縦線→右への横線2本の3画で書く。' },
  'fu': { visual: '「フ」はフックのような形。右上から下へ1画。', auditory: '「フランス」の最初の音「フ」。', kinesthetic: '右上から左下へカーブする1画を書く。' },
  'he': { visual: '「ヘ」は「へ」と同じ山形の1画。', auditory: '「ヘルメット」の最初の音「ヘ」。', kinesthetic: '左から右上へ、そして右下へ1画で書く。' },
  'ho': { visual: '「ホ」は漢字「木」に点2つを加えた5画。', auditory: '「ホテル」の最初の音「ホ」。', kinesthetic: '横線→縦線→左斜め→右斜め→点の順に書く。' },
  'ma': { visual: '「マ」は右上から左下へ流れる2画。', auditory: '「マスク」の最初の音「マ」。', kinesthetic: '横線→右からカーブして下へ延ばす2画。' },
  'mi': { visual: '「ミ」は横線3本が平行に並んだ3画。', auditory: '「ミルク」の最初の音「ミ」。', kinesthetic: '3本の横線を上から下へ順に書く。' },
  'mu': { visual: '「ム」は4（数字）に似た2画の文字。', auditory: '「ムービー」の最初の音「ム」。', kinesthetic: '左斜め線から右下への線を引く2画。' },
  'me': { visual: '「メ」は×（バツ）の形に似た2画。', auditory: '「メモ」の最初の音「メ」。', kinesthetic: '斜め線→もう1本の斜め線を交差させる2画。' },
  'mo': { visual: '「モ」は横線3本と縦線の4画。「モ」の字。', auditory: '「モデル」の最初の音「モ」。', kinesthetic: '横線3本を書いてから、真ん中を縦線で貫く。' },
  'ya': { visual: '「ヤ」は縦線と斜め線の3画。', auditory: '「ヤシ」の最初の音「ヤ」。', kinesthetic: '縦線→左斜め→右斜めの3画で書く。' },
  'yu': { visual: '「ユ」は凵（うけばこ）のような3画。', auditory: '「ユニフォーム」の最初の音「ユ」。', kinesthetic: '縦線→横線→縦線の3画で書く。' },
  'yo': { visual: '「ヨ」は漢字「コ」に横線を加えた3画。', auditory: '「ヨーグルト」の最初の音「ヨ」。', kinesthetic: '縦線→横線3本を順に書く。' },
  'ra': { visual: '「ラ」は左からカーブして斜め線の2画。', auditory: '「ラジオ」の最初の音「ラ」。', kinesthetic: '横線（右下カーブ）→斜め線の2画で書く。' },
  'ri': { visual: '「リ」は縦線2本の2画。「II」の形。', auditory: '「リボン」の最初の音「リ」。', kinesthetic: '縦線を2本、左右に書く。' },
  'ru': { visual: '「ル」は「レ」に似た形。縦線と右への突起。', auditory: '「ルール」の最初の音「ル」。', kinesthetic: '縦線→右への突起の2画で書く。' },
  're': { visual: '「レ」は左上から右下へのカーブ1画。', auditory: '「レストラン」の最初の音「レ」。', kinesthetic: '左上から右下へ流れるように1画で書く。' },
  'ro': { visual: '「ロ」は漢字「口」と同じ形。四角形の4画。', auditory: '「ロボット」の最初の音「ロ」。', kinesthetic: '四角形を上から順に4画で書く。' },
  'wa': { visual: '「ワ」は「ウ」から横線を変えた2画。', auditory: '「ワイン」の最初の音「ワ」。', kinesthetic: '右斜め線→縦線の2画で書く。' },
  'wo': { visual: '「ヲ」は助詞として使われる特別な文字。', auditory: '「〜を」という助詞として使う文字。', kinesthetic: '横線→左カーブ→縦線の3画で書く。' },
  'n':  { visual: '「ン」は斜め線と縦線の2画。「ソ」「ン」の違いに注意。', auditory: '「パン」などの語末の「ン」。', kinesthetic: '左斜め線→右縦線の2画で書く。' },
};

// =============================================
// NEW CARDS: 濁音・半濁音
// =============================================
const DAKUON_HANDAKUON = [
  // が行
  { char: 'が', kata: 'ガ', romaji: 'ga',  group_h: 'が行', group_k: 'ガ行',
    vak_h: { visual: '「が」は「か」に濁点（゛）を加えた字。', auditory: '「がっこう（学校）」の最初の音「が」。', kinesthetic: '「か」を書いてから右上に小さな点を2つ付ける。' },
    vak_k: { visual: '「ガ」は「カ」に濁点を加えた字。', auditory: '「ガーデン」の最初の音「ガ」。', kinesthetic: '「カ」を書いてから右上に濁点を付ける。' } },
  { char: 'ぎ', kata: 'ギ', romaji: 'gi',  group_h: 'が行', group_k: 'ガ行',
    vak_h: { visual: '「ぎ」は「き」に濁点を加えた字。', auditory: '「ぎんこう（銀行）」の最初の音「ぎ」。', kinesthetic: '「き」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ギ」は「キ」に濁点を加えた字。', auditory: '「ギター」の最初の音「ギ」。', kinesthetic: '「キ」を書いてから右上に濁点を付ける。' } },
  { char: 'ぐ', kata: 'グ', romaji: 'gu',  group_h: 'が行', group_k: 'ガ行',
    vak_h: { visual: '「ぐ」は「く」に濁点を加えた字。', auditory: '「ぐあい（具合）」の最初の音「ぐ」。', kinesthetic: '「く」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「グ」は「ク」に濁点を加えた字。', auditory: '「グループ」の最初の音「グ」。', kinesthetic: '「ク」を書いてから右上に濁点を付ける。' } },
  { char: 'げ', kata: 'ゲ', romaji: 'ge',  group_h: 'が行', group_k: 'ガ行',
    vak_h: { visual: '「げ」は「け」に濁点を加えた字。', auditory: '「げんき（元気）」の最初の音「げ」。', kinesthetic: '「け」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ゲ」は「ケ」に濁点を加えた字。', auditory: '「ゲーム」の最初の音「ゲ」。', kinesthetic: '「ケ」を書いてから右上に濁点を付ける。' } },
  { char: 'ご', kata: 'ゴ', romaji: 'go',  group_h: 'が行', group_k: 'ガ行',
    vak_h: { visual: '「ご」は「こ」に濁点を加えた字。', auditory: '「ごはん（ご飯）」の最初の音「ご」。', kinesthetic: '「こ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ゴ」は「コ」に濁点を加えた字。', auditory: '「ゴール」の最初の音「ゴ」。', kinesthetic: '「コ」を書いてから右上に濁点を付ける。' } },
  // ざ行
  { char: 'ざ', kata: 'ザ', romaji: 'za',  group_h: 'ざ行', group_k: 'ザ行',
    vak_h: { visual: '「ざ」は「さ」に濁点を加えた字。', auditory: '「ざっし（雑誌）」の最初の音「ざ」。', kinesthetic: '「さ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ザ」は「サ」に濁点を加えた字。', auditory: '「ザーサイ」の最初の音「ザ」。', kinesthetic: '「サ」を書いてから右上に濁点を付ける。' } },
  { char: 'じ', kata: 'ジ', romaji: 'ji',  group_h: 'ざ行', group_k: 'ザ行',
    vak_h: { visual: '「じ」は「し」に濁点を加えた字。', auditory: '「じかん（時間）」の最初の音「じ」。', kinesthetic: '「し」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ジ」は「シ」に濁点を加えた字。', auditory: '「ジュース」の最初の音「ジ」。', kinesthetic: '「シ」を書いてから右上に濁点を付ける。' } },
  { char: 'ず', kata: 'ズ', romaji: 'zu',  group_h: 'ざ行', group_k: 'ザ行',
    vak_h: { visual: '「ず」は「す」に濁点を加えた字。', auditory: '「ずつう（頭痛）」の最初の音「ず」。', kinesthetic: '「す」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ズ」は「ス」に濁点を加えた字。', auditory: '「ズボン」の最初の音「ズ」。', kinesthetic: '「ス」を書いてから右上に濁点を付ける。' } },
  { char: 'ぜ', kata: 'ゼ', romaji: 'ze',  group_h: 'ざ行', group_k: 'ザ行',
    vak_h: { visual: '「ぜ」は「せ」に濁点を加えた字。', auditory: '「ぜんぶ（全部）」の最初の音「ぜ」。', kinesthetic: '「せ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ゼ」は「セ」に濁点を加えた字。', auditory: '「ゼロ」の最初の音「ゼ」。', kinesthetic: '「セ」を書いてから右上に濁点を付ける。' } },
  { char: 'ぞ', kata: 'ゾ', romaji: 'zo',  group_h: 'ざ行', group_k: 'ザ行',
    vak_h: { visual: '「ぞ」は「そ」に濁点を加えた字。', auditory: '「ぞう（象）」の最初の音「ぞ」。', kinesthetic: '「そ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ゾ」は「ゾ」に濁点を加えた字。', auditory: '「ゾーン」の最初の音「ゾ」。', kinesthetic: '「ソ」を書いてから右上に濁点を付ける。' } },
  // だ行
  { char: 'だ', kata: 'ダ', romaji: 'da',  group_h: 'だ行', group_k: 'ダ行',
    vak_h: { visual: '「だ」は「た」に濁点を加えた字。', auditory: '「だいがく（大学）」の最初の音「だ」。', kinesthetic: '「た」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ダ」は「タ」に濁点を加えた字。', auditory: '「ダイヤモンド」の最初の音「ダ」。', kinesthetic: '「タ」を書いてから右上に濁点を付ける。' } },
  { char: 'ぢ', kata: 'ヂ', romaji: 'di',  group_h: 'だ行', group_k: 'ダ行',
    vak_h: { visual: '「ぢ」は「ち」に濁点を加えた字。現代では稀に使われる。', auditory: '「はなぢ（鼻血）」の「ぢ」。「じ」と同じ発音。', kinesthetic: '「ち」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ヂ」は「チ」に濁点を加えた字。', auditory: '「ヂ」は「ジ」と同じ発音で、現代では稀に使われる。', kinesthetic: '「チ」を書いてから右上に濁点を付ける。' } },
  { char: 'づ', kata: 'ヅ', romaji: 'du',  group_h: 'だ行', group_k: 'ダ行',
    vak_h: { visual: '「づ」は「つ」に濁点を加えた字。現代では稀に使われる。', auditory: '「こづつみ（小包）」の「づ」。「ず」と同じ発音。', kinesthetic: '「つ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ヅ」は「ツ」に濁点を加えた字。', auditory: '「ヅ」は「ズ」と同じ発音で、現代では稀に使われる。', kinesthetic: '「ツ」を書いてから右上に濁点を付ける。' } },
  { char: 'で', kata: 'デ', romaji: 'de',  group_h: 'だ行', group_k: 'ダ行',
    vak_h: { visual: '「で」は「て」に濁点を加えた字。', auditory: '「でんしゃ（電車）」の最初の音「で」。', kinesthetic: '「て」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「デ」は「テ」に濁点を加えた字。', auditory: '「デパート」の最初の音「デ」。', kinesthetic: '「テ」を書いてから右上に濁点を付ける。' } },
  { char: 'ど', kata: 'ド', romaji: 'do',  group_h: 'だ行', group_k: 'ダ行',
    vak_h: { visual: '「ど」は「と」に濁点を加えた字。', auditory: '「どうぶつ（動物）」の最初の音「ど」。', kinesthetic: '「と」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ド」は「ト」に濁点を加えた字。', auditory: '「ドア」の最初の音「ド」。', kinesthetic: '「ト」を書いてから右上に濁点を付ける。' } },
  // ば行
  { char: 'ば', kata: 'バ', romaji: 'ba',  group_h: 'ば行', group_k: 'バ行',
    vak_h: { visual: '「ば」は「は」に濁点を加えた字。', auditory: '「ばんごはん（晩ご飯）」の最初の音「ば」。', kinesthetic: '「は」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「バ」は「ハ」に濁点を加えた字。', auditory: '「バス」の最初の音「バ」。', kinesthetic: '「ハ」を書いてから右上に濁点を付ける。' } },
  { char: 'び', kata: 'ビ', romaji: 'bi',  group_h: 'ば行', group_k: 'バ行',
    vak_h: { visual: '「び」は「ひ」に濁点を加えた字。', auditory: '「びょういん（病院）」の最初の音「び」。', kinesthetic: '「ひ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ビ」は「ヒ」に濁点を加えた字。', auditory: '「ビル」の最初の音「ビ」。', kinesthetic: '「ヒ」を書いてから右上に濁点を付ける。' } },
  { char: 'ぶ', kata: 'ブ', romaji: 'bu',  group_h: 'ば行', group_k: 'バ行',
    vak_h: { visual: '「ぶ」は「ふ」に濁点を加えた字。', auditory: '「ぶんか（文化）」の最初の音「ぶ」。', kinesthetic: '「ふ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ブ」は「フ」に濁点を加えた字。', auditory: '「ブラジル」の最初の音「ブ」。', kinesthetic: '「フ」を書いてから右上に濁点を付ける。' } },
  { char: 'べ', kata: 'ベ', romaji: 'be',  group_h: 'ば行', group_k: 'バ行',
    vak_h: { visual: '「べ」は「へ」に濁点を加えた字。', auditory: '「べんきょう（勉強）」の最初の音「べ」。', kinesthetic: '「へ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ベ」は「ヘ」に濁点を加えた字。', auditory: '「ベッド」の最初の音「ベ」。', kinesthetic: '「ヘ」を書いてから右上に濁点を付ける。' } },
  { char: 'ぼ', kata: 'ボ', romaji: 'bo',  group_h: 'ば行', group_k: 'バ行',
    vak_h: { visual: '「ぼ」は「ほ」に濁点を加えた字。', auditory: '「ぼうし（帽子）」の最初の音「ぼ」。', kinesthetic: '「ほ」を書いてから右上に濁点を付ける。' },
    vak_k: { visual: '「ボ」は「ホ」に濁点を加えた字。', auditory: '「ボール」の最初の音「ボ」。', kinesthetic: '「ホ」を書いてから右上に濁点を付ける。' } },
  // ぱ行（半濁音）
  { char: 'ぱ', kata: 'パ', romaji: 'pa',  group_h: 'ぱ行', group_k: 'パ行',
    vak_h: { visual: '「ぱ」は「は」に半濁点（゜）を加えた字。', auditory: '「ぱーてぃ（パーティ）」の最初の音「ぱ」。', kinesthetic: '「は」を書いてから右上に小さな丸を付ける。' },
    vak_k: { visual: '「パ」は「ハ」に半濁点を加えた字。', auditory: '「パーティ」の最初の音「パ」。', kinesthetic: '「ハ」を書いてから右上に小さな丸を付ける。' } },
  { char: 'ぴ', kata: 'ピ', romaji: 'pi',  group_h: 'ぱ行', group_k: 'パ行',
    vak_h: { visual: '「ぴ」は「ひ」に半濁点を加えた字。', auditory: '「ぴあの（ピアノ）」の最初の音「ぴ」。', kinesthetic: '「ひ」を書いてから右上に小さな丸を付ける。' },
    vak_k: { visual: '「ピ」は「ヒ」に半濁点を加えた字。', auditory: '「ピザ」の最初の音「ピ」。', kinesthetic: '「ヒ」を書いてから右上に小さな丸を付ける。' } },
  { char: 'ぷ', kata: 'プ', romaji: 'pu',  group_h: 'ぱ行', group_k: 'パ行',
    vak_h: { visual: '「ぷ」は「ふ」に半濁点を加えた字。', auditory: '「ぷーる（プール）」の最初の音「ぷ」。', kinesthetic: '「ふ」を書いてから右上に小さな丸を付ける。' },
    vak_k: { visual: '「プ」は「フ」に半濁点を加えた字。', auditory: '「プール」の最初の音「プ」。', kinesthetic: '「フ」を書いてから右上に小さな丸を付ける。' } },
  { char: 'ぺ', kata: 'ペ', romaji: 'pe',  group_h: 'ぱ行', group_k: 'パ行',
    vak_h: { visual: '「ぺ」は「へ」に半濁点を加えた字。', auditory: '「ぺん（ペン）」の最初の音「ぺ」。', kinesthetic: '「へ」を書いてから右上に小さな丸を付ける。' },
    vak_k: { visual: '「ペ」は「ヘ」に半濁点を加えた字。', auditory: '「ペン」の最初の音「ペ」。', kinesthetic: '「ヘ」を書いてから右上に小さな丸を付ける。' } },
  { char: 'ぽ', kata: 'ポ', romaji: 'po',  group_h: 'ぱ行', group_k: 'パ行',
    vak_h: { visual: '「ぽ」は「ほ」に半濁点を加えた字。', auditory: '「ぽすと（ポスト）」の最初の音「ぽ」。', kinesthetic: '「ほ」を書いてから右上に小さな丸を付ける。' },
    vak_k: { visual: '「ポ」は「ホ」に半濁点を加えた字。', auditory: '「ポスト」の最初の音「ポ」。', kinesthetic: '「ホ」を書いてから右上に小さな丸を付ける。' } },
];

// =============================================
// NEW CARDS: 拗音
// =============================================
const YOUON_HIRAGANA = [
  // きゃ行
  { char: 'きゃ', romaji: 'kya', group: '拗音', vak: { visual: '「き」＋小さい「ゃ」の組み合わせ。', auditory: '「きゃく（客）」の最初の音「きゃ」。', kinesthetic: '「き」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'きゅ', romaji: 'kyu', group: '拗音', vak: { visual: '「き」＋小さい「ゅ」の組み合わせ。', auditory: '「きゅうり（きゅうり）」の最初の音「きゅ」。', kinesthetic: '「き」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'きょ', romaji: 'kyo', group: '拗音', vak: { visual: '「き」＋小さい「ょ」の組み合わせ。', auditory: '「きょうしつ（教室）」の最初の音「きょ」。', kinesthetic: '「き」を書いてから小さな「ょ」を右に書く。' } },
  // ぎゃ行
  { char: 'ぎゃ', romaji: 'gya', group: '拗音', vak: { visual: '「ぎ」＋小さい「ゃ」の組み合わせ。', auditory: '「ぎゃく（逆）」の最初の音「ぎゃ」。', kinesthetic: '「ぎ」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'ぎゅ', romaji: 'gyu', group: '拗音', vak: { visual: '「ぎ」＋小さい「ゅ」の組み合わせ。', auditory: '「ぎゅうにゅう（牛乳）」の最初の音「ぎゅ」。', kinesthetic: '「ぎ」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'ぎょ', romaji: 'gyo', group: '拗音', vak: { visual: '「ぎ」＋小さい「ょ」の組み合わせ。', auditory: '「ぎょうざ（餃子）」の最初の音「ぎょ」。', kinesthetic: '「ぎ」を書いてから小さな「ょ」を右に書く。' } },
  // しゃ行
  { char: 'しゃ', romaji: 'sha', group: '拗音', vak: { visual: '「し」＋小さい「ゃ」の組み合わせ。', auditory: '「しゃしん（写真）」の最初の音「しゃ」。', kinesthetic: '「し」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'しゅ', romaji: 'shu', group: '拗音', vak: { visual: '「し」＋小さい「ゅ」の組み合わせ。', auditory: '「しゅくだい（宿題）」の最初の音「しゅ」。', kinesthetic: '「し」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'しょ', romaji: 'sho', group: '拗音', vak: { visual: '「し」＋小さい「ょ」の組み合わせ。', auditory: '「しょくじ（食事）」の最初の音「しょ」。', kinesthetic: '「し」を書いてから小さな「ょ」を右に書く。' } },
  // じゃ行
  { char: 'じゃ', romaji: 'ja', group: '拗音', vak: { visual: '「じ」＋小さい「ゃ」の組み合わせ。', auditory: '「じゃあ」「じゃがいも」の最初の音「じゃ」。', kinesthetic: '「じ」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'じゅ', romaji: 'ju', group: '拗音', vak: { visual: '「じ」＋小さい「ゅ」の組み合わせ。', auditory: '「じゅぎょう（授業）」の最初の音「じゅ」。', kinesthetic: '「じ」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'じょ', romaji: 'jo', group: '拗音', vak: { visual: '「じ」＋小さい「ょ」の組み合わせ。', auditory: '「じょうず（上手）」の最初の音「じょ」。', kinesthetic: '「じ」を書いてから小さな「ょ」を右に書く。' } },
  // ちゃ行
  { char: 'ちゃ', romaji: 'cha', group: '拗音', vak: { visual: '「ち」＋小さい「ゃ」の組み合わせ。', auditory: '「ちゃわん（茶碗）」の最初の音「ちゃ」。', kinesthetic: '「ち」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'ちゅ', romaji: 'chu', group: '拗音', vak: { visual: '「ち」＋小さい「ゅ」の組み合わせ。', auditory: '「ちゅうもん（注文）」の最初の音「ちゅ」。', kinesthetic: '「ち」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'ちょ', romaji: 'cho', group: '拗音', vak: { visual: '「ち」＋小さい「ょ」の組み合わせ。', auditory: '「ちょっと」の最初の音「ちょ」。', kinesthetic: '「ち」を書いてから小さな「ょ」を右に書く。' } },
  // にゃ行
  { char: 'にゃ', romaji: 'nya', group: '拗音', vak: { visual: '「に」＋小さい「ゃ」の組み合わせ。', auditory: '猫の鳴き声「にゃー」の「にゃ」。', kinesthetic: '「に」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'にゅ', romaji: 'nyu', group: '拗音', vak: { visual: '「に」＋小さい「ゅ」の組み合わせ。', auditory: '「にゅういん（入院）」の最初の音「にゅ」。', kinesthetic: '「に」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'にょ', romaji: 'nyo', group: '拗音', vak: { visual: '「に」＋小さい「ょ」の組み合わせ。', auditory: '「にょきにょき」の最初の音「にょ」。', kinesthetic: '「に」を書いてから小さな「ょ」を右に書く。' } },
  // ひゃ行
  { char: 'ひゃ', romaji: 'hya', group: '拗音', vak: { visual: '「ひ」＋小さい「ゃ」の組み合わせ。', auditory: '「ひゃく（百）」の最初の音「ひゃ」。', kinesthetic: '「ひ」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'ひゅ', romaji: 'hyu', group: '拗音', vak: { visual: '「ひ」＋小さい「ゅ」の組み合わせ。', auditory: '風が「ひゅーっ」と吹く音「ひゅ」。', kinesthetic: '「ひ」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'ひょ', romaji: 'hyo', group: '拗音', vak: { visual: '「ひ」＋小さい「ょ」の組み合わせ。', auditory: '「ひょう（氷・雹）」の最初の音「ひょ」。', kinesthetic: '「ひ」を書いてから小さな「ょ」を右に書く。' } },
  // びゃ行
  { char: 'びゃ', romaji: 'bya', group: '拗音', vak: { visual: '「び」＋小さい「ゃ」の組み合わせ。', auditory: '「びゃく（百）の浊音形「びゃ」。', kinesthetic: '「び」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'びゅ', romaji: 'byu', group: '拗音', vak: { visual: '「び」＋小さい「ゅ」の組み合わせ。', auditory: '「びゅーびゅー」と風が吹く「びゅ」。', kinesthetic: '「び」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'びょ', romaji: 'byo', group: '拗音', vak: { visual: '「び」＋小さい「ょ」の組み合わせ。', auditory: '「びょういん（病院）」の最初の音「びょ」。', kinesthetic: '「び」を書いてから小さな「ょ」を右に書く。' } },
  // ぴゃ行
  { char: 'ぴゃ', romaji: 'pya', group: '拗音', vak: { visual: '「ぴ」＋小さい「ゃ」の組み合わせ。', auditory: '「ぴゃっと」跳ねる「ぴゃ」。', kinesthetic: '「ぴ」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'ぴゅ', romaji: 'pyu', group: '拗音', vak: { visual: '「ぴ」＋小さい「ゅ」の組み合わせ。', auditory: '「ぴゅーっ」と風が飛ぶ「ぴゅ」。', kinesthetic: '「ぴ」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'ぴょ', romaji: 'pyo', group: '拗音', vak: { visual: '「ぴ」＋小さい「ょ」の組み合わせ。', auditory: '「ぴょんぴょん」跳ねる「ぴょ」。', kinesthetic: '「ぴ」を書いてから小さな「ょ」を右に書く。' } },
  // みゃ行
  { char: 'みゃ', romaji: 'mya', group: '拗音', vak: { visual: '「み」＋小さい「ゃ」の組み合わせ。', auditory: '「みゃく（脈）」の最初の音「みゃ」。', kinesthetic: '「み」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'みゅ', romaji: 'myu', group: '拗音', vak: { visual: '「み」＋小さい「ゅ」の組み合わせ。', auditory: '「みゅーじかる（ミュージカル）」の最初の音「みゅ」。', kinesthetic: '「み」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'みょ', romaji: 'myo', group: '拗音', vak: { visual: '「み」＋小さい「ょ」の組み合わせ。', auditory: '「みょうじ（苗字）」の最初の音「みょ」。', kinesthetic: '「み」を書いてから小さな「ょ」を右に書く。' } },
  // りゃ行
  { char: 'りゃ', romaji: 'rya', group: '拗音', vak: { visual: '「り」＋小さい「ゃ」の組み合わせ。', auditory: '「りゃく（略）」の最初の音「りゃ」。', kinesthetic: '「り」を書いてから小さな「ゃ」を右に書く。' } },
  { char: 'りゅ', romaji: 'ryu', group: '拗音', vak: { visual: '「り」＋小さい「ゅ」の組み合わせ。', auditory: '「りゅうがく（留学）」の最初の音「りゅ」。', kinesthetic: '「り」を書いてから小さな「ゅ」を右に書く。' } },
  { char: 'りょ', romaji: 'ryo', group: '拗音', vak: { visual: '「り」＋小さい「ょ」の組み合わせ。', auditory: '「りょこう（旅行）」の最初の音「りょ」。', kinesthetic: '「り」を書いてから小さな「ょ」を右に書く。' } },
];

// カタカナ拗音も同様に定義
const YOUON_KATAKANA = [
  { char: 'キャ', romaji: 'kya', group: '拗音', vak: { visual: '「キ」＋小さい「ャ」の組み合わせ。', auditory: '「キャンパス」の最初の音「キャ」。', kinesthetic: '「キ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'キュ', romaji: 'kyu', group: '拗音', vak: { visual: '「キ」＋小さい「ュ」の組み合わせ。', auditory: '「キューバ」の最初の音「キュ」。', kinesthetic: '「キ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'キョ', romaji: 'kyo', group: '拗音', vak: { visual: '「キ」＋小さい「ョ」の組み合わせ。', auditory: '「キョート（京都）」の最初の音「キョ」。', kinesthetic: '「キ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'ギャ', romaji: 'gya', group: '拗音', vak: { visual: '「ギ」＋小さい「ャ」の組み合わせ。', auditory: '「ギャップ」の最初の音「ギャ」。', kinesthetic: '「ギ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'ギュ', romaji: 'gyu', group: '拗音', vak: { visual: '「ギ」＋小さい「ュ」の組み合わせ。', auditory: '「ギュッと」の最初の音「ギュ」。', kinesthetic: '「ギ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'ギョ', romaji: 'gyo', group: '拗音', vak: { visual: '「ギ」＋小さい「ョ」の組み合わせ。', auditory: '「ギョーザ」の最初の音「ギョ」。', kinesthetic: '「ギ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'シャ', romaji: 'sha', group: '拗音', vak: { visual: '「シ」＋小さい「ャ」の組み合わせ。', auditory: '「シャツ」の最初の音「シャ」。', kinesthetic: '「シ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'シュ', romaji: 'shu', group: '拗音', vak: { visual: '「シ」＋小さい「ュ」の組み合わせ。', auditory: '「シュークリーム」の最初の音「シュ」。', kinesthetic: '「シ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'ショ', romaji: 'sho', group: '拗音', vak: { visual: '「シ」＋小さい「ョ」の組み合わせ。', auditory: '「ショッピング」の最初の音「ショ」。', kinesthetic: '「シ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'ジャ', romaji: 'ja', group: '拗音', vak: { visual: '「ジ」＋小さい「ャ」の組み合わせ。', auditory: '「ジャズ」の最初の音「ジャ」。', kinesthetic: '「ジ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'ジュ', romaji: 'ju', group: '拗音', vak: { visual: '「ジ」＋小さい「ュ」の組み合わせ。', auditory: '「ジュース」の最初の音「ジュ」。', kinesthetic: '「ジ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'ジョ', romaji: 'jo', group: '拗音', vak: { visual: '「ジ」＋小さい「ョ」の組み合わせ。', auditory: '「ジョギング」の最初の音「ジョ」。', kinesthetic: '「ジ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'チャ', romaji: 'cha', group: '拗音', vak: { visual: '「チ」＋小さい「ャ」の組み合わせ。', auditory: '「チャンス」の最初の音「チャ」。', kinesthetic: '「チ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'チュ', romaji: 'chu', group: '拗音', vak: { visual: '「チ」＋小さい「ュ」の組み合わせ。', auditory: '「チューリップ」の最初の音「チュ」。', kinesthetic: '「チ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'チョ', romaji: 'cho', group: '拗音', vak: { visual: '「チ」＋小さい「ョ」の組み合わせ。', auditory: '「チョコレート」の最初の音「チョ」。', kinesthetic: '「チ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'ニャ', romaji: 'nya', group: '拗音', vak: { visual: '「ニ」＋小さい「ャ」の組み合わせ。', auditory: '猫の鳴き声「ニャー」の「ニャ」。', kinesthetic: '「ニ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'ニュ', romaji: 'nyu', group: '拗音', vak: { visual: '「ニ」＋小さい「ュ」の組み合わせ。', auditory: '「ニュース」の最初の音「ニュ」。', kinesthetic: '「ニ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'ニョ', romaji: 'nyo', group: '拗音', vak: { visual: '「ニ」＋小さい「ョ」の組み合わせ。', auditory: '「ニョキニョキ」の最初の音「ニョ」。', kinesthetic: '「ニ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'ヒャ', romaji: 'hya', group: '拗音', vak: { visual: '「ヒ」＋小さい「ャ」の組み合わせ。', auditory: '「ヒャク（百）」の最初の音「ヒャ」。', kinesthetic: '「ヒ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'ヒュ', romaji: 'hyu', group: '拗音', vak: { visual: '「ヒ」＋小さい「ュ」の組み合わせ。', auditory: '「ヒューマン」の最初の音「ヒュ」。', kinesthetic: '「ヒ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'ヒョ', romaji: 'hyo', group: '拗音', vak: { visual: '「ヒ」＋小さい「ョ」の組み合わせ。', auditory: '「ヒョウ（豹）」の最初の音「ヒョ」。', kinesthetic: '「ヒ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'ビャ', romaji: 'bya', group: '拗音', vak: { visual: '「ビ」＋小さい「ャ」の組み合わせ。', auditory: '「ビャク（白の濁音形）」の「ビャ」。', kinesthetic: '「ビ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'ビュ', romaji: 'byu', group: '拗音', vak: { visual: '「ビ」＋小さい「ュ」の組み合わせ。', auditory: '「ビュッフェ」の最初の音「ビュ」。', kinesthetic: '「ビ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'ビョ', romaji: 'byo', group: '拗音', vak: { visual: '「ビ」＋小さい「ョ」の組み合わせ。', auditory: '「ビョウ（病）」の最初の音「ビョ」。', kinesthetic: '「ビ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'ピャ', romaji: 'pya', group: '拗音', vak: { visual: '「ピ」＋小さい「ャ」の組み合わせ。', auditory: '「ピャッと」跳ねる「ピャ」。', kinesthetic: '「ピ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'ピュ', romaji: 'pyu', group: '拗音', vak: { visual: '「ピ」＋小さい「ュ」の組み合わせ。', auditory: '「ピュアー」の最初の音「ピュ」。', kinesthetic: '「ピ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'ピョ', romaji: 'pyo', group: '拗音', vak: { visual: '「ピ」＋小さい「ョ」の組み合わせ。', auditory: '「ピョンピョン」跳ねる「ピョ」。', kinesthetic: '「ピ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'ミャ', romaji: 'mya', group: '拗音', vak: { visual: '「ミ」＋小さい「ャ」の組み合わせ。', auditory: '「ミャンマー」の最初の音「ミャ」。', kinesthetic: '「ミ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'ミュ', romaji: 'myu', group: '拗音', vak: { visual: '「ミ」＋小さい「ュ」の組み合わせ。', auditory: '「ミュージック」の最初の音「ミュ」。', kinesthetic: '「ミ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'ミョ', romaji: 'myo', group: '拗音', vak: { visual: '「ミ」＋小さい「ョ」の組み合わせ。', auditory: '「ミョウガ（茗荷）」の最初の音「ミョ」。', kinesthetic: '「ミ」を書いてから小さな「ョ」を右に書く。' } },
  { char: 'リャ', romaji: 'rya', group: '拗音', vak: { visual: '「リ」＋小さい「ャ」の組み合わせ。', auditory: '「リャク（略）」の最初の音「リャ」。', kinesthetic: '「リ」を書いてから小さな「ャ」を右に書く。' } },
  { char: 'リュ', romaji: 'ryu', group: '拗音', vak: { visual: '「リ」＋小さい「ュ」の組み合わせ。', auditory: '「リュック」の最初の音「リュ」。', kinesthetic: '「リ」を書いてから小さな「ュ」を右に書く。' } },
  { char: 'リョ', romaji: 'ryo', group: '拗音', vak: { visual: '「リ」＋小さい「ョ」の組み合わせ。', auditory: '「リョコウ（旅行）」の最初の音「リョ」。', kinesthetic: '「リ」を書いてから小さな「ョ」を右に書く。' } },
];

// Audio download function
function downloadAudioBuffer(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://a1.marugotoweb.jp/en/hiragana.php',
        'Accept': '*/*'
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function uploadAudio(romaji) {
  const audioFile = romaji + '.mp3';
  const url = `${BASE_URL}/${audioFile}`;
  
  // Check if already uploaded
  const { data: existing } = await supabase.storage.from(BUCKET).list('', { search: audioFile });
  if (existing && existing.some(f => f.name === audioFile)) {
    const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(audioFile);
    console.log(`  [SKIP] ${romaji} already in storage`);
    return pub.publicUrl;
  }
  
  try {
    const buffer = await downloadAudioBuffer(url);
    const { error } = await supabase.storage.from(BUCKET).upload(audioFile, buffer, {
      contentType: 'audio/mpeg', upsert: true
    });
    if (error) throw error;
    const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(audioFile);
    console.log(`  [OK] Uploaded ${romaji}.mp3`);
    return pub.publicUrl;
  } catch (e) {
    console.error(`  [FAIL] ${romaji}: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Starting Kana Cards Update ===\n');
  
  // === Step 1: Update existing cards ===
  console.log('Step 1: Updating existing 清音 cards...');
  const { data: existingCards, error: fetchErr } = await supabase.from('kana_cards').select('*');
  if (fetchErr) throw fetchErr;
  
  for (const card of existingCards) {
    const vakData = card.type === 'hiragana' ? SEION_VAK[card.romaji] : KATAKANA_VAK[card.romaji];
    if (!vakData) {
      console.log(`  [SKIP] No VAK data for ${card.type} ${card.character} (${card.romaji})`);
      continue;
    }
    
    // Also ensure audio_url is correct
    let audioRomaji = card.romaji;
    if (audioRomaji === 'wo') audioRomaji = 'o';
    const audioUrl = `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${audioRomaji}.mp3`;
    
    const newVak = { ...vakData, audio_url: audioUrl };
    const { error: updateErr } = await supabase.from('kana_cards').update({ vak_help: newVak }).eq('id', card.id);
    if (updateErr) console.error(`  [FAIL] Update ${card.character}: ${updateErr.message}`);
    else process.stdout.write(`  [OK] ${card.character} `);
  }
  console.log('\n');
  
  // === Step 2: Download and upload new audio files ===
  console.log('Step 2: Uploading new audio files (濁音・半濁音・拗音)...');
  
  const allNewRomajis = new Set();
  DAKUON_HANDAKUON.forEach(c => allNewRomajis.add(c.romaji));
  YOUON_HIRAGANA.forEach(c => allNewRomajis.add(c.romaji));
  
  const audioUrlMap = {};
  for (const romaji of allNewRomajis) {
    const url = await uploadAudio(romaji);
    audioUrlMap[romaji] = url;
    await delay(300);
  }
  
  // === Step 3: Insert new cards ===
  console.log('\nStep 3: Inserting new kana cards...');
  
  const newCards = [];
  
  // Dakuon / Handakuon (hiragana + katakana)
  for (const item of DAKUON_HANDAKUON) {
    const audioUrl = audioUrlMap[item.romaji];
    newCards.push({
      type: 'hiragana',
      character: item.char,
      romaji: item.romaji,
      group_name: item.group_h,
      mnemonic_vi: '',
      vak_help: { ...item.vak_h, audio_url: audioUrl || '' }
    });
    newCards.push({
      type: 'katakana',
      character: item.kata,
      romaji: item.romaji,
      group_name: item.group_k,
      mnemonic_vi: '',
      vak_help: { ...item.vak_k, audio_url: audioUrl || '' }
    });
  }
  
  // Youon hiragana
  for (const item of YOUON_HIRAGANA) {
    const audioUrl = audioUrlMap[item.romaji];
    newCards.push({
      type: 'hiragana',
      character: item.char,
      romaji: item.romaji,
      group_name: item.group,
      mnemonic_vi: '',
      vak_help: { ...item.vak, audio_url: audioUrl || '' }
    });
  }
  
  // Youon katakana
  for (const item of YOUON_KATAKANA) {
    const audioUrl = audioUrlMap[item.romaji];
    newCards.push({
      type: 'katakana',
      character: item.char,
      romaji: item.romaji,
      group_name: item.group,
      mnemonic_vi: '',
      vak_help: { ...item.vak, audio_url: audioUrl || '' }
    });
  }
  
  // Insert in batches of 20
  const batchSize = 20;
  let inserted = 0;
  for (let i = 0; i < newCards.length; i += batchSize) {
    const batch = newCards.slice(i, i + batchSize);
    const { error: insertErr } = await supabase.from('kana_cards').insert(batch);
    if (insertErr) console.error(`  [FAIL] Insert batch: ${insertErr.message}`);
    else {
      inserted += batch.length;
      console.log(`  [OK] Inserted ${batch.length} cards (total ${inserted}/${newCards.length})`);
    }
    await delay(200);
  }
  
  // Final count
  const { data: finalCards } = await supabase.from('kana_cards').select('id');
  console.log(`\n=== Done! Total kana cards in DB: ${finalCards.length} ===`);
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
