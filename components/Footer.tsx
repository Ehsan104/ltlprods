export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6 md:px-12 bg-surface/30 backdrop-blur-sm mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#home" className="text-2xl tracking-widest font-display font-medium text-fg uppercase">LTL</a>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 uppercase text-xs tracking-widest text-muted-light">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        
        <div className="text-xs text-muted-light text-center md:text-right space-y-2">
          <a href="mailto:ltlprodsc@gmail.com" className="block hover:text-accent transition-colors">ltlprodsc@gmail.com</a>
          <p>&copy; {new Date().getFullYear()} LTL Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
