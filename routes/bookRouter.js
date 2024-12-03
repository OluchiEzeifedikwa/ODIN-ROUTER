const {Router} = require('express');

const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('Hello Book'));
bookRouter.get('/:bookId', (req,res) => {
    const {bookRouter} = req.params;
    res.send(`${bookRouter}`)
});

module.exports = bookRouter;