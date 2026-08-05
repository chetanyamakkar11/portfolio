import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Believe from './components/Believe';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sectionIds = ['top', 'projects', 'believe', 'interests', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <Hero />
        <Projects />
        <Believe />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
