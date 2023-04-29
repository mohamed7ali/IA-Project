const router = require("express").Router();
const connection = require("../db/connection");
const { body, validationResult } = require("express-validator");
const util = require("util");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Register a new user
router.post(
  "/register",
  body("Name").notEmpty().withMessage("Name is required"),
  body("Email").isEmail().withMessage("Invalid Email"),
  body("Phone").isMobilePhone().withMessage("Invalid Phone number"),
  body("Password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { Name, Email, Phone, Password } = req.body;

    try {
      // Check if user already exists with the given Email or Phone number
      const userExists = await util
        .promisify(connection.query)
        .call(connection, "SELECT Id FROM user WHERE Email = ? OR Phone = ?", [
          Email,
          Phone,
        ]);
      if (userExists.length > 0) {
        return res.status(400).json({
          message: "User already exists with the given Email or Phone number",
        });
      }

      // Hash the Password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(Password, saltRounds);

      // Generate random token for Email verification
      const verificationToken = crypto.randomBytes(20).toString("hex");

      // Insert the user into the database
      await util
        .promisify(connection.query)
        .call(
          connection,
          "INSERT INTO user (Name, Email, Phone, Password, verification_token) VALUES (?, ?, ?, ?, ?)",
          [Name, Email, Phone, hashedPassword, verificationToken]
        );

      // Send Email with verification link

      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Login route
router.post("/login", async (req, res) => {
  const { Email, Password } = req.body;

  // Check if Email and password are provided
  if (!Email || !Password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    // Check if user exists in the database
    const query = "SELECT * FROM user WHERE Email = ?";
    const rows = await util
      .promisify(connection.query)
      .call(connection, query, [Email]);
    if (!rows.length) {
      return res
        .status(401)
        .json({ message: "Your Email does not exist in database." });
    }

    const user = rows[0];

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(
      req.body.Password,
      user.Password
    );
    if (!passwordMatch) {
      return res.status(401).json({ message: "Your Password Incorrect!" });
    }
    // res.json(user);
    // Generate JWT token and send it in response
    // Define secret key
    const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

    // Generate JWT token
    const token = jwt.sign({ Id: user.Id }, JWT_SECRET, { expiresIn: "1h" });

    // Send token in response
    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
