"use client";

import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
          
          {/* Photo Placeholder */}
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-2 border-[#e2e8f0] bg-[#0f172a]">
            <img 
              src="/Pavan_kumar_gannoju_portfolio/profile-placeholder.jpg" 
              alt="Pavan Kumar Gannoju"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image not found yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-[#64748b] text-sm font-mono">Photo</div>';
              }}
            />
          </div>
          
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight mb-3">
                Pavan Kumar Gannoju
              </h1>
              <p className="text-xl text-[#2563eb] font-medium">
                Aspiring Master's student in Computer Science, focused on AI security and dependable systems
              </p>
            </div>
            
            <div className="space-y-4 text-[#334155] leading-relaxed text-lg">
              <p>
                I am a Computer Science and Engineering graduate (April 2026) specializing in Artificial Intelligence and Machine Learning, with a focus on making AI systems predictable and secure rather than merely functional. My thesis, SentinAL, is a secure AI desktop orchestration system built around a validation-and-governance layer that decides what an AI agent is permitted to do before it acts. Since finishing the thesis, I have been building Gatekeeper, a guardrail gateway for LLM systems, on my own.
              </p>
              <p>
                Previously, I worked as a Research Team Lead at Prodigal AI Technologies, where I led the architecture behind two research manuscripts on generative AI security and adversarial robustness, and as a Gen AI/LLM intern at Digital Nexus AI, building LLM-powered developer tools.
              </p>
              <p>
                I am currently applying for Master's programmes in Computer Science in Germany, with a focus on software engineering, systems security, and formal methods for AI systems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="mailto:pavangannoju.germany@gmail.com" className="flex items-center gap-2 text-[#64748b] hover:text-[#2563eb] transition-colors font-medium">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a href="https://github.com/pavann19" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#64748b] hover:text-[#0f172a] transition-colors font-medium">
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/pavan-gannoju/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#64748b] hover:text-[#0a66c2] transition-colors font-medium">
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-[#64748b] hover:text-[#0f172a] transition-colors font-medium">
                <FileText className="w-5 h-5" />
                <span>CV</span>
              </a>
            </div>
          </div>
          
        </div>
        
        <hr className="mt-24 border-[#e2e8f0]" />
      </div>
    </section>
  );
}
