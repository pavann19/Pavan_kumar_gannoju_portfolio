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
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <FolderGit2 className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-[#F9FAFB] mb-3">{project.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-[#06B6D4] bg-[#06B6D4]/10 px-2 py-1 rounded">
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
