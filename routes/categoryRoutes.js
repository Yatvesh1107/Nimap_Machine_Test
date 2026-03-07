const express = require('express');
const { getCategories, addCategory, editCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');


const router = express.Router()

router.get("/", getCategories);
router.post("/add", addCategory);
router.get("/edit/:id", editCategory);
router.post("/update/:id", updateCategory);
router.post("/delete/:id", deleteCategory);
module.exports = router;

