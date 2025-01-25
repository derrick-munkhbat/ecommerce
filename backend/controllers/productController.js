// controllers/productController.js
const { Pool } = require("pg"); // Import PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure you have your connection string in .env
});

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
const createProduct = async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (title, description, price) VALUES ($1, $2, $3) RETURNING *",
      [title, description, price]
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
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(204).send(); // No content to send back
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
