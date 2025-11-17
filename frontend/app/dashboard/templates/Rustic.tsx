interface TemplateProps {
  bride: string;
  groom: string;
  date: string;
  message: string;
}

export default function RusticTemplate({ bride, groom, date, message }: TemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Main card with rustic border */}
        <div className="bg-amber-50 shadow-2xl p-12 space-y-8 border-4 border-amber-800 relative">
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 text-3xl text-amber-700">🌿</div>
          <div className="absolute top-4 right-4 text-3xl text-amber-700">🌿</div>
          <div className="absolute bottom-4 left-4 text-3xl text-amber-700">🌿</div>
          <div className="absolute bottom-4 right-4 text-3xl text-amber-700">🌿</div>

          {/* Header */}
          <div className="text-center space-y-4">
            <div className="text-5xl">🌾</div>
            <h2 className="text-sm uppercase tracking-widest text-amber-900 font-light">
              Celebramos el amor
            </h2>
          </div>

          {/* Names */}
          <div className="text-center space-y-3">
            <p className="text-5xl font-serif text-amber-900">{bride}</p>
            <div className="flex justify-center items-center space-x-4">
              <div className="h-px w-8 bg-amber-700"></div>
              <p className="text-2xl text-amber-700 font-light">&</p>
              <div className="h-px w-8 bg-amber-700"></div>
            </div>
            <p className="text-5xl font-serif text-amber-900">{groom}</p>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center">
            <div className="text-2xl text-amber-700">🍂 🌾 🍂</div>
          </div>

          {/* Date */}
          <div className="text-center space-y-2 bg-white bg-opacity-50 py-6 px-4 border-l-4 border-r-4 border-amber-700">
            <p className="text-xs uppercase tracking-widest text-amber-800 font-light">
              Nos gustaría celebrar con ustedes
            </p>
            <p className="text-3xl font-serif text-amber-900">{date}</p>
          </div>

          {/* Message */}
          <div className="text-center pt-4">
            <p className="text-base leading-relaxed text-amber-900 font-light">
              {message}
            </p>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center">
            <div className="text-2xl text-amber-700">🌿</div>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t-2 border-amber-700">
            <p className="text-xs uppercase tracking-widest text-amber-800 font-light">
              En la naturaleza y el amor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
