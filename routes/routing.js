require("dotenv");
const express = require("express");
const router = express.Router();
const path = require("path"); 
const nodemailer = require('nodemailer');


// var smtpTransport = require('nodemailer-smtp-transport');
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
//         user: process.env.gmail_email,
//         ClientId: process.env.CLIENT_ID,
//         ClientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: process.env.ACCESS_TOKEN,
//         expires: 1484314697598
//     }
// });

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.gmail_email,
        pass: process.env.gmail_password
    }
});

router.post("/user", (req, res) => {

    var mailOptions = {
        from: `${req.body.email}`,
        to: process.env.gmail_email,
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