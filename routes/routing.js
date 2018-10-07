const express = require("express");
const router = express.Router();
const path = require("path"); 
const nodemailer = require('nodemailer');



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

// THIS ROUTE BELOW WORKS BUT THE ACCESS TOKEN MUST BE REFRESHED EVERY HOUR.

// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         type: 'OAuth2',
//         user: "eneasecondary@gmail.com",
//         ClientId: "586542372060-qnnhu5t9a7nbpnf806ctvoo19g1fce3i.apps.googleusercontent.com",
//         ClientSecret: "HAkkWTlWv49ZUSXw5j5WHyFL",
//         refreshToken: "1/OpAg_t7f4wlZ0ut67RUVIiubQgLJWWACd-RB-aESCz0",
//         accessToken: "ya29.GlsvBmKqZQkzZthr5uRRELtRqcI25UKfOK5uaP-ry_FKSPzv_4CbXbvCLtW8zLtwgWsBhKIn53u5mE3ocEDIhWCxSZK4vL7RIHO8UKr8s6zwAeA9pOXaO8pXroFV",
//         expires: 1484314697598
//     }
// });


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.username,
        pass: process.env.password
    }
});

router.post("/user", (req, res) => {

    var mailOptions = {
        from: `${req.body.email}`,
        to: "eneasecondary@gmail.com",
        subject: `${req.body.email}`,
        text: `${req.body.message}`,
        replyTo: `${req.body.email}`
    }
    transporter.sendMail(mailOptions, function (err, res) {
        console.log(mailOptions);
        if (err) {
            console.log(err);
        } else {
            console.log("Your e-mail has been sent...");
        }
    });
    res.redirect("/");
});

module.exports = router;