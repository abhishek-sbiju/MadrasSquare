import pdfplumber
import sys

def parse_pdf(pdf_path, output_path):
    with pdfplumber.open(pdf_path) as pdf:
        with open(output_path, 'w', encoding='utf-8') as f:
            for i, page in enumerate(pdf.pages):
                f.write(f"=== PAGE {i+1} ===\n")
                text = page.extract_text(layout=True)
                if text:
                    f.write(text)
                f.write("\n\n")

if __name__ == "__main__":
    pdf_path = "Madras Square_Menu Card_V2.pdf"
    output_path = "parsed_menu.txt"
    parse_pdf(pdf_path, output_path)
    print("Done")
