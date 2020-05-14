const jwt = require('jsonwebtoken');

const logger = (req, res, next) => {
  console.log("Logging route:", req.path, new Date().toISOString());
  next();
};

const authenticate = (req, res, next) => {
  let header = req.headers["authorization"];
  console.log(header);
  let token = header.split(" ")[1];
  console.log(header);

  jwt.verify(token, "secret", function(err, decoded) {
    console.log(decoded);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.sendStatus(401);
    }
  });
};

module.exports = {
  logger,
  authenticate
};
