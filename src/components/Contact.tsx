"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { Send, Mail, MapPin, CheckCircle, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MagneticButton } from "./ui/MagneticButton";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL = "pavan9542644804@gmail.com";
const GITHUB_URL = "https://github.com/pavann19";
const LINKEDIN_URL = "https://www.linkedin.com/in/pavan-gannoju/";

const EMAILJS_SERVICE_ID = "service_ip7ds88";
const EMAILJS_TEMPLATE_ID = "template_1uf6496";
const EMAILJS_PUBLIC_KEY = "N4DtI3p9JrVOZRKQL";

const contactLinks = [
  { label: EMAIL, href: `mailto:${EMAIL}`, icon: <Mail className="w-5 h-5" />, external: false },
  { label: "linkedin.com/in/pavan-gannoju", href: LINKEDIN_URL, icon: <FaLinkedin className="w-5 h-5" />, external: true },
  { label: "github.com/pavann19", href: GITHUB_URL, icon: <FaGithub className="w-5 h-5" />, external: true }
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const resetStatusLater = () => {
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot: real visitors never see or fill this field, so a value means a bot.
    const trap = formRef.current.elements.namedItem("company") as HTMLInputElement | null;
    if (trap && trap.value) {
      setStatus("success");
      formRef.current.reset();
      resetStatusLater();
      return;
    }

    setStatus("submitting");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          setStatus("success");
          if (formRef.current) formRef.current.reset();
          resetStatusLater();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          resetStatusLater();
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader
          title="Contact"
          subtitle="Open to backend and platform engineering roles in India and Germany. Send a message and I'll get back to you."
        />

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <GlassCard className="p-6 sm:p-8 h-full" delay={0.1}>
              <h3 className="text-xl font-bold text-[#0f172a] mb-8">Reach me directly</h3>
              <div className="space-y-6">
                {contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 text-[#334155] hover:text-[#2563eb] transition-colors group"
                  >
                    <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] group-hover:border-[#1d4ed8] transition-colors shrink-0">
                      {link.icon}
                    </div>
                    <span className="font-medium text-sm break-all">{link.label}</span>
                  </a>
                ))}
                <div className="flex items-center gap-4 text-[#334155]">
                  <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">Hyderabad, India</span>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="w-full md:w-2/3">
            <GlassCard className="p-6 sm:p-8 md:p-12" delay={0.2}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b-2 border-[#e2e8f0] px-0 py-3 text-[#0f172a] focus:outline-none focus:border-[#2563eb] transition-colors peer placeholder-transparent"
                      placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-[#334155] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#2563eb]">
                      Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b-2 border-[#e2e8f0] px-0 py-3 text-[#0f172a] focus:outline-none focus:border-[#2563eb] transition-colors peer placeholder-transparent"
                      placeholder="Email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-[#334155] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#2563eb]">
                      Email
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b-2 border-[#e2e8f0] px-0 py-3 text-[#0f172a] focus:outline-none focus:border-[#2563eb] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-[#334155] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#2563eb]">
                    Message
                  </label>
                </div>

                {/* Honeypot field: hidden from people, visible to bots */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="flex justify-end pt-4 min-h-14" role="status" aria-live="polite">
                  {status === "success" ? (
                    <div className="flex items-center gap-2 text-green-800 font-medium px-6 py-3 border border-green-700/30 bg-green-50 rounded-full animate-in fade-in zoom-in duration-300">
                      <CheckCircle className="w-5 h-5" />
                      Message sent. Thank you.
                    </div>
                  ) : status === "error" ? (
                    <div className="flex items-center gap-2 text-red-800 font-medium px-6 py-3 border border-red-700/30 bg-red-50 rounded-full animate-in fade-in zoom-in duration-300">
                      <XCircle className="w-5 h-5 shrink-0" />
                      Could not send that. Please email me directly.
                    </div>
                  ) : (
                    <MagneticButton type="submit" variant="primary" disabled={status === "submitting"}>
                      {status === "submitting" ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </MagneticButton>
                  )}
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
