const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  res.send(`
  <svg viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
    <style>
      .container{
        fill: #161b22;
        padding: 16px;
        border-radius: 10px;
      }

      .small {
        font: 3px sans-serif;
        fill: #fff;
      }
    </style>

    <rect class="container" x="0" width="100%" height="100%" rx="5px" ry="5px" stroke-linejoin="round" />
    
    <text x="10" y="12" class="small">Several lines:
   
      <tspan x="10" dy="3">Numero de Repositorios: 10</tspan>
      <tspan x="10" dy="3">Numero de Estrelas: 10</tspan>
    </text>
  </svg>
  `);
  console.log("entrou");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
