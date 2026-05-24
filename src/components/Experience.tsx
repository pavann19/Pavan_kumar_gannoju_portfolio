"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Briefcase, FileBadge } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Gen AI / LLM Intern",
    company: "Digital Nexus AI",
    date: "May 2025 – September 2025",
    focus: ["Backend APIs", "REST Services", "AI Workflow Systems", "Backend Integrations", "Testing & Validation"],
    proofs: [
      { label: "Completion Certificate", file: "/proofs/Digital_Nexus_AI_Completion_Certificate - Gannoju Pavan Kumar.png" },
      { label: "Internship Letter", file: "/proofs/_Pavan Kumar Gannoju - DigitalNexusAI Internship Letter - Gen AI_LLM.docx (1).pdf" },
      { label: "Exit Letter", file: "/proofs/Digital Nexus AI Exit Letter - Gannoju Pavan Kumar.pdf" },
    ]
  },
  {
    role: "AI Intern + Research Team Lead",
    company: "Prodigal AI Technologies Pvt. Ltd.",
    date: "March 2025 – April 2025",
    focus: ["Backend Orchestration", "AI Workflow Systems", "Modular Engineering", "AI Security", "Research Coordination"],
    proofs: [
      { label: "Completion Certificate", file: "/proofs/Prodigal_ai_Completion Certificate.png" },
      { label: "Research Experience Letter", file: "/proofs/Research_Pavan_gannoju_LoR.pdf" },
      { label: "Recommendation Letter", file: "/proofs/Gannoju Pavan Kumar LoR.pdf" },
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title="Experience" 
          subtitle="Internships and leadership roles focusing on scalable systems and research."
        />

        <div className="relative">
          {/* Spatial Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] opacity-80 shadow-[0_0_15px_rgba(59,130,246,0.6)] rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-start`}>
                
                {/* Glowing Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-1.5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#111827] border border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full" />
                </div>

                <div className="w-full pl-20 md:pl-0 md:w-1/2 relative">
                  <div className={`md:px-12 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <GlassCard delay={idx * 0.2} className="p-6 sm:p-8 text-left">
                      
                      <div className="flex items-center gap-2 text-[#06B6D4] text-sm font-bold tracking-wider uppercase mb-3">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.date}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#F9FAFB] mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-[#9CA3AF] font-medium mb-6">{exp.company}</h4>
                      
                      <div className="space-y-3 mb-8">
                        <h5 className="text-sm font-bold text-[#F9FAFB] uppercase tracking-wider">Key Focus</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.focus.map((f, fIdx) => (
                            <span key={fIdx} className="tech-pill px-3 py-1 rounded-full text-xs font-mono">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <h5 className="text-sm font-bold text-[#F9FAFB] uppercase tracking-wider mb-4">Proof Assets</h5>
                        <div className="flex flex-wrap gap-3">
                          {exp.proofs.map((proof, pIdx) => (
                            <motion.a
                              key={pIdx}
                              href={proof.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-[#3B82F6] font-medium transition-colors"
                            >
                              <FileBadge className="w-4 h-4" />
                              {proof.label}
                            </motion.a>
                          ))}
                        </div>
                      </div>

                    </GlassCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
