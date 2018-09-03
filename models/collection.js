class Collection {
  constructor({ userId, books }) {
    this.userId = userId;
    this.books = books;
    this.addBook = this.addBook.bind(this);
  }

  addBook(bookId) {
    this.books = this.books.concat([bookId]);
  }
}

module.exports = Collection;
