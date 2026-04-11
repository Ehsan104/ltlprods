import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  const points = [
    { title: "Creative Direction", desc: "Crafting unique visual identities and compelling narratives that resonate." },
    { title: "Professional Editing", desc: "Precision cutting, color grading, and sound design for a polished final product." },
    { title: "Reliable Communication", desc: "Clear, transparent, and collaborative processes from concept to delivery." }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <RevealOnScroll>
          <h2 className="text-xs tracking-[0.2em] text-accent uppercase mb-4">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-display text-fg mb-8 leading-tight">
            We are a creative collective focused on <span className="italic text-muted-light">high-quality visual storytelling, branded content, and production.</span>
          </h3>
          <p className="text-muted-light leading-relaxed mb-8">
            LTL Productions is driven by the belief that every brand has a unique story waiting to be told. We blend cinematic techniques with modern design aesthetics to create media that not only looks beautiful, but also converts and builds lasting connections.
          </p>
          <a href="#contact" className="text-sm border-b border-border hover:border-accent hover:text-accent pb-1 transition-colors uppercase tracking-widest w-max text-fg">
            Work With Us
          </a>
        </RevealOnScroll>

        <div className="space-y-12">
          {points.map((point, i) => (
            <RevealOnScroll key={i} className="border-l border-border pl-6 relative group cursor-default">
              <div className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-accent transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />
              <h4 className="text-lg font-medium text-fg mb-2 font-display tracking-wide">{point.title}</h4>
              <p className="text-muted-light text-sm leading-relaxed">{point.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
