// ---------------------------------------------------------------
// EDIT THESE: every call, text, email and Instagram link on the
// site is generated from this block.
// ---------------------------------------------------------------
const CONTACT = {
  phone: "+10000000000",              // digits with country code, e.g. +13035551234
  phoneDisplay: "(000) 000-0000",     // how the number reads on the page
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
