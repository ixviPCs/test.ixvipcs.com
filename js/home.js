const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!navLinks || !menuBtn) return;
  const clickedInside = navLinks.contains(e.target) || menuBtn.contains(e.target);
  if (!clickedInside) navLinks.classList.remove("open");
});
