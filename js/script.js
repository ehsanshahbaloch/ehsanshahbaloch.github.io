// Theme Toggle
const btn = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  btn.textContent = savedTheme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
}
btn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  btn.textContent = currentTheme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
  body.style.transition = "background 0.5s ease, color 0.5s ease";
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Fade-in on Scroll
const faders = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
faders.forEach(fade => observer.observe(fade));
