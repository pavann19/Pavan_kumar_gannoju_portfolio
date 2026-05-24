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
    <div className={`mb-16 md:mb-24 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F9FAFB] tracking-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#9CA3AF] max-w-2xl text-lg md:text-xl font-medium mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
