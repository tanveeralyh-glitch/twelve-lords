import React from 'react';
import { motion } from 'framer-motion';

export const CyberGrid = () => {
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #FDB511 1px, transparent 1px), linear-gradient(to bottom, #FDB511 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Animated Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
      
      {/* Floating Data Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#FDB511" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${-100} ${100 + i * 150} L ${2000} ${100 + i * 150}`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.4, 0],
              x: [-100, 100]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Vertical Data Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={`v-${i}`}
            d={`M ${150 + i * 250} ${-100} L ${150 + i * 250} ${1200}`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            fill="transparent"
            style={{ rotate: 90 }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.3, 0],
              y: [-100, 100]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.7
            }}
          />
        ))}
      </svg>

      {/* Floating Nodes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#FDB511]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
    </div>
  );
};
