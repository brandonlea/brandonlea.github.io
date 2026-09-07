import { footerSocialLinks, siteMeta } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900">
      <div className="container-inner flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-zinc-400">
            &copy; {year} {siteMeta.name}. All rights reserved.
          </p>
          <p className="mt-1 font-mono text-xs text-zinc-600">
            Built with React, TypeScript &amp; Tailwind CSS — backend runs on Go.
          </p>
        </div>

        <div className="flex items-center gap-1">
          {footerSocialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-200"
            >
              <social.icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
