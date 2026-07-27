"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { FaGithub } from "react-icons/fa";

export function GithubActivity() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader 
          title="Open Source Activity" 
          subtitle="Real-time GitHub statistics and top languages for my public repositories."
        />

        <GlassCard className="p-8 md:p-12 text-center" delay={0.1}>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <FaGithub className="w-8 h-8 text-[#f8fafc]" />
              <h3 className="text-2xl font-bold text-[#f8fafc]">@pavann19</h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4 w-full">
              {/* GitHub Stats */}
              <img 
                src="https://github-readme-stats.vercel.app/api?username=pavann19&show_icons=true&theme=transparent&hide_border=true&text_color=cbd5e1&icon_color=60a5fa&title_color=f8fafc" 
                alt="Pavan's GitHub Stats" 
                className="w-full md:w-1/2 max-w-md object-contain"
              />
              {/* Top Languages */}
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=pavann19&layout=compact&theme=transparent&hide_border=true&text_color=cbd5e1&title_color=f8fafc" 
                alt="Top Languages" 
                className="w-full md:w-1/2 max-w-md object-contain"
              />
            </div>

            <a 
              href="https://github.com/pavann19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 bg-[#1e293b] hover:bg-[#334155] hover:scale-105 border border-[#334155] rounded-full text-sm font-medium text-[#f8fafc] transition-all duration-300"
            >
              View Full Profile
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
