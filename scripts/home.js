document.addEventListener("DOMContentLoaded", function(){
    const spanElement = document.querySelector(".about-js");

    spanElement.addEventListener("click", function(){
        const aboutSection = document.querySelector(".about-section-js");
        aboutSection.scrollIntoView({behavior: "smooth"});
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const spanElement = document.querySelector(".menu-js");

    spanElement.addEventListener("click", function(){
        const aboutSection = document.querySelector(".menu-section-js");
        aboutSection.scrollIntoView({behavior: "smooth"});
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const spanElement = document.querySelector(".makeReservation-js");

    spanElement.addEventListener("click", function(){
        const aboutSection = document.querySelector(".reservation-js");
        aboutSection.scrollIntoView({behavior: "smooth"});
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const spanElement = document.querySelector(".logo-js");

    spanElement.addEventListener("click", function(){
        const aboutSection = document.querySelector(".welcome-js");
        aboutSection.scrollIntoView({behavior: "smooth"});
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const spanElement = document.querySelector(".home-js");

    spanElement.addEventListener("click", function(){
        const aboutSection = document.querySelector(".welcome-js");
        aboutSection.scrollIntoView({behavior: "smooth"});
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const spanElement = document.querySelector(".contact-js");

    spanElement.addEventListener("click", function(){
        const aboutSection = document.querySelector(".instagram-js");
        aboutSection.scrollIntoView({behavior: "smooth"});
    })
})

let cartQuantity = 0;
let divElement = document.querySelectorAll('.breakfast-item-js, .lunch-item-js, .dinner-item-js, .dessert-item-js, .wine-item-js, .drinks-item-js');

divElement.forEach(element => {
    element.addEventListener('click', function handleClick(event){
        console.log(`Item Added 
        cartQuantity = ${cartQuantity = addItem(cartQuantity)} Total Cost: $${cartQuantity * 29}`), event});
});


function addItem(cartQuantity){
    return cartQuantity+=1;  
}


