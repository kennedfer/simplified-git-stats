import axios from "axios";

export const fetchUserInfo = async () => {
  const info = await axios.get("https://api.github.com/users/kennedfer").data;

  const reposStarreds = await axios.get(
    "https://api.github.com/users/kennedfer/starred"
  ).data;

  const pulls = await axios.get(
    "https://api.github.com/search/issues?q=author:kennedfer%20type:pr%20is:merged"
  ).data;

  return {
    stars: reposStarreds.length,
    repos: info.public_repos,
    prs: pulls["total_count"],
  };
};
