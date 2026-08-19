import re

path = 'components/Navbar.tsx'
with open(path, 'r', encoding='utf-8') as f:
    nav = f.read()

# Add onSetVak to destructuring
nav = nav.replace("onVakCycle,\n    onOpenDiagnostic", "onVakCycle,\n    onSetVak,\n    onOpenDiagnostic")

with open(path, 'w', encoding='utf-8') as f:
    f.write(nav)
print("Added onSetVak to destructuring in Navbar.tsx")
