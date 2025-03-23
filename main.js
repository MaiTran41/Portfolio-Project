const backToTopBtn = document.getElementById("back-to-top-btn");
const modalCloseBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal-overlay");
const displayModalBtn = document.getElementById("display-modal-btn");
const toggleThemeBtn = document.getElementById("toggle-theme-btn");

window.onscroll = () => {
  scrollFnc();
};

const scrollFnc = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

const backToTop = () => {
  document.documentElement.scrollTop = 0;
};

const closeModal = () => {
  modal.classList.toggle("hidden");
  console.log("btn clicked");
  console.log(modal);
};

const displayModal = () => {
  modal.classList.toggle("hidden");
};

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");

  const isDarkTheme = document.body.classList.contains("dark-theme");

  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
};

backToTopBtn.addEventListener("click", backToTop);
modalCloseBtn.addEventListener("click", closeModal);
displayModalBtn.addEventListener("click", displayModal);

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const topNav = document.getElementById("top-nav");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      topNav.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll("#top-nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        topNav.classList.remove("active");
      });
    });

    const themeToggle = document.getElementById("toggle-theme-btn");
    themeToggle.addEventListener("click", function () {
      toggleTheme();

      hamburger.classList.remove("active");
      topNav.classList.remove("active");
    });
  }
});
