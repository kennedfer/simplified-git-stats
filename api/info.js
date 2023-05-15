import { render } from "../scripts/card/card.js";
import { fetchUserInfo } from "./fetch-infos.js";

export default async (req, res) => {
  const { user } = req.query;

  const userInfo = await fetchUserInfo(user);

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader(
    "Cache-Control",
    `max-age=${1800}, s-maxage=${1800}, stale-while-revalidate=${1800}`
  );
  res.send(render(userInfo));
};
