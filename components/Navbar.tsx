"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-bg/80 backdrop-blur-xl border-border py-4" : "bg-transparent border-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl tracking-[0.2em] font-display font-black text-fg uppercase">LTL</a>
        
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-bold tracking-widest text-fg-muted hover:text-accent transition-colors uppercase">
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="https://www.instagram.com/ltlprods/" target="_blank" rel="noopener noreferrer" className="text-fg hover:text-accent transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#contact" className="px-6 py-3 text-xs font-bold border border-border-sub hover:border-accent hover:text-accent transition-colors rounded-full tracking-widest text-fg bg-surface/50 uppercase">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
