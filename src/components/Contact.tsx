"use client";

import { SectionHeader } from "./ui/SectionHeader";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          title="Contact"
          subtitle=""
        />

        <div className="mt-12 flex flex-col gap-6 text-lg">
          <p className="text-[#334155] leading-relaxed max-w-2xl">
            I am currently open to discussions regarding Master's programmes, research opportunities, and collaborations in AI security.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:pavangannoju.germany@gmail.com" className="flex items-center gap-3 text-[#0f172a] hover:text-[#2563eb] transition-colors font-medium w-fit">
              <Mail className="w-6 h-6 text-[#64748b]" />
              pavangannoju.germany@gmail.com
            </a>
            
            <a href="https://github.com/pavann19" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0f172a] hover:text-[#2563eb] transition-colors font-medium w-fit">
              <FaGithub className="w-6 h-6 text-[#64748b]" />
              github.com/pavann19
            </a>
            
            <a href="https://linkedin.com/in/pavan-gannoju/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0f172a] hover:text-[#0a66c2] transition-colors font-medium w-fit">
              <FaLinkedin className="w-6 h-6 text-[#64748b]" />
              linkedin.com/in/pavan-gannoju
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
