const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  res.send(`
  <svg class="container" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
    <style>
      .container{
        background-color: #161b22;
        padding: 16px;
        border-radius: 10px;
      }

      .small {
        font: 85% sans-serif;
        fill: #fff;
      }
    </style>

    <text x="0" y="0" class="small">Several lines:
      <tspan x="0" dy="15">Numero de Repositorios: 10</tspan>
      <tspan x="0" dy="15">Numero de Estrelas: 10</tspan>
    </text>
  </svg>
  `);
  console.log("entrou");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
