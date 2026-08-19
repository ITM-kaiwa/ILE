import os

filepath = 'lib/gemini.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-pro']", "['gemini-4.0-flash', 'gemini-3.7-flash', 'gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-2.5-flash', 'gemini-1.5-flash', 'gemini-1.5-pro']")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated modelsToTry in lib/gemini.ts")
