import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, X, Trash2, ArrowRight, Package } from "lucide-react";
import { useCommerce, Product } from "@/context/CommerceContext";

export const CommerceInterface = () => {
  const { cart, wishlist, removeFromCart, removeFromWishlist } = useCommerce();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"cart" | "wishlist">("cart");

  const toggleOpen = () => setIsOpen(!isOpen);

  const totalCount = cart.length + wishlist.length;

  return (
    <>
      {/* Floating Badge */}
      <AnimatePresence>
        {totalCount > 0 && !isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleOpen}
            className="fixed bottom-8 right-8 z-[100] h-16 w-16 rounded-full bg-accent text-accent-foreground shadow-accent-glow flex items-center justify-center group"
          >
            <ShoppingCart className="h-6 w-6 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-white text-accent text-[10px] font-black flex items-center justify-center shadow-lg border-2 border-accent">
              {cart.length}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleOpen}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[110]"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#050508] border-l border-white/10 z-[120] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveTab("cart")}
                    className={`text-lg font-tech font-black tracking-tighter uppercase italic transition-colors ${activeTab === "cart" ? "text-accent" : "text-white/40"}`}
                  >
                    CART ({cart.length})
                  </button>
                  <button 
                    onClick={() => setActiveTab("wishlist")}
                    className={`text-lg font-tech font-black tracking-tighter uppercase italic transition-colors ${activeTab === "wishlist" ? "text-accent" : "text-white/40"}`}
                  >
                    WISHLIST ({wishlist.length})
                  </button>
                </div>
                <button onClick={toggleOpen} className="h-10 w-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors">
                  <X className="h-5 w-5 text-white/60" />
                </button>
              </div>

              {/* List Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence mode="popLayout">
                  {activeTab === "cart" ? (
                    cart.length > 0 ? (
                      cart.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="p-4 rounded-2xl glass border border-white/5 flex gap-4 group"
                        >
                          <div className="h-16 w-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                            ) : (
                              <Package className="h-6 w-6 text-white/20" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                            <p className="text-xs text-accent font-tech font-black tracking-widest mt-1 uppercase">{item.price}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 rounded-lg hover:bg-red-500/10 hover:text-red-500 flex items-center justify-center text-white/20 transition-all"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </motion.div>
                      ))
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30 py-20">
                        <ShoppingCart className="h-12 w-12" />
                        <p className="text-sm font-medium uppercase tracking-[0.2em]">Your cart is empty</p>
                      </div>
                    )
                  ) : (
                    wishlist.length > 0 ? (
                      wishlist.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="p-4 rounded-2xl glass border border-white/5 flex gap-4 group"
                        >
                          <div className="h-16 w-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                            ) : (
                              <Heart className="h-6 w-6 text-white/20" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                            <p className="text-xs text-white/40 uppercase tracking-widest mt-1 font-bold">{item.type}</p>
                          </div>
                          <button 
                            onClick={() => removeFromWishlist(item.id)}
                            className="h-8 w-8 rounded-lg hover:bg-red-500/10 hover:text-red-500 flex items-center justify-center text-white/20 transition-all"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </motion.div>
                      ))
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30 py-20">
                        <Heart className="h-12 w-12" />
                        <p className="text-sm font-medium uppercase tracking-[0.2em]">Your wishlist is empty</p>
                      </div>
                    )
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              {activeTab === "cart" && cart.length > 0 && (
                <div className="p-6 border-t border-white/5 bg-secondary/10 space-y-4">
                  <div className="flex items-center justify-between text-sm font-bold uppercase tracking-widest">
                    <span className="text-white/40">Estimated Total</span>
                    <span>$0.00</span>
                  </div>
                  <button className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-black uppercase tracking-widest shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    Checkout Securely <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
