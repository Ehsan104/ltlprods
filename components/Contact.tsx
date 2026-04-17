"use client";
import React, { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "1104be00-5cc7-4a02-9cd5-addc85499ac3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
       console.log("Error", error);
       setResult("Something went wrong!");
    }

    setIsSubmitting(false);
    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs tracking-[0.3em] text-accent font-bold uppercase mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-accent"></span> Inquiries <span className="w-8 h-[1px] bg-accent"></span>
          </h2>
          <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-fg mb-8 uppercase">Let's create <br/> <span className="text-accent">together.</span></h3>
          <p className="text-fg-muted font-light text-lg">
            Have a project in mind? Fill out the form below or reach us directly at{" "}
            <a href="mailto:ltlprodsc@gmail.com" className="text-fg hover:text-accent font-medium transition-colors border-b border-fg hover:border-accent pb-0.5">ltlprodsc@gmail.com</a>
          </p>
        </div>
      </RevealOnScroll>

      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <form className="space-y-12" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-3 relative group">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-fg-muted block font-bold">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full bg-transparent border-b border-border py-4 text-fg placeholder-muted focus:outline-none focus:border-accent transition-colors duration-300 font-light" 
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-3 relative group">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-fg-muted block font-bold">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full bg-transparent border-b border-border py-4 text-fg placeholder-muted focus:outline-none focus:border-accent transition-colors duration-300 font-light" 
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-3 relative">
              <label htmlFor="project" className="text-xs uppercase tracking-widest text-fg-muted block font-bold">Project Type</label>
              <select 
                id="project" 
                name="project"
                defaultValue=""
                className="w-full bg-transparent border-b border-border py-4 text-fg focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer font-light"
                required
              >
                <option value="" disabled className="text-muted">Select an option</option>
                <option value="commercial" className="text-bg bg-fg">Commercial Video</option>
                <option value="social" className="text-bg bg-fg">Social Media Content</option>
                <option value="photography" className="text-bg bg-fg">Photography</option>
                <option value="other" className="text-bg bg-fg">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 top-8 flex items-center px-2 text-accent">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-fg-muted block font-bold">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-border py-4 text-fg placeholder-muted focus:outline-none focus:border-accent transition-colors duration-300 resize-none font-light" 
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <div className="pt-8">
               <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-fg text-bg py-5 uppercase tracking-[0.2em] text-xs font-black hover:bg-accent hover:text-bg transition-colors duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                 {isSubmitting ? "Sending..." : "Submit Inquiry"}
               </button>
               {result && (
                 <p className="text-center mt-4 text-sm tracking-widest uppercase font-bold text-accent">
                   {result}
                 </p>
               )}
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
