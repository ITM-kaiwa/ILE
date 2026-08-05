'use client';

import React, { useEffect, useState, useRef } from 'react';
import { RefreshCw } from 'lucide-react';

export const StrokeAnimation = ({ charCode }: { charCode: string }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isNotFound, setIsNotFound] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hex = charCode;
    // If it's a single character like "あ", convert to hex
    if (hex.length === 1) {
       hex = hex.charCodeAt(0).toString(16).toUpperCase();
    } else {
       hex = hex.toUpperCase();
    }
    
    fetch(`/images/kana-strokes/u${hex}.svg`)
      .then(async r => {
         if (!r.ok) {
             const fallback = await fetch(`/api/svg?char=${hex}`);
             if (!fallback.ok) throw new Error("SVG not found even on proxy");
             return fallback.text();
         }
         return r.text();
      })
      .then(text => {
         if (text.includes('<svg')) {
             const responsiveSvg = text
                 .replace(/width="[^"]+"/, 'width="100%"')
                 .replace(/height="[^"]+"/, 'height="100%"');
             setSvgContent(responsiveSvg);
         } else {
             console.error("Not SVG content");
         }
      })
      .catch(e => {
          console.error("Error loading SVG", e);
          setIsNotFound(true);
      });
  }, [charCode]);

  const playAnimation = () => {
    if (!containerRef.current) return;
    
    const svg = containerRef.current.querySelector('svg');
    if (!svg) return;
    
    const paths = Array.from(svg.querySelectorAll('#main-lines path')) as SVGPathElement[];
    const mainArrows = Array.from(svg.querySelectorAll('#main-arrows path')) as SVGPathElement[];
    const subArrows = Array.from(svg.querySelectorAll('#sub-arrows path')) as SVGPathElement[];
    const numbers = Array.from(svg.querySelectorAll('#numbers text')) as SVGTextElement[];

    paths.forEach(p => {
       const length = p.getAttribute('length') || '1000';
       p.style.strokeDasharray = length;
       p.style.strokeDashoffset = length;
       p.style.transition = 'none';
    });
    mainArrows.forEach(p => p.style.opacity = '0');
    subArrows.forEach(p => p.style.opacity = '0');
    numbers.forEach(p => p.style.opacity = '0');

    void svg.getBoundingClientRect();

    let delay = 0;
    paths.forEach((p, i) => {
       setTimeout(() => {
         p.style.transition = 'stroke-dashoffset 0.8s ease-in-out';
         p.style.strokeDashoffset = '0';
         
         if (numbers[i]) {
            numbers[i].style.transition = 'opacity 0.3s ease-in-out';
            numbers[i].style.opacity = '1';
         }
         if (mainArrows[i]) {
            mainArrows[i].style.transition = 'opacity 0.3s ease-in-out';
            mainArrows[i].style.opacity = '1';
         }
       }, delay);
       delay += 900;
    });
    
    setTimeout(() => {
       subArrows.forEach(p => {
           p.style.transition = 'opacity 0.3s ease-in-out';
           p.style.opacity = '1';
       });
    }, delay);
  };

  useEffect(() => {
    if (svgContent) {
       // slight delay before auto playing
       setTimeout(playAnimation, 200);
    }
  }, [svgContent]);

  if (isNotFound) return null;

  return (
    <div className="flex flex-col items-center animate-fade-in">
       <div 
          ref={containerRef}
          className="w-32 h-32 border border-slate-200 rounded-xl bg-white shadow-sm flex items-center justify-center relative overflow-hidden"
       >
          {svgContent ? (
             <div dangerouslySetInnerHTML={{ __html: svgContent }} className="w-full h-full p-2" />
          ) : (
             <div className="text-slate-300 text-xs text-center">Loading...</div>
          )}
       </div>
       {svgContent && (
         <button 
           onClick={playAnimation} 
           className="mt-2 text-[10px] text-indigo-600 font-bold hover:text-white bg-indigo-50 hover:bg-indigo-500 px-3 py-1.5 rounded-full border border-indigo-200 transition-colors flex items-center space-x-1 shadow-sm"
         >
           <RefreshCw className="w-3 h-3" />
           <span>アニメ再生</span>
         </button>
       )}
    </div>
  );
};
