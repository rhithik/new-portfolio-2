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

// sticky navigation
const nav = document.querySelector(".navbar");
const topOfNav = nav.offsetTop;

function fixNav() {
  console.log(topOfNav);
  if (window.scrollY >= topOfNav) {
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

// form validation
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  nameInput.setCustomValidity("Please enter your name.");
});

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
  emailInput.checkValidity();
});

emailInput.addEventListener("invalid", () => {
  emailInput.setCustomValidity("Please enter a valid email address.");
});

function validateEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
