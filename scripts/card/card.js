import { renderUsedsLangs } from "../utils.js";

export const renderCard = (info) => {
  const linesCount =
    info.languagesPercents.length + Object.keys(info).length + 1;
  const verticalOffset = 3;
  const lineHeight = 4;

  const height = linesCount * lineHeight + verticalOffset * 2;

  return `
  <svg viewBox="0 0 200 ${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .container{
        fill: #161b22;
      }

      .text {
        font: 2.8px monospace;
        font-family: Consolas;
        fill: #fff;
      }

      .colored-text{
        fill: #a5d6ff;
      }
    </style>

    <rect class="container" x="0" width="100%" height="100%" rx="2px" ry="2px" stroke-linejoin="round" />
    
    <text x="4" y="6" class="text">Meu Github:
  
      <tspan x="4" dy="4">Número de Repositórios<tspan class="colored-text">: ${
        info.repos
      }</tspan></tspan>
      <tspan x="4" dy="4">Número de Estrelas<tspan class="colored-text">: ${
        info.stars
      }</tspan></tspan>
      <tspan x="4" dy="4">Número de PRs<tspan class="colored-text">: ${
        info.prs
      }</tspan></tspan>
      <tspan x="4" dy="4">Seguidores<tspan class="colored-text">: ${
        info.followers
      }</tspan></tspan>
      
      ${
        /*<tspan x="4" dy="8">Criado à ${info.daysFromCreation} dias</tspan>*/ ""
      }
    
      ${renderUsedsLangs(info.languagesPercents)}
    </text>
  </svg>`;
};
