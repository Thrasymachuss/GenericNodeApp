const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>Generic Node App</h1>");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}...`);
});
