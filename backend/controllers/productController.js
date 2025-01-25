// controllers/productController.js
const pool = require("../db");

// Get all products
const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (title, description, price) VALUES ($1, $2, $3) RETURNING *",
      [title, description, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;
  try {
    const result = await pool.query(
      "UPDATE products SET title = $1, description = $2, price = $3 WHERE id = $4 RETURNING *",
      [title, description, price, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Product not found");
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Product not found");
    }
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
