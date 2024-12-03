const express = require('express');

const mysql = require('mysql');

const path = require('path');



const app = express();

const port = 8008;



// Set up EJS as the templating engine

app.set('view engine', 'ejs');



// Middleware for parsing form data

app.use(express.urlencoded({ extended: false }));



// Serve static files (CSS, images, JavaScript)

app.use(express.static(path.join(__dirname, 'public')));



// MySQL Connection

const db = mysql.createConnection({

    host: 'localhost',

    user: 'root',

    password: '', // Add your MySQL password if any

    database: 'sneakers_shop'

});



db.connect((err) => {

    if (err) {

        console.error('Database connection failed: ', err);

        return;

    }

    console.log('Connected to MySQL Database!');

});



// Routes



// Home Page

app.get("/", (req, res) => {

    res.render("index");

});



// Shop Page

app.get("/shop", (req, res) => {

    db.query('SELECT * FROM products', (err, results) => {

        if (err) {

            console.error('Error fetching products:', err);

            res.status(500).send('Error fetching products');

            return;

        }

        res.render("shop", { products: results });

    });

});



// Cart Page

app.get("/cart", (req, res) => {

    db.query(

        'SELECT c.id, p.name, p.price, c.quantity FROM cart c JOIN products p ON c.product_id = p.id',

        (err, results) => {

            if (err) {

                console.error('Error fetching cart data:', err);

                res.status(500).send('Error fetching cart data');

                return;

            }

            const totalPrice = results.reduce((sum, item) => sum + item.price * item.quantity, 0);

            res.render("cart", { cart: results, total: totalPrice });

        }

    );

});



// API for adding to cart

app.post("/add-to-cart", (req, res) => {

    const { product_id, quantity } = req.body;

    db.query('INSERT INTO cart (product_id, quantity) VALUES (?, ?)', [product_id, quantity], (err) => {

        if (err) {

            console.error('Error adding to cart:', err);

            res.status(500).send('Error adding to cart');

            return;

        }

        res.redirect('/shop'); // Redirect back to the shop page

    });

});



// Start the server

app.listen(port, () => {

    console.log(`Server running on http://localhost:${port}`);

});