import RevealOnScroll from "./RevealOnScroll";

const projects = [
  { title: "Driven", category: "Automotive Content", description: "High-octane launch campaign for a new luxury sports line.", image: "bg-surface/50" },
  { title: "Aura", category: "Brand Visuals", description: "Minimalist fashion lookbook and social assets.", image: "bg-border-sub/50" },
  { title: "Pulse", category: "Short-form Edits", description: "Viral TikTok and Reel campaigns for lifestyle brands.", image: "bg-[#111]" },
  { title: "Neon Nights", category: "Promotional Shoots", description: "Event coverage and promotional video for a music festival.", image: "bg-surface/40" },
  { title: "Horizon", category: "Creative Campaigns", description: "A cinematic documentary style brand piece.", image: "bg-[#161616]" },
  { title: "Echo", category: "Social Media Production", description: "A full month of continuous social content and engagement.", image: "bg-[#1a1a1a]" }
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs tracking-[0.2em] text-accent uppercase mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-display text-fg">Featured Projects</h3>
          </div>
          <a href="#work" className="text-sm border-b border-border hover:border-accent hover:text-accent pb-1 transition-colors uppercase tracking-widest w-max text-muted-light hidden sm:inline-flex">
            View Archive
          </a>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, i) => (
          <RevealOnScroll key={i} className="group cursor-pointer">
            <div className={`aspect-[4/3] w-full ${project.image} mb-6 overflow-hidden relative flex items-center justify-center transition-transform duration-700`}>
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              {/* Image Placeholder */}
              <span className="text-muted opacity-50 uppercase tracking-widest text-xs z-0 pointer-events-none">Image Placeholder</span>
               {/* Hover Effect scale on 'img' equivalent */}
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-0 pointer-events-none" />
            </div>
            <div>
              <div className="text-xs text-muted-light tracking-widest uppercase mb-2">{project.category}</div>
              <h4 className="text-2xl font-display text-fg mb-2">{project.title}</h4>
              <p className="text-muted-light text-sm line-clamp-2 md:pr-12">{project.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      
      <RevealOnScroll className="flex justify-center mt-20">
         <button className="px-8 py-4 border border-border text-fg hover:border-fg transition-colors duration-300 font-medium tracking-wide uppercase text-sm">
            Load More
         </button>
      </RevealOnScroll>
    </section>
  );
}
