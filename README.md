# Node.js Machine Test – Category & Product Management

## Project Overview

This project is a simple **CRUD application** built using **Node.js, Express, MySQL, and EJS**.
It manages **Categories and Products**, where each product belongs to a category.

The application demonstrates:

* Category CRUD operations
* Product CRUD operations
* Product–Category relationship
* Server-side pagination
* MySQL relational database usage

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Template Engine:** EJS
* **Styling:** Bootstrap
* **Environment Variables:** dotenv
* **Database Driver:** mysql2 (Promise Pool)

---

## Features

### Category Module

* Add Category
* View Category List
* Update Category
* Delete Category

### Product Module

* Add Product
* View Product List
* Update Product
* Delete Product

### Product List Includes

* Product ID
* Product Name
* Category ID
* Category Name

### Pagination

Products are fetched from the database using **server-side pagination**.

Example:

* Page size = 10
* Page 1 → records 1–10
* Page 2 → records 11–20

---

## Project Structure

```
node-machine-test
│
├── controllers
│   ├── categoryController.js
│   └── productController.js
│
├── routes
│   ├── categoryRoutes.js
│   └── productRoutes.js
│
├── config
│   └── db.js
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

## Installation & Setup

### 1. Clone Repository

```
git clone https://github.com/Yatvesh1107/machine-test-node.git
cd machine-test-node
```

### 2. Install Dependencies

```
npm install
```

### 3. Create Environment File

Create a `.env` file in the root directory and add:

```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=machine_test
PORT=3000
```

---

## Database Setup

Run the following SQL commands in MySQL:

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

## Run the Application

```
node server.js
```

Server will start at:

```
http://localhost:3000
```

---

## Application Routes

| Route                  | Description         |
| ---------------------- | ------------------- |
| `/categories`          | Category Management |
| `/products`            | Product Management  |
| `/categories/add`      | Add Category        |
| `/products/add`        | Add Product         |
| `/categories/edit/:id` | Edit Category       |
| `/products/edit/:id`   | Edit Product        |

---

## Notes

* Uses **MySQL connection pooling** for efficient database access.
* Pagination implemented using **LIMIT and OFFSET**.
* `.env` file is excluded from version control for security.

---

## Author

Machine Test Submission
