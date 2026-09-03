const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const progressDots = [...document.querySelectorAll(".progress-dot")];
const trackedSections = ["about", "skills", "work", "contact"].map((id) => document.getElementById(id));
const sectionObserver = new IntersectionObserver((entries) => {
  const visibleSection = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visibleSection) return;
  const activeIndex = trackedSections.indexOf(visibleSection.target);
  progressDots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));
}, { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] });

trackedSections.forEach((section) => sectionObserver.observe(section));

const contactSocials = document.querySelector(".contact-socials");
const githubCard = document.createElement("a");
githubCard.className = "social-card";
githubCard.href = "https://github.com/skmorwa2001-star";
githubCard.target = "_blank";
githubCard.rel = "noopener noreferrer";
githubCard.setAttribute("aria-label", "Visit Sunil Kumar on GitHub");
githubCard.innerHTML = '<span class="social-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z"/></svg></span><span><strong>View on GitHub</strong><small>skmorwa2001-star</small></span><b>↗</b>';
contactSocials.appendChild(githubCard);
