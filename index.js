import { USER_AGE, USER_NAME } from "./consts/user";

const express = require("express");
const User = require("./models/user");

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

console.log(userFailed);

app.listen(3000);
