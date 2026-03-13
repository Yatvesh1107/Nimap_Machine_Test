# Nimap Machine Test – Category & Product Management

## Project Overview

This project is a **Node.js application using Express, MySQL (RDBMS), and EJS** that implements CRUD operations for **Categories and Products**.

Each **product belongs to a category**, and the product list supports **server-side pagination** as required in the assignment.

The application follows **REST API conventions for backend routes** while using **EJS as the view engine for HTML pages**.

---

# Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL (RDBMS)
* **Template Engine:** EJS
* **Styling:** Bootstrap
* **Database Driver:** mysql2
* **Environment Variables:** dotenv

---

# Features

### Category Module

* Add Category
* View Categories
* Update Category
* Delete Category

### Product Module

* Add Product
* View Products
* Update Product
* Delete Product

Each Product contains:

* ProductId
* ProductName
* CategoryId
* CategoryName

---

# Pagination

Product list uses **server-side pagination**.

Example:

Page Size = 10

| Page | Records |
| ---- | ------- |
| 1    | 1–10    |
| 2    | 11–20   |
| 3    | 21–30   |

SQL query example:

```
SELECT 
p.productId,
p.productName,
c.categoryName,
c.categoryId
FROM products p
JOIN categories c
ON p.categoryId = c.categoryId
LIMIT ? OFFSET ?
```

---

# REST API Conventions

The backend follows **RESTful routing conventions**.

### Category Routes

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | /categories     | Get category page |
| POST   | /categories     | Create category   |
| PUT    | /categories/:id | Update category   |
| DELETE | /categories/:id | Delete category   |

---

### Product Routes

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /products     | Get product page |
| POST   | /products     | Create product   |
| PUT    | /products/:id | Update product   |
| DELETE | /products/:id | Delete product   |

---

# Project Structure

```
Nimap_Machine_Test
│
├── config
│   └── db.js
│
├── controllers
│   ├── categoryController.js
│   └── productController.js
│
├── routes
│   ├── categoryRoutes.js
│   └── productRoutes.js
│
├── views
│   ├── category
│   │   ├── category.ejs
│   │   └── editCategory.ejs
│   │
│   └── product
│       ├── product.ejs
│       └── editProduct.ejs
│
├── public
│
├── server.js
├── package.json
├── .env.example
└── README.md
```

---

# Database Setup

Run the following SQL commands:

```
CREATE DATABASE machine_test;

USE machine_test;

CREATE TABLE categories (
categoryId INT AUTO_INCREMENT PRIMARY KEY,
categoryName VARCHAR(100)
);

CREATE TABLE products (
productId INT AUTO_INCREMENT PRIMARY KEY,
productName VARCHAR(100),
categoryId INT,
FOREIGN KEY (categoryId) REFERENCES categories(categoryId)
);
```

---

# Installation

Clone the repository:

```
git clone https://github.com/Yatvesh1107/Nimap_Machine_Test.git
```

Go to the project directory:

```
cd Nimap_Machine_Test
```

Install dependencies:

```
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=machine_test
PORT=3000
```

---

# Run the Project

Start the server:

```
node server.js
```

Open in browser:

```
http://localhost:3000/categories
```

---

# Notes

* Uses **MySQL RDBMS as required in the assignment**
* Pagination implemented **at database level**
* Backend routes follow **REST conventions**
* EJS used as **view engine for HTML pages**

---

# Author

Yatvesh Patil
