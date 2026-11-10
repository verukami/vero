// Courtesy gate for academic work. The case study text is public; only the
// screens stay blurred until the password is entered. The password lives in
// this file, so it keeps casual visitors out, not determined ones.
function checkPassword(event) {
  if (event) event.preventDefault();

  const input = document.getElementById("passwordInput").value;
  const gate = document.getElementById("password-gate");
  const error = document.getElementById("error");

  if (input === "showme!") {
    document.body.classList.remove("screens-locked");
    gate.remove();
  } else {
    error.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#password-gate form");
  if (form) form.addEventListener("submit", checkPassword);
});
