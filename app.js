const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Use Pool to connect to PostgreSQL using DATABASE_URL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,  // Ensures secure connection (common for managed databases)
    },
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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
