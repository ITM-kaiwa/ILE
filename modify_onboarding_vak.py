import re
import os

# 1. Update VakExplanation.tsx
vak_path = 'components/VakExplanation.tsx'
with open(vak_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add lang prop
if 'lang?: string;' not in content:
    content = content.replace('interface VakExplanationProps {', "import { Language } from '@/lib/i18n';\n\ninterface VakExplanationProps {\n  lang?: Language;")
    content = content.replace('export const VakExplanation: React.FC<VakExplanationProps> = ({ vakType }) => {', "export const VakExplanation: React.FC<VakExplanationProps> = ({ vakType, lang = 'ja' }) => {\n  const isVi = lang === 'vi';")

# Replace bilingual texts
def replace_bilingual(match):
    ja_text = match.group(1)
    vi_text = match.group(2)
    return f"{{isVi ? '{vi_text}' : '{ja_text}'}}"

# Example replacements for VakExplanation
content = content.replace("【特性と学習法 / Đặc điểm & Phương pháp】", "{isVi ? '【Đặc điểm & Phương pháp】' : '【特性と学習法】'}")
content = content.replace("【主な長所 / Ưu điểm chính】", "{isVi ? '【Ưu điểm chính】' : '【主な長所】'}")
content = content.replace("【適している学習法 / Phương pháp học phù hợp】", "{isVi ? '【Phương pháp học phù hợp】' : '【適している学習法】'}")
content = content.replace("【効率を高める多覚的アプローチ / Tiếp cận đa giác quan】", "{isVi ? '【Tiếp cận đa giác quan】' : '【効率を高める多覚的アプローチ】'}")

# Replace the block paragraphs
content = content.replace("""<span className="font-semibold text-slate-800 block mb-1">🇯🇵 目から入る情報（文字、画像、図、色など）の処理が得意なタイプです。</span>
              テキストや映像を写真のように頭の中でイメージとして記憶する傾向があります。
              <br/><br/>
              <span className="font-semibold text-slate-800 block mb-1">🇻🇳 Là kiểu người xử lý tốt thông tin qua thị giác (chữ viết, hình ảnh, biểu đồ, màu sắc).</span>
              Có xu hướng ghi nhớ văn bản hoặc video giống như một bức ảnh chụp trong đầu.""",
"""{isVi ? (
                <>
                  <span className="font-semibold text-slate-800 block mb-1">Là kiểu người xử lý tốt thông tin qua thị giác (chữ viết, hình ảnh, biểu đồ, màu sắc).</span>
                  Có xu hướng ghi nhớ văn bản hoặc video giống như một bức ảnh chụp trong đầu.
                </>
              ) : (
                <>
                  <span className="font-semibold text-slate-800 block mb-1">目から入る情報（文字、画像、図、色など）の処理が得意なタイプです。</span>
                  テキストや映像を写真のように頭の中でイメージとして記憶する傾向があります。
                </>
              )}""")

content = content.replace("""<span className="font-semibold text-slate-800 block mb-1">🇯🇵 耳から入る音（音声、リズム、言葉の響き）の処理が得意なタイプです。</span>
              文字を読むよりも、人が話す声を聞いたり、自身で声に出したりすることで理解が深まります。
              <br/><br/>
              <span className="font-semibold text-slate-800 block mb-1">🇻🇳 Là kiểu người xử lý tốt thông tin qua thính giác (âm thanh, nhịp điệu, âm vang).</span>
              Hiểu sâu hơn thông qua việc nghe người khác nói hoặc tự phát âm ra tiếng thay vì chỉ đọc chữ.""",
"""{isVi ? (
                <>
                  <span className="font-semibold text-slate-800 block mb-1">Là kiểu người xử lý tốt thông tin qua thính giác (âm thanh, nhịp điệu, âm vang).</span>
                  Hiểu sâu hơn thông qua việc nghe người khác nói hoặc tự phát âm ra tiếng thay vì chỉ đọc chữ.
                </>
              ) : (
                <>
                  <span className="font-semibold text-slate-800 block mb-1">耳から入る音（音声、リズム、言葉の響き）の処理が得意なタイプです。</span>
                  文字を読むよりも、人が話す声を聞いたり、自身で声に出したりすることで理解が深まります。
                </>
              )}""")

content = content.replace("""<span className="font-semibold text-slate-800 block mb-1">🇯🇵 「体験や感覚」を通じて物事を理解・記憶するタイプです。</span>
              体を動かす、触る、実際に体験する、感情を伴うことなどが得意で、じっと座ってテキストを読むだけでは集中力が続きにくい傾向があります。
              <br/><br/>
              <span className="font-semibold text-slate-800 block mb-1">🇻🇳 Là kiểu người hiểu và ghi nhớ thông qua "trải nghiệm và cảm giác".</span>
              Dễ dàng tiếp thu qua vận động, chạm, thực hành, cảm xúc, và thường khó duy trì sự tập trung nếu chỉ ngồi yên đọc sách.""",
"""{isVi ? (
                <>
                  <span className="font-semibold text-slate-800 block mb-1">Là kiểu người hiểu và ghi nhớ thông qua "trải nghiệm và cảm giác".</span>
                  Dễ dàng tiếp thu qua vận động, chạm, thực hành, cảm xúc, và thường khó duy trì sự tập trung nếu chỉ ngồi yên đọc sách.
                </>
              ) : (
                <>
                  <span className="font-semibold text-slate-800 block mb-1">「体験や感覚」を通じて物事を理解・記憶するタイプです。</span>
                  体を動かす、触る、実際に体験する、感情を伴うことなどが得意で、じっと座ってテキストを読むだけでは集中力が続きにくい傾向があります。
                </>
              )}""")

content = content.replace("""<span className="font-semibold text-slate-800 block mb-1">🇯🇵 最も記憶が定着するのは「複数の感覚を組み合わせた」学習です。</span>
          一番得意な優位感覚をメインにしつつ、他の感覚も合わせたアプローチ（例：「文字と画像を見ながら」＋「声に出し」＋「手で書く」）をとるのが理想的です。
          <br/><br/>
          <span className="font-semibold text-slate-800 block mb-1">🇻🇳 Việc kết hợp nhiều giác quan sẽ mang lại tỷ lệ ghi nhớ cao nhất.</span>
          Hãy dùng giác quan ưu thế làm "cửa ngõ chính", đồng thời kết hợp các giác quan khác (VD: "Vừa nhìn hình và chữ" + "Vừa đọc to" + "Vừa viết tay") để đạt kết quả tối ưu.""",
"""{isVi ? (
          <>
            <span className="font-semibold text-slate-800 block mb-1">Việc kết hợp nhiều giác quan sẽ mang lại tỷ lệ ghi nhớ cao nhất.</span>
            Hãy dùng giác quan ưu thế làm "cửa ngõ chính", đồng thời kết hợp các giác quan khác (VD: "Vừa nhìn hình và chữ" + "Vừa đọc to" + "Vừa viết tay") để đạt kết quả tối ưu.
          </>
        ) : (
          <>
            <span className="font-semibold text-slate-800 block mb-1">最も記憶が定着するのは「複数の感覚を組み合わせた」学習です。</span>
            一番得意な優位感覚をメインにしつつ、他の感覚も合わせたアプローチ（例：「文字と画像を見ながら」＋「声に出し」＋「手で書く」）をとるのが理想的です。
          </>
        )}""")

# 2. Add lang to VakDiagnosticModal
diag_path = 'components/VakDiagnosticModal.tsx'
with open(diag_path, 'r', encoding='utf-8') as f:
    diag = f.read()

if 'lang?: Language;' not in diag:
    diag = diag.replace("import { VakExplanation } from './VakExplanation';", "import { VakExplanation } from './VakExplanation';\nimport { Language } from '@/lib/i18n';")
    diag = diag.replace("isLoggedIn?: boolean;\n}", "isLoggedIn?: boolean;\n  lang?: Language;\n}")
    diag = diag.replace("isLoggedIn = false,\n}) => {", "isLoggedIn = false,\n  lang = 'ja',\n}) => {")
    diag = diag.replace("<VakExplanation vakType={result} />", "<VakExplanation vakType={result} lang={lang} />")

with open(vak_path, 'w', encoding='utf-8') as f:
    f.write(content)
with open(diag_path, 'w', encoding='utf-8') as f:
    f.write(diag)
print("Updated VakExplanation and VakDiagnosticModal")
