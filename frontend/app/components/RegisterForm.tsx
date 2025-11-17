"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface RegisterFormProps {
  showLinks?: boolean;
}

export default function RegisterForm({ showLinks = true }: RegisterFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msgType, setMsgType] = useState<"success" | "error" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMsg("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMsgType("success");
        setMsg("¡Registro exitoso! Redirigiendo...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setMsgType("error");
        setMsg(data.error || "Error en el registro");
      }
    } catch (error) {
      setMsgType("error");
      setMsg("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Logo */}
      <h2 className="text-3xl font-bold text-purple-700 mb-8">WedShare</h2>

      {/* Mensaje de Invitación */}
      <p className="text-xl text-gray-800 font-semibold mb-6">
        Invitaciones más inteligentes y personalizadas, listas para ti.
      </p>
      <p className="text-gray-600 mb-6">
        ¿Ya tienes una cuenta?{" "}
        <Link
          href="/login"
          className="text-purple-700 hover:underline font-medium"
        >
          Iniciar sesión.
        </Link>
      </p>

      {/* Mensaje de estado */}
      {msg && (
        <div
          className={`mb-6 p-3 rounded-md text-sm font-medium ${
            msgType === "success"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {msg}
        </div>
      )}

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Username */}
        <div>
          <label htmlFor="username" className="sr-only">
            Nombre de usuario
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nombre de usuario"
              value={form.username}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="sr-only">
            Correo electrónico
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="sr-only">
            Contraseña
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 8H6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2zM5 9a1 1 000-1-1h1a1 1 000-1 1v1a1 1 0001 1H5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Registrando..." : "Crear cuenta"}
        </button>
      </form>

      {/* Términos y políticas */}
      <p className="mt-6 text-xs text-gray-500 leading-relaxed">
        Al crear una cuenta aceptas la política de privacidad y los
        <a href="#" className="text-purple-700 hover:underline">
          {" "}
          términos de servicio{" "}
        </a>
        de WedShare.
      </p>

      {/* Enlaces adicionales */}
      {showLinks && (
        <div className="mt-6 text-sm text-gray-600 space-y-2">
          <a href="#" className="block hover:underline">
            ¿Asistiendo como invitado? Buscar una pareja
          </a>
        </div>
      )}
    </>
  );
}
