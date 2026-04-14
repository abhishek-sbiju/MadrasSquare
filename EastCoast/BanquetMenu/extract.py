import fitz

doc = fitz.open('East Coast Banquet 2026_ClientVer.pdf')
text = ""
for page in doc:
    text += page.get_text() + "\n"

with open('pdf_content.txt', 'w', encoding='utf-8') as f:
    f.write(text)
