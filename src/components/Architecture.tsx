import { ShieldCheck } from "lucide-react";
import { architecture } from "../data/portfolioData";

export default function Architecture() {
  return (
    <section id="architecture" className="border-t border-zinc-900 py-24">
      <div className="container-inner">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-heading mb-3">{architecture.eyebrow}</p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              {architecture.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
              {architecture.description}
            </p>

            <div className="mt-8 space-y-5">
              {architecture.principles.map((principle) => (
                <div key={principle.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
            <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-950/60 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 font-mono text-xs text-zinc-500">
                {architecture.codeSnippet.filename}
              </span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-zinc-300">
              <code>{architecture.codeSnippet.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
