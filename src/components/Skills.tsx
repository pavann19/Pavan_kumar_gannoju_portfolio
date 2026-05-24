"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Code2, Server, Database, BrainCircuit, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-[#3B82F6]" />,
    skills: ["Python", "Java", "C++", "SQL", "JavaScript"]
  },
  {
    title: "Backend & Infrastructure",
    icon: <Server className="w-6 h-6 text-[#06B6D4]" />,
    skills: ["FastAPI", "REST APIs", "JWT", "Docker", "Git", "System Design"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-[#8B5CF6]" />,
    skills: ["PostgreSQL", "MySQL", "SQLite", "Vector Databases"]
  },
  {
    title: "AI Systems",
    icon: <BrainCircuit className="w-6 h-6 text-[#3B82F6]" />,
    skills: ["LLM Applications", "RAG Pipelines", "Prompt Engineering", "Agentic AI Workflows", "PyTorch"]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-[#06B6D4]" />,
    skills: ["AWS", "Vercel", "Streamlit", "Cursor AI"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader 
          title="Technical Ecosystem" 
          subtitle="Categorized overview of my core competencies in backend engineering, systems architecture, and AI integrations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <GlassCard key={idx} className="p-8" delay={idx * 0.1}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F9FAFB] tracking-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="tech-pill px-4 py-2 text-sm font-medium rounded-full font-mono cursor-default"
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
