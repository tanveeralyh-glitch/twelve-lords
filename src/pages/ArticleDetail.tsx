import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft, Share2, MessageSquare } from "lucide-react";
import { CyberIllustration } from "@/components/CyberIllustration";
import { SocialActions } from "@/components/SocialActions";


const articleContent = {
  title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
  author: "Muhammad Raza",
  date: "Apr 20, 2026",
  readTime: "8 min",
  category: "Cybersecurity",
  content: [
    {
      type: "p",
      text: "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
    },
    {
      type: "p",
      text: "In the race to digitise modern life, convenience has become the defining principle. From children navigating smartphones before they can write, to transport networks and public infrastructure running on interconnected systems, technology is no longer simply a tool—it is the environment in which we live. Yet as this environment expands, so too does its exposure to risk. The unsettling reality is that while cyber threats are accelerating, human awareness is not evolving alongside them.",
    },
    {
      type: "p",
      text: "Recent figures from the National Cyber Security Centre illustrate the scale of the challenge. In 2025, the UK experienced 204 nationally significant cyber attacks—more than double the 89 recorded the previous year. Government data further indicates that nearly 43% of businesses identified breaches or attacks, with around one in five experiencing cyber crime directly. Globally, the trajectory is similarly concerning: thousands of breaches occur annually, while more than 30,000 new vulnerabilities were identified in 2024 alone.",
    },
    {
      type: "h2",
      text: "The easiest system to breach",
    },
    {
      type: "p",
      text: "Despite continuous investment in advanced security technologies, human behaviour remains central to the majority of cyber incidents. Research suggests that up to 88% of breaches involve some form of human error. This is not simply carelessness; it reflects a broader culture of passive interaction with technology.",
    },
    {
      type: "blockquote",
      text: "The user is no longer just a participant in the system, but its most accessible entry point.",
    },
    {
      type: "p",
      text: "Social engineering has become the dominant method of attack. Rather than attempting to break through hardened systems, attackers target individuals directly—exploiting trust, urgency, and routine behaviour. Phishing alone accounts for approximately 93% of UK cyber crimes, increasingly enhanced by AI-generated messages and deepfake impersonations that are difficult to distinguish from legitimate communication.",
    },
    {
      type: "h2",
      text: "When breaches go unnoticed",
    },
    {
      type: "p",
      text: "If human vulnerability enables attacks, delayed detection allows them to flourish. One of the most concerning aspects of modern cyber incidents is the length of time they remain undiscovered. On average, organisations take 181 days to identify a breach, followed by an additional 60 days to contain it—an eight-month window in which attackers can operate largely undetected.",
    },
    {
      type: "p",
      text: "During this period, attackers are not idle. They move through systems, escalate privileges, and extract sensitive data, often without triggering immediate alarms. By the time a breach is identified, the damage is not only complete but amplified.",
    },
    {
      type: "h2",
      text: "The quiet erosion of privacy",
    },
    {
      type: "p",
      text: "Every breach carries a longer-term consequence: the gradual erosion of personal privacy. Cyber attacks are responsible for around 80% of data breaches, exposing sensitive information such as personal identifiers, login credentials, and financial data.",
    },
    {
      type: "p",
      text: "Unlike physical assets, stolen data does not disappear—it multiplies. Once compromised, it is copied, traded, and redistributed across digital networks, often resurfacing months or years later. This creates an ongoing cycle of risk, where individuals remain vulnerable to identity theft, fraud, and account compromise long after the initial incident.",
    },
    {
      type: "h2",
      text: "A failure of public awareness",
    },
    {
      type: "p",
      text: "While organisations continue to invest in technical defences, a critical gap remains largely unaddressed: public education. There are few large-scale, effective awareness campaigns capable of reaching everyday users—particularly those outside formal education systems.",
    },
    {
      type: "p",
      text: "Cybersecurity knowledge is often treated as a specialist skill, rather than a basic life competency. Yet the reality suggests otherwise. In earlier eras, survival depended on understanding the tools and threats of the time. Today, the threat landscape has shifted, but the need for foundational awareness has not.",
    },
    {
      type: "h2",
      text: "Rethinking responsibility",
    },
    {
      type: "p",
      text: "Addressing this imbalance requires a broader shift in how cybersecurity is understood and implemented. Responsibility cannot rest solely with individuals, nor entirely with organisations. It must be shared across systems, design, and public infrastructure.",
    },
    {
      type: "p",
      text: "Technology itself must play a role. Security features need to move beyond optional prompts and become embedded, intuitive, and resistant to misuse. At the same time, awareness efforts must evolve from passive training into practical education that reflects how attacks actually occur.",
    },
    {
      type: "h2",
      text: "The cost of inaction",
    },
    {
      type: "p",
      text: "The trajectory of cyber threats is unlikely to slow. As artificial intelligence enhances both defensive tools and offensive tactics, the gap between sophisticated attackers and everyday users is likely to widen further.",
    },
    {
      type: "p",
      text: "Without widespread awareness, individuals will continue to act as unintended gateways into larger systems—linking personal vulnerability to organisational and national risk. The consequences will not always be immediate, but they will be cumulative, shaping a future in which privacy is increasingly fragile and security increasingly reactive.",
    },
  ],
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const { scrollYProgress } = useScroll();
  const articleProduct = {
    id: `article-${slug}`,
    name: articleContent.title,
    price: "Article",
    type: "article" as const,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <main className="pt-32 pb-20">
        <article className="container-tight max-w-4xl">
          {/* Back button */}
          <Link
            to="/#articles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-12 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Back to articles
          </Link>

          {/* Header */}
          <header className="space-y-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase">
                {articleContent.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight">
                {articleContent.title}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-8 py-6 border-y border-border"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">{articleContent.author}</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Author</div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {articleContent.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {articleContent.readTime} reading
                </div>
              </div>

              <div className="h-4 w-px bg-white/10 hidden md:block" />
              <SocialActions className="hidden sm:flex" product={articleProduct} />
            </motion.div>


          </header>

          {/* Hero Image / Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden mb-16 border border-white/5 bg-muted group"
          >
            <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
               alt="Cyber Security" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-10 left-10 p-8 glass rounded-2xl max-w-sm border border-white/10 hidden md:block">
               <p className="text-sm font-medium leading-relaxed italic text-white/80 uppercase tracking-widest">
                  “Until awareness is treated as essential infrastructure... cybersecurity will remain fundamentally incomplete.”
               </p>
            </div>
          </motion.div>

          {/* Content Body */}
          <div className="space-y-8 text-neutral-800 dark:text-neutral-200">
            {articleContent.content.map((block, idx) => {
              if (block.type === "h2") {
                return (
                  <motion.h2
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-display font-bold mt-12 mb-6"
                  >
                    {block.text}
                  </motion.h2>
                );
              }
              if (block.type === "blockquote") {
                return (
                    <motion.blockquote
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative p-8 md:p-12 glass rounded-3xl border-l-4 border-accent my-12"
                    >
                      <p className="text-xl md:text-2xl font-display font-semibold italic leading-relaxed text-gradient-accent">
                        {block.text}
                      </p>
                    </motion.blockquote>
                );
              }
              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl leading-relaxed opacity-90 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-accent"
                >
                  {block.text}
                </motion.p>
              );
            })}

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="pt-12 mt-12 border-t border-border flex flex-col items-center gap-8"
            >
                <div className="text-center space-y-2 mb-4">
                  <h3 className="text-xl font-bold uppercase tracking-widest italic">Support this publication</h3>
                  <p className="text-sm text-white/40">If you found this technical analysis insightful, consider sharing it.</p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
                    <SocialActions align="center" className="w-full md:w-auto" product={articleProduct} />
                    <div className="flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 rounded-full glass text-sm font-bold text-accent border border-accent/20 hover:bg-accent/10 transition-all"
                        >
                            Contact the Author →
                        </Link>
                    </div>
                </div>
            </motion.div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
