// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Dynamic Greeting
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good Morning, Charmaine!";
  } else if (hour < 18) {
    message = "Good Afternoon, Charmaine!";
  } else {
    message = "Good Evening, Charmaine!";
  }

  if (greeting) {
    greeting.textContent = message;
  }

  // Theme Toggle
  const themeButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  // Event listener for button
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
      } else {
        localStorage.removeItem("theme");
      }
    });
  }
});
