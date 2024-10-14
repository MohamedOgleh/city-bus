const express = require("express");
const app = express();
require("dotenv").config();
// const studentRoute = require("./src/routes/studentRoute");
const busRoute = require("./src/routes/busStandRoute");

// Middleweres
app.use(express.json())

app.use("/bus", busRoute);

// app.get("/", (req, res) => {
//   return failed({ res: res, payload: { message: "Waa helay datada ", ok: 1 } });
// });

app.listen(process.env.PORT, () => {
  console.log("Database Host:", process.env.DATABASE_HOST);
  console.log("Database Username:", process.env.DATABASE_USERNAME);
  console.log("Database Password:", process.env.DATABASE_PASSWORD);
  console.log("Database Name:", process.env.DATABASE);
  console.log(`Listining ${process.env.PORT}`);
});
