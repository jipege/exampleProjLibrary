const createUser = require("../../utils/createUser");

module.exports.userRegister = ((req, res) => {
    const newUser = createUser({
      [USER_AGE]: req.body[USER_AGE],
      [USER_NAME]: req.body[USER_NAME]
    });
  
    res.json(newUser)
});