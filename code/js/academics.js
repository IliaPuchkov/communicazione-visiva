const headers = document.querySelectorAll(".academics-chapter-header");
const bodies = document.querySelectorAll(".academics-chapter-body");

headers.forEach((header, index) => {
  header.addEventListener("click", () => {
    // убираем активные классы
    headers.forEach((h) => h.classList.remove("header-active"));
    bodies.forEach((b) => b.classList.remove("body-active"));

    // добавляем активные
    header.classList.add("header-active");
    bodies[index].classList.add("body-active");
  });
});
