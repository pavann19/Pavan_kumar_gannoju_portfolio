"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticButton } from "./ui/MagneticButton";
import { FaGithub } from "react-icons/fa";
import { ShieldCheck, ServerCog, Database, Network, Lock, Cpu, ExternalLink, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type Project = {
  title: string;
  icon: ReactNode;
  tagline: string;
  tech: string;
  metrics: { value: string; label: string }[];
  outcomes: string[];
  note: string;
  github: string;
  docs: string;
  verification?: { sha: string; source: string; ci: string };
};

const flagshipProjects: Project[] = [
  {
    title: "LedgerLine",
    icon: <Database className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Reliable transactional ledger for idempotent transfers and replay-safe financial projections.",
    tech: "Java 21, Spring Boot, PostgreSQL, Kafka, Spring Security (OAuth2 resource server), Docker, k6, Azure",
    metrics: [
      { value: "323–330", label: "transfers/s · Oct 26 Azure runs" },
      { value: "341–362 ms", label: "p95 · same Azure runs" },
      { value: "0", label: "HTTP failures · same runs" }
    ],
    outcomes: [
      "Removed four PostgreSQL statements per fresh transfer on safe execution paths and passed 59 local regression tests by combining posting inserts with INSERT RETURNING and reusing account metadata already retrieved under locks.",
      "Achieved 258.9 successful requests/s under a synthetic workload with 20 virtual users and three accounts by using deterministic pessimistic locking; compared optimistic and serializable alternatives, which recorded lower throughput and request failures under the same scenario.",
      "Validated 323–330 transfers/s, 341–362 ms p95 and zero HTTP failures across two 150-second Azure load runs by exercising the service with k6; reconciled 126,781 successful responses across one correctness and two performance profiles against transaction, outbox and audit records.",
      "Verified projection recovery in 20.5/9.3 seconds after consumer/Kafka interruptions and restoration of 253,652 postings with 11/11 fingerprints matching by injecting failures, performing a quiesced backup/restore and comparing database contents during Azure recovery drills."
    ],
    note: "Historical synthetic local/Azure experiments, not current production performance. Azure code and storage changed; no stable performance gain or code-only gain is claimed. Restore used stopped writers and a separate database on the same server. OAuth2 validates tokens; it does not issue them.",
    github: "https://github.com/pavann19/LedgerLine",
    docs: "https://github.com/pavann19/LedgerLine/blob/main/docs/PROJECT_WALKTHROUGH.md"
  },
  {
    title: "ModelGate",
    icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Kubernetes admission control for signed images, model-artifact checks and namespace-scoped workload policy.",
    tech: "Go, Kubernetes admission webhooks, CRDs, cosign, kind, Helm, Kustomize, Azure ACR",
    metrics: [
      {
        "value": "420/420",
        "label": "repeated negative controls · historical local"
      },
      {
        "value": "120/120",
        "label": "positive controls · same trials"
      },
      {
        "value": "85.7%",
        "label": "p95 reduction · matched local kind"
      }
    ],
    outcomes: [
      "Rejected 420/420 repeated negative-signature controls while admitting 120/120 positive controls across three local validation trials by enforcing digest-pinned images and namespace-scoped signing keys in a fail-closed admission webhook.",
      "Reduced p95 admission latency 85.7%, from 4.203 s to 600.8 ms, in matched local kind benchmarks with eight same-image containers and four concurrent request workers by eliminating duplicate image verification within each request.",
      "Reduced allocated bytes per 64 MiB artifact read by 59.4%, from 165.3 MB to 67.1 MB, in matched local microbenchmarks by replacing growing read buffers with a single size-bounded allocation; introduced a separate capacity gate allowing one active artifact fetch/validation per webhook instance.",
      "Closed two admission bypasses involving image swaps and ephemeral-container injection by extending enforcement to Pod updates and pods/ephemeralcontainers; validated the paths through seven real API-server/cryptographic controls, admitting four signed positives and rejecting three unsigned negatives.",
      "Verified signing-key rotation and namespace isolation, denying 60/60 old-key requests after rotation and 60/60 replacement-key requests in another namespace in local validation trials, by resolving namespace policy afresh for each admission.",
      "Verified fail-closed recovery across three injected webhook outage drills, blocking 60/60 outage requests and admitting 60/60 post-recovery controls, by shutting down and restoring webhook replicas; observed local recovery of 2.97–6.04 seconds."
    ],
    note: "Signature and outage counts are repeated controls from three historical local trials. Latency applies to the matched same-image kind workload; allocation results are separate microbenchmarks. These do not establish production performance, managed deployment or host-level high availability.",
    github: "https://github.com/pavann19/ModelGate",
    docs: "https://github.com/pavann19/ModelGate/blob/main/docs/RESOURCE_IMPROVEMENTS.md"
  },
  {
    title: "SentinAL",
    icon: <Network className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Safe Windows desktop-agent prototype with validation gates, audit logs, and post-action checks.",
    tech: "Python, FastAPI, SQLite, Windows automation, local/LLM-assisted intent handling",
    metrics: [
      {
        "value": "116/120",
        "label": "attempts · 40 authored tasks × 3"
      },
      {
        "value": "36/36",
        "label": "runs · 12 authored fault scenarios"
      },
      {
        "value": "8",
        "label": "bundled backend/browser checks"
      }
    ],
    outcomes: [
      "Delivered a Windows desktop-agent thesis prototype achieving 116/120 successful attempts across 40 self-authored tasks repeated three times, by leading a four-member team and separating model-assisted interpretation from deterministic execution controls and task-specific verification.",
      "Built a local, single-worker supervised execution runtime, validated across 36/36 runs of 12 authored fault scenarios, by persisting immutable approved plans, fencing SQLite execution leases, suppressing duplicates and requiring review before retrying interrupted effects.",
      "Made agent execution outcomes inspectable, verified through eight integration checks against the bundled backend and browser interface, by implementing authenticated FastAPI workflows, independent output-file checks, durable per-effect records and downloadable execution receipts."
    ],
    note: "Windows-only prototype. The 116/120 result is a historical thesis benchmark, separate from the newer local single-worker runtime checks. Tasks are self-authored; some intents lack independent postcondition checks. Bundled-backend/browser checks do not establish native Electron or full desktop acceptance.",
    github: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration",
    docs: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration"
  },
  {
    title: "QuorumKV",
    icon: <ServerCog className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Replicated key-value store with durable writes, Raft replication, and failure-behavior testing.",
    tech: "Go, gRPC, HashiCorp Raft, WAL, mTLS, fault injection, Porcupine checks",
    metrics: [
      {
        "value": "100/100",
        "label": "populated WAL crash trials"
      },
      {
        "value": "607",
        "label": "RPC attempts · five fault histories"
      },
      {
        "value": "2,304/2,304",
        "label": "writes verified · nine local runs"
      }
    ],
    outcomes: [
      "Preserved acknowledged writes across 100/100 populated WAL crash trials, with no invented writes, by implementing a CRC-framed, fsync-before-ack persistence layer for a replicated Go/gRPC service using HashiCorp Raft for consensus.",
      "Validated five fault scenarios across 607 recorded RPC attempts by building a TCP harness for partitions, delays, rolling restarts and competing-leader attempts; checked all five histories with Porcupine while retaining uncertain writes, acknowledgements, rejections and failed reads.",
      "Measured 1.995 s median and 2.429 s p90 leader failover across ten three-process localhost trials by automating leader termination and probing for the first successful acknowledged write.",
      "Verified 2,304/2,304 writes with zero recorded errors across nine bounded local runs with 1, 4 and 16 clients by issuing unique-key writes and checking post-run readback; published operation samples with automated numerical verification and history replay in CI."
    ],
    note: "Historical bounded localhost experiments. WAL trials cover populated process-kill recovery, not hardware power loss. Porcupine checked five recorded histories, not every possible execution. HashiCorp Raft provides consensus.",
    github: "https://github.com/pavann19/QuorumKV",
    docs: "https://github.com/pavann19/QuorumKV/blob/main/docs/HISTORICAL_MEASUREMENTS.md"
  }
];

const roleSpecificProjects: Project[] = [
  {
    title: "Gatekeeper",
    icon: <Lock className="w-8 h-8 text-[#2563eb]" />,
    tagline: "LLM guardrail gateway for prompt-risk detection, policy decisions, and safe request routing.",
    tech: "Python, FastAPI, Redis, LLM security, classifier evaluation",
    metrics: [
      {
        "value": "8,000/8,000",
        "label": "LOW-risk overwrites resisted · local Redis"
      },
      {
        "value": "5 of 8,000",
        "label": "admissions · shared five-token budget"
      },
      {
        "value": "1,904",
        "label": "passing hosted source tests · recorded run"
      }
    ],
    outcomes: [
      "Closed a privilege-escalation bypass, verified by rejecting client-supplied INTERNAL roles with HTTP 422, by deriving capability and tenant permissions from authenticated API credentials.",
      "Preserved cached HIGH-risk decisions through 8,000/8,000 competing LOW-risk overwrites across eight independent processes in local validation by implementing atomic, monotonic Redis updates.",
      "Enforced a shared five-token request budget, admitting exactly 5 of 8,000 competing attempts, and retained 8,000 quota updates as 16,000 tokens across eight processes by using atomic Redis token-bucket and accounting operations.",
      "Prevented approval replay, allowing one successful consumption across 20 competing attempts in local validation, by atomically consuming approvals bound to tenant, principal, request, policy and execution context; validated transactional review transitions, per-tenant audit chains and restricted permissions through eight real PostgreSQL contracts.",
      "Prevented automatic fallback after uncertain provider execution through 29 regression cases across three adapters by distinguishing ambiguous transport and response failures; preserved completed-call usage across three downstream failure scenarios by recording consumption before output checks and audit writes.",
      "Expanded automated verification with 95 new regression cases, reaching 1,904 passing hosted source tests and 88.09% core/API coverage, by testing budget handling, provider outcomes, accounting failures and isolated verifier configuration."
    ],
    note: "Redis results are local backend correctness checks across eight independent processes, not HTTP throughput or production scaling. Source-test coverage does not establish detector accuracy. Circuit breakers are process-local; no current independent detection-accuracy claim is made.",
    github: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway",
    docs: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway/blob/main/docs/BUDGET_HARDENING_VALIDATION.md"
  },
  {
    title: "Agentic-OS",
    icon: <Cpu className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Rust operating-system prototype for capability-scoped interfaces, policy, and auditability.",
    tech: "Rust, QEMU, kernel development, serial tests, systems safety",
    metrics: [
      { value: "Rust", label: "native kernel work" },
      { value: "QEMU", label: "validated runtime" }
    ],
    outcomes: [
      "Kernel written in Rust with typed capability interfaces, and no raw pointers without a reason.",
      "QEMU boots, serial output validates and host tests confirm, reproducible from a clean checkout."
    ],
    note: "Work in progress. Runs in QEMU.",
    github: "https://github.com/pavann19/Agentic-OS",
    docs: "https://github.com/pavann19/Agentic-OS"
  }
];

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
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

      {project.verification && (
        <p className="text-xs text-[#475569] leading-relaxed mt-3">
          Verified candidate <code>{project.verification.sha}</code> · CI checked 1 Nov 2026.
          Feature branch; not merged into main.
        </p>
      )}

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
        <MagneticButton variant="secondary" className="w-fit" href={project.verification?.source ?? project.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-5 h-5" />
          {project.verification ? "Verified candidate" : "GitHub"}
        </MagneticButton>
        {project.verification && (
          <MagneticButton variant="glass" className="w-fit" href={project.verification.ci} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} hosted CI evidence`}>
            <ExternalLink className="w-5 h-5" />
            CI evidence
          </MagneticButton>
        )}
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
          subtitle="Each project links to its tests, validation results and known limits."
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
