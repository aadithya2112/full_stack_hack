const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 3000;

// Use the CORS middleware to allow any origin
app.use(cors());

// Load the large JSON file
const logFilePath = path.join(__dirname, 'log_data.json');
let logData = [];

// Read JSON file data
fs.readFile(logFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the log file:', err);
    } else {
        logData = JSON.parse(data);
    }
});

// Endpoint to get the last 10 timestamps
app.get('/logs', (req, res) => {
    if (logData.length > 0) {
        const last10Logs = logData.slice(-10); // Get the last 10 entries
        res.json(last10Logs);
    } else {
        res.status(500).send('No log data available');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
