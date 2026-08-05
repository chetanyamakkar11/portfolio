import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 border-t border-zinc-100">
      <div className="max-w-prose mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Contact" heading={contact.heading} />
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-4 text-zinc-600 leading-relaxed max-w-md">
            {contact.description}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`mailto:${contact.links.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-600 text-white text-sm hover:bg-orange-700 transition-colors"
            >
              <Mail size={14} /> Email
            </a>
            <a
              href={contact.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 text-zinc-700 text-sm hover:border-orange-300 hover:text-orange-600 transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
