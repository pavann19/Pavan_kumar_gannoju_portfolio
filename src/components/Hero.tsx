"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText, ChevronDown } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { assetPath } from "@/lib/assetPath";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, y: 0, 
    transition: { duration: 0.7 }
  }
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-tech-grid">
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="px-4 py-2 mb-8 rounded-full border border-[#334155] bg-[#1e293b] shadow-sm">
          <span className="text-sm font-medium text-[#cbd5e1]">German Master's Applicant · Summer 2027</span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#f8fafc] mb-6 px-4">
          Pavan Kumar Gannoju
        </motion.h1>

        {/* Tagline */}
        <motion.h2 variants={fadeUp} className="text-lg sm:text-xl md:text-2xl font-semibold text-[#94a3b8] mb-8 px-4">
          Software Engineer · Backend & AI Systems · Scalable Applications
        </motion.h2>

        {/* Bio + Stats */}
        <motion.div variants={fadeUp} className="max-w-2xl mx-auto mb-12 px-6 space-y-4">
          <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
            Computer Science (AI/ML) graduate focused on backend engineering, scalable applications, and AI-powered systems.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-mono">
            <span className="px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] text-[#f8fafc]">CGPA 8.01/10</span>
            <span className="px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] text-[#cbd5e1]">German eq. 2.1–2.2</span>
            <span className="px-4 py-2 rounded-lg bg-[#1e293b] border border-[#334155] text-[#cbd5e1]">IELTS 6.5</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <MagneticButton variant="primary" href="#projects">
            View Projects
          </MagneticButton>
          
          <MagneticButton variant="secondary" href={assetPath("/Pavan_Kumar_Gannoju_CV.pdf")} target="_blank" rel="noopener noreferrer">
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[#475569] hover:text-[#94a3b8] transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
