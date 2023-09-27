class Burger
{
    constructor(category, burgerName, illustration, description, price)
    {
        this.category = category;
        this.burgerName = burgerName;
        this.illustration = illustration;
        this.description = description;
        this.price = price;
    }
}

let fish1 = new Burger("fish", "Marine Marvel Burger", "assets/images/burger_fish3.jpeg", "Breaded white fish fillet, crispy lettuce, tomatoes, tartar sauce", 12.99);
let fish2 = new Burger("fish", "Spicy Oceanic Delight", "assets/images/burger_fish2.jpeg", "Grilled spicy fish fillet, sautéed kale, jalapeño peppers, cheese, sriracha sauce", 11.99);
let fish3 = new Burger("fish", "Land and Sea Fusion Burger", "assets/images/burger_fish4.jpeg", "Grilled shrimp and fish fillet, seaweed salad, cucumber, wasabi", 10.99);
let fish4 = new Burger("fish", "Tropical Breeze Burger", "assets/images/burger_fish1.jpeg", "Grilled fish fillet, fresh mango, lettuce, and exotic citrus sauce", 13.99);

let veggie1 = new Burger("veggie", "Supreme Courgette","assets/images/burger_veggie1.jpeg", "Crispy burger with veggie steak and courgettes", 12);
let veggie2 = new Burger("veggie", "Vegan Cheese","assets/images/burger_veggie2.jpeg", "Cheese burger with veggie steak and vegetables", 12);
let veggie3 = new Burger("veggie", "Paprika Crispy","assets/images/burger_veggie3.jpeg", "Crispy burger with veggie steak and paprika", 12);
let veggie4 = new Burger("veggie", "Falafel Burger","assets/images/burger_veggie4.jpeg", "Burger with falafel and pickels, tomato and salad", 12);

let chicken1 = new Burger("chicken", "Chicken & Veggies", "assets/images/burger_chicken3.jpeg", "Chicken with cucumbers, tomatoes, eggplant and salad", 20);
let chicken2 = new Burger("chicken", "Chicken Filet", "assets/images/burger_chicken1.jpeg", "Soft bread, pepper mayonnaise, salad, onions and a delicious crusty chicken filet", 20);
let chicken3 = new Burger("chicken", "Triple Chicken", "assets/images/burger_chicken4.jpeg", "A triple layer of chicken separated by layers of cheddar and salad", 20);
let chicken4 = new Burger("chicken", "Nugget Burger", "assets/images/burger_chicken2.jpeg", "Pieces of chicken nuggets with salad and onions", 20);

let beef1 = new Burger("beef", "Big Tom", "assets/images/burger_beef1.jpeg", "the original big tom burgers with his secret sauce", 8.99);
let beef2 = new Burger("beef", "Double Impact", "assets/images/burger_beef2.jpeg", "a double grilled beef burger with extra bacon and our special 2 sauces mix", 11.99);
let beef3 = new Burger("beef", "Super Cheese", "assets/images/burger_beef3.jpeg", "the original beef with extra raclette cheese and mushrooms", 11.99);
let beef4 = new Burger("beef", "Dark Bob", "assets/images/burger_beef4.jpeg", "A double beef burger with cheese and a darklicious roasted bun", 13.99);

let burgers = [beef1, beef2, beef3, beef4, fish1, fish2, fish3, fish4, veggie1, veggie2, veggie3, veggie4, chicken1, chicken2, chicken3, chicken4];
