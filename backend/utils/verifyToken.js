const jwt = require("jsonwebtoken");
const createError = require("./error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  !token && next(createError(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    err && next(createError(403, "Invalid Token"));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res,next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "You are not allowed to do that"));
    }
  });
};
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res,next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "You are not allowed to do that"));
    }
  });
};

module.exports = { verifyToken, verifyUser,verifyAdmin};
