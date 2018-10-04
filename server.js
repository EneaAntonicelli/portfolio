const express = require("express");
const app = express();
const router = express.Router();



router.get("/", (req,res) => {
    res.json("Home page route");
})

router.get("/resume", (req,res) => {
    res.json("Resume page route");
})

router.get("*", (req,res) => {
    res.json("404 error page route");
})

app.use("/", router);


app.listen(8080, () => {
    console.log("App is listening on port ", 8080);
})