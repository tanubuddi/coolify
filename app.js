const express = require('express');
const { Pool } = require('pg');
const app = express();

// Use the environment-provided PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Create a new PostgreSQL client pool using the DATABASE_URL from environment variables
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,  // Disable SSL since your PostgreSQL server doesn't support it
});

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`Hello, World! Database time: ${result.rows[0].now}`);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send("Database connection error");
    }
});

// Start the app
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
