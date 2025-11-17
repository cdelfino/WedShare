"use client";

import { useState } from "react";

export default function EditorPage() {
  const [data, setData] = useState({
    bride: "",
    groom: "",
    date: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const save = async () => {
    await fetch("http://localhost:4000/api/invitation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    alert("Texto guardado!");
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Personalizar invitación</h2>

      <input
        name="bride"
        className="border p-2 w-full rounded mb-3"
        placeholder="Nombre de la novia"
        onChange={handleChange}
      />

      <input
        name="groom"
        className="border p-2 w-full rounded mb-3"
        placeholder="Nombre del novio"
        onChange={handleChange}
      />

      <input
        name="date"
        type="date"
        className="border p-2 w-full rounded mb-3"
        onChange={handleChange}
      />

      <textarea
        name="message"
        className="border p-2 w-full rounded mb-3"
        placeholder="Mensaje de la invitación"
        onChange={handleChange}
      />

      <button
        onClick={save}
        className="bg-green-600 text-white p-2 rounded w-full"
      >
        Guardar
      </button>
    </div>
  );
}
