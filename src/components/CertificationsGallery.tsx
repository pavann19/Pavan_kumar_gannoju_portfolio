"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Award, ShieldCheck, MonitorPlay, CloudCog, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const featuredCerts = [
  {
    name: "Google Cybersecurity",
    issuer: "Google",
    icon: <ShieldCheck className="w-8 h-8 text-[#60a5fa]" />,
    file: "/proofs/foundation of cybersecurity.pdf"
  },
  {
    name: "Microsoft Security / OS",
    issuer: "Microsoft",
    icon: <MonitorPlay className="w-8 h-8 text-[#60a5fa]" />,
    file: "/proofs/intro to computers and os and security.pdf"
  },
  {
    name: "SAP Code Unnati",
    issuer: "SAP",
    icon: <CloudCog className="w-8 h-8 text-[#60a5fa]" />,
    file: null
  },
  {
    name: "Smart India Hackathon",
    issuer: "MoE, Govt of India",
    icon: <Award className="w-8 h-8 text-[#60a5fa]" />,
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
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Verified Learning" 
          subtitle="Professional credentials and hackathon participation validating my expertise."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCerts.map((cert, idx) => {
            const cardContent = (
              <>
                <div className="p-4 bg-[#1e293b] rounded-2xl border border-[#334155] shadow-inner">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f8fafc] leading-tight mb-1">{cert.name}</h3>
                  <p className="text-sm text-[#60a5fa] font-medium tracking-wide uppercase">{cert.issuer}</p>
                </div>
              </>
            );

            if (cert.file) {
              return (
                <button 
                  key={idx} 
                  onClick={() => setSelectedCert(cert.file)}
                  className="block group focus:outline-none text-left w-full h-full"
                >
                  <GlassCard className="p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-4 h-full transition-colors" delay={idx * 0.1}>
                    {cardContent}
                    <span className="text-xs font-mono text-[#60a5fa] opacity-75 group-hover:opacity-100 transition-opacity mt-2">
                      View Certificate →
                    </span>
                  </GlassCard>
                </button>
              );
            }

            return (
              <GlassCard key={idx} className="p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-4 h-full" delay={idx * 0.1}>
                {cardContent}
              </GlassCard>
            );
          })}
        </div>

        <div className="tech-card p-6 sm:p-8 rounded-2xl">
          <h4 className="text-sm font-bold text-[#cbd5e1] uppercase tracking-wider mb-6 text-center">Supporting Credentials</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {supportingCerts.map((cert, idx) => (
              <motion.button 
                key={idx} 
                onClick={() => setSelectedCert(cert.file)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-4 py-2 bg-[#0f172a] text-[#cbd5e1] hover:text-[#f8fafc] hover:border-[#60a5fa] hover:bg-[#1e293b] text-sm font-medium rounded-lg border border-[#334155] cursor-pointer transition-colors focus:outline-none"
              >
                {cert.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for PDF/Image preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-[#0f172a]/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#1e293b] border border-[#334155] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-[#334155] bg-[#0f172a]">
                <h3 className="text-[#f8fafc] font-medium font-mono text-sm">Certificate Viewer</h3>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-[#1e293b] hover:bg-[#334155] border border-[#334155] rounded-lg text-[#cbd5e1] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 w-full h-full bg-white/5">
                <iframe 
                  src={selectedCert} 
                  className="w-full h-full border-none bg-transparent"
                  title="Certificate Document"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
