import { Icon } from "../UI";

export default function CommandButton({ command, active, onClick }) {
  return (
    <button
      className={`focus-ring group flex w-full items-center justify-between border p-sm text-left transition hover:border-primary/30 hover:bg-surface-container-high ${
        active ? "border-primary/40 bg-primary/10" : "border-outline-variant/20 bg-surface-container"
      }`}
      type="button"
      onClick={onClick}
    >
      <span>
        <span className="font-mono text-sm text-primary">{command}</span>
        <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant/70">
          Execute protocol
        </span>
      </span>
      <Icon name="chevron_right" className="text-on-surface-variant/50 transition group-hover:translate-x-1 group-hover:text-primary" />
    </button>
  );
}

