const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const examQuestions = require("./routes/examQuestions");
const user = require("./routes/users");
const admin = require("./routes/admins");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//routes
app.use("", admin);
app.use("", examQuestions);
app.use("", user);

// Connection with server
app.listen(4000, "localhost", () => {
  console.log("listening on http://localhost:4000");
});
