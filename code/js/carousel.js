const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 1; // начинаем не с 0, а с первого РЕАЛЬНОГО слайда

track.style.transform = `translateX(-${100 * index}%)`;

function move() {
  track.style.transition = "0.9s cubic-bezier(.25, .8, .25, 1)";
  track.style.transform = `translateX(-${100 * index}%)`;
}

next.addEventListener("click", () => {
  index++;
  move();

  if (index === slides.length - 1) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 1;
      track.style.transform = `translateX(-${100 * index}%)`;
    }, 900);
  }
});

prev.addEventListener("click", () => {
  index--;
  move();

  if (index === 0) {
    setTimeout(() => {
      track.style.transition = "none";
      index = slides.length - 2;
      track.style.transform = `translateX(-${100 * index}%)`;
    }, 900);
  }
});
