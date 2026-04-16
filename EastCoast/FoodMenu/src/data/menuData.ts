export type DietType = "veg" | "non-veg" | "both";

export interface MenuItem {
  id?: string;
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
      { name: "Soup of the Day Veg", price: "₹300", dietType: "veg" },
      { name: "Soup of the Day Non-Veg", price: "₹350", dietType: "non-veg" },
      { name: "Clear Soup", price: "₹300 / ₹350 / ₹360", variants: "Veg / Chicken / Prawns", description: "Tofu, glass noodles, bok choy chinese cabbage" },
      { name: "Tom Kha Soup", price: "₹300 / ₹350 / ₹360", variants: "Veg / Chicken / Prawns", description: "Coconut milk-based soup with lemongrass, galangal, mushroom" },
      { name: "Tom Yum Soup Prawn", price: "₹420", description: "Traditional thai broth soup with lemongrass, kaffir lime leaves and mushroom", tags: ["seafood"] },
    ],
  },
  {
    id: "salads",
    title: "SALADS",
    items: [
      { name: "Greek Salad", price: "₹460", description: "Lettuce, cucumber, tomatoes, onions, olives, peppers and feta with a vinaigrette dressing", dietType: "veg" },
      { name: "Burrata Salad", price: "₹580", description: "Fresh tomatoes, creamy burrata cheese, basil walnut pesto balsamic dressing drizzle", dietType: "veg" },
      { name: "Watermelon and Feta Salad", price: "₹460", description: "Watermelon, onions, feta, lettuce, peppers and nuts with honey balsamic dressing", dietType: "veg" },
      { name: "Honey Citrus Salad", price: "₹480", description: "Lettuce, orange, fig, onions, peppers, raisins and walnuts with orange balsamic dressing", dietType: "veg" },
      { name: "Roasted Pears Salad", price: "₹500", description: "Roasted pears, bell peppers, onion, figs, parmesan and pomegranate dressing", dietType: "veg" },
      { name: "Thai Som Tam Salad", price: "₹420", description: "Thai style papaya salad with cherry tomato, long beans, peanut and som-tam dressing", dietType: "veg" },
      { name: "Grilled Chicken and Eggplant Salad", price: "₹560", description: "Lettuce, grilled chicken, roasted eggplant, baby potatoes with curry mayo and honey balsamic dressing", dietType: "non-veg" },
      { name: "Grilled Prawn Salad", price: "₹580", description: "Lettuce, grilled prawns, tri-peppers, and onions with orange balsamic dressing", tags: ["seafood"] },
    ],
  },
  {
    id: "starters",
    title: "STARTERS",
    subCategories: [
      {
        name: "Vegetarian Starters",
        items: [
          { name: "Falafel with Pita Pocket", price: "₹400", description: "Chickpea fritters stuffed in pita bread and hummus dip", tags: ["new"], dietType: "veg" },
          { name: "Honey Chilli Wedges", price: "₹380", description: "Potato wedges tossed in a homemade sweet chilli sauce", dietType: "veg" },
          { name: "Cherry Tomato Burrata Crostini", price: "₹460", description: "Crostini topped with creamy burrata cheese, cherry tomatoes, pesto and balsamic dressing", tags: ["new"], dietType: "veg" },
          { name: "Olive and Hummus Bruschetta", price: "₹420", description: "Warm garlic bread topped with olives, hummus cheese and olive oil", dietType: "veg" },
          { name: "Mushroom Filo Pastry", price: "₹460", description: "Layered filo pastry stuffed with creamy mushroom pate and truffle oil", tags: ["new"], dietType: "veg" },
          { name: "Puliyogare Poppers", price: "₹380", description: "Tamarind infused rice balls, deep fried and served with yoghurt dip", tags: ["new"], dietType: "veg" },
          { name: "Sambousik Jibneh", price: "₹450", description: "Thin flour dough stuffed with cottage cheese and mozzarella served with a spicy relish", dietType: "veg" },
          { name: "Fig and Pears Goats Cheese Bruschetta", price: "₹420", description: "Ricotta and goat cheese spread, grilled figs, pomegranate reduction on toasted baguette", tags: ["new"], dietType: "veg" },
          { name: "Crispy Broccoli Tacos", price: "₹380", description: "Soft taco topped with crispy batter fried broccoli and cheesy jalapeno mayo", dietType: "veg" },
          { name: "Veg Quesadillas", price: "₹450", description: "Mix of roasted vegetables, cheese stuffed in tortillas and grilled", dietType: "veg" },
          { name: "Truffle Parmesan Makhana", price: "₹420", description: "Makhana roasted black pepper, truffle oil and parmesan cheese", tags: ["new"], dietType: "veg" },
          { name: "Loaded Mexican Nachos", price: "₹400 / ₹460", variants: "Veg / Chicken", description: "Nachos topped with pico de gallo, sour cream, hot sauce and queso" },
          { name: "Achari Paneer Tikka", price: "₹440", description: "Soft chunks of paneer marinated in tandoori masala and grilled with vegetables", dietType: "veg" },
          { name: "Stuffed Mushrooms", price: "₹380", description: "Button mushrooms stuffed with cottage cheese, nuts and roasted to perfection", dietType: "veg" },
          { name: "Malai Broccoli", price: "₹420", description: "Broccoli florets and pineapple marinated in a creamy malai masala cooked in a clay pot", dietType: "veg" },
          { name: "Masala Papad", price: "₹240", description: "Masala papad topped with fresh tomatoes, onions and spices", dietType: "veg" },
          { name: "Masala Peanuts", price: "₹260", description: "Masala peanuts topped with fresh tomatoes, onions and spices", dietType: "veg" },
          { name: "Achari Aloo", price: "₹420", description: "Small potatoes marinated with green chillies, herbs and spices", tags: ["new"], dietType: "veg" },
          { name: "Cheesy Jalapeno Triangles", price: "₹380", description: "Jalapenos, cheddar, and mozzarella pockets – deep fried", tags: ["new"], dietType: "veg" },
          { name: "Hara Bara Kebab", price: "₹380", description: "Spinach, peas, and potato patty fried and served with mint chutney", dietType: "veg" },
          { name: "Hara Mutter Paneer Tikka", price: "₹480", description: "Cubes of paneer stuffed with green peas and cheese and cooked in tandoor", tags: ["new"], dietType: "veg" },
          { name: "Crispy Lotus Stem", price: "₹420", description: "Deep fried lotus stem with bell peppers tossed in spicy roasted chilli paste", dietType: "veg" },
          { name: "Crispy Corn", price: "₹380", description: "Crispy american corn tossed in five spice powder, onion and garlic", dietType: "veg" },
          { name: "Shitake and Chestnut Stir Fry", price: "₹460", description: "Wok tossed shitake mushrooms and water chestnut fry with chilli garlic soy topped with fried garlic", dietType: "veg" },
        ],
      },
      {
        name: "Non-Vegetarian Starters",
        items: [
          { name: "Panko Parmesan Chicken Strips", price: "₹520", description: "Chicken strips marinated with parmesan, peri-peri, herbs crumb fried and served with spicy mayo", dietType: "non-veg" },
          { name: "Garlic Parmesan Chicken", price: "₹550", description: "Grilled chicken thigh marinated with garlic, parmesan, and herbs", dietType: "non-veg" },
          { name: "Prawn Quesadillas", price: "₹540", description: "Mexican seasoned prawns grilled with cheddar and mozzarella cheese on tortilla", tags: ["new", "seafood"] },
          { name: "Calamari Tacos", price: "₹520", description: "Flour tortilla, tempura fried calamari, tartare sauce, carrots, cucumber, sesame oil", tags: ["new", "seafood"] },
          { name: "Herb Garlic Prawns", price: "₹580", description: "Prawns stir fried with olive oil, chilli flakes, garlic, parsley served with garlic bread", tags: ["seafood"] },
          { name: "Fish Skewers", price: "₹520", description: "Fish strips marinated with herbs crumb fried and served with tartar sauce", tags: ["seafood"] },
          { name: "Calamari Fritters", price: "₹560", description: "Deep fried calamari rings served with tartar sauce", tags: ["seafood"] },
          { name: "Pesto Parmesan Fish", price: "₹580", description: "Fish cubes marinated with basil pesto sauce and parmesan", tags: ["new", "seafood"] },
          { name: "Bacon Wrapped Prawn", price: "₹600", description: "Tiger prawn wrapped with bacon and deep fried to perfection", tags: ["new", "seafood"] },
          { name: "Korean Beef Stir Fry", price: "₹580", description: "Korean inspired beef stir fry with gochujang chilli paste", tags: ["new"], dietType: "non-veg" },
          { name: "Roasted Beef Stir Fry", price: "₹580", description: "Thinly sliced roasted beef stir fried with bell peppers, onions, and spices", dietType: "non-veg" },
          { name: "Tandoori Murgh", price: "₹520 / ₹800", variants: "Half / Full", description: "Succulent pieces of whole chicken marinated in tandoor masala and grilled", dietType: "non-veg" },
          { name: "Achari Chicken Tikka", price: "₹520", description: "Soft chunks of chicken marinated in tandoori masala and charcoal grilled", tags: ["new"], dietType: "non-veg" },
          { name: "Murgh Malai Kebab", price: "₹520", description: "Chicken tenders marinated in a creamy malai masala cooked in tandoor", dietType: "non-veg" },
          { name: "Chicken Tangri Kebab", price: "₹600", description: "Juicy chicken legs marinated with indian herbs, spices and grilled", dietType: "non-veg" },
          { name: "Chilli Cheese Chicken Tikka", price: "₹560", description: "Chicken marinated in tandoori masala topped with cheese and green chillies", dietType: "non-veg" },
          { name: "Jhinga Anarkali", price: "₹580", description: "Prawns marinated with yoghurt, spices, and dry pomegranate", tags: ["new", "seafood"] },
          { name: "Curry Leaf Prawns", price: "₹580", description: "Prawns marinated with homemade curry leaf masala and cooked in tandoor", tags: ["seafood"] },
          { name: "Kandhari Fish Tikka", price: "₹580", description: "Medallions of fish marinated in a kandhari chilli marination, kebab spices and grilled", tags: ["seafood"] },
          { name: "Tawa Prawns", price: "₹550", description: "Prawns marinated with south indian masalas and spices and tawa fried with curry leaves", tags: ["new", "seafood"] },
          { name: "Tawa Fish Fry", price: "₹560", description: "Fish slice marinated in indian spice and tawa fried", tags: ["seafood"] },
          { name: "Mutton Shikampuri", price: "₹620", description: "Mutton keema mixed with homemade spices, shallow fried", dietType: "non-veg" },
          { name: "Tawa Calamari", price: "₹540", description: "Squid rings sauteed with traditional south Indian masala", tags: ["new", "seafood"] },
          { name: "Tandoori Chops", price: "₹650", description: "Lamb chops marinated with home-made tandoor masala and cooked in clay pot", dietType: "non-veg" },
          { name: "Stir Fried Chicken and Shiitake", price: "₹560", description: "Strips of chicken and mushroom tossed with soy garlic sauce", tags: ["new"], dietType: "non-veg" },
          { name: "Sweet and Sour Cashew Chicken", price: "₹540", description: "Chicken batter fried and tossed in a sweet sauce topped with sesame seeds and cashews", tags: ["new"], dietType: "non-veg" },
          { name: "Black Pepper Chicken / Prawn", price: "₹580 / ₹600", description: "Batter fried chicken / prawn tossed with oyster sauce, dark soy and crushed black pepper" },
          { name: "Thai Basil Prawns", price: "₹600", description: "Prawns cooked with basil thai spices and herbs", tags: ["seafood"] },
          { name: "Pan Fried Chilli Fish", price: "₹580", description: "Pan fried fish tossed with phuket style chilli sauce", tags: ["seafood"] },
          { name: "Salmon Sushi Tart", price: "₹950", description: "Fried sushi tart base topped with salmon cubes, pickled radish, Japanese mayo and scallion", tags: ["new", "seafood"] },
          { name: "Loaded Egg Skillet", price: "₹450", description: "Loaded egg skillet with chicken, pepperoni, bacon, mushroom, broccoli, and cheddar cheese", tags: ["new"], dietType: "non-veg" },
          { name: "Asian Style Pork Ribs", price: "₹850", description: "Slow cooked ribs in Char Siu sauce", dietType: "non-veg" },
          { name: "Stir Fried Chilli Lamb", price: "₹600", description: "Deep fried shredded lamb in chilli hoisin sauce", dietType: "non-veg" },
        ],
      },
      {
        name: "Platters",
        items: [
          { name: "Veg Kebab Platter", price: "₹1,100", description: "Stuffed mushroom, veg sheekh kebab, paneer tikka, achari paneer tikka, gobi tikka", dietType: "veg" },
          { name: "Non-Veg Kebab Platter", price: "₹1,550", description: "Chicken tikka, murgh malai kebab, tandoori jhinga, fish tikka, lamb sheekh kebab", dietType: "non-veg" },
          { name: "Chicken Wings Platter", price: "₹880", description: "Peri peri, bbq, sriracha, Korean", dietType: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "fries",
    title: "FRIES",
    items: [
      { name: "Peri Peri Fries", price: "₹340", description: "Fries dusted with peri peri spice mix", tags: ["new"], dietType: "veg" },
      { name: "Masala Fries", price: "₹340", description: "Fries dusted with Indian spices served with spicy mayo", dietType: "veg" },
      { name: "Cheese Fries", price: "₹380", description: "Fries with cheese sauce served with honey mustard mayo", dietType: "veg" },
      { name: "Fried Chicken / Lamb Bolognese Fries", price: "₹460 / ₹500", description: "Crispy fries, Mornay Cheese Sauce and chicken / lamb bolognese", tags: ["new"], dietType: "non-veg" },
    ],
  },
  {
    id: "sushi",
    title: "SUSHI",
    items: [
      { name: "Kappa Maki", price: "₹420", description: "Sushi rice, cucumber, cream cheese", dietType: "veg" },
      { name: "Avocado Maki", price: "₹440", description: "Sushi rice, avocado and scallion", dietType: "veg" },
      { name: "Futo Maki", price: "₹480", description: "Avocado, cucumber, pickled radish, tri capsicum, carrot, lettuce, cream cheese", dietType: "veg" },
      { name: "Ebi Tempura Uramaki", price: "₹500", description: "Sushi rice, crispy tempura prawn", tags: ["seafood"] },
      { name: "Shake Uramaki", price: "₹520", description: "Salmon and cucumber roll", tags: ["seafood"] },
      { name: "Boston Roll", price: "₹580", description: "Crab stick, jalapeno mayo, cream cheese, avocado topped with tobiko", tags: ["seafood"] },
      { name: "California Uramaki", price: "₹580", description: "Crab stick and avocado topped with tobiko", tags: ["seafood"] },
      { name: "Spiced Tuna Uramaki", price: "₹580", description: "Tuna, cucumber, sriracha and togarashi", tags: ["seafood"] },
      { name: "Orange Blossom Uramaki", price: "₹600", description: "Crab stick, cream cheese, avocado, jalapeno mayo topped with smoked salmon", tags: ["seafood"] },
    ],
  },
  {
    id: "momos",
    title: "MOMOS",
    items: [
      { name: "Edamame Momos", price: "₹460", description: "Shitake mushrooms, cream cheese, spinach and edamame", tags: ["new"], dietType: "veg" },
      { name: "Chicken Momos", price: "₹500", description: "Minced chicken, cilantro and scallions", dietType: "non-veg" },
      { name: "Prawn Momos", price: "₹560", description: "Minced prawns, cilantro, and scallions", tags: ["new", "seafood"] },
    ],
  },
  {
    id: "burgers",
    title: "BURGERS",
    items: [
      { name: "Veg Burger", price: "₹480", description: "Breaded vegetable patty layered with lettuce, tomatoes, and cheese", dietType: "veg" },
      { name: "Grilled Chicken Burger", price: "₹650", description: "Grilled chicken patty, lettuce, and caramelized onions", tags: ["new"], dietType: "non-veg" },
      { name: "Fried Chicken Burger", price: "₹650", description: "Crispy fried chicken, coleslaw & hot sauce", dietType: "non-veg" },
      { name: "Korean Fried Chicken Burger", price: "₹650", description: "Crispy fried chicken tossed in gochujang sauce, sesame seeds & coleslaw", dietType: "non-veg" },
      { name: "Smashed Beef Burger", price: "₹700", description: "Smashed beef patty, lettuce, and caramelized onions", tags: ["new"], dietType: "non-veg" },
      { name: "Double Cheese Burger", price: "₹750", description: "Cheese loaded beef patty, american mustard, caramelized onions and sauteed mushrooms", tags: ["new"], dietType: "non-veg" },
    ],
  },
  {
    id: "pasta",
    title: "PASTA",
    items: [
      { name: "Pasta Arrabbiata", price: "₹520", description: "Pasta tossed with spicy homemade tomato sauce", dietType: "veg" },
      { name: "Mac and Cheese", price: "₹560", description: "Macaroni tossed in cream sauce and four cheese mix", dietType: "veg" },
      { name: "Pesto Al Basilico", price: "₹580", description: "Pasta tossed with basil pesto sauce and fresh cream", dietType: "veg" },
      { name: "Pasta Aglio E Olio", price: "₹520", description: "Pasta tossed with olive oil garlic, olives, and chilli flakes", dietType: "veg" },
      { name: "Truffle & Mushroom", price: "₹600", description: "Pasta tossed with button mushroom, cream sauce and truffle oil", tags: ["new"], dietType: "veg" },
      { name: "Verdure Alla Panna", price: "₹560", description: "Pasta tossed with vegetable cream sauce", dietType: "veg" },
      { name: "Spinach and Corn Pesto", price: "₹520", description: "Cream cheese, corn puree and blanched spinach in pesto sauce", dietType: "veg" },
      { name: "Pollo Alla Pana", price: "₹650", description: "Pasta tossed with cream sauce and grilled chicken", dietType: "non-veg" },
      { name: "Gamberi Alla Salsa Rosa", price: "₹680", description: "Pasta tossed with prawns, olives, and pink sauce", tags: ["seafood"] },
      { name: "Carbonara", price: "₹700", description: "Pasta tossed with olive oil, egg yolk, bacon, cream, and parmesan", dietType: "non-veg" },
      { name: "Lamb Bolognese", price: "₹700", description: "Pasta tossed with slow cooked minced lamb and tomato sauce", dietType: "non-veg" },
    ],
  },
  {
    id: "ravioli",
    title: "HAND MADE RAVIOLI",
    items: [
      { name: "Spinach and Corn Pesto Ravioli", price: "₹520", description: "Cream cheese, corn puree and blanched spinach in pesto sauce", dietType: "veg" },
      { name: "Shitake and Goat Cheese Ravioli", price: "₹520", description: "Shitake and button mushroom, goat cheese in mushroom sauce", dietType: "veg" },
      { name: "Shrimp and Mascarpone Ravioli", price: "₹650", description: "Minced shrimp, shallots, garlic, chilli, cilantro and mascarpone in marie rose sauce", tags: ["seafood"] },
      { name: "Minced Beef Bolognese Ravioli", price: "₹660", description: "Beef mince, four cheese blend, demi glaze in brown ragout sauce", dietType: "non-veg" },
    ],
  },
  {
    id: "pizzas",
    title: "PIZZA",
    items: [
      { name: "Pizza Margherita", price: "₹620", description: "Homemade tomato sauce, basil, and mozzarella", dietType: "veg" },
      { name: "Pizza Verdure", price: "₹640", description: "Pizza topped with fresh vegetables, peppers, and olives in arrabiata sauce", dietType: "veg" },
      { name: "Pizza Truffle Fromaggi", price: "₹700", description: "Button mushrooms, capers, olives and truffle oil in cream sauce", tags: ["new"], dietType: "veg" },
      { name: "Pizza Quattro Formaggi", price: "₹700", description: "Pizza topped with cream sauce and four cheese mix", dietType: "veg" },
      { name: "Pizza Napolitana", price: "₹640", description: "Pizza topped with homemade tomato sauce, jalapenos capers, fresh tomatoes, olives", dietType: "veg" },
      { name: "Pizza Alla Pollo", price: "₹750", description: "Pizza topped with homemade tomato and grilled chicken", dietType: "non-veg" },
      { name: "Pizza Pepperoni", price: "₹760", description: "Pizza topped with pepperoni and red paprika", dietType: "non-veg" },
      { name: "Pizza D'Aglio Gamberi", price: "₹780", description: "Pizza topped with garlic prawns, chilli flakes, parsley in cream sauce", tags: ["seafood"] },
      { name: "Pizza Hawaiian", price: "₹780", description: "Bacon, pineapple, mozzarella", dietType: "non-veg" },
    ],
  },
  {
    id: "pizza-addons",
    title: "PIZZA ADD ONS",
    items: [
      { name: "Mushrooms / Vegetables", price: "₹100", dietType: "veg" },
      { name: "Olives / Jalapenos", price: "₹80", dietType: "veg" },
      { name: "Chicken / Cheese", price: "₹150" },
      { name: "Bacon / Prawn / Pepperoni", price: "₹200", dietType: "non-veg" },
    ],
  },
  {
    id: "mains",
    title: "MAINS",
    items: [
      { name: "Seasonal Veg Bake", price: "₹520", description: "Mixed vegetables, corn, peas baked in a creamy cheese sauce served with garlic herb rice and garlic bread", dietType: "veg" },
      { name: "Veg Lasagna", price: "₹560", description: "Layered pasta with a mix of spinach, mushroom and cottage cheese baked with mozzarella and served with garlic bread", dietType: "veg" },
      { name: "Grilled Cottage Cheese Steak", price: "₹600", description: "Seasoned cottage cheese grilled, served with truffle garlic rice and creamy mushroom sauce", tags: ["new"], dietType: "veg" },
      { name: "Caprese Stuffed Chicken", price: "₹680", description: "Grilled chicken breast stuffed with tomatoes, mozzarella served with balsamic reduction potato wedges and buttered vegetables", dietType: "non-veg" },
      { name: "Chicken, Corn and Broccoli", price: "₹580", description: "Chicken, corn and broccoli baked in a Creamy Sauce Gratinate served with garlic herb rice and garlic bread", dietType: "non-veg" },
      { name: "Herb Grilled Chicken Steak", price: "₹640", description: "Herb marinated grilled chicken breast served with black pepper sauce, mashed potatoes and buttered vegetables", dietType: "non-veg" },
      { name: "Lemon Butter Fish", price: "₹680", description: "Lemon mustard marinated fish grilled and served with a creamy lemon butter sauce and herb rice", tags: ["seafood"] },
      { name: "Herb Crusted Salmon", price: "₹1,600", description: "Salmon fillet crusted with herbs and served with sambal sauce", tags: ["seafood"] },
      { name: "Prawn Stroganoff", price: "₹700", description: "Prawns cooked with vegetables in pink sauce served with herb rice", tags: ["new", "seafood"] },
      { name: "Lamb Lasagna", price: "₹780", description: "Layered pasta with lamb bolognese baked with mozzarella served with garlic bread", dietType: "non-veg" },
      { name: "Roasted Beef Steak", price: "₹895", description: "Grilled beef tenderloin served with mushroom sauce, potatoes, and buttered vegetables", dietType: "non-veg" },
      { name: "Pork Ribs", price: "₹800", description: "Slow cooked pork ribs tossed in bbq sauce served with fries", dietType: "non-veg" },
      { name: "Prawn and Squid in Caper Sauce", price: "₹700", description: "Seafood cooked with capers and sundried tomatoes in olive oil", tags: ["new", "seafood"] },
    ],
  },
  {
    id: "pan-asian",
    title: "PAN ASIAN",
    subCategories: [
      {
        name: "Rice",
        items: [
          { name: "Cantonese Fried Rice", price: "₹380 / ₹420 / ₹440", variants: "Veg / Chicken / Prawns", description: "Cantonese style fried rice tossed with assorted vegetables" },
          { name: "Thai Fried Rice", price: "₹440 / ₹480 / ₹520", variants: "Veg / Chicken / Prawns", description: "Basmati rice cooked with bird's eye chilli and basil" },
          { name: "Truffle Garlic Fried Rice", price: "₹620 / ₹680 / ₹690", variants: "Veg / Chicken / Prawns", description: "Sticky jasmine rice cooked in burnt garlic sauce and truffle oil" },
        ],
      },
      {
        name: "Noodles",
        items: [
          { name: "Pad Thai Noodles", price: "₹440 / ₹500 / ₹520", variants: "Veg / Chicken / Prawns", description: "Rice stick noodles tossed with tamarind juice, palm sugar, peanut and chilli flakes" },
          { name: "Char Kway Teow", price: "₹440 / ₹500 / ₹520", variants: "Veg / Chicken / Prawns", description: "Wok tossed flat rice noodles with shitake mushroom, bok choy and kecap manis sauce" },
          { name: "Hakka Noodles", price: "₹440 / ₹480 / ₹520", variants: "Veg / Chicken / Prawns", description: "Indo-chinese noodles made with vegetables (Plain / Schezwan)" },
        ],
      },
      {
        name: "Curries",
        items: [
          { name: "Thai Green Curry", price: "₹520 / ₹560 / ₹580", variants: "Veg / Chicken / Prawns", description: "Coconut based curry made with baby eggplant, shallots, sweet basil leaves, kaffir lime leaves served with jasmine rice" },
          { name: "Thai Red Curry", price: "₹520 / ₹560 / ₹580", variants: "Veg / Chicken / Prawns", description: "Coconut milk based red curry made with baby eggplant, shallots, bamboo shoot, sweet basil leaves, kaffir lime leaves served with jasmine rice" },
          { name: "Pad Krapow", price: "₹620 / ₹680", variants: "Chicken / Pork", description: "Minced chicken and birds eye chilli tossed with homemade holy basil sauce served with steamed basmati rice topped with fried egg", tags: ["new"] },
          { name: "Mongolian Beef and Bamboo Shoot", price: "₹680", description: "Tender beef slices sauteed with bamboo shoot, scallions and peppers", tags: ["new"], dietType: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "indian",
    title: "INDIAN",
    subCategories: [
      {
        name: "Vegetarian",
        items: [
          { name: "Veg Kholapuri", price: "₹460", description: "Potatoes, seasonal vegetables and peas cooked in a spiced tomato curry", dietType: "veg" },
          { name: "Malai Kofta", price: "₹500", description: "Mixed vegetables fried dumpling cooked in a cream and yoghurt curry", dietType: "veg" },
          { name: "Paneer Lababdhar", price: "₹540", description: "Chunks of cottage cheese in a rich tomato and onion curry", dietType: "veg" },
          { name: "Dal Makhani", price: "₹520", description: "Slow cooked lentil and red kidney beans curry", dietType: "veg" },
          { name: "Dal Tadka", price: "₹420", description: "Cooked lentils tempered with chillies and spices", dietType: "veg" },
          { name: "Kadai Mushroom / Paneer", price: "₹540", description: "Mushroom or paneer cooked in kadai masala and homemade spices", dietType: "veg" },
        ],
      },
      {
        name: "Non-Vegetarian",
        items: [
          { name: "Murgh Tikka Masala", price: "₹600", description: "Tandoori chicken chunks cooked in a rich tomato curry", dietType: "non-veg" },
          { name: "Murgh Jahangiri", price: "₹600", description: "Rich and creamy mughal chicken curry cooked in peanut and yoghurt base", tags: ["new"], dietType: "non-veg" },
          { name: "Nadan Fish Curry", price: "₹620", description: "Slices of fish cooked in a tomato curry with tamarind spices and coconut milk", tags: ["new", "seafood"] },
          { name: "Kerala Prawn Stew", price: "₹620", description: "Prawns cooked with coconut oil, onion, and coconut milk", tags: ["new", "seafood"] },
          { name: "Mutton Rogan Josh", price: "₹750", description: "Slow cooked mutton curry marinated with spices and cooked to perfection", dietType: "non-veg" },
        ],
      },
    ],
  },
  {
    id: "sides",
    title: "SIDES",
    items: [
      { name: "Tandoori Naan / Roti", price: "₹90", dietType: "veg" },
      { name: "Butter Roti / Butter Naan", price: "₹120", dietType: "veg" },
      { name: "Garlic Naan", price: "₹140", dietType: "veg" },
      { name: "Chilli Cheese Naan", price: "₹180", dietType: "veg" },
      { name: "Lachha Paratha", price: "₹140", dietType: "veg" },
      { name: "Steamed Rice", price: "₹220", dietType: "veg" },
      { name: "Veg Pulao", price: "₹360", dietType: "veg" },
      { name: "Curd Rice", price: "₹250", dietType: "veg" },
    ],
  },
  {
    id: "beverages",
    title: "BEVERAGES",
    description: "Hot, Cold, Shakes and Mocktails",
    subCategories: [
      {
        name: "Cold Beverages & Mocktails",
        items: [
          { name: "Lime Mint Cooler", price: "₹280", dietType: "veg" },
          { name: "Strawberry Basil Crush", price: "₹320", dietType: "veg" },
          { name: "Kokum Sherbet", price: "₹340", dietType: "veg" },
          { name: "Litchi Lemonade", price: "₹340", dietType: "veg" },
          { name: "Watermelon Basil Fizz", price: "₹360", dietType: "veg" },
          { name: "Vietnamese Iced Coffee", price: "₹320", dietType: "veg" },
          { name: "Ice Tea", price: "₹320", variants: "Peach / Lemon", dietType: "veg" },
        ],
      },
      {
        name: "Shakes",
        items: [
          { name: "Smores Milkshake", price: "₹390", dietType: "veg" },
          { name: "Salted Caramel Milkshake", price: "₹420", dietType: "veg" },
          { name: "Nutella Milkshake", price: "₹440", dietType: "veg" },
        ],
      },
      {
        name: "Frappe",
        items: [
          { name: "Frappe", price: "₹380", variants: "Hazelnut / French Vanilla / Irish", dietType: "veg" },
        ],
      },
      {
        name: "Hot Beverages",
        items: [
          { name: "Espresso", price: "₹100", dietType: "veg" },
          { name: "Double Espresso", price: "₹160", dietType: "veg" },
          { name: "Macchiato", price: "₹140", dietType: "veg" },
          { name: "Cappuccino", price: "₹200", dietType: "veg" },
          { name: "Latte", price: "₹200", dietType: "veg" },
          { name: "Piccolo", price: "₹200", dietType: "veg" },
          { name: "Americano", price: "₹180", dietType: "veg" },
          { name: "Black Tea", price: "₹180", dietType: "veg" },
          { name: "Green Tea", price: "₹180", dietType: "veg" },
          { name: "Hot Chocolate", price: "₹320", dietType: "veg" },
        ],
      },
      {
        name: "Others",
        items: [
          { name: "Water Bottle", price: "₹20", dietType: "veg" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: "DESSERTS",
    items: [
      { name: "Basque Cheesecake", price: "₹280", description: "Served with homemade berry compote", dietType: "veg" },
      { name: "Biscoff Drip Cake", price: "₹280", description: "Layers of vanilla sponge sandwiched with biscoff spread and whipped vanilla cream", dietType: "veg" },
      { name: "Belgian Chocolate Mousse Cake", price: "₹280", description: "Chocolate sponge with layers of dark, milk, and white chocolate mousse", dietType: "veg" },
      { name: "Tiramisu", price: "₹320", description: "Espresso soaked ladyfinger biscuits, mascarpone cream topped with chocolate shavings and cocoa", dietType: "veg" },
      { name: "Callebaut Brownie", price: "₹240", description: "Warm dark chocolate chip brownie topped with flaky sea salt (Add on: gelato scoop)", dietType: "veg" },
      { name: "Nutella Cookie", price: "₹220", description: "Thick nutella stuffed chocolate chip cookie (Add on: gelato scoop)", dietType: "veg" },
      { name: "Gelato / Sorbet Scoop", price: "₹190 / ₹220", description: "Flavours of the day (100g)", dietType: "veg" },
      { name: "Takeaway Tubs", price: "₹480 / ₹570", description: "300g gelato / sorbet", dietType: "veg" },
    ],
  },
];

export const categoryNavItems = menuCategories.map((cat) => ({
  id: cat.id,
  label: cat.title,
}));
