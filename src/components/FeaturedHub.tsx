import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Book, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Binary, 
  Calendar, 
  Clock,
  ArrowUpRight,
  Bookmark
} from "lucide-react";
import { useRef } from "react";
import { CyberIllustration } from "./CyberIllustration";

const featuredArticle = {
  slug: "cyber-threat-awareness",
  cat: "Cybersecurity",
  title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
  desc: "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
  author: "Muhammad Raza",
  date: "Apr 20, 2026",
  read: "8 min",
};

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

export const FeaturedHub = () => {
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
      className="relative py-24 lg:py-32 overflow-hidden bg-[#050508]"
    >
       {/* Background Noise & Blobs */}
       <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <motion.div
        style={{ x: blobX1, y: blobY1 }}
        className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 bg-[radial-gradient(circle,rgba(220,38,38,0.12)_0%,transparent_70%)] filter blur-[60px]"
      />
      <motion.div
        style={{ x: blobX2, y: blobY2 }}
        className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] rounded-full pointer-events-none z-0 bg-[radial-gradient(circle,rgba(160,50,255,0.08)_0%,transparent_70%)] filter blur-[80px]"
      />

      <div className="container-tight relative z-10">
        <div className="text-center mb-16 lg:mb-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-4"
            >
              <Sparkles className="h-3 w-3" /> Featured Curations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white"
            >
              Latest <span className="text-gradient-accent">Publications</span>
            </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: THE BOOK */}
          <motion.div
            id="book-section"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 scroll-mt-32"
          >
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <Book className="h-5 w-5 text-accent" />
                  <span className="text-xs font-tech font-bold text-white/40 uppercase tracking-widest">Featured Book</span>
               </div>
               <h3 className="text-3xl md:text-5xl font-display font-black text-white leading-none">
                 THE SELF AS <br /> <span className="text-accent underline decoration-2 underline-offset-8">WITNESS</span>
               </h3>
               <p className="text-white/50 text-base leading-relaxed max-w-md">
                 Exploring How the Self Becomes Both Subject and Suspect in Its Own Gaze. A profound dive into internal discipline and self-mastery.
               </p>
            </div>

            <div className="flex justify-center py-4">
               <Link to="/book" className="group block perspective-1000">
                  <motion.div
                    whileHover={{ rotateY: -15, rotateX: 5, scale: 1.05 }}
                    className="relative w-[240px] h-[340px] md:w-[280px] md:h-[400px] rounded-r-lg shadow-2xl overflow-hidden preserve-3d border border-white/5 bg-[#0a0a0f]"
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/80 to-transparent z-20" />
                    <img 
                      src="/book-main.png" 
                      alt="The Self as Witness" 
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { 
                        e.currentTarget.src = "/book-cover.png"; 
                      }}
                    />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-transparent via-black/20 to-black/60">
                        <Bookmark className="h-10 w-10 text-accent mb-4" />
                        <span className="font-display font-black text-xl text-white tracking-widest leading-none underline decoration-accent/30 decoration-2 underline-offset-4">THE SELF AS <br/> WITNESS</span>
                        <div className="mt-4 space-y-1">
                          <p className="text-[10px] text-white/60 uppercase tracking-[0.4em] font-bold">MUHAMMAD RAZA</p>
                          <p className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-medium italic">Published Apr 2026</p>
                        </div>
                    </div>
                  </motion.div>
               </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                <Link to="/book" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-accent-glow hover:scale-105 transition-all">
                  Read Book <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex flex-col">
                  <div className="text-[10px] text-white/60 font-tech font-bold uppercase tracking-widest">By Muhammad Raza</div>
                  <div className="text-[9px] text-white/20 font-tech font-bold uppercase tracking-wider">April 2026</div>
                </div>
            </div>
          </motion.div>

          {/* RIGHT: THE FEATURED ARTICLE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <Binary className="h-5 w-5 text-accent" />
                  <span className="text-xs font-tech font-bold text-white/40 uppercase tracking-widest">Latest Article</span>
               </div>
               <h3 className="text-3xl md:text-5xl font-display font-black text-white leading-none">
                 HUMAN <span className="text-gradient-accent">AWARENESS</span> <br /> IS THE WEAKNESS
               </h3>
               <p className="text-white/50 text-base leading-relaxed max-w-md">
                 In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.
               </p>
            </div>

            <FloatCard className="relative z-20">
               <Link to={`/articles/${featuredArticle.slug}`} className="block group">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-3xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-3xl shadow-2xl"
                  >
                     <div className="relative h-[200px] overflow-hidden">
                        <CyberIllustration />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent text-white text-[9px] font-extrabold tracking-widest uppercase shadow-[0_0_20px_rgba(239,80,80,0.5)]">
                          {featuredArticle.cat}
                        </span>
                     </div>
                     <div className="p-6 space-y-4">
                        <h4 className="font-display font-black text-white text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                           {featuredArticle.title}
                        </h4>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
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

            <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                <Link to={`/articles/${featuredArticle.slug}`} className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all">
                  Full Article <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="text-[10px] text-white/30 font-tech font-bold uppercase tracking-widest">8 min read</div>
            </div>
          </motion.div>

        </div>
      </div>

       {/* Bottom fade to page bg */}
       <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};
