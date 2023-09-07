const express = require("express");
const router = express.Router();
const coinbase = require("coinbase-commerce-node");

const Client = coinbase.Client;
Client.init(process.env.API_KEY);
const Charge = coinbase.resources.Charge;

router.get("/download", function (req, res) {
  var file = "./public/SGHEDA_v1.0.exe";
  res.download(file); // Set disposition and send it.
});

router.get("/charge", function (req, res) {
  let chargeData = {
    name: req.body.name,
    description: req.body.decription,
    local_price: {
      amount: req.body.amount,
      currency: "USD",
    },
    pricing_type: "fixed_price",
  };
  Charge.create(chargeData, (err, response) => {
    if (err) {
      res.status(400).send({ message: err.message });
    } else {
      res.status(200).send(response);
    }
  });
});

module.exports = router;
