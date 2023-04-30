const router = require("express").Router();
const connection = require("../db/connection");

// Get all users
router.get("/", (req, res) => {
  try {
    connection.query("SELECT * FROM user", (error, rows, fields) => {
      res.json(rows);
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Add a new user
router.post("/", (req, res) => {
  const { Name, Email, Password, Phone } = req.body;
  try {
    connection.query(
      "INSERT INTO user set ?",
      {
        Name: Name,
        Email: Email,
        Password: Password,
        Phone: Phone,
      },
      (err, result, fields) => {
        res.status(201).json({ message: "the user was added to the Queue" });
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Get a user by ID
router.get("/:Id", (req, res) => {
  try {
    const { Id } = req.params;
    connection.query(
      "SELECT * FROM user WHERE ?",
      { Id: Id },
      (error, result, fields) => {
        if (result.length > 0) {
          res.json(result[0]);
        } else {
          res.sendStatus(404);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Update a user by ID
router.put("/:Id", (req, res) => {
  const { Name, Email, Password, Phone } = req.body;
  try {
    connection.query(
      "UPDATE user SET Name = ?, Email = ?, Password = ?, Phone = ? WHERE Id = ?",
      [Name, Email, Password, Phone, req.params.Id],
      (error, result, fields) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "User updated" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Delete a user by ID
router.delete("/:Id", async (req, res) => {
  try {
    connection.query(
      "DELETE FROM user WHERE Id = ?",
      [req.params.Id],
      (error, result, fields) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "User deleted from the Queue" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
module.exports = router;
