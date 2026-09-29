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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
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
          ? "py-3 bg-white/70 backdrop-blur-2xl backdrop-saturate-[190%] border-b border-white/60 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.06),0_1px_3px_0_rgba(15,23,42,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)]"
          : "py-5 bg-white/30 backdrop-blur-md backdrop-saturate-150 border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand with Apple-style Live Breathing Beacon */}
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

        {/* Apple Dynamic Island / Floating Glass Capsule Nav */}
        <nav
          className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/60 backdrop-blur-xl border border-white/80 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),0_4px_16px_rgba(15,23,42,0.04)]"
              : "bg-white/40 backdrop-blur-md border border-white/50 shadow-sm"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-[#2563eb] font-semibold"
                    : "text-[#475569] hover:text-[#0f172a] hover:bg-slate-900/[0.03]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/95 rounded-full z-[-1] border border-blue-500/15 shadow-[0_2px_10px_rgba(37,99,235,0.12),inset_0_1px_0_rgba(255,255,255,1)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

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
          className={`fixed inset-0 bg-white/85 backdrop-blur-3xl backdrop-saturate-[180%] z-10 flex flex-col items-center justify-center transition-all duration-500 md:hidden overflow-y-auto py-20 ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 my-auto w-full px-8 max-w-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`w-full text-center py-3.5 px-6 rounded-2xl text-xl font-bold transition-all duration-300 border ${
                    isActive
                      ? "bg-blue-600/10 text-[#2563eb] border-blue-500/20 shadow-sm"
                      : "bg-white/50 text-[#0f172a] border-slate-200/60 hover:bg-white/80 hover:text-[#2563eb]"
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

      {/* --- UNDER THE NAV BAR: Apple iOS 27 Glassmorphism Optical Effects --- */}
      {/* 1. Prismatic Chromatic Light Refraction Edge */}
      <div
        className={`absolute bottom-0 inset-x-0 h-[1px] transition-opacity duration-500 pointer-events-none ${
          scrolled ? "opacity-100" : "opacity-50"
        } bg-gradient-to-r from-transparent via-blue-500/40 via-indigo-500/35 via-cyan-400/30 to-transparent`}
      />

      {/* 2. Liquid Glass Caustic Under-Glow Aura */}
      <div
        className={`absolute -bottom-5 inset-x-0 h-5 pointer-events-none transition-opacity duration-700 bg-gradient-to-b from-blue-500/[0.04] via-indigo-500/[0.015] to-transparent blur-[2px] ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* 3. Dynamic Liquid Light Scroll Beam (Reading / Scroll Progress) */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-blue-600 via-indigo-500 via-sky-400 to-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8),0_0_4px_rgba(56,189,248,0.6)] pointer-events-none"
      />
    </motion.header>
  );
}

