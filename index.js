import { USER_AGE, USER_NAME } from "./consts/user";

require('babel/core');
const express = require("express");
const User = require("./models/user");
const Book = require("./models/book");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

/**
 * Valid user object
 */

const user = new User({
  [USER_AGE]: 23,
  [USER_NAME]: "Scott"
});

console.log(user);

/**
 * Failed validation test
 */

const userFailed = new User({
  [USER_AGE]: "not valid type",
  [USER_NAME]: "Alice"
});

/**
 * Same 2 actions w/ book creation
 */

 const tryoutBook = new Book({
   [BOOK_NAME]: "Catcher in the rye",
   [BOOK_AUTHOR]: "Jerom Selindger"
 });

 const notvalidBook = new Book({
   [BOOK_NAME]: "4EBURASHKA",
   [BOOK_AUTHOR]: null
 });

console.log(userFailed);
console.log(notvalidBook);

app.listen(3000);
