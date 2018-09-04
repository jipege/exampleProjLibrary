const { db } = require("../db");
const User = require("../models/user");

module.exports = user => {
    const newUser = new User(user);
    db.pushUser(newUser);

    return newUser;
};