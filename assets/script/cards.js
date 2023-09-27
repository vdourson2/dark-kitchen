let selectedBurgers = [];

//This function takes an object from the class Burger, and 
//add it into the array selectedBurgers
function addCart(burger) {
    selectedBurgers.push(burger);
    console.log(selectedBurgers);
    addElementToCart();
}

//This function takes an array of objects from the Burger class
//and display it into the main section
function displayCards(arrayToDisplay) {
    let cards = document.querySelector(".cards");

    //Suppress all former displayed cards :
    let cardsToSuppress = cards.children;
    while (cardsToSuppress.length>0){
        cards.removeChild(cardsToSuppress[cardsToSuppress.length-1]);
    }
    
    //Display all new cards from the array to display
    for (let burger of arrayToDisplay) {
        let wrapBurger = document.createElement("div");
        wrapBurger.classList.add("cards__wrapBurger");
        cards.appendChild(wrapBurger);
        wrapBurger.innerHTML = `<div class="cards__wrapBurger__black"></div>
                                <img class="cards__wrapBurger__illustration" src="${burger.illustration}" alt="Burger picture">
                                <div class="cards__wrapBurger__white">
                                    <h2 class="cards__wrapBurger__burgerName">${burger.burgerName}</h2>
                                    <p class="cards__wrapBurger__description">${burger.description}</p>
                                    <div class="cards__wrapBurger__wrapPrice">
                                        <p class="cards__wrapBurger__wrapPrice__price">${burger.price}<span class="cards__wrapBurger__wrapPrice__price__euro"> €</span></p>
                                        <div class="cards__wrapBurger__wrapPrice__add"> + </div>
                                    </div>
                                </div>`;
        let add = wrapBurger.querySelector(".cards__wrapBurger__wrapPrice__add");
        add.addEventListener('click', () => addCart(burger));
        let burgerName = wrapBurger.querySelector(".cards__wrapBurger__burgerName");
        burgerName.addEventListener('click',() => wrapBurger.classList.toggle("zoom"));
    }
}

displayCards(burgers);
// let test = [beef1, beef2, beef3];
// displayCards(test);
