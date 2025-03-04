const express = require("express");
const mongoose = require("mongoose");
const Signup = require("./signup_schema"); 
const app = express();
app.use(express.json());
const port = 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
app.get("/signup", (req, res) => {
  const { username, email, password, dateofbirth } = req.query;
  if (!username) {
    return res.status(400).send("Username cannot be empty");
  }
  if (!email) {
    return res.status(400).send("Email cannot be empty");
  }
  if (!password || password.length < 8 || password.length > 16) {
    return res.status(400).send("Password length should be greater than 8 or less than or equal to 16");
  }
  if (!dateofbirth) {
    return res.status(400).send("Date of Birth is required");
  }
  const signup = new Signup({
    username,  email,  password,    dateofbirth,
  });
  res.status(200).send(signup);
});