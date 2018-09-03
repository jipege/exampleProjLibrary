const { db } = require("../db");
const Book = require("../models/book");

module.exports = book => {
  const newBook = new Book(book);
  db.pushBook(newBook);

  return newBook;
};
