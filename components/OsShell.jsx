import { NavLink, Outlet } from "react-router-dom";
import { identity, navItems } from "../data/portfolioData";
import { Icon } from "./UI";

export default function OsShell() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <header className="sticky top-0 z-50 w-full border-b border-cyan-500/20 bg-navy/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-lg">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <NavLink to="/" className="font-display text-lg md:text-xl font-black uppercase tracking-widest text-primary drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
            {identity.alias}
          </NavLink>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `font-display text-sm font-medium uppercase tracking-tight transition-colors hover:bg-primary/5 hover:text-primary ${
                    isActive ? "border-b-2 border-primary pb-1 text-primary" : "text-slate-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Icon name="terminal" className="hidden text-secondary sm:inline-flex" />
            <Icon name="sensors" className="hidden text-primary sm:inline-flex" />
            <NavLink
              to="/contact"
              className="rounded-sm bg-primary-container px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-on-primary-container transition hover:brightness-110 active:scale-95"
            >
              Signal: Active
            </NavLink>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="w-full border-t border-cyan-900/30 bg-navy py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-5 md:flex-row md:px-8">
          <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            © {new Date().getFullYear()} BOGHDADDY OS // SYSTEM STATUS: NOMINAL
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-display text-[10px] uppercase tracking-[0.2em]">
            <NavLink to="/archive" className="text-slate-500 transition hover:-translate-y-0.5 hover:text-secondary">
              Access Logs
            </NavLink>
            <NavLink to="/terminal" className="text-slate-500 transition hover:-translate-y-0.5 hover:text-secondary">
              Core Terminal
            </NavLink>
            <NavLink to="/missions" className="text-slate-500 transition hover:-translate-y-0.5 hover:text-secondary">
              Network Protocol
            </NavLink>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Live Feed Encrypted
          </div>
        </div>
      </footer>
    </div>
  );
}
