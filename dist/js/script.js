const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Function to play sound on button hover
function playHoverSound(soundObj) {
  var hoverSound = document.getElementById(soundObj);

  hoverSound.play();
}

// Function to stop sound after button hover ends
function stopHoverSound(soundObj) {
  var hoverSound = document.getElementById(soundObj);

  hoverSound.pause();
  hoverSound.currentTime = 0;
}

// Variables to track Popup, Overlay
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");

// Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}
