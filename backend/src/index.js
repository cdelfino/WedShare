require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoutes = require("./auth");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});
