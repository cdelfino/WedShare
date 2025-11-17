import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Columna Izquierda: Contenido Promocional */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
        <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-8 max-w-lg">
          Únete a más de un millón de parejas felices que organizaron su boda
          con <span className="text-purple-700">WedShare</span>.
        </h1>
        <div className="relative w-full max-w-md h-64 bg-gradient-to-br from-purple-200 to-purple-100 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">💒</div>
            <p className="text-purple-700 font-semibold">
              Gestiona tu boda fácilmente
            </p>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Formulario de Login */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white shadow-lg">
        <div className="w-full max-w-md p-6 sm:p-8 rounded-lg text-center">
          <LoginForm showLinks={true} />
        </div>
      </div>
    </div>
  );
}
