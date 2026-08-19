import os

routes = [
    'app/api/gemini/learn/route.ts',
    'app/api/gemini/translate/route.ts',
    'app/api/gemini/explain/route.ts',
    'app/api/gemini/analyze-weakness/route.ts',
    'app/api/gemini/schedule/route.ts'
]

# The old fallback chains defined by Sonnet
old_fallback_1 = """const FALLBACK_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-1.5-pro-latest',
  'gemini-1.5-pro',
];"""

old_fallback_2 = """const FALLBACK_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash',
  'gemini-1.5-pro',
];"""

old_fallback_3 = """    const FALLBACK_MODELS = [
      'gemini-2.5-pro',
      'gemini-1.5-pro-latest',
      'gemini-1.5-pro',
      'gemini-2.0-flash',
      'gemini-1.5-flash'
    ];"""

# The new optimal fallback chain with general latest pointers
new_fallback_global = """const FALLBACK_MODELS = [
  'gemini-flash',            // 通称/汎用フラッシュ (最新モデルに自動ルーティング)
  'gemini-pro',              // 通称/汎用プロ (最新モデルに自動ルーティング)
  'gemini-3.7-flash',        // 最新フラッグシップ
  'gemini-3.6-flash',        // 高速・高効率
  'gemini-3.5-flash',        // 安定版
  'gemini-3.1-pro-preview',  // 高度な推論向け
  'gemini-2.5-pro',          // 旧世代上位
  'gemini-2.0-flash',        // 旧世代安定版
  'gemini-1.5-flash'         // 最終安全ネット
];"""

new_fallback_local = """    const FALLBACK_MODELS = [
      'gemini-flash',
      'gemini-pro',
      'gemini-3.7-flash',
      'gemini-3.6-flash',
      'gemini-3.5-flash',
      'gemini-3.1-pro-preview',
      'gemini-2.5-pro',
      'gemini-2.0-flash',
      'gemini-1.5-flash'
    ];"""

for path in routes:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "app/api/gemini/schedule/route.ts" in path:
        content = content.replace(old_fallback_3, new_fallback_local)
    else:
        content = content.replace(old_fallback_1, new_fallback_global)
        content = content.replace(old_fallback_2, new_fallback_global)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated models in: {path}")

