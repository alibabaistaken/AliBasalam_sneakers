let cart = [];
let cartCount = 0;

// Fetch sneakers data from the backend
function fetchSneakers() {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            // Update the sneakers array with data from the backend
            displaySneakers(data);
        })
        .catch(err => {
            console.error('Error fetching products:', err);
        });
}

// Display sneakers in the product grid
function displaySneakers(filteredSneakers) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = filteredSneakers.map(sneaker => `
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

// Add a sneaker to the cart
function addToCart(id, name, price) {
    const quantity = 1; // Default quantity
    fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: id, quantity })
    })
        .then(response => response.text())
        .then(message => {
            console.log(message);
            cart.push({ name, price });
            cartCount += 1;
            updateCart();
        })
        .catch(err => {
            console.error('Error adding to cart:', err);
        });
}

// Update the cart display
function updateCart() {
    let cartList = document.getElementById('cart-list');
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    cartList.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
    document.getElementById('total-price').textContent = `Total: $${total}`;
    document.getElementById('cart-count').innerText = cartCount;
}

// Filter sneakers by category
function filterSneakers(category) {
    fetch(`http://localhost:3000/products/${category}`)
        .then(response => response.json())
        .then(data => displaySneakers(data))
        .catch(err => console.error('Error filtering products:', err));
}

// Search for sneakers by name
function searchSneakers() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            const searchResults = searchTerm
                ? data.filter(sneaker => sneaker.name.toLowerCase().includes(searchTerm))
                : data;
            displaySneakers(searchResults);
        })
        .catch(err => console.error('Error searching for products:', err));
}

// Cart display toggle
function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('active');
}

// Add event listener for the search input
document.getElementById('search-input').addEventListener('input', searchSneakers);

// Fetch sneakers on page load
fetchSneakers();