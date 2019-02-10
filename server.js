const express = require('express');

let port = process.env.PORT || 3000;
let app = express();

app.listen(port, () => {
     console.log(`Server is up on port ${port}`);
});
app.use(express.static('public'));
