import { GlassCard, Icon } from "../UI";

export default function TerminalPanel({ commands, activeCommand }) {
  const commandList = ["whoami", activeCommand].filter((item, index, array) => array.indexOf(item) === index);

  return (
    <GlassCard className="overflow-hidden rounded-xl" hover={false}>
      <div className="flex items-center justify-between border-b border-outline-variant/20 bg-surface-container-high px-md py-sm">
        <div className="flex items-center gap-sm">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="h-2.5 w-2.5 rounded-full bg-error/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-secondary/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary/50" />
          </div>
          <span className="font-mono text-xs uppercase tracking-tighter text-on-surface-variant/80">
            root@boghdaddy-os:~
          </span>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-primary/80 sm:inline">
          Portfolio CLI
        </span>
      </div>

      <div className="h-[500px] overflow-y-auto p-md font-mono text-sm">
        {commandList.map((command) => {
          const result = commands[command];
          return (
            <div key={command} className="mb-md">
              <div className="mb-xs flex items-center gap-sm">
                <span className="text-primary">-&gt;</span>
                <span className="text-on-surface">{command}</span>
              </div>
              <div className="rounded-r border-l-2 border-primary/30 bg-primary/5 py-sm pl-md text-on-surface-variant">
                <p className="mb-xs font-bold text-primary">{result.title}</p>
                <p className="mb-sm opacity-90">{result.body}</p>
                <div className="grid grid-cols-1 gap-xs text-[12px] sm:grid-cols-2">
                  {result.facts.map(([key, value]) => (
                    <div key={key}>
                      <span className="text-secondary">{key}:</span> {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex items-center gap-sm">
          <span className="text-primary">-&gt;</span>
          <div className="h-5 w-2 bg-primary terminal-cursor" />
          <Icon name="keyboard" className="text-sm text-on-surface-variant/50" />
        </div>
      </div>
    </GlassCard>
  );
}

