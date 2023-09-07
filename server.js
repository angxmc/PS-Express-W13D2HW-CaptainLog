const express = require("express");

const app = express();
const port = 3000;

app.set()

app.get("/new", (req, res) => {
  res.render('New');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
