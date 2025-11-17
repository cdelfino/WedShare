import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Columna Izquierda: Contenido Promocional */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
        <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-8 max-w-lg">
          Crea tu cuenta y comienza a organizar tu boda con{" "}
          <span className="text-purple-700">WedShare</span>.
        </h1>
        <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-purple-200 to-purple-100 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">💍</div>
            <p className="text-purple-700 font-semibold">
              Invitaciones digitales inteligentes
            </p>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Formulario de Registro */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white shadow-lg">
        <div className="w-full max-w-md p-6 sm:p-8 rounded-lg text-center">
          <RegisterForm showLinks={false} />
        </div>
      </div>
    </div>
  );
}
