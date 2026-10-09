// ---------------------------------------------------------------
// EDIT THESE: every call, text, email and Instagram link on the
// site is generated from this block.
// ---------------------------------------------------------------
const CONTACT = {
  phone: "+15045159858",              // digits with country code, e.g. +13035551234
  phoneDisplay: "(504) 515-9858",     // how the number reads on the page
  email: "your-email@example.com",
  instagram: "https://instagram.com/the_wright_touch44",
};
// ---------------------------------------------------------------

(function () {
  // Fill contact links
  const links = {
    call: `tel:${CONTACT.phone}`,
    text: `sms:${CONTACT.phone}`,
    email: `mailto:${CONTACT.email}`,
    instagram: CONTACT.instagram,
  };
  document.querySelectorAll("[data-contact]").forEach((el) => {
    const href = links[el.dataset.contact];
    if (href) el.setAttribute("href", href);
  });
  document.querySelectorAll('[data-contact-display="phone"]').forEach((el) => {
    el.textContent = CONTACT.phoneDisplay;
  });
  document.querySelectorAll('[data-contact-display="email"]').forEach((el) => {
    el.textContent = CONTACT.email;
  });

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Before / after slider
  document.querySelectorAll(".ba").forEach((ba) => {
    const range = ba.querySelector(".ba-range");
    if (!range) return;
    const setPos = (value) => ba.style.setProperty("--pos", `${value}%`);
    range.addEventListener("input", () => setPos(range.value));
  });
})();

// Scroll effect: sections pull in from the left and right as you scroll, until
// the page is whole. Off for visitors who prefer reduced motion.
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Sections alternate sides; the two hero panels come from opposite sides.
  const blocks = [];
  document.querySelectorAll("main > section").forEach((section, i) => {
    const sectionDir = i % 2 === 0 ? -1 : 1;
    section.querySelectorAll(":scope > *").forEach((el) => {
      if (el.classList.contains("split")) {
        el.querySelectorAll(":scope > .panel").forEach((panel, j) => {
          blocks.push({ el: panel, dir: j % 2 === 0 ? -1 : 1 });
        });
      } else {
        blocks.push({ el, dir: sectionDir });
      }
    });
  });

  let queued = false;
  function update() {
    queued = false;
    const vh = window.innerHeight;
    const maxX = Math.min(window.innerWidth * 0.2, 220);
    const atEnd = vh + window.scrollY >= document.documentElement.scrollHeight - 4;
    for (const { el, dir } of blocks) {
      const top = el.getBoundingClientRect().top;
      const p = atEnd ? 1 : Math.min(1, Math.max(0, (vh - top) / (vh * 0.6)));
      const eased = p * p * (3 - 2 * p);
      // "translate" (not "transform") so the panels' hover lift still works
      el.style.translate = `${(dir * (1 - eased) * maxX).toFixed(1)}px 0`;
      el.style.opacity = eased.toFixed(3);
    }
  }
  function queue() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  update();
})();
