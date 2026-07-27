"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Lock, FileText, LayoutTemplate, ShieldAlert, Cpu, Pencil } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Designing Reliable AI Workflow Systems",
    icon: <Cpu className="w-5 h-5 text-[#2563eb]" />,
  },
  {
    title: "Backend Validation Pipelines",
    icon: <ShieldAlert className="w-5 h-5 text-[#2563eb]" />,
  },
  {
    title: "Scalable FastAPI Patterns",
    icon: <LayoutTemplate className="w-5 h-5 text-[#2563eb]" />,
  },
  {
    title: "Secure API Architectures",
    icon: <Lock className="w-5 h-5 text-[#2563eb]" />,
  },
  {
    title: "AI Workflow Orchestration Concepts",
    icon: <FileText className="w-5 h-5 text-[#2563eb]" />,
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
            <div className="p-3 bg-[#ffffff] rounded-xl border border-[#e2e8f0]">
              <Pencil className="w-6 h-6 text-[#2563eb]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-1">Upcoming Architecture Notes</h3>
              <p className="text-sm text-[#64748b]">Drafts in progress — topics I plan to write about based on my project work.</p>
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
                className="flex items-center gap-3 px-4 py-3 bg-[#ffffff] border border-[#e2e8f0] rounded-xl hover:border-[#334155] transition-colors"
              >
                {article.icon}
                <span className="text-[#334155] text-sm font-medium">{article.title}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
