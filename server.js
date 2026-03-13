require("dotenv").config();

const express = require("express");
const methodOverride = require('method-override');

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req,res)=>{
res.redirect("/categories")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log('Server running')
});