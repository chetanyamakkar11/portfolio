import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../data/content';

export default function Header({ activeSection, onNavClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    onNavClick(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-sm">
      <div className="max-w-prose mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); handleClick('top'); }}
          className="font-semibold text-zinc-900"
        >
          Chetanya Makkar
        </a>

        <nav className="hidden sm:flex items-center gap-5 text-sm">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleClick(item.id); }}
              className={`transition-colors ${
                activeSection === item.id
                  ? 'text-orange-600'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="sm:hidden p-1.5 -mr-1.5 text-zinc-600"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-zinc-100 px-6 py-3 flex flex-col gap-3 text-sm">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleClick(item.id); }}
              className={activeSection === item.id ? 'text-orange-600' : 'text-zinc-500'}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
