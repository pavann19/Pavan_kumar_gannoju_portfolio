"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Immersive Spatial Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B82F6]/20 rounded-full blur-[150px] mix-blend-screen opacity-50 animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06B6D4]/15 rounded-full blur-[120px] mix-blend-screen opacity-40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
        >
          <span className="text-sm font-medium text-[#9CA3AF]">Available for Software Engineering Roles</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#F9FAFB] mb-6 px-4"
        >
          Pavan Kumar Gannoju
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-lg sm:text-xl md:text-3xl font-semibold text-gradient mb-8 px-4"
        >
          Software Engineer | Backend & AI Systems | Scalable Applications
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-12 px-6"
        >
          Computer Science (AI/ML) student focused on backend engineering, scalable applications, and AI-powered systems. Interested in distributed systems, APIs, AI infrastructure, and production-style software engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <MagneticButton variant="primary" href="#projects">
            View Projects
          </MagneticButton>
          
          <MagneticButton variant="glass" href="/Pavan_Kumar_Gannoju_Software_Engineer_A.pdf" target="_blank" rel="noopener noreferrer">
            <FileText className="w-5 h-5" />
            Download Resume
          </MagneticButton>

          <MagneticButton variant="glass" className="px-4" href="https://github.com/pavann19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </MagneticButton>

          <MagneticButton variant="glass" className="px-4" href="https://linkedin.com/in/pavangannoju" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
