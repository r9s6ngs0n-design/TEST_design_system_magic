/* ============================================================
   SCAEL.AI — funnel interactions
   ============================================================ */

/* ------------------------------------------------------------
   BOOKING LINK — swap this one constant for your Calendly /
   booking URL and every CTA on the page updates.
   Leave as "#book" to scroll to the closing CTA instead.
   ------------------------------------------------------------ */
const BOOKING_URL = "#book";

document.querySelectorAll("[data-booking-link]").forEach((el) => {
  el.setAttribute("href", BOOKING_URL);
  if (BOOKING_URL.startsWith("http")) {
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  }
});

/* current year in footer */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* header background on scroll */
const head = document.querySelector(".site-head");
const onScroll = () => head.classList.toggle("is-scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------
   Scroll reveal (signature moment 2)
   ------------------------------------------------------------ */
if ("IntersectionObserver" in window && !reducedMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  document
    .querySelectorAll(".reveal, .reveal-stagger")
    .forEach((el) => io.observe(el));
} else {
  document.documentElement.classList.add("no-observer");
}

/* ------------------------------------------------------------
   Magnetic CTAs (signature moment 3) — fine pointers only
   ------------------------------------------------------------ */
if (!reducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    const strength = 0.3;
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
}
