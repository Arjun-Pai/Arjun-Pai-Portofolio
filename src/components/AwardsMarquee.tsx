import { Trophy, Medal, Award, BadgeCheck, Star, ScrollText, Users } from "lucide-react";

const awards = [
  { icon: Trophy, name: "CircuitBreak 2025 Lead", year: "2025", desc: "Organized end-to-end student hackathon." },
  { icon: Medal, name: "Byte Battle Finalist", year: "2025", desc: "Top performer in competitive coding bracket." },
  { icon: Users, name: "Interact Club", year: "2025", desc: "Active member driving service and leadership initiatives." },
  { icon: Award, name: "Taekwondo Black Belt", year: "2023", desc: "Years of disciplined training and testing." },
  { icon: BadgeCheck, name: "Python Certified", year: "2024", desc: "Structured certification in Python programming." },
  { icon: BadgeCheck, name: "HTML Certified", year: "2024", desc: "Web fundamentals certification." },
  { icon: Star, name: "AI Foundations", year: "2025", desc: "Certified in core AI and ML concepts." },
  { icon: ScrollText, name: "Boy Scouts Ranger", year: "2024", desc: "Leadership and outdoor mastery rank." },
  { icon: Medal, name: "Piano Level 3A", year: "2023", desc: "Classical performance examination." },
];

function Card({ icon: Icon, name, year, desc }: typeof awards[number]) {
  return (
    <div className="group relative mx-3 inline-flex h-32 w-72 shrink-0 items-center gap-4 rounded-xl border border-cyan bg-gradient-to-br from-[#0c1126] to-[#080A12] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB700]" style={{boxShadow:"inset 0 0 30px rgba(0,245,255,0.06)"}}>
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-[#FFB700]/50 bg-[#FFB700]/5">
        <Icon className="text-[#FFB700]" size={26} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-glow">{year}</div>
        <div className="truncate font-display text-sm font-bold text-white">{name}</div>
        <div className="mt-1 line-clamp-2 text-[11px] text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {desc}
        </div>
      </div>
    </div>
  );
}

export function AwardsMarquee() {
  const loop = [...awards, ...awards];
  return (
    <section className="relative border-y border-white/5 bg-black/30 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// Recognition</p>
        <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">
          Awards & <span className="text-gold-glow">Certifications</span>
        </h2>
      </div>
      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080A12] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080A12] to-transparent" />
        <div className="flex w-max animate-[marquee_40s_linear_infinite]">
          {loop.map((a, i) => (
            <Card key={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}
