import os

filepath = 'app/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace padding and text size in all tab buttons
# Old class format: className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
# Let's replace 'px-5 py-3 text-[15px]' with 'px-2.5 py-2 text-[14px]'
# and 'space-x-1.5' with 'space-x-1'
# Wait, let's just do a regex replace to be safe.

import re

# We can replace 'px-5 py-3 text-[15px]' with 'px-2 py-2.5 text-sm'
content = content.replace("px-5 py-3 text-[15px]", "px-2 py-2.5 text-[13px] sm:px-3 sm:text-sm")
content = content.replace("space-x-1.5", "space-x-1")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Tabs compacted!")
