import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Icon from './icons';
import { interests } from '../data/content';

export default function Interests() {
  return (
    <section id="interests" className="py-24 sm:py-32 px-6">
      <div className="max-w-page mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Interests" heading={interests.heading} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Reveal className="sm:row-span-2">
            <div className="h-full min-h-[20rem] rounded-tile overflow-hidden bg-tile">
              <img src="/candid.jpg" alt="Chetanya" className="w-full h-full object-cover" />
            </div>
          </Reveal>

          {interests.cards.map((card, idx) => (
            <Reveal key={card.title} delay={60 + idx * 60}>
              <div className="h-full rounded-tile bg-tile p-7">
                <div className="w-10 h-10 rounded-xl bg-raised flex items-center justify-center text-accent shadow-sm">
                  <Icon name={card.icon} size={18} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.018em] text-ink">{card.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] text-ink-2 leading-relaxed">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
