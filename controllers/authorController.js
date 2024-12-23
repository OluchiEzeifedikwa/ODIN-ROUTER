const db = require('../db');
const asyncHandler = require ('express-async-handler');
const customNotFoundError = require('../errors/customNotFoundError')


const getAuthorById = asyncHandler(async(req, res) => {
    const {authorId} = req.params;
    
        const author = await db.getAuthorById(Number(authorId));
    
        if (!author) {
            throw new customNotFoundError('Author not seen');
            // res.status(404).send('Author not found');
            // return;
        }
        res.send(`Author name: ${author.name}`)
    });





module.exports = { getAuthorById };
