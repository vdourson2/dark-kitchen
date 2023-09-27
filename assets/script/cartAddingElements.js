let cartCardsList = document.querySelector(".cart-list");
let cartCardsContainer = document.createElement("div");
cartCardsContainer.classList.add("cart-cards-container");
cartCardsList.appendChild(cartCardsContainer);
let totalPrice = document.querySelector(".total-price");
console.log(totalPrice);
let totalItems = document.querySelector(".list-num");
let cartTotalItems = document.querySelector(".notif-shopping-cart");
let cartList = [];
let total = 0;
let numItems = 0;

// function to add card to cart
function addElementToCart(e)
{
    let burger = selectedBurgers[selectedBurgers.length - 1];
    if (cartList.some(row => row.includes(burger)))
    {
        updateCart(burger, 1);
        return;
    }

    cartList.push([burger, 1]);
    addCartCard(burger);
    updateTotal(burger.price);
    updateItemsNum(1);
}

// function to create a new card in cart
function addCartCard(element)
{
    // create card container and add to cart
    let card = document.createElement("div");
    cartCardsContainer.appendChild(card);
    card.classList.add("cart-card");

    // create card items and add to card
    let image = document.createElement("img");
    card.appendChild(image);
    image.setAttribute("src", element.illustration)

    let itemName = document.createElement("h3");
    card.appendChild(itemName);
    let itemNameText = document.createTextNode(element.burgerName);
    itemName.appendChild(itemNameText);

    let itemPrice = document.createElement("p");
    card.appendChild(itemPrice);
    let itemPriceText = document.createTextNode("€" + element.price);
    itemPrice.appendChild(itemPriceText);

    // create the quantity modify button
    let elementIndex = cartList.findIndex(row => row.includes(element));
    cartList[elementIndex][2] = card;
    cartList[elementIndex][3] = element.price;

    let button = document.createElement("div");
    card.appendChild(button);
    button.classList.add("cart-modify");

    let removeButton = document.createElement("button");
    button.appendChild(removeButton);
    removeButton.classList.add("cart-removeButton");
    let removeText = document.createTextNode("-");
    removeButton.appendChild(removeText);
    removeButton.addEventListener('click', function(){ updateCart(element, -1) });

    let itemNumber = document.createElement("div");
    button.appendChild(itemNumber);
    itemNumber.classList.add("cart-itemNumber");
    let numText = document.createTextNode("1");
    itemNumber.appendChild(numText);

    let addButton = document.createElement("button");
    button.appendChild(addButton);
    addButton.classList.add("cart-addButton");
    let addText = document.createTextNode("+");
    addButton.appendChild(addText);
    addButton.addEventListener('click', function(){ updateCart(element, 1) });
}

// Function to update already existing cards
function updateCart(burger, x)
{
    let cardIndex = cartList.findIndex(row => row.includes(burger));
    let cardToModify = cartList[cardIndex][2];
    let lastNum = cartList[cardIndex][1];

    // Check that the quantity is between 1 and 99
    if (lastNum == 1 && x == -1)
    {
        cardToModify.remove();
        cartList.splice(cardIndex, 1);
        selectedBurgers.findIndex(burger);
        console.log(selectedBurgers);
        selectedBurgers.splice(cardIndex, 1);
        updateTotal(burger.price * x)
        updateItemsNum(x);
        return;
    }

    if (lastNum == 99 && x == 1)
    {
        console.log("no more than 99");
        alert("99 burger? Really? That's more than enough don't you think?");
        return;
    }

    // Update card price and quantity
    let lastPrice = cartList[cardIndex][3];
    let priceForOne = burger.price;
    let numToModify = cardToModify.querySelector(".cart-itemNumber");
    let priceToModify = cardToModify.querySelector("p");
    numToModify.childNodes[0].nodeValue = lastNum + x;
    cartList[cardIndex][1] += x;
    let price = (lastPrice + (priceForOne * x)).toFixed(2);
    priceToModify.childNodes[0].nodeValue = "€" + price;
    cartList[cardIndex][3] += priceForOne * x;

    updateTotal(burger.price * x);
    updateItemsNum(x);
}

// Function to call each time an element is added or deleted to update the total
function updateTotal(price)
{
    total += price;
    totalPrice.childNodes[0].nodeValue = "€" + Math.abs(total.toFixed(2));
}

// Function to call each time an element is added or deleted to update the number of items total
function updateItemsNum(x)
{
    numItems += x;
    totalItems.childNodes[0].nodeValue = numItems + " items";
    cartTotalItems.childNodes[0].nodeValue = numItems;
}
