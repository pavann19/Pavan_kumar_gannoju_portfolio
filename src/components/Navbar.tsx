"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = navItems.map(item => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // if the top of the section is above the middle of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // trigger once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "py-4 bg-[#ffffff]/90 backdrop-blur-xl border-[#e2e8f0] shadow-lg" 
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#home" className="group flex items-center gap-1.5 text-2xl font-black tracking-tight text-[#0f172a] relative z-20">
          <span className="text-[#0f172a] group-hover:text-[#2563eb] transition-colors">Pavan</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] group-hover:scale-125 transition-transform duration-300" />
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-500 ${
          scrolled ? "bg-[#0f172a] border border-[#e2e8f0]" : "bg-transparent"
        }`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-[#0f172a]" : "text-[#334155] hover:text-[#0f172a]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#e2e8f0] rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-20 p-2 text-[#0f172a]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#ffffff]/95 backdrop-blur-xl z-10 flex flex-col items-center justify-center transition-all duration-500 md:hidden overflow-y-auto py-20 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
          <div className="flex flex-col items-center gap-8 my-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-2xl font-bold transition-colors ${
                  activeSection === item.href.substring(1) ? "text-[#2563eb]" : "text-[#0f172a] hover:text-[#2563eb]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
