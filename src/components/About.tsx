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
                I build backend and platform systems where correctness, reliability, and security matter. My work spans transactional APIs, replicated services, Kubernetes admission control, LLM guardrails, and safe agent runtimes.
              </p>
              <p>
                I design and implement systems with measurable validation: automated tests, CI, fault injection, load experiments, fuzzing, and cloud-based deployments. The goal is practical engineering that a reviewer can inspect, run, and discuss.
              </p>
              <p>
                I am strongest at the intersection of backend engineering, platform infrastructure, distributed-systems behavior, and secure AI applications.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-5 p-6 sm:p-8 md:p-10" delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]" aria-hidden="true">
                <Target className="w-6 h-6 text-[#334155]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Engineering Strengths</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Designed transactional backend services",
                "Implemented Kubernetes security controls",
                "Validated distributed-system behavior",
                "Integrated AI guardrails and agent workflows",
                "Automated CI, load, and failure testing"
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
