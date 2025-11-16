const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");


router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.json({ message: "Usuario registrado", user });
  } catch (error) {
    if (error.code === "P2002") {
      const emailExists = await prisma.user.findUnique({ where: { email } });
      if (emailExists) {
        return res.status(400).json({ error: "El email ya está en uso." });
      }

      const usernameExists = await prisma.user.findUnique({
        where: { username },
      });
      if (usernameExists) {
        return res
          .status(400)
          .json({ error: "El nombre de usuario ya está en uso." });
      }

      return res.status(400).json({ error: "Dato duplicado." });
    }

    console.log("Error no controlado:", error);
    res.status(400).json({ error: "Error al registrar usuario." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json({ error: "Credenciales incorrectas." });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(400).json({ error: "Credenciales incorrectas." });
  }

  res.json({ message: "Login exitoso" });
});

module.exports = router;
