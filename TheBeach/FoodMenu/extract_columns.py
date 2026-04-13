import pdfplumber
import sys

def parse_pdf_columns(pdf_path, output_path):
    with pdfplumber.open(pdf_path) as pdf:
        # Just process page 1, as it seems to contain the whole layout
        page = pdf.pages[0]
        # Split page horizontally into 4 or 5 columns
        width = page.width
        columns = 4
        col_width = width / columns
        
        with open(output_path, 'w', encoding='utf-8') as f:
            for i in range(columns):
                x0 = i * col_width
                x1 = (i + 1) * col_width
                bbox = (x0, 0, x1, page.height)
                cropped = page.within_bbox(bbox)
                text = cropped.extract_text(layout=True)
                f.write(f"=== COLUMN {i+1} ===\n")
                if text:
                    f.write(text)
                f.write("\n\n")

if __name__ == "__main__":
    pdf_path = "Madras Square_Menu Card_V2.pdf"
    output_path = "parsed_columns.txt"
    parse_pdf_columns(pdf_path, output_path)
    print("Done")
