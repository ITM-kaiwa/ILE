export type Language = 'ja' | 'vi';

export const TRANSLATIONS = {
  "ja": {
    "appName": "ILE VAK Coach",
    "subTitle": "ITM Language Empowerment",
    "quickDiagnostic": "⚡ 簡易診断 (5問)",
    "detailedDiagnostic": "✨ 詳細診断 (20問)",
    "heroTitle1": "あなたの認知特性 (VAK) に完全パーソナライズされた",
    "heroTitle2": "統合AI日本語学習プラットフォーム",
    "heroDesc": "ベトナム人日本語学習者の自己学習を支援。視覚・聴覚・身体感覚の認知タイプ判定と、エビングハウスの忘却曲線アルゴリズムで、最適な復習タイミングを全自動プロデュースします。",
    "tabLearn": "AI学習 & 問題演習",
    "tabKana": "ひらがな・カタカナ",
    "tabVocab": "「みんなの日本語」単語",
    "tabGrammar": "VNJPClub 文法",
    "tabKanji": "漢字 (Langoal)",
    "tabReview": "復習ダッシュボード",
    "vakVisual": "👁️ 視覚",
    "vakAuditory": "👂 聴覚",
    "vakKinesthetic": "✋ 身体感覚",
    "visualLabel": "👁️ 視覚優位 (Visual)",
    "auditoryLabel": "👂 聴覚優位 (Auditory)",
    "kinestheticLabel": "✋ 身体感覚優位 (Kinesthetic)",
    "calendarTitle": "Googleカレンダー AI自動学習計画連携",
    "srsTitle": "エビングハウス忘却曲線 自動復習通知 (SRS)",
    "ecoTitle": "ITM 統合連携エコシステム",
    "extResourcesTitle": "おすすめ外部日本語学習リソース",
    "openSite": "サイトを開く",
    "selectLang": "言語切替 / Ngôn ngữ"
  },
  "vi": {
    "appName": "HLV ILE VAK",
    "subTitle": "Nâng cao ngôn ngữ ITM",
    "quickDiagnostic": "⚡ Chẩn đoán nhanh (5 câu)",
    "detailedDiagnostic": "✨ Chẩn đoán chi tiết (20 câu)",
    "heroTitle1": "Nền tảng học tiếng Nhật AI tích hợp hoàn toàn cá nhân hóa",
    "heroTitle2": "theo phong cách nhận thức (VAK) của bạn",
    "heroDesc": "Hỗ trợ tự học cho người Việt Nam. Đánh giá nhận thức Thị giác - Thính giác - Vận động và tự động sắp xếp lịch ôn tập theo đường cong quên Ebbinghaus.",
    "tabLearn": "Học AI & Luyện tập",
    "tabKana": "Hiragana & Katakana",
    "tabVocab": "Từ vựng \"Minna no Nihongo\"",
    "tabGrammar": "Ngữ pháp VNJPClub",
    "tabKanji": "Chữ Hán Kanji (Langoal)",
    "tabReview": "Bảng điều khiển Ôn tập",
    "vakVisual": "👁️ Thị giác",
    "vakAuditory": "👂 Thính giác",
    "vakKinesthetic": "✋ Vận động",
    "visualLabel": "👁️ Ưu thế Thị giác (Visual)",
    "auditoryLabel": "👂 Ưu thế Thính giác (Auditory)",
    "kinestheticLabel": "✋ Ưu thế Vận động (Kinesthetic)",
    "calendarTitle": "Tích hợp Kế hoạch Học tập AI với Google Calendar",
    "srsTitle": "Thông báo Ôn tập Tự động Đường cong Quên (SRS)",
    "ecoTitle": "Hệ sinh thái Tích hợp ITM",
    "extResourcesTitle": "Tài nguyên Học tiếng Nhật Khuyên dùng",
    "openSite": "Mở trang web",
    "selectLang": "Ngôn ngữ / 言語切替"
  }
};

export function getTranslation(lang: Language) {
  return TRANSLATIONS[lang] || TRANSLATIONS['ja'];
}
