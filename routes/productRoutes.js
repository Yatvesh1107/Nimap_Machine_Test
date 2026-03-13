const express = require("express");
const { getProducts, addProduct, editProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/",getProducts);

router.post("/",addProduct);

router.get("/edit/:id",editProduct);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);

module.exports = router;