import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { CyberIllustration } from "./CyberIllustration";
import { useRef } from "react";

const featuredArticle = {
  slug: "cyber-threat-awareness",
  cat: "Cybersecurity",
  title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
  desc: "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
  author: "Muhammad Raza",
  date: "Apr 20, 2026",
  read: "8 min",
};

const comingSoon = [
  { title: "The Human Cost of Data Leaks", cat: "Privacy", date: "Coming Soon" },
  { title: "Securing the Smart Home Perimeter", cat: "Hardware", date: "Coming Soon" },
  { title: "Social Engineering in the AI Age", cat: "Intelligence", date: "Coming Soon" },
];

function FloatCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const Articles = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const blobX1 = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 30, damping: 20 });
  const blobY1 = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 30, damping: 20 });
  const blobX2 = useSpring(useTransform(mouseX, [0, 1], [20, -20]), { stiffness: 25, damping: 25 });
  const blobY2 = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 25, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="articles"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#050508] flex items-center"
      style={{
        background: "radial-gradient(ellipse at 20% 60%, #0a0a1a 0%, #050508 60%, #000 100%)",
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Animated gradient light blobs */}
      <motion.div
        style={{ x: blobX1, y: blobY1 }}
        className="absolute top-[-10%] left-[5%] w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(0, 200, 255, 0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          x: blobX1,
          y: blobY1,
        }}
      />
      <motion.div
        style={{ x: blobX2, y: blobY2 }}
        className="absolute bottom-[-5%] right-[5%] w-[700px] h-[700px] rounded-full pointer-events-none z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          background: "radial-gradient(circle, rgba(160, 50, 255, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          x: blobX2,
          y: blobY2,
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{
          background: "radial-gradient(circle, rgba(255, 80, 80, 0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-tight relative z-10 py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_auto_340px] gap-8 xl:gap-16 items-center">

          {/* LEFT: Label + Heading + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 lg:pr-4"
          >
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-[0.25em] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Featured Article
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl xl:text-7xl font-display font-black leading-none tracking-tighter"
              >
                <span className="text-white block">Latest</span>
                <span className="text-gradient-accent block">Articles</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base text-white/50 leading-relaxed max-w-xs"
            >
              Deep-dives, analysis, and insights on cybersecurity, technology, and human intelligence — curated for the modern reader.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to={`/articles/${featuredArticle.slug}`}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent text-white font-bold text-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(239,80,80,0.5)] transition-all duration-300"
              >
                Read Article
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-white/80 transition-colors">
                View all <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-8 pt-4 border-t border-white/5"
            >
              {[["8+", "Articles"], ["2026", "Founded"], ["100%", "Original"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="text-2xl font-black text-white">{val}</div>
                  <div className="text-xs text-white/30 uppercase tracking-widest">{lbl}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* CENTER: Floating Featured Card with depth ghost cards */}
          <div className="relative flex items-center justify-center min-h-[540px] w-full lg:w-[340px]">

            {/* Ghost card 1 — behind-left */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              animate={{ y: [0, -8, 0], rotate: [-6, -5, -6] }}
              transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute inset-0 mx-auto w-[300px] h-[420px] rounded-3xl overflow-hidden opacity-15"
              style={{ transform: "rotate(-6deg) scale(0.92) translateX(-24px)", filter: "blur(3px)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black rounded-3xl border border-purple-500/10" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="h-3 w-24 rounded bg-white/10 mb-2" />
              </div>
            </motion.div>

            {/* Ghost card 2 — behind-right */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              animate={{ y: [0, -6, 0], rotate: [5, 6, 5] }}
              transition={{ y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
              className="absolute inset-0 mx-auto w-[300px] h-[420px] rounded-3xl overflow-hidden opacity-[0.12]"
              style={{ transform: "rotate(6deg) scale(0.94) translateX(24px)", filter: "blur(2px)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black rounded-3xl border border-cyan-500/10" />
            </motion.div>

            {/* Main Featured Card */}
            <FloatCard
              className="relative w-[310px] z-20"
              delay={0}
            >
              <Link to={`/articles/${featuredArticle.slug}`} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: "rgba(10, 10, 20, 0.7)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 0 0 1px rgba(239,80,80,0.15), 0 30px 80px rgba(0,0,0,0.8), 0 0 60px rgba(239,80,80,0.08)",
                  }}
                >
                  {/* Image area */}
                  <div className="relative h-[220px] overflow-hidden">
                    <CyberIllustration />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent text-white text-[10px] font-extrabold tracking-widest uppercase shadow-[0_0_20px_rgba(239,80,80,0.5)]">
                      {featuredArticle.cat}
                    </span>
                    {/* Neon glow border on hover */}
                    <div className="absolute inset-0 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: "inset 0 0 30px rgba(239,80,80,0.1)" }} />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-display font-black text-white text-lg leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-3">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
                      {featuredArticle.desc}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-xs font-bold text-white/70">{featuredArticle.author}</span>
                      <div className="flex items-center gap-3 text-[11px] text-white/30">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {featuredArticle.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featuredArticle.read}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FloatCard>
          </div>

          {/* RIGHT: Vertical mini cards stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 hidden lg:flex flex-col"
          >
            <div className="font-tech text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-2 px-1">Up Next</div>
            {comingSoon.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="relative group rounded-2xl overflow-hidden cursor-not-allowed"
                style={{
                  background: "rgba(10,10,20,0.5)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Blur overlay — Coming Soon */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 backdrop-blur-sm bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <Lock className="h-4 w-4 text-accent" />
                  <span className="font-tech text-[10px] font-bold text-accent uppercase tracking-widest">Coming Soon</span>
                </div>

                <div className="p-5 flex gap-5 items-center">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0a0a0f] flex items-center justify-center border border-white/[0.03]">
                    <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-tech text-[10px] font-black text-accent tracking-tighter">{i + 2}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-tech text-[9px] font-black text-accent uppercase tracking-[0.2em] block mb-1.5">{item.cat}</span>
                    <p className="text-[13px] font-bold text-white/80 leading-snug line-clamp-2">{item.title}</p>
                    <span className="font-tech text-[9px] font-bold text-white/30 mt-2 block tracking-wider">{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Divider + Tagline */}
            <div className="pt-6 mt-2 border-t border-white/5 space-y-2">
              <p className="text-[13px] text-white/40 italic font-medium leading-relaxed max-w-[280px]">"The human element remains the most exploited vulnerability."</p>
              <p className="font-tech text-[9px] text-white/20 uppercase font-bold tracking-[0.2em]">— Twelve Lords Editorial</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to page bg */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};
