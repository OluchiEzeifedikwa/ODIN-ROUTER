const {Router} = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send('Hello index'));
indexRouter.get('/:indexId', (req,res) => {
    const {indexRouter} = req.params;
    res.send(`${indexRouter}`)
});

module.exports = indexRouter;