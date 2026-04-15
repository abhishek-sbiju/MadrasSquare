import os

file_path = r'c:\Users\abhis\Downloads\PROJECTS\Webs\MadrasSquare\TheBeach\DrinkMenu\src\data\menuData.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update type definition
old_type = '  subsections?: { title: string; items: MenuItem[] }[];'
new_type = '  subsections?: { title: string; priceHeaders?: [string, string]; items: MenuItem[] }[];'
content = content.replace(old_type, new_type)

# Update whiskey subsections
subsections_to_update = [
    ('title: "Single Malt Whiskey",', 'title: "Single Malt Whiskey",\n          priceHeaders: ["IMP", "BOTTLE"],'),
    ('title: "Blended Scotch Whiskey",', 'title: "Blended Scotch Whiskey",\n          priceHeaders: ["IMP", "BOTTLE"],'),
    ('title: "Bourbon Whiskey",', 'title: "Bourbon Whiskey",\n          priceHeaders: ["IMP", "BOTTLE"],'),
    ('title: "Domestic Whiskey",', 'title: "Domestic Whiskey",\n          priceHeaders: ["DOM", "BOTTLE"],'),
]

for old, new in subsections_to_update:
    content = content.replace(old, new)

with open(file_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

print("Successfully updated menuData.ts")
