"use client";
import RevealOnScroll from "./RevealOnScroll";
import Link from "next/link";

const coreServices = [
  "Videography",
  "Photography",
  "Ad Campaigns",
  "Websites",
  "AI Agents",
  "AI SEO"
];

export default function ServicesSnippet() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-bg border-b border-border">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-fg uppercase">Our Expertise</h3>
          </div>
          <Link href="/services" className="text-sm border-b pb-1 border-border hover:border-accent transition-colors uppercase tracking-widest font-bold text-fg-muted inline-flex items-center gap-2 group">
            View All Services
            <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:text-accent transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreServices.map((service, idx) => (
          <RevealOnScroll key={idx}>
            <Link href="/services" className="block group border border-border p-10 rounded-[2rem] hover:border-accent/50 hover:bg-surface/50 transition-all duration-500 relative overflow-hidden">
              <h4 className="text-2xl md:text-3xl font-display font-black text-fg uppercase tracking-wide group-hover:text-accent transition-colors relative z-10">
                {service}
              </h4>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </RevealOnScroll>
        ))}
      </div>
      
      <RevealOnScroll>
        <div className="mt-20 flex justify-center">
            <Link href="/services" className="bg-fg text-bg py-5 px-10 uppercase tracking-[0.2em] text-xs font-black hover:bg-accent hover:text-bg transition-colors duration-300 rounded-full">
                Discover How We Can Help
            </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
