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
          subtitle="I like the parts of backend engineering that fail quietly and are hard to debug."
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
                My work sits where backend correctness, platform security and AI safety overlap: distributed consistency, failure recovery, admission control and LLM guardrails. In these systems a mistake is not a typo. It is a production incident.
              </p>
              <p>
                I use automated tests, CI, fault injection, load experiments and fuzzing to investigate how systems fail. Each project documents the checks performed, the results and the limits of that evidence.
              </p>
              <p>
                The three areas are the same problem at different layers: a system should behave predictably when its inputs, its network or its model cannot be trusted.
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
                "Transactional backends with idempotent writes and replayable state",
                "Kubernetes admission control and policy enforcement",
                "Replicated systems tested with crash and fault injection",
                "LLM guardrails evaluated with labelled and adversarial fixtures",
                "CI pipelines that run fault injection, fuzzing and load tests"
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
