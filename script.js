const toggleCheckbox = document.getElementById("theme-toggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleCheckbox.checked = true;
}

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

// Mobile nav bar

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Toggle theme
  if (themeToggle) {
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    });
  }

  // Hamburger menu functionality
  const hamburgerImg = document.querySelector('.hamburger-icon');
  const hamburgerContainer = hamburgerImg.parentElement;
  const navOptions = document.querySelector('.nav-options');
  const socialIcons = document.querySelector('.social-media-icons');

  if (hamburgerContainer && navOptions && socialIcons) {
    hamburgerImg.addEventListener('click', function(e) {
      e.preventDefault();
      navOptions.classList.toggle('active');
      socialIcons.classList.toggle('active');
      hamburgerImg.classList.toggle('active'); // Rotate hamburger icon
    });

    // Close menu when clicking on a nav link (optional, for better UX)
    const navLinks = document.querySelectorAll('.nav-options a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navOptions.classList.remove('active');
        socialIcons.classList.remove('active');
        hamburgerImg.classList.remove('active'); // Reset hamburger rotation
      });
    });
  }
});



