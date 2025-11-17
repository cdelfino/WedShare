import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50 text-gray-800">
        <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-8 max-w-lg">
          Únete a más de un millón de parejas felices que organizaron su boda
          con <span className="text-purple-700">WedShare</span>.
        </h1>
        <div className="relative w-full max-w-md h-64 bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
          <Image
            src="/placeholder-invitations.png"
            alt="Invitaciones de boda WedShare"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-white shadow-lg">
        <div className="w-full max-w-md p-6 sm:p-8 rounded-lg text-center">
          <RegisterForm showLinks={true} />
        </div>
      </div>
    </div>
  );
}
