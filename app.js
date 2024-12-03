const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.js
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];

const users = ["Rose", "Cake", "Biff"];
  
  app.get("/", (req, res) => {
    res.render("index", { links: links, users: users });
  });
  


app.get('/', (req, res) => {
    res.render('index', {message: 'EJS rocks'});
});





app.use('/author', authorRouter);
app.use('/book', bookRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    // res.status(500).send(err);
    res.status(err.statusCode || 500).send(err.message);

    // next(err);
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server listening at PORT ${PORT}`)
});