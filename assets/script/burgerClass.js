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

let fish1 = new Burger("fish", "Marine Marvel Burger", "../images/burger_fish3.jpeg", "Breaded white fish fillet, topped with crispy lettuce, fresh tomatoes, homemade tartar sauce, and slices of avocado, all served on a brioche burger bun", 12.99);
let fish2 = new Burger("fish", "Spicy Oceanic Delight", "../images/burger_fish2.jpeg", "Grilled spicy fish fillet, accompanied by sautéed kale, marinated jalapeño peppers, melted pepper jack cheese, and creamy sriracha sauce, served on a sesame seed bun", 11.99);
let fish3 = new Burger("fish", "Land and Sea Fusion Burger", "../images/burger_fish4.jpeg", "A combination of grilled shrimp and fish fillet, featuring seaweed salad, marinated cucumber, wasabi mayonnaise, and pickled ginger, all served in a fresh bun", 10.99);
let fish4 = new Burger("fish", "Tropical Breeze Burger", "../images/burger_fish1.jpeg", "Grilled fish fillet with a tropical twist, including two slices of fish, fresh mango, coconut lettuce, and exotic citrus sauce, all wrapped in a fresh burger bun", 13.99);

