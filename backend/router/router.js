const express = require("express");
const router = express.Router();
// const coinbase = require("coinbase-commerce-node");
const nodemailer = require("nodemailer");

// const Client = coinbase.Client;
// Client.init(process.env.API_KEY);
// const Charge = coinbase.resources.Charge;

router.get("/download", function (req, res) {
  var file = "./public/SGHEDA_v1.0.exe";
  res.download(file); // Set disposition and send it.
});

// router.get("/charge", function (req, res) {
//   let chargeData = {
//     name: req.body.name,
//     description: req.body.decription,
//     local_price: {
//       amount: req.body.amount,
//       currency: "USD",
//     },
//     pricing_type: "fixed_price",
//   };
//   Charge.create(chargeData, (err, response) => {
//     if (err) {
//       res.status(400).send({ message: err.message });
//     } else {
//       res.status(200).send(response);
//     }
//   });
// });

router.post("/send-email", (req, res) => {
  // Retrieve form data from the request body
  console.log(req.body);

  const { name, email, message } = req.body;
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    /* Set up your email service provider configuration here */
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: "your-email@example.com",
    subject: "New contact form submission",
    text: `
      Name: ${name}\n
      Email: ${email}\n
      Message: ${message}\n
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

module.exports = router;
