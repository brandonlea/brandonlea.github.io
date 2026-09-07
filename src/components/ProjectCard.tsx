import { ArrowUpRight, Github, ChevronRight } from "lucide-react";
import type { Project } from "../data/portfolioData";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
        <div className="flex shrink-0 items-center gap-1">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} repository`}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2">
        {project.architectureHighlights.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-relaxed text-zinc-500">
            <ChevronRight size={15} className="mt-0.5 shrink-0 text-blue-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-xs text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-6 flex items-center gap-4 border-t border-zinc-900 pt-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-zinc-400 transition-colors hover:text-zinc-200"
            >
              Repository <Github size={14} />
            </a>
          )}
          {!project.repoUrl && (
            <span className="inline-flex items-center gap-1.5 text-zinc-600">
              Private repository
            </span>
          )}
        </div>
      )}
    </article>
  );
}
