require("dotenv");
const express = require("express");
const router = express.Router();
const path = require("path");
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
router.get("/thankYou", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/thankYou.html"));
});

router.get("/resume", (req, res) => {
  res.json("Resume page route");
});

router.get("*", (req, res) => {
  res.json("404 error page route");
});

var transporter = nodemailer.createTransport({
  service: "Gmail",
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
  };
  transporter.sendMail(mailOptions, function(err, res) {
    console.log(mailOptions);
    if (err) {
      console.log(err);
    } else {
      console.log("Your e-mail has been sent...");
    }
  });
  res.redirect("/thankYou");
});

module.exports = router;
