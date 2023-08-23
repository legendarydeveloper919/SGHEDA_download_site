const express = require("express");
const router = express.Router();

router.get("/download", function (req, res) {
  var file = "./public/SGHEDA_v1.0.exe";
  res.download(file); // Set disposition and send it.
});

module.exports = router;
