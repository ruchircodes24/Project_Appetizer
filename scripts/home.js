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


