import os
import re

filepath = 'app/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Import Wrench icon
if 'Wrench' not in content:
    content = content.replace("import { MessageCircle, Link } from 'lucide-react';", "import { MessageCircle, Link, Wrench } from 'lucide-react';")
    if 'Wrench' not in content:
        # Just in case it's grouped differently
        content = re.sub(r"import \{([^}]+)\} from 'lucide-react';", r"import {\1, Wrench} from 'lucide-react';", content)

# 2. Update activeTab state type
content = content.replace(
    "useState<'vak' | 'jlpt' | 'kana' | 'vocab' | 'grammar' | 'kanji' | 'review' | 'conversation' | 'link' | null>('vak');",
    "useState<'vak' | 'jlpt' | 'kana' | 'vocab' | 'grammar' | 'kanji' | 'review' | 'conversation' | 'tool' | 'link' | null>('vak');"
)

# 3. Add the Tool button before the Link button
old_link_button = '''              <button
                onClick={() => setActiveTab('link')}'''

new_tool_button = '''              <button
                onClick={() => setActiveTab('tool')}
                className={whitespace-nowrap px-5 py-3 text-[15px] transition-colors border-t-[3px] border-l border-r -mb-px flex items-center space-x-1.5 }
              >
                <Wrench className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Công cụ' : 'ツール'}</span>
              </button>
              <button
                onClick={() => setActiveTab('link')}'''

if old_link_button in content and 'Công cụ' not in content:
    content = content.replace(old_link_button, new_tool_button)

# 4. Update the render content
old_conversation_render = '''            {activeTab === 'conversation' && (
              <div id="external-integrations-section">
                <ExternalIntegrations lang={lang} mode="itm" />
              </div>
            )}'''

new_renders = '''            {activeTab === 'conversation' && (
              <div id="external-integrations-section">
                <ExternalIntegrations lang={lang} mode="conversation" />
              </div>
            )}

            {activeTab === 'tool' && (
              <div id="external-tools-section">
                <ExternalIntegrations lang={lang} mode="tool" />
              </div>
            )}'''

if old_conversation_render in content:
    content = content.replace(old_conversation_render, new_renders)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
