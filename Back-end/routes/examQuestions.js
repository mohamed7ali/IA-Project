const router = require("express").Router();
const connection = require("../db/connection");
const multer = require("multer");
const util = require("util");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../upload");
  },
  filename: function (req, file, cb) {
    cb(null, Data.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// // Route to fetch quiz data

router.get("/", (req, res) => {
  try {
    connection.query(`
    SELECT * FROM exam_question
    ORDER BY RAND()
    LIMIT 5
  `, (error, rows, fields) => {
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
// // Route to add quiz.
// router.post("/", upload.single("audio"), async (req, res) => {
//   try {
//     const { question, ans_1, ans_2, ans_3, ans_4, correct } = req.body;
//     console.log(req.file.originalname);
//     // Read the audio file from disk and store it as a binary buffer
//     const audio = req.file.filename;
//     console.log(audio);
//     // Insert the new question into the database
//     const query = util.promisify(connection.query).bind(connection);
//     await query(
//       "INSERT INTO exam_question (Question, Ans_1, Ans_2, Ans_3, Ans_4, Audio, Correct ) VALUES (?, ?, ?, ?, ?, ?, ?)",
//       [question, ans_1, ans_2, ans_3, ans_4, audio, correct]
//     );

//     // Send a success response
//     res.status(201).json({ success: [{ msg: "Question inserted" }] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ errors: [{ msg: "Server error" }] });
//   }
// });

// // get all quizzes from the database
// router.get("/", (req, res) => {
//   try {
//     connection.query("SELECT * FROM exam_question", (error, rows, fields) => {
//       if (rows) {
//         res.json(rows);
//       } else {
//         res.sendStatus(404);
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });

// // Retrieve a single quiz by ID
// router.get("/:Id", (req, res) => {
//   try {
//     const Id = req.params.Id;
//     connection.query(
//       "SELECT * FROM exam_question WHERE ?",
//       { Id: Id },
//       (error, rows, fields) => {
//         if (rows.length === 0) {
//           res.sendStatus(404);
//         } else {
//           res.json(rows[0]);
//         }
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });

// Insert a new question
router.post("/", (req, res) => {
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

// // Update a question by ID
// router.put("/:Id", (req, res) => {
//   const { Audio, Question, Ans_1, Ans_2, Ans_3, Ans_4 } = req.body;
//   try {
//     connection.query(
//       "UPDATE exam_question SET Audio = ?, Question = ?, Ans_1 = ?, Ans_2 = ?, Ans_3 = ?, Ans_4 = ? WHERE Id = ?",
//       [Audio, Question, Ans_1, Ans_2, Ans_3, Ans_4, req.params.Id],
//       (err, result, fields) => {
//         if (result.affectedRows === 0) {
//           res.sendStatus(404);
//         } else {
//           res.status(202).json({ message: "question updated" });
//         }
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });

// // Delete a question by ID
// router.delete("/:Id", (req, res) => {
//   try {
//     const id = req.params.Id;
//     connection.query(
//       "DELETE FROM exam_question WHERE Id = ?",
//       [id],
//       (err, result, fields) => {
//         if (result.affectedRows === 0) {
//           res.sendStatus(404);
//         } else {
//           res.status(202).json({ message: "question deleted successfully" });
//         }
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//   }
// });

module.exports = router;
