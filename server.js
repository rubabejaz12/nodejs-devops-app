const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

// Visitor counter variable
let visitorCount = 0;

app.get('/', (req, res) => {
    visitorCount++;
    
    // Dynamic information gathering
    const timestamp = new Date().toISOString();
    const containerId = os.hostname(); // Docker mein yeh Container ID dikhata hai

    // Simple HTML Response
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js AWS App</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
                .container { border: 2px solid #333; padding: 20px; display: inline-block; background: white; border-radius: 10px; }
                h1 { color: #007bff; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to my AWS Deployed App!</h1>
                <p><strong>Timestamp:</strong> ${timestamp}</p>
                <p><strong>Container ID (Hostname):</strong> ${containerId}</p>
                <p><strong>Total Visitors:</strong> ${visitorCount}</p>
            </div>
        </body>
        </html>
    `);
});

// Health check endpoint (for Kubernetes)
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});