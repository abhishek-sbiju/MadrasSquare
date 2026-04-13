export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  priceDom?: string;
  priceImp?: string;
  priceGlass?: string;
  priceBottle?: string;
  price300?: string;
  price650?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  priceHeaders?: [string, string];
  items: MenuItem[];
  subsections?: { title: string; items: MenuItem[] }[];
}

export const menuSections: MenuSection[] = [
  {
    id: "cocktails",
    title: "Cocktails",
    priceHeaders: ["DOM", "IMP"],
    items: [
      { name: "Whiskey Sour", description: "whiskey, lemon juice, egg white, simple syrup", priceDom: "550", priceImp: "750" },
      { name: "Cosmopolitan", description: "vodka, lemon juice, triple sec, cranberry juice", priceDom: "550", priceImp: "750" },
      { name: "Mojito", description: "white rum, soda, lime, mint", priceDom: "550", priceImp: "750" },
      { name: "Classic Daiquiry", description: "white rum, lime juice, simple syrup", priceDom: "550", priceImp: "750" },
      { name: "Pinacolada", description: "white rum, pineapple juice, coconut cream, simple syrup", priceDom: "550", priceImp: "750" },
      { name: "Bloody Mary", description: "tomato juice, vodka, tabasco, worcestershire sauce, lime juice, crushed black pepper, mint", priceDom: "550", priceImp: "750" },
      { name: "Espresso Martini", description: "vodka, khalua, simple syrup, espresso", priceDom: "550", priceImp: "750" },
      { name: "Strawberry Mojito", description: "white rum, soda, lime, mint, strawberry, simple syrup", priceDom: "550", priceImp: "750" },
      { name: "Margarita", description: "tequila, triple sec, lime juice", priceImp: "750" },
      { name: "Old Fashioned", description: "bourbon whiskey, angostura bitters, sugar cubes", priceImp: "750" },
      { name: "Tequila Sunrise", description: "tequila, orange juice, grenadine syrup", priceImp: "750" },
      { name: "Smokey Jack", description: "bourbon whiskey, maple syrup, orange skin twist", priceImp: "750" },
      { name: "Wow", description: "vodka, watermelon chunks, elder flower syrup, lime juice", priceImp: "750" },
      { name: "Jewel Set", description: "vodka, white rum, gin, lime juice, guava juice, grenadine syrup, lime", priceImp: "750" },
      { name: "Moscow Mule", description: "vodka, lime juice, ginger beer", priceDom: "600", priceImp: "750" },
      { name: "Gimlet", description: "gin, lime juice, simple syrup", priceImp: "750" },
      { name: "Hot Toddy", description: "brandy, whiskey, honey, lime, clove, cinnamon", priceDom: "550", priceImp: "750" },
      { name: "LIIT", description: "white rum, tequila, gin, vodka, triple sec, lime juice, coke", priceImp: "650" },
      { name: "Gin Fizz", description: "gin, lime wedges, tonic water, basil leaves", priceImp: "750" },
      { name: "Penicillin", description: "whiskey, lemon juice, honey ginger syrup, lemon peel", priceDom: "550", priceImp: "750" },
      { name: "Passion Fruit Martini", description: "vodka, passion fruit syrup, lime, simple syrup", priceDom: "600", priceImp: "750" },
      { name: "Clover Club", description: "gin, lime juice, egg white, raspberry syrup", priceImp: "750" },
      { name: "Side Car", description: "brandy cognac, cointreau, lime juice, orange twist", priceImp: "750" },
    ],
  },
  {
    id: "mocktails",
    title: "Mocktails",
    items: [
      { name: "Lime Mint Cooler", price: "200" },
      { name: "Strawberry Basil Crush", price: "200" },
      { name: "Kokum Sherbat", price: "200" },
      { name: "Litchi Lemonade", price: "200" },
      { name: "Pomegranate Mojito", price: "250" },
      { name: "Mango Mule", price: "275" },
    ],
  },
  {
    id: "milkshakes",
    title: "Milkshake",
    items: [
      { name: "S'mores", price: "250" },
      { name: "Salted Caramel", price: "250" },
      { name: "Nutella", price: "250" },
    ],
  },
  {
    id: "hot-beverages",
    title: "Hot Beverages",
    items: [
      { name: "Espresso", price: "120" },
      { name: "Double Espresso", price: "240" },
      { name: "Macchiato", price: "120" },
      { name: "Cappuccino", price: "200" },
      { name: "Latte", price: "200" },
      { name: "Piccolo", price: "180" },
      { name: "Americano", price: "180" },
      { name: "Black Tea - Milk/Lime", price: "160" },
      { name: "Green Tea / Earl Grey", price: "160" },
      { name: "Herbal Tea", price: "160" },
      { name: "Hot Chocolate", price: "250" },
    ],
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages",
    items: [
      { name: "Frappe", description: "hazelnut/french vanilla/irish", price: "250" },
      { name: "Iced Tea", description: "lemon/peach", price: "200" },
      { name: "Floats", description: "coke/orange", price: "180" },
      { name: "San Pellegrino 250ml", price: "260" },
      { name: "Ice Cream Soda", price: "180" },
      { name: "Water Bottle 1L", price: "35" },
    ],
  },
  {
    id: "pitchers",
    title: "Pitchers",
    items: [
      { name: "Whiskey Sour", description: "whiskey, lemon juice, egg white, simple syrup", price: "1750" },
      { name: "Cosmopolitan", description: "vodka, lemon juice, triple sec, cranberry juice", price: "1750" },
      { name: "Mojito", description: "white rum, soda, lime, mint", price: "1750" },
      { name: "LIIT", description: "white rum, tequila, gin, vodka, triple sec, lime juice, coke", price: "2200" },
    ],
  },
  {
    id: "shooters",
    title: "Shooters",
    priceHeaders: ["DOM", "IMP"],
    items: [
      { name: "Blue Kamikaze", description: "vodka, blue curacao, lime", priceDom: "350", priceImp: "700" },
      { name: "B52", description: "baileys, khalua, cointreau", priceImp: "700" },
      { name: "Jagerbomb", description: "jegermeister, red bull", priceImp: "710" },
      { name: "Big Bang", description: "rum, orange juice, pineapple juice, simple syrup, triple sec, bitters", priceDom: "350", priceImp: "710" },
    ],
  },
  {
    id: "whiskey",
    title: "Whiskey",
    items: [],
    subsections: [
      {
        title: "Single Malt Whiskey",
        items: [
          { name: "The Glenlivet 12 YO", price: "700" },
          { name: "Glenfiddich 12 YO", price: "750" },
          { name: "Glenfiddich 15 YO", price: "850" },
          { name: "Talisker 10 YO", price: "700" },
          { name: "Laphroaig 10 YO", price: "650" },
          { name: "Bowmore 12 YO", price: "600" },
          { name: "Singleton", price: "550" },
          { name: "Aberfeldy 12 YO", price: "700" },
        ],
      },
      {
        title: "Blended Scotch Whiskey",
        items: [
          { name: "Chivas Regal 12 YO", price: "600" },
          { name: "Chivas Regal 15 YO", price: "750" },
          { name: "Chivas Regal 18 YO", price: "800" },
          { name: "J.W Black Label", price: "550" },
          { name: "J.W Double Black", price: "575" },
          { name: "Ballantine Finest", price: "400" },
          { name: "Ballantine 12 YO", price: "550" },
          { name: "Monkey Shoulder", price: "600" },
          { name: "Dewars 12 YO", price: "500" },
          { name: "Dewars 15 YO", price: "600" },
          { name: "Dewars White Label", price: "450" },
          { name: "Teachers Highland Cream", price: "450" },
          { name: "Black and White", price: "400" },
          { name: "100 Pipers", price: "400" },
          { name: "Grants", price: "350" },
          { name: "J&B Rare", price: "350" },
          { name: "Jameson", price: "550" },
          { name: "Suntory Toki", price: "400" },
          { name: "Fort Glen", price: "350" },
        ],
      },
      {
        title: "Bourbon Whiskey",
        items: [
          { name: "Jack Daniels", price: "600" },
          { name: "Jim Beam", price: "450" },
          { name: "Jim Beam Black", price: "500" },
        ],
      },
      {
        title: "Domestic Whiskey",
        items: [
          { name: "Signature", price: "300" },
          { name: "Royal Challenge", price: "300" },
          { name: "Antiquity Blue", price: "345" },
        ],
      },
    ],
  },
  {
    id: "vodka",
    title: "Vodka",
    items: [
      { name: "Grey Goose", price: "600" },
      { name: "Absolut Blue", price: "450" },
      { name: "Smirnoff Red", price: "345" },
    ],
    subsections: [
      {
        title: "Domestic",
        items: [
          { name: "Eristoff", price: "300" },
        ],
      },
    ],
  },
  {
    id: "gin",
    title: "Gin",
    items: [
      { name: "Beefeater", price: "475" },
      { name: "Bombay Sapphire", price: "550" },
      { name: "Gordons", price: "450" },
      { name: "Tanqueray", price: "475" },
      { name: "Hendricks", price: "600" },
    ],
  },
  {
    id: "tequila",
    title: "Tequila",
    items: [
      { name: "Casco Viejo", price: "400" },
      { name: "Don Angel", price: "550" },
      { name: "Camino Real Blanco", price: "450" },
    ],
  },
  {
    id: "rum",
    title: "Rum",
    items: [
      { name: "Bacardi Reserva Ocho", price: "500" },
      { name: "Negrita Spiced Rum", price: "500" },
    ],
    subsections: [
      {
        title: "Domestic Rum",
        items: [
          { name: "Old Monk", price: "300" },
          { name: "Bacardi White", price: "300" },
          { name: "Bacardi Black", price: "300" },
        ],
      },
    ],
  },
  {
    id: "brandy",
    title: "Brandy",
    items: [
      { name: "Martell VS", price: "550" },
      { name: "Napolean XO", price: "400" },
      { name: "Tiffon", price: "575" },
      { name: "Meukow VS Cognac", price: "600" },
      { name: "Louis Baron VSOP", price: "500" },
      { name: "VSOP Napolean Gold", price: "400" },
    ],
    subsections: [
      {
        title: "Domestic Brandy",
        items: [
          { name: "VSOP Exshaw", price: "300" },
          { name: "Morpheus XO", price: "300" },
        ],
      },
    ],
  },
  {
    id: "liqueur",
    title: "Liqueur",
    items: [
      { name: "Kahlua", price: "500" },
      { name: "Baileys", price: "550" },
      { name: "Jagermeister", price: "600" },
      { name: "Jack Daniel Honey", price: "600" },
      { name: "Cointreau", price: "550" },
      { name: "Zappa Sambuca", price: "450" },
    ],
  },
  {
    id: "wine",
    title: "Wine",
    priceHeaders: ["Glass", "Bottle"],
    items: [
      { name: "Sula Satori", priceGlass: "600", priceBottle: "3000" },
      { name: "Sula Brut", priceGlass: "600", priceBottle: "4200" },
      { name: "Sula Sauvignon Blanc", priceGlass: "450", priceBottle: "2250" },
      { name: "Sula Dindori", priceGlass: "450", priceBottle: "2250" },
      { name: "J'noon Red", priceGlass: "1400", priceBottle: "8000" },
      { name: "J'noon White", priceGlass: "1100", priceBottle: "5500" },
      { name: "Jacob's Creek Chardonnay", priceGlass: "800", priceBottle: "4000" },
      { name: "Jacob's Creek Shiraz", priceGlass: "800", priceBottle: "4000" },
      { name: "Jacob's Creek Merlot", priceGlass: "800", priceBottle: "4000" },
      { name: "Just Roberto Merlot", priceGlass: "550", priceBottle: "2750" },
      { name: "Camas Merlot", priceGlass: "800", priceBottle: "4000" },
      { name: "Lindeman's Chardonnay", priceGlass: "1200", priceBottle: "6000" },
      { name: "Camas Chardonnay", priceGlass: "800", priceBottle: "4000" },
    ],
    subsections: [
      {
        title: "Fratelli",
        items: [
          { name: "Merlot", priceGlass: "550", priceBottle: "2750" },
          { name: "Chardonnay", priceGlass: "550", priceBottle: "2700" },
          { name: "Shiraz", priceGlass: "400", priceBottle: "2000" },
          { name: "Cabernet Sauvignon", priceGlass: "550", priceBottle: "2750" },
          { name: "Chenin Blanc", priceGlass: "500", priceBottle: "2600" },
          { name: "Sette", priceGlass: "800", priceBottle: "4000" },
          { name: "Sangiovese", priceGlass: "580", priceBottle: "2900" },
          { name: "Sauvignon Blanc", priceGlass: "500", priceBottle: "2600" },
          { name: "Sparkling Noi", priceGlass: "600", priceBottle: "3200" },
          { name: "Sangria Glass/Pitcher", priceGlass: "580", priceBottle: "2750" },
        ],
      },
    ],
  },
  {
    id: "beer",
    title: "Beer",
    items: [],
    subsections: [
      {
        title: "Imported (on availability)",
        items: [
          { name: "Heineken 330 ML", price: "650" },
          { name: "Corona 330 ML", price: "650" },
          { name: "Hoegaarden 330 ML", price: "650" },
          { name: "Hopper Wit Bier 330ML", price: "550" },
          { name: "Brunonia 500 ML", price: "600" },
          { name: "Bhutanese 330 ML", price: "550" },
          { name: "Buho 500 ML", price: "550" },
        ],
      },
      {
        title: "Domestic",
        items: [
          { name: "Kingfisher", price300: "260", price650: "400" },
          { name: "Kingfisher Blue", price300: "260", price650: "400" },
          { name: "British Empire", price300: "260", price650: "400" },
          { name: "Sterren", price300: "260", price650: "400" },
          { name: "Carlsberg Elephant", price650: "400" },
          { name: "Tuborg Super Strong", price650: "400" },
        ],
      },
      {
        title: "Draught",
        items: [
          { name: "Kingfisher Draught 330 ML", price: "240" },
          { name: "Kingfisher Draught Pitcher 1.5 L", price: "1200" },
          { name: "Kingfisher Draught Tower 3L", price: "2300" },
        ],
      },
    ],
  },
  {
    id: "mixers",
    title: "Mixers",
    items: [
      { name: "Coke/Sprite/Fanta", price: "105" },
      { name: "Soda", price: "115" },
      { name: "Tonic Water", price: "120" },
      { name: "Red Bull", price: "195" },
      { name: "Orange/Litchi", price: "95" },
      { name: "Cranberry/Guava", price: "95" },
      { name: "Apple/Pineapple" },
    ],
  },
];
