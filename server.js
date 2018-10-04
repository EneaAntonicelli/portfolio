const express = require("express");
const app = express();
const router = express.Router();
const path = require("path"); 
const bodyParser = require("body-parser");


app.use(express.static("public"));
app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// GET ROUTES:

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

router.get("/resume", (req,res) => {
    res.json("Resume page route");
});

router.get("*", (req,res) => {
    res.json("404 error page route");
});

// POST ROUTES:

router.post("/user", (req,res) => {

    console.log ("req is " + req.body);

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let country = req.body.country;
    let subject = req.body.subject;

    let newUser = {
        firstname:firstname,
        lastname:lastname,
        country:country,
        subject:subject
    }

    res.json({msg: "Your data ", data: JSON.stringify(newUser) + "has been sent."})

})


app.use("/", router);


app.listen(8080, () => {
    console.log("App is listening on port ", 8080);
});