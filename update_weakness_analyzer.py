import os
import re

filepath = 'components/WeaknessAnalyzer.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add AI analyze state and logic
new_imports = "import { AlertTriangle, Lightbulb, CheckCircle2 , ChevronDown, ChevronUp, Sparkles, Loader2 } from 'lucide-react';"
content = content.replace("import { AlertTriangle, Lightbulb, CheckCircle2 , ChevronDown, ChevronUp } from 'lucide-react';", new_imports)

component_start = "export const WeaknessAnalyzer: React.FC<WeaknessAnalyzerProps> = ({ vakType, weaknessRecords, lang = 'ja' }) => {"
new_component_start = """export const WeaknessAnalyzer: React.FC<WeaknessAnalyzerProps> = ({ vakType, weaknessRecords, lang = 'ja' }) => {
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (weaknessRecords.length === 0) return;
    setIsAnalyzing(true);
    setAiAnalysis(null);
    try {
      const res = await fetch('/api/gemini/analyze-weakness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weaknessRecords: weaknessRecords.slice(0, 20), vakType, lang }) // Analyze top 20
      });
      const data = await res.json();
      if (data.success && data.analysis) {
        setAiAnalysis(data.analysis);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsAnalyzing(false);
    }
  };
"""

content = content.replace(component_start, new_component_start)

# Add AI Analysis button and result display above the list
list_start = """      {weaknessRecords.length === 0 ? ("""
new_list_start = """      {weaknessRecords.length === 0 ? ("""

ai_section = """
      {weaknessRecords.length > 0 && (
        <div className="flex justify-center mb-4">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            {isAnalyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            <span>{isVi ? 'Phân tích điểm yếu bằng AI' : 'AIで弱点を分析する'}</span>
          </button>
        </div>
      )}

      {aiAnalysis && (
        <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-orange-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-600" />
            {isVi ? 'Kết quả phân tích AI' : 'AI分析結果'}
          </h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">{isVi ? 'Tóm tắt mẫu lỗi' : 'パターンの要約'}</h4>
              <p className="text-sm text-slate-700 bg-white p-3 rounded-xl border border-orange-100">{aiAnalysis.patternSummary}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">{isVi ? 'Lĩnh vực yếu' : '苦手なカテゴリ'}</h4>
                <ul className="space-y-2">
                  {aiAnalysis.weakCategories.map((c: any, i: number) => (
                    <li key={i} className="text-sm bg-white p-2 rounded-lg border border-orange-100 flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <div>
                        <span className="font-semibold text-slate-700">{c.name} ({c.count}件)</span>
                        <p className="text-xs text-slate-500 mt-0.5">{c.reason}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">{isVi ? 'Ưu tiên ôn tập' : '最優先トピック'}</h4>
                <ul className="space-y-2">
                  {aiAnalysis.priorityTopics.map((t: string, i: number) => (
                    <li key={i} className="text-sm bg-white p-2.5 rounded-lg border border-orange-100 flex items-center gap-2">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px] font-bold">{i+1}</span>
                      <span className="text-slate-700">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-bold text-slate-800 mb-2">{aiAnalysis.vakStudyPlan.title}</h4>
              <div className="bg-white p-4 rounded-xl border border-orange-100 space-y-3">
                {aiAnalysis.vakStudyPlan.steps.map((s: any, i: number) => (
                  <div key={i} className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 rounded bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">Step {s.step}</span>
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{s.action}</p>
                      <p className="text-xs text-slate-400">{s.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-sm font-medium text-orange-700 text-center italic mt-2">
              "{aiAnalysis.encouragement}"
            </p>
          </div>
        </div>
      )}
"""
content = content.replace(list_start, ai_section + list_start)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated WeaknessAnalyzer.tsx")
