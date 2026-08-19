import os

path = 'app/api/gemini/analyze-weakness/route.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_schema = """  "vakStudyPlan": {
    "title": "学習プランのタイトル",
    "steps": [
      { "step": 1, "action": "アクション", "duration": "目安時間" }
    ]
  },
  "encouragement": "励ましのメッセージ"
}"""

new_schema = """  "vakStudyPlan": {
    "title": "学習プランのタイトル",
    "steps": [
      { "step": 1, "action": "アクション", "duration": "目安時間" }
    ]
  },
  "encouragement": "励ましのメッセージ",
  "practiceQuestions": [
    {
      "question": "弱点を克服するための新しい練習問題（日本語）",
      "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
      "answerIndex": 0,
      "explanation": "正解の理由とVAKタイプに合わせた解説"
    }
  ]
}"""

prompt_update = "この記録を深く分析して、学習者の弱点パターンを特定し、${vakLabel}タイプに最適化された具体的な学習アドバイスを生成してください。"
new_prompt_update = "この記録を深く分析して、学習者の弱点パターンを特定し、${vakLabel}タイプに最適化された具体的な学習アドバイスと、弱点克服のための新しい練習問題（3問）を生成してください。"

content = content.replace(old_schema, new_schema).replace(prompt_update, new_prompt_update)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated analyze-weakness API with practiceQuestions schema")
