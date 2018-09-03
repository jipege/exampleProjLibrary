require("dotenv").config();

const bodyParser = require("body-parser");
const createUser = require("./utils/createUser");
const createBook = require("./utils/createBook");
const errorMiddleware = require("./middlewares/error");
const createError = require("./utils/createError");
const express = require("express");
const { db } = require("./db");

/**
 * Consts
 */
const { USER_AGE, USER_NAME } = require("./consts/user");
const { BOOK_NAME, BOOK_AUTHOR } = require("./consts/book");

/**
 * Pages
 */
const indexPage = require("./pages/index");

/**
 * Models
 */
const User = require("./models/user");
const Book = require("./models/book");
const Collection = require("./models/collection");

/**
 * APIs
 */

const bookAPI = require("./api/book");

const app = express();

app.use(bodyParser.json());
app.use(express.static("static"));
app.use(errorMiddleware);

app.use("/book", bookAPI);

app.get("/", (req, res) => {
  res.send(indexPage());
});

/**
 * Valid user object
 */

app.post("/register", (req, res) => {
  const newUser = createUser({
    [USER_AGE]: req.body[USER_AGE],
    [USER_NAME]: req.body[USER_NAME]
  });

  res.json(newUser);
});

app.post("/addbook", (req, res) => {
  const newBook = createBook({
    [BOOK_NAME]: req.body[BOOK_NAME],
    [BOOK_AUTHOR]: req.body[BOOK_AUTHOR]
  });

  res.json(newBook);
});

const checkUser = (req, res, next) => {
  if (req.body.userId) {
    if (db.isUserExist(req.body.userId)) {
      return next();
    }

    return next("Пользователь не найден");
  }

  next("Не указан ид пользователя");
};

const checkBook = (req, res, next) => {
  if (req.body.bookId) {
    if (db.isBookExist(req.body.bookId)) {
      return next();
    }
    return next("Книга не найдена");
  }
  next("Не указан ид книги");
};

app.post("/collection", [checkUser, checkBook], (req, res) => {
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

app.listen(process.env.SERVER_PORT, () => {
  console.log("listens on " + process.env.SERVER_PORT);
});
