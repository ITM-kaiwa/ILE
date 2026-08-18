import os
import re

filepath = 'app/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of the link button
target = "onClick={() => setActiveTab('link')}"

if 'Công cụ' not in content:
    # Let's find the `<button` right before the target
    button_start_idx = content.rfind("<button", 0, content.find(target))
    if button_start_idx != -1:
        new_button = '''              <button
                onClick={() => setActiveTab('tool')}
                className={`whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 ${
                  activeTab === 'tool'
                    ? 'bg-white text-slate-900 border-t-slate-800 border-l-slate-300 border-r-slate-300 font-bold'
                    : 'text-blue-700 bg-transparent hover:bg-slate-100 hover:underline border-t-transparent border-l-transparent border-r-transparent font-medium'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Công cụ' : 'ツール'}</span>
              </button>\n'''
        
        # Insert before the <button
        content = content[:button_start_idx] + new_button + content[button_start_idx:]
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Tool button inserted!")
    else:
        print("Could not find button start")
else:
    print("Already inserted")
