import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Compass } from "lucide-react";
import knowledgeImg from "@/assets/knowledge.jpg";

const blocks = [
  { icon: BookOpen, title: "Read deeper", text: "Long-form essays curated by editors who care about ideas." },
  { icon: Lightbulb, title: "Think clearer", text: "Frameworks, mental models, and notes from working creators." },
  { icon: Compass, title: "Explore further", text: "Discover voices and topics you didn't know you'd love." },
];

export const Knowledge = () => {
  return (
    <section id="knowledge" className="relative py-28 md:py-36 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src={knowledgeImg}
                alt="Knowledge"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-glass animate-float">
              <div className="text-3xl font-display font-bold text-accent">+240</div>
              <div className="text-xs text-muted-foreground mt-1">books reviewed</div>
            </div>
            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 shadow-glass animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-xs text-muted-foreground">Reading streak</div>
              <div className="font-display font-bold text-accent">21 days 🔥</div>
            </div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              Knowledge & Books
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-display font-bold text-4xl md:text-5xl"
            >
              Learn something that <span className="text-gradient-accent">stays</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg text-muted-foreground max-w-lg"
            >
              We turn the best ideas from books, essays and people into compact insights you can apply this week.
            </motion.p>

            <div className="mt-10 space-y-4">
              {blocks.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex gap-5 p-5 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-soft transition-all duration-500"
                >
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow group-hover:scale-110 transition-transform">
                    <b.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{b.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{b.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
