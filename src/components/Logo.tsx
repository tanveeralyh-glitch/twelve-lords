import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";

export const Logo = () => (
  <Link to="/" className="flex items-center group relative h-12 md:h-14 py-1.5">
    <div className="relative h-full flex items-center justify-center px-8">
      {/* Outer rotating dashed ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 h-20 rounded-full border-[1.5px] border-dashed border-accent/40 animate-[spin_10s_linear_infinite] group-hover:border-accent/90 transition-colors duration-500 opacity-30 group-hover:opacity-100" />
      
      {/* Inner slow rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 h-14 rounded-full border border-accent/20 animate-[spin_6s_linear_reverse_infinite]" />

      {/* Actual Logo Image with continuous rotation and fixed professional size */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="relative z-10 flex items-center justify-center"
      >
        <motion.img 
          src={logoImg} 
          alt="Twelve Lords" 
          animate={{ 
            filter: ["drop-shadow(0 0 8px rgba(239,80,80,0.3))", "drop-shadow(0 0 15px rgba(239,80,80,0.6))", "drop-shadow(0 0 8px rgba(239,80,80,0.3))"]
          }}
          transition={{ 
            filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="h-8 w-8 md:h-9 md:w-9 object-contain scale-[2.2] md:scale-[2.4] transition-transform duration-500" 
        />
      </motion.div>
    </div>
  </Link>
);
