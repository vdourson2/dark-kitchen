
let sectioncart = document.querySelector(".cart");

let containershoppingcart = document.querySelector(".container-shopping-cart");


function openCart() {

sectioncart.style.display = "block";

console.log(sectioncart);

//alert("test");

containershoppingcart.style.display = "none";


  
}

function closeCart(){

    
    sectioncart.style.display = "none";

    containershoppingcart.style.display = "block";

}
