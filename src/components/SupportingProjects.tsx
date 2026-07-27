"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { FaGithub } from "react-icons/fa";
import { FolderGit2 } from "lucide-react";

const supportingProjects = [
  {
    title: "Data Processing Pipeline",
    description: "Automated ETL pipeline processing vehicle sensor logs using Python and SQL for anomaly detection.",
    tech: ["Python", "SQL", "Pandas"],
    link: "https://github.com/pavann19"
  },
  {
    title: "Cloud Auto-Scaler",
    description: "Serverless auto-scaling orchestration layer using AWS Lambda and CloudWatch custom metrics.",
    tech: ["AWS Lambda", "CloudWatch", "Python"],
    link: "https://github.com/pavann19"
  },
  {
    title: "Fault-Tolerant Microservices",
    description: "Resilient backend architecture implementing circuit breakers and centralized health monitoring.",
    tech: ["FastAPI", "Redis", "Docker"],
    link: "https://github.com/pavann19"
  }
];

export function SupportingProjects() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Supporting Architecture & Utilities" 
          subtitle="Additional tools, experiments, and backend utilities built for system optimization."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportingProjects.map((project, idx) => (
            <GlassCard key={idx} className="p-6 sm:p-8 flex flex-col justify-between" delay={idx * 0.1}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                    <FolderGit2 className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#334155] hover:text-[#0f172a] transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{project.title}</h3>
                <p className="text-sm text-[#334155] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-[#334155] bg-[#ffffff] border border-[#e2e8f0] px-3 py-1 rounded-lg">
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
