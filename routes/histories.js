const router = require("express").Router();
const connection = require("../db/connection");

// Get all histories
router.get("/histories", (req, res) => {
  try {
    connection.query("SELECT * FROM history", (error, rows, fields) => {
      res.json(rows);
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Get history result by ID
router.get("/histories/:Id", (req, res) => {
  const id = req.params.Id;
  try {
    connection.query(
      "SELECT * FROM history WHERE Id = ?",
      [id],
      (error, rows, fields) => {
        if (rows.length === 0) {
          res.sendStatus(404);
        } else {
          res.json(rows[0]);
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Create a new history result
router.post("/histories", async (req, res) => {
  const { Exam_id, Email, Degree } = req.body;
  try {
    connection.query(
      "INSERT INTO history set ?",
      {
        Exam_id: Exam_id,
        Email: Email,
        Degree: Degree,
      },
      (error, rows, fields) => {
        res
          .status(201)
          .json({ message: "The History was saved successfully." });
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Update an history result by ID
router.put("/histories/:Id", (req, res) => {
  const id = req.params.Id;
  const { Exam_id, Email, Degree } = req.body;
  try {
    connection.query(
      "UPDATE history SET Exam_id = ?, Email = ?, Degree = ? WHERE Id = ?",
      [Exam_id, Email, Degree, id],
      (error, rows, fields) => {
        if (rows.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "history Updated" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Delete an history result by ID
router.delete("/histories/:Id", (req, res) => {
  const Id = req.params.Id;
  try {
    connection.query(
      "DELETE FROM history WHERE Id = ?",
      [Id],
      (error, rows, fields) => {
        if (rows.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "History deleted successfully" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
