"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticButton } from "./ui/MagneticButton";
import { FaGithub } from "react-icons/fa";
import { ShieldCheck, ServerCog, Database, Network, Lock, Cpu, ExternalLink, ChevronRight } from "lucide-react";

const flagshipProjects = [
  {
    title: "LedgerLine",
    icon: <Database className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Reliable transactional ledger for idempotent transfers and replay-safe financial projections.",
    tech: "Java 21, Spring Boot, PostgreSQL, Kafka, Spring Security (OAuth2 resource server), Docker, k6, Azure",
    metrics: [
      { value: "323–330", label: "transfers per second (Azure)" },
      { value: "341–362 ms", label: "p95 latency" },
      { value: "0", label: "HTTP failures" }
    ],
    outcomes: [
      "Built double-entry accounting from scratch: idempotent transfers, with Kafka-backed projections fed by a transactional outbox and replayable.",
      "Sustained 323–330 transfers/second at 341–362 ms p95 with zero HTTP failures across two 150-second Azure load runs, reconciling all 126,781 timed-load responses against database transactions, outbox rows and audit rows.",
      "Recovered projections after injected consumer and Kafka outages in 20.5 and 9.3 seconds, and restored 253,652 ledger postings with all 11 table fingerprints matching."
    ],
    note: "Azure load runs verified 26 Oct 2026 on Premium SSD v2 storage (3,000 IOPS). Earlier runs on lower-IOPS disks missed the latency gates, so these results reflect a storage change, not a code-only improvement. OAuth2 covers resource-server validation only (no login or token issuance), and the benchmarks predate that security work. Portfolio demonstration, not production banking or a capacity guarantee.",
    github: "https://github.com/pavann19/LedgerLine",
    docs: "https://github.com/pavann19/LedgerLine/blob/main/docs/EVIDENCE.md"
  },
  {
    title: "ModelGate",
    icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Kubernetes admission controller for signed images, safe model artifacts, and workload policy enforcement.",
    tech: "Go, Kubernetes admission webhooks, CRDs, cosign, kind, Helm, Kustomize, Azure ACR",
    metrics: [
      { value: "85.7%", label: "lower p95 admission latency" },
      { value: "420/420", label: "invalid requests rejected" },
      { value: "60/60", label: "requests blocked during outages" }
    ],
    outcomes: [
      "Fail-closed by design: unsigned images, privileged pods and unsafe model files are blocked, including when a dependency is down. Recovery took 5.9, 3.0 and 6.0 seconds.",
      "Rejected 420/420 invalid requests and admitted 120/120 valid ones in local validation, using real cosign signature verification, with race-detector and envtest suites passing.",
      "Cut p95 admission latency from 4.203 s to 600.8 ms for eight same-image containers at four workers.",
      "CI runs a real kind cluster with cosign signing and a pickle fuzzer."
    ],
    note: "Validated locally on kind (6/6 checklist items). Latency figure is for eight same-image containers at four workers, not a production load test. Azure ACR records image publication and digest provenance.",
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
      "The model suggests. The agent validates. Nothing executes until OS state is confirmed safe.",
      "Every action is bounded, checked, and logged. The model does not get root."
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
      { value: "100/100", label: "WAL crash trials passed" },
      { value: "1.995 s", label: "median leader failover" },
      { value: "2,304/2,304", label: "concurrent writes verified" }
    ],
    outcomes: [
      "Raft consensus (HashiCorp Raft), WAL durability and a gRPC interface, built to understand how distributed systems fail. Linearizability checked with Porcupine.",
      "Validated five injected fault scenarios across 607 recorded RPC attempts, plus snapshot installation, restart and exact state-equality checks.",
      "Passed 100/100 populated WAL crash trials, recovering to a consistent state each time. Leader failover measured at 1.995 s median and 2.429 s p90 across ten trials, with zero errors under concurrent load."
    ],
    note: "Local validation (6/6 checklist items passed), not a production deployment. Failover measured over ten trials. Engineering project for distributed-systems behavior and failure semantics.",
    github: "https://github.com/pavann19/QuorumKV",
    docs: "https://github.com/pavann19/QuorumKV/blob/main/docs/DEMO.md"
  }
];

const roleSpecificProjects = [
  {
    title: "Gatekeeper",
    icon: <Lock className="w-8 h-8 text-[#2563eb]" />,
    tagline: "LLM guardrail gateway for prompt-risk detection, policy decisions, and safe request routing.",
    tech: "Python, FastAPI, LLM security, classifier evaluation, benchmarking",
    metrics: [
      { value: "8", label: "detector fusion path" },
      { value: "FastAPI", label: "gateway service" },
      { value: "CI", label: "security checks" }
    ],
    outcomes: [
      "Every LLM request goes through 8 detectors before it touches the model. Latency benchmarked under load.",
      "Found the concurrency ceiling, documented it, and explained exactly what breaks first."
    ],
    note: "Built to answer one question: what happens when the model is wrong? Turns out, a lot.",
    github: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway",
    docs: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway"
  },
  {
    title: "Agentic-OS",
    icon: <Cpu className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Rust operating-system prototype for capability-scoped interfaces, policy, and auditability.",
    tech: "Rust, QEMU, kernel development, serial tests, systems safety",
    metrics: [
      { value: "Rust", label: "native kernel work" },
      { value: "QEMU", label: "validated runtime" },
      { value: "CI", label: "boot and host tests" }
    ],
    outcomes: [
      "Kernel written in Rust with typed capability interfaces — no raw pointers without a reason.",
      "QEMU boots, serial output validates, host tests confirm — reproducible from a clean checkout."
    ],
    note: "Runs in QEMU. Written in Rust. Built because I wanted to know what's actually underneath.",
    github: "https://github.com/pavann19/Agentic-OS",
    docs: "https://github.com/pavann19/Agentic-OS"
  }
];

function ProjectCard({ project, idx }: { project: (typeof flagshipProjects)[number] | (typeof roleSpecificProjects)[number]; idx: number }) {
  const cardNumber = String(idx + 1).padStart(2, "0");
  return (
    <GlassCard className="p-8 sm:p-10 flex flex-col bg-[#f8fafc] border-[#e2e8f0]" delay={idx * 0.08}>

      {/* ── Identity ── */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0] shrink-0" aria-hidden="true">
          {project.icon}
        </div>
        <div>
          <p className="text-xs font-mono text-[#94a3b8] mb-1 tracking-widest">{cardNumber}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">{project.title}</h3>
        </div>
      </div>

      <p className="text-[#475569] leading-relaxed text-base mt-4">{project.tagline}</p>

      <hr className="border-[#e2e8f0] my-5" />

      {/* ── Context ── */}
      <p className="text-sm font-mono text-[#334155] bg-[#ffffff] border border-[#e2e8f0] rounded-xl px-4 py-3 leading-relaxed">
        {project.tech}
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mt-4">
        {project.metrics.map((metric) => (
          <div key={`${project.title}-${metric.label}`} className="bg-[#ffffff] border border-[#e2e8f0] rounded-xl p-4">
            <div className="text-xl font-bold font-mono text-[#0f172a] leading-tight">{metric.value}</div>
            <div className="text-xs text-[#94a3b8] font-semibold uppercase tracking-widest mt-2">{metric.label}</div>
          </div>
        ))}
      </div>

      <hr className="border-[#e2e8f0] my-5" />

      {/* ── What was built ── */}
      <ul className="space-y-4">
        {project.outcomes.map((outcome) => (
          <li key={`${project.title}-${outcome}`} className="text-sm text-[#334155] leading-relaxed flex gap-3 items-start">
            <ChevronRight className="mt-0.5 w-4 h-4 text-[#2563eb] shrink-0" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <hr className="border-[#e2e8f0] my-5" />

      {/* ── Evidence & actions ── */}
      <details className="rounded-xl border border-[#e2e8f0] bg-[#ffffff] px-5 py-4 text-sm text-[#334155]">
        <summary className="cursor-pointer font-semibold text-[#0f172a] select-none">Evidence &amp; limitations</summary>
        <p className="mt-3 leading-relaxed text-[#475569]">{project.note}</p>
      </details>

      <div className="flex flex-wrap gap-3 mt-6">
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
          subtitle="Real environments. Every project ships, runs, and has evidence."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {[...flagshipProjects, ...roleSpecificProjects].map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
