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
const { BOOK_TITLE, BOOK_AUTHOR } = require("./consts/book");

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
const collectionPost = require("./api/collections/collectionPost");
const userRegister = require("./api/user/userRegister");

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

app.post("/register", userRegister());

app.post("/addbook", (req, res) => {
  const newBook = createBook({
    [BOOK_TITLE]: req.body[BOOK_TITLE],
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

app.post("/collection", [checkUser, checkBook], collectionPost(req, res));

app.listen(process.env.SERVER_PORT, () => {
  console.log("listens on " + process.env.SERVER_PORT);
});
