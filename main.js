const backToTopBtn = document.getElementById("back-to-top");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modal = document.querySelector(".modal-overlay");
const displayModalBtn = document.getElementById("display-modal");
const toggleThemeBtn = document.getElementById("toggle-theme");

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
toggleThemeBtn.addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
