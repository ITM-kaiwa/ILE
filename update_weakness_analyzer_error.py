import os

filepath = 'components/WeaknessAnalyzer.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add aiError state
new_component_start = """export const WeaknessAnalyzer: React.FC<WeaknessAnalyzerProps> = ({ vakType, weaknessRecords, lang = 'ja' }) => {
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (weaknessRecords.length === 0) return;
    setIsAnalyzing(true);
    setAiAnalysis(null);
    setAiError(null);
    try {
      const res = await fetch('/api/gemini/analyze-weakness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weaknessRecords: weaknessRecords.slice(0, 20), vakType, lang }) // Analyze top 20
      });
      const data = await res.json();
      if (data.success && data.analysis) {
        setAiAnalysis(data.analysis);
      } else {
        setAiError(data.error || 'Unknown error occurred.');
      }
    } catch (e: any) {
      console.error(e);
      setAiError(e.message || 'Network error occurred.');
    } finally {
      setIsAnalyzing(false);
    }
  };
"""

old_component_start = """export const WeaknessAnalyzer: React.FC<WeaknessAnalyzerProps> = ({ vakType, weaknessRecords, lang = 'ja' }) => {
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
content = content.replace(old_component_start, new_component_start)

# Add error display
ai_section_start = """      {aiAnalysis && ("""
error_section = """
      {aiError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          ⚠️ {aiError}
        </div>
      )}
"""
content = content.replace(ai_section_start, error_section + ai_section_start)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated WeaknessAnalyzer.tsx with error handling")
