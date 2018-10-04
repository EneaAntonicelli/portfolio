const express = require("express");
const app = express();
const router = express.Router();
const path = require("path"); 


app.use(express.static("public"));
app.use(express.static("views"));

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

router.get("/resume", (req,res) => {
    res.json("Resume page route");
});

router.get("*", (req,res) => {
    res.json("404 error page route");
});

app.use("/", router);


app.listen(8080, () => {
    console.log("App is listening on port ", 8080);
});