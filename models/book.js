const isValidBook = require("../utils/isValidBook");
const hashObjectToString = require("../utils/hashObjectToString");
const { BOOK_TITLE, BOOK_AUTHOR, BOOK_ID } = require("../consts/book");

class Book {
  constructor(book) {
    this.setBook(book);
  }

  setBook(book) {
    const errorsOrBool = isValidBook(book);

    if (typeof errorsOrBool === "boolean") {
      this[BOOK_TITLE] = book[BOOK_TITLE];
      this[BOOK_AUTHOR] = book[BOOK_AUTHOR];
      this[BOOK_ID] = hashObjectToString(book);
    } else if (typeof errorsOrBool === "object") {
      console.log("Book validation errors", errorsOrBool);

      throw new Error();
    }
  }

  getBook() {
    return this.book;
  }

  editBook(data) {
    this.setBook(Object.assign({}, this.book, data));
  }
}

module.exports = Book;
