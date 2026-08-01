'use client';
import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
});

export const Mermaid = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState<string>('');
  
  // Create a consistent ID without hydration mismatch
  const [id, setId] = useState<string>('');
  
  useEffect(() => {
    setId(`mermaid-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  useEffect(() => {
    if (!id) return;
    
    // Clear previous if any, render new
    mermaid.render(id, chart).then((result) => {
      setSvg(result.svg);
    }).catch(err => {
      console.error('Mermaid render error', err);
      setSvg(`<pre class="text-red-500 bg-red-50 p-2 text-xs overflow-auto">Error rendering diagram</pre>`);
    });
  }, [chart, id]);

  if (!svg) {
    return <div className="animate-pulse h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm">Loading diagram...</div>;
  }

  return <div className="mermaid flex justify-center my-4 p-2 bg-white rounded-lg shadow-sm" dangerouslySetInnerHTML={{ __html: svg }} />;
};
