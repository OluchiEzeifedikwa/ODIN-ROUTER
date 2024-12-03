const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');


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