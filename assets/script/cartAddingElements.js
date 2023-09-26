let cartCardsContainer = document.querySelector(".cart-list");
let cartList = [];
//let testArr = [chicken1, chicken2, chicken3, chicken4, chicken1];
//let burgerToAdd = selectedBurgers;
//let burgerToAdd = [chicken1, chicken2, chicken3, chicken4, chicken1];

// function to add card to cart
function addElementToCart(e)
{
    //let burger = selectedBurgers[selectedBurgers.length - 1];
    let burger = e;
    if (cartList.some(row => row.includes(burger)))
    {
        updateCart(burger)
        return;
    }

    cartList.push([burger, 1]);
    addCartCard(burger);
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

    // create card item quantity modify button
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
}

// Function to update already existing cards
function updateCart(burger)
{
    let cardIndex = cartList.findIndex(row => row.includes(burger));
    let cardToModify = cartList[cardIndex][2];
    let lastNum = cartList[cardIndex][1];
    let lastPrice = cartList[cardIndex][3];
    let priceForOne = burger.price;
    let numToModify = cardToModify.querySelector(".cart-itemNumber");
    let priceToModify = cardToModify.querySelector("p");
    numToModify.childNodes[0].nodeValue = lastNum + 1;
    cartList[cardIndex][1] += 1;
    priceToModify.childNodes[0].nodeValue = "€" + (lastPrice + priceForOne);
    cartList[cardIndex][3] += priceForOne;
}

addElementToCart(chicken1);
addElementToCart(chicken2);
// addElementToCart(chicken1);
// addElementToCart(chicken2);
// addElementToCart(chicken1);