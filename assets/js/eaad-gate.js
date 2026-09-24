// Courtesy gate for academic work. The password lives in this file,
// so it keeps casual visitors out, not determined ones.
function checkPassword(event) {
  if (event) event.preventDefault();

  const input = document.getElementById("passwordInput").value;
  const gate = document.getElementById("password-gate");
  const content = document.getElementById("protected-content");
  const error = document.getElementById("error");

  if (input === "showme!") {
    gate.remove();
    content.style.display = "block";
    document.body.style.overflow = "auto";
  } else {
    error.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".gate-box form");
  if (form) form.addEventListener("submit", checkPassword);
});
