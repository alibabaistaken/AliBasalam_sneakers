
const sneakers = [
    { name: 'Air Jordan 4 Fear', price: 210, img: 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg', category: 'high-top' },
    { name: 'Adidas Superstar Wales Bonner', price: 140, img: 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg', category: 'low-top' },
    { name: 'Air Jordan 1 Travis Scott Medium Olive', price: 250, img: 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg', category: 'high-top' },
    { name: 'Air Jordan 1 Low OG Travis Scott Velvet Brown', price: 200, img: 'https://img.stadiumgoods.com/jordan-air-jordan-1-low-og-travis-scott-velvet-brown_25525489_55951143_800.jpg', category: 'low-top' },
    { name: 'Air Jordan 4 Retro SB Pine Green', price: 225, img: 'https://img.stadiumgoods.com/jordan-air-jordan-4-retro-sb-pine-green_19672569_44943978_800.jpg', category: 'high-top' },
    { name: 'Adidas Samba OG Wmns Maroon Cream White', price: 120, img: 'https://img.stadiumgoods.com/adidas-samba-og-wmns-maroon-cream-white_22847015_48351810_800.jpg', category: 'low-top' },
    { name: 'Air Jordan 1 Retro High OG Chicago Lost and Found', price: 300, img: 'https://img.stadiumgoods.com/jordan-air-jordan-1-retro-high-og-chicago-lost-and-found_18316489_45638476_800.jpg', category: 'high-top' },
    { name: 'Nike Air Force 1 Low Tiffany and Co.', price: 400, img: 'https://img.stadiumgoods.com/nike-air-force-1-low-tiffany-and-co_19839241_45656788_800.jpg', category: 'low-top' },
    { name: 'Air Jordan 1 Off-White Chicago', price: 900, img: 'https://img.stadiumgoods.com/jordan-the-10-air-jordan-1-off-white-chicago_12959919_43160165_800.jpg', category: 'high-top' },
    { name: 'Nike Louis Vuitton Air Force 1 Low', price: 2500, img: 'https://img.stadiumgoods.com/nike-louis-vuitton-air-force-1-low-virgil-abloh-white-red_18769026_47679206_800.jpg', category: 'low-top' },
    { name: 'Air Jordan 1 High OG Wmns Satin Bred', price: 350, img: 'https://img.stadiumgoods.com/jordan-air-jordan-1-high-og-wmns-satin-bred_20609219_47408884_800.jpg', category: 'high-top' },
    { name: 'Nike SB Dunk Low eBay Sandy Bodecker', price: 400, img: 'https://www.stadiumgoods.com/en-us/shopping/sb-dunk-low-ebay-sandy-bodecker-19418462', category: 'low-top' },
    { name: 'Nike SB What The Dunk', price: 600, img: 'https://img.stadiumgoods.com/nike-sb-what-the-dunk-what-the-dunk_13678138_42994253_2048.jpg', category: 'high-top' }
];

let cart = []; 
let cartCount = 0; 

// display sneakers product grid
function displaySneakers(filteredSneakers = sneakers) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = filteredSneakers.map(sneaker => `
        <div class="col-md-4 mb-4 product card" data-name="${sneaker.name}">
            <img src="${sneaker.img}" class="card-img-top" alt="${sneaker.name}">
            <div class="card-body">
                <h5 class="card-title">${sneaker.name}</h5>
                <p class="card-text">$${sneaker.price}</p>
                <button class="btn btn-primary" onclick="addToCart('${sneaker.name}', ${sneaker.price})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// add a sneaker to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    cartCount += 1;
    updateCart();
}

//  update the cart display
function updateCart() {
    let cartList = document.getElementById('cart-list');
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    cartList.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
    document.getElementById('total-price').textContent = `Total: $${total}`;
    document.getElementById('cart-count').innerText = cartCount;
}

//  filter sneakers by category
function filterSneakers(category) {
    const filteredSneakers = category === 'all' ? sneakers : sneakers.filter(sneaker => sneaker.category === category);
    displaySneakers(filteredSneakers);
}

// search for sneakers by name
function searchSneakers() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchResults = searchTerm ? sneakers.filter(sneaker => sneaker.name.toLowerCase().includes(searchTerm)) : sneakers;
    displaySneakers(searchResults);
}

// cart display
function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('active');
}

// search input
document.getElementById('search-input').addEventListener('input', searchSneakers);

// k; display of sneakers
displaySneakers();
