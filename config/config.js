const dotenv = require("dotenv");
const path = require("path");

const environment = "dev"; // read from system environment variable
// const environment = process.env.NodeEnv; // read from system environment variable

dotenv.config({
  path: path.join(__dirname, `./environment/.${environment}.env`),
});

module.exports = {
  config: process.env.config,
  PORT: process.env.PORT,
};
