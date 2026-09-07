// ---------------------------------------------------------------------------
// portfolioData.ts
//
// Single source of truth for all portfolio content. Swap the values below
// with your own — every component reads from here, so the UI updates
// automatically. Nothing in /components should contain hardcoded copy.
// ---------------------------------------------------------------------------

import type { LucideIcon } from "lucide-react";
import {
  Server,
  Boxes,
  Database,
  Wrench,
  Github,
  Linkedin,
  FileText,
  Mail,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types / schema
// ---------------------------------------------------------------------------

export interface SiteMeta {
  name: string;
  initials: string;
  title: string;
  location: string;
  email: string;
  resumeUrl: string;
  available: boolean;
  availabilityNote: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  highlight: string;
  valueProposition: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: { label: string; value: string }[];
}

export interface SkillTag {
  name: string;
  proficient?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  skills: SkillTag[];
}

export interface ArchitectureHighlight {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  architectureHighlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface ArchitecturePhilosophy {
  eyebrow: string;
  title: string;
  description: string;
  principles: ArchitectureHighlight[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface Certification {
  title: string;
  issuer: string;
  result: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: { label: string; value: string }[];
  certifications: Certification[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Site meta
// ---------------------------------------------------------------------------

export const siteMeta: SiteMeta = {
  name: "Brandon-Lea Price",
  initials: "BP",
  title: "Software Developer | React, Laravel & Python",
  location: "Brierley Hill, West Midlands, UK",
  email: "brandonlea810@gmail.com",
  resumeUrl: "/brandon-lea-price-cv.pdf",
  available: true,
  availabilityNote: "Available for freelance & full-time roles",
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/brandonlea", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brandon-lea-price-249129172/",
    icon: Linkedin,
  },
  { label: "Resume", href: "/brandon-lea-price-cv.pdf", icon: FileText },
];

export const footerSocialLinks: SocialLink[] = [
  ...socialLinks,
  { label: "Email", href: `mailto:${siteMeta.email}`, icon: Mail },
];

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const hero: HeroContent = {
  eyebrow: "Full-stack developer, business owner",
  headline: "I build full-stack web apps with Laravel, React and Python",
  highlight: "and ship them end to end, from database to deployment.",
  valueProposition:
    "I design and build complete web applications — Laravel and Django backends, React frontends, and the databases and APIs that connect them. As the owner of Hallveck Digital, I take projects from a client conversation through to a live, maintained product.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
  stats: [
    { label: "Years writing PHP", value: "12+" },
    { label: "Client projects delivered", value: "3+" },
    { label: "Certifications", value: "2" },
  ],
};

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    description: "Where most of my commercial experience lives.",
    skills: [
      { name: "PHP", proficient: true },
      { name: "Laravel", proficient: true },
      { name: "Python", proficient: true },
      { name: "Django", proficient: true },
      { name: "REST APIs", proficient: true },
      { name: "Go (learning)" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Boxes,
    description: "Building interfaces that connect cleanly to the backend.",
    skills: [
      { name: "React", proficient: true },
      { name: "TypeScript", proficient: true },
      { name: "JavaScript (ES6+)", proficient: true },
      { name: "HTML5", proficient: true },
      { name: "CSS3", proficient: true },
      { name: "Tailwind CSS", proficient: true },
    ],
  },
  {
    id: "data",
    title: "Databases & Testing",
    icon: Database,
    description: "Schema design, migrations, and keeping code accountable.",
    skills: [
      { name: "MySQL", proficient: true },
      { name: "SQL", proficient: true },
      { name: "SQL Migrations", proficient: true },
      { name: "PEST", proficient: true },
      { name: "JEST" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    icon: Wrench,
    description: "Day-to-day tooling for shipping and maintaining projects.",
    skills: [
      { name: "Git / GitHub", proficient: true },
      { name: "VS Code", proficient: true },
      { name: "Composer", proficient: true },
      { name: "NPM", proficient: true },
      { name: "VPS Deployment", proficient: true },
      { name: "Docker" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "globi",
    title: "Globi",
    description:
      "\"The cosmic social network\" — a social networking platform for sharing posts, photos, and moments with friends, built on Laravel and Inertia.js with a React/TypeScript frontend.",
    architectureHighlights: [
      "Action-based architecture to keep business logic in small, single-purpose, testable classes rather than bloated controllers",
      "Laravel Fortify for authentication with Ziggy route helpers to share named routes safely between the Laravel backend and the React frontend",
      "TypeScript and SSR configuration on the Inertia.js frontend for type safety and faster first paint",
    ],
    stack: ["Laravel", "Inertia.js", "React", "TypeScript", "MySQL"],
    liveUrl: "https://globiapp.co.uk/",
    repoUrl: "https://github.com/brandonlea/Globi",
    featured: true,
  },
  {
    id: "hallveck-digital",
    title: "Hallveck Digital",
    description:
      "My own web development agency site, built on Laravel and React — plus an in-progress admin and invoicing panel with Stripe integration for managing client billing.",
    architectureHighlights: [
      "Laravel backend serving a React frontend, deployed to a VPS and built for handling real client traffic",
      "Stripe integration for the invoicing/admin panel, covering client billing and payment tracking",
      "SEO fundamentals (indexing, meta structure) built in from the start rather than retrofitted",
    ],
    stack: ["Laravel", "React", "MySQL", "Stripe", "VPS"],
    liveUrl: "https://hallveckdigital.co.uk",
    featured: true,
  },
  {
    id: "ticketify",
    title: "Ticketify",
    description:
      "A full-stack event ticketing platform built with Django that lets users browse upcoming events, securely purchase tickets via Stripe, and manage their bookings.",
    architectureHighlights: [
      "Session-based cart and Stripe Checkout integration with webhook verification for secure, reliable payment confirmation",
      "PostgreSQL (via Neon) for event, ticket, and order data, served through Gunicorn and WhiteNoise on Heroku",
      "Cloudinary for event image storage, with an admin dashboard for event creation and sales tracking",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Stripe", "Tailwind CSS", "Heroku"],
    liveUrl: "https://ticketify-ce5e7cf176b4.herokuapp.com/",
    repoUrl: "https://github.com/brandonlea/Ticketify",
  },
];

// ---------------------------------------------------------------------------
// Architecture / engineering philosophy
// ---------------------------------------------------------------------------

export const architecture: ArchitecturePhilosophy = {
  eyebrow: "How I build",
  title: "Clean, testable code that clients can rely on",
  description:
    "I optimize for code that's easy to hand off and easy to trust — small, well-named classes, tests that actually cover the business logic, and a clear line between what the frontend needs and what the backend provides.",
  principles: [
    {
      title: "Single-responsibility, action-based design",
      description:
        "Business logic lives in small, purpose-built classes rather than fat controllers, so each piece of behaviour can be found, tested, and changed in isolation.",
    },
    {
      title: "Tested before it ships",
      description:
        "PEST and Jest cover the logic that matters — authentication, payments, and booking flows — so refactors don't quietly break production.",
    },
    {
      title: "Frontend and backend, cleanly separated",
      description:
        "REST APIs and typed route helpers (like Ziggy) keep the React frontend talking to Laravel and Django backends without leaking implementation details either way.",
    },
  ],
  codeSnippet: {
    filename: "CreateBookingAction.php",
    language: "php",
    code: `class CreateBookingAction
{
    public function __construct(
        private readonly TicketRepository $tickets,
        private readonly PaymentGateway $payments,
    ) {}

    public function handle(User $user, Event $event, int $quantity): Booking
    {
        $ticket = $this->tickets->reserve($event, $quantity);

        $payment = $this->payments->charge(
            $user, $ticket->totalPrice()
        );

        return Booking::create([
            'user_id'    => $user->id,
            'ticket_id'  => $ticket->id,
            'payment_id' => $payment->id,
            'status'     => BookingStatus::Confirmed,
        ]);
    }
}`,
  },
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about: AboutContent = {
  eyebrow: "About me",
  title: "Full-stack developer and web agency owner",
  paragraphs: [
    "I'm a reliable, organised developer who's equally comfortable working independently or as part of a team — and I enjoy being handed a problem and figuring out the best way to solve it. I started writing PHP back in 2012 and progressed onto Laravel, which I've since used both commercially and as the foundation of my own business.",
    "I run Hallveck Digital, a web development agency I own and operate, building Laravel and React websites for startups and small businesses — from client conversations and planning through to a deployed, maintained product. Alongside that I work across Python and Django, and I'm currently expanding into Go for backend services.",
    "I enjoy the full lifecycle of a project: working out what a client actually needs, building databases and APIs that hold up, connecting a clean frontend to a solid backend, and testing it properly before it ships. I hold a Level 5 Diploma in Web Application Development and a Level 3 Certificate in Software Development, both from Code Institute.",
  ],
  highlights: [
    { label: "Primary stack", value: "Laravel + React" },
    { label: "Also building with", value: "Python + Django" },
    { label: "Currently learning", value: "Go" },
  ],
  certifications: [
    {
      title: "Web Application Development",
      issuer: "Code Institute — Level 5 Diploma",
      result: "Distinction",
    },
    {
      title: "Software Development",
      issuer: "Code Institute — Level 3 Certificate",
      result: "Pass",
    },
  ],
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact: ContactContent = {
  eyebrow: "Get in touch",
  title: "Tell me about your project",
  description:
    "Whether it's a new website, a web app that needs a proper backend, or ongoing work through Hallveck Digital — tell me a bit about what you're building and I'll get back to you within a day or two.",
};
