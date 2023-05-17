export const getDaysDifference = (createdAt) => {
  const createdDateMs = new Date(createdAt).getTime();
  const currentDateMs = Date.now();
  const msInDay = 1000 * 3600 * 24;

  const diffInMs = currentDateMs - createdDateMs;
  return Math.floor(diffInMs / msInDay);
};

export const HALF_HOUR = 1800;
let longerLangName = 0;

const UNFILLED_CHAR = "▯";
const FILLED_CHAR = "▮";

export const calculeLanguagesPercents = (allRepos) => {
  let languagesUseds = {};

  allRepos.forEach((repo) => {
    const repoLang = repo.language;
    languagesUseds[repoLang]
      ? languagesUseds[repoLang]++
      : (languagesUseds[repoLang] = 1);
  });

  languagesUseds["Outras"] = languagesUseds["null"];
  delete languagesUseds["null"];

  let langsPercents = [];

  Object.keys(languagesUseds).forEach((lang) => {
    if (lang.length > longerLangName) longerLangName = lang.length;

    langsPercents.push([
      lang,
      Math.floor((languagesUseds[lang] / allRepos.length) * 10000) / 100,
    ]);
  });

  return langsPercents;
};

const createPercentLine = (value) => {
  let isFraction = "";
  let sub = 0;

  if (value % 10 > 0) {
    isFraction = FILLED_CHAR;
    sub = 1;
  }

  const filledCount = Math.floor(value / 10) * 2;
  const unfilledCount = 20 - filledCount - sub;

  return `<tspan class="colored-text">${
    FILLED_CHAR.repeat(filledCount) +
    isFraction +
    "</tspan>" +
    UNFILLED_CHAR.repeat(unfilledCount)
  }`;
};

export const renderUsedsLangs = (langsPercents) => {
  let element = [];
  element.push('<tspan x="4" dy="8">Linguagens Mais Usadas:</tspan>');

  langsPercents.forEach((lang) => {
    element.push(
      `<tspan xml:space="preserve" x="4" dy="4">${
        lang[0] +
        ":".padEnd(longerLangName - lang[0].length + 2) +
        createPercentLine(lang[1]) +
        " " +
        lang[1].toFixed(2) +
        "%"
      }</tspan>`
    );
  });

  return element.join("");
};

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
