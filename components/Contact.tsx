"use client";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/50">
      <RevealOnScroll>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs tracking-[0.2em] text-accent uppercase mb-4">Inquiries</h2>
          <h3 className="text-4xl md:text-5xl font-display text-fg mb-6">Let's create something extraordinary.</h3>
          <p className="text-muted-light">
            Have a project in mind? Fill out the form below or prefer email? Reach us directly at{" "}
            <a href="mailto:ltlprodsc@gmail.com" className="text-fg hover:text-accent transition-colors underline underline-offset-4">ltlprodsc@gmail.com</a>
          </p>
        </div>
      </RevealOnScroll>

      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-light block">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-border py-3 text-fg placeholder-muted focus:outline-none focus:border-accent transition-colors duration-300" 
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-light block">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-border py-3 text-fg placeholder-muted focus:outline-none focus:border-accent transition-colors duration-300" 
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2 relative">
              <label htmlFor="project" className="text-xs uppercase tracking-widest text-muted-light block">Project Type</label>
              <select 
                id="project" 
                defaultValue=""
                className="w-full bg-transparent border-b border-border py-3 text-fg focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer"
                required
              >
                <option value="" disabled className="text-muted">Select an option</option>
                <option value="commercial" className="text-bg bg-fg">Commercial Video</option>
                <option value="social" className="text-bg bg-fg">Social Media Content</option>
                <option value="photography" className="text-bg bg-fg">Photography</option>
                <option value="other" className="text-bg bg-fg">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-muted">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-light block">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-fg placeholder-muted focus:outline-none focus:border-accent transition-colors duration-300 resize-none" 
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button type="submit" className="w-full bg-fg text-bg py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent hover:text-bg transition-colors duration-300 mt-4">
              Submit Inquiry
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
