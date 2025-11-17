"use client";

import { useState } from "react";
import Link from "next/link";

const templates = [
  { id: "modern", name: "Moderno", description: "Limpio y minimalista" },
  { id: "romantic", name: "Romántico", description: "Elegante y tradicional" },
  { id: "rustic", name: "Rústico", description: "Bohemio y natural" },
  { id: "glamour", name: "Glamour", description: "Art Deco y lujoso" },
];

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const chooseTemplate = async (templateId: string) => {
    await fetch("http://localhost:4000/api/template", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ templateId }),
    });

    alert("Plantilla seleccionada!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">
          Elige tu plantilla de invitación
        </h2>
        <p className="text-gray-600 mb-8">
          Haz clic en cualquier plantilla para verla en detalle
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((t) => (
            <div
              key={t.id}
              className="group cursor-pointer"
            >
              <Link href={`/dashboard/templates/${t.id}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 h-full flex flex-col">
                  {/* Preview placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-100 transition-all">
                    <div className="text-center">
                      <div className="text-4xl mb-2">👁️</div>
                      <p className="text-sm text-gray-600">Ver plantilla</p>
                    </div>
                  </div>

                  {/* Template info */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">
                        {t.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {t.description}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-gray-200">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          chooseTemplate(t.id);
                        }}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded text-sm font-semibold transition"
                      >
                        Seleccionar
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
