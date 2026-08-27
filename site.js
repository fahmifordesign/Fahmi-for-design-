document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const body = document.body;

  // Theme
  const savedTheme = localStorage.getItem("site-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.dataset.theme = savedTheme || (prefersLight ? "light" : "dark");

  const themeToggle = document.getElementById("themeToggle");
  const updateThemeIcon = () => {
    const icon = themeToggle?.querySelector(".theme-icon");
    if (icon) icon.textContent = root.dataset.theme === "light" ? "☀" : "☾";
  };
  updateThemeIcon();
  themeToggle?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("site-theme", root.dataset.theme);
    updateThemeIcon();
  });

  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  menuToggle?.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  mainNav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });

  // Language menu
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  langBtn?.addEventListener("click", () => {
    const open = langMenu.classList.toggle("open");
    langBtn.setAttribute("aria-expanded", String(open));
  });
  langMenu?.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      window.applyLanguage(button.dataset.lang);
      langMenu.classList.remove("open");
    });
  });

  const currentLang = localStorage.getItem("site-language") || "ar";
  window.applyLanguage(currentLang);

  // Active navigation
  const page = location.pathname.split("/").pop() || "index.html";
  mainNav?.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === page) link.classList.add("active");
  });

  // Portfolio filters
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-cat]").forEach(card => {
        card.classList.toggle("is-hidden", filter !== "all" && card.dataset.cat !== filter);
      });
    });
  });

  // Reveal on scroll
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));

  // Back to top
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => backToTop?.classList.toggle("show", scrollY > 500), { passive: true });
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Contact form
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject"));
    const body = encodeURIComponent(`الاسم: ${data.get("name")}\nالبريد: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:fahmi@example.com?subject=${subject}&body=${body}`;
    if (status) status.textContent = translations[localStorage.getItem("site-language") || "ar"]["contact.success"];
  });
});
