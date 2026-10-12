import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../data/content';

export default function Header({ activeSection, onNavClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleClick = (id) => {
    onNavClick(id);
    setOpen(false);
  };

  return (
    <header
      className={`nav-material fixed top-0 inset-x-0 z-50 ${scrolled || open ? 'is-scrolled' : ''}`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-page mx-auto px-6 h-12 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); handleClick('top'); }}
          className="press focus-ring rounded-md text-[0.9375rem] font-semibold tracking-[-0.015em] text-ink"
        >
          Chetanya Makkar
        </a>

        <nav className="hidden sm:flex items-center gap-7 text-xs">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleClick(item.id); }}
              aria-current={activeSection === item.id ? 'true' : undefined}
              className={`press focus-ring inline-block rounded-md ${
                activeSection === item.id ? 'text-ink' : 'text-ink-2 hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="press focus-ring sm:hidden p-2 -mr-2 rounded-full text-ink-2"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div id="mobile-menu" className={`menu sm:hidden ${open ? 'menu-open' : ''}`} aria-hidden={!open}>
        <div>
          <nav className="px-6 pt-2 pb-6 flex flex-col">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                tabIndex={open ? 0 : -1}
                onClick={(e) => { e.preventDefault(); handleClick(item.id); }}
                className={`menu-item press origin-left py-2 text-2xl font-semibold tracking-[-0.02em] ${
                  activeSection === item.id ? 'text-ink' : 'text-ink-2'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
