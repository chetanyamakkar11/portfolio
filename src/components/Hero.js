import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { hero, now, contact } from '../data/content';

// Drop a photo at public/avatar.jpg to replace the placeholder below —
// no code changes needed, this just falls back gracefully if it's missing.
function Avatar() {
  const [broken, setBroken] = useState(false);

  return (
    <div className="w-32 sm:w-40 aspect-[3/4] rounded-2xl overflow-hidden bg-orange-50 ring-4 ring-white shadow-md flex items-center justify-center shrink-0">
      {!broken ? (
        <img
          src="/avatar.jpg"
          alt="Chetanya Makkar"
          onError={() => setBroken(true)}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <span className="text-2xl font-mono font-semibold text-orange-400">CM</span>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 px-6">
      <div className="max-w-prose mx-auto flex flex-col items-center text-center">
        <Avatar />

        <h1 className="mt-5 font-mono text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
          {hero.eyebrow}
        </h1>
        <p className="mt-1.5 font-mono text-sm text-orange-600">
          {now.roleLine}
        </p>

        <p className="mt-5 text-base text-zinc-600 leading-relaxed max-w-md">
          {hero.title}
        </p>
        <p className="mt-2 text-zinc-500 leading-relaxed max-w-md">
          {hero.subtitle}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <a
            href={`mailto:${contact.links.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 text-zinc-700 text-sm hover:border-orange-300 hover:text-orange-600 transition-colors"
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
      </div>
    </section>
  );
}
