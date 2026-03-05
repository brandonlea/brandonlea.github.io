tailwind.config = {
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
    projects: [
      "https://github.com/brandonlea",
      "https://github.com/brandonlea",
      "https://github.com/brandonlea",
    ],
  };

  document.querySelectorAll("[data-github]").forEach((a) => (a.href = PROFILE.github));
  document.querySelectorAll("[data-linkedin]").forEach((a) => (a.href = PROFILE.linkedin));
  document.querySelectorAll("[data-resume]").forEach((a) => (a.href = PROFILE.resume));
  document.querySelectorAll("[data-project-url]").forEach((a, index) => {
    a.href = PROFILE.projects[index] || PROFILE.github;
  });

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
        certificatesStatus.textContent =
          "No PDF certificates found yet. Add PDF files to certificates/ and refresh.";
        return;
      }

      renderCertificates(pdfs);
      certificatesStatus.textContent = `${pdfs.length} certificate${pdfs.length > 1 ? "s" : ""} loaded from certificates/.`;
    } catch (error) {
      certificatesStatus.textContent =
        "Could not load certificates automatically. Check that certificates/ exists and is public.";
    }
  };

  loadCertificates();
});
