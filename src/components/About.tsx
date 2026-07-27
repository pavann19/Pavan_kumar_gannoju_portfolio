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
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]">
                <Code2 className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Background</h3>
            </div>
            <div className="space-y-6 text-[#334155] leading-relaxed text-lg font-medium">
              <p>
                I enjoy building practical software systems that combine backend engineering, automation, and AI-powered workflows. My primary interests are backend development, scalable application architecture, AI infrastructure, and secure software systems.
              </p>
              <p>
                I have worked on AI-integrated applications, RESTful backend services, authentication systems, workflow automation, and modular system architectures through internships, research collaborations, and personal projects.
              </p>
              <p>
                My goal is to become a strong software engineer capable of building reliable, scalable, and production-ready systems that integrate modern AI technologies with solid engineering practices.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-5 p-6 sm:p-8 md:p-10" delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]">
                <Target className="w-6 h-6 text-[#334155]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Current Focus</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Backend system design",
                "AI infrastructure",
                "Scalable APIs",
                "Distributed systems fundamentals",
                "Production-ready software engineering"
              ].map((focus, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-[#ffffff] rounded border border-[#e2e8f0]">
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
