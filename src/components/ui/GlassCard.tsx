"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, hoverEffect = true, className, delay = 0, ...props }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion Values for mouse positions relative to the container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for 3D Tilt rotation to make the animation fluid and organic
  const rotateXSpring = useSpring(0, { stiffness: 120, damping: 20 });
  const rotateYSpring = useSpring(0, { stiffness: 120, damping: 20 });

  // Transforms mapping coordinates to subtle rotation angles (max 12 degrees tilt)
  const rotateX = useTransform(rotateYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(rotateXSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverEffect) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative positions between 0 and 1
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Scale to range [-0.5, 0.5]
    const relativeX = (x / width) - 0.5;
    const relativeY = (y / height) - 0.5;

    rotateXSpring.set(relativeX);
    rotateYSpring.set(relativeY);

    // Track coordinates in pixels for cursor spotlight reflection
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (!hoverEffect) return;
    
    rotateXSpring.set(0);
    rotateYSpring.set(0);
    
    // Set spotlight out of bounds when not hovering
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  // Convert mouse pixel coordinates to radial-gradient string style values
  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.05), transparent 80%)`
  );

  const innerBorderBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.12), transparent 80%)`
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hoverEffect ? rotateX : 0,
        rotateY: hoverEffect ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      className={cn(
        "glass-panel rounded-2xl relative overflow-hidden spatial-layer",
        hoverEffect && "group",
        className
      )}
      {...props as any}
    >
      {/* Liquid Spotlight Glow Overlay */}
      {hoverEffect && (
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
          style={{ background: spotlightBg }}
        />
      )}

      {/* Floating interior border highlight (reactions to cursor) */}
      {hoverEffect && (
        <motion.div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 rounded-2xl"
          style={{
            border: "1px solid transparent",
            backgroundImage: innerBorderBg,
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude"
          }}
        />
      )}

      {/* Top glare reflection edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent z-20" />
      
      {/* Base container content wrapper */}
      <div className="relative z-10 h-full w-full" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
