require("dotenv").config();
// importing mongoose file form config folder
require("./config/mongoose").connect();
// exporting all the function and libraries of express
const express = require("express");

const config = require("./config/config");

// app having all the function of express and firing up our framework
const app = express();

// for data passed inside the url
app.use(
  express.urlencoded({
    extended: true,
  })
);
// static folder
app.use(express.static("assets"));

// importing layouts
const expressLayouts = require("express-ejs-layouts");

// using layouts
app.use(expressLayouts);

// extracting stylesheets and scripts for individual pages
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// setting view engine as ejs and defining its path
app.set("view engine", "ejs");
app.set("views", "./views");

// setting up routes
app.use("/", require("./routes"));

// starting server
app.listen(config.PORT, function (err) {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.table([
    {
      PORT: Number(config.PORT),
      ENV: config.config.toUpperCase(),
    },
  ]);
});
