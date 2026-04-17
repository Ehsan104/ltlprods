import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-12 bg-bg mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <Link href="/" className="text-3xl tracking-[0.2em] font-display font-black text-fg uppercase">LTL</Link>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 uppercase text-xs tracking-widest text-fg-muted font-bold">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/#work" className="hover:text-accent transition-colors">Work</Link>
          <Link href="/#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>
        
        <div className="text-xs text-fg-muted text-center md:text-right space-y-3 font-light">
          <a href="mailto:ltlprodsc@gmail.com" className="block hover:text-accent font-medium transition-colors uppercase tracking-widest">ltlprodsc@gmail.com</a>
          <p className="tracking-wide">&copy; 2022 LTL Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
