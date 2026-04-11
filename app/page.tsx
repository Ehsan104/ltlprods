import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative selection:bg-accent/30 selection:text-fg min-h-screen">
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
