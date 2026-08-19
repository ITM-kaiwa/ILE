import os

path = 'components/OnboardingGuideModal.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add lang prop
if 'lang?: string;' not in content:
    content = content.replace("interface OnboardingGuideModalProps {", "import { Language } from '@/lib/i18n';\n\ninterface OnboardingGuideModalProps {\n  lang?: Language;")
    content = content.replace("export const OnboardingGuideModal: React.FC<OnboardingGuideModalProps> = ({ isOpen, onClose }) => {", "export const OnboardingGuideModal: React.FC<OnboardingGuideModalProps> = ({ isOpen, onClose, lang = 'ja' }) => {\n  const isVi = lang === 'vi';")

# Quick replace for the title
content = content.replace("🔰</span> はじめての方へ / Hướng dẫn cho người mới", "🔰</span> {isVi ? 'Hướng dẫn cho người mới' : 'はじめての方へ'}")

# Quick replace for some parts of VAK guide
content = content.replace("人はそれぞれ、情報を処理する際に得意な「感覚（VAK）」を持っています。", "{isVi ? 'Mỗi người đều có một \"giác quan (VAK)\" ưu thế khi xử lý thông tin.' : '人はそれぞれ、情報を処理する際に得意な「感覚（VAK）」を持っています。'}")
content = content.replace("視覚 (Visual): 図や絵、テキストを見ることで理解しやすいタイプ。", "{isVi ? 'Thị giác (Visual): Kiểu người dễ hiểu thông qua việc nhìn hình ảnh, biểu đồ, văn bản.' : '視覚 (Visual): 図や絵、テキストを見ることで理解しやすいタイプ。'}")
content = content.replace("聴覚 (Auditory): 音声や説明を聞くこと、声に出すことで理解しやすいタイプ。", "{isVi ? 'Thính giác (Auditory): Kiểu người dễ hiểu thông qua việc nghe âm thanh, lời giải thích hoặc phát âm thành tiếng.' : '聴覚 (Auditory): 音声や説明を聞くこと、声に出すことで理解しやすいタイプ。'}")
content = content.replace("身体感覚 (Kinesthetic): 実際に書いたり、体を動かしたり、体験を通じて理解しやすいタイプ。", "{isVi ? 'Cảm giác vận động (Kinesthetic): Kiểu người dễ hiểu thông qua trải nghiệm thực tế, viết tay hoặc vận động cơ thể.' : '身体感覚 (Kinesthetic): 実際に書いたり、体を動かしたり、体験を通じて理解しやすいタイプ。'}")
content = content.replace("あなたに合ったアプローチで学習を進めることで、効率的に日本語を習得できます。", "{isVi ? 'Bằng cách áp dụng phương pháp học phù hợp với bản thân, bạn có thể tiếp thu tiếng Nhật một cách hiệu quả nhất.' : 'あなたに合ったアプローチで学習を進めることで、効率的に日本語を習得できます。'}")
content = content.replace("VAK（学習特性）とは？", "{isVi ? 'VAK (Đặc điểm học tập) là gì?' : 'VAK（学習特性）とは？'}")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

# Update page.tsx and Navbar.tsx to pass lang
page_path = 'app/page.tsx'
with open(page_path, 'r', encoding='utf-8') as f:
    page = f.read()

# page.tsx doesn't have OnboardingGuideModal, Navbar has it.
nav_path = 'components/Navbar.tsx'
with open(nav_path, 'r', encoding='utf-8') as f:
    nav = f.read()
    
nav = nav.replace("<OnboardingGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />", "<OnboardingGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} lang={lang} />")
nav = nav.replace("<VakDiagnosticModal\n        isOpen={diagnosticModal.isOpen}", "<VakDiagnosticModal\n        lang={lang}\n        isOpen={diagnosticModal.isOpen}")

with open(nav_path, 'w', encoding='utf-8') as f:
    f.write(nav)

print("Updated OnboardingGuideModal and Navbar")
