import axios from "axios";
import { getDaysDifference } from "../scripts/utils.js";

export const fetchUserInfo = async () => {
  const info = (await axios.get("https://api.github.com/users/kennedfer")).data;

  //! MUDAR PARA fetchUser

  const reposStarreds = (
    await axios.get("https://api.github.com/users/kennedfer/starred")
  ).data;

  const pulls = (
    await axios.get(
      "https://api.github.com/search/issues?q=author:kennedfer%20type:pr%20is:merged"
    )
  ).data;

  const daysFromCreation = getDaysDifference(info["created_at"].split("T")[0]);

  return {
    repos: info.public_repos,
    stars: reposStarreds.length,
    prs: pulls["total_count"],
    daysFromCreation,
    followers: info.followers,
  };
};
