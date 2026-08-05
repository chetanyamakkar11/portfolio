import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { beliefs } from '../data/content';

export default function Believe() {
  return (
    <section id="believe" className="py-16 px-6 border-t border-zinc-100">
      <div className="max-w-prose mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Beliefs" heading={beliefs.heading} />
        </Reveal>

        <ul className="mt-5 space-y-3">
          {beliefs.items.map((item, idx) => (
            <Reveal key={item} delay={100 + idx * 60}>
              <li className="flex gap-3 text-zinc-600 leading-relaxed">
                <span className="text-orange-400">—</span>
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
