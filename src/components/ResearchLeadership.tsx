"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { BookOpen, Shield, FlaskConical, Activity, ExternalLink } from "lucide-react";

const researchPapers = [
  "Zero-shot voice cloning with Mixture-of-Experts architectures",
  "Adversarial defenses for systems whose model output cannot be trusted"
];

const leadershipPoints = [
  "Set the direction for the AI workflow architecture and the team's approach to LLM safety",
  "Ran architecture reviews that changed the design before it was built",
  "Built the workflow pipeline and orchestration layer the team's prototypes ran on"
];

export function ResearchLeadership() {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader
          title="Research & Leadership"
          subtitle="Research direction and team leadership at Prodigal AI."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-6 sm:p-8 flex flex-col" delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]">
                <Shield className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">AI Security Research</h3>
            </div>
            <p className="text-[#475569] leading-relaxed mb-6">
              At Prodigal AI I defined the research direction on two problems the team ran into, and wrote a paper on each. Both papers are currently unpublished.
            </p>
            <ul className="space-y-3 flex-1">
              {researchPapers.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#334155]">
                  <Activity className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://pavann19.github.io/Pavan_kumar_gannoju_portfolio/proofs/Research_Pavan_Gannoju_LoR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Research experience letter
            </a>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 flex flex-col" delay={0.2}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]">
                <FlaskConical className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Engineering Leadership</h3>
            </div>
            <p className="text-[#475569] leading-relaxed mb-6">
              Promoted from AI Intern to Research Team Lead at Prodigal AI (March – November 2025, part-time). Led a team of four, keeping research moving toward prototypes that could ship.
            </p>
            <ul className="space-y-3 flex-1">
              {leadershipPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#334155]">
                  <BookOpen className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://pavann19.github.io/Pavan_kumar_gannoju_portfolio/proofs/Gannoju_Pavan_Kumar_LoR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Recommendation letter
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
