import { User } from 'createUser.js';

User.Prototype.addBook = (bookName) => {
    for (let i = 0; i<booksCollection.length; i++) {
        if (booksCollection[i].name == bookName) {
            this.collection.push(booksCollection[i]);
            break;
        } else {console.log(`Книги с названием ${bookName} не существует`)};
    };
};

export { User };