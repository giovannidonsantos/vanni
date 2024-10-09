//NAVBAR / RESPONSIVENESS
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("ri-menu-fold-4-line");
  navbar.classList.toggle("open");
};

//FORM VALIDATION
var check = function () {
  if (
    document.getElementById("password").value ==
    document.getElementById("confirm_password").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "";
    document.getElementById("submit-btn").disabled = false;
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML =
      "Please make sure passwords match";
    document.getElementById("submit-btn").disabled = true;
  }
};

//PROFILE DROPDOWN MENU

const profileDropList = document.querySelector(".profile-drop-list");
const profileBtn = document.querySelector(".profile-drop-btn");
const droparrow = document.getElementById("drop-arrow");

// Toggle the dropdown when the button is clicked
profileBtn.onclick = function () {
  profileDropList.classList.toggle("active");
  // Use transform to rotate the arrow
  droparrow.style.transform = profileDropList.classList.contains("active")
    ? "rotate(-180deg)"
    : "rotate(0deg)";
};

// Close the dropdown if clicking outside of it
window.onclick = function (event) {
  // Check if the click target is not the button or the dropdown itself
  if (
    !profileBtn.contains(event.target) &&
    !profileDropList.contains(event.target)
  ) {
    droparrow.style.transform = "rotate(0deg)";
    profileDropList.classList.remove("active");
  }
};

// Prevent closing the dropdown when clicking inside it
profileDropList.addEventListener("click", function (event) {
  event.stopPropagation();
});

/**

const profileDropList = document.querySelector(".profile-drop-list");
const profileBtn = document.querySelector(".profile-drop-btn");
const droparrow = document.getElementById("drop-arrow");
profileBtn.onclick = function () {
  profileDropList.classList.toggle("active");
  droparrow.style.rotate = "-180deg";
};

window.onclick = function (event) {
  if (event.target.class !== ".profileBtn") {
      droparrow.style.rotate = "0deg";
        profileDropList.classList.remove("active");
    }
  }

document.querySelector(".profile-drop-list").addEventListener("click", function (event) {
    event.stopPropagation();
  });
*/

//LIGHT MODE IN PROGRESS

// let lightMode = localStorage.getItem("lightMode");
// const lightModeToggle = document.querySelector("#light-mode");

// // check if light mode enabled
// // if off turn on
// // if on turn off

// const enableLightMode = () => {
//   document.body.classList.add("lightMode");
//   localStorage.setItem("lightMode", "enabled");
// };
// const disableLightMode = () => {
//   document.body.classList.remove("lightMode");
//   localStorage.setItem("lightMode", null);
// };

// if (lightMode === "enabled") {
//   enableLightMode();
// }

// lightModeToggle.addEventListener("click", () => {
//   lightMode = localStorage.getItem("lightMode");
//   if (lightMode !== "enabled") {
//     enableLightMode();
//     console.log(lightMode);
//   } else {
//     disableLightMode();
//   }
// });
