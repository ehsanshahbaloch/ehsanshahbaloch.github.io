// ===== Theme Toggle =====
const btn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  btn.textContent = savedTheme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
}

// Toggle between light and dark themes
btn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  btn.textContent = currentTheme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
});

// ===== Fade-In on Scroll =====
const fadeEls = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
fadeEls.forEach(el => observer.observe(el));

// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backToTop.classList.add("show");
  else backToTop.classList.remove("show");
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
