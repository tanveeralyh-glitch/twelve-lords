import { motion } from "framer-motion";
import { PenLine, Sparkles, ArrowRight } from "lucide-react";
const writerVideo = "/videos/hero-tech.mp4";

export const BecomeWriter = () => {
  return (
    <section id="become-writer" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[160px]" />
        <div className="absolute top-10 right-20 h-72 w-72 rounded-full bg-accent-glow/20 blur-[120px] animate-float" />
        <div
          className="absolute bottom-10 left-20 h-72 w-72 rounded-full bg-accent/10 blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative glass rounded-[2rem] border border-border/40 px-8 py-16 md:px-16 md:py-24 text-center shadow-card-soft overflow-hidden"
        >
          {/* Background video */}
          <div className="absolute inset-0 -z-0 overflow-hidden rounded-[2rem]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            >
              <source src={writerVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
          </div>

          {/* Inner shimmer */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-glow/5 pointer-events-none" />

          <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            For writers & creators
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto"
          >
            Become a <span className="text-gradient-accent">Writer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Join our platform and publish your tech articles and books to a
            global community of curious readers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-semibold shadow-accent-glow hover:scale-105 transition-transform animate-pulse-glow"
            >
              <PenLine className="h-5 w-5" />
              Start Writing
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#articles"
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 font-semibold hover:bg-accent/10 transition-colors"
            >
              See examples
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            {[
              { n: "12k+", l: "Writers" },
              { n: "84k+", l: "Articles" },
              { n: "100%", l: "Free to start" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-bold">
                  {s.n}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
