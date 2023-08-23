const express = require("express");
const cors = require("cors");
const downloadRouter = require("./router/download");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.static("public")); // this will enable cors for all the routes
app.use("/api", downloadRouter); // this line will use your router

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
