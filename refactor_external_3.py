import os

filepath = 'components/ExternalIntegrations.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_external_section = '''      {/* External Learning Resources Section */}
      {(mode === 'all' || mode === 'external') && ('''

new_tool_section = '''      {/* Tools Section */}
      {(mode === 'all' || mode === 'tool') && (
      <div className="glass-card p-6 border border-amber-200/60 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-amber-100">
          <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
            <span>{isVi ? 'Công cụ học tập & Tiện ích' : '学習ツール・アプリ'}</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {toolApps.map((app, index) => {
            if (app.isEmpty) {
              return <div key={index} className="hidden md:block"></div>;
            }
            const Icon = app.icon;
            return (
              <a
                key={index}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#FFFDF9] border border-amber-200/80 hover:border-orange-300 transition group flex items-start justify-between shadow-sm"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${app.color} text-white shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition">
                        {app.name}
                      </h3>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-orange-500 transition" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {app.desc}
                    </p>
                  </div>
                </div>
                {app.badge && (
                  <span className="shrink-0 ml-2 px-2 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {app.badge}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
      )}

      {/* External Learning Resources Section */}
      {(mode === 'all' || mode === 'external') && ('''

if old_external_section in content:
    content = content.replace(old_external_section, new_tool_section)
else:
    print("Could not find old_external_section")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
