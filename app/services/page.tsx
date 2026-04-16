import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RevealOnScroll from "../../components/RevealOnScroll";
import Contact from "../../components/Contact";

export const metadata = {
  title: "Services | LTL Productions",
  description: "Videography, Photography, Ad Campaigns, Websites, and AI Receptionist services.",
};

const services = [
  {
    title: "Videography",
    description: "High-end cinematic video production tailored for modern brands. From striking commercials to engaging documentaries, our visuals speak louder.",
    image: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=1600&auto=format&fit=crop",
    tags: ["Commercials", "Documentaries", "Music Videos"]
  },
  {
    title: "Photography",
    description: "Crisp, aesthetic, and elevated imagery. We capture products, people, and places with an editorial eye that makes every shot a statement.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop",
    tags: ["Editorial", "Product", "Lifestyle"]
  },
  {
    title: "Ad Campaigns",
    description: "Strategic media buying and creation optimized for conversion. We dominate Facebook, Instagram, and Google with compelling video funnels.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600&auto=format&fit=crop",
    tags: ["Facebook Ads", "Instagram", "Google Ads"]
  },
  {
    title: "Websites",
    description: "Bespoke, cinematic web experiences. We build blazing fast, ultra-premium digital storefronts that turn your audience into clients.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["UI/UX Design", "Next.js Development", "SEO"]
  },
  {
    title: "AI Receptionist",
    description: "Never miss a lead again. We deploy incredibly smart, conversational AI systems to handle your calls, bookings, and customer inquiries 24/7.",
    image: "https://images.unsplash.com/photo-1620712948343-00842367dce4?q=80&w=1600&auto=format&fit=crop",
    tags: ["Phone Automation", "24/7 Answering", "Lead Capture"]
  }
];

export default function ServicesPage() {
  return (
    <main className="relative selection:bg-accent/30 selection:text-fg min-h-screen bg-bg">
      <div className="grain-overlay" />
      <Navbar />
      
      {/* Services Hero */}
      <section className="pt-48 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-border">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-bold">Solutions</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-fg uppercase mb-8">
            What <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>We</span> Do.
          </h1>
          <p className="text-xl md:text-2xl font-light text-fg-muted max-w-2xl leading-relaxed">
            A comprehensive suite of creative services and modern tech solutions designed to capture attention and scale your brand.
          </p>
        </RevealOnScroll>
      </section>

      {/* Services List */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {services.map((service, idx) => (
          <div key={idx} className={`flex flex-col gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <RevealOnScroll className="w-full lg:w-1/2">
               <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden group border border-border">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
               </div>
            </RevealOnScroll>
            
            <RevealOnScroll className="w-full lg:w-1/2 space-y-6">
               <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-fg uppercase">
                 {service.title}
               </h2>
               <p className="text-lg text-fg-muted font-light leading-relaxed max-w-lg">
                 {service.description}
               </p>
               <div className="flex flex-wrap gap-3 pt-4">
                 {service.tags.map((tag, i) => (
                   <span key={i} className="px-4 py-1.5 border border-border text-xs uppercase tracking-widest font-bold text-accent rounded-full bg-surface">
                     {tag}
                   </span>
                 ))}
               </div>
            </RevealOnScroll>
          </div>
        ))}
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
