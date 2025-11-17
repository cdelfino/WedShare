const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

if (process.env.NODE_ENV === "production" && !process.env.JWT_SECRET) {
  console.error("ERROR: JWT_SECRET no está configurado en .env");
  process.exit(1);
}

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Acceso denegado. No hay token." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { id: decoded.userId, username: decoded.username };
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido o expirado." });
  }
};

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

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login exitoso",
    token: token,
    user: { id: user.id, username: user.username, email: user.email },
  });
});

router.post("/template", protect, async (req, res) => {
  const { templateId } = req.body;
  const userId = req.user.id;

  await prisma.invitation.upsert({
    where: { userId },
    update: { template: templateId },
    create: { userId, template: templateId },
  });

  res.json({ message: "Plantilla guardada" });
});

router.post("/invitation", protect, async (req, res) => {
  const { bride, groom, date, message } = req.body;
  const userId = req.user.id;

  await prisma.invitation.update({
    where: { userId },
    data: { bride, groom, date, message },
  });

  res.json({ message: "Datos actualizados" });
});

module.exports = router;
