import express from "express";
import { addPlayer, getPlayers } from "./database.js";

const app = express();

app.use(express.json());

app.get("/players", async (req, res) => {
  const players = await getPlayers();
  res.send(players);
});

app.post("/players", async (req, res) => {
  const { name, description, image } = req.body;
  const note = await addPlayer(name, description, image);
  res.status(201).send(note);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
