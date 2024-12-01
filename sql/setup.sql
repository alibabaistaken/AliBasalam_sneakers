-- Create Database
CREATE DATABASE IF NOT EXISTS sneakers_shop;

USE sneakers_shop;

-- Create Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100),
    image_url VARCHAR(500)
);

-- Insert Initial Data
INSERT INTO products (name, price, category, image_url) VALUES
('Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
('Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
('Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg');
