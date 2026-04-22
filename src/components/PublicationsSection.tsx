import { Link } from "react-router-dom";
import { publications } from "@/data/publications";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Check } from "lucide-react";
import { useCommerce } from "@/context/CommerceContext";

export const PublicationsSection = () => {
  const { addToCart, isInCart, addToWishlist, removeFromWishlist, isInWishlist } = useCommerce();

  const articles = publications.filter(p => p.type === 'article');
  const books = publications.filter(p => p.type === 'book');

  const PublicationCard = ({ item, index }: { item: any, index: number }) => {
    const inCart = isInCart(item.slug);
    const inWishlist = isInWishlist(item.slug);
    
    const product = {
      id: item.slug,
      name: item.title,
      price: item.type === 'book' ? '$29.99' : 'Free',
      image: item.image,
      type: item.type
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group flex flex-col items-center text-center space-y-8"
      >
        <div className="w-full relative">
          <Link to={`/content/${item.slug}`} className="block">
            <div className="relative flex flex-col items-center space-y-8">
              <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_20px_50px_rgba(239,80,80,0.2)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                   <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                     item.type === 'book' ? 'bg-orange-600 text-white' : 'bg-accent text-white'
                   }`}>
                     {item.type}
                   </span>
                </div>
              </div>

              <div className="space-y-4 max-w-[360px]">
                <h3 className="text-2xl font-display font-bold tracking-tight uppercase leading-tight group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="w-16 h-px bg-border group-hover:w-24 group-hover:bg-accent transition-all duration-500 mx-auto" />
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {item.shortDescription}
                </p>
              </div>
            </div>
          </Link>

          <div className="absolute right-0 top-1/4 flex flex-col gap-3 z-10 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
            <button
              onClick={() => inWishlist ? removeFromWishlist(item.slug) : addToWishlist(product)}
              className={`p-3 rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 ${
                inWishlist ? 'bg-accent text-white' : 'bg-background border border-border text-foreground hover:border-accent hover:text-accent'
              }`}
              title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => addToCart(product)}
              className={`p-3 rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 ${
                inCart ? 'bg-emerald-500 text-white' : 'bg-background border border-border text-foreground hover:border-accent hover:text-accent'
              }`}
              title={inCart ? "In Cart" : "Add to Cart"}
            >
              {inCart ? <Check className="h-5 w-5" /> : <ShoppingBag className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <Link
          to={`/content/${item.slug}`}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-accent/20 active:scale-95"
        >
          Learn More
        </Link>
      </motion.div>
    );
  };

  return (
    <section className="bg-background transition-colors duration-500">
      {/* 1. Articles Section */}
      <div id="articles" className="py-24 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold tracking-[0.3em] uppercase text-xs"
            >
              Curated Insights
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-black tracking-tight"
            >
              Latest <span className="text-accent italic">Articles</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {articles.map((item, index) => (
              <PublicationCard key={item.slug} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* 2. Books Section */}
      <div id="book-section" className="py-24 px-6 bg-secondary/30 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-bold tracking-[0.3em] uppercase text-xs"
            >
              Deep Mastery
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-black tracking-tight"
            >
              Featured <span className="text-accent italic">Books</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {books.map((item, index) => (
              <PublicationCard key={item.slug} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
