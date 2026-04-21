import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";

export const Logo = () => (
  <Link to="/" className="flex items-center group relative h-16 md:h-20 py-2">
    <div className="relative h-full flex items-center justify-center px-12">
      {/* Outer rotating dashed ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 h-32 rounded-full border-[1.5px] border-dashed border-accent/40 animate-[spin_10s_linear_infinite] group-hover:border-accent/90 transition-colors duration-500 opacity-30 group-hover:opacity-100" />
      
      {/* Inner slow rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 h-24 rounded-full border border-accent/20 animate-[spin_6s_linear_reverse_infinite]" />

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
          className="h-10 w-10 md:h-12 md:w-12 object-contain scale-[3.2] md:scale-[3.8] transition-transform duration-500" 
        />
      </motion.div>
    </div>
  </Link>
);
