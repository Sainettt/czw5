const Author = require('../models/author');

exports.getAuthorsList = (req, res) => {
    // Pobierz listę autorów (przykładowe dane)
    const authors = [
        new Author(1, 'Author 1'),
        new Author(2, 'Author 2')
    ];

    if (authors.length === 0) {
        res.send('No authors has been found');
    } else {
        res.render('authors', { authors });
    }
};