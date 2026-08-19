import os

path = 'components/ExternalIntegrations.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Create a custom icon for Earthquake House
earthquake_house_icon = """const EarthquakeHouseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Broken House Base */}
    <path d="M3 21h4" />
    <path d="M17 21h4" />
    {/* Crack in the ground */}
    <path d="M7 21l3-3 4 3 3-3" />
    {/* Walls and Roof */}
    <path d="M5 21V9l4-3" />
    <path d="M19 21V9l-4-3" />
    {/* Broken roof connection */}
    <path d="M11 6L12 3l1 3-1 2z" />
    <path d="M12 8v2" />
    <path d="M9 13l2 2 3-1-2-2" />
    {/* Shaking lines */}
    <path d="M2 9h2" />
    <path d="M20 9h2" />
    <path d="M1 14h2" />
    <path d="M21 14h2" />
  </svg>
);
"""

if "EarthquakeHouseIcon" not in content:
    content = content.replace("export const ExternalIntegrations", earthquake_house_icon + "\nexport const ExternalIntegrations")

new_link = """    {
      name: isVi ? 'Cổng thông tin Đa văn hóa Tokyo (Phòng chống thiên tai)' : '多文化防災ポータル (東京つながり)',
      desc: isVi ? 'Hướng dẫn chuẩn bị và ứng phó khi xảy ra động đất và thảm họa tự nhiên' : '地震や自然災害への備えと対応方法（多言語）',
      url: 'https://tabunka.tokyo-tsunagari.or.jp/vietnamese/disaster/howto.html',
      icon: EarthquakeHouseIcon,
      badge: isVi ? 'Phòng chống thiên tai' : '防災情報',
      color: 'from-red-500 to-rose-700',
    }
  ];"""

content = content.replace("  ];\n\n  return (", new_link + "\n\n  return (")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated external links")
