// routes/books.js
const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

// GET - lista książek
router.get('/book/list', booksController.listBooks);

// POST - dodawanie książki
router.post('/book/add', booksController.addBook);

// DELETE - usuwanie książki
router.delete('/book/delete/:id', booksController.deleteBook);

module.exports = router;
