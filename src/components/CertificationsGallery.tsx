"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Award, ShieldCheck, MonitorPlay, CloudCog, BrainCircuit, Users, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, type ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

interface FeaturedCert {
  name: string;
  issuer: string;
  detail: string;
  icon: ReactNode;
  file: string | null;
}

const featuredCerts: FeaturedCert[] = [
  {
    name: "Google Cybersecurity Foundations",
    issuer: "Google",
    detail: "Security fundamentals, threats and the SOC workflow",
    icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />,
    file: "/proofs/Google_Cybersecurity_Foundations.pdf"
  },
  {
    name: "Microsoft Security & OS Fundamentals",
    issuer: "Microsoft",
    detail: "Operating-system and security fundamentals",
    icon: <MonitorPlay className="w-8 h-8 text-[#2563eb]" />,
    file: "/proofs/Microsoft_Security_OS_Fundamentals.pdf"
  },
  {
    name: "AI-ML Engineer, NSQF Level 5",
    issuer: "NSDC / PMKVY",
    detail: "National skills qualification in AI and machine learning",
    icon: <BrainCircuit className="w-8 h-8 text-[#2563eb]" />,
    file: null
  },
  {
    name: "SAP Code Unnati",
    issuer: "SAP",
    detail: "Machine learning, IoT, computer vision, ABAP and SAP HANA",
    icon: <CloudCog className="w-8 h-8 text-[#2563eb]" />,
    file: null
  },
  {
    name: "Smart India Hackathon 2023",
    issuer: "MoE, Govt of India",
    detail: "Grand Finale participant",
    icon: <Award className="w-8 h-8 text-[#2563eb]" />,
    file: null
  },
  {
    name: "Coding Club President",
    issuer: "Leadership",
    detail: "2024 – 2026",
    icon: <Users className="w-8 h-8 text-[#2563eb]" />,
    file: null
  }
];

const supportingCerts = [
  { name: "Networks & Cisco Devices", file: "/proofs/Networks_Cisco_Devices.pdf" },
  { name: "Security Risk Management", file: "/proofs/Security_Risk_Management.pdf" }
  // Removed from the page; restore any of these if you want them back:
  // { name: "Python Data Structures", file: "/proofs/Python_Data_Structures.pdf" },
  // { name: "Data Scientist Toolbox", file: "/proofs/Data_Scientist_Toolbox.pdf" },
  // { name: "Google Data Analytics", file: "/proofs/Google_Data_Analytics.pdf" },
];

export function CertificationsGallery() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedCert(null);
  }, []);

  useEffect(() => {
    if (selectedCert) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert, handleKeyDown]);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          title="Certifications & Achievements"
          subtitle="Security, AI and engineering credentials. Cards with a certificate open in a viewer."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCerts.map((cert, idx) => {
            const cardContent = (
              <>
                <div className="p-4 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] shadow-inner" aria-hidden="true">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] leading-tight mb-1">{cert.name}</h3>
                  <p className="text-sm text-[#2563eb] font-medium tracking-wide uppercase">{cert.issuer}</p>
                  <p className="text-xs text-[#64748b] leading-relaxed mt-2">{cert.detail}</p>
                </div>
              </>
            );

            if (cert.file) {
              return (
                <button
                  key={cert.name}
                  onClick={() => setSelectedCert(assetPath(cert.file!))}
                  className="block group focus:outline-none text-left w-full h-full"
                >
                  <GlassCard className="p-8 flex flex-col items-center justify-center text-center gap-4 h-full transition-colors" delay={idx * 0.1}>
                    {cardContent}
                    <span className="text-xs font-mono text-[#2563eb] opacity-60 group-hover:opacity-100 transition-opacity mt-2">
                      View Certificate →
                    </span>
                  </GlassCard>
                </button>
              );
            }

            return (
              <GlassCard key={cert.name} className="p-8 text-center flex flex-col items-center justify-center gap-4 h-full" delay={idx * 0.1}>
                {cardContent}
              </GlassCard>
            );
          })}
        </div>

        <div className="tech-card p-6 sm:p-8 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-bold text-[#334155] uppercase tracking-wider">More credentials</h4>
            <p className="text-xs text-[#94a3b8] font-mono">Click any to open the certificate</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {supportingCerts.map((cert) => (
              <motion.button
                key={cert.name}
                onClick={() => setSelectedCert(assetPath(cert.file))}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-4 py-2 bg-[#ffffff] text-[#334155] hover:text-[#0f172a] hover:border-[#2563eb] hover:bg-[#f8fafc] text-sm font-medium rounded-lg border border-[#e2e8f0] cursor-pointer transition-colors focus:outline-none"
              >
                {cert.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-[#ffffff]/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Certificate viewer"
            >
              <div className="flex items-center justify-between p-4 border-b border-[#e2e8f0] bg-[#ffffff]">
                <h3 className="text-[#0f172a] font-medium font-mono text-sm">Certificate Viewer</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate viewer"
                  className="p-2 bg-[#f8fafc] hover:bg-[#e2e8f0] border border-[#e2e8f0] rounded-lg text-[#334155] hover:text-[#0f172a] transition-colors"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
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
