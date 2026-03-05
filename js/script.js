window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: "#0b1120",
        steel: "#1f2937",
        mist: "#020617",
        accent: "#06b6d4",
        accent2: "#2dd4bf",
        warm: "#f59e0b",
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui"],
        body: ["Manrope", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 12px 50px -18px rgba(15, 23, 42, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const PROFILE = {
    github: "https://github.com/brandonlea",
    linkedin: "https://www.linkedin.com/in/brandon-lea-price-249129172/",
    resume: "resume.pdf",
    repoOwner: "brandonlea",
    repoName: "brandonlea.github.io",
    repoBranch: "main",
    certificatesPath: "certificates",
    localCertificates: ["certificates/software-development-level-3.pdf"],
  };

  document.querySelectorAll("[data-github]").forEach((a) => (a.href = PROFILE.github));
  document.querySelectorAll("[data-linkedin]").forEach((a) => (a.href = PROFILE.linkedin));
  document.querySelectorAll("[data-resume]").forEach((a) => (a.href = PROFILE.resume));

  document.getElementById("year").textContent = new Date().getFullYear();

  if ("IntersectionObserver" in window) {
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "";
            entry.target.style.transform = "";
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  const certificatesContainer = document.getElementById("certificates-list");
  const certificatesStatus = document.getElementById("certificates-status");
  const projectsContainer = document.getElementById("projects-list");
  const projectsStatus = document.getElementById("projects-status");

  const toTitle = (filename) =>
    filename
      .replace(/\.pdf$/i, "")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const renderCertificates = (files) => {
    if (!certificatesContainer) return;
    certificatesContainer.innerHTML = "";

    files.forEach((file) => {
      const card = document.createElement("article");
      card.className = "rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-soft";

      const label = document.createElement("p");
      label.className = "text-xs font-semibold uppercase tracking-[0.2em] text-accent2";
      label.textContent = "Certificate";

      const title = document.createElement("h3");
      title.className = "mt-2 font-display text-xl font-bold";
      title.textContent = toTitle(file.name);

      const location = document.createElement("p");
      location.className = "mt-3 text-sm text-slate-300";
      location.textContent = `Stored in ${PROFILE.certificatesPath}/`;

      const links = document.createElement("div");
      links.className = "mt-4 flex flex-wrap gap-3";

      const openLink = document.createElement("a");
      openLink.href = file.html_url;
      openLink.target = "_blank";
      openLink.rel = "noreferrer";
      openLink.className =
        "rounded-full border border-slate-700 px-4 py-2 text-xs font-bold text-slate-200 transition hover:border-accent hover:text-accent";
      openLink.textContent = "Open";

      const downloadLink = document.createElement("a");
      downloadLink.href = file.download_url;
      downloadLink.target = "_blank";
      downloadLink.rel = "noreferrer";
      downloadLink.className =
        "rounded-full bg-accent px-4 py-2 text-xs font-bold text-white transition hover:bg-cyan-700";
      downloadLink.textContent = "Download PDF";

      links.append(openLink, downloadLink);
      card.append(label, title, location, links);

      certificatesContainer.appendChild(card);
    });
  };

  const localCertificateEntries = () =>
    PROFILE.localCertificates.map((path) => {
      const name = path.split("/").pop() || path;
      return {
        name,
        html_url: path,
        download_url: path,
      };
    });

  const loadCertificates = async () => {
    if (!certificatesContainer || !certificatesStatus) return;
    certificatesStatus.textContent = "Loading certificate files...";

    const apiUrl = `https://api.github.com/repos/${PROFILE.repoOwner}/${PROFILE.repoName}/contents/${PROFILE.certificatesPath}?ref=${PROFILE.repoBranch}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

      const entries = await response.json();
      const pdfs = entries
        .filter((entry) => entry.type === "file" && /\.pdf$/i.test(entry.name))
        .sort((a, b) => a.name.localeCompare(b.name));

      if (pdfs.length === 0) {
        const localEntries = localCertificateEntries();
        if (localEntries.length > 0) {
          renderCertificates(localEntries);
          certificatesStatus.textContent = `Showing ${localEntries.length} certificate${localEntries.length > 1 ? "s" : ""} from local files.`;
          return;
        }
        certificatesStatus.textContent =
          "No PDF certificates found yet. Add PDF files to certificates/ and refresh.";
        return;
      }

      renderCertificates(pdfs);
      certificatesStatus.textContent = `${pdfs.length} certificate${pdfs.length > 1 ? "s" : ""} loaded from certificates/.`;
    } catch (error) {
      const localEntries = localCertificateEntries();
      if (localEntries.length > 0) {
        renderCertificates(localEntries);
        certificatesStatus.textContent = `Showing ${localEntries.length} certificate${localEntries.length > 1 ? "s" : ""} from local files.`;
        return;
      }
      certificatesStatus.textContent =
        "Could not load certificates automatically. Check that certificates/ exists and is public.";
    }
  };

  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const buildProjectCard = (repo) => {
    const card = document.createElement("article");
    card.className =
      "reveal card-shine rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-soft transition hover:-translate-y-1";

    const language = repo.language || "Repository";
    const description = repo.description || "No description provided for this project yet.";

    const label = document.createElement("p");
    label.className = "text-xs font-semibold uppercase tracking-[0.2em] text-accent2";
    label.textContent = language;

    const title = document.createElement("h3");
    title.className = "mt-2 font-display text-xl font-bold";
    title.textContent = repo.name;

    const desc = document.createElement("p");
    desc.className = "mt-3 text-sm leading-relaxed text-slate-300";
    desc.textContent = description;

    const meta = document.createElement("div");
    meta.className = "mt-4 flex flex-wrap gap-2 text-xs";

    const stars = document.createElement("span");
    stars.className = "rounded-full bg-slate-800 px-2 py-1 font-semibold";
    stars.textContent = `★ ${repo.stargazers_count}`;

    const forks = document.createElement("span");
    forks.className = "rounded-full bg-slate-800 px-2 py-1 font-semibold";
    forks.textContent = `Forks ${repo.forks_count}`;

    const updated = document.createElement("span");
    updated.className = "rounded-full bg-slate-800 px-2 py-1 font-semibold";
    updated.textContent = `Updated ${formatDate(repo.updated_at)}`;

    meta.append(stars, forks, updated);

    const link = document.createElement("a");
    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.className = "mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-cyan-700";

    const linkIcon = document.createElement("i");
    linkIcon.className = "fa-brands fa-github";
    link.appendChild(linkIcon);
    link.append("View on GitHub →");

    card.append(label, title, desc, meta, link);

    return card;
  };

  const loadProjects = async () => {
    if (!projectsContainer || !projectsStatus) return;

    projectsStatus.textContent = "Loading GitHub repositories...";

    try {
      let page = 1;
      const allRepos = [];

      while (true) {
        const reposUrl = `https://api.github.com/users/${PROFILE.repoOwner}/repos?sort=updated&direction=desc&per_page=100&page=${page}`;
        const response = await fetch(reposUrl);
        if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

        const repos = await response.json();
        if (!Array.isArray(repos) || repos.length === 0) break;

        allRepos.push(...repos);
        page += 1;
      }

      const visibleRepos = allRepos
        .filter((repo) => !repo.private)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

      if (visibleRepos.length === 0) {
        projectsStatus.textContent = "No public GitHub repositories found.";
        return;
      }

      projectsContainer.innerHTML = "";
      visibleRepos.forEach((repo) => {
        projectsContainer.appendChild(buildProjectCard(repo));
      });

      projectsStatus.textContent = `Showing ${visibleRepos.length} public GitHub project${visibleRepos.length > 1 ? "s" : ""}.`;
    } catch (error) {
      projectsContainer.innerHTML = `
        <article class="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-soft">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">GitHub Projects</p>
          <h3 class="mt-2 font-display text-xl font-bold">View My Repositories</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-300">
            GitHub API is currently unavailable or rate-limited. Use the link below to view all projects.
          </p>
          <a
            href="${PROFILE.github}?tab=repositories"
            target="_blank"
            rel="noreferrer"
            class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-cyan-700"
          >
            <i class="fa-brands fa-github"></i>Open Repositories →
          </a>
        </article>
      `;
      projectsStatus.textContent = "Live project feed unavailable right now.";
    }
  };

  loadProjects();
  loadCertificates();
});
