document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
let lastY = window.scrollY;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.style.opacity = y > lastY && y > 120 ? "0.72" : "1";
  lastY = y;
}, { passive: true });
