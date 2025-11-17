interface TemplateProps {
  bride: string;
  groom: string;
  date: string;
  message: string;
}

export default function ModernTemplate({ bride, groom, date, message }: TemplateProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white border-l-4 border-black">
        <div className="p-12 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="h-1 w-16 bg-black"></div>
            <h1 className="text-5xl font-bold tracking-tight text-black">
              {bride}
            </h1>
            <p className="text-2xl font-light text-gray-600">&</p>
            <h1 className="text-5xl font-bold tracking-tight text-black">
              {groom}
            </h1>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-300"></div>

          {/* Date */}
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Fecha de la Boda
            </p>
            <p className="text-2xl font-light text-black">{date}</p>
          </div>

          {/* Message */}
          <div className="pt-4">
            <p className="text-base leading-relaxed text-gray-700">{message}</p>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-gray-300">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Nos encantaría tu presencia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
