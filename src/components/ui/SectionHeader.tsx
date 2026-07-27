"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight mb-4">
          {title}
        </h2>
        <div className={`w-12 h-0.5 bg-[#3b82f6] mb-6 ${align === "center" ? "mx-auto" : ""}`} />
        {subtitle && (
          <p className={`text-[#94a3b8] max-w-xl text-base md:text-lg font-medium ${align === "center" ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
