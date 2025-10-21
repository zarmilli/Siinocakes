function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
