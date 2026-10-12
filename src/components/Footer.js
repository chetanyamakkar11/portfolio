import React from 'react';
import { contact } from '../data/content';

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-tile" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}>
      <div className="max-w-page mx-auto pt-6 border-t border-hairline/70 flex flex-wrap justify-between gap-3 text-xs text-ink-3">
        <span>© {new Date().getFullYear()} Chetanya Makkar</span>
        <span className="flex gap-5">
          <a href={contact.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink focus-ring rounded">GitHub</a>
          <a href={contact.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink focus-ring rounded">LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}
