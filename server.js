const express = require("express");
const dotenv = require("dotenv");
const app = express();

const routes = require("./src/routes");

//setup node server to accept .env file
dotenv.config();

app.use(express.json());

app.use("/api/v1/", routes);

// setup app to listen on port specified on .env file or env variable
app.listen(process.env.PORT, () => {
  console.log(`API server listening on port ${process.env.PORT}...`);
});
