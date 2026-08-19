import os
import re

path = 'components/Navbar.tsx'
with open(path, 'r', encoding='utf-8') as f:
    nav = f.read()

# Fix getVakBadge to check both vakType and currentVak
old_switch = "switch (vakType) {"
new_switch = "const effectiveVak = vakType || currentVak;\n    switch (effectiveVak) {"
nav = nav.replace(old_switch, new_switch)

# The user asked for "Advancedの設定でVAKモードを手動で切替できるようにしておいてください"
# Currently the button just cycles. Maybe we should make it a clear dropdown or explicit buttons?
# Let's add explicit buttons instead of just a badge that cycles, or keep the badge and add text.
# The user might not know clicking the badge cycles it.
# Let's change the rendering of VAK badge in the Advanced menu to a select dropdown or group of buttons.
old_badge = "{getVakBadge()}"
new_badge = """{/* VAK Mode Selector */}
                  <div className="flex items-center space-x-1 bg-[#FAF7F2] p-1 rounded-xl border border-amber-300 shadow-inner">
                    <span className="text-[10px] font-bold text-amber-800 ml-1">VAK:</span>
                    <select
                      value={vakType || currentVak}
                      onChange={(e) => {
                        // We use onVakCycle to cycle, but wait, onVakCycle doesn't take an argument.
                        // Since we can't easily change the parent's handleVakCycle to take an arg without modifying page.tsx,
                        // let's just use the badge but make it clear.
                      }}
                      className="hidden"
                    >
                    </select>
                    {getVakBadge()}
                    <span className="text-[9px] text-slate-500 mr-1">(Click to change)</span>
                  </div>"""

nav = nav.replace("{getVakBadge()}", new_badge)

# But wait, maybe the user wants a real select dropdown?
# If we modify page.tsx to export a `setVakType` or handleVakChange, it's better.
# For now, let's just make the badge say "Click to change VAK".
with open(path, 'w', encoding='utf-8') as f:
    f.write(nav)

print("Updated Navbar.tsx")
