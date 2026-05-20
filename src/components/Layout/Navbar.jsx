import { useState } from "react";
import { NavLink } from "react-router-dom";
import { identity, navItems } from "../../data/portfolioData";
import { Icon } from "../UI";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-nav/85 shadow-[0_4px_20px_rgba(0,0,0,0.22)] backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-sm px-5 py-3 md:px-8" aria-label="Main navigation">
        <NavLink
          to="/"
          className="focus-ring font-display text-lg font-black uppercase tracking-widest text-primary drop-shadow-[0_0_8px_rgb(var(--color-primary)/0.35)] md:text-xl"
          onClick={() => setIsOpen(false)}
        >
          {identity.alias}
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `focus-ring px-1 py-1 font-display text-sm font-medium uppercase tracking-tight transition-colors hover:bg-primary/5 hover:text-primary ${
                  isActive ? "border-b-2 border-primary text-primary" : "text-on-surface-variant"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-xs sm:gap-sm">
          <ThemeToggle />
          <NavLink
            to="/contact"
            className="focus-ring hidden bg-primary px-sm py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-on-primary transition hover:brightness-110 active:scale-95 sm:inline-flex"
          >
            Hire Me
          </NavLink>
          <button
            className="focus-ring inline-flex border border-outline-variant bg-surface-container p-1.5 text-on-surface md:hidden"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <Icon name={isOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-outline-variant/30 bg-nav/95 px-5 py-sm md:hidden">
          <div className="grid gap-xs">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `focus-ring border border-transparent px-sm py-xs font-display text-sm font-bold uppercase tracking-[0.16em] ${
                    isActive ? "border-primary/30 bg-primary/10 text-primary" : "text-on-surface-variant"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="focus-ring mt-xs bg-primary px-sm py-xs text-center font-display text-xs font-bold uppercase tracking-widest text-on-primary"
            >
              Hire Me
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

