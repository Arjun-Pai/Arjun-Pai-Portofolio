import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Boot } from "@/components/Boot";
import { Cursor } from "@/components/Cursor";
import { Starfield, DataRain } from "@/components/Starfield";
import { Globe3D } from "@/components/Globe3D";
import { GlitchText } from "@/components/GlitchText";
import { TiltCard } from "@/components/TiltCard";
import { CountUp } from "@/components/CountUp";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BooksSection } from "@/components/BooksSection";
import { TechStack } from "@/components/TechStack";
import { PaioHero } from "@/components/PaioHero";
import { MilestoneWheel } from "@/components/MilestoneWheel";
import { AwardsMarquee } from "@/components/AwardsMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import arjunHeadshot from "@/assets/arjun-headshot.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun Pai — Founder & CEO of PAIO International" },
      { name: "description", content: "Portfolio of Arjun Pai: middle school tech prodigy, robotics engineer, software developer, author of the Life of Doom trilogy, and founder of PAIO International." },
      { property: "og:title", content: "Arjun Pai — Founder & CEO of PAIO International" },
      { property: "og:description", content: "Building the future. One product at a time." },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "Delivery Drone", desc: "Autonomous aerial delivery prototype.", tech: "Arduino · ESP32 · Python", img: null },
  { name: "Delivery Robot", desc: "Ground-based last-mile delivery bot.", tech: "Raspberry Pi · Python · ROS", img: null },
  { name: "Seed Car", desc: "Self-planting agricultural rover.", tech: "Arduino · C++ · Sensors", img: null },
  { name: "Mesh Comms", desc: "Robots talking without WiFi/Bluetooth.", tech: "ESP32 · LoRa · C", img: null },
  { name: "AI Vision System", desc: "Real-time object detection pipeline.", tech: "Python · OpenCV · TensorFlow", img: null },
  { name: "AI Robotic Hand", desc: "Gesture-controlled prosthetic prototype.", tech: "Arduino · Python · Servos", img: null },
  { name: "Water Purifier Bottle", desc: "Portable UV+filtration system.", tech: "Hardware · Chemistry", img: null },
  { name: "School Hub", desc: "Unified learning + activity platform.", tech: "React · TypeScript · Node", img: null },
  { name: "Engineering Hub", desc: "Workspace for student engineers.", tech: "React · TSX · Firebase", img: null },
  { name: "Robotic Dog", desc: "Quadruped companion robot.", tech: "Raspberry Pi · Python · Servos", img: null },
];

const stats = [
  { n: 10, s: "+", l: "Projects Built" },
  { n: 1, s: "", l: "Hackathon Organized" },
  { n: 5, s: "+", l: "Languages Mastered" },
  { n: 1, s: "", l: "Company Founded" },
  { n: 3, s: "", l: "Books Authored" },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const [booted, setBooted] = useState(false);
  useEffect(() => { document.documentElement.classList.add("dark"); }, []);

  return (
    <>
      {!booted && <Boot onDone={() => setBooted(true)} />}
      <Cursor />
      <Starfield />
      <DataRain />
      <ScrollProgress />

      <main className="relative z-10">
        {/* NAV */}
        <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
          <a href="#top" className="font-display text-lg font-bold tracking-widest text-cyan-glow">PAIO</a>
          <div className="hidden gap-8 text-sm uppercase tracking-widest text-white/70 md:flex">
            <a href="#about" className="hover:text-cyan-glow">About</a>
            <a href="#paio" className="hover:text-cyan-glow">PAIO</a>
            <a href="#projects" className="hover:text-cyan-glow">Work</a>
            <a href="#books" className="hover:text-cyan-glow">Books</a>
            <a href="#skills" className="hover:text-cyan-glow">Stack</a>
            <a href="#contact" className="hover:text-cyan-glow">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <section id="top" className="relative flex min-h-screen items-center px-6 pt-24 md:px-12">
          <div className="grid w-full items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan px-3 py-1 text-xs uppercase tracking-widest text-cyan-glow">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#00F5FF]" /> Mission Online
              </div>
              <GlitchText />
              <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">
                CEO & Founder of PAIO International · Middle School · Robotics Engineer · Software Developer · Author
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full border-2 px-7 py-3 font-display text-sm uppercase tracking-widest text-cyan-glow border-cyan glow-cyan transition hover:scale-105">View My Work</a>
                <a href="#paio" className="rounded-full border-2 px-7 py-3 font-display text-sm uppercase tracking-widest text-gold-glow border-gold glow-gold transition hover:scale-105">About PAIO</a>
              </div>
            </div>
            <div className="relative h-[420px] md:h-[560px]">
              <div className="absolute inset-0">
                <Globe3D />
              </div>
              <div className="animate-bob absolute -bottom-6 left-1/2 -translate-x-1/2">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-cyan glow-cyan md:h-40 md:w-40">
                  <img src={arjunHeadshot} alt="Arjun Pai" width={768} height={768} className="h-full w-full object-cover" />
                </div>
                {/* Author badge */}
                <div className="absolute -right-2 -top-2 rotate-6 rounded-full border-2 border-[#FFB700] bg-[#080A12] px-3 py-1 font-display text-[10px] uppercase tracking-widest text-gold-glow" style={{ boxShadow: "0 0 24px rgba(255,183,0,0.7)" }}>
                  ★ Author
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <div className="mx-auto flex h-10 w-6 justify-center rounded-full border border-white/40 pt-2">
              <div className="scroll-dot h-2 w-1 rounded-full bg-[#00F5FF]" />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-widest text-white/40">Scroll</div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative px-6 py-32 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-cyan glow-cyan">
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute -left-12 top-1/3 h-64 w-64 rounded-full bg-[#00F5FF]/25 blur-[80px]" />
                <div className="absolute -right-12 bottom-1/4 h-64 w-64 rounded-full bg-[#FFB700]/20 blur-[80px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-[10rem] font-extrabold leading-none text-cyan-glow opacity-30">A</div>
                </div>
                <div className="absolute bottom-6 left-6 font-display text-xs uppercase tracking-[0.3em] text-white/60">
                  // operator: arjun.pai
                </div>
                <div className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.3em] text-cyan-glow">
                  ● online
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A12] via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// About</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A mind built for what's next.</h2>
              <p className="mt-6 text-white/70">
                Arjun Pai is a <span className="text-gold-glow">middle school</span> student and self-taught
                <span className="text-gold-glow"> tech prodigy</span> — the Founder & CEO of
                <span className="text-gold-glow"> PAIO International</span>. From autonomous drones to AI vision systems,
                Arjun blends <span className="text-gold-glow">robotics</span>, <span className="text-gold-glow">software engineering</span>,
                and product thinking to ship real, working hardware. He organizes hackathons, mentors peers,
                and authored the <span className="text-gold-glow">Life of Doom</span> trilogy — building the company he wants to lead,
                somewhere between <span className="text-gold-glow">Apple</span> and <span className="text-gold-glow">Tata</span>.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
                {stats.map((s) => (
                  <div key={s.l} className="holo-panel rounded-xl p-4 text-center">
                    <div className="font-display text-2xl font-bold text-cyan-glow md:text-3xl">
                      <CountUp to={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-white/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PAIO */}
        <PaioHero />

        {/* PROJECTS */}
        <section id="projects" className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// 010</p>
              <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">What I've <span className="text-gold-glow">Built</span></h2>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.04}>
                  <TiltCard className="holo-panel group h-full overflow-hidden rounded-2xl p-6">
                    <div className="relative mb-4 flex h-40 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#0c1126] to-[#080A12]">
                      {p.img ? (
                        <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <span className="font-display text-5xl text-cyan-glow opacity-40 group-hover:text-gold-glow">{String(i + 1).padStart(2, "0")}</span>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080A12]/80 via-transparent to-transparent" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-glow">{p.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-widest text-cyan-glow">{p.tech}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKS */}
        <BooksSection />

        {/* SKILLS */}
        <section id="skills" className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// Stack</p>
              <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">My <span className="text-gold-glow">Stack</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <TechStack />
            </Reveal>
          </div>
        </section>

        {/* TIMELINE WHEEL */}
        <section id="milestones" className="relative px-6 py-32 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-glow">// Timeline</p>
              <h2 className="mt-3 font-display text-5xl font-bold md:text-6xl">Mile<span className="text-gold-glow">stones</span></h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-white/60">A rotating constellation of moments — hover any node to learn more.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <MilestoneWheel />
            </Reveal>
          </div>
        </section>

        {/* AWARDS */}
        <AwardsMarquee />

        {/* CONTACT */}
        <section id="contact" className="relative border-t border-white/5 bg-black/40 px-6 py-32 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                Let's <span className="text-cyan-glow">Build the Future</span> Together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <form onSubmit={(e) => e.preventDefault()} className="mt-12 grid gap-4 text-left">
                <input className="holo-panel rounded-lg bg-transparent px-4 py-3 text-white outline-none focus:border-gold" placeholder="Name" />
                <input className="holo-panel rounded-lg bg-transparent px-4 py-3 text-white outline-none focus:border-gold" placeholder="Email" type="email" />
                <textarea rows={5} className="holo-panel rounded-lg bg-transparent px-4 py-3 text-white outline-none focus:border-gold" placeholder="Message" />
                <button className="mt-2 rounded-full border-2 px-7 py-3 font-display text-sm uppercase tracking-widest text-cyan-glow border-cyan glow-cyan transition hover:scale-[1.02]">
                  Transmit Signal →
                </button>
              </form>
              <div className="mt-10 flex justify-center gap-6 text-sm uppercase tracking-widest text-white/60">
                <a href="#" className="hover:text-cyan-glow">LinkedIn</a>
                <a href="#" className="hover:text-cyan-glow">GitHub</a>
                <a href="#" className="hover:text-cyan-glow">Email</a>
              </div>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
