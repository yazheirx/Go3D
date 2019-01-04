const express = require('express');

const port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
  let page = '<html><head><title>Go3D</title></head><body><h1>Welcome to the Go3D project</h1><p>Thank you for your interest</p></body></html>';
     res.send(page)
});

app.listen(port, () => {
     console.log(`Server is up on port ${port}`);
});
