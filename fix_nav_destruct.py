import re

path = 'components/Navbar.tsx'
with open(path, 'r', encoding='utf-8') as f:
    nav = f.read()

# Replace the destructured args
nav = nav.replace(
    "onVakCycle,\n  onOpenDiagnostic,\n  onOpenLog,\n  onRequestReview,\n}) => {",
    "onVakCycle,\n  onSetVak,\n  onOpenDiagnostic,\n  onOpenLog,\n  onRequestReview,\n}) => {"
)

# Just to be safe, if the exact spacing is different:
nav = re.sub(r'(onVakCycle,[\s\n]+)(onOpenDiagnostic,)', r'\1onSetVak,\n  \2', nav)

with open(path, 'w', encoding='utf-8') as f:
    f.write(nav)
print("Fixed destructuring")
