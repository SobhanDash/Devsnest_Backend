const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  // `Bearer <token>` is received and thus the split() is used to get just the token
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decryptedtoken = jwt.verify(token, "secret@123");
    console.log(decryptedtoken);
    const user = await User.findAll({ id: decryptedtoken.userId });
    req.user = user[0];

    next();
  } catch (err) {
    const error = new Error("You are not authorized");
    next(error);
  }
};
