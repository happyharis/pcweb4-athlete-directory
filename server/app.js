import express from "express";
import { getPlayers } from "./database.js";

const app = express();

app.get("/notes", async (req, res) => {
  const players = await getPlayers();
  res.send(players);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
