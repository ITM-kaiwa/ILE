import os

path = 'components/Navbar.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_bell = """  const handleBellClick = () => {
    if (onRequestReview) {
      setShowNotifPanel(false);
      onRequestReview();
    } else {
      setShowNotifPanel((prev) => !prev);
      if (!showNotifPanel) fetchNotifications();
    }
  };"""

new_bell = """  const handleBellClick = () => {
    setShowNotifPanel((prev) => !prev);
    if (!showNotifPanel) fetchNotifications();
  };"""

old_scroll = """  const handleScrollToReview = () => {
    const target = document.getElementById('review') || document.getElementById('ebbinghaus');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetPosition - 100, behavior: 'smooth' });
    }
  };"""

new_scroll = """  const handleScrollToReview = () => {
    if (onRequestReview) {
      onRequestReview();
    } else {
      const target = document.getElementById('review') || document.getElementById('ebbinghaus');
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: targetPosition - 100, behavior: 'smooth' });
      }
    }
  };"""

content = content.replace(old_bell, new_bell).replace(old_scroll, new_scroll)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Navbar.tsx")
