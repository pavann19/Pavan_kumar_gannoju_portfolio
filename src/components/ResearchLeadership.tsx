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
          subtitle="Explorations in trustworthy AI systems, security, and team orchestration."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-6 sm:p-8" delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#0f172a] rounded-xl border border-[#334155]">
                <Shield className="w-6 h-6 text-[#60a5fa]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f8fafc]">AI Security Research</h3>
            </div>
            <p className="text-[#cbd5e1] leading-relaxed mb-6">
              Authored two unpublished manuscripts during my industry R&D work at Prodigal AI Technologies. My research focused on zero-shot voice cloning using Mixture of Experts (MoE) architectures, as well as AI tamper-proofing and adversarial defense mechanisms.
            </p>
            <ul className="space-y-3">
              {["Prompt Injection Defense", "Role-Aware Execution Models", "Trustworthy AI Architecture"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                  <Activity className="w-4 h-4 text-[#60a5fa]" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8" delay={0.2}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#0f172a] rounded-xl border border-[#334155]">
                <FlaskConical className="w-6 h-6 text-[#cbd5e1]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f8fafc]">Engineering Leadership</h3>
            </div>
            <p className="text-[#cbd5e1] leading-relaxed mb-6">
              Led a small engineering team at Prodigal AI in building modular AI workflows and backend integration systems. Focused on fostering collaborative research, establishing clean architectural guidelines, and orchestrating sprint delivery.
            </p>
            <ul className="space-y-3">
              {["Team Orchestration", "Architectural Reviews", "Research Coordination"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                  <BookOpen className="w-4 h-4 text-[#cbd5e1]" />
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
