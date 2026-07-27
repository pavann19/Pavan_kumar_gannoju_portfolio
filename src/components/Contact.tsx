"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Send, Mail, MapPin, CheckCircle, XCircle } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export function Contact() {
  const [state, handleSubmit] = useForm("xvzedbzk");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      // Optional: hide success message after 5 seconds and let them send another
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader 
          title="Initiate Contact" 
          subtitle="Interested in backend architecture, AI systems, or scalable software engineering? Let's connect."
        />

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <GlassCard className="p-6 sm:p-8 h-full" delay={0.1}>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-8">Direct Channels</h3>
              <div className="space-y-6">
                <a href="mailto:pavangannoju.germany@gmail.com" className="flex items-center gap-4 text-[#cbd5e1] hover:text-[#60a5fa] transition-colors group">
                  <div className="p-3 bg-[#1e293b] rounded-xl border border-[#334155] group-hover:border-[#3b82f6] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">pavangannoju.germany@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-[#cbd5e1]">
                  <div className="p-3 bg-[#1e293b] rounded-xl border border-[#334155]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">Hyderabad, India</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form */}
          <div className="w-full md:w-2/3">
            <GlassCard className="p-6 sm:p-8 md:p-12" delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full bg-transparent border-b-2 border-[#334155] px-0 py-3 text-[#f8fafc] focus:outline-none focus:border-[#60a5fa] transition-colors peer placeholder-transparent"
                      placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-[#cbd5e1] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#60a5fa]">
                      Name
                    </label>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1 absolute" />
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full bg-transparent border-b-2 border-[#334155] px-0 py-3 text-[#f8fafc] focus:outline-none focus:border-[#60a5fa] transition-colors peer placeholder-transparent"
                      placeholder="Email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-[#cbd5e1] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#60a5fa]">
                      Email
                    </label>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 absolute" />
                  </div>
                </div>
                
                <div className="relative group">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full bg-transparent border-b-2 border-[#334155] px-0 py-3 text-[#f8fafc] focus:outline-none focus:border-[#60a5fa] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-[#cbd5e1] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#60a5fa]">
                    Message
                  </label>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 absolute" />
                </div>
                
                <div className="flex justify-end pt-4 h-14">
                  {showSuccess ? (
                    <div className="flex items-center gap-2 text-green-400 font-medium px-6 py-3 border border-green-400/30 bg-green-400/10 rounded-full animate-in fade-in zoom-in duration-300">
                      <CheckCircle className="w-5 h-5" />
                      Message Sent
                    </div>
                  ) : state.errors && !state.submitting ? (
                    <div className="flex items-center gap-2 text-red-400 font-medium px-6 py-3 border border-red-400/30 bg-red-400/10 rounded-full animate-in fade-in zoom-in duration-300">
                      <XCircle className="w-5 h-5" />
                      Submission Error
                    </div>
                  ) : (
                    <MagneticButton type="submit" variant="primary" disabled={state.submitting}>
                      {state.submitting ? "Transmitting..." : "Transmit Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </MagneticButton>
                  )}
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
