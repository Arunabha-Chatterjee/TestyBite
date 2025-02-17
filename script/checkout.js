import{cart, removeFromCart} from '../data/cart.js';
import {products} from "../data/products.js";

let html=""
cart.forEach((cartItem)=>{
    let matchProduct
    products.forEach(product=>{
        if(product.id === cartItem.id){
            matchProduct = product;
        }
    })
    html+= `<div class="cart-item-container js-cart-item-container-${matchProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchProduct.name}
                </div>
                <div class="product-price">
                  $10.90
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link"
                  data-product-id="${matchProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
})

document.querySelector(".order-summary").innerHTML = html;

document.querySelectorAll(".js-delete-link").forEach((element) => {
    element.addEventListener("click", () => {
        const productId = element.dataset.productId;
        removeFromCart(productId);

        const container = document.
        querySelector(`.js-cart-item-container-${productId}`);

        container.remove();
    })
})