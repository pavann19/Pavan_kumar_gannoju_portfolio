import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0B0F19] mt-20 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#9CA3AF] text-sm font-medium">
          © {new Date().getFullYear()} Pavan Kumar Gannoju. Engineered for scale.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/pavann19" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors">
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/pavangannoju" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#06B6D4] transition-colors">
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:pavan.gannoju.work@gmail.com" className="text-[#9CA3AF] hover:text-[#8B5CF6] transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
