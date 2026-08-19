import os
import re

path = 'app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    page = f.read()

# Fix the Kana icon string literal error
page = page.replace("<span>{lang === \\'vi\\' ? \\'Chữ Kana\\' : \\'かな\\'}</span>", "<span>{lang === 'vi' ? 'Chữ Kana' : 'かな'}</span>")

# Add onRequestReview to Navbar
# First, let's find exactly what Navbar looks like
navbar_index = page.find('<Navbar')
if navbar_index != -1:
    end_index = page.find('/>', navbar_index) + 2
    old_nav = page[navbar_index:end_index]
    
    # Check if we already have onRequestReview
    if 'onRequestReview=' not in old_nav:
        new_nav = old_nav.replace('/>', """  onRequestReview={() => {
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
        />""")
        page = page.replace(old_nav, new_nav)
        print("Updated Navbar!")
    else:
        print("Navbar already updated?")
else:
    print("Could not find <Navbar")

with open(path, 'w', encoding='utf-8') as f:
    f.write(page)
