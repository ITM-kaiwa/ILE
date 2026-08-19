import os

path = 'components/WeaknessAnalyzer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add states for practice questions
old_states = """  const [autoAnalysisToast, setAutoAnalysisToast] = useState(false);"""
new_states = """  const [autoAnalysisToast, setAutoAnalysisToast] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});"""
content = content.replace(old_states, new_states)

# Add clear answers on handleAnalyze
old_analyze = """    setIsAnalyzing(true);
    setAiAnalysis(null);
    setAiError(null);"""
new_analyze = """    setIsAnalyzing(true);
    setAiAnalysis(null);
    setAiError(null);
    setRevealedAnswers({});"""
content = content.replace(old_analyze, new_analyze)

# Add rendering of practice questions
old_render = """            <p className="text-sm font-medium text-orange-700 text-center italic mt-2">
              "{aiAnalysis.encouragement}"
            </p>
          </div>
        )}"""

new_render = """            <p className="text-sm font-medium text-orange-700 text-center italic mt-2">
              "{aiAnalysis.encouragement}"
            </p>

            {/* AI Generated Practice Questions */}
            {aiAnalysis.practiceQuestions && aiAnalysis.practiceQuestions.length > 0 && (
              <div className="mt-6 border-t border-amber-200 pt-6">
                <h4 className="text-sm font-bold text-slate-800 flex items-center mb-4">
                  <Sparkles className="w-4 h-4 text-indigo-500 mr-2" />
                  {isVi ? 'Bài tập AI tạo ra để khắc phục điểm yếu' : '弱点克服のためのAI生成問題'}
                </h4>
                <div className="space-y-4">
                  {aiAnalysis.practiceQuestions.map((pq: any, idx: number) => {
                    const isRevealed = revealedAnswers[idx];
                    return (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm space-y-3">
                        <p className="text-sm font-bold text-slate-800">Q{idx + 1}. {pq.question}</p>
                        <div className="space-y-2">
                          {pq.options.map((opt: string, oIdx: number) => (
                            <button
                              key={oIdx}
                              onClick={() => {
                                if (!isRevealed) {
                                  setRevealedAnswers(prev => ({ ...prev, [idx]: true }));
                                }
                              }}
                              className={`w-full text-left p-2 rounded-lg text-sm transition-colors border ${
                                isRevealed 
                                  ? oIdx === pq.answerIndex 
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-medium' 
                                    : 'bg-rose-50 border-rose-200 text-slate-400'
                                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                              }`}
                              disabled={isRevealed}
                            >
                              {oIdx + 1}. {opt}
                            </button>
                          ))}
                        </div>
                        {isRevealed && (
                          <div className="mt-3 p-3 bg-indigo-50 rounded-lg text-xs text-indigo-900 border border-indigo-100 animate-fade-in">
                            <span className="font-bold flex items-center mb-1">
                              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                              {isVi ? 'Giải thích' : '解説'}:
                            </span>
                            {pq.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}"""

content = content.replace(old_render, new_render)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated WeaknessAnalyzer UI to show AI generated practice questions")
