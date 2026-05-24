"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Lock, FileText, LayoutTemplate, ShieldAlert, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Designing Reliable AI Workflow Systems",
    icon: <Cpu className="w-5 h-5 text-[#3B82F6]" />,
  },
  {
    title: "Backend Validation Pipelines",
    icon: <ShieldAlert className="w-5 h-5 text-[#06B6D4]" />,
  },
  {
    title: "Scalable FastAPI Patterns",
    icon: <LayoutTemplate className="w-5 h-5 text-[#8B5CF6]" />,
  },
  {
    title: "Secure API Architectures",
    icon: <Lock className="w-5 h-5 text-[#3B82F6]" />,
  },
  {
    title: "AI Workflow Orchestration Concepts",
    icon: <FileText className="w-5 h-5 text-[#06B6D4]" />,
  }
];

export function TechnicalWriting() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader 
          title="Technical Writing" 
          subtitle="Sharing engineering insights, architecture patterns, and infrastructure concepts."
        />

        <GlassCard className="p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-[#8B5CF6]/5 opacity-50 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur text-sm font-medium text-[#06B6D4] tracking-widest uppercase">
              Content Coming Soon
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#F9FAFB] mb-8">
              Upcoming Architecture Notes
            </h3>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {articles.map((article, idx) => (
                <div key={idx} className="flex items-center gap-3 px-5 py-3 bg-[#111827] border border-white/5 rounded-xl">
                  {article.icon}
                  <span className="text-[#9CA3AF] text-sm font-medium">{article.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
