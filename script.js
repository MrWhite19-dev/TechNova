const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const contactForm = document.querySelector(".contact-form");
const toast = document.querySelector("#toast");
const revealItems = document.querySelectorAll(".reveal");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && toast) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    toast.classList.add("show");
    contactForm.reset();

    window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
