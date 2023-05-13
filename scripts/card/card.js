export const render = (info) => {
  const linesCount = 7;
  const verticalOffset = 3;
  const lineHeight = 4;
  const height = linesCount * lineHeight + verticalOffset * 2;

  return `
  <svg viewBox="0 0 200 ${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .container{
        fill: #161b22;
        padding: 16px;
        border-radius: 10px;
      }

      .text {
        font: 2.8px monospace;
        font-family: Consolas;
        fill: #fff;
      }
    </style>

    <rect class="container" x="0" width="100%" height="100%" rx="2px" ry="2px" stroke-linejoin="round" />
    
    <text x="4" y="6" class="text">Github Stats:
  
      <tspan x="4" dy="4">Numero de Repositorios: ${info.repos}</tspan>
      <tspan x="4" dy="4">Numero de Estrelas: ${info.stars}</tspan>
      <tspan x="4" dy="4">Numero de PRs: ${info.prs}</tspan>
      <tspan x="4" dy="4">Seguidores: ${info.followers}</tspan>
      
      <tspan x="4" dy="8">Criado à ${info.daysFromCreation} dias</tspan>
    </text>
  </svg>`;
};
