let cart = [];

let cartCount = 0;



// Fetch products from the backend

function fetchSneakers() {

    fetch('http://localhost:3000/products')

        .then(response => response.json())

        .then(data => {

            displaySneakers(data);

        })

        .catch(err => {

            console.error('Error fetching products:', err);

        });

}



// Render the products into the HTML

function displaySneakers(sneakers) {

    const productGrid = document.getElementById('product-grid');

    productGrid.innerHTML = sneakers.map(sneaker => `

        <div class="col-md-4 mb-4 product card" data-name="${sneaker.name}">

            <img src="${sneaker.image_url}" class="card-img-top" alt="${sneaker.name}">

            <div class="card-body">

                <h5 class="card-title">${sneaker.name}</h5>

                <p class="card-text">$${sneaker.price}</p>

                <button class="btn btn-primary" onclick="addToCart(${sneaker.id}, '${sneaker.name}', ${sneaker.price})">Add to Cart</button>

            </div>

        </div>

    `).join('');

}



// Add an item to the cart

function addToCart(productId, name, price) {

    fetch('http://localhost:3000/cart', {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({ product_id: productId, quantity: 1 })

    })

        .then(response => response.text())

        .then(message => {

            console.log(message);

            cart.push({ name, price });

            cartCount += 1;

            updateCart();

        })

        .catch(err => console.error('Error adding to cart:', err));

}



// Update the cart display

function updateCart() {

    fetch('http://localhost:3000/cart')

        .then(response => response.json())

        .then(cartItems => {

            const cartList = document.getElementById('cart-list');

            const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

            cartList.innerHTML = cartItems.map(item => `

                <li>${item.name} - $${item.price} x ${item.quantity}</li>

            `).join('');

            document.getElementById('total-price').textContent = `Total: $${total}`;

            document.getElementById('cart-count').innerText = cartItems.length;

        })

        .catch(err => console.error('Error fetching cart data:', err));

}



// Add event listener for the search input

document.getElementById('search-input').addEventListener('input', searchSneakers);



// Fetch products and cart data on load

fetchSneakers();

updateCart();

