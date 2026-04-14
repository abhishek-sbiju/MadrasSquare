export interface MenuItem {
  name: string;
  description?: string;
  price?: string; // e.g. "Glass / Rs 690" layout
  diet?: 'veg' | 'non-veg';
  specialMessage?: string; // for "Special dish, extra charges"
}

export interface SubCategory {
  name: string;
  items: MenuItem[];
  subCategories?: SubCategory[]; // for deeper nesting if necessary
}

export interface MenuCategory {
  id: string;
  title: string;
  description?: string;
  categories?: SubCategory[];
  items?: MenuItem[];
}

export const banquetMenuData: MenuCategory[] = [
  {
    id: "mocktails",
    title: "MOCKTAILS",
    items: [
      { name: "LIME MINT COOLER", diet: "veg" },
      { name: "STRAWBERRY BASIL CRUSH", diet: "veg" },
      { name: "KOKUM SHERBET", diet: "veg" },
      { name: "LITCHI LEMONADE", diet: "veg" },
      { name: "LEMON ICED TEA", diet: "veg" },
      { name: "PEACH ICE TEA", diet: "veg" }
    ]
  },
  {
    id: "soups",
    title: "SOUPS",
    categories: [
      {
        name: "VEG",
        items: [
          { name: "HOT & SOUR", diet: "veg" },
          { name: "VEG CLEAR SOUP", diet: "veg" },
          { name: "SPINACH & CORN", diet: "veg" },
          { name: "LEMON CORIANDER", diet: "veg" },
          { name: "BROCOLLI & PESTO", diet: "veg" },
          { name: "MANCHOW", diet: "veg" }
        ]
      },
      {
        name: "NON VEG",
        items: [
          { name: "CHICKEN MANCHOW", diet: "non-veg" },
          { name: "TOM YUM CHICKEN", diet: "non-veg" },
          { name: "CLEAR CHICKEN", diet: "non-veg" },
          { name: "CHICKEN PESTO", diet: "non-veg" }
        ]
      }
    ]
  },
  {
    id: "salads",
    title: "SALADS",
    categories: [
      {
        name: "VEG",
        items: [
          { name: "STRAWBERRY FARM FRESH", diet: "veg" },
          { name: "WATERMELON & FETA", diet: "veg" },
          { name: "THAI RAW PAPAYA", diet: "veg" }
          // Removed CITRUS AND HONEY
        ]
      },
      {
        name: "NON VEG",
        items: [
          { name: "GRILLED PRAWN", diet: "non-veg" },
          { name: "CHICKEN HAWAIIAN", diet: "non-veg" },
          { name: "GRILLED CHICKEN SALAD", diet: "non-veg" }
        ]
      }
    ]
  },
  {
    id: "appetizers",
    title: "APPETIZERS",
    categories: [
      {
        name: "VEGETARIAN",
        items: [
          { name: "GRILLED FIGS & GOAT CHEESE", diet: "veg" },
          { name: "BELL PEPPER CHILLI CHEESE TOAST", diet: "veg" },
          { name: "FALAFEL WITH HUMMUS", diet: "veg" },
          { name: "SWEET CHILLI WEDGES", diet: "veg" },
          { name: "CRISPY BROCCOLI TACOS", diet: "veg" },
          { name: "PANEER TIKKA", diet: "veg" },
          { name: "STUFFED MUSHROOMS", diet: "veg" },
          { name: "MALAI BROCCOLI", diet: "veg" },
          { name: "OLIVE AND HUMMUS", diet: "veg" },
          { name: "BRUSCHETTA", diet: "veg" },
          { name: "SAMBOUSIK JIBNEH", diet: "veg" },
          { name: "CRISPY LOTUS STEM", diet: "veg" },
          { name: "TOMATO BRUSCHETTA", diet: "veg" },
          { name: "ALOO CHUTNEY WALA", diet: "veg" },
          { name: "HARA BARA KEBAB", diet: "veg" }
        ]
      },
      {
        name: "CHICKEN",
        items: [
          { name: "PANKO PARMESAN CHICKEN STRIPS", diet: "non-veg" },
          { name: "GARLIC PARMESAN CHICKEN", diet: "non-veg" },
          { name: "CHICKEN TIKKA", diet: "non-veg" },
          { name: "MURGH MALAI KEBAB", diet: "non-veg" },
          { name: "CHILLI SESAME KEBAB", diet: "non-veg" },
          { name: "CHILLI CHEESE CHICKEN TIKKA", diet: "non-veg" },
          { name: "KUNG PAO CHICKEN", diet: "non-veg" },
          { name: "BLACK PEPPER CHICKEN", diet: "non-veg" },
          { name: "DRAGON CHICKEN", diet: "non-veg" }
        ]
      },
      {
        name: "BEEF",
        items: [
          { name: "KOREAN BEEF STIR FRY", diet: "non-veg", specialMessage: "Special dish, extra charges" },
          { name: "ROASTED BEEF STIR FRY", diet: "non-veg", specialMessage: "Special dish, extra charges" }
        ]
      },
      {
        name: "SEA FOOD",
        items: [
          { name: "FISH FINGERS", diet: "non-veg" },
          { name: "RECHADO FISH WITH SOL KHADI", diet: "non-veg" },
          { name: "FISH TIKKA", diet: "non-veg" },
          { name: "KANTHARI FISH TIKKA", diet: "non-veg" },
          { name: "PAN FRIED CHILLI FISH", diet: "non-veg" },
          { name: "HERB GARLIC PRAWNS", diet: "non-veg" },
          { name: "TANDOORI JHINGA", diet: "non-veg" },
          { name: "ACHARI PRAWNS", diet: "non-veg" },
          { name: "BLACK PEPPER PRAWN CURRY BUTTER", diet: "non-veg" },
          { name: "GARLIC PRAWNS", diet: "non-veg" },
          { name: "THAI BASIL PRAWNS", diet: "non-veg" }
        ]
      }
    ]
  },
  {
    id: "mains-veg",
    title: "MAINS - VEGETARIAN",
    categories: [
      {
        name: "PASTAS",
        items: [
          { name: "PENNE ARRABIATA", diet: "veg" },
          { name: "MAC AND CHEESE", diet: "veg" },
          { name: "PESTO AL BASILICO", diet: "veg" },
          { name: "PASTA AGLIO E OLIO", diet: "veg" },
          { name: "FUNGI ALLA PANNA", diet: "veg" },
          { name: "VERDURE ALLA PANNA", diet: "veg" },
          { name: "PASTA SALSA ROSA", diet: "veg" }
        ]
      },
      {
        name: "PIZZAS",
        items: [
          { name: "PIZZA MARGHERITA", diet: "veg" },
          { name: "PIZZA VERDURE", diet: "veg" },
          { name: "PIZZA A LA FUNGI", diet: "veg" }
        ]
      },
      {
        name: "CONTINENTAL",
        items: [
          { name: "SEASONAL VEG BAKE", diet: "veg" },
          { name: "SPINACH AND CORN BAKE", diet: "veg" },
          { name: "VEGETABLE LASAGNA", diet: "veg" }
        ]
      },
      {
        name: "ASIAN",
        items: [
          { name: "THAI GREEN CURRY", diet: "veg" },
          { name: "THAI RED CURRY", diet: "veg" },
          { name: "CHILLI PANNER GRAVY", diet: "veg" },
          { name: "CHILLLI GOBI GRAVY", diet: "veg" }
        ]
      },
      {
        name: "INDIAN",
        items: [
          { name: "VEG KOHALAPURI", diet: "veg" },
          { name: "MALAI KOFTA", diet: "veg" },
          { name: "PANEER LABABDAR", diet: "veg" },
          { name: "MAKAI MATTAR MUSHROOM", diet: "veg" },
          { name: "KADAI MUSHROOM", diet: "veg" },
          { name: "KADAI PANEER", diet: "veg" },
          { name: "SABZI NIZAMI HANDI", diet: "veg" },
          { name: "DAL MAKHANI", diet: "veg" },
          { name: "DAL TADKA", diet: "veg" },
          { name: "DAL MAHARANI", diet: "veg" }
        ]
      },
      {
        name: "RICE & NOODLES",
        items: [
          { name: "CANTONESE FRIED RICE", diet: "veg" },
          { name: "THAI FRIED RICE", diet: "veg" },
          { name: "GARLIC FRIED RICE", diet: "veg" },
          { name: "CHAR KWAY TEOW", diet: "veg" },
          { name: "HAKKA NOODLES", diet: "veg" },
          { name: "PEAS PULAO", diet: "veg" },
          { name: "VEGETABLE PULAO", diet: "veg" },
          { name: "GHEE RICE", diet: "veg" },
          { name: "JEERA RICE", diet: "veg" },
          { name: "CURD RICE", diet: "veg" },
          { name: "STEAM RICE", diet: "veg" }
        ]
      },
      {
        name: "BREADS",
        items: [
          { name: "TANDOORI NAAN / ROTI", diet: "veg" },
          { name: "BUTTER NAAN / ROTI", diet: "veg" },
          { name: "GARLIC NAAN / ROTI", diet: "veg" },
          { name: "LACCHA PARATHA", diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "mains-nonveg",
    title: "MAINS - NON VEGETARIAN",
    categories: [
      {
        name: "PASTAS",
        items: [
          { name: "PENNE ARRABIATA POLLO", diet: "non-veg" },
          { name: "POLLO ALLA PANNA", diet: "non-veg" }
        ]
      },
      {
        name: "PIZZAS",
        items: [
          { name: "PIZZA ALLA POLLO", diet: "non-veg" },
          { name: "PIZZA SALSICCIA", diet: "non-veg" }
        ]
      },
      {
        name: "CONTINENTAL",
        items: [
          { name: "HERB BRAISED CHICKEN", diet: "non-veg" },
          { name: "CHICKEN, CORN AND BROCOLLI", diet: "non-veg" },
          { name: "HERB GRILLED CHICKEN STEAK", diet: "non-veg" },
          { name: "CURRY LEAF PESTO FISH", diet: "non-veg" },
          { name: "LEMON BUTTER FISH", diet: "non-veg" },
          { name: "SEAFOOD CASSEROLE", diet: "non-veg" }
        ]
      },
      {
        name: "ASIAN",
        items: [
          { name: "THAI GREEN CURRY - CHICKEN", diet: "non-veg" },
          { name: "THAI RED CURRY - CHICKEN", diet: "non-veg" },
          { name: "GUANGDONG CHICKEN", diet: "non-veg" },
          { name: "BLACK PEPPER CHICKEN GRAVY", diet: "non-veg" },
          { name: "CHILI CHICKEN GRAVY", diet: "non-veg" },
          { name: "BLACK PEPPER PRAWN GRAVY", diet: "non-veg" },
          { name: "CHILI GARLIC FISH GRAVY", diet: "non-veg" },
          { name: "CHILI GARLIC LAMB GRAVY", diet: "non-veg" }
        ]
      },
      {
        name: "INDIAN",
        items: [
          { name: "NIZAMI DUM MURGH", diet: "non-veg" },
          { name: "MURGH TIKKA MASALA", diet: "non-veg" },
          { name: "MURGH MAKHNI", diet: "non-veg" },
          { name: "MURGH DAWA LAHORI", diet: "non-veg" },
          { name: "MURGH BARTA", diet: "non-veg" },
          { name: "KADAI CHICKEN", diet: "non-veg" },
          { name: "SOUTH INDIAN FISH CURRY", diet: "non-veg" },
          { name: "PRAWN CURRY", diet: "non-veg" },
          { name: "GOSHT RAMPURI KORMA", diet: "non-veg" },
          { name: "MUTTON ROGAN JOSH", diet: "non-veg" }
        ]
      },
      {
        name: "RICE & NOODLES",
        items: [
          { name: "CANTONESE FRIED RICE CHICKEN", diet: "non-veg" },
          { name: "CANTONESE FRIED RICE PRAWN", diet: "non-veg" },
          { name: "THAI FRIED RICE PRAWN", diet: "non-veg" },
          { name: "THAI FRIED RICE CHICKEN", diet: "non-veg" },
          { name: "GARLIC FRIED RICE CHICKEN", diet: "non-veg" },
          { name: "PAD THAI NOODLES CHICKEN", diet: "non-veg" },
          { name: "CHAR KWAY TEOW CHICKEN", diet: "non-veg" },
          { name: "HAKKA NOODLES CHICKEN", diet: "non-veg" },
          { name: "HAKKA NOODLES PRAWN", diet: "non-veg" }
        ]
      }
    ]
  },
  {
    id: "desserts",
    title: "DESSERTS",
    categories: [
      {
        name: "GOURMET",
        items: [
          { name: "NYC STYLE VANILLA CHEESECAKE WITH STRAWBERRY CAMPOTE", diet: "veg" },
          { name: "TIRAMISU", diet: "veg" },
          { name: "CALLEBAUT BROWNIE", diet: "veg" },
          { name: "BELGIAN CHOCOLATE TRUFFLE", diet: "veg" },
          { name: "SPICED CARROT CAKE WITH CREAM CHEESE FROSTING", diet: "veg" },
          { name: "BANANA CAKE VANILLA BUTTER CREAM WITH SEASONAL FRUITS", diet: "veg" }
        ]
      },
      {
        name: "INDIAN",
        items: [
          { name: "GULAB JAMUN", diet: "veg" },
          { name: "JALEBI", diet: "veg" },
          { name: "CARROT HALWA", diet: "veg" }
        ]
      },
      {
        name: "ICE CREAMS",
        items: [
          { name: "GELATO VANILLA BEAN", diet: "veg" },
          { name: "ROSE MILK AND PISTA", diet: "veg" },
          { name: "SALTED CARAMEL AND PECAN", diet: "veg" },
          { name: "MILK CHOCOLATE AND BROWNIE", diet: "veg" },
          { name: "MASCARPONE AND RASPBERRY", diet: "veg" },
          { name: "MADAGASCAR CHOCOLATE", diet: "veg" },
          { name: "COFFEE HAZELNUT CRUNCH", diet: "veg" }
        ]
      }
    ]
  },
  {
    id: "bottle-prices",
    title: "BOTTLE PRICES",
    description: "Raise Your Glass to Refined Evenings. Enjoy exclusive bottle pricing available only for our banquet guests.",
    categories: [
      {
        name: "WHISKEY",
        items: [
          { name: "J & B Rare", price: "750 ML / Rs 8590" },
          { name: "100 pipers", price: "1000 ML / Rs 9190" },
          { name: "Black White", price: "750 ML / Rs 8590" },
          { name: "Teachers High Land", price: "1000 ML / Rs 10290" },
          { name: "Signature", price: "750 ML / Rs 5490" },
          { name: "Antiquity Blue", price: "750 ML / Rs 5490" },
          { name: "Chivas 12", price: "750 ML / Rs 17190" },
          { name: "Black Label", price: "750 ML / Rs 12590" },
          { name: "Jim Beam Bourbon", price: "1000 ML / Rs 12690" },
          { name: "Singleton", price: "700 ML / Rs 20290" },
          { name: "Glenfiddich 12", price: "750 ML / Rs 20290" },
          { name: "Talisker 10", price: "750 ML / Rs 20290" },
          { name: "Light House", price: "750 ML / Rs 9790" },
          { name: "J.W Double Black", price: "750 ML / Rs 19690" },
          { name: "Ballantine Finest", price: "750 ML / Rs 12290" },
          { name: "Suntory Toki", price: "750 ML / Rs 17190" }
        ]
      },
      {
        name: "GIN",
        items: [
          { name: "Beef Eater", price: "750 ML / Rs 9190" },
          { name: "Bombay Sapphire", price: "750 ML / Rs 9790" },
          { name: "Tanqueray", price: "750 ML / Rs 9790" },
          { name: "Roku", price: "700 ML / Rs 19590" },
          { name: "Hendrick's", price: "700 ML / Rs 15490" }
        ]
      },
      {
        name: "VODKA",
        items: [
          { name: "St Nicolaus", price: "700ML / Rs 8490" },
          { name: "Belvedere", price: "750 ML / Rs 16990" },
          { name: "Gray Goose", price: "750 ML / Rs 15490" },
          { name: "Absolut Blue", price: "750 ML / Rs 9790" },
          { name: "Juno", price: "750 ML / Rs 4890" }
        ]
      },
      {
        name: "RUM",
        items: [
          { name: "Old Monk", price: "750ML / Rs 4890" },
          { name: "Bacardi Black", price: "750 ML / Rs 4890" },
          { name: "Bacardi White", price: "750 ML / Rs 4890" },
          { name: "Bacardi Ocha", price: "750 ML / Rs 14690" },
          { name: "Negrita Spiced", price: "750 ML / Rs 10890" }
        ]
      },
      {
        name: "BRANDY & TEQUILA",
        items: [
          { name: "Exshaw VSOP", price: "750ML / Rs 4890" },
          { name: "Morpheus XO", price: "75 ML / Rs 4890" },
          { name: "Martell VS", price: "750 ML / Rs 13790" },
          { name: "Don Angel", price: "750ML / Rs 11990" },
          { name: "Castilo", price: "750ML / Rs 11990" },
          { name: "Camino Real Blanco", price: "750ML / Rs 13190" }
        ]
      },
      {
        name: "BEER",
        items: [
          { name: "Kingfisher Lager", price: "300ML / Rs 390  •  650ML / Rs 590" },
          { name: "Kingfisher Blue", price: "300ML / Rs 390  •  650ML / Rs 590" },
          { name: "British Empire", price: "300ML / Rs 390  •  650ML / Rs 590" },
          { name: "Sterren", price: "300ML / Rs 390  •  650ML / Rs 590" },
          { name: "Carlsberg Elephant", price: "650ML / Rs 590" },
          { name: "Tuborg", price: "650ML / Rs 590" },
          { name: "Kingfisher Draught", price: "330ML / Rs 340  •  1.5 L / Rs 1390  •  3 L / Rs 2590" }
        ]
      },
      {
        name: "WINE",
        items: [
          { name: "Fretelli Merlot", price: "750ML / Rs 3190" },
          { name: "Fretelli Chardonnay", price: "750ML / Rs 3090" },
          { name: "Fretelli Shiraz", price: "750ML / Rs 3190" },
          { name: "Fretelli Cabernet Sauvignon", price: "750ML / Rs 3190" },
          { name: "Fretelli Chenin Blanc", price: "750ML / Rs 3690" },
          { name: "Sette", price: "750ML / Rs 4590" },
          { name: "Sangria", price: "Glass / Rs 690  •  Pitcher / Rs 3990" },
          { name: "Sula Satori", price: "750ML / Rs 4290" },
          { name: "Sula Brut", price: "750ML / Rs 5890" },
          { name: "Sula Sauvignon Blanc", price: "750ML / Rs 3190" },
          { name: "Jacob's Creek Chardonnay", price: "750ML / Rs 6690" },
          { name: "Jacob's Creek Shiraz", price: "750ML / Rs 6690" },
          { name: "Camas Chardonnay", price: "750ML / Rs 4590" }
        ]
      }
    ]
  },
  {
    id: "rams-signature",
    title: "RAMS SIGNATURE",
    description: "Curated and perfected by Ram, the driving force behind Madras Square, this signature banquet menu reflects his love for bold flavours, generous spreads, and food that truly brings people together. It's a lively mix of crowd favourites and chef-led creations—designed to keep conversations flowing, plates full, and guests smiling. If you're looking for a banquet that feels warm, energetic, and unmistakably Madras Square, this is the one guests remember.",
    categories: [
      {
        name: "MOCKTAILS",
        items: [
          { name: "Strawberry Basil Crush", diet: "veg" },
          { name: "Litchi Lemonade", diet: "veg" }
        ]
      },
      {
        name: "SOUP",
        items: [
          { name: "Lemon Coriander Soup", diet: "veg" }
        ]
      },
      {
        name: "SALADS",
        items: [
          { name: "Greek Feta Salad", diet: "veg" }
        ]
      },
      {
        name: "APPETIZERS - VEGETARIAN",
        items: [
          { name: "Aachari Paneer Tikka", diet: "veg" },
          { name: "Crispy Lotus Stem", diet: "veg" },
          { name: "Grilled Fig with Goat Cheese Crostini", diet: "veg" }
        ]
      },
      {
        name: "APPETIZERS - NON - VEGETARIAN",
        items: [
          { name: "Black Pepper Chicken", diet: "non-veg" },
          { name: "Herb Garlic Prawns", diet: "non-veg" },
          { name: "Pan-Fried Chilli Fish (Not-Basa)", diet: "non-veg" }
        ]
      },
      {
        name: "MAIN COURSE - VEGETARIAN",
        items: [
          { name: "Dal Tadka", diet: "veg" },
          { name: "Paneer Lababdar", diet: "veg" }
        ]
      },
      {
        name: "MAIN COURSE - NON - VEGETARIAN",
        items: [
          { name: "Chilli Chicken Gravy", diet: "non-veg" },
          { name: "South Indian Fish Curry", diet: "non-veg" }
        ]
      },
      {
        name: "RICE AND NOODLES",
        items: [
          { name: "Thai Basil Chicken Fried Rice", diet: "non-veg" },
          { name: "Veg Hakka Noodles", diet: "veg" }
        ]
      },
      {
        name: "STEAMED RICE",
        items: [
          { name: "Steamed rice", diet: "veg" }
        ]
      },
      {
        name: "BREADS",
        items: [
          { name: "Garlic naan", diet: "veg" },
          { name: "Tandoori Roti", diet: "veg" }
        ]
      },
      {
        name: "DESSERTS",
        items: [
          { name: "Callebaut Brownie", diet: "veg" },
          { name: "Vanilla ice cream", diet: "veg" }
        ]
      }
    ]
  }
];

export const termsAndConditionsGroups = [
  {
    title: "General Terms",
    items: [
      "Minimum Guarantee of PAX must be met.",
      "No refund for PAX no shows.",
      "Children below the age of 12 years: 50% of price mentioned."
    ]
  },
  {
    title: "Arrival and Service Time",
    items: [
      "Lunch – 12:30 PM to 3:30 PM",
      "Lunch Starter Service – 1:00 PM to 2:30 PM",
      "Lunch Main Course – 1:30 PM to 3:00 PM",
      "Lunch Alcohol Service - 12:30 PM to 3:30 PM",
      "High Tea - 4:00 PM to 5:00 PM",
      "Dinner – 7:00 PM to 11:00 PM",
      "Dinner Starter Service – 7:00 PM to 8:30 PM",
      "Dinner Main Course - 8:30 PM to 10:30 PM",
      "Dinner Alcohol Service - 7:00 PM to 10:00 PM"
    ]
  },
  {
    title: "Payment Terms",
    items: [
      "Cash / Card / Bank Transfer",
      "75% advance payment based on MG to be made for confirmation.",
      "Remaining 25% payment based on MG must be made 3 days prior event.",
      "Full and final payment to be made at the end of the event."
    ]
  }
];
