"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Award, ShieldCheck, MonitorPlay, CloudCog } from "lucide-react";
import { motion } from "framer-motion";

const featuredCerts = [
  {
    name: "Google Cybersecurity",
    issuer: "Google",
    icon: <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />,
    file: "/proofs/foundation of cybersecurity.pdf"
  },
  {
    name: "Microsoft Security / OS",
    issuer: "Microsoft",
    icon: <MonitorPlay className="w-8 h-8 text-[#06B6D4]" />,
    file: "/proofs/intro to computers and os and security.pdf"
  },
  {
    name: "SAP Code Unnati",
    issuer: "SAP",
    icon: <CloudCog className="w-8 h-8 text-[#8B5CF6]" />,
    file: null
  },
  {
    name: "Smart India Hackathon",
    issuer: "MoE, Govt of India",
    icon: <Award className="w-8 h-8 text-[#3B82F6]" />,
    file: null
  }
];

const supportingCerts = [
  { name: "Python Data Structures", file: "/proofs/python data structures.pdf" },
  { name: "Data Scientist Toolbox", file: "/proofs/data scientist toolbox.pdf" },
  { name: "Networks & Cisco Devices", file: "/proofs/Networks & Cisco Devices_posted.pdf" },
  { name: "Google Data Analytics", file: "/proofs/google data analytics_posted.pdf" },
  { name: "Security Risk Management", file: "/proofs/playitsafe.pdf" }
];

export function CertificationsGallery() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Verified Learning" 
          subtitle="Professional credentials and hackathon participation validating my expertise."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCerts.map((cert, idx) => {
            const cardContent = (
              <>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] leading-tight mb-1">{cert.name}</h3>
                  <p className="text-sm text-[#06B6D4] font-medium tracking-wide uppercase">{cert.issuer}</p>
                </div>
              </>
            );

            if (cert.file) {
              return (
                <a 
                  key={idx} 
                  href={cert.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block group cursor-pointer focus:outline-none"
                >
                  <GlassCard className="p-8 text-center flex flex-col items-center justify-center gap-4 h-full hover:border-[#3B82F6]/50 transition-colors" delay={idx * 0.1}>
                    {cardContent}
                    <span className="text-xs font-mono text-[#3B82F6] opacity-75 group-hover:opacity-100 transition-opacity mt-2">
                      View Certificate →
                    </span>
                  </GlassCard>
                </a>
              );
            }

            return (
              <GlassCard key={idx} className="p-8 text-center flex flex-col items-center justify-center gap-4 h-full" delay={idx * 0.1}>
                {cardContent}
              </GlassCard>
            );
          })}
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          <h4 className="text-sm font-bold text-[#9CA3AF] uppercase tracking-wider mb-6 text-center">Supporting Credentials</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {supportingCerts.map((cert, idx) => (
              <motion.a 
                key={idx} 
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-4 py-2 bg-[#111827] text-[#9CA3AF] hover:text-[#F9FAFB] hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5 text-sm font-medium rounded-full border border-white/5 cursor-pointer transition-colors"
              >
                {cert.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
