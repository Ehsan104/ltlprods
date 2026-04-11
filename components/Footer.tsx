export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-12 bg-bg mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <a href="#home" className="text-3xl tracking-[0.2em] font-display font-black text-fg uppercase">LTL</a>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 uppercase text-xs tracking-widest text-fg-muted font-bold">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        
        <div className="text-xs text-fg-muted text-center md:text-right space-y-3 font-light">
          <a href="mailto:ltlprodsc@gmail.com" className="block hover:text-accent font-medium transition-colors uppercase tracking-widest">ltlprodsc@gmail.com</a>
          <p className="tracking-wide">&copy; {new Date().getFullYear()} LTL Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
