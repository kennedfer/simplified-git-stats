const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  res.send(`
  <svg width="100" height="120" viewBox="0 0 100 120" fill="#858585" xmlns="http://www.w3.org/2000/svg">
  <style>
  .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2F80ED }
  .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 }
  .gray { fill: #858585 }
  </style>
  </svg>
  `);
  console.log("entrou");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
