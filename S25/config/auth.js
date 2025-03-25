const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

function validateToken(req, res, next) {
  var token = req.headers.authorization.slice;

  jwt.verify(token, secret_key, (error) => {
    if (error) {
      res.send({
        ok: false,
        result: "invalid token",
      });
    } else {
      next();
    }
  });
}

module.exports = validateToken;
