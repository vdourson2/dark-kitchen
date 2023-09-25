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