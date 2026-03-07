const db = require("../config/db");

exports.getProducts = async (req,res)=>{

try {
  let page = parseInt(req.query.page) || 1;
let limit = 10;
let offset = (page-1)*limit;

const [products] = await db.query(
`SELECT 
p.productId,
p.productName,
c.categoryName,
c.categoryId
FROM products p
JOIN categories c
ON p.categoryId = c.categoryId
LIMIT ? OFFSET ?`,
[limit,offset]
);

const [categories] = await db.query(
"SELECT * FROM categories"
);

res.render("product/product",{
products,
categories,
page
});
} catch (error) {
  console.log(error);
  
}

};

exports.addProduct = async (req,res)=>{

try {
  const {productName,categoryId} = req.body;

await db.query(
"INSERT INTO products (productName,categoryId) VALUES (?,?)",
[productName,categoryId]
);

res.redirect("/products");
} catch (error) {
  console.log(error);
  
}

};

exports.editProduct = async (req,res)=>{

try {
  const id = req.params.id;

const [product] = await db.query(
"SELECT * FROM products WHERE productId=?",
[id]
);

const [categories] = await db.query(
"SELECT * FROM categories"
);

res.render("product/editProduct",{
product:product[0],
categories
});
} catch (error) {
  console.log(error);
  
}

};

exports.updateProduct = async(req, res) =>{
  try {
    const id = req.params.id;

const {productName,categoryId} = req.body;

await db.query(
"UPDATE products SET productName=?,categoryId=? WHERE productId=?",
[productName,categoryId,id]
);

res.redirect("/products");
  } catch (error) {
    console.log(error);
    
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

await db.query(
"DELETE FROM products WHERE productId=?",
[id]
);

res.redirect("/products");
  } catch (error) {
    console.log(error);
    
  }
}