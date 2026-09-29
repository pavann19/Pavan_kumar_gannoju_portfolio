"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { FaGithub } from "react-icons/fa";
import { FolderGit2 } from "lucide-react";

const supportingProjects = [
  {
    title: "Enterprise RAG System",
    description: "RAG pipeline over policy documents — swappable vector backends (NumPy, FAISS, Qdrant), schema-validated output, streaming, rate limiting, and property-based tests. Built to be actually configurable, not demo-ware.",
    tech: ["Python", "FastAPI", "FAISS", "Next.js"],
    link: "https://github.com/pavann19/enterprise-rag-system"
  },
  {
    title: "DDS — Driving Decision System",
    description: "Driving simulator with real decision logic — OBD-II telemetry, XGBoost + SHAP for behaviour analytics, Frenet-frame path planning, IDM car-following. Streamed live to a 3D browser HMI.",
    tech: ["Python", "FastAPI", "XGBoost", "Three.js"],
    link: "https://github.com/pavann19/DDS"
  },
  {
    title: "SoundIntelligence",
    description: "Captures whatever Windows is playing, classifies it with FFT + YAMNet, then writes a live Equalizer APO profile. The EQ adapts as the audio changes — no manual presets.",
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
          subtitle="Side projects I built when the main work didn't scratch a specific itch."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportingProjects.map((project, idx) => (
            <GlassCard key={idx} className="p-8 flex flex-col" delay={idx * 0.1}>

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
              <p className="text-sm text-[#475569] leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[#e2e8f0]">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-[#334155] bg-[#ffffff] border border-[#e2e8f0] px-3 py-1.5 rounded-lg">
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
