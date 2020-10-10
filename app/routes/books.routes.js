module.exports = app => {
  const books = require("../controllers/books.controller.js");

  // Get all books
  app.get("/books", books.findAll);

  // Get book by id
  app.get("/books/:bookId", books.findOne);
};