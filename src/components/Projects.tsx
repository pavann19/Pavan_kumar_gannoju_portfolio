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
      "Implemented balanced integer-minor-unit postings, principal-scoped idempotency and a transactional outbox feeding replayable Kafka projections.",
      "Added durable poison-event quarantine, restricted reconciliation views and a separate read-only incident worker; hosted CI checks the Java services, worker and both service images.",
      "Earlier Azure validation recovered projections after consumer and Kafka outages in 20.5 and 9.3 seconds, and restored 253,652 ledger postings with all 11 table fingerprints matching."
    ],
    note: "The metrics describe two 150-second Azure runs on 26 Oct 2026 with Premium SSD v2 storage (3,000 IOPS), not the current candidate. Code and storage changed; no code-only gain is claimed. The later local hot-account workload missed its original latency limits despite a passing many-account run. Current candidate CI passes; a 24-hour soak and production operation remain unverified. OAuth2 validates access tokens; it does not provide login or token issuance.",
    github: "https://github.com/pavann19/LedgerLine",
    docs: "https://github.com/pavann19/LedgerLine/blob/43c8a0c6fe6541bda1cb7f6f647337a47ceab5f3/docs/RECOVERY_AND_RECONCILIATION.md",
    verification: {
      sha: "43c8a0c",
      source: "https://github.com/pavann19/LedgerLine/tree/43c8a0c6fe6541bda1cb7f6f647337a47ceab5f3",
      ci: "https://github.com/pavann19/LedgerLine/actions/runs/41318940329"
    }
  },
  {
    title: "ModelGate",
    icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Kubernetes admission control for signed images, model-artifact checks and namespace-scoped workload policy.",
    tech: "Go, Kubernetes admission webhooks, CRDs, cosign, kind, Helm, Kustomize, Azure ACR",
    metrics: [
      { value: "cosign", label: "digest-bound image signatures" },
      { value: "kind", label: "admission and lifecycle checks" },
      { value: "CI", label: "trust, fuzz and worker checks" }
    ],
    outcomes: [
      "Enforced namespace-scoped policy with digest-bound signature verification, workload restrictions and fail-closed behavior on trust failures.",
      "Added serving readiness, bounded graceful termination and a durable proposal-only worker outside the admission decision path.",
      "Hosted CI passes real cosign integration, envtest, kind, Helm, fuzz and worker checks, including Linux FIFO rejection regressions."
    ],
    note: "Policy exemptions and installation exclusions are documented explicitly. The local observation stopped after 15 hours; the original 24-hour gate is incomplete. A distinct-image load control regressed. Azure ACR evidence records image publication, not a managed deployment. Production operation and host-level high availability remain unverified.",
    github: "https://github.com/pavann19/ModelGate",
    docs: "https://github.com/pavann19/ModelGate/blob/e9af94fae32a9ffe10ba1641e2565ddac4605696/docs/ADMISSION_LIFECYCLE.md",
    verification: {
      sha: "e9af94f",
      source: "https://github.com/pavann19/ModelGate/tree/e9af94fae32a9ffe10ba1641e2565ddac4605696",
      ci: "https://github.com/pavann19/ModelGate/actions/runs/41319123152"
    }
  },
  {
    title: "SentinAL",
    icon: <Network className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Safe Windows desktop-agent prototype with validation gates, audit logs, and post-action checks.",
    tech: "Python, FastAPI, SQLite, Windows automation, local/LLM-assisted intent handling",
    metrics: [
      { value: "96.7%", label: "task success (95% CI 91.7–98.7%)" },
      { value: "95.26%", label: "held-out accuracy" },
      { value: "66/66", label: "fuzz cases blocked" }
    ],
    outcomes: [
      "The model suggests. The agent validates. Nothing executes until OS state is confirmed safe. Every action is bounded, checked and logged.",
      "Reached 96.7% task success (95% CI 91.7–98.7%), 95.26% held-out accuracy and 83.68% out-of-distribution accuracy, with 88.45% of requests resolved on the fast path.",
      "Backed by 972 automated tests at 87.39% coverage, plus a 66-test fuzz suite with a 100% block rate.",
      "Led a four-person team on this B.Tech thesis project."
    ],
    note: "Windows-only prototype with bounded capabilities. 4 of 7 planned phases complete; the base version is working and usable. Figures come from the project's own evaluation sets and test suites, and the 100% block rate is over the 66-test fuzz suite.",
    github: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration",
    docs: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration"
  },
  {
    title: "QuorumKV",
    icon: <ServerCog className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Replicated key-value store with durable writes, Raft replication, and failure-behavior testing.",
    tech: "Go, gRPC, HashiCorp Raft, WAL, mTLS, fault injection, Porcupine checks",
    metrics: [
      { value: "100/100", label: "WAL crash trials passed" },
      { value: "mTLS", label: "peer and client authorization" },
      { value: "CI", label: "Linux / Windows worker checks" }
    ],
    outcomes: [
      "Built the WAL, store adapter and observed-execution harness around HashiCorp Raft; histories retain acknowledgements, retries and uncertain write outcomes.",
      "Added authenticated peer/client transport, bounded requests and exact-state snapshot/restore checks, with real process failover and certificate-rotation tests.",
      "Separated durable diagnostics from consensus and repaired checkpoint publication with crash/concurrency regressions. Hosted core, fault, race, worker and checkpoint jobs pass."
    ],
    note: "The 100 WAL trials exercise populated process-kill recovery, not hardware power loss. Fault checks cover finite observed histories, not proof of every execution. The earlier endurance run failed after about eight hours; checkpoint repair and smoke checks do not establish a completed 24-hour run. Default diagnostics use deterministic offline analysis; live model quality remains unverified.",
    github: "https://github.com/pavann19/QuorumKV",
    docs: "https://github.com/pavann19/QuorumKV/blob/0d13601d67f9acf10ff62f38b39fac1c54b4cad7/docs/TRANSPORT_AND_RECOVERY.md",
    verification: {
      sha: "0d13601",
      source: "https://github.com/pavann19/QuorumKV/tree/0d13601d67f9acf10ff62f38b39fac1c54b4cad7",
      ci: "https://github.com/pavann19/QuorumKV/actions/runs/41203948838"
    }
  }
];

const roleSpecificProjects: Project[] = [
  {
    title: "Gatekeeper",
    icon: <Lock className="w-8 h-8 text-[#2563eb]" />,
    tagline: "LLM guardrail gateway for prompt-risk detection, policy decisions, and safe request routing.",
    tech: "Python, FastAPI, Redis, LLM security, classifier evaluation",
    metrics: [
      { value: "8", label: "detector fusion pipeline" },
      { value: "100/100", label: "HIGH decisions kept under concurrent overwrite" },
      { value: "5 of 100", label: "exact tenant-budget admissions" }
    ],
    outcomes: [
      "Every request passes an eight-detector fusion pipeline that scores jailbreak, prompt-injection and harmful-content risk before it reaches the model, backed by more than 1,700 automated tests.",
      "Preserved HIGH risk decisions through 100/100 concurrent LOW-overwrite attempts in local Redis validation, using atomic, monotonic cache updates.",
      "Enforced shared tenant budgets across 2 Redis clients and 8 concurrent workers: exactly 5 of 100 competing attempts admitted, with zero lost updates across 100 quota writes.",
      "Scored a 13,011-example corpus with all eight detectors: fusion ROC-AUC 0.942 (95% CI 0.938–0.946) and 72.6% recall at 5% false-positive rate."
    ],
    note: "Concurrency results are local Redis correctness checks on backend calls, not HTTP traffic or separate app replicas, and not production performance. Detection metrics are in-sample (the fusion model was fitted on the same corpus). API latency, throughput and held-out accuracy have not been measured yet.",
    github: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway",
    docs: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway"
  },
  {
    title: "Agentic-OS",
    icon: <Cpu className="w-8 h-8 text-[#2563eb]" />,
    tagline: "Rust operating-system prototype for capability-scoped interfaces, policy, and auditability.",
    tech: "Rust, QEMU, kernel development, serial tests, systems safety",
    metrics: [
      { value: "10/15", label: "planned phases complete" },
      { value: "Rust", label: "native kernel work" },
      { value: "QEMU", label: "validated runtime" }
    ],
    outcomes: [
      "Kernel written in Rust with typed capability interfaces, and no raw pointers without a reason.",
      "QEMU boots, serial output validates and host tests confirm, reproducible from a clean checkout."
    ],
    note: "Work in progress: 10 of 15 planned phases complete. Runs in QEMU.",
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
