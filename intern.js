document.getElementById("myButton").addEventListener("click", function() {
	document.getElementById("myHeading").textContent = "You clicked the button!";
	document.getElementById("myParagraph").textContent = "The button was clicked.";
});

document.getElementById("myButton").addEventListener("click", function() {
	document.getElementById("myHeading").textContent = "You clicked the button!";
	document.getElementById("myParagraph").textContent = "The button was clicked.";
});
document.getElementById("myButton").addEventListener("click", function() {
	document.getElementById("myHeading").textContent = "You clicked the button!";
	document.getElementById("myParagraph").textContent = "The button was clicked.";
});
document.getElementById("myButton").addEventListener("click", function() {
	document.getElementById("myHeading").textContent = "You clicked the button!";
	document.getElementById("myParagraph").textContent = "The button was clicked.";
});
// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const name = product.querySelector('h2').textContent;
    const price = product.querySelector('.price').textContent;

    addToCart(name, price);
  });
});

// Function to add product to cart
function addToCart(name, price) {
  const cart = document.getElementById('cart');
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const nameElement = document.createElement('p');
  nameElement.textContent = name;

  const priceElement = document.createElement('p');
  priceElement.textContent = price;

  cartItem.appendChild(nameElement);
  cartItem.appendChild(priceElement);

  cart.appendChild(cartItem);
}
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    const newListItem = document.createElement('li');
    newListItem.textContent = productName;
    cartItems.appendChild(newListItem);
  });
});
const productContainer = document.getElementById("product-container");
const cart = document.getElementById("cart");
const cart Items = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let productsInCart = [];

productContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const product = event.target.getAttribute("data-product");
    const price = parseFloat(
      productContainer.querySelector(`[data-product="${product}"]`)
        .nextElementSibling.nextElementSibling.innerText.replace("Rs ", "")
    );

    const existingProduct = productsInCart.find((p) => p.product === product);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      productsInCart.push({ product, quantity: 1, price });
    }

    updateCart();
  }
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  productsInCart.forEach((product) => {
    const li = document.createElement("li");
    li.innerText = `${product.quantity} x ${product.product} - Rs ${product.price * product.quantity}`;
    cartItems.appendChild(li);
    total += product.price * product.quantity;
  });
  cartTotal.innerText = `Rs ${total}`;
}