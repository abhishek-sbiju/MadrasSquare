import pdfplumber
import json

def parse_pdf_blocks(pdf_path, output_path):
    data = []
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            words = page.extract_words()
            # words have 'text', 'x0', 'top', 'x1', 'bottom'
            data.extend(words)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    pdf_path = "Madras Square_Menu Card_V2.pdf"
    output_path = "parsed_words.json"
    parse_pdf_blocks(pdf_path, output_path)
    print("Done")
