import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "athletes",
  })
  .promise();

export async function getPlayers() {
  const [rows] = await pool.query("SELECT * FROM players;");
  return rows;
}

export async function getPlayer(id) {
  const [rows] = await pool.query(
    `
    select *
    from players
    where id = ?
    `,
    [id]
  );
  return rows;
}

export async function addPlayer(name, description, image) {
  const [result] = await pool.query(
    `INSERT INTO players (name, description, image)
    VALUES (?, ?, ?)
    `,
    [name, description, image]
  );
  const id = result.insertId;
  return getPlayer(id);
}
