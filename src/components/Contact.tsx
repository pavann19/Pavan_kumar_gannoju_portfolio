"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Send, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

export function Contact() {
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
            <GlassCard className="p-8 h-full" delay={0.1}>
              <h3 className="text-xl font-bold text-[#F9FAFB] mb-8">Direct Channels</h3>
              <div className="space-y-6">
                <a href="mailto:pavan.gannoju.work@gmail.com" className="flex items-center gap-4 text-[#9CA3AF] hover:text-[#3B82F6] transition-colors group">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#3B82F6]/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">pavan.gannoju.work@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-[#9CA3AF]">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">Hyderabad, India</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form */}
          <div className="w-full md:w-2/3">
            <GlassCard className="p-8 md:p-12" delay={0.2}>
              <form action="https://formspree.io/f/xyyllpkd" method="POST" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-[#F9FAFB] focus:outline-none focus:border-[#3B82F6] transition-colors peer placeholder-transparent"
                      placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-[#9CA3AF] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#3B82F6]">
                      Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-[#F9FAFB] focus:outline-none focus:border-[#3B82F6] transition-colors peer placeholder-transparent"
                      placeholder="Email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-[#9CA3AF] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#3B82F6]">
                      Email
                    </label>
                  </div>
                </div>
                
                <div className="relative group">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-[#F9FAFB] focus:outline-none focus:border-[#3B82F6] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-[#9CA3AF] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#3B82F6]">
                    Message
                  </label>
                </div>
                
                <div className="flex justify-end pt-4">
                  <MagneticButton type="submit" variant="primary">
                    Transmit Message
                    <Send className="w-4 h-4 ml-2" />
                  </MagneticButton>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
