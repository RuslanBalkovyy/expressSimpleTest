
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Welcome</title>
            <style>
            .centered {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            </style>
        </head>
        <body>
            <div class="centered">
            <h1>Hello, World!</h1>
            <p>Welcome to my Express server.</p>
            </div>
        </body>
        </html>
        `);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});