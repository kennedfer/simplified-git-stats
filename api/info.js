import { renderCard } from "../scripts/card/card.js";
import { LANGUAGES, renderError } from "../scripts/utils.js";
import { fetchUserInfo } from "./fetch-infos.js";

export default async (req, reply) => {
  const { user, lang } = req.query;
  reply.setHeader("Content-Type", "image/svg+xml");

  try {
    const language = lang ? LANGUAGES[lang] : LANGUAGES.PT;
    const userInfo = await fetchUserInfo(user, language);

    reply.setHeader("Cache-Control", `no-cache`);
    reply.send(renderCard(userInfo));
  } catch (e) {
    console.log(e);
    reply.send(renderError());
  }
};
