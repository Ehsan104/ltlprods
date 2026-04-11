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
        
        <a href="#contact" className="hidden md:inline-flex px-6 py-3 text-xs font-bold border border-border-sub hover:border-accent hover:text-accent transition-colors rounded-full tracking-widest text-fg bg-surface/50 uppercase">
          Get in touch
        </a>
      </div>
    </header>
  );
}
