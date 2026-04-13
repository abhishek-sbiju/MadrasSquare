import fitz
import json

def extract_blocks(pdf_path, output_path):
    doc = fitz.open(pdf_path)
    # The whole menu seems to be repeated across the 14 pages based on previous checks 
    # Let's extract from all pages and collect unique blocks to be safe
    all_blocks = []
    
    for i, page in enumerate(doc):
        # blocks format for get_text("blocks") is:
        # (x0, y0, x1, y1, "lines in block", block_no, block_type)
        blocks = page.get_text("blocks")
        for b in blocks:
            text = b[4].strip()
            if text and text not in all_blocks:
                all_blocks.append(text)
                
    with open(output_path, 'w', encoding='utf-8') as f:
        for block in all_blocks:
            f.write(block)
            f.write("\n---\n")

if __name__ == "__main__":
    pdf_path = "Madras Square_Menu Card_V2.pdf"
    output_path = "pymupdf_blocks.txt"
    extract_blocks(pdf_path, output_path)
    print("Done")
