/* Light / dark toggle (defaults to the system setting) */
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const systemDark = matchMedia("(prefers-color-scheme: dark)");
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
if (saved) root.dataset.theme = saved;

const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : systemDark.matches;
const paintToggle = () => {
  toggle.firstElementChild.textContent = isDark() ? "☀" : "☾";
  toggle.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
};
toggle.addEventListener("click", () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  paintToggle();
});
systemDark.addEventListener("change", paintToggle);
paintToggle();
