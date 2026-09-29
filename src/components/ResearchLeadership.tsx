"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { BookOpen, Shield, FlaskConical, Activity } from "lucide-react";

export function ResearchLeadership() {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader 
          title="Research & Leadership" 
          subtitle="Two unpublished papers and a team I actually ran — not line items, context."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-6 sm:p-8" delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]">
                <Shield className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">AI Security Research</h3>
            </div>
            <p className="text-[#475569] leading-relaxed mb-6">
              Wrote two research papers at Prodigal AI on problems I was actively running into — zero-shot voice cloning with MoE architectures, and adversarial defenses for systems where model output can’t be trusted. Both unpublished. Both real work.
            </p>
            <ul className="space-y-3">
              {[
                "Why prompt injection is still an unsolved infrastructure problem",
                "How role-aware execution changes what an agent is allowed to do",
                "What trustworthy AI actually requires at the system level"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#334155]">
                  <Activity className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8" delay={0.2}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]">
                <FlaskConical className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Engineering Leadership</h3>
            </div>
            <p className="text-[#475569] leading-relaxed mb-6">
              Ran a small team at Prodigal AI. Set technical direction, reviewed architecture decisions, kept research moving toward something shippable. Four people. Real deadlines. No one was going to save us if we got it wrong.
            </p>
            <ul className="space-y-3">
              {[
                "Set direction on AI workflow architecture",
                "Ran reviews that changed the design, not rubber-stamped it",
                "Kept research grounded in what could actually ship"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#334155]">
                  <BookOpen className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
