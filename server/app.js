require("dotenv").config();
const express = require("express");
const dbCheck = require("../server/db/dbConnectionCheck");
const PORT = process.env.PORT || 7000;

const app = express();

dbCheck();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
