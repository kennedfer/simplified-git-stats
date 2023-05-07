import express from "express";
import { fetchUserInfo } from "./api/fetch-infos.js";
import { render } from "./scripts/card/card.js";
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const data = await fetchUserInfo();
  console.log(data);

  res.setHeader("Content-Type", "image/svg+xml");

  res.send(render(data));

  console.log("entrou");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
