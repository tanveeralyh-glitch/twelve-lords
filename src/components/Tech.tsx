import { motion } from "framer-motion";
import { Cpu, Zap, Lock, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const techVideo = "/videos/tech-video.mp4";

const items = [
  { icon: Shield, title: "Hardware Isolation", text: "Physical separation of power and data pathways." },
  { icon: Zap, title: "60W Fast Charging", text: "High-speed power delivery without security compromise." },
  { icon: Lock, title: "Total Protection", text: "Defends against Juice Jacking and HID injection." },
];

export const Tech = () => {
  return (
    <section id="tech" className="relative py-28 md:py-36 bg-secondary/40 overflow-hidden">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Hardware Security</span>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
              Security engineered at the <span className="text-gradient-accent">physical layer</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              The Twelve Lords Cyber Cable introduces a hardware-enforced architecture that separates charging from data communication, ensuring your devices remain protected in any environment.
            </p>

            <div className="mt-8 space-y-5">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                    <it.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{it.title}</h3>
                    <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{it.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12"
            >
              <Link
                to="/tech"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold shadow-accent-glow hover:scale-105 transition-all duration-300"
              >
                Technical Overview <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-card-hover aspect-[4/5]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={techVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-white">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Hardware-Enforced Architecture
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
