"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass";
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
}
export function MagneticButton({ 
  children, 
  variant = "glass", 
  className,
  href,
  target,
  rel,
  download,
  ...props 
}: MagneticButtonProps) {
  const buttonRef = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current!.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-[#2563EB] hover:bg-[#1d4ed8] text-white border border-[#1d4ed8]",
    secondary: "bg-[#f8fafc] hover:bg-[#e2e8f0] text-[#0f172a] border border-[#e2e8f0]",
    glass: "tech-card hover:bg-[#e2e8f0] text-[#0f172a]",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      download={download}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors duration-300 overflow-hidden cursor-pointer group",
        variants[variant],
        className
      )}
      {...props as any}
    >
      <div className="relative z-10 flex items-center gap-2 w-full h-full justify-center">
        {children}
      </div>
    </Component>
  );
}
