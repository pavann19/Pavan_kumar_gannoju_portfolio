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
          subtitle="Most engineers avoid the hard problems. I specifically look for them."
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
                I work on the parts of backend engineering that are easy to get wrong and hard to debug when you do. Distributed consistency, failure recovery, admission control, LLM guardrails — systems where the cost of a mistake is not a typo, it's a production incident.
              </p>
              <p>
                Everything I build has validation attached to it. Automated tests, CI, fault injection, load runs, fuzzing — not because it's best practice, but because I don't trust systems I can't break on purpose.
              </p>
              <p>
                The overlap between backend correctness, platform security, and AI safety is where I do my best work. That's not a pivot — it's the same problem at different layers.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-5 p-6 sm:p-8 md:p-10" delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]" aria-hidden="true">
                <Target className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Engineering Strengths</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Transactional backends that hold under load",
                "Kubernetes admission control and policy enforcement",
                "Distributed systems that fail predictably",
                "AI guardrails that actually reject bad inputs",
                "CI pipelines with real fault injection and load tests"
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
