"use client";

import React from 'react';
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticButton } from "./ui/MagneticButton";
import { FaGithub } from "react-icons/fa";
import { Network, Lock, Database, Bot, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

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
    title: "Gatekeeper — Fail-Closed AI Security Gateway",
    icon: <Lock className="w-8 h-8 text-[#2563eb]" />,
    description: "Solo-built gateway that screens prompts for injection and PII before they reach an LLM, using a learned fusion of 8 detectors with German-language calibration. Profiling showed the ensemble oversubscribing CPU under concurrency; pinning torch threads and re-running the same workload raised throughput from about 10.3 to 16.0 rps and cut p95 from about 2.1 s to 1.3 s at 16 concurrent requests (p99 did not improve; one dev laptop). Trivy and SBOM run in CI.",
    stats: [
      { label: "Throughput @16", value: "16.0 rps" },
      { label: "p95 @16", value: "1.3 s" },
      { label: "Detectors", value: "8" }
    ],
    architecture: "Client → Auth & Rate Limit → PII + Symbolic Filter → Semantic Cache → 8-Detector Fusion → Policy Decision",
    tech: ["Python", "FastAPI", "PyTorch", "Redis", "Prometheus"],
    link: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway"
  },
  {
    title: "Agentic-OS — Capability-Based OS in Rust",
    icon: <Cpu className="w-8 h-8 text-[#2563eb]" />,
    description: "From-scratch x86_64 UEFI kernel where every resource is reached through an explicit, revocable capability. GitHub Actions builds it, runs host tests, boots it in QEMU and asserts that revocation is enforced; ext2 parsers are fuzzed. A CI-only kernel crash was traced to a timer handler that never sent the LAPIC end-of-interrupt. Runs under QEMU only; docs/VERIFICATION.md lists which subsystems are verified in CI.",
    stats: [
      { label: "Core subsystems in CI", value: "4" },
      { label: "Fuzz targets", value: "3" },
      { label: "Real-hardware runs", value: "0" }
    ],
    architecture: "UEFI Boot → Kernel → Capability Table → Syscall / IPC → User-Space Drivers",
    tech: ["Rust", "no_std", "UEFI", "QEMU", "GitHub Actions"],
    link: "https://github.com/pavann19/Agentic-OS"
  },
  {
    title: "LedgerLine — Double-Entry Ledger",
    icon: <Database className="w-8 h-8 text-[#2563eb]" />,
    description: "Ledger where the database enforces zero-sum postings and non-negative balances. Four transfer strategies (unprotected, pessimistic, optimistic, serializable) were benchmarked with k6 on a laptop with raw output committed; the deliberately broken variant produced measurable balance drift. Transactional outbox to Kafka to a deduplicating projection, tested against a real Kafka container. The AWS deployment is defined in Terraform but has not been run yet.",
    stats: [
      { label: "Pessimistic p95 (hot)", value: "171 ms" },
      { label: "Optimistic p95 (hot)", value: "1.4 s" },
      { label: "Broken: failed reqs", value: "89%" }
    ],
    architecture: "Client → Idempotent Transfer API → PostgreSQL (postings + outbox) → Outbox Relay → Kafka → Projection Service",
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "Kafka", "Testcontainers", "k6"],
    link: "https://github.com/pavann19/LedgerLine"
  },
  {
    title: "QuorumKV — Replicated Key-Value Store",
    icon: <Network className="w-8 h-8 text-[#2563eb]" />,
    description: "Key-value store in Go on hashicorp/raft, with my own write-ahead log and fault-injection harness. Five fault scenarios (leader and minority partitions, rolling restarts, network delay, double-leader attempt) are recorded and checked with Porcupine, and the checker itself is validated against known-bad histories. Histories are small and benchmarks run on localhost processes.",
    stats: [
      { label: "Crash-recovery trials", value: "100/100" },
      { label: "Fault scenarios", value: "5" },
      { label: "Checker tests", value: "12" }
    ],
    architecture: "Client → gRPC → Raft Leader → Replicated Log → WAL + Store",
    tech: ["Go", "gRPC", "Raft", "Porcupine"],
    link: "https://github.com/pavann19/QuorumKV"
  },
  {
    title: "ModelGate — Kubernetes Admission Control",
    icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />,
    description: "Admission webhook that admits only cosign-signed images and hash-verified safetensors model artifacts, and denies privileged and host-access pods. Adversarial testing found two real bypasses (post-admission image swap, ephemeral containers), both fixed; fuzzing the pickle detector broke two attempted fixes before the third held. CI runs unit, envtest, real cosign, fuzz and kind-cluster jobs.",
    stats: [
      { label: "CI jobs", value: "5" },
      { label: "Bypasses fixed", value: "2" },
      { label: "Bypass tests", value: "4" }
    ],
    architecture: "kubectl apply → API Server → ModelGate Webhook → Signature + Artifact + Policy Checks → Admit / Deny",
    tech: ["Go", "Kubernetes", "controller-runtime", "cosign", "envtest"],
    link: "https://github.com/pavann19/ModelGate"
  },
  {
    title: "SentinAL — Secure AI Desktop Orchestration",
    icon: <Bot className="w-8 h-8 text-[#2563eb]" />,
    description: "Thesis project led as a 5-member team: a desktop agent that treats the LLM as untrusted. Every action passes an allowlist, filesystem sandbox and confirmation gate outside the model, and task success is scored by checking OS state rather than the agent's own report. Runs fully offline (SENTINAL_OFFLINE=1).",
    stats: [
      { label: "E2E task success", value: "96.7%" },
      { label: "Fast-path, no LLM", value: "88.45%" },
      { label: "Tasks scored", value: "120" }
    ],
    architecture: "Request → Intent Router → Privacy Router → Validation Gate → Execution → Postcondition Check",
    tech: ["Python", "FastAPI", "LLM APIs", "OpenTelemetry"],
    link: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration"
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
                      <div className="p-4 bg-[#ffffff] rounded-xl border border-[#e2e8f0]" aria-hidden="true">
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
                      <Network className="w-5 h-5 text-[#64748b]" aria-hidden="true"/>
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
