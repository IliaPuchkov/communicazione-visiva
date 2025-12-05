const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  update();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  update();
});
