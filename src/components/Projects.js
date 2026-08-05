import React from 'react';
import { Github, Sparkles, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projectBoxes, contact } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 border-t border-zinc-100">
      <div className="max-w-prose mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Projects" heading={projectBoxes.heading} />
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Reveal delay={0}>
            <div className="h-full rounded-2xl border border-dashed border-orange-200 bg-orange-50/50 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 mb-3">
                <Sparkles size={17} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-600">
                Coming soon
              </span>
              <h3 className="mt-1.5 font-semibold text-zinc-900">{projectBoxes.comingSoon.title}</h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                {projectBoxes.comingSoon.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <a
              href={contact.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-white mb-3">
                <Github size={17} />
              </div>
              <h3 className="font-semibold text-zinc-900 flex items-center gap-1.5">
                {projectBoxes.github.title}
                <ArrowUpRight size={15} className="text-zinc-400" />
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                {projectBoxes.github.description}
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
