
const timerElement = document.getElementById("timer");
const meetupDate = new Date("2025-08-05T15:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = meetupDate - now;

  if (diff <= 0) {
    timerElement.textContent = "Event Started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 🌙 Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {
  // Load saved theme preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "enabled" : "disabled";
    localStorage.setItem("darkMode", mode);
  });
}


// 👥 Event Attendance Buttons
const goingBtn = document.querySelector(".going-btn");
const notGoingBtn = document.querySelector(".not-going-btn");

goingBtn.addEventListener("click", () => {
  alert("Awesome! We’ll see you at the event.");
});

notGoingBtn.addEventListener("click", () => {
  alert("No worries! Hope you can join us next time.");
});


