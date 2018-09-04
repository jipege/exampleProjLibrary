const addBook = require("../../models/collection");
const { db } = require("../../db");

module.exports.collectionPost = ((req,res) => {
    if (db.isCollectionExistByUserId(req.body.userId)) {
        /**
         * Add book to collection if it
         * exist in db
         */
        const collection = db.getCollectionByUserId(req.body.userId);
    
        collection.addBook(req.body.bookId);
      } else {
        /**
         * Push instance of collection to db
         * if not exist
         */
        db.pushCollection(
          new Collection({
            userId: req.body.userId,
            books: [req.body.bookId]
          })
        );
      }
    
      res.json(db.getState());
});