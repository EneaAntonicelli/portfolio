const express = require("express");
const router = express.Router();
const path = require("path"); 


// GET ROUTES:

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

router.get("/resume", (req,res) => {
    res.json("Resume page route");
});

router.get("*", (req,res) => {
    res.json("404 error page route");
});

// POST ROUTES:

router.post("/user", (req,res) => {

    console.log (req.body);

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

    res.json({msg: "Your data ", data: newUser})

})

module.exports = router;