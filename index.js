let express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/user/:username', (req, res)=>{
    let user = req.params.username;
    res.render('index.ejs', {username : user});
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});
/*
app.get('/demo',(req, res)=>{
    res.render('index.ejs');
});
app.get('/', (req, res) => {
    res.send('<a href="/contact"> Contact us</a> <br> <a href="/about">About us</a>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact us Page</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>About us Page</h1>');
})

app.get('*', (req, res) => {
    res.send('404. This page does not exist. <a href="/"> Go to HomePage</a>');
})

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
})*/