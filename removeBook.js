import { createUser } from 'createUser.js';

User.Prototype.removeBook = (bookName) => {
    for (let i = 0; i<this.collection.length; i++) {
        if (this.collection[i].name == bookName) {
            this.collection.splice(i, 1);
            break;
        } else {console.log(`Книги с названием ${bookName} в коллекции не обнаружено`)};
    };
};

export { User };