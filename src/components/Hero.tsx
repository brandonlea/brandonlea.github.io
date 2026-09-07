import { ArrowRight, Mail } from "lucide-react";
import { hero, siteMeta } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.14),transparent)]"
      />

      <div className="container-inner">
        {siteMeta.available && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            <span className="text-xs font-medium text-zinc-300">
              {siteMeta.availabilityNote}
            </span>
          </div>
        )}

        <p className="section-heading mb-4">{hero.eyebrow}</p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
          {hero.headline}{" "}
          <span className="text-zinc-500">{hero.highlight}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {hero.valueProposition}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-blue-400"
          >
            {hero.primaryCta.label}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
          >
            <Mail size={16} />
            {hero.secondaryCta.label}
          </a>
        </div>

        <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-zinc-900 pt-8">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs text-zinc-500">{stat.label}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-zinc-100">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
