const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("This application is running on express and node.js");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
