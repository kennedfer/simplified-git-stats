import { renderCard } from "../scripts/card/card.js";
import { renderError } from "../scripts/utils.js";
import { fetchUserInfo } from "./fetch-infos.js";

export default async (req, reply) => {
  const { user } = req.query;
  reply.setHeader("Content-Type", "image/svg+xml");

  try {
    const userInfo = await fetchUserInfo(user);
    reply.setHeader("Cache-Control", `max-age=${1800}, s-maxage=${1800},`);
    reply.send(renderCard(userInfo));
  } catch (e) {
    console.log(e);
    reply.send(renderError());
  }
};
