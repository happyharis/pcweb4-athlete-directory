import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "athletes",
  })
  .promise();

async function getPlayers() {
  const [rows] = await pool.query("SELECT * FROM players;");
  console.log(rows);
}
