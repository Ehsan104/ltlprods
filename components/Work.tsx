"use client";
import { useRef } from "react";
import RevealOnScroll from "./RevealOnScroll";

const projects = [
  { title: "Signture Shine Detailing", category: "Automive", video: "/details.mp4" },
  { title: "Miftaah Institute", category: "Brand Visuals", video: "/miftaah.mp4" },
  { title: "Suvai Taste of India", category: "Short-form", video: "/restaurant.mp4" },
  { title: "Smasherz", category: "Promo", video: "/smasherz.mp4" },
];

function ProjectCard({ project, i }: { project: any, i: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { }); // Catch prevents console errors if user mouses out rapidly
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <RevealOnScroll className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-32' : ''}`}>
      <div
        className="aspect-[4/5] rounded-[2.5rem] w-full bg-surface mb-8 overflow-hidden relative flex items-center justify-center border border-border group-hover:border-accent/30 transition-colors duration-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-100"
        >
          <source src={project.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/30 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />

        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 pb-10 px-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <span className="inline-block px-4 py-1.5 border border-accent/50 text-accent text-[10px] tracking-widest uppercase rounded-full mb-3 backdrop-blur-md font-bold">Play Reel</span>
          </div>
        </div>
      </div>

      <div className="px-2 pt-2">
        <h4 className="text-3xl md:text-5xl font-display font-black tracking-tight text-fg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fg group-hover:to-accent transition-all duration-300">
          {project.title}
        </h4>
      </div>
    </RevealOnScroll>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-bg">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div>
            <h2 className="text-xs tracking-[0.3em] text-accent font-bold uppercase mb-6 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-accent"></span> Selected Work
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-fg uppercase">Featured<br />Projects</h3>
          </div>
          <a href="#work" className="text-sm border-b pb-1 border-border hover:border-accent transition-colors uppercase tracking-widest font-bold text-fg-muted inline-flex items-center gap-2 group">
            View Archive
            <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:text-accent transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
