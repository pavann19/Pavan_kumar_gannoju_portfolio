"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Briefcase, FileBadge, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";

const experiences = [
    {
    role: "AI Intern → Research Team Lead",
    company: "Prodigal AI Technologies Pvt. Ltd.",
    date: "March 2025 – November 2025 (Part-Time)",
    highlights: [
      "Built the AI workflow pipeline and backend orchestration layer that research prototypes ran on — from prompt routing to output validation.",
      "Led architecture reviews that shaped how the team approached LLM safety problems — not just attended them.",
      "Defined the research direction on voice-cloning with MoE and adversarial tamper-resistance. Two papers came out of it."
    ],
    proofs: [
      { label: "Completion Certificate", file: "/proofs/Prodigal_AI_Completion_Certificate.png" },
      { label: "Research Experience Letter", file: "/proofs/Research_Pavan_Gannoju_LoR.pdf" },
      { label: "Recommendation Letter", file: "/proofs/Gannoju_Pavan_Kumar_LoR.pdf" },
    ]
  },
  {
    role: "Gen AI/LLM Intern",
    company: "Digital Nexus AI",
    date: "May 2025 – September 2025 (Part-Time)",
    highlights: [
      "Built the backend API and LLM workflow components that powered the core GenAI product features.",
      "Wired retrieval, generation, validation, and service-layer logic into a modular flow that could actually be maintained.",
      "Shipped the integration, wrote tests, handed over documentation that a new engineer could actually use."
    ],
    proofs: [
      { label: "Completion Certificate", file: "/proofs/Digital_Nexus_AI_Completion_Certificate.png" },
      { label: "Internship Letter", file: "/proofs/Digital_Nexus_AI_Internship_Letter.pdf" },
      { label: "Exit Letter", file: "/proofs/Digital_Nexus_AI_Exit_Letter.pdf" },
    ]
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title="Experience" 
          subtitle="Where I worked, what I actually did, and the documents to back it up."
        />

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#e2e8f0] rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-start`}>
                
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-1.5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#f8fafc] border border-[#1d4ed8]">
                  <div className="w-2.5 h-2.5 bg-[#1d4ed8] rounded-full" />
                </div>

                <div className="w-full pl-20 md:pl-0 md:w-1/2 relative">
                  <div className={`md:px-12 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <GlassCard delay={idx * 0.2} className="p-6 sm:p-8 text-left">
                      
                      <div className="flex items-center gap-2 text-[#2563eb] text-sm font-bold tracking-wider uppercase mb-3">
                        <Briefcase className="w-4 h-4" aria-hidden="true" />
                        <span>{exp.date}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#0f172a] mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-[#334155] font-medium mb-6">{exp.company}</h4>
                      
                      <div className="space-y-3 mb-8">
                        <h5 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider">Built & Delivered</h5>
                        <ul className="space-y-4">
                          {exp.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="text-sm text-[#334155] leading-relaxed flex gap-3 items-start">
                              <ChevronRight className="mt-0.5 w-4 h-4 text-[#2563eb] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-[#e2e8f0] pt-6">
                        <h5 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">Documents</h5>
                        <div className="flex flex-wrap gap-3">
                          {exp.proofs.map((proof, pIdx) => (
                            <motion.a
                              key={pIdx}
                              href={assetPath(proof.file)}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 bg-[#f8fafc] hover:bg-[#e2e8f0] border border-[#e2e8f0] rounded-lg text-sm text-[#334155] font-medium transition-colors"
                            >
                            <FileBadge className="w-4 h-4" aria-hidden="true" />
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
