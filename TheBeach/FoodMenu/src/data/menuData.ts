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
  subsections?: { title: string; priceHeaders?: [string, string]; items: MenuItem[] }[];
}

const rawMenuSections: MenuSection[] = [
  {
      id: "cocktails",
      title: "Cocktails",
      priceHeaders: [
        "DOM",
        "IMP",
      ],
      items: [
        {
          name: "Whiskey Sour",
          description: "Whiskey, lemon juice, egg white, simple syrup",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Cosmopolitan",
          description: "Vodka, lemon juice, triple sec, cranberry juice",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Mojito",
          description: "White rum, soda, lime, mint, sugar syrup",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Classic Daiquiri",
          description: "White rum, lime juice, simple syrup",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Pina Colada",
          description: "White rum, pineapple juice, coconut cream,simple syrup",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Bloody Mary",
          description: "Vodka, tomato juice, tabasco, worcestershire sauce,lime juice,crushed black pepper mint",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Strawberry Mojito",
          description: "White rum, soda, lime, mint, strawberry, simple syrup",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Margarita",
          description: "Tequila, triple sec, lime juice",
          priceImp: "780",
        },
        {
          name: "Old Fashioned",
          description: "Bourbon whiskey, bitters, sugar cubes",
          priceImp: "780",
        },
        {
          name: "Tequila Sunrise",
          description: "Tequila, orange juice, grenadine syrup",
          priceImp: "780",
        },
        {
          name: "Smokey Jack",
          description: "Bourbon whiskey, maple syrup, orange skin twist",
          priceImp: "780",
        },
        {
          name: "WOW",
          description: "Vodka, watermelon chunks, elder flower syrup, lime juice",
          priceImp: "780",
        },
        {
          name: "Jewel Set",
          description: "Vodka, white rum, gin, lime juice, guava juice,grenadine syrup,lime",
          priceImp: "780",
        },
        {
          name: "Moscow Mule",
          description: "Vodka, lime juice, ginger beer, ginger syrup",
          priceDom: "600",
          priceImp: "780",
        },
        {
          name: "Gimlet",
          description: "Gin, lime juice, simple syrup",
          priceImp: "780",
        },
        {
          name: "Hot Toddy",
          description: "Brandy/whiskey, honey, lime, cloves, cinnamon",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Long Island Iced Tea",
          description: "White rum, tequila, gin, vodka, triple sec, lime juice,coke",
          priceImp: "900",
        },
        {
          name: "Gin Fizz",
          description: "Gin, lime wedges, tonic water, basil leaves",
          priceImp: "780",
        },
        {
          name: "Penicillin",
          description: "Whiskey, lemon juice, honey ginger syrup, lemon peel",
          priceDom: "580",
          priceImp: "780",
        },
        {
          name: "Passion Fruit Martini",
          description: "Vodka, passion fruit syrup, lime, soda",
          priceImp: "850",
        },
        {
          name: "Heat Cooler",
          description: "Vodka, blood orange, luxardo cherry syrup, lemon juice",
          priceImp: "780",
        },
        {
          name: "New York Sour",
          description: "Bourbon whiskey, lime juice, simple syrup, red wine",
          priceImp: "800",
        },
        {
          name: "Jack Frost",
          description: "Vodka, pineapple juice, blue curacao",
          priceImp: "780",
        },
        {
          name: "Madras Magic",
          description: "Vodka, fresh chilli, cilantro, lime juice, simple syrup",
          priceImp: "780",
        },
      ],
    },
  {
      id: "mocktails",
      title: "Mocktails",
      items: [
        {
          name: "Floral Shangria",
          price: "450",
        },
        {
          name: "Minty Lime Spark",
          price: "340",
        },
        {
          name: "Strawberry Basil Crush",
          price: "340",
        },
        {
          name: "Tropical Tang",
          price: "340",
        },
        {
          name: "Litchi Lemonade",
          price: "340",
        },
        {
          name: "Pomegranate Mojito",
          price: "340",
        },
        {
          name: "Mango Thunder",
          price: "340",
        },
        {
          name: "Pink Guava Fizz",
          price: "340",
        },
        {
          name: "Summer Splash",
          price: "340",
        },
        {
          name: "Mango Hibiscus Elixir",
          price: "380",
        },
      ],
    },
  {
      id: "milkshakes",
      title: "Milkshakes",
      items: [
        {
          name: "Smores",
          price: "400",
        },
        {
          name: "Salted Caramel",
          price: "420",
        },
        {
          name: "Nutella",
          price: "440",
        },
      ],
    },
  {
      id: "hot-beverages",
      title: "Hot Beverages",
      items: [
        {
          name: "Espresso",
          price: "100",
        },
        {
          name: "Double Espresso",
          price: "160",
        },
        {
          name: "Macchiato",
          price: "140",
        },
        {
          name: "Cappuccino",
          price: "200",
        },
        {
          name: "Latte",
          price: "200",
        },
        {
          name: "Piccolo",
          price: "200",
        },
        {
          name: "Americano",
          price: "180",
        },
        {
          name: "Black Tea/Milk/Lime",
          price: "180",
        },
        {
          name: "Green Tea/Earl Gray",
          price: "180",
        },
        {
          name: "Hot Chocolate",
          price: "320",
        },
      ],
    },
  {
      id: "cold-beverages",
      title: "Cold Beverages",
      items: [
        {
          name: "Frappe",
          price: "380",
        },
        {
          name: "Iced Tea",
          price: "320",
        },
        {
          name: "Floats",
          price: "320",
        },
        {
          name: "Water Bottle 1L",
          price: "20",
        },
      ],
    },
  {
      id: "pitchers",
      title: "Pitchers",
      items: [
        {
          name: "Whiskey Sour Pitcher",
          description: "Whiskey, lemon juice, egg white, simple syrup",
          price: "1950",
        },
        {
          name: "Cosmopolitan Pitcher",
          description: "Vodka, lemon juice, triple sec, cranberry juice",
          price: "1950",
        },
        {
          name: "Mojito Pitcher",
          description: "White rum, soda, lime, mint, sugar syrup",
          price: "1950",
        },
        {
          name: "Long Island Iced Tea Pitcher",
          description: "White rum, tequila, gin, vodka, triple sec, lime juice,coke",
          price: "2800",
        },
      ],
    },
  {
      id: "shooters",
      title: "Shooters",
      priceHeaders: [
        "DOM",
        "IMP",
      ],
      items: [
        {
          name: "Blue Kamikaze",
          description: "Vodka, blue curacao, lime",
          priceDom: "400",
          priceImp: "700",
        },
        {
          name: "B52",
          description: "Baileys, kahlua, cointreau",
          priceImp: "800",
        },
        {
          name: "Jagerbomb",
          description: "Jagermeister, red bull",
          priceImp: "710",
        },
        {
          name: "Big Bang",
          description: "Rum, orange juice, pineapple juice, simple syrup, triple sec, bitters",
          priceImp: "710",
        },
        {
          name: "Sugar Daddy",
          description: "Sugar cane syrup, dark rum, lime juice",
          priceImp: "650",
        },
      ],
    },
  {
      id: "whiskey",
      title: "Whiskey",
      items: [
      ],
      priceHeaders: [
        "Peg",
        "Bottle",
      ],
      subsections: [
        {
          title: "Single Malt Whiskey",
          priceHeaders: ["IMP", "BOTTLE"],
          items: [
            {
              name: "Glenlivet 12 Yrs",
              priceGlass: "780",
              priceBottle: "16500",
            },
            {
              name: "Glenfiddich 12 Yrs",
              priceGlass: "780",
              priceBottle: "16500",
            },
            {
              name: "Glenfiddich 15 Yrs",
              priceGlass: "880",
              priceBottle: "18000",
            },
            {
              name: "Talisker 10 Yrs",
              priceGlass: "780",
              priceBottle: "16500",
            },
            {
              name: "Laphroaig 10 Yrs",
              priceGlass: "780",
              priceBottle: "16500",
            },
            {
              name: "Bowmore 12 Yrs",
              priceGlass: "650",
              priceBottle: "14500",
            },
            {
              name: "Singleton",
              priceGlass: "780",
              priceBottle: "16500",
            },
            {
              name: "Aberfeldy 12 Yrs",
              priceGlass: "650",
              priceBottle: "14500",
            },
          ],
        },
        {
          title: "Blended Scotch Whiskey",
          priceHeaders: ["IMP", "BOTTLE"],
          items: [
            {
              name: "Chivas Regal 12 Yrs",
              priceGlass: "650",
              priceBottle: "14000",
            },
            {
              name: "Chivas Regal 15 Yrs",
              priceGlass: "750",
              priceBottle: "17750",
            },
            {
              name: "Chivas Regal 18 Yrs",
              priceGlass: "800",
              priceBottle: "18500",
            },
            {
              name: "JW Black Label",
              priceGlass: "600",
              priceBottle: "11000",
            },
            {
              name: "JW Double Black",
              priceGlass: "700",
              priceBottle: "16000",
            },
            {
              name: "Ballantine Finest",
              priceGlass: "450",
              priceBottle: "7500",
            },
            {
              name: "Ballantine 12 Yrs",
              priceGlass: "550",
              priceBottle: "10000",
            },
            {
              name: "Monkey Shoulder",
              priceGlass: "650",
              priceBottle: "14500",
            },
            {
              name: "Dewars 12 Yrs",
              priceGlass: "400",
              priceBottle: "7500",
            },
            {
              name: "Dewars 15 Yrs",
              priceGlass: "400",
              priceBottle: "8000",
            },
            {
              name: "Dewars White Label",
              priceGlass: "400",
              priceBottle: "7500",
            },
            {
              name: "Teachers Highland Cream",
              priceGlass: "550",
              priceBottle: "9000",
            },
            {
              name: "Black and White",
              priceGlass: "440",
              priceBottle: "6000",
            },
            {
              name: "100 Pipers",
              priceGlass: "500",
              priceBottle: "6500",
            },
            {
              name: "Grants",
              priceGlass: "350",
              priceBottle: "6000",
            },
            {
              name: "J&B Rare",
              priceGlass: "400",
              priceBottle: "7000",
            },
            {
              name: "Jameson",
              priceGlass: "550",
              priceBottle: "12500",
            },
            {
              name: "Suntory Toki",
              priceGlass: "630",
              priceBottle: "14000",
            },
            {
              name: "Fort Glen",
              priceGlass: "350",
              priceBottle: "7500",
            },
            {
              name: "VAT 69",
              priceGlass: "350",
              priceBottle: "6000",
            },
            {
              name: "Jameson Black Barrel",
              priceGlass: "550",
              priceBottle: "12500",
            },
            {
              name: "Tamerlane",
              priceGlass: "350",
              priceBottle: "6000",
            },
            {
              name: "Iwai",
              priceGlass: "550",
              priceBottle: "12000",
            },
          ],
        },
        {
          title: "Bourbon Whiskey",
          priceHeaders: ["IMP", "BOTTLE"],
          items: [
            {
              name: "Jack Daniels",
              priceGlass: "600",
              priceBottle: "13000",
            },
            {
              name: "Jim Beam",
              priceGlass: "450",
            },
            {
              name: "Jim Beam Black",
              priceGlass: "500",
              priceBottle: "10500",
            },
          ],
        },
        {
          title: "Domestic Whiskey",
          priceHeaders: ["DOM", "BOTTLE"],
          items: [
            {
              name: "Signature",
              priceGlass: "400",
              priceBottle: "4500",
            },
            {
              name: "Royal Challenge",
              priceGlass: "400",
              priceBottle: "4500",
            },
            {
              name: "Antiquity Blue",
              priceGlass: "350",
              priceBottle: "4500",
            },
          ],
        },
      ],
    },
  {
      id: "vodka",
      title: "Vodka",
      priceHeaders: [
        "Peg",
        "Bottle",
      ],
      items: [
        {
          name: "Grey Goose",
          priceGlass: "650",
          priceBottle: "14500",
        },
        {
          name: "Absolut Blue",
          priceGlass: "400",
          priceBottle: "7000",
        },
        {
          name: "Ketel One",
          priceGlass: "400",
          priceBottle: "7000",
        },
        {
          name: "Smirnoff Red",
          priceGlass: "400",
          priceBottle: "7000",
        },
        {
          name: "Juno",
          priceGlass: "300",
          priceBottle: "4000",
        },
      ],
    },
  {
      id: "gin",
      title: "Gin",
      priceHeaders: [
        "Peg",
        "Bottle",
      ],
      items: [
        {
          name: "Beefeater",
          priceGlass: "440",
          priceBottle: "6500",
        },
        {
          name: "Bombay Sapphire",
          priceGlass: "500",
          priceBottle: "7500",
        },
        {
          name: "Gordons",
          priceGlass: "440",
          priceBottle: "6500",
        },
        {
          name: "Tanqueray",
          priceGlass: "500",
          priceBottle: "7500",
        },
        {
          name: "Hendricks",
          priceGlass: "650",
          priceBottle: "14500",
        },
        {
          name: "Roku",
          priceGlass: "700",
          priceBottle: "16000",
        },
      ],
    },
  {
      id: "tequila",
      title: "Tequila",
      priceHeaders: [
        "Peg",
        "Bottle",
      ],
      items: [
        {
          name: "Casco Viejo",
          priceGlass: "550",
          priceBottle: "10500",
        },
        {
          name: "Castillo",
          priceGlass: "500",
          priceBottle: "9500",
        },
        {
          name: "Don Angel",
          priceGlass: "500",
          priceBottle: "10500",
        },
        {
          name: "Camino Real Blanco",
          priceGlass: "550",
          priceBottle: "10500",
        },
      ],
    },
  {
      id: "rum",
      title: "Rum",
      priceHeaders: [
        "Peg",
        "Bottle",
      ],
      items: [
        {
          name: "Bacardi Reserva Ocho",
          priceGlass: "600",
          priceBottle: "12000",
        },
        {
          name: "Negrita Spiced Rum",
          priceGlass: "400",
          priceBottle: "7000",
        },
        {
          name: "Old Monk",
          priceGlass: "350",
          priceBottle: "4000",
        },
        {
          name: "Bacardi White",
          priceGlass: "350",
          priceBottle: "4000",
        },
        {
          name: "Bacardi Black",
          priceGlass: "350",
          priceBottle: "4000",
        },
      ],
    },
  {
      id: "brandy",
      title: "Brandy",
      priceHeaders: [
        "Peg",
        "Bottle",
      ],
      items: [
        {
          name: "Martel VS",
          priceGlass: "600",
          priceBottle: "13000",
        },
        {
          name: "Napoleon XO",
          priceGlass: "400",
          priceBottle: "6000",
        },
        {
          name: "Meukow VS Cognac",
          priceGlass: "500",
          priceBottle: "7000",
        },
        {
          name: "Louis Baron VSOP",
          priceGlass: "600",
          priceBottle: "9500",
        },
        {
          name: "VSOP Napoleon Gold",
          priceGlass: "400",
          priceBottle: "6000",
        },
        {
          name: "VSOP Exshaw",
          priceGlass: "350",
          priceBottle: "3500",
        },
        {
          name: "Morpheus",
          priceGlass: "350",
          priceBottle: "4000",
        },
      ],
    },
  {
      id: "liquor",
      title: "Liquor",
      priceHeaders: [
        "Peg",
        "Bottle",
      ],
      items: [
        {
          name: "Kahlua",
          priceGlass: "500",
          priceBottle: "9200",
        },
        {
          name: "Baileys",
          priceGlass: "550",
          priceBottle: "9800",
        },
        {
          name: "Jagermeister",
          priceGlass: "600",
          priceBottle: "12500",
        },
        {
          name: "Jack Daniel Honey",
          priceGlass: "600",
          priceBottle: "13700",
        },
        {
          name: "Cointreau",
          priceGlass: "550",
          priceBottle: "10800",
        },
        {
          name: "Zappa Sambuca",
          priceGlass: "450",
          priceBottle: "9700",
        },
      ],
    },
  {
      id: "wine",
      title: "Wine",
      priceHeaders: [
        "Glass",
        "Bottle",
      ],
      items: [
        {
          name: "Jacobs Creek Chardonnay",
          priceGlass: "1200",
          priceBottle: "5500",
        },
        {
          name: "Jacobs Creek Shiraz",
          priceGlass: "1200",
          priceBottle: "5500",
        },
        {
          name: "Jacobs Creek Merlot",
          priceGlass: "1200",
          priceBottle: "5500",
        },
        {
          name: "Just Roberto Merlot",
          priceGlass: "850",
          priceBottle: "4000",
        },
        {
          name: "Camas Merlot",
          priceGlass: "850",
          priceBottle: "4000",
        },
        {
          name: "Lindemans Chardonnay",
          priceGlass: "1200",
          priceBottle: "5000",
        },
        {
          name: "Camas Chardonnay",
          priceGlass: "850",
          priceBottle: "4000",
        },
        {
          name: "Black Tower Riesling",
          priceGlass: "900",
          priceBottle: "4500",
        },
        {
          name: "Black Tower Pinot Noir",
          priceGlass: "900",
          priceBottle: "4500",
        },
        {
          name: "Fratelli Merlot",
          priceGlass: "600",
          priceBottle: "3000",
        },
        {
          name: "Fratelli Chardonnay",
          priceGlass: "600",
          priceBottle: "3000",
        },
        {
          name: "Fratelli Shiraz",
          priceGlass: "600",
          priceBottle: "3000",
        },
        {
          name: "Fratelli Cabernet Sauvignon",
          priceGlass: "600",
          priceBottle: "3000",
        },
        {
          name: "Fratelli Chenin Blanc",
          priceGlass: "600",
          priceBottle: "3000",
        },
        {
          name: "Fratelli Sette",
          priceGlass: "800",
          priceBottle: "4000",
        },
        {
          name: "Fratelli Sangiovese",
          priceGlass: "580",
          priceBottle: "2900",
        },
        {
          name: "Fratelli Sauvignon Blanc",
          priceGlass: "580",
          priceBottle: "2900",
        },
        {
          name: "Fratelli Sparkling",
          priceGlass: "600",
          priceBottle: "3200",
        },
        {
          name: "Sangria Glass/Pitcher",
          priceGlass: "650",
          priceBottle: "3250",
        },
      ],
    },
  {
      id: "beer",
      title: "Beer",
      items: [
      ],
      subsections: [
        {
          title: "Imported",
          items: [
            {
              name: "Taiwan Beer 500ml",
              price: "700",
            },
            {
              name: "Oettinger 500ml",
              price: "700",
            },
            {
              name: "Heineken",
              price: "700",
            },
            {
              name: "Butanese",
              price: "700",
            },
            {
              name: "Buhо",
              price: "700",
            },
            {
              name: "Carlsberg Elephant",
              price: "500",
            },
            {
              name: "Tuborg Super Strong",
              price: "500",
            },
          ],
        },
        {
          title: "Domestic",
          items: [
            {
              name: "Kingfisher",
              price300: "300",
              price650: "500",
            },
            {
              name: "Kingfisher Blue",
              price300: "300",
              price650: "500",
            },
            {
              name: "British Empire",
              price300: "300",
              price650: "500",
            },
            {
              name: "Sterren",
              price300: "300",
              price650: "500",
            },
          ],
        },
        {
          title: "Draught",
          items: [
            {
              name: "Kingfisher Draught 330ml",
              price: "280",
            },
            {
              name: "Kingfisher Draught Pitcher 1.5L",
              price: "1350",
            },
            {
              name: "Kingfisher Draught Tower 3L",
              price: "2500",
            },
          ],
        },
      ],
    },
  {
      id: "mixers",
      title: "Mixers",
      items: [
        {
          name: "Coke/Sprite/Fanta",
          price: "140",
        },
        {
          name: "Soda",
          price: "120",
        },
        {
          name: "Tonic Water",
          price: "210",
        },
        {
          name: "Ginger Ale",
          price: "210",
        },
        {
          name: "Red Bull",
          price: "290",
        },
        {
          name: "Orange/Litchi",
          price: "200",
        },
        {
          name: "Cranberry/Guava",
          price: "250",
        },
        {
          name: "Apple/Pineapple",
          price: "200",
        },
      ],
    }
];

const menuSectionOrder = [
  "cocktails",
  "pitchers",
  "whiskey",
  "vodka",
  "gin",
  "tequila",
  "rum",
  "brandy",
  "liquor",
  "shooters",
  "beer",
  "wine",
  "mixers",
  "mocktails",
  "milkshakes",
  "cold-beverages",
  "hot-beverages",
] as const;

const whiskeySubsectionOrder = [
  "Single Malt Whiskey",
  "Blended Scotch Whiskey",
  "Bourbon Whiskey",
  "Domestic Whiskey",
] as const;

const menuSectionOrderMap = new Map(menuSectionOrder.map((id, index) => [id, index]));
const whiskeySubsectionOrderMap = new Map(
  whiskeySubsectionOrder.map((title, index) => [title, index]),
);

export const menuSections: MenuSection[] = rawMenuSections
  .map((section) => {
    if (section.id !== "whiskey" || !section.subsections) {
      return section;
    }

    return {
      ...section,
      subsections: [...section.subsections].sort((a, b) => {
        const left = whiskeySubsectionOrderMap.get(a.title) ?? Number.MAX_SAFE_INTEGER;
        const right = whiskeySubsectionOrderMap.get(b.title) ?? Number.MAX_SAFE_INTEGER;
        return left - right;
      }),
    };
  })
  .sort((a, b) => {
    const left = menuSectionOrderMap.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const right = menuSectionOrderMap.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return left - right;
  });
