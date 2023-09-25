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

let chicken1 = Burger("chicken", "Chicken & Veggies", "../images/burger_chicken3.jpeg", "Chicken with veggies of all sorts, cucumbers, tomatoes, eggplant and salad", 20);
let chicken2 = Burger("chicken", "Chicken Filet", "../images/burger_chicken1.jpeg", "Soft bread, pepper mayonnaise, salad, onions and a delicious crusty chicken filet", 20);
let chicken3 = Burger("chicken", "Triple Chicken", "../images/burger_chicken4.jpeg", "A triple layer of chicken separated by layers of cheddar and salad", 20);
let chicken4 = Burger("chicken", "Nugget Burger", "../images/burger_chicken2.jpeg", "Pieces of chicken nuggets with salad and onions", 20);