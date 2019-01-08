const express = require('express');

let port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
     let page = '<html><head><title>Go3D</title></head><body>';
     page += '<h1>Welcome to the Go3D project</h1>';
     page += '<p>Thank you for your interest.</p>';
     page += '</body></html>';
     res.send(page);
});

app.listen(port, () => {
     console.log(`Server is up on port ${port}`);
});
