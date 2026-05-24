"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Award, ShieldCheck, MonitorPlay, CloudCog } from "lucide-react";
import { motion } from "framer-motion";

const featuredCerts = [
  {
    name: "Google Cybersecurity",
    issuer: "Google",
    icon: <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />
  },
  {
    name: "Microsoft Security / OS",
    issuer: "Microsoft",
    icon: <MonitorPlay className="w-8 h-8 text-[#06B6D4]" />
  },
  {
    name: "SAP Code Unnati",
    issuer: "SAP",
    icon: <CloudCog className="w-8 h-8 text-[#8B5CF6]" />
  },
  {
    name: "Smart India Hackathon",
    issuer: "MoE, Govt of India",
    icon: <Award className="w-8 h-8 text-[#3B82F6]" />
  }
];

const supportingCerts = [
  "Python Data Structures",
  "Data Scientist Toolbox",
  "Networks & Cisco Devices",
  "Google Data Analytics",
  "Security Risk Management"
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
          {featuredCerts.map((cert, idx) => (
            <GlassCard key={idx} className="p-8 text-center flex flex-col items-center justify-center gap-4" delay={idx * 0.1}>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#F9FAFB] leading-tight mb-1">{cert.name}</h3>
                <p className="text-sm text-[#06B6D4] font-medium tracking-wide uppercase">{cert.issuer}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          <h4 className="text-sm font-bold text-[#9CA3AF] uppercase tracking-wider mb-6 text-center">Supporting Credentials</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {supportingCerts.map((cert, idx) => (
              <span key={idx} className="px-4 py-2 bg-[#111827] text-[#9CA3AF] text-sm font-medium rounded-full border border-white/5">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
