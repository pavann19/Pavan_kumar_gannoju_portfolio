"use client";

import React from 'react';
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticButton } from "./ui/MagneticButton";
import { FaGithub } from "react-icons/fa";
import { Network, Lock, Database, Bot, FileCode2, ArrowRight } from "lucide-react";

const ArchitectureDiagram = ({ flow }: { flow: string }) => {
  const steps = flow.split(' → ');
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="bg-[#f8fafc] border border-[#e2e8f0] px-3 py-2 rounded shadow-sm text-sm font-mono text-[#334155] whitespace-nowrap">
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="w-4 h-4 text-[#cbd5e1] flex-shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const featuredProjects = [
  {
    title: "SentinAL — Secure AI Desktop Orchestration",
    icon: <Network className="w-8 h-8 text-[#2563eb]" />,
    description: "Validation-based execution pipeline.",
    stats: [
      { label: "Intent Accuracy", value: "99.3%" },
      { label: "OOD Accuracy", value: "92.0%" },
      { label: "Fast-Path Res", value: "94.2%" }
    ],
    architecture: "Request → Validation Layer → Role Auth → Execution Engine → Audit Logger",
    tech: ["Python", "FastAPI", "SQLite", "LLM APIs"],
    link: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration"
  },
  {
    title: "Gatekeeper",
    icon: <Lock className="w-8 h-8 text-[#2563eb]" />,
    description: "Solo-built LLM guardrail gateway. Identified a blind spot where the best individual classifier missed 98% of dangerous-capability requests despite over 90% aggregate accuracy.",
    stats: [
      { label: "Throughput", value: "98 RPS" },
      { label: "P95 Latency", value: "33ms" },
      { label: "Benchmark", value: "6.9k" }
    ],
    architecture: "Client → Guardrail Gateway → Classifier Ensemble → Evaluation Engine → Safe LLM Request",
    tech: ["Python", "FastAPI", "LLM Security", "Benchmarking"],
    link: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway"
  },
  {
    title: "API Traffic Control Platform",
    icon: <Database className="w-8 h-8 text-[#334155]" />,
    description: "Middleware platform for API rate limiting, request validation, and traffic monitoring in high-load environments.",
    architecture: "API Request → Rate Limiter (Redis) → Validation Middleware → Backend Service",
    tech: ["Python", "PostgreSQL", "Docker", "FastAPI"],
    link: "https://github.com/pavann19"
  },
  {
    title: "AI Chatbot & RAG System",
    icon: <Bot className="w-8 h-8 text-[#334155]" />,
    description: "Retrieval-Augmented Generation assistant with document indexing and context-aware response flows.",
    architecture: "User Query → Embedding Model → Vector Search → Context Synthesis → LLM",
    tech: ["Python", "Vector Search", "LLM APIs"],
    link: "https://github.com/pavann19"
  },
  {
    title: "Auto Documentation Tool",
    icon: <FileCode2 className="w-8 h-8 text-[#334155]" />,
    description: "AI-assisted backend utility automating structured output generation for developer productivity.",
    architecture: "Source Code → Parser Engine → LLM Summarization → Markdown Generator",
    tech: ["Python", "APIs", "Automation Tools"],
    link: "https://github.com/pavann19"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#ffffff]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Engineering large-scale architectures, secure access systems, and AI-integrated backends."
        />

        <div className="space-y-12">
          {featuredProjects.map((project, idx) => (
            <GlassCard key={idx} className="p-0 overflow-hidden group bg-[#f8fafc] border-[#e2e8f0]" delay={idx * 0.1}>
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Content Area */}
                <div className="w-full lg:w-[45%] p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#e2e8f0] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-[#ffffff] rounded-xl border border-[#e2e8f0]">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">{project.title}</h3>
                    </div>
                    
                    <p className="text-lg text-[#334155] leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {project.stats && (
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {project.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="p-3 bg-[#ffffff] rounded-lg border border-[#e2e8f0] text-center">
                            <div className="text-xl sm:text-2xl font-bold font-mono text-[#0f172a]">{stat.value}</div>
                            <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-8 mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 text-xs font-mono rounded-lg bg-[#ffffff] text-[#334155] border border-[#e2e8f0]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <MagneticButton variant="secondary" className="w-fit" href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-5 h-5" />
                      View Source
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Architecture Area */}
                <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-12 bg-[#ffffff] flex items-center justify-center relative overflow-hidden">
                  <div className="bg-tech-grid absolute inset-0" />
                  
                  <div className="relative z-10 w-full p-4 sm:p-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] shadow-lg">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e2e8f0]">
                      <Network className="w-5 h-5 text-[#64748b]" />
                      <span className="text-sm font-semibold text-[#334155] uppercase tracking-wider">Architecture Flow</span>
                    </div>
                    
                    <ArchitectureDiagram flow={project.architecture} />
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
