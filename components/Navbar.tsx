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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-bg/90 backdrop-blur-md border-border py-4" : "bg-transparent border-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-xl tracking-widest font-display font-medium text-fg uppercase">LTL</a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium tracking-wide text-muted-light hover:text-fg transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        
        <a href="#contact" className="hidden md:inline-flex px-5 py-2 text-sm border border-border-sub hover:border-accent hover:text-accent transition-colors rounded-sm tracking-widest uppercase text-muted-light bg-surface/50">
          Get in touch
        </a>
      </div>
    </header>
  );
}
