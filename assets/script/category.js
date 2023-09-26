// sort array
burgers.sort((a, b) => (a.category > b.category) ? 1 : -1);

// select element
let burgerCards = document.querySelector(".cards");

// select list
const categoryItems = document.querySelectorAll(".category__list__item");

// show category
function displayBurgersByCategory(category) {
    burgerCards.innerHTML = ""; // Effacez les cartes actuelles

    if (category === "all") {
        // show all
        burgers.forEach(burger => displayBurgerCard(burger));
    } else {
        // show cat.
        const filteredBurgers = burgers.filter(burger => burger.category === category);
        filteredBurgers.forEach(burger => displayBurgerCard(burger));
    }
}

// show burger cards
function displayBurgerCard(burger) {
    const wrapBurger = document.createElement("div");
    wrapBurger.classList.add("cards__wrapBurger");
    burgerCards.appendChild(wrapBurger);
    wrapBurger.innerHTML = `<img class="cards__wrapBurger__illustration" src="${burger.illustration}" alt="Burger picture">
                            <h2 class="cards__wrapBurger__burgerName">${burger.burgerName}</h2>
                            <p class="cards__wrapBurger__description">${burger.description}</p>
                            <div class="cards__wrapBurger__wrapPrice">
                                <p class="cards__wrapBurger__wrapPrice__price">${burger.price}<span class="cards__wrapBurger__wrapPrice__price__euro"> €</span></p>
                                <div class="cards__wrapBurger__wrapPrice__add"> + </div>
                            </div>`;
    const add = wrapBurger.querySelector(".cards__wrapBurger__wrapPrice__add");
    add.addEventListener('click', (e) => addCart(e, burger));
}

// event listener
categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const selectedCategory = item.getAttribute("data-category");
        displayBurgersByCategory(selectedCategory);
    });
});

// show all au chargement
displayBurgersByCategory("all");
