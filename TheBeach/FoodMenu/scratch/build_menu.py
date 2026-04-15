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
            { "name": "Kandari Prawns", "price": "600", "description": "Kandhari chilly marinated prawns, cooked in a clay pot." },
            { "name": "Tandoori Jhinga", "price": "600", "description": "Grilled prawns, marinated in spicy tandoori masala." },
            { "name": "Achari Fish Tikka", "price": "600", "description": "Fresh fish cubes marinated in achari tandoor masala and chargrilled." },
            { "name": "Pepper Chicken Tikka", "price": "520", "description": "Soft chunks of chicken marinated in black pepper and charcoal grilled." },
            { "name": "Hariyali Chicken Tikka", "price": "520", "description": "Soft chunks of chicken marinated in green tandoori masala and charcoal grilled." },
            { "name": "Roasted Beef Stir-Fry", "price": "600", "description": "Thinly sliced roasted beef, stir fried with bell peppers, onions and spices." },
            { "name": "Kerala Beef Fry", "price": "580", "description": "Kerala style beef fry with coconut." },
            { "name": "Tandoori Chicken", "price": "550/900", "description": "Succulent pieces of whole chicken, marinated in tandoor masala and grilled. (half/full)." },
            { "name": "Cheese Chilli Chicken Kebab", "price": "540", "description": "Soft chunks of chicken marinated in tandoori masala, topped with cheese and" },
            { "name": "Kung Pao Prawn", "price": "600", "description": "Batter fried tiger prawns tossed in a sweet and spicy kung pao sauce" },
            { "name": "Squid And Prawns In Capers Sauce", "price": "750", "description": "Fresh and tender squid and prawns, cooked with capers and sundried tomatoes" },
            { "name": "Thai Grilled Fish", "price": "560", "description": "Pan grilled fish fillet marinated in Thai style chilli sauce." },
            { "name": "Stir Fry Lamb", "price": "650", "description": "Batter fried lamb strips, tossed with a sweet and spicy Asian sauce." },
            { "name": "Asian Style Pork Ribs", "price": "850", "description": "Slow cooked pork ribs cooked in a char sui sauce." },
            { "name": "Crushed Pepper Chicken", "price": "580", "description": "Battered fried chicken tossed with oyster sauce, dark soy and crushed black pepper." },
            { "name": "Karaage Chicken", "price": "540", "description": "Japanese fried chicken served with Gochujang chilli mayo." }
        ]
    },
    {
        "id": "bites",
        "title": "Bites",
        "items": [
            { "name": "Masala Papad", "price": "240" },
            { "name": "Masala Sprouts", "price": "260" },
            { "name": "Masala Peanuts", "price": "280" },
            { "name": "Masala Omlette", "price": "260" }
        ]
    },
    {
        "id": "fries",
        "title": "Fries",
        "items": [
            { "name": "Peri Peri Fries", "price": "360", "description": "Fries dusted with peri peri spice mix" },
            { "name": "Masala Fries", "price": "360", "description": "Fries dusted with Indian spices served with spicy mayo" },
            { "name": "Cheese Fries", "price": "400", "description": "Fries with cheese sauce served with honey mustard mayo" },
            { "name": "Fried Chicken / Lamb Bolognese Fries", "price": "460 / 500", "description": "Crispy fries, mornay cheese sauce and chicken / lamb Bolognese" }
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
            { "name": "Pasta Napolitana", "price": "560", "description": "Pasta tossed with homemade tomato sauce, vegetables, olives, capers, and basil" }
        ]
    },
    {
        "id": "continental-starters",
        "title": "Continental Starters",
        "items": [
            { "name": "Roasted Pears And Fig Crostini", "price": "420", "description": "Roasted pears and figs with goat cheese spread, drizzled with a pomegranate reduction on a toasted baguette." },
            { "name": "Stuffed Cheese Pockets", "price": "450", "description": "Cottage cheese and mozzarella stuffed in thin flour dough, fried and served with a spicy relish." },
            { "name": "Tri Chilli Cheese Toast", "price": "450", "description": "Bread; topped with tri-peppers, chillies and cheese." },
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
    }
]

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
    data += "      ],\n    },\n"

data += """];

export const getMenuData = () => {
  return rawMenuSections;
};
"""

with codecs.open('src/data/menuData.ts', 'w', 'utf-8') as f:
    f.write(data)
