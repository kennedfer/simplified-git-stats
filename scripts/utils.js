export const getDaysDifference = (createdAt) => {
  const createdDateMs = new Date(createdAt).getTime();
  const currentDateMs = Date.now();
  const msInDay = 1000 * 3600 * 24;

  const diffInMs = currentDateMs - createdDateMs;
  return Math.floor(diffInMs / msInDay);
};

export const HALF_HOUR = 1800;

export const renderError = () => `
<svg viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
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

  <text x="4" y="6" class="text">Não foi possível encontrar seu perfil</text>
</svg>`;
