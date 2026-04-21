import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Olivia Hart", role: "Essayist", text: "Inkwell completely changed how I think about publishing. The editor feels like writing in a notebook." },
  { name: "Marcus Lee", role: "Engineer", text: "The cleanest reading experience on the web. I finally read full essays again." },
  { name: "Sara Okafor", role: "Designer", text: "Beautiful typography, thoughtful defaults, and a community that actually reads." },
  { name: "Theo Martin", role: "Founder", text: "We grew our blog 4x in two months after switching. The analytics are excellent." },
  { name: "Elena Rossi", role: "Journalist", text: "It feels premium without trying too hard. Every detail is considered." },
  { name: "Jordan Park", role: "Author", text: "I publish weekly here and the engagement is unlike any other platform." },
];

const Card = ({ t }: { t: typeof testimonials[number] }) => (
  <div className="w-[340px] shrink-0 glass rounded-2xl p-6 mx-3 shadow-glass">
    <Quote className="h-7 w-7 text-accent mb-3" />
    <p className="text-foreground/90 text-[15px] leading-relaxed">"{t.text}"</p>
    <div className="mt-5 flex items-center justify-between">
      <div>
        <div className="font-semibold">{t.name}</div>
        <div className="text-xs text-muted-foreground">{t.role}</div>
      </div>
      <div className="flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="container-tight text-center mb-14">
        <span className="text-accent text-sm font-semibold tracking-widest uppercase">Testimonials</span>
        <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl">
          Loved by <span className="text-gradient-accent">writers everywhere</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {row.map((t, i) => <Card key={i} t={t} />)}
        </div>
        <div className="flex animate-marquee mt-6" style={{ animationDirection: "reverse", animationDuration: "50s" }}>
          {row.map((t, i) => <Card key={`b-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
};
