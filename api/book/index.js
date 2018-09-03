const { BOOK_NAME, BOOK_AUTHOR } = require("../../consts/book");
const createBook = require("../../utils/createBook");
const { db } = require("../../db");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const newBook = createBook({
    [BOOK_NAME]: req.body[BOOK_NAME],
    [BOOK_AUTHOR]: req.body[BOOK_AUTHOR]
  });

  res.json(newBook);
});

router.get("/", (req, res) => {
  console.log(db);
  res.json(db.getBook(req.query.bookId));
});

module.exports = router;
