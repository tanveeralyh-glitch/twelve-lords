import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";

export const Logo = () => (
  <Link to="/" className="flex items-center group relative h-14 md:h-18 py-1">
    <div className="relative h-full flex items-center justify-center px-8">
      {/* Actual Logo Image - Static */}
      <div className="relative z-10 flex items-center justify-center">
        <img 
          src={logoImg} 
          alt="Twelve Lords" 
          className="h-10 w-10 md:h-12 md:w-12 object-contain scale-[3.2] md:scale-[4.0] transition-transform duration-500" 
        />
      </div>
    </div>
  </Link>
);
