import codecs
import json

data = """
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
"""

sections = [
    {
        "id": "soups",
        "title": "Soups",
        "items": [
            { "name": "Zucchini and Corriander Lemon Soup", "price": "300", "description": "Zucchini, chopped coriander and lemon in a vegetable broth." },
            { "name": "Coconut Lemon Grass Symphony", "price": "300", "description": "Coconut milk-based soup with lemon grass, galangal, mushrooms and vegetables." },
            { "name": "Thai Clear", "price": "300/350/380", "description": "Thai clear broth served with boiled vegetables/ chicken/ prawns." },
            { "name": "Crab Chowder", "price": "380", "description": "Mixed seafood and potatoes in a creamy seafood broth." },
            { "name": "Thai Prawn Sonata", "price": "380", "description": "Traditional Thai broth soup with lemon grass, kaffir lime leaves, mushrooms and prawns." },
            { "name": "Thengaipaal Nandu Saaru", "price": "380", "description": "South Indian style crab soup made with coconut milk." }
        ]
    },
    {
        "id": "salads",
        "title": "Salads",
        "items": [
            { "name": "Mediterranean Splendour", "price": "470", "description": "Lettuce, cucumber, tomatoes, onions, olives and feta cheese with a vinaigrette dressing." },
            { "name": "Poached Pear Overture", "price": "470", "description": "Wine poached pears, strawberries, dragon fruits, peppers, onion, walnuts and raisins with parmesan cheese and a pomegranate dressing." },
            { "name": "Som Tam Salad", "price": "440", "description": "Shredded papaya served with sweet and chilli dressing." },
            { "name": "Creamy Buratta Salad", "price": "600", "description": "Fresh tomatoes, creamy burrata cheese, basil, walnut pesto drizzled with a balsamic dressing." },
            { "name": "Curried Chicken Ensemble", "price": "560", "description": "Lettuce, grilled chicken, baby potatoes with curry mayo and a honey balsamic dressing." },
            { "name": "Seafood Ballet", "price": "580", "description": "Lettuce, grilled prawns, squid, fish, tri-peppers and onions with an orange balsamic dressing." }
        ]
    },
    {
        "id": "continental-starters",
        "title": "Continental Starters",
        "items": [
            { "name": "Roasted Pears And Fig Crostini", "price": "420", "description": "Roasted pears and figs with goat cheese spread, drizzled with a pomegranate reduction on a toasted baguette." },
            { "name": "Stuffed Cheese Pockets", "price": "450", "description": "Cottage cheese and mozzarella stuffed in thin flour dough, fried and served with a spicy relish." },
            { "name": "Tri Chilli Cheese Toast", "price": "450", "description": "Bread topped with tri-peppers, chillies and cheese." },
            { "name": "Crispy Cauliflower Tacos", "price": "380", "description": "Soft tacos topped with crispy batter fried cauliflower and cheesy jalapeno mayo." },
            { "name": "Loaded Nachos", "price": "400/460", "description": "Crispy nachos topped with sour cream, cheese and Pico de Gallo. (Veg/Chicken)" },
            { "name": "Cherry Tomato Buratta Crostini", "price": "480", "description": "Roasted cherry tomatoes, pesto, burrata and parmesan on a toasted bagette." },
            { "name": "Crispy Oyster Mushroom", "price": "440", "description": "Fried oyster mushroom tossed with togarashi and served with sweet chilli sauce." },
            { "name": "Veg Quesadilla", "price": "450", "description": "Roasted vegetables, jalapenos olives and cheese stuffed in tortillas and grilled." },
            { "name": "Parmesan Prawn Prelude", "price": "580", "description": "Prawns marinated with parmesan cheese, peri peri herbs, crumb fried and served with spicy mayo." },
            { "name": "Basil Garlic Prawns", "price": "600", "description": "Prawns stir-fried with olives, chilli flakes, garlic and basil, served with garlic bread." },
            { "name": "Garlic Parmesan Chicken", "price": "550", "description": "Grilled chicken thighs marinated with garlic, parmesan, herbs and spices." },
            { "name": "BBQ Pork Ribs", "price": "850", "description": "Roasted pork ribs in BBQ sauce." },
            { "name": "Classic Fish & Chip", "price": "690", "description": "Panko fried fish, served with fries, coleslaw and tartare sauce." }
        ]
    },
    {
        "id": "asian",
        "title": "Asian",
        "items": [
            { "name": "Honey Chilli Lotus Stem", "price": "440", "description": "Deep fried lotus stem, tossed in honey and roasted chilli paste." },
            { "name": "Wok Tossed Vegetables", "price": "380", "description": "Batter fried vegetables tossed in Asian spicy sauce." },
            { "name": "Spicy Wok Tossed Cottage Cheese", "price": "440", "description": "Batter fried paneer tossed with peppers and chilli sauce." },
            { "name": "Mushroom Stir Fry", "price": "480", "description": "Assorted stir fried mushrooms, topped with fried garlic." },
            { "name": "Crispy Fried Corn", "price": "380", "description": "Fried American corn tossed with five spice powder, onion and scallions." },
            { "name": "Crispy Rice Crusted Tiger Prawns", "price": "600", "description": "Prawns coated with rice flakes, fried and served with crying tiger sauce (contains fish sauce.)" },
            { "name": "Wasabi Prawn", "price": "600", "description": "Batter fried tempura prawns sautéed in creamy wasabi mayo." },
            { "name": "Butter Garlic Curry Leaf Prawns", "price": "600", "description": "Fried prawns tossed in a bold garlic and curry leaf reduction." },
            { "name": "Kung Pao Prawn", "price": "600", "description": "Batter fried tiger prawns tossed in a sweet and spicy kung pao sauce" },
            { "name": "Thai Grilled Fish", "price": "560", "description": "Pan grilled fish fillet marinated in Thai style chilli sauce." },
            { "name": "Stir Fry Lamb", "price": "650", "description": "Batter fried lamb strips, tossed with a sweet and spicy Asian sauce." },
            { "name": "Asian Style Pork Ribs", "price": "850", "description": "Slow cooked pork ribs cooked in a char sui sauce." },
            { "name": "Crushed Pepper Chicken", "price": "580", "description": "Battered fried chicken tossed with oyster sauce, dark soy and crushed black pepper." },
            { "name": "Karaage Chicken", "price": "540", "description": "Japanese fried chicken served with Gochujang chilli mayo." },
            { "name": "Squid And Prawns In Capers Sauce", "price": "750", "description": "Fresh and tender squid and prawns, cooked with capers and sundried tomatoes" }
        ]
    },
    {
        "id": "indian",
        "title": "Indian",
        "items": [
            { "name": "Achari Aloo", "price": "420", "description": "Small potatoes marinated with green chilies, herbs and spices" },
            { "name": "Hara Bara Sheek Kebab", "price": "400", "description": "Green peas Seekh kebab, grilled in clay pot." },
            { "name": "Achari Paneer Medley.", "price": "450", "description": "Soft chunks of paneer marinated in tandoori masala and grilled with vegetables." },
            { "name": "Tandoori Stuffed Mushroom", "price": "380", "description": "Cheese stuffed mushrooms, marinated in tandoor masala." },
            { "name": "Malai Broccoli And Pineapple", "price": "420", "description": "Grilled broccoli florets and pineapple chunks in creamy malai masala and cheese." },
            { "name": "Malai Badami Chicken Tikka", "price": "540", "description": "Tender cubes of chicken marinated in a nutty, creamy tandoori masala." },
            { "name": "Mutton Sheek Kebab", "price": "620", "description": "Minced lamb meat mixed with homemade Indian spice mix and char grilled." },
            { "name": "Kandari Prawns", "price": "600", "description": "Kandhari chilly marinated prawns, cooked in a clay pot." },
            { "name": "Tandoori Jhinga", "price": "600", "description": "Grilled prawns, marinated in spicy tandoori masala." },
            { "name": "Achari Fish Tikka", "price": "600", "description": "Fresh fish cubes marinated in achari tandoor masala and chargrilled." },
            { "name": "Pepper Chicken Tikka", "price": "520", "description": "Soft chunks of chicken marinated in black pepper and charcoal grilled." },
            { "name": "Hariyali Chicken Tikka", "price": "520", "description": "Soft chunks of chicken marinated in green tandoori masala and charcoal grilled." },
            { "name": "Roasted Beef Stir-Fry", "price": "600", "description": "Thinly sliced roasted beef, stir fried with bell peppers, onions and spices." },
            { "name": "Kerala Beef Fry", "price": "580", "description": "Kerala style beef fry with coconut." },
            { "name": "Tandoori Chicken", "price": "550/900", "description": "Succulent pieces of whole chicken, marinated in tandoor masala and grilled. (half/full)." },
            { "name": "Cheese Chilli Chicken Kebab", "price": "540", "description": "Soft chunks of chicken marinated in tandoori masala, topped with cheese and" }
        ]
    },
    {
        "id": "fries",
        "title": "Fries",
        "items": [
            { "name": "Peri Peri Fries", "price": "360", "description": "Fries dusted with peri peri spice mix" },
            { "name": "Masala Fries", "price": "360", "description": "Fries dusted with Indian spices served with spicy mayo" },
            { "name": "Cheese Fries", "price": "400", "description": "Fries with cheese sauce served with honey mustard mayo" },
            { "name": "Fried Chicken / Lamb Bolognese Fries", "price": "460/500", "description": "Crispy fries, mornay cheese sauce and chicken / lamb Bolognese" }
        ]
    },
    {
        "id": "wings",
        "title": "Wings",
        "items": [
            { "name": "BBQ Chicken Wings", "price": "480", "description": "Fried wings tossed in homemade bbq sauce served with garlic cream" },
            { "name": "Korean Fried Chicken Wings", "price": "500", "description": "Homemade gochujang sauce tossed with crispy chicken wings" },
            { "name": "Peri Peri Wings", "price": "480", "description": "Deep fried wings dusted with peri peri spice mix" },
            { "name": "Tandoori Wings", "price": "480", "description": "Chicken wings marinated with indian spices cooked in tandoor served with mint chutney" }
        ]
    },
    {
        "id": "platters",
        "title": "Platters",
        "items": [
            { "name": "Veg Kebab Platter", "price": "1100", "description": "Stuffed mushroom, veg sheekh kebab, paneer tikka, achari paneer tikka, gobi tikka" },
            { "name": "Non-Veg Kebab Platter", "price": "1600", "description": "Chicken tikka, murgh malai kebab, tandoori jhinga, fish tikka, lamb sheekh kebab" },
            { "name": "Chicken Wings Platter", "price": "920", "description": "Peri peri, bbq, sriracha, Korean" }
        ]
    },
    {
        "id": "sushi",
        "title": "Sushi",
        "items": [
            { "name": "Kappa Maki", "price": "440", "description": "Sushi Rice, cucumber, and cream cheese" },
            { "name": "Avocado Maki", "price": "460", "description": "Sushi Rice, avocado and scallion" },
            { "name": "Futo Maki", "price": "500", "description": "Avocado, cucumber, pickled radish, tri capsicum, carrot, lettuce, cream cheese" },
            { "name": "Ebi Tempura Uramaki", "price": "580", "description": "Sushi Rice, crispy tempura prawn" },
            { "name": "Shake Uramaki", "price": "580", "description": "Salmon and cucumber roll" },
            { "name": "Boston Roll", "price": "600", "description": "Crab Stick, Jalapeno Mayo, cream cheese, avocado topped with tobiko" },
            { "name": "California Uramaki", "price": "600", "description": "Crab stick and avocado topped with tobiko" },
            { "name": "Spiced Tuna Uramaki", "price": "600", "description": "Tuna, Cucumber, sriracha and togarashi" },
            { "name": "Orange Blossom Uramaki", "price": "600", "description": "Crab stick, cream cheese, avocado, jalapeno mayo topped with smoked salmon" }
        ]
    },
    {
        "id": "burgers",
        "title": "Burgers",
        "items": [
            { "name": "Veg Burger", "price": "480", "description": "Breaded vegetable patty layered with lettuce, tomatoes, and cheese" },
            { "name": "Grilled Chicken Burger", "price": "650", "description": "Grilled chicken patty, lettuce, and caramelized onions" },
            { "name": "Fried Chicken Burger", "price": "650", "description": "Crispy fried chicken, coleslaw hot sauce" },
            { "name": "Korean Fried Chicken Burger", "price": "650", "description": "Crispy fried chicken tossed in gochujang sauce, sesame seeds coleslaw" },
            { "name": "Smashed Beef Burger", "price": "700", "description": "Smashed beef patty, lettuce, and caramelized onions." },
            { "name": "Double Cheese Burger", "price": "750", "description": "Cheese loaded beef patty, american mustard, caramelized onions and sauteed mushrooms" }
        ]
    },
    {
        "id": "pizzas",
        "title": "Wood Fired Pizzas",
        "items": [
            { "name": "Classic Margarita", "price": "650", "description": "Homemade tomato sauce, basil and mozzarella." },
            { "name": "Truffle Fromaggi", "price": "720", "description": "Mixed cheese, truffle oil, sun-dried tomato & olive oil." },
            { "name": "Grilled Veg Symphony", "price": "680", "description": "Grilled eggplant, zucchini, and olives." },
            { "name": "Pomodoro Serenade", "price": "700", "description": "Cherry and sun-dried tomatoes, basil, parmesan cheese & olive oil." },
            { "name": "Pizza D'Aglio Marinara", "price": "780", "description": "Garlic prawns, fish and squid with chilli flakes and parsley." },
            { "name": "Pizza Di Salami", "price": "780", "description": "Homemade tomato sauce, pork pepperoni, bacon, sausage, caramelised onion and mozzarella cheese." },
            { "name": "Pizza Hawaiian", "price": "780", "description": "Bacon, pineapple, and mozzarella cheese." },
            { "name": "Pollo Alla Basilico", "price": "760", "description": "Homemade basil pesto sauce, grilled chicken and tri peppers." }
        ]
    },
    {
        "id": "raviolis",
        "title": "Hand Made Raviolis",
        "items": [
            { "name": "Spinach And Corn Pesto", "price": "520", "description": "Cream cheese, corn puree and blanched spinach in pesto sauce" },
            { "name": "Shitake And Goat Cheese", "price": "520", "description": "Shitake and button mushroom, goat cheese in mushroom sauce" },
            { "name": "Shrimp And Mascarpone", "price": "650", "description": "Minced shrimp, shallots, garlic, chilli, cilantro and mascarpone in marie rose sauce" },
            { "name": "Minced Beef Bolognese", "price": "660", "description": "Beef mince, four cheese blend, demi glaze in brown ragout sauce" }
        ]
    },
    {
        "id": "addons",
        "title": "Add Ons",
        "items": [
            { "name": "Mushrooms / Vegetables", "price": "100" },
            { "name": "Olives / Jalapenos", "price": "80" },
            { "name": "Chicken / Cheese", "price": "150" },
            { "name": "Bacon / Prawn / Pepperoni", "price": "200" }
        ]
    },
    {
        "id": "continental-mains",
        "title": "Continental Mains",
        "items": [
            { "name": "Verdure Alla Panna", "price": "600", "description": "Pasta tossed with creamy sauce and vegetables" },
            { "name": "Spaghetti Ala Pesto Basilico", "price": "600", "description": "Pasta tossed with basil pesto sauce, broccoli, olives and parmesan cheese." },
            { "name": "Spaghetti Ala Pesto Pomodoro", "price": "600", "description": "Pasta tossed with sun-dried tomato pesto sauce, capsicums, olives and parmesan cheese." },
            { "name": "Spaghetti Aglio E Olio", "price": "550", "description": "Pasta tossed with olive oil, garlic, olives and chilli flakes." },
            { "name": "Lasagna Di Verdure", "price": "600", "description": "Layered pasta baked with capsicums, zucchini, eggplant mix and mozzarella served with garlic bread." },
            { "name": "Pasta Napolitana", "price": "560", "description": "Pasta tossed with homemade tomato sauce, vegetables, olives, capers, and basil" },
            { "name": "Mixed Veg Casserole", "price": "600", "description": "Mixed vegetables, corn, peas baked in a creamy cheese sauce served with garlic herb rice and garlic bread." },
            { "name": "Seafood Al Rosso Pasta", "price": "680", "description": "Pasta tossed with grilled sea food, cooked with tomato cream sauce and fresh herbs." },
            { "name": "Grilled Beef Masterpiece", "price": "895", "description": "Grilled beef tenderloin served with green pepper sauce, potatoes and buttered vegetables." },
            { "name": "Herb Grilled Chicken Roulade", "price": "680", "description": "Herb marinated chicken breast stuffed with cheese sun-dried tomatoes and basil served with creamy mushroom sauce, mashed potatoes, buttered broccoli and beans." },
            { "name": "Herb Grilled Fish", "price": "700", "description": "Herb marinated fish grilled and served with a creamy lemon butter sauce and herb rice." },
            { "name": "Grilled Chicken Casserole", "price": "580", "description": "Chicken, sun-dried tomatoes, olives, tri peppers and broccoli baked in a creamy sauce gratinate served with garlic herb rice and garlic bread." },
            { "name": "Lasagna Lamb", "price": "750", "description": "Layered pasta baked with lamb Bolognese and mozzarella served with garlic bread." },
            { "name": "Penne Alfredo Chicken", "price": "650", "description": "Pasta tossed with cream sauce, grilled chicken and fresh herbs." },
            { "name": "Lamb Bolognese Spaghetti", "price": "700", "description": "Pasta tossed with slow cooked minced chicken and tomato sauce." },
            { "name": "Prawn Stroganoff", "price": "700", "description": "Prawns cooked with vegetables in pink sauce served with herb rice" },
            { "name": "Herb Crusted Salmon", "price": "1600", "description": "Salmon fillet crusted with herbs and served with sambal sauce" }
        ]
    },
    {
        "id": "pan-asian-mains",
        "title": "Pan Asian Mains",
        "items": [],
        "subsections": [
            {
                "title": "Noodles",
                "items": [
                    { "name": "PAD THAI NOODLES", "price": "440/ 520/ 560", "description": "Rice stick noodles tossed with tamarind juice, palm sugar, peanut and chilli flakes with choice of vegetables, chicken or prawns." },
                    { "name": "SCHEZWAN NOODLES", "price": "420/ 480/ 520", "description": "Indo-Chinese style noodles made with vegetables with choice of vegetables, chicken or prawns." },
                    { "name": "THAI STIR FRIED NOODLES", "price": "440/ 520/ 560", "description": "Noodles cooked with bird's eye chilli and basil leaves with choice of vegetables, chicken or prawns." },
                    { "name": "PAD KRAPOW (Chicken / Pork)", "price": "620 / 680", "description": "Minced chicken and birds eye chilli tossed with homemade holy basil sauce served with steamed basmati rice topped with fried egg." },
                    { "name": "MONGOLIAN BEEF AND BAMBOO SHOOT", "price": "680", "description": "Tender Beef slices sauteed with bamboo shoot, scallions and peppers" },
                    { "name": "CHAR KWAY TEOW", "price": "620/680/700", "description": "Wok tossed flat rice noodles with shitake mushroom, bok choy and kecap manis sauce (choice of veg, chicken or prawns)" }
                ]
            },
            {
                "title": "Rice",
                "items": [
                    { "name": "CANTONESE FRIED RICE", "price": "380/420/440", "description": "Cantonese style fried rice tossed with assorted vegetables with choice of vegetables, chicken or prawns" },
                    { "name": "THAI BASIL FRIED RICE", "price": "440/480/540", "description": "Basmati rice cooked with bird's eye chilli and basil leaves with choice of vegetables, chicken or prawns." },
                    { "name": "THAI GREEN CURRY", "price": "480/520/560", "description": "Coconut milk-based curry made with baby eggplant, shallots, sweet basil leaves and kaffir lime leaves, served with jasmine rice with choice of vegetables, chicken or prawns." },
                    { "name": "THAI RED CURRY", "price": "480/520/560", "description": "Coconut milk based red curry made with baby eggplant, shallots, bamboo shoot, sweet basil leaves and kaffir lime leaves, served with jasmine rice with choice of vegetables, chicken or prawns." },
                    { "name": "TRUFFLE GARLIC FRIED RICE", "price": "620/680/700", "description": "Sticky jasmine rice cooked in burnt garlic sauce with truffle oil with choice of vegetables, chicken or prawns." }
                ]
            }
        ]
    },
    {
        "id": "indian-mains",
        "title": "Indian Mains",
        "items": [
            { "name": "MIX VEG CURRY", "price": "460", "description": "Potatoes, seasonal-vegetables and peas, cooked in a spiced tomato curry." },
            { "name": "PANEER LABABDHAR", "price": "540", "description": "Chunks of cottage cheese in a rich tomato and onion curry." },
            { "name": "DHAL MAKHANI", "price": "540", "description": "Slow cooked lentil and red kidney beans curry." },
            { "name": "PANEER PASANDHA", "price": "540", "description": "Paneer, stuffed with aromatic nuts & spice, in a creamy tomato curry." },
            { "name": "MALAI KOFTA", "price": "520", "description": "Kofta dumplings in a cream and yogurt curry." },
            { "name": "KADAI CHICKEN", "price": "620", "description": "Tender cubes of chicken cooked with kadai masala and homemade spices." },
            { "name": "FISH IN TANGY CURRY", "price": "640", "description": "Slices of fish cooked in a tomato curry with tamarind spices and coconut milk." },
            { "name": "KERALA PRAWN CURRY", "price": "640", "description": "Prawns, cooked with coconut oil, onion and coconut milk." },
            { "name": "MUTTON ROGAN JOSH", "price": "750", "description": "Slow cooked mutton curry, marinated in authentic spices and cooked to perfection." },
            { "name": "MURGH LAHORI", "price": "600", "description": "Tender chicken cubes in a rich tomato onion curry." },
            { "name": "KEEMA CHICKEN", "price": "600", "description": "Minced chicken and aromatic spices in onion tomato masala." },
            { "name": "MURGH JAHANGIRI", "price": "600", "description": "Rich and creamy Mughalai chicken curry cooked in peanut and yoghurt base" },
            { "name": "KADAI MUSHROOM / PANEER", "price": "540", "description": "Mushroom or Paneer cooked in kadai masala and homemade spices" }
        ]
    },
    {
        "id": "roties-naans-rice",
        "title": "Rotis, Naans and Rice",
        "items": [
            { "name": "Steamed Rice", "price": "220" },
            { "name": "Veg Pulao", "price": "360" },
            { "name": "Curd Rice", "price": "250" },
            { "name": "Tandoori Roti / Naan", "price": "90" },
            { "name": "Butter Roti / Naan", "price": "120" },
            { "name": "Garlic Naan", "price": "140" },
            { "name": "Lachha Paratha", "price": "140" },
            { "name": "Chilli Cheese Naan", "price": "200" }
        ]
    },
    {
        "id": "cold-beverages",
        "title": "Cold Beverages",
        "items": [],
        "subsections": [
            {
                "title": "Fresh Juices",
                "items": [
                    { "name": "Orange", "price": "400" },
                    { "name": "Watermelon", "price": "350" }
                ]
            },
            {
                "title": "Mixers",
                "items": [
                    { "name": "Coke/Sprite/Fanta", "price": "140" },
                    { "name": "Soda", "price": "120" },
                    { "name": "Tonic Water", "price": "210" },
                    { "name": "Red Bull", "price": "290" },
                    { "name": "Orange/Litchi", "price": "200" },
                    { "name": "Cranberry/Guava", "price": "250" },
                    { "name": "Apple/Pineapple", "price": "200" }
                ]
            }
        ]
    },
    {
        "id": "mocktails",
        "title": "Mocktails",
        "items": [
            { "name": "Virgin Mojito", "price": "340" },
            { "name": "Chia Lemonade Soda", "price": "400" },
            { "name": "Matcha Lemonade", "price": "380" },
            { "name": "Kokum Sherbet", "price": "340" },
            { "name": "Lime Mint Cooler", "price": "340" },
            { "name": "Strawberry Basil Crush", "price": "340" }
        ]
    },
    {
        "id": "iced-teas",
        "title": "Iced Teas",
        "items": [
            { "name": "Peach", "price": "340" },
            { "name": "Litchi", "price": "340" },
            { "name": "Lemon", "price": "340" }
        ]
    },
    {
        "id": "hot-beverages",
        "title": "Hot Beverages",
        "items": [
            { "name": "Espresso", "price": "100" },
            { "name": "Double Espresso", "price": "160" },
            { "name": "Macchiato", "price": "160" },
            { "name": "Latte", "price": "220" },
            { "name": "Piccolo", "price": "200" },
            { "name": "Americano", "price": "180" },
            { "name": "Black Tea / Milk / Lime", "price": "180" },
            { "name": "Green Tea / Earl Grey", "price": "180" },
            { "name": "Hot Chocolate", "price": "340" },
            { "name": "Cappuccino", "price": "220" }
        ]
    },
    {
        "id": "milkshakes",
        "title": "Milkshakes",
        "items": [
            { "name": "Vanilla / Chocolate / Strawberry", "price": "380" },
            { "name": "Cookies And Cream", "price": "380" },
            { "name": "Nutella", "price": "420" },
            { "name": "Biscoff Coffee", "price": "440" },
            { "name": "Banana & Caramel", "price": "440" }
        ]
    },
    {
        "id": "desserts",
        "title": "Desserts",
        "items": [
            { "name": "Basque Cheesecake", "price": "300", "description": "Served with homemade berry compote." },
            { "name": "Biscoff Drip Cake", "price": "300", "description": "Layers of vanilla sponge sandwiched together with Biscoff spread and whipped vanilla cream." },
            { "name": "Belgian Chocolate Mousse Cake", "price": "300", "description": "Chocolate cake with layers of dark, milk and white chocolate mousse." },
            { "name": "Tiramisu", "price": "350", "description": "Espresso soaked Savoiardi, mascarpone cream topped with chocolate shavings and cocoa" }
        ]
    }
]

import json

for s in sections:
    data += f"  {{\n      id: {json.dumps(s['id'])},\n      title: {json.dumps(s['title'])},\n      items: [\n"
    for item in s['items']:
        data += "        {\n"
        data += f"          name: {json.dumps(item['name'])},\n"
        if "description" in item:
            data += f"          description: {json.dumps(item['description'])},\n"
        if "price" in item:
            data += f"          price: {json.dumps(item['price'])},\n"
        data += "        },\n"
    data += "      ],\n"
    if "subsections" in s:
        data += "      subsections: [\n"
        for sub in s["subsections"]:
            data += f"        {{\n          title: {json.dumps(sub['title'])},\n          items: [\n"
            for item in sub['items']:
                data += "            {\n"
                data += f"              name: {json.dumps(item['name'])},\n"
                if "description" in item:
                    data += f"              description: {json.dumps(item['description'])},\n"
                if "price" in item:
                    data += f"              price: {json.dumps(item['price'])},\n"
                data += "            },\n"
            data += "          ],\n        },\n"
        data += "      ],\n"
                
    data += "    },\n"

data += """];

export const menuSections: MenuSection[] = rawMenuSections;
"""

with codecs.open('src/data/menuData.ts', 'w', 'utf-8') as f:
    f.write(data)
