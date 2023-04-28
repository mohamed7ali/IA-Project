const router = require("express").Router();
const connection = require("../db/connection");

// get all quizzes from the database
router.get("/quizzes", (req, res) => {
  try {
    connection.query("SELECT * FROM exam_question", (error, rows, fields) => {
      if (rows) {
        res.json(rows);
      } else {
        res.sendStatus(404);
      }
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Retrieve a single quiz by ID
router.get("/quizzes/:Id", (req, res) => {
  try {
    const Id = req.params.Id;
    connection.query(
      "SELECT * FROM exam_question WHERE ?",
      { Id: Id },
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

// Insert a new question
router.post("/quizzes", (req, res) => {
  const { Audio, Question, Ans_1, Ans_2, Ans_3, Ans_4 } = req.body;
  try {
    connection.query(
      "INSERT INTO exam_question set ?",
      {
        Audio: Audio,
        Question: Question,
        Ans_1: Ans_1,
        Ans_2: Ans_2,
        Ans_3: Ans_3,
        Ans_4: Ans_4,
      },
      (err, result, fields) => {
        res
          .status(201)
          .json({ message: "The question was added successfully." });
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Update a question by ID
router.put("/quizzes/:Id", (req, res) => {
  const { Audio, Question, Ans_1, Ans_2, Ans_3, Ans_4 } = req.body;
  try {
    connection.query(
      "UPDATE exam_question SET Audio = ?, Question = ?, Ans_1 = ?, Ans_2 = ?, Ans_3 = ?, Ans_4 = ? WHERE Id = ?",
      [Audio, Question, Ans_1, Ans_2, Ans_3, Ans_4, req.params.Id],
      (err, result, fields) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "question updated" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Delete a question by ID
router.delete("/quizzes/:id", (req, res) => {
  try {
    const id = req.params.id;
    connection.query(
      "DELETE FROM exam_question WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.status(202).json({ message: "question deleted successfully" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
