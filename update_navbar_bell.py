import os
import re

path_navbar = 'components/Navbar.tsx'
with open(path_navbar, 'r', encoding='utf-8') as f:
    nav = f.read()

# Add onRequestReview to NavbarProps
if "onRequestReview?: () => void;" not in nav:
    nav = nav.replace("onOpenLog: () => void;", "onOpenLog: () => void;\n  onRequestReview?: () => void;")

# Update destructuring
nav = nav.replace("onOpenLog,\n}) => {", "onOpenLog,\n  onRequestReview,\n}) => {")

# Update handleBellClick
old_bell = """  const handleBellClick = () => {
    setShowNotifPanel((prev) => !prev);
    if (!showNotifPanel) fetchNotifications();
  };"""

new_bell = """  const handleBellClick = () => {
    if (onRequestReview) {
      setShowNotifPanel(false);
      onRequestReview();
    } else {
      setShowNotifPanel((prev) => !prev);
      if (!showNotifPanel) fetchNotifications();
    }
  };"""

nav = nav.replace(old_bell, new_bell)

with open(path_navbar, 'w', encoding='utf-8') as f:
    f.write(nav)

path_page = 'app/page.tsx'
with open(path_page, 'r', encoding='utf-8') as f:
    page = f.read()

# Update Navbar usage in page.tsx
old_nav_usage = """        <Navbar 
          lang={lang} 
          onLanguageChange={setLang}
          vakType={vakType}
          currentVak={currentVak}
          isHybrid={isHybrid}
          hybridLabel={hybridLabel}
          onVakCycle={cycleVak}
          onOpenDiagnostic={handleOpenDiagnostic}
          onOpenLog={() => setIsLogOpen(true)}
        />"""

new_nav_usage = """        <Navbar 
          lang={lang} 
          onLanguageChange={setLang}
          vakType={vakType}
          currentVak={currentVak}
          isHybrid={isHybrid}
          hybridLabel={hybridLabel}
          onVakCycle={cycleVak}
          onOpenDiagnostic={handleOpenDiagnostic}
          onOpenLog={() => setIsLogOpen(true)}
          onRequestReview={() => {
            setActiveTab('tool');
            setTimeout(() => {
              const target = document.getElementById('review-dashboard-anchor');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
        />"""

page = page.replace(old_nav_usage, new_nav_usage)

with open(path_page, 'w', encoding='utf-8') as f:
    f.write(page)

print("Updated Navbar and page.tsx for Bell click behavior.")
