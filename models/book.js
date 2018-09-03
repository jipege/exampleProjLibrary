const isValidBook = require("../utils/isValidBook");

class Book {

  constructor(book) {
    this.setBook(book);
  }

  setBook(book) {
    const errorsOrBool = isValidBook(book);

    if (typeof errorsOrBool === "boolean") {
      this.book = book;
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
