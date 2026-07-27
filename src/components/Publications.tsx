"use client";

import { SectionHeader } from "./ui/SectionHeader";

const publications = [
  {
    title: "Guided Multi-Modal Sampling: A White-Box Input Protocol for Enhancing Expressivity in Zero-Shot Voice Cloning with Mixture-of-Experts",
    authors: "Pavan Kumar Gannoju",
    status: "Unpublished manuscript, Prodigal AI Technologies, 2025"
  },
  {
    title: "AI Tamper-Proofing and Data Integrity: A Comprehensive Framework for Defense Against Adversarial Attacks",
    authors: "Pavan Kumar Gannoju",
    status: "Unpublished manuscript, Prodigal AI Technologies, 2025"
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title="Publications & Research" 
          subtitle=""
        />

        <div className="space-y-12 mt-12">
          {publications.map((pub, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h3 className="text-lg font-medium text-[#0f172a] leading-snug">
                {pub.title}
              </h3>
              <p className="text-[#334155]">
                {pub.authors}
              </p>
              <p className="text-[#64748b] italic text-sm">
                {pub.status}
              </p>
            </div>
          ))}
        </div>
        
        <hr className="mt-24 border-[#e2e8f0]" />
      </div>
    </section>
  );
}
