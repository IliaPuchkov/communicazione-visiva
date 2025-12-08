const parallax = document.querySelector(".parallax-bg");
const parallaxTitle = document.querySelector(".parallax-title");
let latestScrollY = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  latestScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      parallax.style.transform = `translate3d(0, ${latestScrollY * 0.5}px, 0)`;
      parallaxTitle.style.transform = `translate3d(0, ${
        latestScrollY * 0.6
      }px, 0)`;
      ticking = false;
    });
    ticking = true;
  }
});
