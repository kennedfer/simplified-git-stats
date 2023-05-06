const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  res.send(`
  <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
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

    <rect class="container" x="0" width="100%" height="100%" rx="2px" ry="2px" stroke-linejoin="round" />
    
    <text x="3" y="6" class="small">Github:
   
      <tspan x="3" dy="3.5">Numero de Repositorios: 10</tspan>
      <tspan x="3" dy="3.5">Numero de Estrelas: 10</tspan>
    </text>
  </svg>
  `);
  console.log("entrou");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
