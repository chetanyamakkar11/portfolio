import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { beliefs } from '../data/content';

export default function Believe() {
  return (
    <section id="believe" className="py-24 sm:py-32 px-6 bg-tile">
      <div className="max-w-page mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Beliefs" heading={beliefs.heading} />
        </Reveal>

        <ol className="mt-12 divide-y divide-hairline/70 border-t border-hairline/70">
          {beliefs.items.map((item, idx) => (
            <Reveal key={item} delay={idx * 70}>
              <li className="py-7 sm:py-9 grid grid-cols-[2.5rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 items-baseline">
                <span className="font-mono text-sm text-accent tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-xl sm:text-[1.75rem] leading-snug tracking-[-0.022em] font-semibold text-ink">
                  {item}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
