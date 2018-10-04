const express = require("express");
const app = express();
const path = require("path"); 
const bodyParser = require("body-parser");

const router = require("./routes/routing");

app.use(express.static("public"));
app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/", router);

app.listen(8080, () => {
    console.log("App is listening on port ", 8080);
});