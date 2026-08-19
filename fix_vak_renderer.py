import os

path = 'components/VakContentRenderer.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Auto-generate on mount and on vakType change
# Current: useEffect only re-generates if customTopicInput.trim() exists AND lesson.vakType !== vakType
# We need to: also auto-generate on mount with a default topic immediately

old_effect = """  // Automatically generate when VAK type changes, provided there's input
  useEffect(() => {
    if (customTopicInput.trim() && lesson.vakType !== vakType && !isGenerating) {
      handleGenerate(customTopicInput);
    }
  }, [vakType]);"""

new_effect = """  // Auto-generate default lesson on first mount
  useEffect(() => {
    const defaultTopic = lang === 'vi' 
      ? 'Ngữ pháp JLPT N5 cơ bản: です / ます' 
      : 'JLPT N5 基本文法：〜です / 〜ます';
    handleGenerate(defaultTopic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-regenerate when VAK type changes (use current topic or default)
  useEffect(() => {
    if (lesson.vakType !== vakType && !isGenerating) {
      const activeTopic = customTopicInput.trim() || topic;
      handleGenerate(activeTopic);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vakType]);"""

content = content.replace(old_effect, new_effect)

# 2. Track if content is AI-generated or mock
old_state = "  const [isOpen, setIsOpen] = useState(false);"
new_state = """  const [isOpen, setIsOpen] = useState(false);
  const [contentSource, setContentSource] = useState<'mock' | 'ai' | null>(null);"""

content = content.replace(old_state, new_state)

# 3. Save source from API response
old_success = """      if (data.success) {
        setLesson(data.lesson);
        addLog(`Successfully generated custom VAK content for "${selectedTopic}".`, 'SUCCESS');
      } else {
        setLesson(data.lesson || getMockVakLesson(selectedTopic, vakType));
        addLog(`AI Generation Failed: ${data.error}. Falling back to high-quality mock data.`, 'ERROR');
      }"""

new_success = """      if (data.success) {
        setLesson(data.lesson);
        const isAI = data.source && data.source.startsWith('ai:');
        setContentSource(isAI ? 'ai' : 'mock');
        addLog(`VAK content ready [${data.source || 'unknown'}] for "${selectedTopic}".`, 'SUCCESS');
      } else {
        setLesson(data.lesson || getMockVakLesson(selectedTopic, vakType));
        setContentSource('mock');
        addLog(`AI Generation Failed: ${data.error}. Falling back to mock data.`, 'ERROR');
      }"""

content = content.replace(old_success, new_success)

# 4. Show skeleton loader while generating
# Find the isGenerating block before the card content header div
old_loading = "      {/* Dynamic VAK Render Box */}\n      {isOpen && ("
new_loading = """      {/* Skeleton Loader while generating */}
      {isGenerating && (
        <div className="mt-6 space-y-3 animate-pulse">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-5/6" />
          <div className="h-24 bg-slate-100 rounded-xl border border-slate-200" />
          <div className="h-4 bg-slate-200 rounded w-2/3" />
          <p className="text-xs text-center text-slate-400 font-medium pt-2">
            {lang === 'vi' ? '✨ AI đang tạo nội dung học tập cá nhân hóa...' : '✨ AIがあなたのVAKタイプに合った教材を生成中...'}
          </p>
        </div>
      )}

      {/* Dynamic VAK Render Box */}
      {isOpen && !isGenerating && ("""

content = content.replace(old_loading, new_loading)

# Close the extra conditional - add close brace before the outer closing div
old_end = """      )}
    </div>
  );
};"""

new_end = """      )}

      {/* AI source badge */}
      {isOpen && !isGenerating && contentSource && (
        <div className="mt-3 flex justify-end">
          {contentSource === 'ai' ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-700 font-semibold">
              <Sparkles className="w-3 h-3" /> {lang === 'vi' ? 'Nội dung được tạo bởi AI' : 'AI生成コンテンツ'}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] text-slate-500 font-medium">
              {lang === 'vi' ? 'Nội dung mẫu (AI không khả dụng)' : 'サンプルコンテンツ (AI未接続)'}
            </span>
          )}
        </div>
      )}
    </div>
  );
};"""

content = content.replace(old_end, new_end)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("VakContentRenderer updated with auto-generate and source badge")
