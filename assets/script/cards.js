let selectedBurgers = [];

function addCart(burger) {
    selectedBurgers.push(burger);
    console.log(selectedBurgers);
    addElementToCart();
}


function displayCards(arrayToDisplay) {
    let cards = document.querySelector(".cards");
    //Supprimer toutes les cartes affichée précédemment :
    let cardsToSuppress = [];
    cardsToSuppress = cards.children;
    console.log(cardsToSuppress);
    while (cardsToSuppress.length>0){
        cards.removeChild(cardsToSuppress[cardsToSuppress.length-1]);
    }
    
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
    }
}

displayCards(burgers);
// let tests = [beef1, beef2, beef3, beef4];
// displayCards(tests);
