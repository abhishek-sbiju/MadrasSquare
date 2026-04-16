
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
  priceHalf?: string;
  priceFull?: string;
  priceVeg?: string;
  priceChicken?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  priceHeaders?: [string, string] | [string, string, string];
  items: MenuItem[];
  subsections?: { title: string; priceHeaders?: [string, string]; items: MenuItem[] }[];
}

const rawMenuSections: MenuSection[] = [
  {
    id: "soups",
    title: "Soups",
    items: [
      {
        name: "Zucchini and Corriander Lemon Soup",
        description: "Zucchini, chopped coriander and lemon in a vegetable broth.",
        price: "300",
      },
      {
        name: "Coconut Lemon Grass Symphony",
        description: "Coconut milk-based soup with lemon grass, galangal, mushrooms and vegetables.",
        price: "300",
      },
      {
        name: "Thai Clear",
        description: "Thai clear broth served with boiled vegetables/ chicken/ prawns.",
        price: "300/350/380",
      },
      {
        name: "Crab Chowder",
        description: "Mixed seafood and potatoes in a creamy seafood broth.",
        price: "380",
      },
      {
        name: "Thai Prawn Sonata",
        description: "Traditional Thai broth soup with lemon grass, kaffir lime leaves, mushrooms and prawns.",
        price: "380",
      },
      {
        name: "Thengaipaal Nandu Saaru",
        description: "South Indian style crab soup made with coconut milk.",
        price: "380",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "Mediterranean Splendour",
        description: "Lettuce, cucumber, tomatoes, onions, olives and feta cheese with a vinaigrette dressing.",
        price: "470",
      },
      {
        name: "Poached Pear Overture",
        description: "Wine poached pears, strawberries, dragon fruits, peppers, onion, walnuts and raisins with parmesan cheese and a pomegranate dressing.",
        price: "470",
      },
      {
        name: "Som Tam Salad",
        description: "Shredded papaya served with sweet and chilli dressing.",
        price: "440",
      },
      {
        name: "Creamy Buratta Salad",
        description: "Fresh tomatoes, creamy burrata cheese, basil, walnut pesto drizzled with a balsamic dressing.",
        price: "600",
      },
      {
        name: "Curried Chicken Ensemble",
        description: "Lettuce, grilled chicken, baby potatoes with curry mayo and a honey balsamic dressing.",
        price: "560",
      },
      {
        name: "Seafood Ballet",
        description: "Lettuce, grilled prawns, squid, fish, tri-peppers and onions with an orange balsamic dressing.",
        price: "580",
      },
    ],
  },
  {
    id: "continental-starters",
    title: "Continental Starters",
    items: [
      {
        name: "Roasted Pears And Fig Crostini",
        description: "Roasted pears and figs with goat cheese spread, drizzled with a pomegranate reduction on a toasted baguette.",
        price: "420",
      },
      {
        name: "Stuffed Cheese Pockets",
        description: "Cottage cheese and mozzarella stuffed in thin flour dough, fried and served with a spicy relish.",
        price: "450",
      },
      {
        name: "Tri Chilli Cheese Toast",
        description: "Bread topped with tri-peppers, chillies and cheese.",
        price: "450",
      },
      {
        name: "Crispy Cauliflower Tacos",
        description: "Soft tacos topped with crispy batter fried cauliflower and cheesy jalapeno mayo.",
        price: "380",
      },
      {
        name: "Loaded Nachos",
        description: "Crispy nachos topped with sour cream, cheese and Pico de Gallo. (Veg/Chicken)",
        price: "400/460",
      },
      {
        name: "Cherry Tomato Buratta Crostini",
        description: "Roasted cherry tomatoes, pesto, burrata and parmesan on a toasted bagette.",
        price: "480",
      },
      {
        name: "Crispy Oyster Mushroom",
        description: "Fried oyster mushroom tossed with togarashi and served with sweet chilli sauce.",
        price: "440",
      },
      {
        name: "Veg Quesadilla",
        description: "Roasted vegetables, jalapenos olives and cheese stuffed in tortillas and grilled.",
        price: "450",
      },
      {
        name: "Parmesan Prawn Prelude",
        description: "Prawns marinated with parmesan cheese, peri peri herbs, crumb fried and served with spicy mayo.",
        price: "580",
      },
      {
        name: "Basil Garlic Prawns",
        description: "Prawns stir-fried with olives, chilli flakes, garlic and basil, served with garlic bread.",
        price: "600",
      },
      {
        name: "Garlic Parmesan Chicken",
        description: "Grilled chicken thighs marinated with garlic, parmesan, herbs and spices.",
        price: "550",
      },
      {
        name: "BBQ Pork Ribs",
        description: "Roasted pork ribs in BBQ sauce.",
        price: "850",
      },
      {
        name: "Classic Fish & Chip",
        description: "Panko fried fish, served with fries, coleslaw and tartare sauce.",
        price: "690",
      },
    ],
  },
  {
    id: "asian",
    title: "Asian",
    items: [
      {
        name: "Honey Chilli Lotus Stem",
        description: "Deep fried lotus stem, tossed in honey and roasted chilli paste.",
        price: "440",
      },
      {
        name: "Wok Tossed Vegetables",
        description: "Batter fried vegetables tossed in Asian spicy sauce.",
        price: "380",
      },
      {
        name: "Spicy Wok Tossed Cottage Cheese",
        description: "Batter fried paneer tossed with peppers and chilli sauce.",
        price: "440",
      },
      {
        name: "Mushroom Stir Fry",
        description: "Assorted stir fried mushrooms, topped with fried garlic.",
        price: "480",
      },
      {
        name: "Crispy Fried Corn",
        description: "Fried American corn tossed with five spice powder, onion and scallions.",
        price: "380",
      },
      {
        name: "Crispy Rice Crusted Tiger Prawns",
        description: "Prawns coated with rice flakes, fried and served with crying tiger sauce (contains fish sauce.)",
        price: "600",
      },
      {
        name: "Wasabi Prawn",
        description: "Batter fried tempura prawns saut\u00e9ed in creamy wasabi mayo.",
        price: "600",
      },
      {
        name: "Butter Garlic Curry Leaf Prawns",
        description: "Fried prawns tossed in a bold garlic and curry leaf reduction.",
        price: "600",
      },
      {
        name: "Kung Pao Prawn",
        description: "Batter fried tiger prawns tossed in a sweet and spicy kung pao sauce",
        price: "600",
      },
      {
        name: "Thai Grilled Fish",
        description: "Pan grilled fish fillet marinated in Thai style chilli sauce.",
        price: "560",
      },
      {
        name: "Stir Fry Lamb",
        description: "Batter fried lamb strips, tossed with a sweet and spicy Asian sauce.",
        price: "650",
      },
      {
        name: "Asian Style Pork Ribs",
        description: "Slow cooked pork ribs cooked in a char sui sauce.",
        price: "850",
      },
      {
        name: "Crushed Pepper Chicken",
        description: "Battered fried chicken tossed with oyster sauce, dark soy and crushed black pepper.",
        price: "580",
      },
      {
        name: "Karaage Chicken",
        description: "Japanese fried chicken served with Gochujang chilli mayo.",
        price: "540",
      },
      {
        name: "Squid And Prawns In Capers Sauce",
        description: "Fresh and tender squid and prawns, cooked with capers and sundried tomatoes",
        price: "750",
      },
    ],
  },
  {
    id: "indian",
    title: "Indian",
    items: [
      {
        name: "Achari Aloo",
        description: "Small potatoes marinated with green chilies, herbs and spices",
        price: "420",
      },
      {
        name: "Hara Bara Sheek Kebab",
        description: "Green peas Seekh kebab, grilled in clay pot.",
        price: "400",
      },
      {
        name: "Achari Paneer Medley.",
        description: "Soft chunks of paneer marinated in tandoori masala and grilled with vegetables.",
        price: "450",
      },
      {
        name: "Tandoori Stuffed Mushroom",
        description: "Cheese stuffed mushrooms, marinated in tandoor masala.",
        price: "380",
      },
      {
        name: "Malai Broccoli And Pineapple",
        description: "Grilled broccoli florets and pineapple chunks in creamy malai masala and cheese.",
        price: "420",
      },
      {
        name: "Malai Badami Chicken Tikka",
        description: "Tender cubes of chicken marinated in a nutty, creamy tandoori masala.",
        price: "540",
      },
      {
        name: "Mutton Sheek Kebab",
        description: "Minced lamb meat mixed with homemade Indian spice mix and char grilled.",
        price: "620",
      },
      {
        name: "Kandari Prawns",
        description: "Kandhari chilly marinated prawns, cooked in a clay pot.",
        price: "600",
      },
      {
        name: "Tandoori Jhinga",
        description: "Grilled prawns, marinated in spicy tandoori masala.",
        price: "600",
      },
      {
        name: "Achari Fish Tikka",
        description: "Fresh fish cubes marinated in achari tandoor masala and chargrilled.",
        price: "600",
      },
      {
        name: "Pepper Chicken Tikka",
        description: "Soft chunks of chicken marinated in black pepper and charcoal grilled.",
        price: "520",
      },
      {
        name: "Hariyali Chicken Tikka",
        description: "Soft chunks of chicken marinated in green tandoori masala and charcoal grilled.",
        price: "520",
      },
      {
        name: "Roasted Beef Stir-Fry",
        description: "Thinly sliced roasted beef, stir fried with bell peppers, onions and spices.",
        price: "600",
      },
      {
        name: "Kerala Beef Fry",
        description: "Kerala style beef fry with coconut.",
        price: "580",
      },
      {
        name: "Tandoori Chicken",
        description: "Succulent pieces of whole chicken, marinated in tandoor masala and grilled. (half/full).",
        price: "550/900",
      },
      {
        name: "Cheese Chilli Chicken Kebab",
        description: "Soft chunks of chicken marinated in tandoori masala, topped with cheese and",
        price: "540",
      },
    ],
  },
  {
    id: "fries",
    title: "Fries",
    items: [
      {
        name: "Peri Peri Fries",
        description: "Fries dusted with peri peri spice mix",
        price: "360",
      },
      {
        name: "Masala Fries",
        description: "Fries dusted with Indian spices served with spicy mayo",
        price: "360",
      },
      {
        name: "Cheese Fries",
        description: "Fries with cheese sauce served with honey mustard mayo",
        price: "400",
      },
      {
        name: "Fried Chicken / Lamb Bolognese Fries",
        description: "Crispy fries, mornay cheese sauce and chicken / lamb Bolognese",
        price: "460/500",
      },
    ],
  },
  {
    id: "wings",
    title: "Wings",
    items: [
      {
        name: "BBQ Chicken Wings",
        description: "Fried wings tossed in homemade bbq sauce served with garlic cream",
        price: "480",
      },
      {
        name: "Korean Fried Chicken Wings",
        description: "Homemade gochujang sauce tossed with crispy chicken wings",
        price: "500",
      },
      {
        name: "Peri Peri Wings",
        description: "Deep fried wings dusted with peri peri spice mix",
        price: "480",
      },
      {
        name: "Tandoori Wings",
        description: "Chicken wings marinated with indian spices cooked in tandoor served with mint chutney",
        price: "480",
      },
    ],
  },
  {
    id: "platters",
    title: "Platters",
    items: [
      {
        name: "Veg Kebab Platter",
        description: "Stuffed mushroom, veg sheekh kebab, paneer tikka, achari paneer tikka, gobi tikka",
        price: "1100",
      },
      {
        name: "Non-Veg Kebab Platter",
        description: "Chicken tikka, murgh malai kebab, tandoori jhinga, fish tikka, lamb sheekh kebab",
        price: "1600",
      },
      {
        name: "Chicken Wings Platter",
        description: "Peri peri, bbq, sriracha, Korean",
        price: "920",
      },
    ],
  },
  {
    id: "sushi",
    title: "Sushi",
    items: [
      {
        name: "Kappa Maki",
        description: "Sushi Rice, cucumber, and cream cheese",
        price: "440",
      },
      {
        name: "Avocado Maki",
        description: "Sushi Rice, avocado and scallion",
        price: "460",
      },
      {
        name: "Futo Maki",
        description: "Avocado, cucumber, pickled radish, tri capsicum, carrot, lettuce, cream cheese",
        price: "500",
      },
      {
        name: "Ebi Tempura Uramaki",
        description: "Sushi Rice, crispy tempura prawn",
        price: "580",
      },
      {
        name: "Shake Uramaki",
        description: "Salmon and cucumber roll",
        price: "580",
      },
      {
        name: "Boston Roll",
        description: "Crab Stick, Jalapeno Mayo, cream cheese, avocado topped with tobiko",
        price: "600",
      },
      {
        name: "California Uramaki",
        description: "Crab stick and avocado topped with tobiko",
        price: "600",
      },
      {
        name: "Spiced Tuna Uramaki",
        description: "Tuna, Cucumber, sriracha and togarashi",
        price: "600",
      },
      {
        name: "Orange Blossom Uramaki",
        description: "Crab stick, cream cheese, avocado, jalapeno mayo topped with smoked salmon",
        price: "600",
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      {
        name: "Veg Burger",
        description: "Breaded vegetable patty layered with lettuce, tomatoes, and cheese",
        price: "480",
      },
      {
        name: "Grilled Chicken Burger",
        description: "Grilled chicken patty, lettuce, and caramelized onions",
        price: "650",
      },
      {
        name: "Fried Chicken Burger",
        description: "Crispy fried chicken, coleslaw hot sauce",
        price: "650",
      },
      {
        name: "Korean Fried Chicken Burger",
        description: "Crispy fried chicken tossed in gochujang sauce, sesame seeds coleslaw",
        price: "650",
      },
      {
        name: "Smashed Beef Burger",
        description: "Smashed beef patty, lettuce, and caramelized onions.",
        price: "700",
      },
      {
        name: "Double Cheese Burger",
        description: "Cheese loaded beef patty, american mustard, caramelized onions and sauteed mushrooms",
        price: "750",
      },
    ],
  },
  {
    id: "pizzas",
    title: "Wood Fired Pizzas",
    items: [
      {
        name: "Classic Margarita",
        description: "Homemade tomato sauce, basil and mozzarella.",
        price: "650",
      },
      {
        name: "Truffle Fromaggi",
        description: "Mixed cheese, truffle oil, sun-dried tomato & olive oil.",
        price: "720",
      },
      {
        name: "Grilled Veg Symphony",
        description: "Grilled eggplant, zucchini, and olives.",
        price: "680",
      },
      {
        name: "Pomodoro Serenade",
        description: "Cherry and sun-dried tomatoes, basil, parmesan cheese & olive oil.",
        price: "700",
      },
      {
        name: "Pizza D'Aglio Marinara",
        description: "Garlic prawns, fish and squid with chilli flakes and parsley.",
        price: "780",
      },
      {
        name: "Pizza Di Salami",
        description: "Homemade tomato sauce, pork pepperoni, bacon, sausage, caramelised onion and mozzarella cheese.",
        price: "780",
      },
      {
        name: "Pizza Hawaiian",
        description: "Bacon, pineapple, and mozzarella cheese.",
        price: "780",
      },
      {
        name: "Pollo Alla Basilico",
        description: "Homemade basil pesto sauce, grilled chicken and tri peppers.",
        price: "760",
      },
    ],
  },
  {
    id: "raviolis",
    title: "Hand Made Raviolis",
    items: [
      {
        name: "Spinach And Corn Pesto",
        description: "Cream cheese, corn puree and blanched spinach in pesto sauce",
        price: "520",
      },
      {
        name: "Shitake And Goat Cheese",
        description: "Shitake and button mushroom, goat cheese in mushroom sauce",
        price: "520",
      },
      {
        name: "Shrimp And Mascarpone",
        description: "Minced shrimp, shallots, garlic, chilli, cilantro and mascarpone in marie rose sauce",
        price: "650",
      },
      {
        name: "Minced Beef Bolognese",
        description: "Beef mince, four cheese blend, demi glaze in brown ragout sauce",
        price: "660",
      },
    ],
  },
  {
    id: "addons",
    title: "Add Ons",
    items: [
      {
        name: "Mushrooms / Vegetables",
        price: "100",
      },
      {
        name: "Olives / Jalapenos",
        price: "80",
      },
      {
        name: "Chicken / Cheese",
        price: "150",
      },
      {
        name: "Bacon / Prawn / Pepperoni",
        price: "200",
      },
    ],
  },
  {
    id: "continental-mains",
    title: "Continental Mains",
    items: [
      {
        name: "Verdure Alla Panna",
        description: "Pasta tossed with creamy sauce and vegetables",
        price: "600",
      },
      {
        name: "Spaghetti Ala Pesto Basilico",
        description: "Pasta tossed with basil pesto sauce, broccoli, olives and parmesan cheese.",
        price: "600",
      },
      {
        name: "Spaghetti Ala Pesto Pomodoro",
        description: "Pasta tossed with sun-dried tomato pesto sauce, capsicums, olives and parmesan cheese.",
        price: "600",
      },
      {
        name: "Spaghetti Aglio E Olio",
        description: "Pasta tossed with olive oil, garlic, olives and chilli flakes.",
        price: "550",
      },
      {
        name: "Lasagna Di Verdure",
        description: "Layered pasta baked with capsicums, zucchini, eggplant mix and mozzarella served with garlic bread.",
        price: "600",
      },
      {
        name: "Pasta Napolitana",
        description: "Pasta tossed with homemade tomato sauce, vegetables, olives, capers, and basil",
        price: "560",
      },
      {
        name: "Mixed Veg Casserole",
        description: "Mixed vegetables, corn, peas baked in a creamy cheese sauce served with garlic herb rice and garlic bread.",
        price: "600",
      },
      {
        name: "Seafood Al Rosso Pasta",
        description: "Pasta tossed with grilled sea food, cooked with tomato cream sauce and fresh herbs.",
        price: "680",
      },
      {
        name: "Grilled Beef Masterpiece",
        description: "Grilled beef tenderloin served with green pepper sauce, potatoes and buttered vegetables.",
        price: "895",
      },
      {
        name: "Herb Grilled Chicken Roulade",
        description: "Herb marinated chicken breast stuffed with cheese sun-dried tomatoes and basil served with creamy mushroom sauce, mashed potatoes, buttered broccoli and beans.",
        price: "680",
      },
      {
        name: "Herb Grilled Fish",
        description: "Herb marinated fish grilled and served with a creamy lemon butter sauce and herb rice.",
        price: "700",
      },
      {
        name: "Grilled Chicken Casserole",
        description: "Chicken, sun-dried tomatoes, olives, tri peppers and broccoli baked in a creamy sauce gratinate served with garlic herb rice and garlic bread.",
        price: "580",
      },
      {
        name: "Lasagna Lamb",
        description: "Layered pasta baked with lamb Bolognese and mozzarella served with garlic bread.",
        price: "750",
      },
      {
        name: "Penne Alfredo Chicken",
        description: "Pasta tossed with cream sauce, grilled chicken and fresh herbs.",
        price: "650",
      },
      {
        name: "Lamb Bolognese Spaghetti",
        description: "Pasta tossed with slow cooked minced chicken and tomato sauce.",
        price: "700",
      },
      {
        name: "Prawn Stroganoff",
        description: "Prawns cooked with vegetables in pink sauce served with herb rice",
        price: "700",
      },
      {
        name: "Herb Crusted Salmon",
        description: "Salmon fillet crusted with herbs and served with sambal sauce",
        price: "1600",
      },
    ],
  },
  {
    id: "pan-asian-mains",
    title: "Pan Asian Mains",
    items: [
    ],
    subsections: [
      {
        title: "Noodles",
        items: [
          {
            name: "PAD THAI NOODLES",
            description: "Rice stick noodles tossed with tamarind juice, palm sugar, peanut and chilli flakes with choice of vegetables, chicken or prawns.",
            price: "440/ 520/ 560",
          },
          {
            name: "SCHEZWAN NOODLES",
            description: "Indo-Chinese style noodles made with vegetables with choice of vegetables, chicken or prawns.",
            price: "420/ 480/ 520",
          },
          {
            name: "THAI STIR FRIED NOODLES",
            description: "Noodles cooked with bird's eye chilli and basil leaves with choice of vegetables, chicken or prawns.",
            price: "440/ 520/ 560",
          },
          {
            name: "PAD KRAPOW (Chicken / Pork)",
            description: "Minced chicken and birds eye chilli tossed with homemade holy basil sauce served with steamed basmati rice topped with fried egg.",
            price: "620 / 680",
          },
          {
            name: "MONGOLIAN BEEF AND BAMBOO SHOOT",
            description: "Tender Beef slices sauteed with bamboo shoot, scallions and peppers",
            price: "680",
          },
          {
            name: "CHAR KWAY TEOW",
            description: "Wok tossed flat rice noodles with shitake mushroom, bok choy and kecap manis sauce (choice of veg, chicken or prawns)",
            price: "620/680/700",
          },
        ],
      },
      {
        title: "Rice",
        items: [
          {
            name: "CANTONESE FRIED RICE",
            description: "Cantonese style fried rice tossed with assorted vegetables with choice of vegetables, chicken or prawns",
            price: "380/420/440",
          },
          {
            name: "THAI BASIL FRIED RICE",
            description: "Basmati rice cooked with bird's eye chilli and basil leaves with choice of vegetables, chicken or prawns.",
            price: "440/480/540",
          },
          {
            name: "THAI GREEN CURRY",
            description: "Coconut milk-based curry made with baby eggplant, shallots, sweet basil leaves and kaffir lime leaves, served with jasmine rice with choice of vegetables, chicken or prawns.",
            price: "480/520/560",
          },
          {
            name: "THAI RED CURRY",
            description: "Coconut milk based red curry made with baby eggplant, shallots, bamboo shoot, sweet basil leaves and kaffir lime leaves, served with jasmine rice with choice of vegetables, chicken or prawns.",
            price: "480/520/560",
          },
          {
            name: "TRUFFLE GARLIC FRIED RICE",
            description: "Sticky jasmine rice cooked in burnt garlic sauce with truffle oil with choice of vegetables, chicken or prawns.",
            price: "620/680/700",
          },
        ],
      },
    ],
  },
  {
    id: "indian-mains",
    title: "Indian Mains",
    items: [
      {
        name: "MIX VEG CURRY",
        description: "Potatoes, seasonal-vegetables and peas, cooked in a spiced tomato curry.",
        price: "460",
      },
      {
        name: "PANEER LABABDHAR",
        description: "Chunks of cottage cheese in a rich tomato and onion curry.",
        price: "540",
      },
      {
        name: "DHAL MAKHANI",
        description: "Slow cooked lentil and red kidney beans curry.",
        price: "540",
      },
      {
        name: "PANEER PASANDHA",
        description: "Paneer, stuffed with aromatic nuts & spice, in a creamy tomato curry.",
        price: "540",
      },
      {
        name: "MALAI KOFTA",
        description: "Kofta dumplings in a cream and yogurt curry.",
        price: "520",
      },
      {
        name: "KADAI CHICKEN",
        description: "Tender cubes of chicken cooked with kadai masala and homemade spices.",
        price: "620",
      },
      {
        name: "FISH IN TANGY CURRY",
        description: "Slices of fish cooked in a tomato curry with tamarind spices and coconut milk.",
        price: "640",
      },
      {
        name: "KERALA PRAWN CURRY",
        description: "Prawns, cooked with coconut oil, onion and coconut milk.",
        price: "640",
      },
      {
        name: "MUTTON ROGAN JOSH",
        description: "Slow cooked mutton curry, marinated in authentic spices and cooked to perfection.",
        price: "750",
      },
      {
        name: "MURGH LAHORI",
        description: "Tender chicken cubes in a rich tomato onion curry.",
        price: "600",
      },
      {
        name: "KEEMA CHICKEN",
        description: "Minced chicken and aromatic spices in onion tomato masala.",
        price: "600",
      },
      {
        name: "MURGH JAHANGIRI",
        description: "Rich and creamy Mughalai chicken curry cooked in peanut and yoghurt base",
        price: "600",
      },
      {
        name: "KADAI MUSHROOM / PANEER",
        description: "Mushroom or Paneer cooked in kadai masala and homemade spices",
        price: "540",
      },
    ],
  },
  {
    id: "roties-naans-rice",
    title: "Rotis, Naans and Rice",
    items: [
      {
        name: "Steamed Rice",
        price: "220",
      },
      {
        name: "Veg Pulao",
        price: "360",
      },
      {
        name: "Curd Rice",
        price: "250",
      },
      {
        name: "Tandoori Roti / Naan",
        price: "90",
      },
      {
        name: "Butter Roti / Naan",
        price: "120",
      },
      {
        name: "Garlic Naan",
        price: "140",
      },
      {
        name: "Lachha Paratha",
        price: "140",
      },
      {
        name: "Chilli Cheese Naan",
        price: "200",
      },
    ],
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages",
    items: [
    ],
    subsections: [
      {
        title: "Fresh Juices",
        items: [
          {
            name: "Orange",
            price: "400",
          },
          {
            name: "Watermelon",
            price: "350",
          },
        ],
      },
      {
        title: "Mixers",
        items: [
          {
            name: "Coke/Sprite/Fanta",
            price: "140",
          },
          {
            name: "Soda",
            price: "140",
          },
          {
            name: "Tonic Water",
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
      },
    ],
  },
  {
    id: "mocktails",
    title: "Mocktails",
    items: [
      {
        name: "Virgin Mojito",
        price: "340",
      },
      {
        name: "Chia Lemonade Soda",
        price: "400",
      },
      {
        name: "Matcha Lemonade",
        price: "380",
      },
      {
        name: "Kokum Sherbet",
        price: "340",
      },
      {
        name: "Lime Mint Cooler",
        price: "340",
      },
      {
        name: "Strawberry Basil Crush",
        price: "340",
      },
    ],
  },
  {
    id: "iced-teas",
    title: "Iced Teas",
    items: [
      {
        name: "Peach",
        price: "340",
      },
      {
        name: "Litchi",
        price: "340",
      },
      {
        name: "Lemon",
        price: "340",
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
        price: "160",
      },
      {
        name: "Latte",
        price: "220",
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
        name: "Black Tea / Milk / Lime",
        price: "180",
      },
      {
        name: "Green Tea / Earl Grey",
        price: "180",
      },
      {
        name: "Hot Chocolate",
        price: "340",
      },
      {
        name: "Cappuccino",
        price: "220",
      },
    ],
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    items: [
      {
        name: "Vanilla / Chocolate / Strawberry",
        price: "380",
      },
      {
        name: "Cookies And Cream",
        price: "380",
      },
      {
        name: "Nutella",
        price: "420",
      },
      {
        name: "Biscoff Coffee",
        price: "440",
      },
      {
        name: "Banana & Caramel",
        price: "440",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Basque Cheesecake",
        description: "Served with homemade berry compote.",
        price: "300",
      },
      {
        name: "Biscoff Drip Cake",
        description: "Layers of vanilla sponge sandwiched together with Biscoff spread and whipped vanilla cream.",
        price: "300",
      },
      {
        name: "Belgian Chocolate Mousse Cake",
        description: "Chocolate cake with layers of dark, milk and white chocolate mousse.",
        price: "300",
      },
      {
        name: "Tiramisu",
        description: "Espresso soaked Savoiardi, mascarpone cream topped with chocolate shavings and cocoa",
        price: "350",
      },
    ],
  },
];

export const menuSections: MenuSection[] = rawMenuSections;
