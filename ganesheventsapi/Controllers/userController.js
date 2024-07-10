const express = require("express");
const router = express.Router();
const database = require("../Config/database");
const jwt = require("jsonwebtoken");

router.post("/create", (req, res) => {
  const userId = Math.floor(100000 + Math.random() * 999999);
  const userName = req.body.user_name;
  const email = req.body.user_email;
  const mobile = req.body.user_mobile;
  const password = req.body.user_password;

  const checkQuery = `SELECT * FROM users WHERE email='${email}' AND isDeleted='0'`;
  database.query(checkQuery, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        err,
      });
    } else {
      if (results.length > 0) {
        res.status(200).json({
          success: true,
          message: "User With Email Address Already Created, Try Diffrent!",
        });
      } else {
        const runQuery = `INSERT INTO users(user_id, user_name, email, mobile, password, status, isDeleted)
        VALUES('${userId}','${userName}','${email}','${mobile}','${password}','0','0')`;

        database.query(runQuery, (err, results) => {
          if (err) {
            res.status(500).json({
              success: false,
              message: "User is Not Created",
              err,
            });
          } else {
            res.status(201).json({
              success: true,
              message: "User Successfully Created",
              results,
            });
          }
        });
      }
    }
  });
});

//login
router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const checkQuery = `SELECT * FROM users WHERE email='${username}' AND isDeleted='0'`;
  database.query(checkQuery, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        err,
      });
    } else {
      if (results.length > 0) {
        let dbPassword = results[0].password;
        if (dbPassword == password) {
          const user = {
            Time: Date(),
            user_name: results[0].user_name,
            user_email: results[0].email,
            user_id: results[0].user_id,
          };
          const token = jwt.sign(user, process.env.JWT_SECRATE_KEY, {
            expiresIn: process.env.JWT_EXPIRE,
          });

          res.status(200).json({
            success: true,
            user,
            token,
          });
        } else {
          res.status(200).json({
            success: false,
            message: "You have entered invalid Password",
          });
        }
      } else {
        res.status(200).json({
          success: false,
          message: "User Is Not Registered With User.",
        });
      }
    }
  });
});

//auth check
router.get("/auth/check", (req, res) => {
  const headerkey = process.env.JWT_HEADER_KEY;
  const securekey = process.env.JWT_SECRATE_KEY;
  const headerToken = req.header(headerkey);
  const verify = jwt.verify(headerToken, securekey);
  if (verify) {
    const userId = verify.user_id;
    res.status(200).json({
      user_id: userId,
      success: true,
    });
  } else {
    res.status(200).json({
      success: false,
    });
  }
});

module.exports = router;
