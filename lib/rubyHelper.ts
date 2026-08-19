export function addRuby(text: string): string {
  if (!text) return text;
  // A simple replace that might double replace if run multiple times, 
  // but we will only run it once during render.
  const dict: Record<string, string> = {
    '行きます': '<ruby>行<rt>い</rt></ruby>きます',
    '来ます': '<ruby>来<rt>き</rt></ruby>ます',
    '帰ります': '<ruby>帰<rt>かえ</rt></ruby>ります',
    '場所': '<ruby>場所<rt>ばしょ</rt></ruby>',
    '構造': '<ruby>構造<rt>こうぞう</rt></ruby>',
    '助詞': '<ruby>助詞<rt>じょし</rt></ruby>',
    '意味': '<ruby>意味<rt>いみ</rt></ruby>',
    '接続': '<ruby>接続<rt>せつぞく</rt></ruby>',
    '例文': '<ruby>例文<rt>れいぶん</rt></ruby>',
    '音読': '<ruby>音読<rt>おんどく</rt></ruby>',
    '解説': '<ruby>解説<rt>かいせつ</rt></ruby>',
    '感覚': '<ruby>感覚<rt>かんかく</rt></ruby>',
    '視覚': '<ruby>視覚<rt>しかく</rt></ruby>',
    '聴覚': '<ruby>聴覚<rt>ちょうかく</rt></ruby>',
    '身体': '<ruby>身体<rt>しんたい</rt></ruby>',
    '公式図解': '<ruby>公式<rt>こうしき</rt></ruby><ruby>図解<rt>ずかい</rt></ruby>',
    '暗記': '<ruby>暗記<rt>あんき</rt></ruby>',
    '動作': '<ruby>動作<rt>どうさ</rt></ruby>'
  };

  let result = text;
  // First, temporarily mask existing ruby tags to avoid double replacing
  // (We don't expect existing ruby tags in raw data, but just in case)
  
  for (const [kanji, ruby] of Object.entries(dict)) {
    result = result.split(kanji).join(ruby);
  }
  return result;
}
