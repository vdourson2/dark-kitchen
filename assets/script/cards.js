

let cards = document.querySelector(".cards");
for (let burger of burgers) {
    let wrapBurger = document.createElement("div");
    cards.appendChild(wrapBurger);
    console.log(burger);
    wrapBurger.innerHTML = `<img class="card__illustration" src="${burger.illustration}" alt="Burger picture">
                            <h2 class="card__burgerName">${burger.burgerName}</h2>
                            <p class="card__description">${burger.description}</p>
                            <p class="card__price">${burger.price}<span> €</span></p>`;


}