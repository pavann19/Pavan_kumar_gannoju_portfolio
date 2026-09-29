"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticButton } from "./ui/MagneticButton";
import { FaGithub } from "react-icons/fa";
import { ShieldCheck, ServerCog, Database, Network, Lock, Cpu, ExternalLink } from "lucide-react";

const flagshipProjects = [
  {
    title: "LedgerLine",
    icon: <Database className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Reliable transactional ledger for idempotent transfers and replay-safe financial projections.",
    tech: "Java 21, Spring Boot, PostgreSQL, Kafka, Docker, k6, Azure",
    metrics: [
      { value: "7,508 / 7,508", label: "successful HTTP transfers" },
      { value: "0.00%", label: "k6 failure rate" },
      { value: "258 ms", label: "p95 latency" }
    ],
    outcomes: [
      "Implemented double-entry invariants, idempotency, transactional outbox, and Kafka-backed projections.",
      "Validated Azure deployment flow with smoke checks, load execution, and PostgreSQL invariant checks."
    ],
    note: "Tested on a low-cost Azure environment; performance numbers are validation results, not production capacity claims.",
    github: "https://github.com/pavann19/LedgerLine",
    docs: "https://github.com/pavann19/LedgerLine/blob/main/docs/experiments/03-cloud-load.md"
  },
  {
    title: "ModelGate",
    icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Kubernetes admission controller for signed images, safe model artifacts, and workload policy enforcement.",
    tech: "Go, Kubernetes admission webhooks, CRDs, cosign, kind, Helm, Kustomize, Azure ACR",
    metrics: [
      { value: "kind", label: "admission validation" },
      { value: "cosign", label: "image verification" },
      { value: "ACR", label: "Azure digest record" }
    ],
    outcomes: [
      "Engineered a fail-closed webhook that denies unsigned images, privileged pods, host access, and unsafe model files.",
      "Integrated CI coverage for envtest, cosign, pickle fuzzing, and real kind-cluster smoke tests."
    ],
    note: "Test environment: kind; Azure ACR records image publication and digest provenance.",
    github: "https://github.com/pavann19/ModelGate",
    docs: "https://github.com/pavann19/ModelGate/blob/main/docs/AZURE_ACR_EVIDENCE.md"
  },
  {
    title: "SentinAL",
    icon: <Network className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Safe Windows desktop-agent prototype with validation gates, audit logs, and post-action checks.",
    tech: "Python, FastAPI, SQLite, Windows automation, local/LLM-assisted intent handling",
    metrics: [
      { value: "Windows", label: "runtime target" },
      { value: "offline", label: "demo path" },
      { value: "policy", label: "action controls" }
    ],
    outcomes: [
      "Designed an execution pipeline that treats model output as untrusted and validates actions before execution.",
      "Implemented command boundaries, OS-state checks, and auditability for controlled desktop automation."
    ],
    note: "Windows-only prototype with bounded capabilities.",
    github: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration",
    docs: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration"
  },
  {
    title: "QuorumKV",
    icon: <ServerCog className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Replicated key-value store with durable writes, Raft replication, and failure-behavior testing.",
    tech: "Go, gRPC, HashiCorp Raft, WAL, fault injection, Porcupine checks",
    metrics: [
      { value: "Raft", label: "replication layer" },
      { value: "WAL", label: "durable write path" },
      { value: "Porcupine", label: "history checks" }
    ],
    outcomes: [
      "Built a Go/gRPC service around consensus, durable storage, and observable fault behavior.",
      "Validated crash recovery, fault injection paths, and small-history consistency checks in CI."
    ],
    note: "Engineering project for distributed-systems behavior and failure semantics.",
    github: "https://github.com/pavann19/QuorumKV",
    docs: "https://github.com/pavann19/QuorumKV/blob/main/docs/DEMO.md"
  }
];

const roleSpecificProjects = [
  {
    title: "Gatekeeper",
    icon: <Lock className="w-8 h-8 text-[#334155]" />,
    tagline: "LLM guardrail gateway for prompt-risk detection, policy decisions, and safe request routing.",
    tech: "Python, FastAPI, LLM security, classifier evaluation, benchmarking",
    metrics: [
      { value: "8", label: "detector fusion path" },
      { value: "FastAPI", label: "gateway service" },
      { value: "CI", label: "security checks" }
    ],
    outcomes: [
      "Implemented request screening, detector routing, semantic cache behavior, and policy decision logic.",
      "Measured latency and throughput under fixed workloads to identify concurrency bottlenecks."
    ],
    note: "Built to answer one question: what happens when the model is wrong? Turns out, a lot.",
    github: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway",
    docs: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway"
  },
  {
    title: "Agentic-OS",
    icon: <Cpu className="w-8 h-8 text-[#334155]" />,
    tagline: "Rust operating-system prototype for capability-scoped interfaces, policy, and auditability.",
    tech: "Rust, QEMU, kernel development, serial tests, systems safety",
    metrics: [
      { value: "Rust", label: "native kernel work" },
      { value: "QEMU", label: "validated runtime" },
      { value: "CI", label: "boot and host tests" }
    ],
    outcomes: [
      "Implemented kernel-level capability concepts, typed interfaces, and systems-safety documentation.",
      "Automated QEMU boot checks and host-side tests for reproducible systems validation."
    ],
    note: "Runs in QEMU. Written in Rust. Built because I wanted to know what's actually underneath.",
    github: "https://github.com/pavann19/Agentic-OS",
    docs: "https://github.com/pavann19/Agentic-OS"
  }
];

function ProjectCard({ project, idx }: { project: (typeof flagshipProjects)[number] | (typeof roleSpecificProjects)[number]; idx: number }) {
  return (
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

      <p className="text-[#334155] leading-relaxed">{project.tagline}</p>

      <p className="text-sm font-mono text-[#334155] bg-[#ffffff] border border-[#e2e8f0] rounded-lg px-4 py-3">
        {project.tech}
      </p>

      <div className="grid sm:grid-cols-3 gap-3">
        {project.metrics.map((metric) => (
          <div key={`${project.title}-${metric.label}`} className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg p-4">
            <div className="text-xl font-bold font-mono text-[#0f172a] leading-tight">{metric.value}</div>
            <div className="text-xs text-[#64748b] font-semibold uppercase tracking-wider mt-2">{metric.label}</div>
          </div>
        ))}
      </div>

      <ul className="space-y-3">
        {project.outcomes.map((outcome) => (
          <li key={`${project.title}-${outcome}`} className="text-sm text-[#334155] leading-relaxed flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2563eb] shrink-0" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <details className="rounded-lg border border-[#e2e8f0] bg-[#ffffff] px-4 py-3 text-sm text-[#334155]">
        <summary className="cursor-pointer font-semibold text-[#0f172a]">Evidence & limitations</summary>
        <p className="mt-3 leading-relaxed">{project.note}</p>
      </details>

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
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#ffffff]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Things I built to prove a point. Every one ships, runs, and has evidence."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {flagshipProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>

        <div className="mt-16">
          <SectionHeader
            title="Role-Specific Depth"
            subtitle="Pulled out when the role demands depth. Not for show — for the right conversation."
          />
          <div className="grid lg:grid-cols-2 gap-6">
            {roleSpecificProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx + flagshipProjects.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
