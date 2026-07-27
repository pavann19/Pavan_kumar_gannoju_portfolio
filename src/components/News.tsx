"use client";

import { SectionHeader } from "./ui/SectionHeader";

const newsItems = [
  {
    date: "Apr 2026",
    text: "Graduated with a B.Tech in Computer Science and Engineering (AI & ML), ranked 11th of 62."
  },
  {
    date: "Nov 2025",
    text: "Completed internship at Prodigal AI Technologies as Research Team Lead, Generative AI Security & Trustworthy AI R&D Unit, leading research on two manuscripts in generative AI security and adversarial robustness."
  },
  {
    date: "Sep 2025",
    text: "Completed internship at Digital Nexus AI as a Gen AI/LLM Intern, building LLM-powered developer tools."
  },
  {
    date: "Mar 2025",
    text: "Began research internship at Prodigal AI Technologies, joining as an AI Intern in a Generative AI Security R&D unit."
  }
];

export function News() {
  return (
    <section id="news" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader 
          title="News" 
          subtitle=""
        />

        <div className="space-y-6 mt-12">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-baseline">
              <span className="text-[#64748b] font-mono text-sm whitespace-nowrap min-w-[100px]">
                {item.date} —
              </span>
              <p className="text-[#334155] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        
        <hr className="mt-24 border-[#e2e8f0]" />
      </div>
    </section>
  );
}
