// sort array
burgers.sort((a, b) => (a.category > b.category) ? 1 : -1);

// select element
let burgerCards = document.querySelector(".cards");

// select list
let categoryItems = document.querySelectorAll(".category__list__item");

// show category
function displayBurgersByCategory(category) {
    burgerCards.innerHTML = ""; // Effacez les cartes actuelles

    if (category === "all") {
        // show all
        displayCards(burgers);
    } else {
        // show cat.
        let filteredBurgers = burgers.filter(burger => burger.category === category);
        displayCards(filteredBurgers);
    }
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
