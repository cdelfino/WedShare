"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMsg(res.ok ? "Registro exitoso" : data.error || "Error");
  };

  return (
    <div className="p-10 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Crear cuenta</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button className="bg-green-600 text-white p-2 rounded">
          Registrarse
        </button>
      </form>

      <p className="mt-3">{msg}</p>
    </div>
  );
}
