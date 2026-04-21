import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MessageSquare, ShieldCheck, Book } from "lucide-react";

const contactOptions = [
  {
    icon: ShieldCheck,
    title: "Technology & Security",
    email: "Tech@twelvelords.com",
    description: "Inquiries regarding our hardware solutions and cybersecurity frameworks.",
  },
  {
    icon: Book,
    title: "Publications",
    email: "Books@twelvelords.com",
    description: "Queries related to our articles, long-form works, and video content.",
  },
  {
    icon: MessageSquare,
    title: "General Inquiries",
    email: "Info@twelvelords.com",
    description: "General questions about Twelve Lords and our mission.",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-tight space-y-16">
          <section className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Get in <span className="text-gradient-accent">Touch</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Connect with our specialized departments to discuss knowledge, technology, or general inquiries.
            </motion.p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.email}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="glass rounded-3xl p-8 h-full space-y-6 flex flex-col border border-white/5 group-hover:border-accent/20 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <option.icon className="h-7 w-7" />
                  </div>

                  <div className="space-y-3 relative z-10">
                    <h3 className="text-xl font-bold">{option.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 relative z-10">
                    <a
                      href={`mailto:${option.email}`}
                      className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {option.email}
                    </a>
                  </div>

                  <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-accent/20 to-transparent w-full max-w-lg h-px mb-12" />
            <h2 className="text-2xl font-bold mb-4 italic">Systems of Knowledge & Security</h2>
            <p className="text-muted-foreground">Strengthening the mind and the modern digital life.</p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
