import os
import re

path_nav = 'components/Navbar.tsx'
with open(path_nav, 'r', encoding='utf-8') as f:
    nav = f.read()

# Add onSetVak to NavbarProps
if "onSetVak?:" not in nav:
    nav = nav.replace("onVakCycle: () => void;", "onVakCycle: () => void;\n    onSetVak?: (vak: VakType) => void;")
    nav = nav.replace("onVakCycle,\n    onOpenDiagnostic", "onVakCycle,\n    onSetVak,\n    onOpenDiagnostic")

# Create a toggle UI instead of getVakBadge()
old_badge_ui = """{/* VAK Mode Selector */}
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

new_toggle_ui = """{/* VAK Mode Selector */}
                  <div className="flex items-center bg-[#FAF7F2] p-1 rounded-lg border border-amber-300 shadow-inner">
                    <span className="text-[10px] font-bold text-amber-800 ml-1 mr-2 hidden sm:inline">VAK:</span>
                    <div className="flex space-x-1">
                      <button 
                        onClick={() => onSetVak ? onSetVak('visual') : onVakCycle()}
                        className={`px-2 py-1 text-[10px] sm:text-xs font-bold rounded-md transition ${
                          (vakType || currentVak) === 'visual' ? 'bg-blue-600 text-white shadow-sm' : 'text-blue-600 hover:bg-blue-100'
                        }`}
                      >V</button>
                      <button 
                        onClick={() => onSetVak ? onSetVak('auditory') : onVakCycle()}
                        className={`px-2 py-1 text-[10px] sm:text-xs font-bold rounded-md transition ${
                          (vakType || currentVak) === 'auditory' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-600 hover:bg-emerald-100'
                        }`}
                      >A</button>
                      <button 
                        onClick={() => onSetVak ? onSetVak('kinesthetic') : onVakCycle()}
                        className={`px-2 py-1 text-[10px] sm:text-xs font-bold rounded-md transition ${
                          (vakType || currentVak) === 'kinesthetic' ? 'bg-orange-600 text-white shadow-sm' : 'text-orange-600 hover:bg-orange-100'
                        }`}
                      >K</button>
                    </div>
                  </div>"""

if old_badge_ui in nav:
    nav = nav.replace(old_badge_ui, new_toggle_ui)
else:
    # Maybe it was just {getVakBadge()}? Let's check.
    nav = nav.replace("{getVakBadge()}", new_toggle_ui)

with open(path_nav, 'w', encoding='utf-8') as f:
    f.write(nav)

path_page = 'app/page.tsx'
with open(path_page, 'r', encoding='utf-8') as f:
    page = f.read()

if "onSetVak={" not in page:
    page = page.replace("onVakCycle={handleVakCycle}", "onVakCycle={handleVakCycle}\n          onSetVak={(v) => setCurrentVak(v)}")

with open(path_page, 'w', encoding='utf-8') as f:
    f.write(page)

# Update config.ts version
path_config = 'lib/config.ts'
with open(path_config, 'r', encoding='utf-8') as f:
    config = f.read()
config = config.replace("v10.15β", "v10.17β")
with open(path_config, 'w', encoding='utf-8') as f:
    f.write(config)

print("Updated VAK toggle and version")
