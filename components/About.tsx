import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  const points = [
    { title: "Direction", desc: "Crafting unique visual identities and narratives." },
    { title: "Production", desc: "Precision cinematography and high-end lighting." },
    { title: "Post", desc: "Expert color grading, sound design, and sharp cuts." }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-surface border-y border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative z-10">
        <RevealOnScroll className="lg:w-1/2">
          <h2 className="text-xs tracking-[0.3em] text-accent font-bold uppercase mb-6 flex items-center gap-4">
            <span className="w-10 h-[1px] bg-accent"></span> Agency
          </h2>
          <h3 className="text-5xl md:text-6xl font-display font-black tracking-tighter text-fg mb-10 leading-[1] uppercase">
            A collective focused on <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>high-end production.</span>
          </h3>
          <p className="text-fg-muted text-lg leading-relaxed mb-10 max-w-lg font-light">
            LTL Productions is driven by the belief that every brand has a unique story waiting to be told. We blend cinematic techniques with modern design aesthetics to create media that not only looks beautiful, but also converts.
          </p>
          <a href="#contact" className="inline-flex items-center gap-4 group">
            <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
               <svg className="w-4 h-4 text-fg group-hover:text-bg transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
            <span className="text-sm font-bold tracking-widest uppercase text-fg group-hover:text-accent transition-colors">Work With Us</span>
          </a>
        </RevealOnScroll>

        <div className="lg:w-1/2 w-full pt-8 lg:pt-16 space-y-10">
          {points.map((point, i) => (
            <RevealOnScroll key={i} className="group border-b border-border pb-8 block">
              <h4 className="text-3xl md:text-4xl font-display font-bold text-fg mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-300 flex items-center justify-between">
                {point.title}
                <span className="text-sm font-sans tracking-widest text-accent/40 font-normal">0{i+1}</span>
              </h4>
              <p className="text-fg-muted font-light relative pl-4 border-l border-transparent group-hover:border-accent transition-colors duration-300">{point.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
