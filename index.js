// update year in copyright section
const date = new Date();
const year = date.getFullYear();

document.getElementById("currentYear").innerHTML = year;

// navigation toggle
const menuButton = document.getElementsByClassName("menu-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
