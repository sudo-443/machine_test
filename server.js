require("dotenv").config();
const mongoConnect = require("./config");
const route = require("./products/router");
const express = require("express");
const app = express();

app.use(express.json());
mongoConnect(process.env.mongo_uri);

app.use("/api", route);

app.listen(process.env.port, () =>
  console.log("server is listening on port http://localhost:", process.env.port)
);
