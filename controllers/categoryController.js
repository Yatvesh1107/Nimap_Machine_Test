const db = require("../config/db");

exports.getCategories = async (req, res) => {
    try {

        const [rows] = await db.query("SELECT * FROM categories");

        res.render("category/category", {
            categories: rows
        });

    } catch (err) {

        console.log(err);
        

    }
};

exports.addCategory = async (req, res) => {

    try {

        const name = req.body.categoryName;

        await db.query(
            "INSERT INTO categories (categoryName) VALUES (?)",
            [name]
        );

        res.redirect("/categories");

    } catch (err) {

        console.log(err);
        

    }

};

exports.editCategory = async (req, res) => {
  try {
    const id = req.params.id;

const [rows] = await db.query(
"SELECT * FROM categories WHERE categoryId=?",
[id]
);

res.render("category/editCategory",{category:rows[0]});

  } catch (error) {
    console.log(error);
    
  }
    
};

exports.updateCategory = async (req,res)=>{

try {
  const id = req.params.id;
  const name = req.body.categoryName;

await db.query(
"UPDATE categories SET categoryName=? WHERE categoryId=?",
[name,id]
);

res.redirect("/categories");
} catch (error) {
  console.log(error);
  
}

};

exports.deleteCategory = async (req, res) => {

    try {

        const id = req.params.id;

        await db.query(
            "DELETE FROM categories WHERE categoryId=?",
            [id]
        );

        res.redirect("/categories");

    } catch (err) {

        console.error(err);
        res.send("Delete error");

    }

};