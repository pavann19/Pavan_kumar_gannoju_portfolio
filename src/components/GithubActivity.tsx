"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { FaGithub, FaTerminal } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export function GithubActivity() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader 
          title="Open Source Activity" 
          subtitle="Explore my public repositories, technical experiments, and contributions to the developer community."
        />

        <GlassCard className="p-8 md:p-12 text-center" delay={0.1}>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="p-4 bg-[#0f172a] rounded-full border border-[#e2e8f0] shadow-lg shadow-black/20">
              <FaGithub className="w-12 h-12 text-[#0f172a]" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#0f172a]">@pavann19</h3>
              <p className="text-[#64748b] max-w-lg mx-auto leading-relaxed">
                I actively maintain repositories focusing on AI infrastructure, backend architecture, and modern web applications. Check out my code to see how I structure projects, write documentation, and solve complex problems.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <span className="px-4 py-2 bg-[#ffffff] rounded-full text-xs font-mono text-[#2563eb] border border-[#0f172a] flex items-center gap-2">
                <FaTerminal className="w-3 h-3" /> Python
              </span>
              <span className="px-4 py-2 bg-[#ffffff] rounded-full text-xs font-mono text-[#2563eb] border border-[#0f172a] flex items-center gap-2">
                <FaTerminal className="w-3 h-3" /> TypeScript
              </span>
              <span className="px-4 py-2 bg-[#ffffff] rounded-full text-xs font-mono text-[#2563eb] border border-[#0f172a] flex items-center gap-2">
                <FaTerminal className="w-3 h-3" /> C++
              </span>
              <span className="px-4 py-2 bg-[#ffffff] rounded-full text-xs font-mono text-[#2563eb] border border-[#0f172a] flex items-center gap-2">
                <FaTerminal className="w-3 h-3" /> React & Next.js
              </span>
            </div>

            <a 
              href="https://github.com/pavann19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-[#ffffff] font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:shadow-[0_0_30px_rgba(96,165,250,0.5)]"
            >
              View GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
