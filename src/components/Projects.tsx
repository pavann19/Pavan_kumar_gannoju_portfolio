"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticButton } from "./ui/MagneticButton";
import { FaGithub } from "react-icons/fa";
import { ShieldCheck, ServerCog, Database, Network, Lock, Cpu, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "LedgerLine",
    icon: <Database className="w-8 h-8 text-[#2563eb]" />,
    problem: "Financial backend correctness system for idempotent transfers, double-entry invariants, and replay-safe projections.",
    tech: "Java 21, Spring Boot, PostgreSQL, Kafka, Docker, k6, Azure",
    evidence: "Azure correctness run passed smoke checks, 7,508/7,508 successful HTTP transfers, 0.00% k6 failure rate, p95 258.2ms, PostgreSQL invariant checks, and resource-group cleanup confirmed.",
    boundary: "Low-cost Azure correctness evidence, not production capacity planning.",
    github: "https://github.com/pavann19/LedgerLine",
    docs: "https://github.com/pavann19/LedgerLine/blob/main/docs/experiments/03-cloud-load.md"
  },
  {
    title: "ModelGate",
    icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />,
    problem: "Kubernetes admission controller that blocks unsigned images, privileged pods, host access, and unsafe model artifacts before they enter a cluster.",
    tech: "Go, Kubernetes admission webhooks, CRDs, cosign, kind, Helm, Kustomize, Azure ACR",
    evidence: "CI exercises envtest, real cosign integration, pickle fuzzing, and kind smoke tests; ACR evidence records immutable Azure registry image digest/provenance for the selected commit.",
    boundary: "ACR proves image publication provenance; live admission behavior is proven in kind, not AKS or managed production.",
    github: "https://github.com/pavann19/ModelGate",
    docs: "https://github.com/pavann19/ModelGate/blob/main/docs/AZURE_ACR_EVIDENCE.md"
  },
  {
    title: "SentinAL",
    icon: <Network className="w-8 h-8 text-[#2563eb]" />,
    problem: "Bounded safe-agent prototype for translating user intent into controlled Windows desktop actions with validation and auditability.",
    tech: "Python, FastAPI, SQLite, Windows automation, local/LLM-assisted intent handling",
    evidence: "Windows-focused prototype with offline demo paths, allowed-vs-denied command boundaries, postcondition checks, and explicit safety verification docs.",
    boundary: "Windows-only bounded prototype; not a general autonomous OS agent.",
    github: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration",
    docs: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration"
  },
  {
    title: "QuorumKV",
    icon: <ServerCog className="w-8 h-8 text-[#2563eb]" />,
    problem: "Distributed key-value store focused on consensus boundaries, durable writes, and failure behavior that can be explained under interview scrutiny.",
    tech: "Go, gRPC, HashiCorp Raft, WAL, fault injection, Porcupine checks",
    evidence: "Normal CI keeps benchmarks separated behind an opt-in build tag; tests cover fsync-before-ack behavior, fault injection, and linearizability-style checks.",
    boundary: "Distributed-systems evidence project, not a claimed production database.",
    github: "https://github.com/pavann19/QuorumKV",
    docs: "https://github.com/pavann19/QuorumKV/blob/main/DEMO.md"
  },
  {
    title: "Gatekeeper",
    icon: <Lock className="w-8 h-8 text-[#334155]" />,
    problem: "LLM guardrail gateway for policy checks, classifier routing, and safety evaluation around high-risk model requests.",
    tech: "Python, FastAPI, LLM security, classifier evaluation, benchmarking",
    evidence: "Security-depth project with public code, guardrail architecture, and benchmark-oriented evaluation work.",
    boundary: "Role-specific AI-security project; keep claims tied to the current public repository state.",
    github: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway",
    docs: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway"
  },
  {
    title: "Agentic-OS",
    icon: <Cpu className="w-8 h-8 text-[#334155]" />,
    problem: "Native Rust OS exploration for capability-scoped agent interfaces, typed introspection, auditability, and policy boundaries.",
    tech: "Rust, QEMU, kernel development, serial tests, systems safety",
    evidence: "QEMU-backed build and boot evidence with systems/security documentation and explicit physical-hardware readiness boundaries.",
    boundary: "QEMU-only systems differentiator; no physical-hardware readiness claim.",
    github: "https://github.com/pavann19/Agentic-OS",
    docs: "https://github.com/pavann19/Agentic-OS"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#ffffff]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Flagship work ordered for backend, platform, AI-security, and systems roles. Each card separates evidence from what is not claimed."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <GlassCard key={project.title} className="p-6 sm:p-8 flex flex-col gap-6 bg-[#f8fafc] border-[#e2e8f0]" delay={idx * 0.08}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#ffffff] rounded-lg border border-[#e2e8f0] shrink-0" aria-hidden="true">
                  {project.icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-[#64748b] mb-1">0{idx + 1}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">{project.title}</h3>
                </div>
              </div>

              <dl className="space-y-4 text-sm sm:text-base">
                <div>
                  <dt className="font-semibold text-[#0f172a]">One-line problem</dt>
                  <dd className="text-[#334155] leading-relaxed mt-1">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0f172a]">Tech stack</dt>
                  <dd className="text-[#334155] leading-relaxed mt-1">{project.tech}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0f172a]">Verified evidence</dt>
                  <dd className="text-[#334155] leading-relaxed mt-1">{project.evidence}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0f172a]">Boundary</dt>
                  <dd className="text-[#334155] leading-relaxed mt-1">{project.boundary}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                <MagneticButton variant="secondary" className="w-fit" href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-5 h-5" />
                  GitHub
                </MagneticButton>
                <MagneticButton variant="glass" className="w-fit" href={project.docs} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Docs / Evidence
                </MagneticButton>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
