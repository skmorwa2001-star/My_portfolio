const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const siteHeader = document.querySelector(".site-header");
const navCta = document.querySelector(".nav-cta");

// Keep the mobile menu button state in sync with the visible navigation.
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

const closeNavigation = () => {
  nav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
};

// Close the menu after choosing any section link, including the contact call to action.
[...nav.querySelectorAll("a"), navCta].forEach((link) => {
  link.addEventListener("click", () => {
    closeNavigation();
  });
});

const updateHeaderOnScroll = () => {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 20);
};

// Toggle the compact, high-contrast header style after the page begins scrolling.
window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

const progressDots = [...document.querySelectorAll(".progress-dot")];
const trackedSections = ["home", "about", "skills", "work", "contact"].map((id) => document.getElementById(id));

// Highlight the section nearest the sticky header; ensure Contact activates at page end.
const updateActiveProgressDot = () => {
  const activationPoint = siteHeader.getBoundingClientRect().bottom + 24;
  let activeIndex = trackedSections.reduce((currentIndex, section, index) => (
    section.getBoundingClientRect().top <= activationPoint ? index : currentIndex
  ), 0);

  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    activeIndex = trackedSections.length - 1;
  }

  progressDots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));
};

window.addEventListener("scroll", updateActiveProgressDot, { passive: true });
window.addEventListener("resize", updateActiveProgressDot);
updateActiveProgressDot();

const contactSocials = document.querySelector(".contact-socials");
// Add the GitHub card alongside the social links already present in the contact section.
const githubCard = document.createElement("a");
githubCard.className = "social-card";
githubCard.href = "https://github.com/skmorwa2001-star";
githubCard.target = "_blank";
githubCard.rel = "noopener noreferrer";
githubCard.setAttribute("aria-label", "Visit Sunil Kumar on GitHub");
githubCard.innerHTML = '<span class="social-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z"/></svg></span><span><strong>View on GitHub</strong><small>skmorwa2001-star</small></span><b>↗</b>';
contactSocials.appendChild(githubCard);
