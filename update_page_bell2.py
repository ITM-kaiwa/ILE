import os
import re

path = 'app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    page = f.read()

replacement = """      <Navbar
          currentVak={currentVak}
          isHybrid={vakResult?.isHybrid}
          hybridLabel={vakResult?.hybridLabel}
          lang={lang}
          onLanguageChange={(newLang) => setLang(newLang)}
          onOpenDiagnostic={(mode) => setDiagnosticModal({ isOpen: true, mode })}
          onOpenLog={() => setIsLogModalOpen(true)}
          onVakCycle={handleVakCycle}
          onRequestReview={() => {
            setActiveTab('tool');
            setTimeout(() => {
              const target = document.getElementById('review-dashboard-anchor');
              if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 100);
          }}
        />"""

page = re.sub(
    r'<Navbar[^>]+onVakCycle=\{handleVakCycle\}\s*/>',
    replacement,
    page
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(page)
print("Replaced Navbar block in page.tsx")
