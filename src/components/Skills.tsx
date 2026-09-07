import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-900 py-24">
      <div className="container-inner">
        <p className="section-heading mb-3">Technical Skills</p>
        <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          The tools I reach for, by layer
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-blue-400">
                  <category.icon size={17} strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold text-zinc-100">
                  {category.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {category.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-md border px-2.5 py-1 font-mono text-xs ${
                      skill.proficient
                        ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                        : "border-zinc-800 bg-zinc-950 text-zinc-400"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
