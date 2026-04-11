import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 to-bg z-10 pointer-events-none" />
      {/* Background visual - can be a subtle animated gradient or image placeholder */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--color-muted)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <RevealOnScroll>
          <div className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-medium">Production & Creative</div>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-tight mb-8 text-fg anim-fade-up">
            Visual Storytelling <br/>
            <span className="italic text-muted-light">Elevated.</span>
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <p className="text-lg md:text-xl text-muted-light mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            We craft modern, visually compelling narratives for brands that refuse to blend in. Cinematic quality meets strategic execution.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="flex flex-col sm:flex-row gap-6">
          <a href="#work" className="px-8 py-4 bg-fg text-bg hover:bg-accent hover:text-bg transition-colors duration-300 font-medium tracking-wide uppercase text-sm w-full sm:w-auto">
            View Our Work
          </a>
          <a href="#contact" className="px-8 py-4 border border-border text-fg hover:border-fg transition-colors duration-300 font-medium tracking-wide uppercase text-sm w-full sm:w-auto">
            Contact Us
          </a>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <p className="mt-12 text-xs text-muted-light max-w-xs mx-auto uppercase tracking-widest">
            Trusted by leading lifestyle brands
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
