const express = require("express");
const cors = require("cors");
const authRoutes = require("./auth");

const app = express();

// Necesario para leer JSON
app.use(express.json());

// Permitir requests desde el frontend
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Rutas
app.use("/api", authRoutes);

// Iniciar servidor
app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});
