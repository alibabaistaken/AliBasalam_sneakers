-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 02, 2024 at 12:10 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sneakers_shop`
--
CREATE DATABASE IF NOT EXISTS `sneakers_shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sneakers_shop`;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `image_url` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category`, `image_url`) VALUES
(1, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(2, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(3, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(4, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(5, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(6, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(7, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(8, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(9, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(10, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(11, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(12, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(13, 'Air Jordan 1 Low OG Travis Scott Velvet Brown', 200.00, 'low-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-low-og-travis-scott-velvet-brown_25525489_55951143_800.jpg'),
(14, 'Air Jordan 4 Retro SB Pine Green', 225.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-retro-sb-pine-green_19672569_44943978_800.jpg'),
(15, 'Adidas Samba OG', 120.00, 'low-top', 'https://img.stadiumgoods.com/adidas-samba-og-wmns-maroon-cream-white_22847015_48351810_800.jpg'),
(16, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(17, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(18, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(19, 'Air Jordan 1 Low OG Travis Scott Velvet Brown', 200.00, 'low-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-low-og-travis-scott-velvet-brown_25525489_55951143_800.jpg'),
(20, 'Air Jordan 4 Retro SB Pine Green', 225.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-retro-sb-pine-green_19672569_44943978_800.jpg'),
(21, 'Adidas Samba OG', 120.00, 'low-top', 'https://img.stadiumgoods.com/adidas-samba-og-wmns-maroon-cream-white_22847015_48351810_800.jpg'),
(22, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(23, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(24, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(25, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(26, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(27, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(28, 'Air Jordan 1 Low OG Travis Scott Velvet Brown', 200.00, 'low-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-low-og-travis-scott-velvet-brown_25525489_55951143_800.jpg'),
(29, 'Air Jordan 4 Retro SB Pine Green', 225.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-retro-sb-pine-green_19672569_44943978_800.jpg'),
(30, 'Adidas Samba OG', 120.00, 'low-top', 'https://img.stadiumgoods.com/adidas-samba-og-wmns-maroon-cream-white_22847015_48351810_800.jpg'),
(31, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(32, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(33, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(34, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(35, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(36, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg'),
(37, 'Air Jordan 1 Low OG Travis Scott Velvet Brown', 200.00, 'low-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-low-og-travis-scott-velvet-brown_25525489_55951143_800.jpg'),
(38, 'Air Jordan 4 Retro SB Pine Green', 225.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-retro-sb-pine-green_19672569_44943978_800.jpg'),
(39, 'Adidas Samba OG', 120.00, 'low-top', 'https://img.stadiumgoods.com/adidas-samba-og-wmns-maroon-cream-white_22847015_48351810_800.jpg'),
(40, 'Air Jordan 4 Fear', 210.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-4-fear_23056650_55951336_800.jpg'),
(41, 'Adidas Superstar Wales Bonner', 140.00, 'low-top', 'https://img.stadiumgoods.com/adidas-superstar-wales-bonner-white-croc_26684678_56222492_800.jpg'),
(42, 'Air Jordan 1 Travis Scott Medium Olive', 250.00, 'high-top', 'https://img.stadiumgoods.com/jordan-air-jordan-1-travis-scott-medium-olive_23139694_55271556_800.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
