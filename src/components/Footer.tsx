import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="py-12 border-t border-[#334155] bg-[#0f172a] mt-20 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[#f8fafc] text-sm font-semibold">Pavan Kumar Gannoju</span>
          <p className="text-[#94a3b8] text-xs">
            © {new Date().getFullYear()} · Built with Next.js
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/pavann19" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/pavan-gannoju/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:pavangannoju.germany@gmail.com" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
