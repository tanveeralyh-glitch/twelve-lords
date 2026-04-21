import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
  type: "book" | "tech" | "article";
}

interface CommerceContextType {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  isInWishlist: (productId: string) => boolean;
}

const CommerceContext = createContext<CommerceContextType | undefined>(undefined);

export const CommerceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("tl_cart");
    const savedWishlist = localStorage.getItem("tl_wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tl_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("tl_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product) => {
    if (cart.find((p) => p.id === product.id)) {
      toast.info(`${product.name} is already in your cart`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((p) => p.id !== productId));
  };

  const addToWishlist = (product: Product) => {
    if (wishlist.find((p) => p.id === product.id)) {
      toast.info(`${product.name} is already in your wishlist`);
      return;
    }
    setWishlist([...wishlist, product]);
    toast.success(`${product.name} added to wishlist`);
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(wishlist.filter((p) => p.id !== productId));
  };

  const isInCart = (productId: string) => cart.some((p) => p.id === productId);
  const isInWishlist = (productId: string) => wishlist.some((p) => p.id === productId);

  return (
    <CommerceContext.Provider 
      value={{ 
        cart, 
        wishlist, 
        addToCart, 
        removeFromCart, 
        addToWishlist, 
        removeFromWishlist,
        isInCart,
        isInWishlist
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};

export const useCommerce = () => {
  const context = useContext(CommerceContext);
  if (context === undefined) {
    throw new Error("useCommerce must be used within a CommerceProvider");
  }
  return context;
};
