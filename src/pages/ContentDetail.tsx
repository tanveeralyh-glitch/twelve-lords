import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, User, Calendar, Clock, Quote, BarChart3, Lightbulb, Share2, ShoppingCart, Heart, Check } from "lucide-react";
import { publications } from "@/data/publications";
import { useCommerce } from "@/context/CommerceContext";

const ContentDetail = () => {
  const { slug } = useParams();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { addToCart, isInCart, addToWishlist, removeFromWishlist, isInWishlist } = useCommerce();

  const item = publications.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Content Not Found</h1>
          <Link to="/" className="text-accent underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const inCart = isInCart(item.slug);
  const inWishlist = isInWishlist(item.slug);

  const product = {
    id: item.slug,
    name: item.title,
    price: item.type === 'book' ? '$29.99' : 'Free',
    image: item.image,
    type: item.type
  };

  // Helper to split content for better sectioning
  const intro = item.content[0];
  const highlight = item.content[1];
  const mainContent = item.content.slice(2, -2);
  const research = item.content[item.content.length - 2];
  const finalQuote = item.content[item.content.length - 1];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <main className="pt-20 pb-20 overflow-x-hidden">
        {/* 1. Hero Hook Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="flex flex-col items-center gap-6 mb-12">
               <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent hover:opacity-80 transition-opacity"
              >
                <ArrowLeft className="h-3 w-3" /> Back to Library
              </Link>
              <span className="px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest">
                {item.category} • {item.type}
              </span>
            </div>

            <h1 className="hero-hook-title">
              {item.title}
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
              {item.shortDescription}
            </p>

            {/* Hero Commerce Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
               <button
                  onClick={() => addToCart(product)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all ${
                    inCart 
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 cursor-default" 
                      : "btn-accent shadow-accent-glow"
                  }`}
                >
                  {inCart ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                  {inCart ? "Added to Cart" : item.type === 'book' ? "Buy Book — $29.99" : "Add to Library"}
                </button>
                
                <button
                  onClick={() => inWishlist ? removeFromWishlist(item.slug) : addToWishlist(product)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl border font-black uppercase tracking-widest transition-all ${
                    inWishlist
                      ? "bg-accent/10 border-accent/30 text-accent"
                      : "bg-foreground/5 border-foreground/10 text-foreground/60 hover:border-foreground/20 hover:text-foreground"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${inWishlist ? "fill-accent" : ""}`} />
                  {inWishlist ? "Saved" : "Wishlist"}
                </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-10 mt-12 py-8 border-y border-border/50 w-full max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
                <User className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold uppercase tracking-tight">{item.author}</div>
                <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Author</div>
              </div>
            </div>
            <div className="h-8 w-px bg-border/50 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {item.date}</span>
              <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {item.readTime}</span>
            </div>
          </motion.div>
        </section>

        {/* Featured Image */}
        <div className="article-container mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            
            {/* Corner Tech Detail */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-accent/40 rounded-br-2xl" />
          </motion.div>
        </div>

        {/* 2. Quick Insight / Intro Block */}
        <section className="article-container mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="quick-insight-block relative"
          >
            <Lightbulb className="absolute -left-3 -top-3 h-6 w-6 text-accent animate-pulse" />
            <p className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed">
              {intro}
            </p>
          </motion.div>
        </section>

        {/* 3. Highlight Section */}
        <section className="article-container mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="highlight-card"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Quote className="h-32 w-32" />
            </div>
            <h3 className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" /> Key Perspective
            </h3>
            <p className="text-2xl md:text-3xl font-bold leading-tight text-foreground/90 italic">
              "{highlight}"
            </p>
          </motion.div>
        </section>

        {/* 4. Main Article Content */}
        <section className="article-container mb-24">
          <div className="space-y-10">
            {mainContent.map((text, idx) => {
              const isKeyPoint = text.length < 120;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {isKeyPoint ? (
                    <div className="glass p-8 rounded-2xl border-l-4 border-accent relative overflow-hidden my-8">
                       <h2 className="text-2xl font-black uppercase tracking-tight text-foreground/90 group-hover:text-accent transition-colors">
                        {text}
                      </h2>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 blur-2xl" />
                    </div>
                  ) : (
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-normal">
                      {text}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Comparative Visuals (if any) */}
        {item.additionalImages && item.additionalImages.length > 0 && (
          <section className="article-container mb-24">
            <div className="grid md:grid-cols-2 gap-8">
              {item.additionalImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="space-y-4"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border/50 group">
                    <img src={img} alt={`Visual Evidence ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-3 py-1 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {img.includes('ancient') ? "Historical Context" : "Additional Insight"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground italic font-medium">
              Comparison: The architectural and psychological environment of examinations has remained largely unchanged for centuries.
            </p>
          </section>
        )}

        {/* 5. Research / Evidence Section */}
        {research && (
          <section className="article-container mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="research-block"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">Research & Evidence</h3>
              </div>
              <p className="text-lg font-medium text-foreground/90 italic border-l-2 border-accent/30 pl-6">
                {research}
              </p>
            </motion.div>
          </section>
        )}

        {/* 6. Quote Section */}
        {finalQuote && (
          <section className="bg-secondary/20 py-24 mb-24 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto px-6 text-center relative z-10"
            >
              <Quote className="h-12 w-12 text-accent/20 mx-auto mb-8" />
              <p className="quote-section">
                {finalQuote}
              </p>
              <div className="w-20 h-1 bg-accent mx-auto mt-8 rounded-full" />
            </motion.div>
          </section>
        )}

        {/* Sharing & Interaction */}
        <section className="article-container border-t border-border/50 pt-20 text-center">
           <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center gap-8"
          >
             <h3 className="text-xs font-black uppercase tracking-[0.5em] text-muted-foreground italic">Take Action</h3>
             <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={() => addToCart(product)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all ${
                    inCart 
                      ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" 
                      : "btn-accent hover:shadow-xl hover:shadow-accent/30"
                  }`}
                >
                  {inCart ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                  <span>{inCart ? "In Your Cart" : "Get this Publication"}</span>
                </button>
                
                <button
                  onClick={() => inWishlist ? removeFromWishlist(item.slug) : addToWishlist(product)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold border transition-all active:scale-95 ${
                    inWishlist 
                      ? "bg-accent/10 border-accent/20 text-accent" 
                      : "bg-foreground/5 border-foreground/10 text-foreground/60 hover:border-foreground/20"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${inWishlist ? "fill-accent text-accent" : ""}`} />
                  <span>{inWishlist ? "Saved to Wishlist" : "Save for Later"}</span>
                </button>

                <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-secondary text-foreground/60 font-bold hover:bg-secondary/80 transition-all active:scale-95">
                  <Share2 className="h-5 w-5" />
                  <span>Share Insight</span>
                </button>
             </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContentDetail;
