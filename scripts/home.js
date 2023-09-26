let cartQuantity = 0;
let divElement = document.querySelectorAll('.breakfast-item-js, .lunch-item-js, .dinner-item-js, .dessert-item-js, .wine-item-js, .drinks-item-js');
const viewCart = document.querySelector('.your-cart');

divElement.forEach(element => {
    element.addEventListener('click', function handleClick(event){
        const itemAdded = document.querySelector('.total-items');
        const orderTotal = document.querySelector('.total-bill')
        itemAdded.innerHTML = `Items: ${cartQuantity = addItem(cartQuantity)}`;
        orderTotal.innerHTML = `$${cartQuantity*29}`;
        viewCart.classList.add('display-cart')
        , event});
});

function addItem(cartQuantity){
    return cartQuantity+=1;  
}


