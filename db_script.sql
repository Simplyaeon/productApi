CREATE database product_db;

USE product_db;



CREATE TABLE product_db. products ( 
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL, price DECIMAL (10, 2) NOT NULL, description TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);