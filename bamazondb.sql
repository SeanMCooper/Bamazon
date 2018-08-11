DROP DATABASE bamazondb;
CREATE DATABASE bamazondb;
USE bamazondb;

CREATE TABLE Inventory(
    ID INT AUTO_INCREMENT NOT NULL,
    Item VARCHAR (60) NOT NULL,
    Department VARCHAR (60) NOT NULL,
    Price DECIMAL (8,2) NOT NULL,
    Stock INT(10), NOT NULL,
    primary key(ID)
);

SELECT * FROM Inventory;

INSERT INTO Inventory(Item, Department, Price, Stock)


VALUES 
    ("La Croix - Pina Fraise", "FOOD & BEVERAGE",5.95,80),
    ("Coors Light - Tall Cans", "FOOD & BEVERAGE",6.99,65),
    ("NVIDIA GTX 1080", "ELECTRONICS",499.99, 7),
    ("Steampunk Goggles", "CLOTHING", 49.50, 22),
    ('27" Widescreen Monitor', "ELECTRONICS", 289.89, 20),
    ("Fender 72' Telecaster - Thinline", "MUSICAL", 499.99, 4),
    ("BOSS DS-2 Pedal", "MUSICAL", 45.99, 15),
    ("Title Fight T-shirt", "CLOTHING", 16.99, 20),
    ("Scrabble 50th Anniversiary Edition", "GAMES", 67.89, 18),
    ("Emo Jeans", "CLOTHING", 17.89, 25),
    ('Ovlov LP', "MUSICAL", 29.99, 34),
    ("Chef Knife - Santoku", "FOOD & BEVERAGE", 78.99, 14),
    ("Warcraft III - The Frozen Throne", "GAMES", 19.99, 50),
    ("Pop-Tarts - Cinnamon", "FOOD & BEVERAGE", 4.99, 80)

CREATE TABLE Departments(
    DeparmentKey INT AUTO_INCREMENT NOT NULL,
    DepName VARCHAR(60) NOT NULL,
    Overhead DECIMAL(10,2) NOT NULL,
    Sales DECIMAL(10,2) NOT NULL,
    primary key(DeparmentKey)
);

INSERT INTO Departments(DepName, Overhead, Sales)
VALUES
    ("FOOD & BEVERAGE", 1850.00, 2000.00),
    ("ELECTRONICS", 8200.00, 11000.00),
    ("CLOTHES", 1500.00, 1200),
    ("MUSICAL", 3400.00, 3300.00),
    ("GAMES", 2275.00, 3200.00)