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
  description?: string;
  subCategories?: MenuSubCategory[];
  items?: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "soups",
    title: "SOUPS",
    items: [
      { name: "Zucchini and Coriander Lemon Soup", price: "₹300", description: "Zucchini, chopped coriander and lemon in a vegetable broth", dietType: "veg" },
      { name: "Coconut Lemongrass Symphony", price: "₹300", description: "Coconut milk-based soup with lemongrass, galangal, mushrooms and vegetables", dietType: "veg" },
      { name: "Thai Clear", price: "₹300 / ₹350 / ₹380", variants: "Veg / Chicken / Prawns", description: "Thai clear broth served with boiled vegetables, chicken or prawns" },
      { name: "Crab Chowder", price: "₹380", description: "Mixed seafood and potatoes in a creamy seafood broth", tags: ["seafood"] },
      { name: "Thai Prawn Sonata", price: "₹380", description: "Traditional Thai broth soup with lemongrass, kaffir lime leaves, mushrooms and prawns", tags: ["seafood"] },
      { name: "Thengaipaal Nandu Saaru", price: "₹380", description: "South Indian style crab soup made with coconut milk", tags: ["seafood"] },
    ],
  },
  {
    id: "salads",
    title: "SALADS",
    items: [
      { name: "Mediterranean Splendour", price: "₹470", description: "Lettuce, cucumber, tomatoes, onions, olives and feta cheese with a vinaigrette dressing", dietType: "veg" },
      { name: "Poached Pear Overture", price: "₹470", description: "Wine poached pears, strawberries, dragon fruits, peppers, onion, walnuts and raisins with parmesan cheese and a pomegranate dressing", dietType: "veg" },
      { name: "Som Tam Salad", price: "₹440", description: "Shredded papaya served with sweet and chilli dressing", dietType: "veg" },
      { name: "Creamy Burrata Salad", price: "₹600", description: "Fresh tomatoes, creamy burrata cheese, basil, walnut pesto drizzled with a balsamic dressing", dietType: "veg" },
      { name: "Curried Chicken Ensemble", price: "₹560", description: "Lettuce, grilled chicken, baby potatoes with curry mayo and a honey balsamic dressing", dietType: "non-veg" },
      { name: "Seafood Ballet", price: "₹580", description: "Lettuce, grilled prawns, squid, fish, tri-peppers and onions with an orange balsamic dressing", tags: ["seafood"] },
    ],
  },
  {
    id: "starters",
    title: "STARTERS",
    items: [
      { name: "Crispy Oyster Mushroom", price: "₹440", description: "Fried oyster mushroom tossed with togarashi and served with sweet chilli sauce", dietType: "veg" },
      { name: "Honey Chilli Lotus Stem", price: "₹440", description: "Deep fried lotus stem, tossed in honey and roasted chilli paste", dietType: "veg" },
      { name: "Roasted Pears and Fig Crostini", price: "₹420", description: "Roasted pears and figs with goat cheese spread, drizzled with a pomegranate reduction on a toasted baguette", dietType: "veg" },
      { name: "Veg Quesadilla", price: "₹450", description: "Roasted vegetables, jalapenos, olives and cheese stuffed in tortillas and grilled", dietType: "veg" },
      { name: "Stuffed Cheese Pockets", price: "₹450", description: "Cottage cheese and mozzarella stuffed in thin flour dough, fried and served with a spicy relish", dietType: "veg" },
      { name: "Tri Chilli Cheese Toast", price: "₹450", description: "Bread topped with tri-peppers, chillies and cheese", dietType: "veg" },
      { name: "Cherry Tomato Burrata Crostini", price: "₹480", description: "Roasted cherry tomatoes, pesto, burrata and parmesan on a toasted baguette", dietType: "veg" },
      { name: "Crispy Cauliflower Tacos", price: "₹380", description: "Soft tacos topped with crispy batter fried cauliflower and cheesy jalapeno mayo", dietType: "veg" },
      { name: "Wok Tossed Vegetables", price: "₹380", description: "Batter fried vegetables tossed in Asian spicy sauce", dietType: "veg" },
      { name: "Crispy Fried Corn", price: "₹380", description: "Fried American corn tossed with five spice powder, green onion and scallions", dietType: "veg" },
      { name: "Spicy Wok Tossed Cottage Cheese", price: "₹440", description: "Batter fried paneer tossed with peppers and chilli sauce", dietType: "veg" },
      { name: "Mushroom Stir Fry", price: "₹480", description: "Assorted stir fried mushrooms, topped with fried garlic", dietType: "veg" },
      { name: "Loaded Nachos", price: "₹400 / ₹460", variants: "Veg / Chicken", description: "Crispy nachos topped with sour cream, cheese and pico de gallo" },
      { name: "Masala Papad", price: "₹240", description: "Masala papad topped with fresh tomatoes, onions and spices", dietType: "veg" },
      { name: "Masala Sprouts", price: "₹260", description: "Masala sprouts topped with fresh tomatoes, onions and spices", dietType: "veg" },
      { name: "Masala Omelette", price: "₹260", description: "Masala omelette with fresh tomatoes, onions and spices", dietType: "non-veg" },
      { name: "Masala Peanuts", price: "₹280", description: "Masala peanuts topped with fresh tomatoes, onions and spices", dietType: "veg" },
      { name: "Pepper Chicken Tikka", price: "₹520", description: "Soft chunks of chicken marinated in black pepper and charcoal grilled", dietType: "non-veg" },
      { name: "Hariyali Chicken Tikka", price: "₹520", description: "Soft chunks of chicken marinated in tandoori masala and charcoal grilled", dietType: "non-veg" },
      { name: "Cheese Chilli Chicken Kebab", price: "₹540", description: "Soft chunks of chicken marinated in tandoori masala, topped with cheese and green chillies", dietType: "non-veg" },
      { name: "Karaage Chicken", price: "₹540", description: "Japanese fried chicken served with gochujang chilli mayo", dietType: "non-veg" },
      { name: "Garlic Parmesan Chicken", price: "₹550", description: "Grilled chicken thighs marinated with garlic, parmesan, herbs and spices", dietType: "non-veg" },
      { name: "Tandoori Chicken", price: "₹550 / ₹900", variants: "Half / Full", description: "Succulent pieces of whole chicken, marinated in tandoor masala and grilled", dietType: "non-veg" },
      { name: "Crushed Pepper Chicken", price: "₹580", description: "Battered fried chicken tossed with oyster sauce, dark soy and crushed black pepper", dietType: "non-veg" },
      { name: "Thai Grilled Fish", price: "₹560", description: "Pan grilled fish fillet marinated in Thai style chilli sauce", tags: ["seafood"] },
      { name: "Parmesan Prawn Prelude", price: "₹580", description: "Prawns marinated with parmesan cheese, peri peri herbs, crumb fried and served with spicy mayo", tags: ["seafood"] },
      { name: "Kerala Beef Fry", price: "₹580", description: "Kerala style beef fry with coconut", dietType: "non-veg" },
      { name: "Roasted Beef Stir-Fry", price: "₹600", description: "Thinly sliced roasted beef, stir fried with bell peppers, onions and spices", dietType: "non-veg" },
      { name: "Achari Fish Tikka", price: "₹600", description: "Fresh fish cubes marinated in achari tandoor masala and chargrilled", tags: ["seafood"] },
      { name: "Basil Garlic Prawns", price: "₹600", description: "Prawns stir-fried with olives, chilli flakes, garlic and basil, served with garlic bread", tags: ["seafood"] },
      { name: "Wasabi Prawn", price: "₹600", description: "Batter fried tempura prawns sautéed in creamy wasabi mayo", tags: ["seafood"] },
      { name: "Butter Garlic Curry Leaf Prawns", price: "₹600", description: "Fried prawns tossed in a bold garlic and curry leaf reduction", tags: ["seafood"] },
      { name: "Kandari Prawns", price: "₹600", description: "Kandhari chilli marinated prawns, cooked in a clay pot", tags: ["seafood"] },
      { name: "Kung Pao Prawn", price: "₹600", description: "Batter fried tiger prawns tossed in a sweet and spicy kung pao sauce", tags: ["seafood"] },
      { name: "Tandoori Jhinga", price: "₹600", description: "Grilled prawns, marinated in spicy tandoori masala", tags: ["seafood"] },
      { name: "Crispy Rice Crusted Tiger Prawns", price: "₹600", description: "Prawns coated with rice flakes, fried and served with crying tiger sauce", tags: ["seafood"] },
      { name: "Stir Fry Lamb", price: "₹650", description: "Batter fried lamb strips, tossed with a sweet and spicy Asian sauce", dietType: "non-veg" },
      { name: "Classic Fish & Chips", price: "₹690", description: "Panko fried fish, served with fries, coleslaw and tartare sauce", tags: ["seafood"] },
      { name: "Squid and Prawns in Capers Sauce", price: "₹750", description: "Fresh and tender squid and prawns, cooked with capers and sundried tomatoes", tags: ["seafood"] },
      { name: "Asian Style Pork Ribs", price: "₹850", description: "Slow cooked pork ribs cooked in a char siu sauce", dietType: "non-veg" },
      { name: "BBQ Pork Ribs", price: "₹850", description: "Roasted pork ribs in BBQ sauce", dietType: "non-veg" },
    ],
  },
  {
    id: "wings",
    title: "WINGS",
    items: [
      { name: "BBQ Chicken Wings", price: "₹480", description: "Fried wings tossed in homemade BBQ sauce served with garlic cream", dietType: "non-veg" },
      { name: "Peri Peri Wings", price: "₹480", description: "Deep fried wings dusted with peri peri spice mix", dietType: "non-veg" },
      { name: "Tandoori Wings", price: "₹480", description: "Chicken wings marinated with Indian spices cooked in tandoor served with mint chutney", dietType: "non-veg" },
      { name: "Korean Fried Chicken Wings", price: "₹500", description: "Homemade gochujang sauce tossed with crispy chicken wings", dietType: "non-veg" },
    ],
  },
  {
    id: "platters",
    title: "PLATTERS",
    items: [
      { name: "Veg Kebab Platter", price: "₹1,100", description: "Stuffed mushroom, veg sheekh kebab, paneer tikka, achari paneer tikka, gobi tikka", dietType: "veg" },
      { name: "Chicken Wings Platter", price: "₹920", description: "Peri peri, BBQ, sriracha, Korean", dietType: "non-veg" },
      { name: "Non-Veg Kebab Platter", price: "₹1,600", description: "Chicken tikka, murgh malai kebab, tandoori jhinga, fish tikka, lamb sheekh kebab", dietType: "non-veg" },
    ],
  },
  {
    id: "fries",
    title: "FRIES",
    items: [
      { name: "Peri Peri Fries", price: "₹360", description: "Fries dusted with peri peri spice mix", dietType: "veg" },
      { name: "Masala Fries", price: "₹360", description: "Fries dusted with Indian spices served with spicy mayo", dietType: "veg" },
      { name: "Cheese Fries", price: "₹400", description: "Fries with cheese sauce served with honey mustard mayo", dietType: "veg" },
      { name: "Fried Chicken / Lamb Bolognese Fries", price: "₹460 / ₹500", description: "Crispy fries, mornay cheese sauce and chicken or lamb bolognese", dietType: "non-veg" },
    ],
  },
  {
    id: "sushi",
    title: "SUSHI",
    items: [
      { name: "Kappa Maki", price: "₹440", description: "Sushi rice, cucumber, and cream cheese", dietType: "veg" },
      { name: "Avocado Maki", price: "₹460", description: "Sushi rice, avocado and scallion", dietType: "veg" },
      { name: "Futo Maki", price: "₹500", description: "Avocado, cucumber, pickled radish, tri capsicum, carrot, lettuce, cream cheese", dietType: "veg" },
      { name: "Ebi Tempura Uramaki", price: "₹580", description: "Sushi rice, crispy tempura prawn", tags: ["seafood"] },
      { name: "Shake Uramaki", price: "₹580", description: "Salmon and cucumber roll", tags: ["seafood"] },
      { name: "Boston Roll", price: "₹600", description: "Crab stick, jalapeno mayo, cream cheese, avocado topped with tobiko", tags: ["seafood"] },
      { name: "California Uramaki", price: "₹600", description: "Crab stick and avocado topped with tobiko", tags: ["seafood"] },
      { name: "Spiced Tuna Uramaki", price: "₹600", description: "Tuna, cucumber, sriracha and togarashi", tags: ["seafood"] },
      { name: "Orange Blossom Uramaki", price: "₹600", description: "Crab stick, cream cheese, avocado, jalapeno mayo topped with smoked salmon", tags: ["seafood"] },
    ],
  },
  {
    id: "burgers",
    title: "BURGERS",
    items: [
      { name: "Veg Burger", price: "₹480", description: "Breaded vegetable patty layered with lettuce, tomatoes, and cheese", dietType: "veg" },
      { name: "Grilled Chicken Burger", price: "₹650", description: "Grilled chicken patty, lettuce, and caramelized onions", dietType: "non-veg" },
      { name: "Fried Chicken Burger", price: "₹650", description: "Crispy fried chicken, coleslaw and hot sauce", dietType: "non-veg" },
      { name: "Korean Fried Chicken Burger", price: "₹650", description: "Crispy fried chicken tossed in gochujang sauce, sesame seeds and coleslaw", dietType: "non-veg" },
      { name: "Smashed Beef Burger", price: "₹700", description: "Smashed beef patty, lettuce, and caramelized onions", dietType: "non-veg" },
      { name: "Double Cheese Burger", price: "₹750", description: "Cheese loaded beef patty, american mustard, caramelized onions and sauteed mushrooms", dietType: "non-veg" },
    ],
  },
  {
    id: "pasta",
    title: "PASTA & RAVIOLI",
    subCategories: [
      {
        name: "Pasta",
        items: [
          { name: "Spaghetti Aglio E Olio", price: "₹550", description: "Pasta tossed with olive oil, garlic, olives and chilli flakes", dietType: "veg" },
          { name: "Pasta Napolitana", price: "₹560", description: "Pasta tossed with homemade tomato sauce, vegetables, olives, capers, and basil", dietType: "veg" },
          { name: "Verdure Alla Panna", price: "₹600", description: "Pasta tossed with creamy sauce and vegetables", dietType: "veg" },
          { name: "Spaghetti Ala Pesto Basilico", price: "₹600", description: "Pasta tossed with basil pesto sauce, broccoli, olives and parmesan cheese", dietType: "veg" },
          { name: "Spaghetti Ala Pesto Pomodoro", price: "₹600", description: "Pasta tossed with sun-dried tomato pesto sauce, capsicums, olives and parmesan cheese", dietType: "veg" },
          { name: "Minced Beef Bolognese", price: "₹660", description: "Beef mince, four cheese blend, demi glaze in brown ragout sauce", dietType: "non-veg" },
          { name: "Pollo Alla Basilico", price: "₹760", description: "Homemade basil pesto sauce, grilled chicken and tri peppers", dietType: "non-veg" },
          { name: "D'Aglio Marinara", price: "₹780", description: "Garlic prawns, fish and squid with chilli flakes and parsley", tags: ["seafood"] },
        ],
      },
      {
        name: "Hand Made Ravioli",
        items: [
          { name: "Spinach and Corn Pesto", price: "₹520", description: "Cream cheese, corn puree and blanched spinach in pesto sauce", dietType: "veg" },
          { name: "Shitake and Goat Cheese", price: "₹520", description: "Shitake and button mushroom, goat cheese in mushroom sauce", dietType: "veg" },
          { name: "Shrimp and Mascarpone", price: "₹650", description: "Minced shrimp, shallots, garlic, chilli, cilantro and mascarpone in marie rose sauce", tags: ["seafood"] },
          { name: "Minced Beef Bolognese", price: "₹660", description: "Beef mince, four cheese blend, demi glaze in brown ragout sauce", dietType: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "pizzas",
    title: "WOOD FIRED PIZZAS",
    items: [
      { name: "Classic Margarita", price: "₹650", description: "Homemade tomato sauce, basil and mozzarella", dietType: "veg" },
      { name: "Grilled Veg Symphony", price: "₹680", description: "Grilled eggplant, zucchini, and olives", dietType: "veg" },
      { name: "Pomodoro Serenade", price: "₹700", description: "Cherry and sun-dried tomatoes, basil, parmesan cheese and olive oil", dietType: "veg" },
      { name: "Truffle Fromaggi", price: "₹720", description: "Mixed cheese, truffle oil, sun-dried tomato and olive oil", dietType: "veg" },
      { name: "Pizza Di Salami", price: "₹780", description: "Homemade tomato sauce, pork pepperoni, bacon, sausage, caramelised onion and mozzarella cheese", dietType: "non-veg" },
      { name: "Pizza D'Aglio Marinara", price: "₹780", description: "Garlic prawns, fish and squid with chilli flakes and parsley", tags: ["seafood"] },
      { name: "Pizza Hawaiian", price: "₹780", description: "Bacon, pineapple, and mozzarella cheese", dietType: "non-veg" },
    ],
    description: "Add ons: Mushrooms / Vegetables ₹100 · Olives / Jalapenos ₹80 · Chicken / Cheese ₹150 · Bacon / Prawn / Pepperoni ₹200",
  },
  {
    id: "mains",
    title: "MAINS",
    items: [
      { name: "Lasagna Di Verdure", price: "₹600", description: "Layered pasta baked with capsicums, zucchini, eggplant mix and mozzarella served with garlic bread", dietType: "veg" },
      { name: "Grilled Cottage Cheese Steak", price: "₹600", description: "Seasoned cottage cheese grilled, served with truffle garlic rice and creamy mushroom sauce", dietType: "veg" },
      { name: "Herb Grilled Chicken Steak", price: "₹640", description: "Herb marinated grilled chicken breast served with black pepper sauce, mashed potatoes and buttered vegetables", dietType: "non-veg" },
      { name: "Lemon Butter Fish", price: "₹680", description: "Lemon mustard marinated fish grilled and served with a creamy lemon butter sauce and herb rice", tags: ["seafood"] },
      { name: "Pork Ribs", price: "₹800", description: "Slow cooked pork ribs tossed in BBQ sauce served with fries", dietType: "non-veg" },
      { name: "Roasted Beef Steak", price: "₹895", description: "Grilled beef tenderloin served with mushroom sauce, potatoes, and buttered vegetables", dietType: "non-veg" },
      { name: "Herb Crusted Salmon", price: "₹1,600", description: "Salmon fillet crusted with herbs and served with sambal sauce", tags: ["seafood"] },
    ],
  },
  {
    id: "asian",
    title: "PAN ASIAN",
    subCategories: [
      {
        name: "Rice",
        items: [
          { name: "Cantonese Fried Rice", price: "₹380 / ₹420 / ₹440", variants: "Veg / Chicken / Prawns", description: "Cantonese style fried rice tossed with assorted vegetables" },
          { name: "Thai Basil Fried Rice", price: "₹440 / ₹480 / ₹540", variants: "Veg / Chicken / Prawns", description: "Basmati rice cooked with bird's eye chilli and basil" },
          { name: "Truffle Garlic Fried Rice", price: "₹620 / ₹680 / ₹700", variants: "Veg / Chicken / Prawns", description: "Sticky jasmine rice cooked in burnt garlic sauce with truffle oil" },
        ],
      },
      {
        name: "Noodles",
        items: [
          { name: "Char Kway Teow", price: "₹620 / ₹680 / ₹700", variants: "Veg / Chicken / Prawns", description: "Wok tossed flat rice noodles with shitake mushroom, bok choy and kecap manis sauce" },
        ],
      },
      {
        name: "Curries",
        items: [
          { name: "Thai Green Curry", price: "₹480 / ₹520 / ₹560", variants: "Veg / Chicken / Prawns", description: "Coconut milk-based curry made with baby eggplant, shallots, sweet basil leaves and kaffir lime leaves, served with jasmine rice" },
          { name: "Thai Red Curry", price: "₹480 / ₹520 / ₹560", variants: "Veg / Chicken / Prawns", description: "Coconut milk based red curry made with baby eggplant, shallots, bamboo shoot, sweet basil leaves and kaffir lime leaves, served with jasmine rice" },
          { name: "Mongolian Beef and Bamboo Shoot", price: "₹680", description: "Tender beef slices sauteed with bamboo shoot, scallions and peppers", dietType: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "indian",
    title: "INDIAN MAINS",
    items: [
      { name: "Mix Veg Curry", price: "₹460", description: "Potatoes, seasonal vegetables and peas, cooked in a spiced tomato curry", dietType: "veg" },
      { name: "Malai Kofta", price: "₹520", description: "Kofta dumplings in a cream and yogurt curry", dietType: "veg" },
      { name: "Paneer Lababdhar", price: "₹540", description: "Chunks of cottage cheese in a rich tomato and onion curry", dietType: "veg" },
      { name: "Dhal Makhani", price: "₹540", description: "Slow cooked lentil and red kidney beans curry", dietType: "veg" },
      { name: "Paneer Pasandha", price: "₹540", description: "Paneer, stuffed with aromatic nuts and spice, in a creamy tomato curry", dietType: "veg" },
      { name: "Kadai Mushroom / Paneer", price: "₹540", description: "Mushroom or paneer cooked in kadai masala and homemade spices", dietType: "veg" },
      { name: "Murgh Lahori", price: "₹600", description: "Tender chicken cubes in a rich tomato onion curry", dietType: "non-veg" },
      { name: "Keema Chicken", price: "₹600", description: "Minced chicken and aromatic spices in onion tomato masala", dietType: "non-veg" },
      { name: "Murgh Jahangiri", price: "₹600", description: "Rich and creamy Mughalai chicken curry cooked in peanut and yoghurt base", dietType: "non-veg" },
      { name: "Kadai Chicken", price: "₹620", description: "Tender cubes of chicken cooked with kadai masala and homemade spices", dietType: "non-veg" },
      { name: "Fish in Tangy Curry", price: "₹640", description: "Slices of fish cooked in a tomato curry with tamarind spices and coconut milk", tags: ["seafood"] },
      { name: "Kerala Prawn Curry", price: "₹640", description: "Prawns, cooked with coconut oil, onion and coconut milk", tags: ["seafood"] },
      { name: "Mutton Rogan Josh", price: "₹750", description: "Slow cooked mutton curry, marinated in authentic spices and cooked to perfection", dietType: "non-veg" },
    ],
  },
  {
    id: "sides",
    title: "BREADS & RICE",
    items: [
      { name: "Tandoori Roti / Naan", price: "₹90", dietType: "veg" },
      { name: "Butter Roti / Naan", price: "₹120", dietType: "veg" },
      { name: "Garlic Naan", price: "₹140", dietType: "veg" },
      { name: "Lachha Paratha", price: "₹140", dietType: "veg" },
      { name: "Chilli Cheese Naan", price: "₹200", dietType: "veg" },
      { name: "Steamed Rice", price: "₹220", dietType: "veg" },
      { name: "Curd Rice", price: "₹250", dietType: "veg" },
      { name: "Veg Pulao", price: "₹360", dietType: "veg" },
    ],
  },
  {
    id: "beverages",
    title: "BEVERAGES",
    subCategories: [
      {
        name: "Hot Beverages",
        items: [
          { name: "Espresso", price: "₹100", dietType: "veg" },
          { name: "Macchiato", price: "₹160", dietType: "veg" },
          { name: "Double Espresso", price: "₹160", dietType: "veg" },
          { name: "Americano", price: "₹180", dietType: "veg" },
          { name: "Black Tea", price: "₹180", variants: "Milk / Lime", dietType: "veg" },
          { name: "Green Tea / Earl Grey", price: "₹180", dietType: "veg" },
          { name: "Piccolo", price: "₹200", dietType: "veg" },
          { name: "Cappuccino", price: "₹220", dietType: "veg" },
          { name: "Latte", price: "₹220", dietType: "veg" },
          { name: "Hot Chocolate", price: "₹340", dietType: "veg" },
        ],
      },
      {
        name: "Mocktails & Coolers",
        items: [
          { name: "Kokum Sherbet", price: "₹340", dietType: "veg" },
          { name: "Lime Mint Cooler", price: "₹340", dietType: "veg" },
          { name: "Strawberry Basil Crush", price: "₹340", dietType: "veg" },
          { name: "Virgin Mojito", price: "₹340", dietType: "veg" },
          { name: "Matcha Lemonade", price: "₹380", dietType: "veg" },
          { name: "Chia Lemonade Soda", price: "₹400", dietType: "veg" },
        ],
      },
      {
        name: "Iced Teas",
        items: [
          { name: "Ice Tea", price: "₹340", variants: "Peach / Litchi / Lemon", dietType: "veg" },
        ],
      },
      {
        name: "Fresh Juices",
        items: [
          { name: "Orange / Litchi", price: "₹200", dietType: "veg" },
          { name: "Apple / Pineapple", price: "₹200", dietType: "veg" },
          { name: "Cranberry / Guava", price: "₹250", dietType: "veg" },
          { name: "Watermelon", price: "₹350", dietType: "veg" },
          { name: "Orange", price: "₹400", dietType: "veg" },
        ],
      },
      {
        name: "Milkshakes",
        items: [
          { name: "Vanilla / Chocolate / Strawberry", price: "₹380", dietType: "veg" },
          { name: "Cookies and Cream", price: "₹380", dietType: "veg" },
          { name: "Nutella", price: "₹420", dietType: "veg" },
          { name: "Biscoff Coffee", price: "₹440", dietType: "veg" },
          { name: "Banana & Caramel", price: "₹440", dietType: "veg" },
        ],
      },
      {
        name: "Mixers",
        items: [
          { name: "Soda", price: "₹120", dietType: "veg" },
          { name: "Coke / Sprite / Fanta", price: "₹140", dietType: "veg" },
          { name: "Tonic Water", price: "₹210", dietType: "veg" },
          { name: "Red Bull", price: "₹290", dietType: "veg" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: "DESSERTS",
    items: [
      { name: "Basque Cheesecake", price: "₹300", description: "Served with homemade berry compote", dietType: "veg" },
      { name: "Biscoff Drip Cake", price: "₹300", description: "Layers of vanilla sponge sandwiched together with Biscoff spread and whipped vanilla cream", dietType: "veg" },
      { name: "Belgian Chocolate Mousse Cake", price: "₹300", description: "Chocolate cake with layers of dark, milk and white chocolate mousse", dietType: "veg" },
      { name: "Tiramisu", price: "₹350", description: "Espresso soaked Savoiardi, mascarpone cream topped with chocolate shavings and cocoa", dietType: "veg" },
    ],
  },
];

export const categoryNavItems = menuCategories.map((cat) => ({
  id: cat.id,
  label: cat.title,
}));
