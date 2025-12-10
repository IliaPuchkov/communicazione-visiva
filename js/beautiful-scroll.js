const parallax = document.querySelector(".parallax-bg");
const parallaxTitle = document.querySelector(".parallax-title");
const heroSection = document.querySelector(".main__section__hero");
const cover = document.querySelector(".cover");
const coverHeiht = cover.getBoundingClientRect().height;
const sections = document.querySelectorAll(".fade-block");
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

HeroHeightCalc = () => {
  const cover = document.querySelector(".cover");
  const coverHeiht = cover.getBoundingClientRect().height;
  heroSection.style.height = `calc(100vh - ${coverHeiht}px)`;
};
SectionScrollCalc = () => {
  const cover = document.querySelector(".cover");
  const coverHeiht = cover.getBoundingClientRect().height;
  sections.forEach((section) => {
    section.style.scrollMarginTop = `${coverHeiht}px`;
  });
};

window.addEventListener("resize", () => {
  HeroHeightCalc();
});
window.addEventListener("load", () => {
  HeroHeightCalc();
});
window.addEventListener("resize", () => {
  SectionScrollCalc();
});
window.addEventListener("load", () => {
  SectionScrollCalc();
});
