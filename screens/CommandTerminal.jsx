import { useState } from "react";
import { terminalCommands } from "../data/portfolioData";
import { GlassCard, Icon, ProgressBar, SectionHeader } from "../components/UI";

export default function CommandTerminal() {
  const [activeCommand, setActiveCommand] = useState("whoami");
  const result = terminalCommands[activeCommand];

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="System Interface"
        title="Command Terminal"
        description="Interactive portfolio terminal. Buttons can later be wired to real data, downloadable CV, GitHub stats, or contact actions."
        icon="terminal"
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-12">
        <div className="lg:col-span-8">
          <GlassCard className="overflow-hidden rounded-xl">
            <div className="flex items-center justify-between border-b border-outline-variant/20 bg-surface-container-high px-md py-sm">
              <div className="flex items-center gap-sm">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-error/40" />
                  <div className="h-2.5 w-2.5 rounded-full bg-secondary-container/40" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                </div>
                <span className="font-mono text-xs uppercase tracking-tighter text-on-surface-variant/70">
                  root@boghdaddy-os:~
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary/70">SSH // AES-256</span>
            </div>

            <div className="h-[500px] overflow-y-auto p-md font-mono text-sm">
              {["whoami", activeCommand].filter((item, index, array) => array.indexOf(item) === index).map((command) => {
                const commandResult = terminalCommands[command];
                return (
                  <div key={command} className="mb-md">
                    <div className="mb-xs flex items-center gap-sm">
                      <span className="text-primary">➜</span>
                      <span className="text-on-surface">{command}</span>
                    </div>
                    <div className="rounded-r border-l-2 border-primary/20 bg-primary/5 py-sm pl-md text-on-surface-variant">
                      <p className="mb-xs font-bold text-primary">{commandResult.title}</p>
                      <p className="mb-sm opacity-85">{commandResult.body}</p>
                      <div className="grid grid-cols-1 gap-xs text-[12px] sm:grid-cols-2">
                        {commandResult.facts.map(([key, value]) => (
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
                <span className="text-primary">➜</span>
                <div className="h-5 w-2 bg-primary terminal-cursor" />
              </div>
            </div>
          </GlassCard>
        </div>

        <aside className="space-y-md lg:col-span-4">
          <GlassCard className="p-md">
            <h3 className="mb-md flex items-center gap-sm font-display text-2xl font-semibold">
              <Icon name="terminal" className="text-primary" />
              Quick Commands
            </h3>
            <div className="grid gap-sm">
              {Object.keys(terminalCommands).map((command) => (
                <button
                  key={command}
                  onClick={() => setActiveCommand(command)}
                  className={`group flex items-center justify-between rounded-lg border p-sm text-left transition hover:border-primary/30 hover:bg-surface-container-high ${
                    activeCommand === command ? "border-primary/40 bg-primary/10" : "border-outline-variant/10 bg-surface-container"
                  }`}
                >
                  <div>
                    <span className="font-mono text-sm text-primary">{command}</span>
                    <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                      Execute protocol
                    </span>
                  </div>
                  <Icon name="chevron_right" className="text-on-surface-variant/40 transition group-hover:translate-x-1 group-hover:text-primary" />
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="border-l-4 border-secondary p-md">
            <div className="mb-sm flex items-center justify-between">
              <span className="label-caps text-on-surface-variant">Network Throughput</span>
              <Icon name="query_stats" className="text-secondary" />
            </div>
            <div className="mb-md flex items-end gap-xs">
              <span className="font-display text-3xl font-semibold">42.8</span>
              <span className="mb-1 font-mono text-sm text-secondary">GB/S</span>
            </div>
            <ProgressBar value={72} accent="secondary" />
          </GlassCard>
        </aside>
      </div>

      <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-3">
        {[
          ["Neural Sync", "80%", 80, "primary"],
          ["Sub-Space Latency", "12ms", 24, "secondary"],
          ["Thread Density", "640", 60, "tertiary"]
        ].map(([label, value, progress, accent]) => (
          <GlassCard key={label} className={`border-l-4 border-${accent} p-md`}>
            <div className={`label-caps mb-xs text-${accent}`}>{label}</div>
            <div className="flex items-center gap-sm">
              <ProgressBar value={progress} accent={accent} />
              <span className="font-mono text-xs">{value}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </main>
  );
}
