import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-36 px-6 bg-tile">
      <div className="max-w-copy mx-auto text-center">
        <Reveal>
          <SectionHeading eyebrow="Contact" heading={contact.heading} center />
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-5 text-lg text-ink-2 leading-relaxed">{contact.description}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${contact.links.email}`}
              className="press focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[0.9375rem] font-medium hover:bg-accent-strong dark:text-black"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href={contact.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="press focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-raised text-ink text-[0.9375rem] font-medium shadow-sm"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-3 select-all">{contact.links.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
