const Pool = require("pg").Pool;

const pool = new Pool({
  host: "20.107.198.243",
  port: 5432,
  database: "maestro_db",
  user: "postgres",
  password: "20020710",
});

module.exports = pool;
