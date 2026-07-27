import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { News } from '@/components/News';
import { Projects } from '@/components/Projects';
import { Publications } from '@/components/Publications';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <News />
        <Projects />
        <Publications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
