import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="py-12 border-t border-[#e2e8f0] bg-[#ffffff] mt-20 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[#0f172a] text-sm font-semibold">Pavan Kumar Gannoju</span>
          <p className="text-[#64748b] text-xs">
            © {new Date().getFullYear()} · Built with Next.js
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/pavann19" target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#0f172a] transition-colors">
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/pavan-gannoju/" target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#0f172a] transition-colors">
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:pavangannoju.germany@gmail.com" className="text-[#64748b] hover:text-[#0f172a] transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
