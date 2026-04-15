export type DietType = "veg" | "non-veg" | "both";

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  variants?: string;
  tags?: string[];
  dietType?: DietType;
}

export interface MenuSubCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  title: string;
  navLabel?: string;
  description?: string;
  subCategories?: MenuSubCategory[];
  items?: MenuItem[];
}

const veg: DietType = "veg";
const nonVeg: DietType = "non-veg";
const both: DietType = "both";

export const menuCategories: MenuCategory[] = [
  {
    id: "soups",
    title: "Soups",
    navLabel: "Soups",
    items: [
      {
        name: "Zucchini and Corriander Lemon Soup",
        price: "300",
        description: "Zucchini, chopped coriander and lemon in a vegetable broth.",
        dietType: veg,
      },
      {
        name: "Coconut Lemon Grass Symphony",
        price: "300",
        description: "Coconut milk-based soup with lemon grass, galangal, mushrooms and vegetables.",
        dietType: veg,
      },
      {
        name: "Thai Clear",
        price: "300 / 350 / 380",
        variants: "Veg / Chicken / Prawns",
        description: "Thai clear broth served with boiled vegetables/ chicken/ prawns.",
        dietType: both,
      },
      {
        name: "Crab Chowder",
        price: "380",
        description: "Mixed seafood and potatoes in a creamy seafood broth.",
        dietType: nonVeg,
      },
      {
        name: "Thai Prawn Sonata",
        price: "380",
        description: "Traditional Thai broth soup with lemon grass, kaffir lime leaves, mushrooms and prawns.",
        dietType: nonVeg,
      },
      {
        name: "Thengaipaal Nandu Saaru",
        price: "380",
        description: "South Indian style crab soup made with coconut milk.",
        dietType: nonVeg,
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    navLabel: "Salads",
    items: [
      {
        name: "Mediterranean Splendour",
        price: "470",
        description: "Lettuce, cucumber, tomatoes, onions, olives and feta cheese with a vinaigrette dressing.",
        dietType: veg,
      },
      {
        name: "Poached Pear Overture",
        price: "470",
        description: "Wine poached pears, strawberries, dragon fruits, peppers, onion, walnuts and raisins with parmesan cheese and a pomegranate dressing.",
        dietType: veg,
      },
      {
        name: "Som Tam Salad",
        price: "440",
        description: "Shredded papaya served with sweet and chilli dressing.",
        dietType: veg,
      },
      {
        name: "Creamy Buratta Salad",
        price: "600",
        description: "Fresh tomatoes, creamy buratta cheese, basil, walnut pesto drizzled with a balsamic dressing.",
        dietType: veg,
      },
      {
        name: "Curried Chicken Ensemble",
        price: "560",
        description: "Lettuce, grilled chicken, baby potatoes with curry mayo and a honey balsamic dressing.",
        dietType: nonVeg,
      },
      {
        name: "Seafood Ballet",
        price: "580",
        description: "Lettuce, grilled prawns, squid, fish, tri-peppers and onions with an orange balsamic dressing.",
        dietType: nonVeg,
      },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    navLabel: "Starters",
    subCategories: [
      {
        name: "Continental",
        items: [
          {
            name: "Roasted Pears and Fig Crostini",
            price: "420",
            description: "Roasted pears and figs with goat cheese spread, drizzled with a pomegranate reduction on a toasted baguette.",
            dietType: veg,
          },
          {
            name: "Stuffed Cheese Pockets",
            price: "450",
            description: "Cottage cheese and mozzarella stuffed in thin flour dough, fried and served with a spicy relish.",
            dietType: veg,
          },
          {
            name: "Tri Chilli Cheese Toast",
            price: "450",
            description: "Bread topped with tri-peppers, chillies and cheese.",
            dietType: veg,
          },
          {
            name: "Crispy Cauliflower Tacos",
            price: "380",
            description: "Soft tacos topped with crispy batter fried cauliflower and cheesy jalapeno mayo.",
            dietType: veg,
          },
          {
            name: "Loaded Nachos Veg/Chicken",
            price: "400 / 460",
            variants: "Veg / Chicken",
            description: "Crispy nachos topped with sour cream, cheese and Pico de Gallo.",
            dietType: both,
          },
          {
            name: "Cherry Tomato Buratta Crostini",
            price: "480",
            description: "Roasted cherry tomatoes, pesto, buratta and parmesan on a toasted baguette.",
            dietType: veg,
          },
          {
            name: "Crispy Oyster Mushroom",
            price: "440",
            description: "Fried oyster mushroom tossed with togarashi and served with sweet chilli sauce.",
            dietType: veg,
          },
          {
            name: "Veg Quesadilla",
            price: "450",
            description: "Roasted vegetables, jalapenos, olives and cheese stuffed in tortillas and grilled.",
            dietType: veg,
          },
          {
            name: "Parmesan Prawn Prelude",
            price: "580",
            description: "Prawns marinated with parmesan cheese, peri peri herbs, crumb fried and served with spicy mayo.",
            dietType: nonVeg,
          },
          {
            name: "Basil Garlic Prawns",
            price: "600",
            description: "Prawns stir-fried with olives, chilli flakes, garlic and basil, served with garlic bread.",
            dietType: nonVeg,
          },
          {
            name: "Garlic Parmesan Chicken",
            price: "550",
            description: "Grilled chicken thighs marinated with garlic, parmesan, herbs and spices.",
            dietType: nonVeg,
          },
          {
            name: "BBQ Pork Ribs",
            price: "850",
            description: "Roasted pork ribs in BBQ sauce.",
            dietType: nonVeg,
          },
          {
            name: "Classic Fish & Chip",
            price: "690",
            description: "Panko fried fish, served with fries, coleslaw and tartare sauce.",
            dietType: nonVeg,
          },
        ],
      },
      {
        name: "Asian",
        items: [
          {
            name: "Honey Chilli Lotus Stem",
            price: "440",
            description: "Deep fried lotus stem, tossed in honey and roasted chilli paste.",
            dietType: veg,
          },
          {
            name: "Wok Tossed Vegetables",
            price: "380",
            description: "Batter fried vegetables tossed in Asian spicy sauce.",
            dietType: veg,
          },
          {
            name: "Spicy Wok Tossed Cottage Cheese",
            price: "440",
            description: "Batter fried paneer tossed with peppers and chilli sauce.",
            dietType: veg,
          },
          {
            name: "Mushroom Stir Fry",
            price: "480",
            description: "Assorted stir fried mushrooms, topped with fried garlic.",
            dietType: veg,
          },
          {
            name: "Crispy Fried Corn",
            price: "380",
            description: "Fried American corn tossed with five spice powder, onion and scallions.",
            dietType: veg,
          },
          {
            name: "Crispy Rice Crusted Tiger Prawns",
            price: "600",
            description: "Prawns coated with rice flakes, fried and served with crying tiger sauce (contains fish sauce).",
            dietType: nonVeg,
          },
          {
            name: "Wasabi Prawn",
            price: "600",
            description: "Batter fried tempura prawns sauteed in creamy wasabi mayo.",
            dietType: nonVeg,
          },
          {
            name: "Butter Garlic Curry Leaf Prawns",
            price: "600",
            description: "Fried prawns tossed in a bold garlic and curry leaf reduction.",
            dietType: nonVeg,
          },
          {
            name: "Kung Pao Prawn",
            price: "600",
            description: "Batter fried tiger prawns tossed in a sweet and spicy kung pao sauce.",
            dietType: nonVeg,
          },
          {
            name: "Squid and Prawns in Capers Sauce",
            price: "750",
            description: "Fresh and tender squid and prawns, cooked with capers and sundried tomatoes.",
            dietType: nonVeg,
          },
          {
            name: "Thai Grilled Fish",
            price: "560",
            description: "Pan grilled fish fillet marinated in Thai style chilli sauce.",
            dietType: nonVeg,
          },
          {
            name: "Stir Fry Lamb",
            price: "650",
            description: "Batter fried lamb strips, tossed with a sweet and spicy Asian sauce.",
            dietType: nonVeg,
          },
          {
            name: "Asian Style Pork Ribs",
            price: "850",
            description: "Slow cooked pork ribs cooked in a char sui sauce.",
            dietType: nonVeg,
          },
          {
            name: "Crushed Pepper Chicken",
            price: "580",
            description: "Battered fried chicken tossed with oyster sauce, dark soy and crushed black pepper.",
            dietType: nonVeg,
          },
          {
            name: "Karaage Chicken",
            price: "540",
            description: "Japanese fried chicken served with Gochujang chilli mayo.",
            dietType: nonVeg,
          },
        ],
      },
      {
        name: "Indian",
        items: [
          {
            name: "Achari Aloo",
            price: "420",
            description: "Small potatoes marinated with green chilies, herbs and spices.",
            dietType: veg,
          },
          {
            name: "Hara Bara Sheek Kebab",
            price: "400",
            description: "Green peas seekh kebab, grilled in clay pot.",
            dietType: veg,
          },
          {
            name: "Achari Paneer Medley",
            price: "450",
            description: "Soft chunks of paneer marinated in tandoori masala and grilled with vegetables.",
            dietType: veg,
          },
          {
            name: "Tandoori Stuffed Mushroom",
            price: "380",
            description: "Cheese stuffed mushrooms, marinated in tandoor masala.",
            dietType: veg,
          },
          {
            name: "Malai Broccoli and Pineapple",
            price: "420",
            description: "Grilled broccoli florets and pineapple chunks in creamy malai masala and cheese.",
            dietType: veg,
          },
          {
            name: "Malai Badami Chicken Tikka",
            price: "540",
            description: "Tender cubes of chicken marinated in a nutty, creamy tandoori masala.",
            dietType: nonVeg,
          },
          {
            name: "Mutton Sheek Kebab",
            price: "620",
            description: "Minced lamb meat mixed with homemade Indian spice mix and char grilled.",
            dietType: nonVeg,
          },
          {
            name: "Kandari Prawns",
            price: "600",
            description: "Kandhari chilly marinated prawns, cooked in a clay pot.",
            dietType: nonVeg,
          },
          {
            name: "Tandoori Jhinga",
            price: "600",
            description: "Grilled prawns, marinated in spicy tandoori masala.",
            dietType: nonVeg,
          },
          {
            name: "Achari Fish Tikka",
            price: "600",
            description: "Fresh fish cubes marinated in achari tandoor masala and chargrilled.",
            dietType: nonVeg,
          },
          {
            name: "Pepper Chicken Tikka",
            price: "520",
            description: "Soft chunks of chicken marinated in black pepper and charcoal grilled.",
            dietType: nonVeg,
          },
          {
            name: "Hariyali Chicken Tikka",
            price: "520",
            description: "Soft chunks of chicken marinated in green tandoori masala and charcoal grilled.",
            dietType: nonVeg,
          },
          {
            name: "Roasted Beef Stir-Fry",
            price: "600",
            description: "Thinly sliced roasted beef, stir fried with bell peppers, onions and spices.",
            dietType: nonVeg,
          },
          {
            name: "Kerala Beef Fry",
            price: "580",
            description: "Kerala style beef fry with coconut.",
            dietType: nonVeg,
          },
          {
            name: "Tandoori Chicken",
            price: "550 / 900",
            variants: "Half / Full",
            description: "Succulent pieces of whole chicken, marinated in tandoor masala and grilled.",
            dietType: nonVeg,
          },
          {
            name: "Cheese Chilli Chicken Kebab",
            price: "540",
            description: "Soft chunks of chicken marinated in tandoori masala, topped with cheese and green chillies.",
            dietType: nonVeg,
          },
        ],
      },
    ],
  },
  {
    id: "fries-bar-snacks",
    title: "Fries & Bar Snacks",
    navLabel: "Fries",
    subCategories: [
      {
        name: "Bar Snacks",
        items: [
          { name: "Masala Papad", price: "240", dietType: veg },
          { name: "Masala Sprouts", price: "260", dietType: veg },
          { name: "Masala Peanuts", price: "280", dietType: veg },
          { name: "Masala Omelette", price: "260", dietType: nonVeg },
        ],
      },
      {
        name: "Fries",
        items: [
          {
            name: "Peri Peri Fries",
            price: "360 (NEW)",
            description: "Fries dusted with peri peri spice mix.",
            dietType: veg,
          },
          {
            name: "Masala Fries",
            price: "360",
            description: "Fries dusted with Indian spices served with spicy mayo.",
            dietType: veg,
          },
          {
            name: "Cheese Fries",
            price: "400",
            description: "Fries with cheese sauce served with honey mustard mayo.",
            dietType: veg,
          },
          {
            name: "Fried Chicken / Lamb Bolognese Fries",
            price: "460 / 500 (NEW)",
            variants: "Chicken / Lamb",
            description: "Crispy fries, mornay cheese sauce and chicken / lamb bolognese.",
            dietType: nonVeg,
          },
        ],
      },
    ],
  },
  {
    id: "wings-platters",
    title: "Wings & Platters",
    navLabel: "Wings",
    subCategories: [
      {
        name: "Wings",
        items: [
          {
            name: "BBQ Chicken Wings",
            price: "480",
            description: "Fried wings tossed in homemade BBQ sauce served with garlic cream.",
            dietType: nonVeg,
          },
          {
            name: "Korean Fried Chicken Wings",
            price: "500",
            description: "Homemade gochujang sauce tossed with crispy chicken wings.",
            dietType: nonVeg,
          },
          {
            name: "Peri Peri Wings",
            price: "480",
            description: "Deep fried wings dusted with peri peri spice mix.",
            dietType: nonVeg,
          },
          {
            name: "Tandoori Wings",
            price: "480",
            description: "Chicken wings marinated with Indian spices, cooked in tandoor and served with mint chutney.",
            dietType: nonVeg,
          },
        ],
      },
      {
        name: "Platters",
        items: [
          {
            name: "Veg Kebab Platter",
            price: "1100",
            description: "Stuffed mushroom, veg sheekh kebab, paneer tikka, achari paneer tikka, gobi tikka.",
            dietType: veg,
          },
          {
            name: "Non-Veg Kebab Platter",
            price: "1600",
            description: "Chicken tikka, murgh malai kebab, tandoori jhinga, fish tikka, lamb sheekh kebab.",
            dietType: nonVeg,
          },
          {
            name: "Chicken Wings Platter",
            price: "920",
            description: "Peri peri, BBQ, sriracha, Korean.",
            dietType: nonVeg,
          },
        ],
      },
    ],
  },
  {
    id: "sushi",
    title: "Sushi",
    navLabel: "Sushi",
    items: [
      {
        name: "Kappa Maki",
        price: "440",
        description: "Sushi rice, cucumber, and cream cheese.",
        dietType: veg,
      },
      {
        name: "Avocado Maki",
        price: "460",
        description: "Sushi rice, avocado and scallion.",
        dietType: veg,
      },
      {
        name: "Futo Maki",
        price: "500",
        description: "Avocado, cucumber, pickled radish, tri capsicum, carrot, lettuce, cream cheese.",
        dietType: veg,
      },
      {
        name: "Ebi Tempura Uramaki",
        price: "580",
        description: "Sushi rice, crispy tempura prawn.",
        dietType: nonVeg,
      },
      {
        name: "Shake Uramaki",
        price: "580",
        description: "Salmon and cucumber roll.",
        dietType: nonVeg,
      },
      {
        name: "Boston Roll",
        price: "600",
        description: "Crab stick, jalapeno mayo, cream cheese, avocado topped with tobiko.",
        dietType: nonVeg,
      },
      {
        name: "California Uramaki",
        price: "600",
        description: "Crab stick and avocado topped with tobiko.",
        dietType: nonVeg,
      },
      {
        name: "Spiced Tuna Uramaki",
        price: "600",
        description: "Tuna, cucumber, sriracha and togarashi.",
        dietType: nonVeg,
      },
      {
        name: "Orange Blossom Uramaki",
        price: "600",
        description: "Crab stick, cream cheese, avocado, jalapeno mayo topped with smoked salmon.",
        dietType: nonVeg,
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    navLabel: "Burgers",
    items: [
      {
        name: "Veg Burger",
        price: "480",
        description: "Breaded vegetable patty layered with lettuce, tomatoes, and cheese.",
        dietType: veg,
      },
      {
        name: "Grilled Chicken Burger",
        price: "650",
        description: "Grilled chicken patty, lettuce, and caramelized onions.",
        dietType: nonVeg,
      },
      {
        name: "Fried Chicken Burger",
        price: "650",
        description: "Crispy fried chicken, coleslaw hot sauce.",
        dietType: nonVeg,
      },
      {
        name: "Korean Fried Chicken Burger",
        price: "650",
        description: "Crispy fried chicken tossed in gochujang sauce, sesame seeds coleslaw.",
        dietType: nonVeg,
      },
      {
        name: "Smashed Beef Burger",
        price: "700",
        description: "Smashed beef patty, lettuce, and caramelized onions.",
        dietType: nonVeg,
      },
      {
        name: "Double Cheese Burger",
        price: "750",
        description: "Cheese loaded beef patty, american mustard, caramelized onions and sauteed mushrooms.",
        dietType: nonVeg,
      },
    ],
  },
  {
    id: "wood-fired-pizzas",
    title: "Wood Fired Pizzas",
    navLabel: "Pizzas",
    description: "Add ons: Mushrooms / Vegetables 100 | Olives / Jalapenos 80 | Chicken / Cheese 150 | Bacon / Prawn / Pepperoni 200",
    items: [
      {
        name: "Classic Margarita",
        price: "650",
        description: "Homemade tomato sauce, basil and mozzarella.",
        dietType: veg,
      },
      {
        name: "Truffle Fromaggi",
        price: "720",
        description: "Mixed cheese, truffle oil, sun-dried tomato and olive oil.",
        dietType: veg,
      },
      {
        name: "Grilled Veg Symphony",
        price: "680",
        description: "Grilled eggplant, zucchini, and olives.",
        dietType: veg,
      },
      {
        name: "Pomodoro Serenade",
        price: "700",
        description: "Cherry and sun-dried tomatoes, basil, parmesan cheese and olive oil.",
        dietType: veg,
      },
      {
        name: "Pizza D'Aglio Marinara",
        price: "780",
        description: "Garlic prawns, fish and squid with chilli flakes and parsley.",
        dietType: nonVeg,
      },
      {
        name: "Pizza Di Salami",
        price: "780",
        description: "Homemade tomato sauce, pork pepperoni, bacon, sausage, caramelised onion and mozzarella cheese.",
        dietType: nonVeg,
      },
      {
        name: "Pizza Hawaiian",
        price: "780",
        description: "Bacon, pineapple, and mozzarella cheese.",
        dietType: nonVeg,
      },
      {
        name: "Pollo Alla Basilico",
        price: "760",
        description: "Homemade basil pesto sauce, grilled chicken and tri peppers.",
        dietType: nonVeg,
      },
    ],
  },
  {
    id: "hand-made-raviolis",
    title: "Hand Made Raviolis",
    navLabel: "Raviolis",
    items: [
      {
        name: "Spinach and Corn Pesto",
        price: "520",
        description: "Cream cheese, corn puree and blanched spinach in pesto sauce.",
        dietType: veg,
      },
      {
        name: "Shitake and Goat Cheese",
        price: "520",
        description: "Shitake and button mushroom, goat cheese in mushroom sauce.",
        dietType: veg,
      },
      {
        name: "Shrimp and Mascarpone",
        price: "650",
        description: "Minced shrimp, shallots, garlic, chilli, cilantro and mascarpone in marie rose sauce.",
        dietType: nonVeg,
      },
      {
        name: "Minced Beef Bolognese",
        price: "660",
        description: "Beef mince, four cheese blend, demi glaze in brown ragout sauce.",
        dietType: nonVeg,
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    navLabel: "Mains",
    subCategories: [
      {
        name: "Continental",
        items: [
          {
            name: "Verdure Alla Panna",
            price: "600",
            description: "Pasta tossed with creamy sauce and vegetables.",
            dietType: veg,
          },
          {
            name: "Spaghetti Ala Pesto Basilico",
            price: "600",
            description: "Pasta tossed with basil pesto sauce, broccoli, olives and parmesan cheese.",
            dietType: veg,
          },
          {
            name: "Spaghetti Ala Pesto Pomodoro",
            price: "600",
            description: "Pasta tossed with sun-dried tomato pesto sauce, capsicums, olives and parmesan cheese.",
            dietType: veg,
          },
          {
            name: "Spaghetti Aglio E Olio",
            price: "550",
            description: "Pasta tossed with olive oil, garlic, olives and chilli flakes.",
            dietType: veg,
          },
          {
            name: "Lasagna Di Verdure",
            price: "600",
            description: "Layered pasta baked with capsicums, zucchini, eggplant mix and mozzarella served with garlic bread.",
            dietType: veg,
          },
          {
            name: "Pasta Napolitana",
            price: "560",
            description: "Pasta tossed with homemade tomato sauce, vegetables, olives, capers, and basil.",
            dietType: veg,
          },
          {
            name: "Mixed Veg Casserole",
            price: "600",
            description: "Mixed vegetables, corn, peas baked in a creamy cheese sauce served with garlic herb rice and garlic bread.",
            dietType: veg,
          },
          {
            name: "Seafood Al Rosso Pasta",
            price: "680",
            description: "Pasta tossed with grilled sea food, cooked with tomato cream sauce and fresh herbs.",
            dietType: nonVeg,
          },
          {
            name: "Grilled Beef Masterpiece",
            price: "895",
            description: "Grilled beef tenderloin served with green pepper sauce, potatoes and buttered vegetables.",
            dietType: nonVeg,
          },
          {
            name: "Herb Grilled Chicken Roulade",
            price: "680",
            description: "Herb marinated chicken breast stuffed with cheese sun-dried tomatoes and basil served with creamy mushroom sauce, mashed potatoes, buttered broccoli and beans.",
            dietType: nonVeg,
          },
          {
            name: "Herb Grilled Fish",
            price: "700",
            description: "Herb marinated fish grilled and served with a creamy lemon butter sauce and herb rice.",
            dietType: nonVeg,
          },
          {
            name: "Grilled Chicken Casserole",
            price: "580",
            description: "Chicken, sun-dried tomatoes, olives, tri peppers and broccoli baked in a creamy sauce gratinate served with garlic herb rice and garlic bread.",
            dietType: nonVeg,
          },
          {
            name: "Lasagna Lamb",
            price: "750",
            description: "Layered pasta baked with lamb bolognese and mozzarella served with garlic bread.",
            dietType: nonVeg,
          },
          {
            name: "Penne Alfredo Chicken",
            price: "650",
            description: "Pasta tossed with cream sauce, grilled chicken and fresh herbs.",
            dietType: nonVeg,
          },
          {
            name: "Lamb Bolognese Spaghetti",
            price: "700",
            description: "Pasta tossed with slow cooked minced chicken and tomato sauce.",
            dietType: nonVeg,
          },
          {
            name: "Prawn Stroganoff",
            price: "700",
            description: "Prawns cooked with vegetables in pink sauce served with herb rice.",
            dietType: nonVeg,
          },
          {
            name: "Herb Crusted Salmon",
            price: "1600",
            description: "Salmon fillet crusted with herbs and served with sambal sauce.",
            dietType: nonVeg,
          },
        ],
      },
    ],
  },
  {
    id: "pan-asian-mains",
    title: "Pan Asian Mains",
    navLabel: "Pan Asian",
    subCategories: [
      {
        name: "Noodles",
        items: [
          {
            name: "Pad Thai Noodles",
            price: "440 / 520 / 560",
            variants: "Veg / Chicken / Prawns",
            description: "Rice stick noodles tossed with tamarind juice, palm sugar, peanut and chilli flakes.",
            dietType: both,
          },
          {
            name: "Schezwan Noodles",
            price: "420 / 480 / 520",
            variants: "Veg / Chicken / Prawns",
            description: "Indo-Chinese style noodles made with vegetables.",
            dietType: both,
          },
          {
            name: "Thai Stir Fried Noodles",
            price: "440 / 520 / 560",
            variants: "Veg / Chicken / Prawns",
            description: "Noodles cooked with bird's eye chilli and basil leaves.",
            dietType: both,
          },
          {
            name: "Pad Krapow",
            price: "620 / 680 (NEW)",
            variants: "Chicken / Pork",
            description: "Minced chicken and birds eye chilli tossed with homemade holy basil sauce served with steamed basmati rice topped with fried egg.",
            dietType: nonVeg,
          },
          {
            name: "Mongolian Beef and Bamboo Shoot",
            price: "680",
            description: "Tender beef slices sauteed with bamboo shoot, scallions and peppers.",
            dietType: nonVeg,
          },
          {
            name: "Char Kway Teow",
            price: "620 / 680 / 700",
            variants: "Veg / Chicken / Prawns",
            description: "Wok tossed flat rice noodles with shitake mushroom, bok choy and kecap manis sauce.",
            dietType: both,
          },
        ],
      },
      {
        name: "Rice",
        items: [
          {
            name: "Cantonese Fried Rice",
            price: "380 / 420 / 440",
            variants: "Veg / Chicken / Prawns",
            description: "Cantonese style fried rice tossed with assorted vegetables.",
            dietType: both,
          },
          {
            name: "Thai Basil Fried Rice",
            price: "440 / 480 / 540",
            variants: "Veg / Chicken / Prawns",
            description: "Basmati rice cooked with bird's eye chilli and basil leaves.",
            dietType: both,
          },
          {
            name: "Thai Green Curry",
            price: "480 / 520 / 560",
            variants: "Veg / Chicken / Prawns",
            description: "Coconut milk-based curry made with baby eggplant, shallots, sweet basil leaves and kaffir lime leaves, served with jasmine rice.",
            dietType: both,
          },
          {
            name: "Thai Red Curry",
            price: "480 / 520 / 560",
            variants: "Veg / Chicken / Prawns",
            description: "Coconut milk based red curry made with baby eggplant, shallots, bamboo shoot, sweet basil leaves and kaffir lime leaves, served with jasmine rice.",
            dietType: both,
          },
          {
            name: "Truffle Garlic Fried Rice",
            price: "620 / 680 / 700",
            variants: "Veg / Chicken / Prawns",
            description: "Sticky jasmine rice cooked in burnt garlic sauce with truffle oil.",
            dietType: both,
          },
        ],
      },
    ],
  },
  {
    id: "indian-mains",
    title: "Indian Mains",
    navLabel: "Indian",
    items: [
      {
        name: "Mix Veg Curry",
        price: "460",
        description: "Potatoes, seasonal-vegetables and peas, cooked in a spiced tomato curry.",
        dietType: veg,
      },
      {
        name: "Paneer Lababdhar",
        price: "540",
        description: "Chunks of cottage cheese in a rich tomato and onion curry.",
        dietType: veg,
      },
      {
        name: "Dhal Makhani",
        price: "540",
        description: "Slow cooked lentil and red kidney beans curry.",
        dietType: veg,
      },
      {
        name: "Paneer Pasandha",
        price: "540",
        description: "Paneer, stuffed with aromatic nuts & spice, in a creamy tomato curry.",
        dietType: veg,
      },
      {
        name: "Malai Kofta",
        price: "520",
        description: "Kofta dumplings in a cream and yogurt curry.",
        dietType: veg,
      },
      {
        name: "Kadai Chicken",
        price: "620",
        description: "Tender cubes of chicken cooked with kadai masala and homemade spices.",
        dietType: nonVeg,
      },
      {
        name: "Fish in Tangy Curry",
        price: "640",
        description: "Slices of fish cooked in a tomato curry with tamarind spices and coconut milk.",
        dietType: nonVeg,
      },
      {
        name: "Kerala Prawn Curry",
        price: "640",
        description: "Prawns, cooked with coconut oil, onion and coconut milk.",
        dietType: nonVeg,
      },
      {
        name: "Mutton Rogan Josh",
        price: "750",
        description: "Slow cooked mutton curry, marinated in authentic spices and cooked to perfection.",
        dietType: nonVeg,
      },
      {
        name: "Murgh Lahori",
        price: "600",
        description: "Tender chicken cubes in a rich tomato onion curry.",
        dietType: nonVeg,
      },
      {
        name: "Keema Chicken",
        price: "600",
        description: "Minced chicken and aromatic spices in onion tomato masala.",
        dietType: nonVeg,
      },
      {
        name: "Murgh Jahangiri",
        price: "600",
        description: "Rich and creamy Mughalai chicken curry cooked in peanut and yoghurt base.",
        dietType: nonVeg,
      },
      {
        name: "Kadai Mushroom / Paneer",
        price: "540",
        description: "Mushroom or paneer cooked in kadai masala and homemade spices.",
        dietType: veg,
      },
    ],
  },
  {
    id: "rotis-naans-rice",
    title: "Rotis, Naans and Rice",
    navLabel: "Breads & Rice",
    items: [
      { name: "Steamed Rice", price: "220", dietType: veg },
      { name: "Veg Pulao", price: "360", dietType: veg },
      { name: "Curd Rice", price: "250", dietType: veg },
      { name: "Tandoori Roti/Naan", price: "90", dietType: veg },
      { name: "Butter Roti/Naan", price: "120", dietType: veg },
      { name: "Garlic Naan", price: "140", dietType: veg },
      { name: "Lachha Paratha", price: "140", dietType: veg },
      { name: "Chilli Cheese Naan", price: "200", dietType: veg },
    ],
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages",
    navLabel: "Cold Drinks",
    subCategories: [
      {
        name: "Fresh Juices",
        items: [
          { name: "Orange", price: "400", dietType: veg },
          { name: "Watermelon", price: "350", dietType: veg },
        ],
      },
      {
        name: "Mixers",
        items: [
          { name: "Coke/Sprite/Fanta", price: "140", dietType: veg },
          { name: "Soda", price: "120", dietType: veg },
          { name: "Tonic Water", price: "210", dietType: veg },
          { name: "Red Bull", price: "290", dietType: veg },
          { name: "Orange/Litchi", price: "200", dietType: veg },
          { name: "Cranberry/Guava", price: "250", dietType: veg },
          { name: "Apple/Pineapple", price: "200", dietType: veg },
        ],
      },
    ],
  },
  {
    id: "mocktails-iced-teas",
    title: "Mocktails & Iced Teas",
    navLabel: "Mocktails",
    subCategories: [
      {
        name: "Mocktails",
        items: [
          { name: "Virgin Mojito", price: "340", dietType: veg },
          { name: "Chia Lemonade Soda", price: "400", dietType: veg },
          { name: "Matcha Lemonade", price: "380", dietType: veg },
          { name: "Kokum Sherbet", price: "340", dietType: veg },
          { name: "Lime Mint Cooler", price: "340", dietType: veg },
          { name: "Strawberry Basil Crush", price: "340", dietType: veg },
        ],
      },
      {
        name: "Iced Teas",
        items: [
          { name: "Peach", price: "340", dietType: veg },
          { name: "Litchi", price: "340", dietType: veg },
          { name: "Lemon", price: "340", dietType: veg },
        ],
      },
    ],
  },
  {
    id: "hot-beverages-milkshakes",
    title: "Hot Beverages & Milkshakes",
    navLabel: "Cafe",
    subCategories: [
      {
        name: "Hot Beverages",
        items: [
          { name: "Espresso", price: "100", dietType: veg },
          { name: "Double Espresso", price: "160", dietType: veg },
          { name: "Macchiato", price: "160", dietType: veg },
          { name: "Latte", price: "220", dietType: veg },
          { name: "Piccolo", price: "200", dietType: veg },
          { name: "Americano", price: "180", dietType: veg },
          { name: "Black Tea - Milk/Lime", price: "180", dietType: veg },
          { name: "Green Tea/ Earl Grey", price: "180", dietType: veg },
          { name: "Hot Chocolate", price: "340", dietType: veg },
          { name: "Cappuccino", price: "220", dietType: veg },
        ],
      },
      {
        name: "Milkshakes",
        items: [
          { name: "Vanilla / Chocolate / Strawberry", price: "380", dietType: veg },
          { name: "Cookies and Cream", price: "380", dietType: veg },
          { name: "Nutella", price: "420", dietType: veg },
          { name: "Biscoff Coffee", price: "440", dietType: veg },
          { name: "Banana & Caramel", price: "440", dietType: veg },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    navLabel: "Desserts",
    items: [
      {
        name: "Basque Cheesecake",
        price: "300",
        description: "Served with homemade berry compote.",
        dietType: veg,
      },
      {
        name: "Biscoff Drip Cake",
        price: "300",
        description: "Layers of vanilla sponge sandwiched together with Biscoff spread and whipped vanilla cream.",
        dietType: veg,
      },
      {
        name: "Belgian Chocolate Mousse Cake",
        price: "300",
        description: "Chocolate cake with layers of dark, milk and white chocolate mousse.",
        dietType: veg,
      },
      {
        name: "Tiramisu",
        price: "350",
        description: "Espresso soaked Savoiardi, mascarpone cream topped with chocolate shavings and cocoa.",
        dietType: veg,
      },
    ],
  },
];
