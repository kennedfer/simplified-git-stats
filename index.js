const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  res.send(`
  <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <style>
      .small {
        font: italic 13px sans-serif;
      }
      .heavy {
        font: bold 30px sans-serif;
      }
    </style>

    <text x="10" y="20" style="fill:red;">Several lines:
      <tspan x="10" y="45">First line.</tspan>
      <tspan x="10" y="70">Second line.</tspan>
    </text>
  </svg>
  `);
  console.log("entrou");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
