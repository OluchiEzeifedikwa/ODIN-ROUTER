const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');


const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.js
const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
    { href: "/", text: "Contact"},
    { href: "terms", text: "Terms"},
  ];

const linkers = [
  { href: "/", text: "Contact"},
  { href: "terms", text: "Terms"},
]

const users = ["Rose", "Cake", "Biff"];
  
  app.get("/", (req, res) => {
    res.render("index", { links: links, users: users, linkers: linkers });
  });

  app.get("/about", (req, res) => {
    res.render("about", { links: links, users: users, linkers: linkers });
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