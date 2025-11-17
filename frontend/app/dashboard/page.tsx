"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login");
      return;
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl">Cargando...</p>
        <p className="text-sm text-gray-500">Verificando sesión...</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Panel de usuario</h1>

      <div className="grid grid-cols-1 gap-4">
        <a
          href="/dashboard/templates"
          className="p-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Elegir plantilla de invitación
        </a>

        <a
          href="/dashboard/editor"
          className="p-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Editar texto de mi invitación
        </a>

        <button
          onClick={() => {
            localStorage.removeItem("authToken");
            router.push("/login");
          }}
          className="p-4 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
