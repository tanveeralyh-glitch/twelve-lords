import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, BookOpen, Cpu, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-tight space-y-24">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                About <span className="text-gradient-accent">Twelve Lords</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Twelve Lords is driven by a singular mission: to educate, inform, and elevate.
            </motion.p>
          </section>

          {/* Core Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Commitment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to providing accurate, well-researched knowledge that empowers individuals with clarity, 
                self-awareness, and a defined path toward personal and intellectual development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our work spans across current affairs, history, philosophy, and technology, delivered through thoughtsfully 
                crafted articles, books, and video content.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8 aspect-video flex items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-radial opacity-20 group-hover:opacity-30 transition-opacity" />
              <BookOpen className="h-24 w-24 text-accent/20 group-hover:text-accent/30 transition-colors" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                <p className="text-center mt-4 text-sm font-medium uppercase tracking-widest text-accent/60">Knowledge Systems</p>
              </div>
            </motion.div>
          </div>

          {/* Tech & Security Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 relative h-[400px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 glass rounded-3xl overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                   <div className="p-12 h-full flex flex-col justify-center gap-8">
                        <div className="flex gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    {i === 1 && <Cpu className="h-8 w-8 text-accent" />}
                                    {i === 2 && <Shield className="h-8 w-8 text-accent" />}
                                    {i === 3 && <div className="h-2 w-8 bg-accent/40 rounded-full" />}
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <div className="h-3 w-48 bg-white/10 rounded-full" />
                            <div className="h-3 w-32 bg-white/10 rounded-full" />
                            <div className="h-3 w-40 bg-white/10 rounded-full" />
                        </div>
                   </div>
                </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 md:order-2"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                <Cpu className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Technological Innovation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Twelve Lords is also at the forefront of technological innovation. Our dedicated tech team is actively developing 
                modern hardware solutions embedded with secure cybersecurity frameworks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "We believe that security should not be an afterthought, but a fundamental component of every product."
              </p>
            </motion.div>
          </div>

          {/* Values / Distinction */}
          <section className="glass rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
             <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold">What Sets Us Apart</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    What sets us apart from contemporary industries is our unwavering emphasis on data protection and user safety, 
                    even in everyday technology. Through our products, we aim not only to provide functionality, but also to 
                    educate users on cybersecurity awareness, fostering a deeper understanding of digital risks and the 
                    importance of data integrity.
                </p>
                <div className="pt-8">
                    <p className="text-xl font-medium">
                        At Twelve Lords, we do not simply create content or products—we build systems of knowledge and security 
                        designed to strengthen both the mind and the modern digital life.
                    </p>
                </div>
             </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
