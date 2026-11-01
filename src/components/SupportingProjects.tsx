"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { FaGithub } from "react-icons/fa";
import { FolderGit2, ChevronRight } from "lucide-react";

interface SupportingProject {
  title: string;
  description: string;
  results?: string[];
  tech: string[];
  link: string;
}

const supportingProjects: SupportingProject[] = [
  {
    title: "Enterprise RAG System",
    description: "RAG pipeline over policy documents for an FP&A backend. Swappable vector backends (NumPy, FAISS, Qdrant), schema-validated output, streaming, rate limiting and property-based tests.",
    results: [
      "Replaced serial per-chunk embedding with bounded concurrency: a 181-chunk ingest dropped from 378.7 s to 48.1 s (7.83×).",
      "Load-tested with concurrent HTTP traffic and found the ceiling is model generation, not the API layer. Fixed a mid-stream connection-reset bug that only appeared at scale.",
      "266 tests at 98.55% coverage, with CI green on both Python versions."
    ],
    tech: ["Python", "FastAPI", "FAISS", "Qdrant", "Ollama", "Docker", "Next.js"],
    link: "https://github.com/pavann19/enterprise-rag-system"
  },
  {
    title: "DDS — Driving Decision System",
    description: "Driving simulator with decision logic: OBD-II telemetry, XGBoost + SHAP behaviour analytics, Frenet-frame path planning and IDM car-following, streamed live to a 3D browser HMI.",
    results: [
      "Cut p95 telemetry queue delay 91% (990 → 90 ms) with 16 in-process consumers by coalescing stale snapshots, while preserving route events and command acknowledgments.",
      "Raised mean macro-F1 on OBD-II telemetry from 0.515 to 0.710 against a linear baseline across four forward-chaining folds.",
      "Cut eight-view camera detector processing time 89% across 600 paired benchmark rounds, with outputs preserved on fixed fixtures."
    ],
    tech: ["Python", "FastAPI", "XGBoost", "SHAP", "Three.js"],
    link: "https://github.com/pavann19/DDS"
  },
  {
    title: "SoundIntelligence",
    description: "Captures system audio on Windows, classifies it with FFT + YAMNet, and writes a live Equalizer APO profile, so the EQ adapts as the audio changes without manual presets.",
    tech: ["Python", "WASAPI", "YAMNet", "Qt"],
    link: "https://github.com/pavann19/AI-powered-Sound-EQ"
  }
];

export function SupportingProjects() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          title="Additional Projects"
          subtitle="Smaller projects in applied ML, data and audio."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportingProjects.map((project, idx) => (
            <GlassCard key={project.title} className="p-8 flex flex-col" delay={idx * 0.1}>

              {/* Header row */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <FolderGit2 className="w-6 h-6 text-[#2563eb]" />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#64748b] hover:text-[#0f172a] transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.description}
              </p>

              {/* Results (optional) */}
              {project.results && (
                <ul className="space-y-3 mt-5 flex-1">
                  {project.results.map((result) => (
                    <li key={`${project.title}-${result}`} className="text-sm text-[#334155] leading-relaxed flex gap-3 items-start">
                      <ChevronRight className="mt-0.5 w-4 h-4 text-[#2563eb] shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[#e2e8f0]">
                {project.tech.map((t) => (
                  <span key={`${project.title}-${t}`} className="text-xs font-mono text-[#334155] bg-[#ffffff] border border-[#e2e8f0] px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>

            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
