import os

path = 'components/WeaknessAnalyzer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add useEffect import
content = content.replace(
    "import React, { useState } from 'react';",
    "import React, { useState, useEffect, useRef } from 'react';"
)

# 2. Add auto-trigger state and useEffect AFTER the existing state declarations
old_states = """  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);"""

new_states = """  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [autoAnalyzed, setAutoAnalyzed] = useState(false);
  const [autoAnalysisToast, setAutoAnalysisToast] = useState(false);
  const AUTO_TRIGGER_THRESHOLD = 3; // auto-analyze after this many mistakes

  // Auto-trigger analysis when weakness records reach threshold
  useEffect(() => {
    if (
      weaknessRecords.length >= AUTO_TRIGGER_THRESHOLD &&
      !autoAnalyzed &&
      !isAnalyzing &&
      !aiAnalysis
    ) {
      setAutoAnalyzed(true);
      setAutoAnalysisToast(true);
      setTimeout(() => setAutoAnalysisToast(false), 5000);
      // Run in background without blocking UI
      handleAnalyze();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaknessRecords.length]);"""

content = content.replace(old_states, new_states)

# 3. Show the toast notification at the top of the returned JSX
old_jsx_start = """  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">"""

new_jsx_start = """  return (
    <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm space-y-6">
      {/* Auto-analysis toast notification */}
      {autoAnalysisToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-xl text-sm font-semibold animate-slide-in-right">
          <Sparkles className="w-4 h-4 animate-spin" />
          {isVi ? 'AI đang tự động phân tích điểm yếu của bạn...' : 'AIが自動で弱点を分析しています...'}
        </div>
      )}"""

content = content.replace(old_jsx_start, new_jsx_start)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated WeaknessAnalyzer with auto-trigger (3+ mistakes)")
