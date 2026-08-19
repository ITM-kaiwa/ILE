import os

path = 'app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    page = f.read()

old_nav = """        <Navbar 
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

new_nav = """        <Navbar 
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

if old_nav in page:
    page = page.replace(old_nav, new_nav)
    print("Updated Navbar usage in page.tsx")
else:
    print("Could not find exact Navbar usage string in page.tsx")

with open(path, 'w', encoding='utf-8') as f:
    f.write(page)
