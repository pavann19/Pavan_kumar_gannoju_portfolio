"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Code2, Server, Database, BrainCircuit, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-[#2563eb]" />,
    skills: ["Java", "Go", "Python", "Rust", "SQL"]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-[#2563eb]" />,
    skills: ["Spring Boot", "FastAPI", "REST APIs", "Kafka", "JWT", "gRPC"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Database className="w-6 h-6 text-[#2563eb]" />,
    skills: ["Docker", "Kubernetes", "Azure", "GitHub Actions", "Terraform"]
  },
  {
    title: "AI Systems",
    icon: <BrainCircuit className="w-6 h-6 text-[#2563eb]" />,
    skills: ["LLM Guardrails", "Agent Safety", "Policy Gates", "Model Artifact Security", "Evaluation Harnesses"]
  },
  {
    title: "Security & Validation",
    icon: <Wrench className="w-6 h-6 text-[#2563eb]" />,
    skills: ["cosign", "Trivy", "Fuzzing", "Property-Based Testing", "k6", "Porcupine"]
  },
  {
    title: "Datastores",
    icon: <Database className="w-6 h-6 text-[#2563eb]" />,
    skills: ["PostgreSQL", "MySQL", "SQLite", "Redis", "FAISS", "Qdrant"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="Every tool here has been used in anger. None added for decoration."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <GlassCard key={idx} className="p-6 sm:p-8" delay={idx * 0.1}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] shadow-inner" aria-hidden="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-4 py-2 text-sm font-medium rounded-lg font-mono bg-[#ffffff] text-[#334155] hover:bg-[#e2e8f0] hover:text-[#0f172a] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
