import os

path = 'app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

tool_tab = """            {activeTab === 'tool' && (
              <div id="external-tools-section">
                <ExternalIntegrations lang={lang} mode="tool" />
              </div>
            )}"""

new_tool_tab = """            {activeTab === 'tool' && (
              <div id="external-tools-section" className="space-y-8">
                <ExternalIntegrations lang={lang} mode="tool" />
                {user && (
                  <div id="ebbinghaus" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <CalendarScheduler vakType={currentVak} lang={lang} />
                    <div id="review-dashboard-anchor">
                      <ReviewDashboard vakType={currentVak} lang={lang} />
                    </div>
                  </div>
                )}
              </div>
            )}"""

if tool_tab in content:
    content = content.replace(tool_tab, new_tool_tab)
    print("Replaced tool tab rendering successfully.")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
