const router = require("express").Router();
const connection = require("../db/connection");

// Get all users in the user_queue table
router.get("/", (req, res) => {
  try {
    connection.query("SELECT * FROM user_queue", (error, rows, fields) => {
      res.json(rows);
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Select a user by ID from user_queue and insert him into the user table, delete him from the user_queue table
router.post("/:Id", async (req, res) => {
  const Id = req.params.Id;
  connection.query(
    "SELECT * FROM user_queue WHERE Id = ?",
    [Id],
    (err, results) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
        return;
      }

      const user = results[0];

      if (!user) {
        return res.status(202).json({ message: "No users in queue" });
      }

      connection.beginTransaction((err) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
          return;
        }

        connection.query(
          "INSERT INTO user set ?",
          {
            Id: user.Id,
            Name: user.Name,
            Email: user.Email,
            Phone: user.Phone,
            Status: user.Status,
            Password: user.Password,
            verification_token: user.verification_token,
          },
          (err) => {
            if (err) {
              connection.rollback(() => {
                console.error(err);
                res.sendStatus(500);
              });
              return;
            }

            connection.query(
              "DELETE FROM user_queue WHERE id = ?",
              [Id],
              (err) => {
                if (err) {
                  connection.rollback(() => {
                    console.error(err);
                    res.sendStatus(500);
                  });
                  return;
                }

                connection.commit((err) => {
                  if (err) {
                    connection.rollback(() => {
                      console.error(err);
                      res.sendStatus(500);
                    });
                    return;
                  }

                  return res
                    .status(202)
                    .json({ message: `Processed user ${user.Id}` });
                });
              }
            );
          }
        );
      });
    }
  );
});

// Get a user by ID
// router.get("/:Id", (req, res) => {
//   try {
//     const { Id } = req.params;
//     connection.query(
//       "SELECT * FROM user_queue WHERE ?",
//       { Id: Id },
//       (error, result, fields) => {
//         if (result.length > 0) {
//           res.json(result[0]);
//         } else {
//           res.sendStatus(404);
//         }
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// });

// Delete a user by ID
router.delete("/:Id", async (req, res) => {
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
