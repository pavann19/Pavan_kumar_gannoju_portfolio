"use client";

import { SectionHeader } from "./ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title="Experience" 
          subtitle=""
        />

        <div className="space-y-12 mt-12">
          
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[#0f172a]">
              Research Team Lead
            </h3>
            <p className="text-[#334155] font-medium">
              Prodigal AI Technologies
            </p>
            <p className="text-[#64748b] font-mono text-sm mb-2">
              Jun 2025 — Nov 2025 (Part-time)
            </p>
            <p className="text-[#334155] leading-relaxed text-lg">
              Led the Generative AI Security & Trustworthy AI R&D Unit, spearheading the architecture and research behind two manuscripts focused on adversarial robustness and secure multi-modal sampling. Directed a team of interns to validate defense frameworks against prompt injection and data manipulation attacks.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[#0f172a]">
              Gen AI / LLM Intern
            </h3>
            <p className="text-[#334155] font-medium">
              Digital Nexus AI
            </p>
            <p className="text-[#64748b] font-mono text-sm mb-2">
              Aug 2025 — Sep 2025 (Part-time)
            </p>
            <p className="text-[#334155] leading-relaxed text-lg">
              Engineered LLM-powered developer tools designed to automate boilerplate generation and code analysis, integrating safety constraints to ensure deterministic and secure code outputs.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[#0f172a]">
              AI Intern
            </h3>
            <p className="text-[#334155] font-medium">
              Prodigal AI Technologies
            </p>
            <p className="text-[#64748b] font-mono text-sm mb-2">
              Mar 2025 — May 2025 (Part-time)
            </p>
            <p className="text-[#334155] leading-relaxed text-lg">
              Conducted foundational research on generative AI vulnerabilities and drafted early prototypes for filtering adversarial inputs in natural language processing pipelines.
            </p>
          </div>

        </div>
        
        <hr className="mt-24 border-[#e2e8f0]" />
      </div>
    </section>
  );
}
