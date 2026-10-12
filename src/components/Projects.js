import React from 'react';
import { Github, ChevronRight, BookOpen } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projectBoxes, contact } from '../data/content';

function Tile({ href, eyebrow, icon, title, description, cta, featured = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="press tile-link focus-ring h-full min-h-[22rem] flex flex-col rounded-tile bg-tile p-8 sm:p-10"
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
          featured ? 'bg-accent text-white dark:text-black' : 'bg-ink text-canvas'
        }`}
      >
        {icon}
      </div>
      <p className={`eyebrow ${featured ? 'text-accent' : 'text-ink-3'}`}>{eyebrow}</p>
      <h3 className="mt-2 title text-ink">{title}</h3>
      <p className="mt-3 text-ink-2 leading-relaxed">{description}</p>
      <span className="chevron-link mt-auto pt-8 inline-flex items-center gap-0.5 text-accent font-medium">
        {cta} <ChevronRight size={18} />
      </span>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6">
      <div className="max-w-page mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Projects" heading={projectBoxes.heading} />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-5 gap-5">
          <Reveal delay={0} className="md:col-span-3">
            <Tile
              featured
              href={projectBoxes.caseStudies.url}
              eyebrow="New"
              icon={<BookOpen size={20} />}
              title={projectBoxes.caseStudies.title}
              description={projectBoxes.caseStudies.description}
              cta="Read the notebook"
            />
          </Reveal>

          <Reveal delay={80} className="md:col-span-2">
            <Tile
              href={contact.links.github}
              eyebrow="Code"
              icon={<Github size={20} />}
              title={projectBoxes.github.title}
              description={projectBoxes.github.description}
              cta="View on GitHub"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
