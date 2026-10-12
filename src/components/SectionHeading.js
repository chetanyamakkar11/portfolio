import React from 'react';

export default function SectionHeading({ eyebrow, heading, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && <p className="eyebrow text-accent mb-3">{eyebrow}</p>}
      <h2 className="headline text-ink">{heading}</h2>
    </div>
  );
}
