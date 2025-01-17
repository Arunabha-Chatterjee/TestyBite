import{cart, addToCart} from '../data/cart.js';
import{products} from "../data/products.js";

let productHtml = ''
console.log(cart);
products.forEach((product) => {
    productHtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            &#8377;${product.priceCents}
          </div>

          <div class="product-quantity-container">
            <select class="select-product-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary"
           data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`
})



function updateQuantity(){
    let cartQuantity = 0;
    cart.forEach((product) => {
        cartQuantity += product.quantity;
    });
    document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}

document.querySelector(".products-grid").innerHTML = productHtml;

document.querySelectorAll(".add-to-cart-button").
forEach((element) => {
    element.addEventListener("click", () => {
        let productId = element.dataset.productId;   //taking the productId from product
        addToCart(productId);
        updateQuantity();
    });
});