"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Lock, FileText, LayoutTemplate, ShieldAlert, Cpu, Pencil } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Designing Reliable AI Workflow Systems",
    icon: <Cpu className="w-5 h-5 text-[#60a5fa]" />,
  },
  {
    title: "Backend Validation Pipelines",
    icon: <ShieldAlert className="w-5 h-5 text-[#60a5fa]" />,
  },
  {
    title: "Scalable FastAPI Patterns",
    icon: <LayoutTemplate className="w-5 h-5 text-[#60a5fa]" />,
  },
  {
    title: "Secure API Architectures",
    icon: <Lock className="w-5 h-5 text-[#60a5fa]" />,
  },
  {
    title: "AI Workflow Orchestration Concepts",
    icon: <FileText className="w-5 h-5 text-[#60a5fa]" />,
  }
];

export function TechnicalWriting() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader 
          title="Technical Writing" 
          subtitle="Architecture notes and engineering insights — in progress."
        />

        <GlassCard className="p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="p-3 bg-[#0f172a] rounded-xl border border-[#334155]">
              <Pencil className="w-6 h-6 text-[#60a5fa]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#f8fafc] mb-1">Upcoming Architecture Notes</h3>
              <p className="text-sm text-[#94a3b8]">Drafts in progress — topics I plan to write about based on my project work.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {articles.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-xl hover:border-[#475569] transition-colors"
              >
                {article.icon}
                <span className="text-[#cbd5e1] text-sm font-medium">{article.title}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
