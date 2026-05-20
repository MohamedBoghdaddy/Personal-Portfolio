import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-nav py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center md:flex-row md:px-8 md:text-left">
        <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          Mohamed Boghdady // Full-Stack AI Engineer
        </div>
        <nav className="flex flex-wrap justify-center gap-6 font-display text-[10px] uppercase tracking-[0.2em]" aria-label="Footer navigation">
          <NavLink to="/builds" className="text-on-surface-variant transition hover:-translate-y-0.5 hover:text-secondary">
            Projects
          </NavLink>
          <NavLink to="/experience" className="text-on-surface-variant transition hover:-translate-y-0.5 hover:text-secondary">
            Experience
          </NavLink>
          <NavLink to="/services" className="text-on-surface-variant transition hover:-translate-y-0.5 hover:text-secondary">
            Services
          </NavLink>
          <NavLink to="/contact" className="text-on-surface-variant transition hover:-translate-y-0.5 hover:text-secondary">
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Available for work
        </div>
      </div>
    </footer>
  );
}
