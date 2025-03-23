const backToTopBtn = document.getElementById("back-to-top-btn");

if (backToTopBtn) {
  backToTopBtn.style.display = "none";
}

window.onscroll = () => {
  scrollFnc();
};

const scrollFnc = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

const backToTop = () => {
  document.documentElement.scrollTop = 0;
};

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", backToTop);
}
