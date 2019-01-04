const express = require('express');

const port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
     // console.log('request answered');
     res.send('<h1>Hello Express</h1>');
     // res.send({
     //      name: 'justin',
     //      likes: ['biking', 'cities']
     // });
     // res.render('home.hbs', {
     // 	 pageTitle: 'Home',
     // 	 welcomeMessage: 'Welcome to my website'
     // });
});

app.listen(port, () => {
     console.log(`Server is up on port ${port}`);
});
