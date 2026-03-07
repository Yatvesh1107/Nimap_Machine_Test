require("dotenv").config();

const express = require("express");


const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.get("/", (req,res)=>{
res.redirect("/categories")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log('Server running')
});