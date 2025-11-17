"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ModernTemplate from "../Modern";
import RomanticTemplate from "../Romantic";
import RusticTemplate from "../Rustic";
import GlamourTemplate from "../Glamour";

const templateComponents: Record<string, React.ComponentType<any>> = {
  modern: ModernTemplate,
  romantic: RomanticTemplate,
  rustic: RusticTemplate,
  glamour: GlamourTemplate,
};

const templateInfo: Record<
  string,
  { name: string; description: string; color: string }
> = {
  modern: {
    name: "Moderno",
    description: "Diseño limpio y minimalista con líneas negras y alto contraste",
    color: "from-gray-900 to-gray-700",
  },
  romantic: {
    name: "Romántico",
    description: "Elegante y tradicional con colores suaves y ornamentos florales",
    color: "from-rose-600 to-rose-400",
  },
  rustic: {
    name: "Rústico",
    description: "Bohemio y natural con tonos tierra y elementos botánicos",
    color: "from-amber-700 to-amber-500",
  },
  glamour: {
    name: "Glamour",
    description: "Art Deco lujoso con bordes dorados y tipografía dramática",
    color: "from-yellow-600 to-yellow-400",
  },
};

export default function TemplateViewPage() {
  const params = useParams();
  const id = params?.id as string;
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    bride: "María García",
    groom: "Juan López",
    date: "15 de Junio, 2024",
    message: "Nos encantaría que fueras parte de nuestro día especial",
  });

  useEffect(() => {
    if (id) {
      setIsLoading(false);
    }
  }, [id]);

  const TemplateComponent = templateComponents[id];
  const info = templateInfo[id];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando plantilla...</p>
        </div>
      </div>
    );
  }

  if (!TemplateComponent || !info) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Plantilla no encontrada
          </h1>
          <p className="text-gray-600 mb-4">ID: {id}</p>
          <p className="text-gray-600 mb-6">Plantillas disponibles: modern, romantic, rustic, glamour</p>
          <Link
            href="/dashboard/templates"
            className="text-blue-500 hover:underline font-semibold"
          >
            ← Volver a plantillas
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${info.color} text-white p-6 shadow-lg`}>
        <div className="max-w-7xl mx-auto">
          <Link
            href="/dashboard/templates"
            className="text-white hover:text-gray-200 mb-4 inline-block"
          >
            ← Volver a plantillas
          </Link>
          <h1 className="text-4xl font-bold mb-2">{info.name}</h1>
          <p className="text-white text-opacity-90">{info.description}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <h2 className="font-semibold text-gray-800">Vista previa</h2>
              </div>
              <div className="bg-gray-100 p-4 min-h-96 flex items-center justify-center">
                <TemplateComponent {...formData} />
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="font-bold text-lg text-gray-800 mb-4">
                Personalizar
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Novia
                  </label>
                  <input
                    type="text"
                    name="bride"
                    value={formData.bride}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Novio
                  </label>
                  <input
                    type="text"
                    name="groom"
                    value={formData.groom}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition">
                  Guardar y usar esta plantilla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
