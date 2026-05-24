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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#home" className="group flex items-center gap-1.5 text-2xl font-black tracking-tight text-[#F9FAFB] relative z-20">
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">Pavan</span>
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#06B6D4] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-500 ${
          scrolled ? "glass-panel" : "bg-transparent"
        }`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-20 p-2 text-[#F9FAFB]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#0B0F19]/95 backdrop-blur-xl z-10 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-bold text-[#F9FAFB] hover:text-[#3B82F6] transition-colors"
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
