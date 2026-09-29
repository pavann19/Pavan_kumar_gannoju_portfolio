"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/70 backdrop-blur-3xl backdrop-saturate-[200%] border-b border-white/60 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.05),0_1px_3px_0_rgba(15,23,42,0.03),inset_0_1px_1px_0_rgba(255,255,255,0.95)]"
          : "py-5 bg-white/35 backdrop-blur-xl backdrop-saturate-[180%] border-b border-white/30"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Brand with Apple-style Concentric Living Beacon */}
        <div className="flex-1 flex justify-start">
          <Link
            href="#home"
            className="group flex items-center gap-2 text-2xl font-black tracking-tight text-[#0f172a] relative z-20"
          >
            <span className="tracking-tight text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
              Pavan
            </span>
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb] shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
            </span>
          </Link>
        </div>

        {/* Center: Apple Liquid Glass Dynamic Capsule Container */}
        <nav
          className={`hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/65 backdrop-blur-2xl backdrop-saturate-[200%] border border-white/80 shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.95),0_6px_20px_-2px_rgba(15,23,42,0.06)]"
              : "bg-white/45 backdrop-blur-xl backdrop-saturate-[180%] border border-white/60 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.85),0_4px_16px_rgba(15,23,42,0.03)]"
          }`}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const isHovered = hoveredSection === item.name;

            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredSection(item.name)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 select-none ${
                  isActive
                    ? "text-[#2563eb] font-semibold"
                    : "text-[#475569] hover:text-[#0f172a]"
                }`}
              >
                {/* Active Segment: Prominent Liquid Glass Capsule */}
                {isActive && (
                  <motion.div
                    layoutId="liquidGlassActiveIndicator"
                    className="absolute inset-0 bg-white/95 rounded-full z-[-1] border border-blue-500/20 shadow-[0_2px_12px_rgba(37,99,235,0.14),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Interactive Pointer Response: Fluid Liquid Hover Highlight */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="liquidGlassHoverIndicator"
                    className="absolute inset-0 bg-slate-900/[0.04] rounded-full z-[-1] border border-white/40"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}

                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Spacer for optical centering of nav dock on desktop */}
        <div className="hidden md:flex flex-1 justify-end" />

        {/* Mobile Menu Glass Button */}
        <button
          className="md:hidden relative z-20 p-2.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/80 text-[#0f172a] shadow-sm active:scale-90 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Fullscreen Liquid Glass Sheet */}
        <div
          className={`fixed inset-0 bg-white/80 backdrop-blur-3xl backdrop-saturate-[200%] z-10 flex flex-col items-center justify-center transition-all duration-500 md:hidden overflow-y-auto py-20 ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-5 my-auto w-full px-8 max-w-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`w-full text-center py-3.5 px-6 rounded-2xl text-xl font-bold transition-all duration-300 border ${
                    isActive
                      ? "bg-blue-600/10 text-[#2563eb] border-blue-500/25 shadow-sm"
                      : "bg-white/50 text-[#0f172a] border-white/80 hover:bg-white/80 hover:text-[#2563eb]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- UNDER THE NAV BAR: Apple Liquid Glass Optical Mechanics --- */}
      {/* 1. Prismatic Chromatic Light Refraction Edge */}
      <div
        className={`absolute bottom-0 inset-x-0 h-[1px] transition-opacity duration-500 pointer-events-none ${
          scrolled ? "opacity-100" : "opacity-40"
        } bg-gradient-to-r from-transparent via-blue-500/35 via-indigo-500/30 via-cyan-400/25 to-transparent`}
      />

      {/* 2. Liquid Glass Caustic Under-Glow Aura */}
      <div
        className={`absolute -bottom-5 inset-x-0 h-5 pointer-events-none transition-opacity duration-700 bg-gradient-to-b from-blue-500/[0.035] via-indigo-500/[0.015] to-transparent blur-[2px] ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* 3. Fluid Liquid Light Progress Beam */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-blue-600 via-indigo-500 via-sky-400 to-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8),0_0_4px_rgba(56,189,248,0.6)] pointer-events-none"
      />
    </motion.header>
  );
}


