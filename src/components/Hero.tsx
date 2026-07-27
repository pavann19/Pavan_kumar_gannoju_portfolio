"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-tech-grid">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 py-2 mb-8 rounded-full border border-[#334155] bg-[#1e293b] shadow-sm"
        >
          <span className="text-sm font-medium text-[#cbd5e1]">German Master's Applicant (Summer 2027)</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#f8fafc] mb-6 px-4"
        >
          Pavan Kumar Gannoju
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-[#cbd5e1] mb-8 px-4"
        >
          Software Engineer | Backend & AI Systems | Scalable Applications
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed mb-12 px-6"
        >
          Computer Science (AI/ML) graduate (April 2026) focused on backend engineering, scalable applications, and AI-powered systems. 
          <br/><span className="text-[#60a5fa] font-mono text-sm mt-4 inline-block font-semibold bg-[#1e293b] border border-[#334155] px-4 py-2 rounded-lg">CGPA: 8.01/10 (German eq. 2.1–2.2) | IELTS: 6.5</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <MagneticButton variant="primary" href="#projects">
            View Projects
          </MagneticButton>
          
          <MagneticButton variant="secondary" href="/Pavan_Kumar_Gannoju_CV.pdf" target="_blank" rel="noopener noreferrer">
            <FileText className="w-5 h-5" />
            Download CV
          </MagneticButton>

          <MagneticButton variant="glass" className="px-4" href="https://github.com/pavann19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </MagneticButton>

          <MagneticButton variant="glass" className="px-4" href="https://www.linkedin.com/in/pavan-gannoju/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
