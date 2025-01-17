export let cart =JSON.parse(localStorage.getItem('cart'))
if (!cart || cart.length === 0) {
    cart = [
        {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 1
        },
        {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 2
        }];
}

function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId){
    let matchProduct;
    const productQuantity = Number(document
        .querySelector(`.select-product-${productId}`).value); //take quantity of product

    cart.forEach((cartProduct) => { //check product is already available on cart or not
        if (productId === cartProduct.id) {
            matchProduct = cartProduct;
        }
    })

    if(matchProduct) { //if available increase the quantity
        matchProduct.quantity += productQuantity;
    }
    else {  //if not available insert a new product
        cart.push({
            id: productId,
            quantity: productQuantity
        });
    }
    saveToStorage()
}

export function removeFromCart(productId){
    let tempCart=[];
    cart.forEach((cartProduct) => {
        if (productId !== cartProduct.id) {
            tempCart.push(cartProduct);
        }
    })
    cart = tempCart;
    saveToStorage()
    console.log(cart);
}