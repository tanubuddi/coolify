const express = require('express');
const app = express();

// Use the environment-provided PORT or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is my Node.js app running on the specified port!');
});

// Listen on all network interfaces (0.0.0.0) to accept external requests
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
