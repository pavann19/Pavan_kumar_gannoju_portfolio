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
          <GlassCard className="p-8" delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Shield className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F9FAFB]">AI Security Research</h3>
            </div>
            <p className="text-[#9CA3AF] leading-relaxed mb-6">
              Conducted specialized research focusing on the reliability and security of enterprise-integrated LLMs. Explored prompt injection defense mechanisms and the development of role-aware execution models to prevent unauthorized tool access.
            </p>
            <ul className="space-y-3">
              {["Prompt Injection Defense", "Role-Aware Execution Models", "Trustworthy AI Architecture"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#F9FAFB]">
                  <Activity className="w-4 h-4 text-[#8B5CF6]" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-8" delay={0.2}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <FlaskConical className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F9FAFB]">Engineering Leadership</h3>
            </div>
            <p className="text-[#9CA3AF] leading-relaxed mb-6">
              Led a small engineering team at Prodigal AI in building modular AI workflows and backend integration systems. Focused on fostering collaborative research, establishing clean architectural guidelines, and orchestrating sprint delivery.
            </p>
            <ul className="space-y-3">
              {["Team Orchestration", "Architectural Reviews", "Research Coordination"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#F9FAFB]">
                  <BookOpen className="w-4 h-4 text-[#06B6D4]" />
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
