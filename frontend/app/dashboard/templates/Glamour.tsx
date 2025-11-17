interface TemplateProps {
  bride: string;
  groom: string;
  date: string;
  message: string;
}

export default function GlamourTemplate({ bride, groom, date, message }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Main card */}
        <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-yellow-500 p-12 space-y-8 shadow-2xl relative overflow-hidden">
          {/* Decorative gold accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-yellow-500 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-yellow-500 opacity-50"></div>

          {/* Header */}
          <div className="text-center space-y-6 relative z-10">
            <div className="text-6xl font-black uppercase tracking-widest text-yellow-500">
              ✦
            </div>
            <h2 className="text-sm uppercase tracking-widest text-yellow-400 font-light">
              Cordialmente invitados a celebrar
            </h2>
          </div>

          {/* Names */}
          <div className="text-center space-y-4 relative z-10">
            <p className="text-6xl font-black uppercase text-white tracking-wide">
              {bride}
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-transparent"></div>
              <p className="text-3xl text-yellow-500 font-light">&</p>
              <div className="h-1 w-12 bg-gradient-to-l from-yellow-500 to-transparent"></div>
            </div>
            <p className="text-6xl font-black uppercase text-white tracking-wide">
              {groom}
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center relative z-10">
            <div className="text-3xl text-yellow-500">◆ ◆ ◆</div>
          </div>

          {/* Date */}
          <div className="text-center space-y-3 relative z-10 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-opacity-10 py-8 px-6 border-l-2 border-r-2 border-yellow-500">
            <p className="text-xs uppercase tracking-widest text-yellow-400 font-light">
              La noche del
            </p>
            <p className="text-4xl font-black text-yellow-300 uppercase">{date}</p>
          </div>

          {/* Message */}
          <div className="text-center pt-4 relative z-10">
            <p className="text-base leading-relaxed text-gray-300 font-light">
              {message}
            </p>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center relative z-10">
            <div className="text-2xl text-yellow-500">✦</div>
          </div>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-yellow-500 border-opacity-30 relative z-10">
            <p className="text-xs uppercase tracking-widest text-yellow-400 font-light">
              Una noche de elegancia y celebración
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
