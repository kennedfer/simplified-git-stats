export const render = (counts) => {
  const linesCount = 6;
  const height = linesCount * 4 + 6;

  return `
  <svg viewBox="0 0 200 ${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .container{
        fill: #161b22;
        padding: 16px;
        border-radius: 10px;
      }

      .small {
        font: 2.8px monospace;
        font-family: Consolas;
        fill: #fff;
      }
    </style>

    <rect class="container" x="0" width="100%" height="100%" rx="2px" ry="2px" stroke-linejoin="round" />
    
    <text x="3.5" y="6" class="small">Github Stats:
  
      <tspan x="3.5" dy="4">Numero de Repositorios: ${counts.repos}</tspan>
      <tspan x="3.5" dy="4">Numero de Estrelas: ${counts.stars}</tspan>
      ${
        true ? `<tspan x="3.5" dy="4">Numero de PRs: ${counts.prs}</tspan>` : ""
      }
      ${
        true
          ? `<tspan x="3.5" dy="4">Criado à ${counts.daysFromCreation} dias</tspan>`
          : ""
      }
      ${
        true
          ? `<tspan x="3.5" dy="4">Seguidores: ${counts.followers}</tspan>`
          : ""
      }
     
    </text>
  </svg>`;
};
