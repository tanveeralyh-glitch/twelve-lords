import { motion } from "framer-motion";

const rings = [
  { size: 200, duration: 12, delay: 0, opacity: 0.15 },
  { size: 280, duration: 16, delay: 1, opacity: 0.1 },
  { size: 360, duration: 20, delay: 2, opacity: 0.07 },
];

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  angle: (i / 18) * 360,
  radius: 90 + (i % 3) * 40,
  size: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
  duration: 3 + (i % 5),
  delay: i * 0.3,
}));

const dataNodes = [
  { x: "15%", y: "18%", label: "ENC", value: "AES-256" },
  { x: "72%", y: "14%", label: "SRC", value: "ISOLAT" },
  { x: "78%", y: "72%", label: "AUTH", value: "LOCKED" },
  { x: "8%",  y: "70%", label: "THREAT", value: "0 ACTIVE" },
];

const codeLines = [
  "0x4A3F :: DATA_LOCK",
  "0x1B9C :: AUTH_PASS",
  "0x8E21 :: LINK_OFF",
  "0xCC44 :: SCAN_OK",
  "0x77FA :: SECURE",
];

export const CyberIllustration = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#050508]">

      {/* Deep radial backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(220,40,40,0.12) 0%, rgba(60,10,10,0.25) 40%, #050508 80%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated horizontal scan line */}
      <motion.div
        className="absolute inset-x-0 h-[1px] pointer-events-none z-20"
        style={{ background: "linear-gradient(90deg, transparent, rgba(220,40,40,0.4), transparent)" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* Pulsing outer rings */}
      {rings.map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-red-500/20"
          style={{
            width: r.size,
            height: r.size,
            top: "50%",
            left: "50%",
            marginTop: -r.size / 2,
            marginLeft: -r.size / 2,
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [r.opacity, r.opacity * 1.8, r.opacity] }}
          transition={{ duration: r.duration, repeat: Infinity, ease: "easeInOut", delay: r.delay }}
        />
      ))}

      {/* Rotating dashed orbit */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          top: "50%",
          left: "50%",
          marginTop: -100,
          marginLeft: -100,
          border: "1px dashed rgba(220,40,40,0.25)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbit particles */}
      {particles.slice(0, 8).map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const cx = Math.cos(rad) * 100 + 50;
        const cy = Math.sin(rad) * 100 + 50;
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-red-400"
            style={{
              width: p.size,
              height: p.size,
              left: `calc(${cx}% - ${p.size / 2}px)`,
              top: `calc(${cy}% - ${p.size / 2}px)`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.5, 0.8] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        );
      })}

      {/* Central Shield / Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(220,40,40,0.35) 0%, transparent 70%)" }}
          />

          {/* Shield SVG */}
          <svg
            viewBox="0 0 80 90"
            className="relative z-10"
            width={72}
            height={82}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M40 4 L72 18 L72 46 C72 64 56 78 40 86 C24 78 8 64 8 46 L8 18 Z"
              stroke="rgba(220,40,40,0.9)"
              strokeWidth="1.5"
              fill="rgba(220,40,40,0.07)"
              animate={{ strokeOpacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            {/* Lock icon inside shield */}
            <path
              d="M32 44 L48 44 L48 54 L32 54 Z M35 44 L35 40 C35 37 37 35 40 35 C43 35 45 37 45 40 L45 44"
              stroke="rgba(220,80,80,0.8)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="40" cy="49" r="1.5" fill="rgba(220,80,80,0.9)" />
          </svg>
        </motion.div>
      </div>

      {/* Floating data nodes */}
      {dataNodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
        >
          <div
            className="px-2 py-1 rounded"
            style={{
              background: "rgba(10,5,5,0.75)",
              border: "1px solid rgba(220,40,40,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ fontFamily: "'Orbitron', monospace" }} className="text-[7px] text-red-400/60 font-bold uppercase leading-none">{node.label}</div>
            <div style={{ fontFamily: "'Orbitron', monospace" }} className="text-[9px] text-red-300/90 font-black leading-tight">{node.value}</div>
          </div>
          {/* Connector line to center */}
          <svg className="absolute top-1/2 left-1/2 pointer-events-none" style={{ width: 60, height: 60, overflow: "visible", transform: "translate(-50%,-50%)" }}>
            <line x1="0" y1="0" x2={i % 2 === 0 ? 40 : -40} y2={i < 2 ? 30 : -30}
              stroke="rgba(220,40,40,0.15)" strokeWidth="0.5" strokeDasharray="3 3" />
          </svg>
        </motion.div>
      ))}

      {/* Right side — scrolling code stream */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[90px] flex flex-col justify-start pt-4 px-2 gap-[10px] overflow-hidden"
        style={{ maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)" }}
      >
        {codeLines.concat(codeLines).map((line, i) => (
          <motion.div
            key={i}
            style={{ fontFamily: "'Orbitron', monospace" }}
            className="text-[7px] text-red-900/70 font-bold uppercase leading-none whitespace-nowrap"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Bottom stat bar */}
      <div
        className="absolute bottom-0 inset-x-0 py-2 px-4 flex items-center justify-between"
        style={{ background: "rgba(5,5,8,0.85)", borderTop: "1px solid rgba(220,40,40,0.12)" }}
      >
        {[
          ["THREATS", "0 DETECTED"],
          ["STATUS", "SECURED"],
          ["LINK", "ISOLATED"],
        ].map(([k, v]) => (
          <div key={k} className="text-center">
            <div style={{ fontFamily: "'Orbitron', monospace" }} className="text-[7px] text-red-400/40 uppercase font-bold">{k}</div>
            <div style={{ fontFamily: "'Orbitron', monospace" }} className="text-[9px] text-red-300/80 font-black">{v}</div>
          </div>
        ))}
        {/* Animated pulse indicator */}
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-red-500"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span style={{ fontFamily: "'Orbitron', monospace" }} className="text-[7px] text-red-400/50 uppercase font-bold">LIVE</span>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)" }}
      />
    </div>
  );
};
