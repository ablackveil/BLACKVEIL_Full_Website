// auth.js – Basic login form handler for Blackveil

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = form.username.value.trim();
      const password = form.password.value.trim();

      if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  }
});
