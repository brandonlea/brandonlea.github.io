import { Award } from "lucide-react";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-900 py-24">
      <div className="container-inner grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div>
          <p className="section-heading mb-3">{about.eyebrow}</p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            {about.title}
          </h2>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-zinc-400 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Certifications
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {about.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400">
                    <Award size={15} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">{cert.title}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{cert.issuer}</p>
                    <p className="mt-0.5 font-mono text-xs text-blue-400">{cert.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {about.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <p className="text-xs text-zinc-500">{highlight.label}</p>
              <p className="mt-1 font-mono text-lg font-semibold text-zinc-100">
                {highlight.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
