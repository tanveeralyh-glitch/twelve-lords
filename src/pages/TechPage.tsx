import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ShieldCheck, 
  ShieldAlert, 
  Zap, 
  Globe, 
  Lock, 
  Shield, 
  Settings, 
  Battery, 
  Cpu, 
  Layers, 
  Fingerprint,
  Info,
  ShoppingCart,
  Heart
} from "lucide-react";
import { useCommerce } from "@/context/CommerceContext";


// The Cyber Cable Hero Image
const cyberCableImg = "/cyber-cable.png";

const threats = [
  {
    icon: ShieldAlert,
    title: "Juice Jacking",
    desc: "Malicious charging stations or ports attempting to install malware or extract sensitive data during charging.",
  },
  {
    icon: Zap,
    title: "HID Injection Attacks",
    desc: "Compromised connections emulating input devices such as keyboards to execute unauthorized commands on the target device.",
  },
  {
    icon: Globe,
    title: "Data Interception",
    desc: "Unsecured connections that allow data to be monitored or captured during transfer.",
  },
];

const specifications = [
  { k: "Protocols", v: "USB-A to Lightning / USB-C, USB-C to USB-C" },
  { k: "Power", v: "Up to 60W PD Fast Charging" },
  { k: "Length", v: "1 Meter / 2 Meters" },
  { k: "Design", v: "Reinforced Armor Shielding" },
  { k: "Colors", v: "Black / White" },
  { k: "Modes", v: "Charge-Only / Data (Manual Switch)" },
];

const techSections = [
  {
    id: "intro",
    title: "Our Technology",
    text: "At Twelve Lords, we design hardware with security at its core. The Cyber Cable is built to address a fundamental weakness in modern connectivity: the automatic trust placed in USB connections."
  },
  {
    id: "philosophy",
    title: "Development Philosophy",
    text: "Developed by cybersecurity engineers and hardware specialists, we identified consistent risks in public charging environments. The Cyber Cable introduces hardware-enforced security that separates charging from data communication."
  }
];

const architectureItems = [
  {
    title: "Default Charge-Only Mode",
    desc: "Data lines are physically isolated, allowing power delivery while preventing any form of data exchange.",
    icon: Shield
  },
  {
    title: "Controlled Data Enablement",
    desc: "Data transfer can be enabled intentionally by the user, ensuring communication only occurs under trusted conditions.",
    icon: Lock
  },
  {
    title: "Hardware-Level Enforcement",
    desc: "Security is implemented within the cable itself, making it independent of software configurations or OS vulnerabilities.",
    icon: Cpu
  }
];

const TechPage = () => {
  const { addToCart, isInCart, addToWishlist, removeFromWishlist, isInWishlist } = useCommerce();

  const product = {
    id: "cyber-cable-001",
    name: "Twelve Lords Cyber Cable",
    price: "$129.00",
    type: "tech" as const,
    image: cyberCableImg
  };

  const inCart = isInCart(product.id);
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="min-h-screen bg-[#020204] text-white overflow-x-hidden font-inter">
      <Navbar />
      
      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="container-tight pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-accent font-tech text-[10px] font-bold uppercase tracking-[0.3em]">
                <Fingerprint className="h-4 w-4" /> Hardware Secured
              </div>
              
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-tech font-black tracking-tighter leading-none text-white uppercase italic">
                  CYBER <br />
                  <span className="text-gradient-accent text-glow">CABLE</span>
                </h1>
              </div>

              <p className="text-xl font-medium text-white/60 leading-relaxed max-w-lg">
                Secure Charging. Controlled Data. Total Protection.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => addToCart(product)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all ${
                    inCart 
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 cursor-default" 
                      : "bg-accent text-accent-foreground shadow-accent-glow hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {inCart ? "In Your Cart" : "Add to Cart"}
                </button>
                
                <button
                  onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl border font-black uppercase tracking-widest transition-all ${
                    inWishlist
                      ? "bg-accent/10 border-accent/30 text-accent"
                      : "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${inWishlist ? "fill-accent" : ""}`} />
                  {inWishlist ? "Saved" : "Wishlist"}
                </button>
              </div>


              <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="font-tech text-[11px] text-accent font-bold tracking-widest uppercase">Encryption Type</span>
                  <span className="text-sm font-medium text-white/40">Physical Isolation</span>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-tech text-[11px] text-accent font-bold tracking-widest uppercase">Security Level</span>
                  <span className="text-sm font-medium text-white/40">Hardware-Enforced</span>
                </div>
              </div>
            </motion.div>

            {/* HERO PRODUCT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-2xl mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 bg-accent/20 blur-[160px] rounded-full opacity-40 animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(239,80,80,0.15)] group aspect-[4/3] md:aspect-auto">
                 <div className="absolute inset-0 scan-line z-20 pointer-events-none" />
                 <img 
                    src={cyberCableImg} 
                    alt="Twelve Lords Cyber Cable" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 />
                 {/* Product Info Overlays */}
                 <div className="absolute top-12 right-12 font-tech text-[10px] text-accent/50 uppercase tracking-[0.5em] transform rotate-90 origin-right">Serial: TL-CC-2026</div>
                 <div className="absolute bottom-12 left-12 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(239,80,80,0.8)]" />
                    <span className="font-tech text-xs text-accent font-black uppercase tracking-[0.2em]">Active Protection Mode</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTRODUCTION & PHILOSOPHY */}
        <section className="bg-secondary/20 py-32 relative border-y border-white/5">
           <div className="container-tight grid lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                 <span className="font-tech text-xs font-black text-accent uppercase tracking-[0.4em]">Technology Hub</span>
                 <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Introduction — <br/>Our Technology</h2>
                 <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                    Conventional cables allow unrestricted power and data flow, exposing devices to potential threats the moment they 
                    are plugged into an unknown source. The Cyber Cable introduces a hardware-enforced security architecture that separates 
                    charging from data communication, ensuring that your device only exchanges data when explicitly authorized.
                 </p>
                 <div className="p-6 rounded-2xl glass border border-white/10 text-white/80 italic font-medium">
                    "This approach transforms a simple accessory into a controlled security interface."
                 </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                 <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Development <br/>Philosophy</h2>
                 <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                    The Cyber Cable was developed by a team of cybersecurity engineers and hardware specialists focused on real-world 
                    attack vectors affecting everyday users. Through analysis of public charging environments such as airports, hotels, 
                    and shared workspaces, we identified a consistent risk: devices are vulnerable at the point of connection.
                 </p>
                 <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                    To address this, we engineered a cable that enforces security at the physical layer. By controlling internal data pathways, 
                    the Cyber Cable eliminates unauthorized communication at the source.
                 </p>
              </motion.div>
           </div>
        </section>

        {/* THREAT LANDSCAPE */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="container-tight">
             <div className="text-center mb-20 space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-tech font-black uppercase italic tracking-tighter"
                >
                  Threat <span className="text-gradient-accent">Landscape</span>
                </motion.h2>
                <p className="text-white/40 font-tech text-xs uppercase tracking-[0.5em]">Real-world vulnerability mapping</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8 mb-20">
                {threats.map((threat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-3xl glass border border-white/5 hover:border-accent/40 transition-all duration-500 group"
                  >
                     <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <threat.icon className="h-6 w-6" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{threat.title}</h3>
                     <p className="text-white/40 leading-relaxed text-sm">{threat.desc}</p>
                  </motion.div>
                ))}
             </div>

             <div className="p-8 rounded-3xl bg-accent/5 border border-accent/10 flex flex-col items-center justify-center text-center space-y-4 max-w-3xl mx-auto">
                 <Info className="h-5 w-5 text-accent" />
                 <p className="text-accent/80 font-tech text-[10px] uppercase font-black tracking-[0.3em]">Critical Exposure Alert</p>
                 <p className="text-sm text-white/60">
                    These threats are most commonly encountered in environments such as airports, hotels, cafés, and other public or shared charging locations.
                 </p>
             </div>
          </div>
        </section>

        {/* SECURE DESIGN ARCHITECTURE */}
        <section className="py-32 bg-[#050508] border-y border-white/5">
           <div className="container-tight grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                 <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-tech font-black tracking-tighter italic uppercase"
                 >
                    Secure Design <br/> <span className="text-gradient-accent">Architecture</span>
                 </motion.h2>
                 <p className="text-white/50 text-lg">
                    The Cyber Cable is engineered with a hardware-level control mechanism that governs data transmission independently of power delivery.
                 </p>
                 <div className="space-y-6">
                    {architectureItems.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 group"
                      >
                         <div className="shrink-0 h-14 w-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                            <item.icon className="h-6 w-6" />
                         </div>
                         <div>
                            <h4 className="text-lg font-bold mb-1 uppercase tracking-tight">{item.title}</h4>
                            <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-12 glass rounded-[3rem] border border-white/10 space-y-8 overflow-hidden"
              >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Layers className="h-40 w-40" />
                  </div>
                  <h3 className="text-2xl font-tech font-black uppercase italic tracking-widest">Hardware Layer Enforcement</h3>
                  <div className="space-y-6 relative z-10">
                      <p className="text-white/60 leading-relaxed italic">
                        "By keeping data pathways inactive unless required, the cable significantly reduces exposure to USB-based threats."
                      </p>
                      <div className="flex items-center gap-4 py-4 border-y border-white/5 uppercase">
                         <div className="text-center flex-1">
                            <div className="font-tech text-accent text-[10px] font-black mb-1 tracking-widest">DEFAULT</div>
                            <div className="text-xs font-bold text-white/50">PROTECTED</div>
                         </div>
                         <div className="h-10 w-px bg-white/10" />
                         <div className="text-center flex-1">
                            <div className="font-tech text-accent text-[10px] font-black mb-1 tracking-widest">STATUS</div>
                            <div className="text-xs font-bold text-white/50">SHIELDED</div>
                         </div>
                      </div>
                      <p className="text-[11px] text-white/30 uppercase tracking-widest leading-loose">
                        Absence of an active data channel prevents any attempt at communication, eliminating the possibility of unauthorized access.
                      </p>
                  </div>
              </motion.div>
           </div>
        </section>

        {/* PRODUCT SPECIFICATIONS */}
        <section className="py-32 bg-background">
          <div className="container-tight">
             <div className="mb-16">
                <h2 className="text-3xl font-tech font-black uppercase italic tracking-widest mb-2">Product Specifications</h2>
                <div className="h-1 w-20 bg-accent" />
             </div>

             <div className="grid lg:grid-cols-[1fr_400px] gap-20">
                <div className="grid md:grid-cols-2 gap-y-12 gap-x-16">
                   <div>
                      <h4 className="font-tech text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Cable Variants</h4>
                      <ul className="space-y-2 text-white/60 font-medium">
                         <li>• USB-A to Lightning</li>
                         <li>• USB-A to USB-C</li>
                         <li>• USB-C to Lightning</li>
                         <li>• USB-C to USB-C</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-tech text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Power Delivery</h4>
                      <ul className="space-y-2 text-white/60 font-medium">
                         <li>• Up to 60W fast charging</li>
                         <li>• Smartphone / Tablet / Laptop support</li>
                         <li>• Smart current management</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-tech text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Build Quality</h4>
                      <ul className="space-y-2 text-white/60 font-medium">
                         <li>• Reinforced Armor Structure</li>
                         <li>• High-quality internal shielding</li>
                         <li>• Military-grade durability</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-tech text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">Configurations</h4>
                      <ul className="space-y-2 text-white/60 font-medium">
                         <li>• Length: 1 meter / 2 meters</li>
                         <li>• Colors: Midnight Black / Polar White</li>
                         <li>• Warranty: Limited Lifetime</li>
                      </ul>
                   </div>
                </div>

                <div className="space-y-8">
                   <div className="p-8 rounded-3xl glass border border-white/10 space-y-6">
                      <h4 className="font-tech text-xs font-black text-accent uppercase tracking-widest mb-4">Operational Modes</h4>
                      <div className="space-y-4">
                         <div className="flex gap-4">
                            <div className="shrink-0 h-10 w-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-black text-xs">C</div>
                            <div>
                               <div className="font-bold text-sm uppercase">Charge-Only (Default)</div>
                               <div className="text-xs text-white/40">Data disabled, power enabled.</div>
                            </div>
                         </div>
                         <div className="flex gap-4">
                            <div className="shrink-0 h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center font-black text-xs">D</div>
                            <div>
                               <div className="font-bold text-sm uppercase">Data Mode (User-Controlled)</div>
                               <div className="text-xs text-white/40">Temporary enabled for trusted links.</div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="p-8 rounded-3xl bg-secondary/30 border border-white/5">
                       <Battery className="h-6 w-6 text-accent mb-4" />
                       <p className="text-sm font-medium text-white/60 leading-relaxed uppercase">
                          The Twelve Lords Cyber Cable is a security-focused connectivity solution designed to protect devices at the hardware level.
                       </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* POSITIONING STATEMENT */}
        <section className="py-32 mb-20">
           <div className="container-tight text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto space-y-12"
              >
                  <div className="inline-block p-4 glass rounded-full px-8 text-accent font-tech text-xs font-black uppercase tracking-[0.5em] border border-accent/20">十二位領主 | Hardware-Level Protection</div>
                  <h2 className="text-3xl md:text-5xl font-tech font-black uppercase tracking-tighter italic leading-snug">
                     "BY SEPARATING POWER FROM DATA AND INTRODUCING CONTROLLED COMMUNICATION, IT ELIMINATES UNNECESSARY EXPOSURE."
                  </h2>
                  <p className="font-tech text-[10px] text-white/30 uppercase tracking-[1em] pb-10">— Twelve Lords Positioning Statement</p>
              </motion.div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechPage;
