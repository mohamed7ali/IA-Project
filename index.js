// ==================INITIALIZE EXPRESS APP=====================
const express = require("express");
const app = express();

// ==================GLOBAL MIDLLEWARE=====================
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Allow http request local hosts
const cors = require("cors");
app.use(cors());

app.use(express.static("upload"));
// ==================REQUIRED MODULE=====================
const examQuestions = require("./routes/examQuestions");
const user = require("./routes/users");
const admin = require("./routes/admins");
const history = require("./routes/histories");
const userQueue = require("./routes/usersQueue");
const authentication = require("./routes/authentication");

// ==================API ROUTES [ENDPOINTS]=====================
app.use("", admin);
app.use("", examQuestions);
app.use("", user);
app.use("", userQueue);
app.use("", history);
app.use("", authentication);
// ==================RUN THE APP=====================
// Connection with server
app.listen(4000, "localhost", () => {
  console.log("listening on http://localhost:4000");
});
