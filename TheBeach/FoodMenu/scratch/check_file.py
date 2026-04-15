import os

file_path = r'c:\Users\abhis\Downloads\PROJECTS\Webs\MadrasSquare\TheBeach\DrinkMenu\src\data\menuData.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines[:30]):
    print(f"{i+1}: {repr(line)}")

for i, line in enumerate(lines[365:375]):
    print(f"{366+i}: {repr(line)}")
