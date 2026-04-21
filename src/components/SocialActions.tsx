import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Share2, Check } from "lucide-react";
import { toast } from "sonner";

import { useCommerce } from "@/context/CommerceContext";

export const SocialActions = ({ 
  className = "", 
  align = "start",
  product
}: { 
  className?: string; 
  align?: "start" | "center" | "end";
  product?: { id: string; name: string; price: string; type: "book" | "tech" | "article"; image?: string; }
}) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useCommerce();
  const [copied, setCopied] = useState(false);

  const liked = product ? isInWishlist(product.id) : false;

  const handleLike = () => {
    if (!product) return;
    if (liked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.info("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const alignmentClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end"
  }[align];

  return (
    <div className={`flex items-center gap-4 ${alignmentClass} ${className}`}>
      {/* Like Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLike}
        className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 ${
          liked 
            ? "bg-accent/10 border-accent text-accent" 
            : "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={liked ? "liked" : "unliked"}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-accent" : ""}`} />
          </motion.div>
        </AnimatePresence>
        <span className="text-xs font-bold uppercase tracking-widest">
          {liked ? "Liked" : "Like"}
        </span>
      </motion.button>

      {/* Share Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-white/20 hover:text-white transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={copied ? "copied" : "idle"}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
          </motion.div>
        </AnimatePresence>
        <span className="text-xs font-bold uppercase tracking-widest">
          {copied ? "Copied" : "Share"}
        </span>
      </motion.button>
    </div>
  );
};
