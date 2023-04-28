const router = require("express").Router();
const connection = require("../db/connection");

// Get all admins
router.get("/admins", (req, res) => {
  try {
    connection.query("SELECT * FROM admin", (error, rows, fields) => {
      res.json(rows);
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Add a new admin
router.post("/admins", (req, res) => {
  const { Name, Email, Password, Phone, Status } = req.body;
  try {
    connection.query(
      "INSERT INTO admin set ?",
      {
        Name: Name,
        Email: Email,
        Password: Password,
        Phone: Phone,
        Status: Status,
      },
      (err, result, fields) => {
        res
          .status(201)
          .json({ message: "the admin was added to the database" });
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Get an admin by ID
router.get("/admins/:Id", (req, res) => {
  try {
    const { Id } = req.params;
    connection.query(
      "SELECT * FROM admin WHERE ?",
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

// Update an admin by ID
router.put("/admins/:Id", (req, res) => {
  const { Name, Email, Password, Phone, Status } = req.body;
  try {
    connection.query(
      "UPDATE admin SET Name = ?, Email = ?, Password = ?, Phone = ?, Status = ? WHERE Id = ?",
      [Name, Email, Password, Phone, Status, req.params.Id],
      (error, result, fields) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "Admin updated" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Delete an admin by ID
router.delete("/admins/:Id", async (req, res) => {
  try {
    connection.query(
      "DELETE FROM admin WHERE Id = ?",
      [req.params.Id],
      (error, result, fields) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "Admin deleted" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
