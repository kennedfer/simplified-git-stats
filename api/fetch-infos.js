import axios from "axios";
import {
  calculeLanguagesPercents,
  getDaysDifference,
} from "../scripts/utils.js";

export const fetchUserInfo = async (user, language) => {
  const info = (await axios.get(`https://api.github.com/users/${user}`)).data;

  const reposStarreds = (
    await axios.get(`https://api.github.com/users/${user}/starred`)
  ).data;

  const allRepos = (
    await axios.get(`https://api.github.com/users/${user}/repos`)
  ).data;

  const languagesPercents = calculeLanguagesPercents(allRepos, language);

  const pulls = (
    await axios.get(
      `https://api.github.com/search/issues?q=author:${user}%20type:pr%20is:merged`
    )
  ).data;

  const daysFromCreation = getDaysDifference(info["created_at"].split("T")[0]);

  return {
    repos: info.public_repos,
    stars: reposStarreds.length,
    prs: pulls["total_count"],
    daysFromCreation,
    followers: info.followers,
    languagesPercents,
    language,
  };
};
