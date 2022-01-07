const express = require("express");
const path = require('path');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/cities", (req, res) => {
  res.header("Content-Type",'application/json');
  res.sendFile(path.join(__dirname, 'cities.json'));
});

app.listen(port, () => {
  console.log(`Ottonova app listening at http://localhost:${port}`);
});
