import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Icon from './icons';
import { interests } from '../data/content';

export default function Interests() {
  return (
    <section id="interests" className="py-16 px-6 border-t border-zinc-100">
      <div className="max-w-prose mx-auto">
        <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:justify-between gap-5">
          <Reveal>
            <SectionHeading eyebrow="Into" heading={interests.heading} />
          </Reveal>
          <Reveal delay={40}>
            <img
              src="/candid.jpg"
              alt="Chetanya"
              className="w-28 sm:w-32 aspect-[3/4] object-cover rounded-xl shadow-md rotate-2 ring-4 ring-white shrink-0"
            />
          </Reveal>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-4">
          {interests.cards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 40}>
              <div className="flex gap-2.5">
                <Icon name={card.icon} size={15} className="mt-0.5 shrink-0 text-orange-400" />
                <p className="text-sm text-zinc-600 leading-relaxed">
                  <span className="font-medium text-zinc-800">{card.title} — </span>
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
