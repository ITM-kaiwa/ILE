import os

filepath = 'components/Navbar.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add missing props to NavbarProps interface
content = content.replace(
    """interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  vakType: VakType;
  onVakCycle: () => void;
  onOpenDiagnostic: (mode: 'quick' | 'detailed') => void;
  onOpenLog: () => void;
}""",
    """interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  vakType: VakType;
  currentVak?: VakType;
  isHybrid?: boolean;
  hybridLabel?: string;
  onVakCycle: () => void;
  onOpenDiagnostic: (mode: 'quick' | 'detailed') => void;
  onOpenLog: () => void;
}"""
)

# Add currentVak, isHybrid, hybridLabel to destructured props
content = content.replace(
    """export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  vakType,
  onVakCycle,
  onOpenDiagnostic,
  onOpenLog,
}) => {""",
    """export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  vakType,
  currentVak,
  isHybrid,
  hybridLabel,
  onVakCycle,
  onOpenDiagnostic,
  onOpenLog,
}) => {
  // currentVak/isHybrid/hybridLabel kept for forward compatibility
  void currentVak; void isHybrid; void hybridLabel;"""
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed!")
