import React from 'react';

export default function SectionHeading({ eyebrow, heading }) {
  return (
    <div>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
        {heading}
      </h2>
    </div>
  );
}
