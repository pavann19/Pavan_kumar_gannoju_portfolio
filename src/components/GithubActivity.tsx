"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { FaGithub } from "react-icons/fa";
import { GitCommit, GitPullRequest, GitMerge } from "lucide-react";

export function GithubActivity() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader 
          title="Open Source Activity" 
          subtitle="A minimal overview of my recent contributions and engineering output."
        />

        <GlassCard className="p-8 md:p-12 text-center" delay={0.1}>
          <div className="flex flex-col items-center justify-center gap-6">
            <FaGithub className="w-12 h-12 text-[#F9FAFB]" />
            <h3 className="text-2xl font-bold text-[#F9FAFB]">@pavann19</h3>
            
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="flex flex-col items-center gap-2">
                <GitCommit className="w-6 h-6 text-[#3B82F6]" />
                <span className="text-[#9CA3AF] text-sm font-medium">Consistent Commits</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitPullRequest className="w-6 h-6 text-[#06B6D4]" />
                <span className="text-[#9CA3AF] text-sm font-medium">Active PRs</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GitMerge className="w-6 h-6 text-[#8B5CF6]" />
                <span className="text-[#9CA3AF] text-sm font-medium">Code Reviews</span>
              </div>
            </div>

            <a 
              href="https://github.com/pavann19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-[#F9FAFB] transition-colors"
            >
              View Full Profile
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
