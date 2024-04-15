// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Ustawienie middleware do przetwarzania danych z formularzy
app.use(bodyParser.urlencoded({ extended: true }));

// Ustaw obsługę silnika widoków na ejs
app.set('view engine', 'ejs');

// Importowanie routingu
const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

// Ustawienie routingu
app.use('/', homeRouter);
app.use('/', booksRouter);
app.use('/', authorsRouter);

// Nasłuchiwanie na porcie 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
