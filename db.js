const authors = [
    {id: 1, name: "bryan"},
    {id: 2, name: "christian"},
    {id: 3, name: "jason"},
]

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId)
}

module.exports = {getAuthorById};

