const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config()
const router = require("./routes/routing");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/", router);

app.listen(PORT, () => {
    console.log("App is listening on port ", PORT);
});






