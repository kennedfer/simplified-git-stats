import express from "express";
import infoCard from "./api/info.js";

const app = express();

app.get("/", infoCard);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running...`);
});
