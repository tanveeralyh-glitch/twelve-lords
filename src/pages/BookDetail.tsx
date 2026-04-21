import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowLeft, 
  BookOpen, 
  User, 
  Bookmark, 
  Target, 
  Eye, 
  Map, 
  ShieldCheck,
  Star
} from "lucide-react";
import { useEffect } from "react";
import { SocialActions } from "@/components/SocialActions";
import { useCommerce } from "@/context/CommerceContext";
import { ShoppingCart } from "lucide-react";



const bookData = {
  title: "THE SELF AS WITNESS",
  subtitle: "Exploring How the Self Becomes Both Subject and Suspect in Its Own Gaze",
  author: "Muhammad Raza",
  genre: "NON-FICTION",
  publishDate: "April 20, 2026",
  description: "The Self as Witness explores the timeless struggle for self-mastery—the internal battle that has defined the human condition across history. Drawing from the wisdom of great thinkers, it distills profound philosophies into a clear, practical framework. Rather than remaining abstract, this book transforms ancient insight into actionable discipline, guiding you to apply self-awareness and control in your everyday life.",
  benefits: [
    {
      title: "Recognition of the Inner Adversary",
      text: "Cultivate the ability to identify the “inner suspect”—the hidden patterns, impulses, and tendencies that undermine your discipline and clarity.",
      icon: Eye,
      color: "text-red-400"
    },
    {
      title: "Deep Self-Awareness and Insight",
      text: "Develop a heightened awareness of your inner world, gaining knowledge of your thoughts, emotions, and behaviors at their root.",
      icon: Target,
      color: "text-blue-400"
    },
    {
      title: "A Structured Strategy for Inner Mastery",
      text: "Formulate a disciplined and practical framework to confront, regulate, and ultimately transcend the limitations of your inner self.",
      icon: Map,
      color: "text-emerald-400"
    }
  ]
};

const BookDetail = () => {
  const { addToCart, isInCart } = useCommerce();

  const product = {
    id: "book-self-as-witness-001",
    name: "THE SELF AS WITNESS (Hardcover)",
    price: "$45.00",
    type: "book" as const,
    image: "/book-main.png"
  };

  const inCart = isInCart(product.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020204] text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container-tight">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-accent mb-12 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to home
          </Link>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            
            {/* Left: Content */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest">
                    {bookData.genre}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                
                <h1 className="text-5xl md:text-7xl font-display font-black leading-none tracking-tighter mb-6">
                  {bookData.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/50 font-medium italic leading-relaxed">
                  {bookData.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-12 py-8 border-y border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d97706] to-[#dc2626] flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{bookData.author}</div>
                    <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Author</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Non-Fiction</div>
                  <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Genre</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="h-3 w-3 fill-accent" />
                    <Star className="h-3 w-3 fill-accent" />
                    <Star className="h-3 w-3 fill-accent" />
                    <Star className="h-3 w-3 fill-accent" />
                    <Star className="h-3 w-3 fill-accent" />
                  </div>
                  <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Published</div>
                </div>
                
                <div className="h-8 w-px bg-white/10 hidden md:block" />
                <SocialActions className="hidden sm:flex" product={product} />
              </motion.div>



              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="prose prose-invert prose-lg max-w-none"
              >
                <h2 className="font-display font-bold text-2xl text-white mb-6">Synopsis</h2>
                <p className="text-white/70 leading-relaxed text-lg first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-accent">
                  {bookData.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="font-display font-bold text-2xl text-white">3 Key Benefits</h2>
                <div className="grid gap-6">
                  {bookData.benefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="group p-6 md:p-8 rounded-3xl glass border border-white/5 hover:border-accent/30 transition-all duration-500"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className={`shrink-0 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${benefit.color} group-hover:scale-110 transition-transform`}>
                          <benefit.icon className="h-7 w-7" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{benefit.title}</h3>
                          <p className="text-white/50 text-base leading-relaxed">{benefit.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Sidebar / Visual */}
            <aside className="lg:sticky lg:top-32 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-[#f97316]/20 blur-3xl opacity-30" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4] bg-[#0a0a0f]">
                   <img 
                      src="/book-main.png" 
                      alt="The Self as Witness" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
              </motion.div>

              <div className="p-8 rounded-3xl glass border border-white/5 space-y-6">
                <div className="space-y-2">
                  <div className="text-xs text-white/30 uppercase font-black tracking-widest">Availability</div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <ShieldCheck className="h-4 w-4" /> SECURE ACCESS GRANTED
                  </div>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                    inCart 
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 cursor-default" 
                      : "bg-accent text-accent-foreground shadow-accent-glow hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {inCart ? "In Your Cart" : "Secure Your Copy"}
                </button>
                
                <div className="pt-6 border-t border-white/10">
                   <SocialActions align="center" className="w-full" product={product} />
                </div>


                <div className="text-center">
                   <p className="text-[10px] text-white/20 font-medium">Digital & Hardcover formats supported</p>
                </div>

              </div>

              {/* Quote card */}
              <div className="p-8 rounded-3xl bg-secondary/50 border border-white/5 italic text-white/60 leading-relaxed relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BookOpen className="h-20 w-20" />
                </div>
                "Rather than remaining abstract, this book transforms ancient insight into actionable discipline."
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
