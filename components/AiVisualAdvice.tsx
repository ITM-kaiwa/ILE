import React, { useState, useEffect } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

interface AiVisualAdviceProps {
  adviceText: string;
  vakType: string;
  lang: string;
  isKanji?: boolean;
  kanjiChar?: string;
}

export const AiVisualAdvice: React.FC<AiVisualAdviceProps> = ({ adviceText, vakType, lang, isKanji, kanjiChar }) => {
  const isVi = lang === 'vi';
  const [translatedText, setTranslatedText] = useState(adviceText);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    let mounted = true;
    const translate = async () => {
      if (!isVi) {
        setTranslatedText(adviceText);
        return;
      }
      setIsTranslating(true);
      try {
        const res = await fetch('/api/gemini/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: adviceText, targetLang: 'vi' })
        });
        const data = await res.json();
        if (mounted && data.success) {
          setTranslatedText(data.translation);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setIsTranslating(false);
      }
    };
    translate();
    return () => { mounted = false; };
  }, [adviceText, isVi]);

  const generateVisual = async () => {
    setIsGeneratingImg(true);
    try {
      const type = isKanji ? 'pictogram' : 'diagram';
      const context = isKanji ? kanjiChar : adviceText;
      const res = await fetch('/api/gemini/generate-svg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: adviceText, type, context })
      });
      const data = await res.json();
      if (data.success) {
        setSvgContent(data.svg);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingImg(false);
    }
  };

  // Auto-generate visual if it's visual type
  useEffect(() => {
    if (vakType === 'visual' && !svgContent && !isGeneratingImg) {
       generateVisual();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vakType, adviceText]);

  return (
    <div className="mt-2 space-y-3">
      <div className="text-sm font-medium text-amber-900">
        {isTranslating ? (
          <span className="animate-pulse text-amber-600/70">{isVi ? 'Đang dịch AI...' : 'AI翻訳中...'}</span>
        ) : (
          <span>{translatedText}</span>
        )}
      </div>
      
      {vakType === 'visual' && (
        <div className="mt-3 bg-white/80 rounded-xl border border-amber-200 overflow-hidden">
          <div className="bg-amber-100/50 px-3 py-2 border-b border-amber-200 flex items-center justify-between">
            <span className="text-xs font-bold text-amber-800 flex items-center">
              <ImageIcon className="w-3.5 h-3.5 mr-1.5" />
              {isVi ? 'Hình ảnh AI tạo' : 'AI生成ビジュアル'}
            </span>
            <button 
              onClick={generateVisual} 
              className="text-[10px] text-amber-700 hover:text-amber-900 flex items-center bg-amber-200/50 px-2 py-1 rounded"
              disabled={isGeneratingImg}
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {isGeneratingImg ? (isVi ? 'Đang tạo...' : '生成中...') : (isVi ? 'Tạo lại' : '再生成')}
            </button>
          </div>
          <div className="p-4 flex items-center justify-center min-h-[120px]">
            {isGeneratingImg && !svgContent ? (
              <div className="flex flex-col items-center justify-center space-y-2 text-amber-600 animate-pulse">
                <ImageIcon className="w-8 h-8 opacity-50" />
                <span className="text-xs font-medium">{isVi ? 'AI đang vẽ hình ảnh...' : 'AIが図解を描画中...'}</span>
              </div>
            ) : svgContent ? (
              <div 
                className="w-full max-w-sm flex justify-center svg-container"
                dangerouslySetInnerHTML={{ __html: svgContent }} 
              />
            ) : (
              <div className="text-xs text-slate-400">{isVi ? 'Không có hình ảnh' : '画像がありません'}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
