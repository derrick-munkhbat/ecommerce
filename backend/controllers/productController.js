// controllers/productController.js
const pool = require("../db"); // Import the pool from db.js

// Get all products
const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new product
const { v4: uuidv4 } = require("uuid"); // Import UUID library

const createProduct = async (req, res) => {
  const { title, description, price } = req.body;
  const id = uuidv4(); // Generate a new UUID for the product
  try {
    const result = await pool.query(
      "INSERT INTO products (id, title, description, price) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, title, description, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
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
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params; // Extract the id from the request parameters
  try {
    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    // Optionally, you can return a message instead of 204
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
