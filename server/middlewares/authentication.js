const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  if (!req.headers.access_token) {
    console.log("Tidak ada token");
  } else {
    try {
      const decodedToken = jwt.verify(
        req.headers.access_token,
        process.env.JWT_SECRET
      );
      req.userId = decodedToken.id;
      next();
    } catch {
      console.log("Email salah");
    }
  }
};

module.exports = authenticate
