import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-bg">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-bg/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-bold">LTL Productions</span>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.9] tracking-tighter text-fg uppercase mb-8 ml-[-4px]">
            Visuals <br />
            <span className="text-transparent flex" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>
              That Speak
            </span>
            Louder.
          </h1>
        </RevealOnScroll>
        
        <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between mt-8">
          <RevealOnScroll className="max-w-md">
            <p className="text-lg md:text-xl text-fg-muted leading-relaxed font-light">
              We craft modern, visually compelling narratives for brands that refuse to blend in. Cinematic quality meets strategic execution.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="hidden md:block pb-4">
            <a href="#work" className="relative flex items-center justify-center w-36 h-36 rounded-full border border-border border-dashed hover:border-accent hover:border-solid hover:bg-surface transition-all duration-700 group overflow-hidden">
              <div className="absolute inset-0 animate-spin-slow group-hover:opacity-0 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                   <path id="curve" fill="transparent" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                   <text className="text-[12.5px] uppercase font-display tracking-widest fill-accent font-bold">
                     <textPath href="#curve"> Capture • Create • Connect •</textPath>
                   </text>
                </svg>
              </div>
              <svg className="w-6 h-6 text-fg absolute scale-0 group-hover:scale-100 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
