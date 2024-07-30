const express = require("express");
const app = express();
const port = 3000;

app.all("/", (req, res) => {
  res.send(`Hello World with ${req.method}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
