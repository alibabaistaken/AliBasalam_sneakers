# Alibaba and the 40 Sneakers

Welcome to **Alibaba and the 40 Sneakers**, a complete e-commerce project demonstrating a dynamic sneaker shop using **HTML**, **CSS**, **JavaScript**, **Node.js**, **EJS**, and **MySQL**.

## Project Overview
This project allows users to:
- View a dynamic collection of sneakers fetched from a MySQL database.
- Add sneakers to their shopping cart.
- View and manage their cart with dynamically calculated totals.
- Filter sneakers by category (e.g., "New Releases" or "Sale").
- Search for sneakers by name.

## Features
- **Frontend**: Responsive user interface built with **HTML**, **CSS**, and **EJS** templating.
- **Backend**: RESTful APIs and dynamic page rendering using **Node.js** and **Express.js**.
- **Database**: MySQL for managing sneaker inventory and cart data.
- **Dynamic Integration**: Real-time interaction between frontend and backend.

## Project Structure
```
.
├── views/                # EJS templates for rendering pages
│   ├── index.ejs         # Homepage template
│   ├── shop.ejs          # Shop page template
│   ├── cart.ejs          # Cart page template
├── public/               # Static files
│   ├── style.css         # CSS styles
│   ├── script.js         # Frontend JavaScript
├── sql/                  # Database scripts
│   ├── setup.sql         # Initial database setup script
│   └── sneakers_shop.sql # Exported database with data
├── server.js             # Node.js backend server
└── package.json          # Node.js dependencies
```

## Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **MySQL**
- **XAMPP** (if using phpMyAdmin for database management)

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/alibabaistaken/AliBasalam_sneakers.git
cd AliBasalam_sneakers
```

### 2. Install Node.js dependencies
```bash
npm install
```

### 3. Set up the MySQL database
- Open `sql/setup.sql` and execute it in your MySQL server to create the database schema.
- Import `sql/sneakers_shop.sql` to populate the database with initial data.

### 4. Configure MySQL connection
- Update the database credentials in `server.js`:
  ```javascript
  const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '', // Add your MySQL password if applicable
      database: 'sneakers_shop'
  });
  ```

### 5. Start the backend server
```bash
nodemon server.js
```
The server will run on `http://localhost:8008`.

### 6. Open the frontend
- Visit the following URLs in your browser:
  - Home Page: `http://localhost:8008/`
  - Shop Page: `http://localhost:8008/shop`
  - Cart Page: `http://localhost:8008/cart`

## API Endpoints

### 1. Fetch All Products
- **Endpoint**: `/products`
- **Method**: GET
- **Response**: JSON array of all products.

### 2. Fetch Products by Category
- **Endpoint**: `/products/:category`
- **Method**: GET
- **Response**: JSON array of products in the specified category.

### 3. Add to Cart
- **Endpoint**: `/add-to-cart`
- **Method**: POST
- **Body**:
  ```json
  {
      "product_id": 1,
      "quantity": 1
  }
  ```
- **Response**: Redirects to `/shop`.

### 4. Fetch Cart Data
- **Endpoint**: `/cart`
- **Method**: GET
- **Response**: JSON array of cart items with quantities and total price.

## Known Issues
- Ensure the Node.js server is running before accessing the frontend.
- Check MySQL credentials in `server.js` if the database connection fails.

## Contribution
Feel free to fork this repository and submit pull requests. Any feedback or suggestions are welcome!

## License
This project is open-source and available under the MIT License.

## Author
**Ali Basalam** and **Thomas Droppert**

