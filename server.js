const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Add your MySQL password here if any
    database: 'sneakers_shop'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err);
        return;
    }
    console.log('Connected to MySQL Database!');
});

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            res.status(500).send('Error fetching products');
            return;
        }
        res.json(results);
    });
});

app.post('/cart', (req, res) => {
    const { product_id, quantity } = req.body;
    db.query('INSERT INTO cart (product_id, quantity) VALUES (?, ?)', [product_id, quantity], (err) => {
        if (err) {
            res.status(500).send('Error adding to cart');
            return;
        }
        res.send('Added to cart');
    });
});

app.get('/cart', (req, res) => {
    db.query(
        'SELECT c.id, p.name, p.price, c.quantity FROM cart c JOIN products p ON c.product_id = p.id',
        (err, results) => {
            if (err) {
                res.status(500).send('Error fetching cart data');
                return;
            }
            res.json(results);
        }
    );
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});