import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { contact, siteMeta, socialLinks } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteMeta.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently.
    }
  };

  return (
    <section id="contact" className="border-t border-zinc-900 py-24">
      <div className="container-inner max-w-xl">
        <p className="section-heading mb-3">{contact.eyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          {contact.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
          {contact.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${siteMeta.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-blue-400"
          >
            <Mail size={16} />
            Email Me
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 font-mono text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
          >
            {copied ? (
              <Check size={15} className="text-blue-400" />
            ) : (
              <Copy size={15} />
            )}
            {copied ? "Copied!" : siteMeta.email}
          </button>
        </div>

        <div className="mt-8 flex items-center gap-1">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-200"
            >
              <social.icon size={17} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
