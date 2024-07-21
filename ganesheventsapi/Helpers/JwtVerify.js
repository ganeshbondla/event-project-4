const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const securekey = process.env.JWT_SECRATE_KEY;
    const headerToken = req.header(process.env.JWT_HEADER_KEY);

    if (!headerToken) {
      return res.status(400).json({
        success: false,
        message: "JWT Token is Must",
      });
    }

    const verify = jwt.verify(headerToken, securekey);
    if (!verify) {
      return res.status(404).json({
        success: false,
        message: "Invalid Token",
      });
    }

    req.userId = verify.user_id;

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
