const jwt = require("jsonwebtoken");
const { UnAuthorized } = require("../errors");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new UnAuthorized("Invalid Authentication");
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = id;
    next();
  } catch (error) {
    throw new UnAuthorized("Invalid Authentication");
  }
};

module.exports = auth;
