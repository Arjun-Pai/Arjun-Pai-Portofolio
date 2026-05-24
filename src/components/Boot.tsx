import { useEffect, useState } from "react";

export function Boot({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2600;
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duration);
      setProgress(t);
      if (t >= 1) {
        clearInterval(id);
        setTimeout(onDone, 500);
      }
    }, 30);
    return () => clearInterval(id);
  }, [onDone]);

  // 8 dots rotating like Windows boot spinner
  const dots = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        {/* PAIO Logo mark */}
        <div
          className="mb-10 grid h-24 w-24 place-items-center rounded-2xl border-2 border-cyan"
          style={{
            background: "radial-gradient(circle at center, rgba(0,245,255,0.25), transparent 70%)",
            boxShadow: "0 0 60px rgba(0,245,255,0.5)",
          }}
        >
          <span className="font-display text-5xl font-extrabold text-cyan-glow">P</span>
        </div>

        {/* Windows-style spinner: dots orbiting */}
        <div
          className="relative h-16 w-16"
          style={{ animation: "spinSlow 1.6s linear infinite", animationDuration: "1.6s" }}
        >
          <div className="absolute inset-0 animate-[spinSlow_1.6s_linear_infinite]">
            {dots.map((_, i) => {
              const angle = (i / dots.length) * Math.PI * 2;
              const r = 28;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <span
                  key={i}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    opacity: 0.15 + (i / dots.length) * 0.85,
                    boxShadow: "0 0 8px rgba(0,245,255,0.8)",
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-10 font-display text-base tracking-[0.25em] text-white/90 md:text-lg">
          PAIO INTERNATIONAL
        </div>
        <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">
          Initializing… {Math.round(progress * 100)}%
        </div>
      </div>
    </div>
  );
}
