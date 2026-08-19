import os

path = 'components/ExternalIntegrations.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("    }\n    {", "    },\n    {")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed comma")
