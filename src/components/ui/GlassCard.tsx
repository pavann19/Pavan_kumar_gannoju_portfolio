"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, hoverEffect = true, className, delay = 0, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(
        "tech-card relative overflow-hidden",
        hoverEffect && "hover:border-[#475569]",
        className
      )}
      {...props as any}
    >
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
