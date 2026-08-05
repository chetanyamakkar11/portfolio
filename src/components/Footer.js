import React from 'react';

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-zinc-100">
      <div className="max-w-prose mx-auto text-xs text-zinc-400">
        © {new Date().getFullYear()} Chetanya Makkar
      </div>
    </footer>
  );
}
