const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password
    database: 'sneakers_shop' // Your database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err);
        return;
    }
    console.log('Connected to MySQL Database!');
});

// Routes
// 1. Fetch all products
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to fetch products');
            return;
        }
        res.json(results);
    });
});

// 2. Fetch products by category
app.get('/products/:category', (req, res) => {
    const category = req.params.category;
    db.query('SELECT * FROM products WHERE category = ?', [category], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to fetch products');
            return;
        }
        res.json(results);
    });
});

// 3. Add product to cart
app.post('/cart', (req, res) => {
    const { product_id, quantity } = req.body;
    db.query('INSERT INTO cart (product_id, quantity) VALUES (?, ?)', [product_id, quantity], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to add product to cart');
            return;
        }
        res.send('Product added to cart');
    });
});

// 4. Fetch cart data
app.get('/cart', (req, res) => {
    db.query('SELECT c.id, p.name, p.price, c.quantity FROM cart c JOIN products p ON c.product_id = p.id', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to fetch cart data');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});