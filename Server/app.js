const signUpHelpers = require("./signUp.js");
const addmissionHelpers = require("./addmission.js");
const loginHelpers = require("./login.js");
const tableHelpers = require("./table.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const PORT = 5000;
app.use(cors());
app.get("/health", health);
app.post("/login", login);
app.post("/addmission", addmission);
app.post("/signUP", signUp);
app.post("/table", table);
app.use("/file", express.static("./addmissionList.csv"));

function start() {
  try {
    app.listen(PORT, serverStarted);
  } catch (error) {
    console.log(error);
  }
}

start();
function serverStarted() {
  console.log(`Server started on : ${PORT}`);
}
function health(req, res) {
  res.sendFile();
}
function login(req, res) {
  const loginSuccess = loginHelpers.processlogin(
    req.body.userName,
    req.body.pasword
  );
  console.log(`Entry Added`);

  if (loginSuccess) {
    res.status(200).json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({
      success: false,
      message: "Login failed. User not found or incorrect password.",
    });
  }
}
function signUp(req, res) {
  const signUpSuccess = signUpHelpers.writeToFile(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password
  );
  console.log(`Entry Added`);

  if (signUpSuccess) {
    res.status(200).json({ success: true, message: "signUp successful" });
  } else {
    res.status(401).json({
      success: false,
      message: "Username already exists. Please choose a different username.",
    });
  }
}

function addmission(req, res) {
  addmissionHelpers.writeToFile(
    req.body.fullName,
    req.body.fatherName,
    req.body.email,
    req.body.phoneNumber,
    req.body.matricDivision,
    req.body.stream
  );
  console.log(`Entry Added`);
  res.send();
}

function table(req, res) {
  const csvList = tableHelpers.processList(
    req.body.fullName,
    req.body.fatherName,
    req.body.email,
    req.body.phoneNumber,
    req.body.matricDivision,
    req.body.stream
  );

  console.log(`Entry Added`);
  res.status(200).json({ csvList });
}
