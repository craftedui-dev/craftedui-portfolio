import React from 'react';
import LogoMonogram from './LogoMonogram';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-4">
        <LogoMonogram />
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-brand-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-brand-300 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-brand-300 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-brand-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-brand-300 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full border border-brand-400/60 px-4 py-1.5 text-xs font-medium text-brand-100 hover:bg-brand-500/10 hover:border-brand-300 transition-colors"
        >
          Let&apos;s collaborate
        </a>
      </div>
    </header>
  );
};

export default Header;
