import { useState } from "react";
import { terminalCommands } from "../data/portfolioData";
import CommandButton from "../components/Terminal/CommandButton";
import TerminalPanel from "../components/Terminal/TerminalPanel";
import { GlassCard, Icon, SectionHeader, accentClasses } from "../components/UI";

export default function Terminal() {
  const [activeCommand, setActiveCommand] = useState("whoami");

  return (
    <main className="page-shell">
      <SectionHeader
        eyebrow="System Interface"
        title="Command Terminal"
        description="Interactive portfolio terminal. Quick commands update the output without pretending to run remote infrastructure."
        icon="terminal"
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-12">
        <div className="lg:col-span-8">
          <TerminalPanel commands={terminalCommands} activeCommand={activeCommand} />
        </div>

        <aside className="space-y-md lg:col-span-4">
          <GlassCard className="p-md">
            <h3 className="mb-md flex items-center gap-sm font-display text-2xl font-semibold">
              <Icon name="terminal" className="text-primary" />
              Quick Commands
            </h3>
            <div className="grid gap-sm">
              {Object.keys(terminalCommands).map((command) => (
                <CommandButton
                  key={command}
                  command={command}
                  active={activeCommand === command}
                  onClick={() => setActiveCommand(command)}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="border-l-4 border-l-secondary p-md" accent="secondary">
            <div className="mb-sm flex items-center justify-between">
              <span className="label-caps text-on-surface-variant">Command Surface</span>
              <Icon name="query_stats" className="text-secondary" />
            </div>
            <p className="mb-xs font-display text-2xl font-semibold">Local UI State</p>
            <p className="text-sm text-on-surface-variant">
              The terminal output changes client-side from data in portfolioData.js.
            </p>
          </GlassCard>
        </aside>
      </div>

      <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-3">
        {[
          ["Neural Sync", "Portfolio data connected", "primary"],
          ["Latency", "Static route speed", "secondary"],
          ["Thread Density", "Reusable components", "tertiary"]
        ].map(([label, value, accent]) => {
          const ac = accentClasses[accent];
          return (
          <GlassCard key={label} className={`border-l-4 ${ac.borderLeft} p-md`} accent={accent}>
            <div className={`label-caps mb-xs ${ac.text}`}>{label}</div>
            <p className="font-mono text-sm text-on-surface-variant">{value}</p>
          </GlassCard>
          );
        })}
      </div>
    </main>
  );
}
