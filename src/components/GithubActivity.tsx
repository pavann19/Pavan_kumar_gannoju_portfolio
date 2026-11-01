"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { FaGithub, FaTerminal } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const languages = ["Python", "TypeScript", "Java", "Go", "Rust", "React & Next.js"];

const featuredRepos = [
  { name: "LedgerLine", href: "https://github.com/pavann19/LedgerLine" },
  { name: "ModelGate", href: "https://github.com/pavann19/ModelGate" },
  { name: "QuorumKV", href: "https://github.com/pavann19/QuorumKV" },
  { name: "Gatekeeper", href: "https://github.com/pavann19/Gatekeeper-AI-Infrastructure-and-Governance-Gateway" },
  { name: "SentinAL", href: "https://github.com/pavann19/SentinAL-Desktop-AI-Orchestration" },
  { name: "Agentic-OS", href: "https://github.com/pavann19/Agentic-OS" }
];

export function GithubActivity() {
  return (
    <section id="github" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader
          title="GitHub"
          subtitle="Source code, tests and validation notes for the featured projects."
        />

        <GlassCard className="p-8 md:p-12 text-center" delay={0.1}>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="p-4 bg-[#f8fafc] rounded-full border border-[#e2e8f0] shadow-lg shadow-black/20">
              <FaGithub className="w-12 h-12 text-[#0f172a]" />
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#0f172a]">@pavann19</h3>
              <p className="text-[#64748b] max-w-lg mx-auto leading-relaxed">
                Each featured project has its own repository with source code, tests and validation notes, so the numbers on this page can be checked against the code.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {featuredRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#ffffff] hover:bg-[#f8fafc] rounded-lg text-sm font-medium text-[#334155] hover:text-[#0f172a] border border-[#e2e8f0] hover:border-[#2563eb] transition-colors"
                >
                  {repo.name}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {languages.map((language) => (
                <span
                  key={language}
                  className="px-4 py-2 bg-[#ffffff] rounded-full text-xs font-mono text-[#2563eb] border border-[#e2e8f0] flex items-center gap-2"
                >
                  <FaTerminal className="w-3 h-3" aria-hidden="true" /> {language}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/pavann19"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-[#ffffff] font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:shadow-[0_0_30px_rgba(96,165,250,0.5)]"
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
