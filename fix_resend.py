filepath = 'app/api/cron/review/route.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Change from address to Resend shared domain
content = content.replace(
    "from: 'ILE VAK Learning <noreply@itm-kaiwa.com>',",
    "from: 'ILE VAK Learning <onboarding@resend.dev>',"
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Done!")
