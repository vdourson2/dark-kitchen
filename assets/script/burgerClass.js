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





let veggie1 = new Burger("veggie", "Supreme Courgette","./images/burger_veggie1.jpeg", "Crispy burger with veggie steak and courgettes", 12);
let veggie2 = new Burger("veggie", "Vegan Cheese","./images/burger_veggie2.jpeg", "Cheese burger with veggie steak", 12);
let veggie3 = new Burger("veggie", "Paprika Crispy","./images/burger_veggie3.jpeg", "Crispy burger with veggie steak and paprika", 12);
let veggie4 = new Burger("veggie", "Falafel Burger","./images/burger_veggie4.jpeg", "Burger with falafel and pickels, tomato and salad", 12);

let chicken1 = new Burger("chicken", "Chicken & Veggies", "../images/burger_chicken3.jpeg", "Chicken with veggies of all sorts, cucumbers, tomatoes, eggplant and salad", 20);
let chicken2 = new Burger("chicken", "Chicken Filet", "../images/burger_chicken1.jpeg", "Soft bread, pepper mayonnaise, salad, onions and a delicious crusty chicken filet", 20);
let chicken3 = new Burger("chicken", "Triple Chicken", "../images/burger_chicken4.jpeg", "A triple layer of chicken separated by layers of cheddar and salad", 20);
let chicken4 = new Burger("chicken", "Nugget Burger", "../images/burger_chicken2.jpeg", "Pieces of chicken nuggets with salad and onions", 20);