import { Award, ShieldCheck } from 'lucide-react';

const certs = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "2023",
    icon: <ShieldCheck className="w-8 h-8 text-sky-400" />
  },
  {
    name: "Microsoft Cybersecurity Analyst Professional Certificate",
    issuer: "Microsoft",
    date: "2024",
    icon: <ShieldCheck className="w-8 h-8 text-sky-400" />
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Certifications</h2>
            <p className="text-slate-400">
              Professional credentials validating my expertise in secure systems and infrastructure.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {certs.map((cert, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl card-hover flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-1">{cert.name}</h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-slate-400">
                    <Award className="w-4 h-4 text-sky-500" />
                    <span>{cert.issuer}</span>
                    <span className="text-slate-600">•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
