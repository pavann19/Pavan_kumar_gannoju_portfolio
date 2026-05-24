import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { SupportingProjects } from '@/components/SupportingProjects';
import { ResearchLeadership } from '@/components/ResearchLeadership';
import { TechnicalWriting } from '@/components/TechnicalWriting';
import { CertificationsGallery } from '@/components/CertificationsGallery';
import { GithubActivity } from '@/components/GithubActivity';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SupportingProjects />
        <ResearchLeadership />
        <TechnicalWriting />
        <CertificationsGallery />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
