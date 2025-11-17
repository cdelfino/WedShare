interface TemplateProps {
  bride: string;
  groom: string;
  date: string;
  message: string;
}

export default function RomanticTemplate({ bride, groom, date, message }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Decorative top */}
        <div className="text-center mb-8">
          <div className="text-4xl text-rose-300">✦ ✦ ✦</div>
        </div>

        {/* Main card */}
        <div className="bg-white bg-opacity-80 backdrop-blur rounded-lg shadow-2xl p-12 space-y-8 border border-rose-100">
          {/* Ornamental header */}
          <div className="text-center space-y-4">
            <div className="text-5xl text-rose-400">❀</div>
            <h2 className="text-sm uppercase tracking-widest text-rose-600 font-light">
              Nos complace invitarles a la boda de
            </h2>
          </div>

          {/* Names */}
          <div className="text-center space-y-3">
            <p className="text-4xl font-serif text-gray-800 italic">{bride}</p>
            <p className="text-2xl text-rose-400 font-light">&</p>
            <p className="text-4xl font-serif text-gray-800 italic">{groom}</p>
          </div>

          {/* Divider */}
          <div className="flex justify-center items-center space-x-4">
            <div className="h-px w-8 bg-rose-300"></div>
            <div className="text-rose-300">✦</div>
            <div className="h-px w-8 bg-rose-300"></div>
          </div>

          {/* Date */}
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-light">
              El día
            </p>
            <p className="text-2xl font-serif text-gray-700">{date}</p>
          </div>

          {/* Message */}
          <div className="text-center pt-4">
            <p className="text-base leading-relaxed text-gray-700 font-light italic">
              {message}
            </p>
          </div>

          {/* Decorative bottom */}
          <div className="text-center pt-6">
            <div className="text-2xl text-rose-300">❀</div>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-rose-100">
            <p className="text-xs uppercase tracking-widest text-rose-600 font-light">
              Con amor y alegría
            </p>
          </div>
        </div>

        {/* Decorative bottom */}
        <div className="text-center mt-8">
          <div className="text-4xl text-rose-300">✦ ✦ ✦</div>
        </div>
      </div>
    </div>
  );
}
