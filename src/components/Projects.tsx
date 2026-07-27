"use client";

import { SectionHeader } from "./ui/SectionHeader";
import { assetPath } from "@/lib/assetPath";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title="Projects" 
          subtitle=""
        />

        <div className="space-y-24 mt-12">
          
          {/* SentinAL */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#0f172a]">
              <a href="https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] transition-colors">
                SentinAL
              </a>
            </h3>
            
            <p className="text-[#334155] leading-relaxed text-lg">
              SentinAL is a secure AI desktop orchestration system and my final-year thesis project, built with a four-person team I led. It replaces a zero-shot intent router with a trained classifier, lifting held-out accuracy from 54.6% to 99.3% and out-of-distribution accuracy to 92.0%, while a deterministic fast-path resolves 94.2% of queries without invoking a language model at all. Every action passes through a validation-and-sandboxing pipeline before execution, and the system is fail-closed by design.
            </p>
            
            <div className="flex gap-4 text-sm font-mono text-[#2563eb]">
              <a href="https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration" target="_blank" rel="noopener noreferrer" className="hover:underline">
                [Code]
              </a>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border border-[#e2e8f0] bg-[#ffffff]">
              <img 
                src={assetPath("/projects/sentinal_architecture.png")}
                alt="SentinAL Architecture" 
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Gatekeeper */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#0f172a]">
              <a href="https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] transition-colors">
                Gatekeeper
              </a>
            </h3>
            
            <p className="text-[#334155] leading-relaxed text-lg">
              Gatekeeper is an AI infrastructure and governance gateway designed to sit between LLMs and end-user applications. It enforces safety guardrails, filters adversarial inputs, and provides observability into model behavior in real time, ensuring that large language models can be safely integrated into production enterprise environments without exposing them to prompt injection or data exfiltration attacks.
            </p>
            
            <div className="flex gap-4 text-sm font-mono text-[#2563eb]">
              <a href="https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway" target="_blank" rel="noopener noreferrer" className="hover:underline">
                [Code]
              </a>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border border-[#e2e8f0] bg-white p-4">
              <img 
                src={assetPath("/projects/gatekeeper_architecture.png")}
                alt="Gatekeeper Architecture" 
                className="w-full object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Dynamic Deception System (DDS) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#0f172a]">
              Dynamic Deception System (DDS)
            </h3>
            
            <p className="text-[#334155] leading-relaxed text-lg">
              A proactive security system that generates dynamic decoy services (honeypots) on the fly to misdirect and analyze attacker behavior. By continuously shifting the attack surface, DDS significantly increases the time and effort required for lateral movement within a compromised network.
            </p>
            
            <div className="mt-6 rounded-xl overflow-hidden border border-[#e2e8f0] bg-white p-4">
              <img 
                src={assetPath("/projects/dds_architecture.png")}
                alt="DDS Architecture" 
                className="w-full object-contain mix-blend-multiply"
                onError={(e) => {
                  // Fallback in case DDS diagram doesn't exist
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.display = 'none';
                }}
              />
            </div>
          </div>

        </div>
        
        <hr className="mt-24 border-[#e2e8f0]" />
      </div>
    </section>
  );
}
