const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Get all products
router.get("/products", productController.getProducts);

// Create a new product
router.post("/products", productController.createProduct);

// Update a product
router.put("/products/:id", productController.updateProduct); // Added slash before :id

// Delete a product
router.delete("/products/:id", productController.deleteProduct); // Added slash before :id

module.exports = router;
