const navToggleBtn = document.querySelector(".cover__hb");
const navCloseBtn = document.querySelector(".cover__hb-close");
const navMenu = document.querySelector(".cover-bottom");

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
