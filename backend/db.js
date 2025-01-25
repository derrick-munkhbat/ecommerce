// db.js
const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables from .env file

// Create a new pool instance for connecting to the database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the DATABASE_URL from .env
});

// Export the pool for use in other modules
module.exports = pool;
