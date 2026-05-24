"use client";

import React from 'react';
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { MagneticButton } from "./ui/MagneticButton";
import { FaGithub } from "react-icons/fa";
import { Network, Lock, Database, Bot, FileCode2 } from "lucide-react";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "SentinAL",
    icon: <Network className="w-8 h-8 text-[#3B82F6]" />,
    description: "Validation-based execution pipeline with role-aware action handling and modular backend architecture.",
    architecture: "Request → Validation Layer → Role Auth → Execution Engine → Audit Logger",
    tech: ["Python", "FastAPI", "SQLite", "LLM APIs"],
    link: "https://github.com/pavann19"
  },
  {
    title: "Secure RBAC System",
    icon: <Lock className="w-8 h-8 text-[#06B6D4]" />,
    description: "JWT authentication framework with session isolation, role-based access control, and audit logging integration.",
    architecture: "Client → API Gateway → JWT Middleware → Auth Service → PostgreSQL",
    tech: ["FastAPI", "PostgreSQL", "JWT", "Python"],
    link: "https://github.com/pavann19"
  },
  {
    title: "API Traffic Control Platform",
    icon: <Database className="w-8 h-8 text-[#8B5CF6]" />,
    description: "Middleware platform for API rate limiting, request validation, and traffic monitoring in high-load environments.",
    architecture: "API Request → Rate Limiter (Redis) → Validation Middleware → Backend Service",
    tech: ["Python", "PostgreSQL", "Docker", "FastAPI"],
    link: "https://github.com/pavann19"
  },
  {
    title: "AI Chatbot & RAG System",
    icon: <Bot className="w-8 h-8 text-[#3B82F6]" />,
    description: "Retrieval-Augmented Generation assistant with document indexing and context-aware response flows.",
    architecture: "User Query → Embedding Model → Vector Search → Context Synthesis → LLM",
    tech: ["Python", "Vector Search", "LLM APIs"],
    link: "https://github.com/pavann19"
  },
  {
    title: "Auto Documentation Tool",
    icon: <FileCode2 className="w-8 h-8 text-[#06B6D4]" />,
    description: "AI-assisted backend utility automating structured output generation for developer productivity.",
    architecture: "Source Code → Parser Engine → LLM Summarization → Markdown Generator",
    tech: ["Python", "APIs", "Automation Tools"],
    link: "https://github.com/pavann19"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Engineering large-scale architectures, secure access systems, and AI-integrated backends."
        />

        <div className="space-y-12">
          {featuredProjects.map((project, idx) => (
            <GlassCard key={idx} className="p-0 overflow-hidden group" delay={idx * 0.1}>
              <div className="flex flex-col lg:flex-row">
                
                {/* Left Content Area */}
                <div className="w-full lg:w-[45%] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                        {project.icon}
                      </div>
                      <h3 className="text-3xl font-extrabold text-[#F9FAFB] tracking-tight">{project.title}</h3>
                    </div>
                    
                    <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-10 space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="tech-pill px-3 py-1 text-sm rounded-full font-mono">
                          {t}
                        </span>
                      ))}
                    </div>

                    <MagneticButton variant="glass" className="w-fit" href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-5 h-5" />
                      View Source
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Architecture Area */}
                <div className="w-full lg:w-[55%] p-8 lg:p-12 bg-black/40 flex items-center justify-center relative overflow-hidden">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10 w-full glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                      <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                      <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                      <span className="ml-2 text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">Architecture Flow</span>
                    </div>
                    <div className="p-6 bg-[#0B0F19] rounded-xl border border-white/5">
                      <code className="text-[#38bdf8] font-mono text-sm md:text-base leading-loose block break-words">
                        {project.architecture.split(' → ').map((step, i, arr) => (
                          <React.Fragment key={i}>
                            <span className="text-[#F9FAFB]">{step}</span>
                            {i < arr.length - 1 && <span className="text-[#9CA3AF] mx-2">→</span>}
                          </React.Fragment>
                        ))}
                      </code>
                    </div>
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
