// controllers/books.js
const express = require('express');
const router = express.Router();

let books = [{ id: 1, title: 'Sample Book', publishingYear: 2022, authorId: 1 }];

// Lista książek
exports.listBooks = (req, res) => {
    res.render('books', { books });
};

// Dodawanie książki
exports.addBook = (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const id = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    books.push({ id, title, publishingYear, authorId });
    res.redirect('/book/list');
};

// Usuwanie książki
exports.deleteBook = (req, res) => {
    const { id } = req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.redirect('/book/list');
};
