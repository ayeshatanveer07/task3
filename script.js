// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after clicking a navigation link
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Volunteer form submission
const volunteerForm = document.getElementById("volunteerForm");
const message = document.getElementById("message");

volunteerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  message.textContent = `Thank you${name ? ", " + name : ""}! Your interest in volunteering is appreciated.`;

  volunteerForm.reset();
});