const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config(); 
//const authRouter = require('../server/routes/auth');

//require routes here
const recipeRoutes = require("./routes/recipeRoutes");
const usersRoutes = require("./routes/usersRoutes");

//using express()
const app = express();
const port = process.env.PORT || 5000;

//use json format and logger middleware
app.use(bodyParser.json());

//app.use( all api routes) here
app.use("/recipes", recipeRoutes);
app.use("/users", usersRoutes);

//general
app.use(express.static(path.join(__dirname, "../build")));

//general
app.get("*", function(req, res) {
  console.log("you got it bro XD");
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port} :D`);
});