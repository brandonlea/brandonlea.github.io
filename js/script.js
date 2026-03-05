tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        steel: "#1e293b",
        mist: "#f8fafc",
        accent: "#0891b2",
        accent2: "#14b8a6",
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
