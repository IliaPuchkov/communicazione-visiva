const navToggleBtn = document.querySelector(".cover__hb");
const navCloseBtn = document.querySelector(".cover__hb-close");
const navMenu = document.querySelector(".cover-bottom");
const mainContent = document.querySelector("main");

navToggleBtn.addEventListener("click", () => {
  navMenu.classList.add("hb-active");
  navToggleBtn.style.display = "none";
  navCloseBtn.style.display = "block";
});

navCloseBtn.addEventListener("click", () => {
  navMenu.classList.remove("hb-active");
  navToggleBtn.style.display = "block";
  navCloseBtn.style.display = "none";
});

mainContent.addEventListener("click", () => {
  if (navMenu.classList.contains("hb-active")) {
    navMenu.classList.remove("hb-active");
    navToggleBtn.style.display = "block";
    navCloseBtn.style.display = "none";
  }
});
