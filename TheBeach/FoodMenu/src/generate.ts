import fs from 'fs';
import { menuCategories } from './data/menuData';

let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Beach - Food Menu</title>
    <link rel="stylesheet" href="demo-menu.css">
</head>
<body>
    <header class="header">
        <h1>THE BEACH</h1>
        <p>Premium Digital Menu</p>
    </header>
    <main class="menu-container">
`;

menuCategories.forEach(category => {
    html += `\n        <section class="menu-section" id="${category.id}">\n`;
    html += `            <h2 class="category-title">${category.title}</h2>\n`;
    if (category.description) {
        html += `            <p class="category-desc">${category.description}</p>\n`;
    }

    if (category.subCategories) {
        category.subCategories.forEach(sub => {
            html += `            <div class="sub-category">\n`;
            html += `                <h3 class="sub-title">${sub.name}</h3>\n`;
            html += `                <div class="items-grid">\n`;
            sub.items.forEach(item => {
                html += `                    <div class="menu-item">\n`;
                html += `                        <div class="item-header">\n`;
                html += `                            <span class="item-name">${item.name}</span>\n`;
                html += `                            <span class="item-price">${item.price}</span>\n`;
                html += `                        </div>\n`;
                if (item.description) html += `                        <p class="item-desc">${item.description}</p>\n`;
                if (item.variants) html += `                        <p class="item-variants">${item.variants}</p>\n`;
                html += `                    </div>\n`;
            });
            html += `                </div>\n`;
            html += `            </div>\n`;
        });
    } else if (category.items) {
        html += `            <div class="items-grid">\n`;
        category.items.forEach(item => {
            html += `                <div class="menu-item">\n`;
            html += `                    <div class="item-header">\n`;
            html += `                        <span class="item-name">${item.name}</span>\n`;
            html += `                        <span class="item-price">${item.price}</span>\n`;
            html += `                    </div>\n`;
            if (item.description) html += `                    <p class="item-desc">${item.description}</p>\n`;
            if (item.variants) html += `                    <p class="item-variants">${item.variants}</p>\n`;
            html += `                </div>\n`;
        });
        html += `            </div>\n`;
    }
    
    html += `        </section>\n`;
});

html += `
    </main>
    <footer class="footer">
        <p>&copy; ${new Date().getFullYear()} The Beach. All rights reserved.</p>
    </footer>
</body>
</html>`;

fs.writeFileSync('public/demo-menu.html', html);
console.log('Generated demo-menu.html!');
