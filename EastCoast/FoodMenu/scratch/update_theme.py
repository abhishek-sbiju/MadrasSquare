import os, re

base = "c:/Users/abhis/Downloads/PROJECTS/Webs/MadrasSquare/EastCoast"

for menu in ["FoodMenu", "DrinkMenu", "BanquetMenu"]:
    path = os.path.join(base, menu, "index.html")
    if not os.path.exists(path):
        print(f"Not found: {path}")
        continue
    
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Update theme-color to dark charcoal
    content = re.sub(r'theme-color"\s+content="[^"]*"', 'theme-color" content="#131517"', content)
    content = content.replace('color-scheme" content="light"', 'color-scheme" content="dark"')
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Updated {menu}/index.html")
