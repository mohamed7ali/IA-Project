const router = require("express").Router();
const connection = require("../db/connection");

// Get all newUsers
router.get("/newUsers", (req, res) => {
  try {
    connection.query("SELECT * FROM user_queue", (error, rows, fields) => {
      res.json(rows);
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Select a user by ID and insert him into the user_queue table
router.post("/newUsers/:Id", async (req, res) => {
  const Id = req.params.Id;
  try {
    // Retrieve the user by ID from the user table
    connection.query(
      "SELECT * FROM user WHERE Id = ?",
      [Id],
      (error, rows, fields) => {
        if (rows.length === 0) {
          res.sendStatus(404);
          return;
        }
        // Insert the user into the user_queue table
        connection.query("INSERT INTO user_queue set ?", {
          Id: rows[0].Id,
          Name: rows[0].Name,
          Email: rows[0].Email,
          Phone: rows[0].Phone,
          Status: rows[0].Status,
        });
        res.status(201).json({
          message: "the user was added to the Queue from the table users",
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Get a user by ID
router.get("/newUsers/:Id", (req, res) => {
  try {
    const { Id } = req.params;
    connection.query(
      "SELECT * FROM user_queue WHERE ?",
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

// Delete a user by ID
router.delete("/newUsers/:Id", async (req, res) => {
  try {
    connection.query(
      "DELETE FROM user_queue WHERE Id = ?",
      [req.params.Id],
      (error, result, fields) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "User deleted from the queue" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
