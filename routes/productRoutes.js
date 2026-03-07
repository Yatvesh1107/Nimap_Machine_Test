const express = require("express");
const { getProducts, addProduct, editProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/",getProducts);

router.post("/add",addProduct);

router.get("/edit/:id",editProduct);

router.post("/update/:id",updateProduct);

router.post("/delete/:id",deleteProduct);

module.exports = router;