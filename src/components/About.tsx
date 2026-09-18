"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Target, Cpu, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="About Me" 
          subtitle="Engineering practical systems that combine scalable backend architecture with AI workflows."
        />

        <div className="grid md:grid-cols-12 gap-8">
          <GlassCard className="md:col-span-7 p-6 sm:p-8 md:p-10 border-t-4 border-t-[#1d4ed8]" delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]" aria-hidden="true">
                <Code2 className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Background</h3>
            </div>
            <div className="space-y-6 text-[#334155] leading-relaxed text-lg font-medium">
              <p>
                I build backend and systems software and verify it with tests, fault injection, fuzzing and CI — from an LLM guardrail gateway to a capability-based OS, a transactional ledger, a Raft-replicated store and a Kubernetes admission controller. My focus areas are backend development, distributed-systems correctness, security engineering, and AI infrastructure.
              </p>
              <p>
                Through internships, my thesis, and independent projects, I've worked on AI security research, RESTful backend services, authentication systems, and modular architectures. Each project documents what its tests and CI prove, and what they do not.
              </p>
              <p>
                My goal is to build reliable, scalable, production-ready systems that combine modern AI with solid engineering fundamentals — not just prototypes, but things that hold up under real conditions.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-5 p-6 sm:p-8 md:p-10" delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]" aria-hidden="true">
                <Target className="w-6 h-6 text-[#334155]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Current Focus</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Backend system design",
                "AI security & guardrails",
                "Scalable APIs",
                "LLM orchestration systems",
                "Production-ready software engineering"
              ].map((focus, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-[#ffffff] rounded border border-[#e2e8f0]" aria-hidden="true">
                    <Cpu className="w-4 h-4 text-[#334155]" />
                  </div>
                  <span className="text-[#334155] font-medium leading-snug">{focus}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
