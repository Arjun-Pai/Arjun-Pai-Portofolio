import { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);
    let mx = 0, my = 0, sy = 0;
    type Star = { x: number; y: number; z: number; r: number; tw: number };
    const stars: Star[] = Array.from({ length: 260 }, () => ({
      x: Math.random() * w, y: Math.random() * h, z: Math.random() * 0.8 + 0.2,
      r: Math.random() * 1.4 + 0.2, tw: Math.random() * Math.PI * 2,
    }));
    const onResize = () => { w = c.width = window.innerWidth; h = c.height = window.innerHeight; };
    const onMove = (e: MouseEvent) => { mx = (e.clientX / w - 0.5) * 30; my = (e.clientY / h - 0.5) * 30; };
    const onScroll = () => { sy = window.scrollY; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    let raf = 0;
    let t = 0;
    const draw = () => {
      t += 0.02;
      ctx.fillStyle = "#080A12";
      ctx.fillRect(0, 0, w, h);
      for (const s of stars) {
        const px = s.x + mx * s.z;
        const py = ((s.y + my * s.z - sy * s.z * 0.25) % (h + 100) + (h + 100)) % (h + 100);
        const tw = 0.55 + 0.45 * Math.sin(t + s.tw);
        ctx.fillStyle = `rgba(${200 + s.z * 55}, ${230 + s.z * 25}, 255, ${s.z * tw})`;
        ctx.beginPath();
        ctx.arc(px, py, s.r * s.z, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />;
}

export function DataRain() {
  const cols = 16;
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40">
      {Array.from({ length: cols }).map((_, i) => (
        <div
          key={i}
          className="data-rain absolute top-0 w-px"
          style={{
            left: `${(i / cols) * 100 + Math.random() * 5}%`,
            height: `${60 + Math.random() * 120}px`,
            background: "linear-gradient(180deg, transparent, #00F5FF, transparent)",
            animationDuration: `${6 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 6}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}
