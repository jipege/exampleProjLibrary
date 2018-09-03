let db;

class DB {
  constructor(
    initialState = {
      users: [],
      books: [],
      collections: []
    }
  ) {
    this.state = initialState;
    this.getCollectionByUserId = this.getCollectionByUserId.bind(this);
    this.isCollectionExistByUserId = this.isCollectionExistByUserId.bind(this);
    this.getState = this.getState.bind(this);
    this.getBook = this.getBook.bind(this);
  }

  immutableModification(data) {
    this.state = Object.assign({}, this.state, data);
  }

  pushUser(user) {
    this.immutableModification({
      users: this.state.users.concat([user])
    });
  }

  pushBook(book) {
    this.immutableModification({
      books: this.state.books.concat([book])
    });
  }

  pushCollection(collection) {
    this.immutableModification({
      collections: this.state.collections.concat([collection])
    });
  }

  isUserExist(userId) {
    return !!this.state.users.filter(user => user.id === userId)[0];
  }

  isBookExist(bookId) {
    return !!this.state.books.filter(book => book.id === bookId)[0];
  }

  isCollectionExistByUserId(userId) {
    return !!this.getCollectionByUserId(userId);
  }

  getCollectionByUserId(userId) {
    return this.state.collections.filter(
      collection => collection.userId === userId
    )[0];
  }

  getBook(bookId) {
    return this.state.books.filter(book => book.id === bookId)[0];
  }

  getState() {
    return this.state;
  }
}

module.exports.db = new DB();
