import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { hero, now, contact } from '../data/content';
import Reveal from './Reveal';

function Avatar() {
  const [broken, setBroken] = useState(false);

  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-tile flex items-center justify-center shrink-0 shadow-[0_12px_32px_-16px_rgb(0_0_0/0.35)]">
      {!broken ? (
        <img
          src="/avatar.jpg"
          alt="Chetanya Makkar"
          onError={() => setBroken(true)}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <span className="text-2xl font-semibold text-ink-3">CM</span>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-6">
      <div className="max-w-page mx-auto flex flex-col items-center text-center">
        <Reveal>
          <Avatar />
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-6 eyebrow text-ink-2">
            {hero.eyebrow}
            <span className="mx-2 text-ink-3">·</span>
            <span className="text-accent">{now.roleLine}</span>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-4 display text-ink max-w-[14ch] sm:max-w-[18ch] mx-auto">
            {hero.title}
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed tracking-[-0.015em] text-ink-2 max-w-copy mx-auto">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={240}>
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
              className="press focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-tile text-ink text-[0.9375rem] font-medium hover:bg-hairline/50"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
