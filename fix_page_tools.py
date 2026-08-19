import os

path = 'app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's find the section 3 code
old_section_3 = """        {/* Section 3: Google Calendar & SRS Review Manager */}
        {user && (
        <div id="ebbinghaus" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalendarScheduler vakType={currentVak} lang={lang} />
          <ReviewManager lang={lang} />
        </div>
        )}"""

if old_section_3 in content:
    content = content.replace(old_section_3, "")

# Now let's find the 'tool' tab rendering
tool_tab = """            {activeTab === 'tool' && (
              <div id="external-integrations-section">
                <ExternalIntegrations lang={lang} />
              </div>
            )}"""

new_tool_tab = """            {activeTab === 'tool' && (
              <div id="external-integrations-section" className="space-y-8">
                <ExternalIntegrations lang={lang} />
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
else:
    print("Could not find tool tab rendering")

# Replace activeTab === 'review' rendering if it contains ReviewDashboard
# Wait, ReviewDashboard was in 'review' tab?
# The user said "復習通知の画面は「ツール」タブのところでのみ表示し、他のタブには表示しないでください"
# If ReviewDashboard is the one, maybe remove it from 'review' tab or replace it with ReviewManager?
review_tab = """        {activeTab === 'review' && (
            <ReviewDashboard vakType={currentVak} lang={lang} />
            )}"""

if review_tab in content:
    content = content.replace(review_tab, """        {activeTab === 'review' && (
            <ReviewManager lang={lang} />
            )}""")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Moved CalendarScheduler and ReviewDashboard to 'tool' tab")
